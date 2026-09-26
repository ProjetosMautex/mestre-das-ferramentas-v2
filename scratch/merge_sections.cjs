const fs = require('fs');

const path = 'src/components/ParafusadeiraBoschGsr1000SmartEBoa.tsx';
let content = fs.readFileSync(path, 'utf8');

const targetToReplace = `          <section className="mt-16">
            <h2 className="text-3xl font-extrabold text-slate-900 border-b-4 border-[#FFD700] pb-2 mb-6">Uma das menores parafusadeiras do mercado</h2>
            
            <div className="w-full flex justify-center mb-8 mt-6">
                 <img src="/images/blog/1/Ergonomia e tamanho compacto da parafusadeira Bosch cabendo na palma da mão - Nova.webp" alt="Ergonomia e tamanho compacto da parafusadeira Bosch cabendo na palma da mão" title="Ergonomia e tamanho compacto da parafusadeira Bosch cabendo na palma da mão" className="max-h-96 object-contain rounded-xl shadow-md" loading="lazy" />
            </div>

            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Quem já teve que parafusar a corrediça de uma gaveta funda ou fixar uma prateleira no fundo de um guarda-roupa escuro sabe o pesadelo que é tentar manobrar uma ferramenta volumosa.</p>
              <p>Você fica sem ângulo, a ponta do bit escapa e o parafuso espana.</p>
              <p>A GSR 1000 Smart brilha justamente aqui: com menos de 1 kg na mão, ela é tão compacta que parece uma extensão do seu próprio punho.</p>
              <p>Esse formato reduzido não é apenas uma questão de estética, mas de ergonomia pura.</p>
              <p>Você consegue trabalhar por horas seguidas fazendo pequenos consertos sem sentir aquela fisgada clássica no pulso e nos tendões.</p>
              <p>É o fim da ginástica para alcançar cantos estreitos, oferecendo a agilidade que a manutenção doméstica realmente pede.</p>
            </div>
          </section>

          <BunnerDoMeio />

          <section className="mt-16">
            <h2 className="text-3xl font-extrabold text-slate-900 border-b-4 border-[#FFD700] pb-2 mb-6">Parafusadeira Bosch GSR 1000 Smart: Leveza e Versatilidade para Profissionais</h2>
            
            <div className="w-full flex justify-center mb-8 mt-6">
                 <img src="/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Bosch GSR 1000.webp" alt="Parafusadeira Furadeira Bosch GSR 1000 Smart em destaque demonstrando leveza" title="Parafusadeira Furadeira Bosch GSR 1000 Smart em destaque demonstrando leveza" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>

            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Não se engane achando que ela serve apenas para quem nunca pegou numa ferramenta antes.</p>
              <p>Em duas décadas de profissão, perdi a conta de quantos marceneiros, eletricistas e instaladores de ar-condicionado mantêm essa belezinha no cinto de utilidades.</p>
              <p>O grande truque aqui é a divisão de trabalho: ninguém quer segurar uma máquina pesada de 18V o dia todo só para apertar parafusos de tomadas ou montar caixotes de móveis planejados.</p>
              <p>Pesando cerca de 0,9 kg e equipada com mandril de aperto rápido de 1/4 de polegada, ela permite alternar pontas com rapidez impressionante.</p>
              <p>Além disso, o gatilho eletrônico progressivo dá o controle fino que você precisa: apertou devagar, ela gira suave; apertou tudo, entrega a rotação máxima, evitando que você rasgue a madeira ao dar o aperto final.</p>
            </div>
          </section>`;

const replacement = `          <section className="mt-16">
            <h2 className="text-3xl font-extrabold text-slate-900 border-b-4 border-[#FFD700] pb-2 mb-6">Uma das menores parafusadeiras do mercado</h2>
            
            <div className="w-full flex justify-center mb-8 mt-6">
                 <img src="/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Bosch GSR 1000.webp" alt="Parafusadeira Furadeira Bosch GSR 1000 Smart em destaque demonstrando leveza" title="Parafusadeira Furadeira Bosch GSR 1000 Smart em destaque demonstrando leveza" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>

            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Quem já teve que parafusar a corrediça de uma gaveta funda ou fixar uma prateleira no fundo de um guarda-roupa escuro sabe o pesadelo que é tentar manobrar uma ferramenta volumosa.</p>
              <p>Você fica sem ângulo, a ponta do bit escapa e o parafuso espana.</p>
              <p>A GSR 1000 Smart brilha justamente aqui: com menos de 1 kg na mão, ela é tão compacta que parece uma extensão do seu próprio punho.</p>
              <p>Esse formato reduzido não é apenas uma questão de estética, mas de ergonomia pura.</p>
              <p>Você consegue trabalhar por horas seguidas fazendo pequenos consertos sem sentir aquela fisgada clássica no pulso e nos tendões.</p>
              <p>É o fim da ginástica para alcançar cantos estreitos, oferecendo a agilidade que a manutenção doméstica realmente pede.</p>
              <p>Não se engane achando que ela serve apenas para quem nunca pegou numa ferramenta antes.</p>
              <p>Profissionais como eletricistas e instaladores também mantêm essa belezinha no cinto de utilidades devido a sua versatilidade.</p>
              <p>O grande truque aqui é a divisão de trabalho: ninguém quer segurar uma máquina pesada de 18V o dia todo só para apertar parafusos de tomadas ou montar caixotes de móveis planejados.</p>
              <p>Equipada com mandril de aperto rápido de 1/4 de polegada, ela permite alternar pontas com rapidez impressionante.</p>
              <p>Além disso, o gatilho eletrônico progressivo dá o controle fino que você precisa: apertou devagar, ela gira suave; apertou tudo, entrega a rotação máxima, evitando que você rasgue a madeira ao dar o aperto final.</p>
            </div>
          </section>

          <BunnerDoMeio />`;

content = content.replace(targetToReplace, replacement);

fs.writeFileSync(path, content);
console.log('Replaced the text blocks successfully.');
