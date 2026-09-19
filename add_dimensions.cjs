const fs = require('fs');
let content = fs.readFileSync('src/components/MelhorParafusadeira.tsx', 'utf8');

content = content.replace(/<img([^>]*)className="max-h-80 object-contain mix-blend-multiply"([^>]*)>/g, (match, prefix, suffix) => {
    if (!prefix.includes('width=') && !suffix.includes('width=')) {
        return `<img${prefix}className="max-h-80 object-contain mix-blend-multiply" width="800" height="533"${suffix}>`;
    }
    return match;
});

fs.writeFileSync('src/components/MelhorParafusadeira.tsx', content, 'utf8');
console.log('Added dimensions successfully.');
