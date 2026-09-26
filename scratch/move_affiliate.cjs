const fs = require('fs');

const path = 'src/components/ParafusadeiraBoschGsr1000SmartEBoa.tsx';
let content = fs.readFileSync(path, 'utf8');

// The section to remove
const sectionToRemove = `          <section className="mt-16 pt-8 scroll-mt-24" id="bosch-gsr-1000-smart">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Parafusadeira Furadeira Bosch GSR 1000</h3>
            
            <div className="w-full flex justify-center mb-8 mt-6">
                 <img src="/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Bosch GSR 1000.webp" alt="Kit da Parafusadeira Bosch GSR 1000 Smart com maleta e bits" title="Kit da Parafusadeira Bosch GSR 1000 Smart com maleta e bits" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>

            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-8">
              <p>O grande mérito desta parafusadeira para quem está montando os primeiros móveis ou quer cuidar da própria casa é a facilidade de uso: a curva de aprendizado é praticamente zero.</p>
              <p>Você não precisa de chaves extras para prender as brocas, pois o mandril de troca rápida segura o bit de forma firme com um simples clique manual.</p>
              <p>Ao abrir a maleta de transporte, você já encontra um kit funcional com carregador, extensor universal magnético e as ponteiras essenciais para começar a trabalhar de imediato.</p>
              <p>Para completar, o LED frontal aponta diretamente para o ponto de contato do parafuso, eliminando sombras irritantes quando você está enfiado dentro de um gabinete escuro.</p>
              <p>É uma ferramenta feita para você tirar da caixa e já sair resolvendo pendências.</p>
            </div>
            
            <AffiliateCard id="parafusadeira-bosch-gsr-1000" />
          </section>`;

// Replace with empty string
content = content.replace(sectionToRemove, '');

// The block to replace to inject the AffiliateCard
const targetBlock = `<p>A ausência de função de impacto deixa cristalino o propósito do equipamento: ele foi feito para marcenaria, montagem de kits e fixações leves em materiais maleáveis, não para furar concreto ou vigas estruturais.</p>
            </div>
          </section>`;

const replacementBlock = `<p>A ausência de função de impacto deixa cristalino o propósito do equipamento: ele foi feito para marcenaria, montagem de kits e fixações leves em materiais maleáveis, não para furar concreto ou vigas estruturais.</p>
            </div>
            
            <div className="mt-12" id="bosch-gsr-1000-smart">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Parafusadeira Furadeira Bosch GSR 1000</h3>
              <AffiliateCard id="parafusadeira-bosch-gsr-1000" />
            </div>
          </section>`;

content = content.replace(targetBlock, replacementBlock);

fs.writeFileSync(path, content);
console.log('Modifications completed.');
