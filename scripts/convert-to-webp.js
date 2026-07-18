import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const SRC_DIR = path.resolve('src');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

async function convertImages() {
  const allPublicFiles = getAllFiles(PUBLIC_DIR);
  const imagesToConvert = allPublicFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg'].includes(ext);
  });

  if (imagesToConvert.length === 0) {
    console.log('Nenhuma imagem PNG/JPG encontrada para converter.');
    return;
  }

  let convertedCount = 0;
  for (const filePath of imagesToConvert) {
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const baseName = path.basename(filePath, ext);
    const newFilePath = path.join(dir, `${baseName}.webp`);

    try {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(newFilePath);
      
      fs.unlinkSync(filePath);
      console.log(`Convertido: ${path.basename(filePath)} -> .webp`);
      convertedCount++;

      updateReferencesInCode(filePath, newFilePath);
    } catch (err) {
      console.error(`Erro ao converter ${path.basename(filePath)}:`, err);
    }
  }
  
  console.log(`\nProcesso concluído! ${convertedCount} imagens convertidas para WebP.`);
}

function updateReferencesInCode(oldFilePath, newFilePath) {
  // Converte os caminhos absolutos do Windows para caminhos relativos do site (/images/...)
  const publicRelativeOldPath = oldFilePath.replace(PUBLIC_DIR, '').replace(/\\/g, '/');
  const publicRelativeNewPath = newFilePath.replace(PUBLIC_DIR, '').replace(/\\/g, '/');
  
  const allSrcFiles = getAllFiles(SRC_DIR).filter(f => ['.tsx', '.astro', '.ts', '.js'].includes(path.extname(f)));
  
  for (const srcFile of allSrcFiles) {
    let content = fs.readFileSync(srcFile, 'utf8');
    if (content.includes(publicRelativeOldPath)) {
      // Faz o replace do caminho da imagem no código fonte
      // Escape characters for regex
      const safeOldPath = publicRelativeOldPath.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
      content = content.replace(new RegExp(safeOldPath, 'g'), publicRelativeNewPath);
      fs.writeFileSync(srcFile, content, 'utf8');
      console.log(`  -> Referência atualizada no código: ${path.basename(srcFile)}`);
    }
  }
}

console.log('Iniciando conversão de imagens para WebP...');
convertImages();
