
const fs = require('fs');
let content = fs.readFileSync('src/components/OQueEBrocaEscalonada.tsx', 'utf8');
content = content.replace(/width=\{800\}\s+height=\{533\}/g, 'width={800}\n                height={537}');
fs.writeFileSync('src/components/OQueEBrocaEscalonada.tsx', content, 'utf8');
console.log('Fixed aspect ratio');

