const fs = require('fs');
let content = fs.readFileSync('src/components/MelhorParafusadeiraDewalt.tsx', 'utf8');

const startTag = '<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 scroll-mt-24" id="dcd996b">';
const endTag = '              {/* DCF887B-B3 */}';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

const oldBlock = content.substring(startIndex, endIndex);

const newBlock = `<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 scroll-mt-24" id="dcd996b">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">DeWalt DCD996P2T-BR-1</h3>
                <div className="w-full flex justify-center mb-6">
                   <img src="/images/blog/Parafusadeira Furadeira Dcd996 20v.webp" alt="DeWalt DCD996P2T-BR-1" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>A DeWalt DCD996P2T-BR-1 é uma furadeira, parafusadeira e martelete sem fio equipada com motor Brushless, alimentada por duas baterias Li-Ion de 20V e 5 Ah.</p>
                  <p>O kit acompanha 2 baterias, carregador bivolt e maleta de transporte.</p>
                  <p>A ferramenta possui mandril de 13 mm, controle de torque, função reversa, velocidade variável de 450 a 2.000 rpm e até 38.250 impactos por minuto, além de iluminação LED de 3 modos.</p>
                  <p>A capacidade máxima de perfuração é de 13 mm em madeira e 13 mm em metal, e o conjunto conta com empunhadura Soft Grip para maior conforto durante o uso.</p>
                  <p>A DeWalt informa 3 anos de garantia de fábrica para o produto.</p>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><Check className="w-4 h-4"/> Prós:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Motor Brushless de alta performance</li>
                      <li>Duas baterias de 5 Ah e carregador inclusos</li>
                      <li>Iluminação LED com 3 modos</li>
                      <li>Mandril de 13 mm com até 38.250 IPM</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2"><X className="w-4 h-4"/> Contras:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      <li>Investimento mais elevado</li>
                    </ul>
                  </div>
                </div>

                <AffiliateCard id="Parafusadeira Furadeira Dcd996 20v" />
              </div>

`;

content = content.replace(oldBlock, newBlock);
fs.writeFileSync('src/components/MelhorParafusadeiraDewalt.tsx', content, 'utf8');
