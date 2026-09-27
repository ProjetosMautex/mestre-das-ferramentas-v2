const fs = require('fs');

// 1. Fix AffiliateCard.tsx
let f1 = 'src/components/AffiliateCard.tsx';
let c1 = fs.readFileSync(f1, 'utf8');
c1 = c1.replace(
  /<a([^>]*)className=["']([^"']*)["']([^>]*)>([\s\S]*?)<\/a>/g,
  (match, p1, p2, p3, p4) => {
    if (!p1.includes('aria-label') && !p3.includes('aria-label')) {
      return `<a${p1}className="${p2}"${p3} aria-label={"Ver preço de " + (product.name || "produto")}>${p4}</a>`;
    }
    return match;
  }
);
fs.writeFileSync(f1, c1);

// 2. Fix ParafusadeiraBlackToolsEBoa.tsx
let f2 = 'src/components/ParafusadeiraBlackToolsEBoa.tsx';
let c2 = fs.readFileSync(f2, 'utf8');

// A. Carousel arrows
c2 = c2.replace(
  /<button\s+onClick=\{\(\) => setCarouselIndex\(\(prev\) => \(prev === 0 \? carouselProducts\.length - 1 : prev - 1\)\)\}\s+className="p-3 bg-white[^>]*>/g,
  '<button onClick={() => setCarouselIndex((prev) => (prev === 0 ? carouselProducts.length - 1 : prev - 1))} className="p-3 bg-white rounded-full border border-gray-200 hover:bg-slate-100 transition-colors shadow-sm focus:ring-2 ring-[#FFD700]" aria-label="Imagem Anterior">'
);
c2 = c2.replace(
  /<button\s+onClick=\{\(\) => setCarouselIndex\(\(prev\) => \(prev === carouselProducts\.length - 1 \? 0 : prev \+ 1\)\)\}\s+className="p-3 bg-white[^>]*>/g,
  '<button onClick={() => setCarouselIndex((prev) => (prev === carouselProducts.length - 1 ? 0 : prev + 1))} className="p-3 bg-white rounded-full border border-gray-200 hover:bg-slate-100 transition-colors shadow-sm focus:ring-2 ring-[#FFD700]" aria-label="Próxima Imagem">'
);

// B. Carousel dots (Touch target)
// Original: 
// <button 
//   key={i}
//   onClick={() => setCarouselIndex(i)}
//   className={`h-2.5 rounded-full transition-all ${
//     carouselIndex === i ? 'w-10 bg-[#FFD700]' : 'w-3 bg-gray-300 hover:bg-gray-400'
//   }`}
//   aria-label={`Ir para o produto ${i + 1}`}
// />
// Replace with:
c2 = c2.replace(
  /<button\s+key=\{i\}\s+onClick=\{\(\) => setCarouselIndex\(i\)\}\s+className=\{`h-2\.5 rounded-full transition-all \$\{\s*carouselIndex === i \? 'w-10 bg-\[#FFD700\]' : 'w-3 bg-gray-300 hover:bg-gray-400'\s*\}\`\}\s+aria-label=\{`Ir para o produto \$\{i \+ 1\}`\}\s*\/>/g,
  `<button 
    key={i}
    onClick={() => setCarouselIndex(i)}
    className="w-10 h-10 flex items-center justify-center focus:outline-none"
    aria-label={\`Ir para o produto \${i + 1}\`}
  >
    <span className={\`h-2.5 rounded-full transition-all \${
      carouselIndex === i ? 'w-10 bg-[#FFD700]' : 'w-3 bg-gray-300 hover:bg-gray-400'
    }\`} />
  </button>`
);

// C. Headings
// <h3>Qual será o uso principal... -> <h2>
c2 = c2.replace(
  /<h3 className="text-xl md:text-2xl font-bold mb-4 text-white">\s*Qual será o uso principal da sua nova ferramenta\?\s*<\/h3>/g,
  '<h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Qual será o uso principal da sua nova ferramenta?</h2>'
);

// <h4> A The Black Tools foi feita para você! -> <h3>
c2 = c2.replace(
  /<h4 className="text-\[#FFD700\] font-black text-lg mb-2 flex items-center gap-2">/g,
  '<h3 className="text-[#FFD700] font-black text-lg mb-2 flex items-center gap-2">'
);
c2 = c2.replace(/<\/h4>(\s*<p className="text-gray-300)/g, '</h3>$1');

// <h5> O que convence (Prós) -> <h3>
c2 = c2.replace(/<h5 className="font-black text-emerald-800/g, '<h3 className="font-black text-emerald-800');
c2 = c2.replace(/<h5 className="font-black text-red-800/g, '<h3 className="font-black text-red-800');
c2 = c2.replace(/O que convence \(Prós\)<\/h5>/g, 'O que convence (Prós)</h3>');
c2 = c2.replace(/Onde ela derrapa \(Contras\)<\/h5>/g, 'Onde ela derrapa (Contras)</h3>');

// Equipamentos em destaque <h4> -> <h3>
c2 = c2.replace(/<h4 className="font-bold text-gray-900 text-2xl mt-2">Equipamentos em Destaque<\/h4>/g, '<h3 className="font-bold text-gray-900 text-2xl mt-2">Equipamentos em Destaque</h3>');

// Carousel item title <h5> -> <h4>
c2 = c2.replace(/<h5 className="font-bold text-gray-900 text-xl md:text-2xl mb-3">/g, '<h4 className="font-bold text-gray-900 text-xl md:text-2xl mb-3">');
c2 = c2.replace(/\{carouselProducts\[carouselIndex\]\.title\}<\/h5>/g, '{carouselProducts[carouselIndex].title}</h4>');

fs.writeFileSync(f2, c2);

console.log('Fixed Acessibility issues.');
