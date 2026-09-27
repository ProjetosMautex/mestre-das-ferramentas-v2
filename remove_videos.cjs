const fs = require('fs');

// 1. MelhorParafusadeiraCustoBeneficio.tsx
let f1 = 'src/components/MelhorParafusadeiraCustoBeneficio.tsx';
let c1 = fs.readFileSync(f1, 'utf8');
c1 = c1.replace(/<section className="my-12">\s*<h2[^>]*>📺 Veja nosso teste na prática:<\/h2>[\s\S]*?<\/section>/g, '');
fs.writeFileSync(f1, c1);

// 2. MelhoresMarcasFuradeira.tsx
let f2 = 'src/components/MelhoresMarcasFuradeira.tsx';
let c2 = fs.readFileSync(f2, 'utf8');
c2 = c2.replace(/\{\/\*\s*VÍDEO COMPLEMENTAR[\s\S]*?<\/div>/g, '');
fs.writeFileSync(f2, c2);

// 3. ParafusadeiraBlackToolsEBoa.tsx
let f3 = 'src/components/ParafusadeiraBlackToolsEBoa.tsx';
let c3 = fs.readFileSync(f3, 'utf8');
c3 = c3.replace(/\{\/\*\s*VÍDEO DO YOUTUBE\s*\*\/\}[\s\S]*?Use brocas novas!<\/p>\s*<\/div>/g, '');
fs.writeFileSync(f3, c3);

console.log('Removed text blocks.');
