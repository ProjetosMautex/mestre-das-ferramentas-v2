const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function updateLinks(directory) {
  const pattern = /href="\/([a-zA-Z0-9-]+)"/g;

  walkDir(directory, function(filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.astro') || filePath.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      const newContent = content.replace(pattern, 'href="/$1/"');
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Updated ${filePath}`);
      }
    }
  });
}

updateLinks('src');
