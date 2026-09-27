const fs = require('fs');
let content = fs.readFileSync('src/components/MelhorParafusadeiraCustoBeneficio.tsx', 'utf-8');
content = content.replace(/alt=["']Redator Severino Torquato["']/g, 'alt=""');
fs.writeFileSync('src/components/MelhorParafusadeiraCustoBeneficio.tsx', content);

let content2 = fs.readFileSync('src/components/MelhoresMarcasFuradeira.tsx', 'utf-8');
content2 = content2.replace(/alt=["']Redator Severino Torquato["']/g, 'alt=""');
content2 = content2.replace(/alt=["']Severino Torquato["']/g, 'alt=""');
fs.writeFileSync('src/components/MelhoresMarcasFuradeira.tsx', content2);
