const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const fileExtensions = ['.tsx', '.ts', '.astro', '.md', '.mdx', '.html'];

function updateLinks(directory) {
  // Regex para achar links href="..." ou href={'...'}
  // 1. href="/caminho" (que no termina em barra, nem arquivo com extenso, nem hash)
  // 2. href="https://mestredasferramentas.com.br/caminho" (mesma regra)
  const patternRelative = /href=["'](\/(?:[^\/"'\?#]+(?:\/[^\/"'\?#]+)*))["']/g;
  const patternAbsolute = /href=["'](https?:\/\/(?:www\.)?mestredasferramentas\.com\.br\/(?:[^\/"'\?#]+(?:\/[^\/"'\?#]+)*))["']/g;

  walkDir(directory, function(filePath) {
    if (fileExtensions.some(ext => filePath.endsWith(ext))) {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      let newContent = content;
      
      newContent = newContent.replace(patternRelative, (match, p1) => {
        // ignora se terminar com extenso como .webp, .jpg, .png, etc.
        if (/\.[a-zA-Z0-9]+$/.test(p1)) return match;
        // ignora home "/"
        if (p1 === '/') return match;
        return `href="${p1}/"`;
      });

      newContent = newContent.replace(patternAbsolute, (match, p1) => {
        if (/\.[a-zA-Z0-9]+$/.test(p1)) return match;
        if (p1 === 'https://mestredasferramentas.com.br/' || p1 === 'https://mestredasferramentas.com.br') return match;
        return `href="${p1}/"`;
      });
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Updated ${filePath}`);
      }
    }
  });
}

updateLinks('src');
updateLinks('public');
