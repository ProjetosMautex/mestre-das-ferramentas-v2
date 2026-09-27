const fs = require('fs');

const files = [
    'src/components/MelhorParafusadeiraCustoBeneficio.tsx',
    'src/components/MelhoresMarcasFuradeira.tsx',
    'src/components/ParafusadeiraBlackToolsEBoa.tsx'
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');

    // 1. Remove Youtube
    content = content.replace(/<div[^>]*className=["'][^"']*aspect-video[^"']*["'][^>]*>\s*<iframe[^>]*youtube\.com[^>]*>.*?<\/iframe>\s*<\/div>/gsv, '');
    content = content.replace(/<iframe[^>]*youtube\.com[^>]*>.*?<\/iframe>/gsv, '');

    // 2. Add fetchpriority to hero image
    let firstImgMatch = content.match(/<img[^>]+>/);
    if (firstImgMatch && !firstImgMatch[0].includes('fetchpriority')) {
        let newImg = firstImgMatch[0].replace('<img ', '<img fetchpriority="high" ');
        newImg = newImg.replace(/loading=["']lazy["']\s*/, '');
        content = content.replace(firstImgMatch[0], newImg);
    }

    // 3. Fix Author image (Severino Torquato)
    content = content.replace(/alt=["']Severino Torquato["']/g, 'alt=""');
    content = content.replace(/(<img[^>]*src=["']\/images\/SeverinoTorquato\.webp["'][^>]*)className=["']([^"']*)["']([^>]*>)/g, (match, p1, p2, p3) => {
        if (!p2.includes('object-cover')) {
            return `${p1}className="${p2} object-cover"${p3}`;
        }
        return match;
    });

    // 4. Fix missing width/height on images
    content = content.replace(/<img[^>]+>/g, (imgTag) => {
        let newImg = imgTag;
        if (!/width=/.test(imgTag)) {
            newImg = newImg.replace('<img ', '<img width="500" ');
        }
        if (!/height=/.test(imgTag)) {
            newImg = newImg.replace('<img ', '<img height="500" ');
        }
        return newImg;
    });

    // 5. Contrast fixes
    content = content.replace(/text-emerald-600/g, 'text-emerald-700');
    content = content.replace(/text-amber-600/g, 'text-amber-700');

    // 6. Touch targets for carousel buttons (dots)
    content = content.replace(/w-3 h-2\.5/g, 'w-3 h-3 m-2');

    // 7. Aria-label for identical links
    let index = 0;
    content = content.replace(/<a([^>]*)>(.*?)Ver Preço(.*?)<\/a>/gsv, (match, attrs, before, after) => {
        if (attrs.includes('aria-label')) return match;
        index++;
        return `<a${attrs} aria-label="Ver preço do produto ${index}">${before}Ver Preço${after}</a>`;
    });
    
    let indexOfertas = 0;
    content = content.replace(/<a([^>]*)>(.*?)Ver Ofertas(.*?)<\/a>/gsv, (match, attrs, before, after) => {
        if (attrs.includes('aria-label')) return match;
        indexOfertas++;
        return `<a${attrs} aria-label="Ver ofertas do produto ${indexOfertas}">${before}Ver Ofertas${after}</a>`;
    });

    // Fix carousel arrows
    content = content.replace(/(<button[^>]*class(?:Name)?=["'][^"']*absolute[^"']*["'])([^>]*)>/gi, (match, p1, p2) => {
        if (!p1.includes('aria-label') && !p2.includes('aria-label')) {
            return `${p1}${p2} aria-label="Navegar imagem do carrossel">`;
        }
        return match;
    });

    // Fix identical link aria-labels specifically for "Ir para o produto" inside buttons
    let buttonIndex = 0;
    content = content.replace(/<button([^>]*)aria-label=["']Ir para o produto["']([^>]*)>/g, (match, p1, p2) => {
        buttonIndex++;
        return `<button${p1}aria-label="Ir para o produto ${buttonIndex}"${p2}>`;
    });

    fs.writeFileSync(file, content);
}
console.log('Done');
