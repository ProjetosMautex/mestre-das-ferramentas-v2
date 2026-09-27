const fs = require('fs');
let c = fs.readFileSync('src/components/MelhoresMarcasFuradeira.tsx', 'utf8');

let startIndex = c.indexOf('{/* VÍDEO COMPLEMENTAR / RETENÇÃO: COMPARATIVO PRÁTICO BOSCH vs MAKITA vs DEWALT */}');
let endIndex = c.indexOf('{/* DIVISOR CUSTO-BENEFÍCIO */}');
if (startIndex !== -1 && endIndex !== -1) {
    let toReplace = c.substring(startIndex, endIndex);
    c = c.replace(toReplace, '');
    fs.writeFileSync('src/components/MelhoresMarcasFuradeira.tsx', c);
    console.log('Removed successfully.');
} else {
    console.log('Not found');
}
