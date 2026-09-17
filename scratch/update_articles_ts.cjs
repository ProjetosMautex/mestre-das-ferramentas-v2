const fs = require('fs');

const filePath = 'src/data/articles.ts';
const content = fs.readFileSync(filePath, 'utf-8');

// match url: "/something"
const pattern = /url:\s*"\/([a-zA-Z0-9-]+)"/g;
const newContent = content.replace(pattern, 'url: "/$1/"');

if (newContent !== content) {
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log('Updated articles.ts');
} else {
  console.log('No changes made');
}
