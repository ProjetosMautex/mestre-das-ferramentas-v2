const fs = require('fs');
let content = fs.readFileSync('src/components/MelhorParafusadeira20V.tsx', 'utf8');

// 1. Update featuredIds
content = content.replace(
  '"Parafusadeira DeWalt Max XR DCD996B - Melhor parafusadeira 20V"',
  '"Parafusadeira Furadeira Dcd996 20v"'
);

// 2. Update productImages map
content = content.replace(
  '"Parafusadeira DeWalt Max XR DCD996B - Melhor parafusadeira 20V": "/images/blog/melhor-furadeira-e-parafusadeira/Parafusadeira-DeWalt-Max-XR-DCD996B.webp",',
  '"Parafusadeira Furadeira Dcd996 20v": "/images/blog/Parafusadeira Furadeira Dcd996 20v.webp",'
);

// 3. Replace the text block
const startTag = '{/* 6. Parafusadeira DeWalt Max XR DCD996B */}';
const endTag = '          {/* 7. VONDER PFV 238 */}';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
  const oldBlock = content.substring(startIndex, endIndex);

  const newBlock = `{/* 6. DeWalt DCD996P2T-BR-1 */}
          <section id="Parafusadeira-Furadeira-Dcd996-20v" className="scroll-mt-24 pt-8 border-t border-gray-100">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
              DeWalt DCD996P2T-BR-1
            </h2>
            <div className="w-full flex justify-center mb-8">
               <img src={productImages["Parafusadeira Furadeira Dcd996 20v"]} alt="DeWalt DCD996P2T-BR-1" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>A DeWalt DCD996P2T-BR-1 é uma furadeira, parafusadeira e martelete sem fio equipada com motor Brushless, alimentada por duas baterias Li-Ion de 20V e 5 Ah.</p>
              <p>O kit acompanha 2 baterias, carregador bivolt e maleta de transporte.</p>
              <p>A ferramenta possui mandril de 13 mm, controle de torque, função reversa, velocidade variável de 450 a 2.000 rpm e até 38.250 impactos por minuto, além de iluminação LED de 3 modos.</p>
              <p>A capacidade máxima de perfuração é de 13 mm em madeira e 13 mm em metal, e o conjunto conta com empunhadura Soft Grip para maior conforto durante o uso.</p>
              <p>A DeWalt informa 3 anos de garantia de fábrica para o produto.</p>
            </div>
            <AffiliateCard id="Parafusadeira Furadeira Dcd996 20v" />
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-green-700"><Check size={16} className="mt-1 flex-shrink-0" /> <span>Motor Brushless de alta performance</span></li>
                  <li className="flex items-start gap-2 text-green-700"><Check size={16} className="mt-1 flex-shrink-0" /> <span>Duas baterias de 5 Ah e carregador inclusos</span></li>
                  <li className="flex items-start gap-2 text-green-700"><Check size={16} className="mt-1 flex-shrink-0" /> <span>Iluminação LED com 3 modos</span></li>
                  <li className="flex items-start gap-2 text-green-700"><Check size={16} className="mt-1 flex-shrink-0" /> <span>Mandril de 13 mm com até 38.250 IPM</span></li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-red-700"><X size={16} className="mt-1 flex-shrink-0" /> <span>Investimento mais elevado</span></li>
                </ul>
              </div>
            </div>
          </section>

`;
  content = content.replace(oldBlock, newBlock);
}

fs.writeFileSync('src/components/MelhorParafusadeira20V.tsx', content, 'utf8');
