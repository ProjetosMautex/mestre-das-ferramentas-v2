import React from 'react';

import { AffiliateCard } from './AffiliateCard';
import { BunnerDoMeio } from './BunnerDoMeio';
import { products, type ProductId } from '../data/products';
import { Check, X, Info } from 'lucide-react';

export const ParafusadeiraHammerEBoa: React.FC = () => {
  const featuredIds: ProductId[] = [
    "Parafusadeira Hammer PLI-10",
    "Furadeira Hammer GYFI-1000",
    "Parafusadeira e Furadeira Hammer GYPLI120"
  ];

  return (
    <>
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/melhores-marcas-de-furadeira/parafusadeira-hammer-e-boa.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Parafusadeira Hammer é boa? <br/>
              <span className="text-[#FFD700]">Testei e conto se vale a pena</span> <br/>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span>Por</span>
                <a href="/author/severino-torquato" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors font-semibold group">
                  <img 
                    src="/images/autores/severino-torquato.webp" 
                    alt="Severino Torquato" 
                    className="w-8 h-8 rounded-full border-2 border-[#FFD700] group-hover:scale-110 transition-transform"
                  />
                  Severino Torquato
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 mb-8">
              Se você está em busca de uma ferramenta confiável para facilitar seus projetos de montagem e reparo, a Parafusadeira Hammer pode ter chamado sua atenção.
            </p>
            <p>
              Mas será que ela entrega o que promete?
            </p>
            <p>
              Neste artigo, vou compartilhar minha experiência com essa parafusadeira e analisar se realmente vale a pena investir nela.
            </p>
            <p>
              Prepare-se para descobrir se essa ferramenta se destaca no que faz!
            </p>
          </div>

          {/* Vitrine / Showcase Table */}
          <div className="mb-16 max-w-[800px] mx-auto bg-slate-50 p-2.5 rounded-lg sm:p-5">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Ferramentas Hammer</h2>
            
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
              <tbody>
                {featuredIds.map((id) => {
                  const product = products[id];
                  let nameImage = product.name;
                  if (id === "Parafusadeira Hammer PLI-10") nameImage = "Parafusadeira-Hammer-12V-PLI-10";
                  if (id === "Furadeira Hammer GYFI-1000") nameImage = "Furadeira-de-Impacto-Hammer-550W-GYFI-1000";
                  if (id === "Parafusadeira e Furadeira Hammer GYPLI120") nameImage = "Parafusadeira-e-Furadeira-12V-Hammer-GYPLI120";

                  return (
                    <tr key={id} className="border-b border-slate-200 last:border-b-0">
                      <td className="w-[65px] p-2 align-middle text-center sm:w-[80px] sm:p-3">
                        <div className="w-[40px] h-[40px] border border-slate-100 rounded flex items-center justify-center p-0.5 sm:w-[60px] sm:h-[60px] mx-auto">
                          <img 
                            src={`/images/blog/melhores-marcas-de-furadeira/${nameImage}.webp`}
                            alt={product.name} 
                            width="60"
                            height="60"
                            className="max-w-full max-h-full block object-contain mix-blend-multiply"
                            loading="lazy"
                          />
                        </div>
                      </td>
                      <td className="p-2 align-middle sm:p-4">
                        <div className="text-[14px] font-bold leading-tight line-clamp-3 text-slate-700 m-0 sm:text-[16px]">
                          {product.name}
                        </div>
                      </td>
                      <td className="w-[90px] p-2 align-middle text-right sm:w-[140px] sm:p-4">
                        <a 
                          href={product.link}
                          target="_blank"
                          rel="nofollow"
                          className="bg-[#FFD700] text-[#1a1a1a] font-bold no-underline text-[11px] py-1.5 px-2.5 rounded whitespace-nowrap inline-block hover:opacity-90 sm:py-2.5 sm:px-5 sm:text-[14px]"
                        >
                          Ver Preço
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Detailed Reviews */}
          <div className="space-y-16 flex flex-col pt-8">
            
            <section id="Parafusadeira-Hammer-12V-PLI-10" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Parafusadeira Hammer 12V PLI-10
              </h2>
              <div className="w-full flex justify-center mb-8">
                 <img src="/images/blog/melhores-marcas-de-furadeira/Parafusadeira-Hammer-12V-PLI-10.webp" alt="Parafusadeira Hammer PLI-10" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Parafusadeira Hammer 12V PLI-10 combina potência e praticidade para quem busca eficiência em pequenos reparos e montagens domésticas.</p>
                <p>Compacta e leve, conta com bateria recarregável de 12V, mandril de 3/8″ (10 mm) e sistema de velocidade variável que garante maior controle durante o uso.</p>
                <p>Possui rotação reversível e ajuste de torque 19+1. Para usuários iniciantes, é comum que o mandril pareça rígido nas primeiras utilizações; nesse caso, saber <a href="/como-destravar-parafusadeira/" className="text-blue-600 hover:underline font-medium">como destravar o mandril da parafusadeira</a> corretamente evita que você force o motor ou danifique o seletor de torque desnecessariamente.</p>
                <p>A bateria é removível e o carregador é bivolt, oferecendo conveniência e portabilidade.</p>
              </div>

              <div className="mt-8 flex justify-center">
                <a 
                  href={products["Parafusadeira Hammer PLI-10"].link}
                  target="_blank"
                  rel="nofollow"
                  className="bg-[#FFD700] text-[#1a1a1a] font-bold no-underline text-lg py-3 px-8 rounded-lg whitespace-nowrap inline-block hover:opacity-90 transition-opacity"
                >
                  Clique aqui para ver o preço
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Leve e fácil de manusear</li>
                    <li>Velocidade variável</li>
                    <li>Bateria removível</li>
                    <li>Boa ergonomia</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Uso limitado a tarefas leves</li>
                    <li>Não acompanha acessórios</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="Furadeira-Hammer-GYFI-1000" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Furadeira de Impacto Hammer 550W GYFI-1000
              </h2>
              <div className="w-full flex justify-center mb-8">
                 <img src="/images/blog/melhores-marcas-de-furadeira/Furadeira-de-Impacto-Hammer-550W-GYFI-1000.webp" alt="Furadeira Hammer GYFI-1000" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Furadeira de Impacto Hammer 500W GYFI-1000 é potente e versátil, ideal para uso doméstico e pequenos trabalhos.</p>
                <p>Com 500W, perfura madeira, metal e alvenaria com eficiência.</p>
                <p>Design ergonômico e leve, com punho auxiliar e mandril de 3/8″ (10 mm).</p>
                <p>Possui controle de velocidade variável até 2.800 rpm, garantindo precisão nas perfurações e facilidade de uso.</p>
                <p>Funciona em tensão 220V, com amperagem de 2,2A, oferecendo bom desempenho e praticidade para o dia a dia.</p>
              </div>

              <div className="mt-8 flex justify-center">
                <a 
                  href={products["Furadeira Hammer GYFI-1000"].link}
                  target="_blank"
                  rel="nofollow"
                  className="bg-[#FFD700] text-[#1a1a1a] font-bold no-underline text-lg py-3 px-8 rounded-lg whitespace-nowrap inline-block hover:opacity-90 transition-opacity"
                >
                  Clique aqui para ver o preço
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Leve e fácil de manusear</li>
                    <li>Boa potência para uso doméstico</li>
                    <li>Velocidade ajustável</li>
                    <li>Design ergonômico</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Perde o aperto da broca com facilidade</li>
                    <li>Não indicada para uso profissional intenso</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          <BunnerDoMeio />

          <div className="space-y-16 flex flex-col pt-12">
            <section id="Parafusadeira-e-Furadeira-12V-Hammer-GYPLI120" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Parafusadeira e Furadeira 12V Hammer GYPLI120
              </h2>
              <div className="w-full flex justify-center mb-8">
                 <img src="/images/blog/melhores-marcas-de-furadeira/Parafusadeira-e-Furadeira-12V-Hammer-GYPLI120.webp" alt="Parafusadeira e Furadeira Hammer GYPLI120" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Parafusadeira e Furadeira 12V Hammer GYPLI120 é leve (0,99 kg) e ergonômica, ideal para pequenos trabalhos de perfuração e parafusamento em madeira, metal e plástico.</p>
                <p>Conta com mandril de 3/8″ (10 mm), controle de torque 18+1, função impacto e empunhadura soft grip que garante melhor segurança e conforto ao operador.</p>
                <p>Sua velocidade máxima é de 1400 RPM e a bateria de íons de lítio 12V é removível, com capacidade de 1,3Ah.</p>
                <p>É indicada para fixar e soltar parafusos e realizar perfurações em diferentes materiais, oferecendo boa versatilidade e custo-benefício para uso doméstico.</p>
              </div>

              <div className="mt-8 flex justify-center">
                <a 
                  href={products["Parafusadeira e Furadeira Hammer GYPLI120"].link}
                  target="_blank"
                  rel="nofollow"
                  className="bg-[#FFD700] text-[#1a1a1a] font-bold no-underline text-lg py-3 px-8 rounded-lg whitespace-nowrap inline-block hover:opacity-90 transition-opacity"
                >
                  Clique aqui para ver o preço
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Leve e fácil de manusear</li>
                    <li>Boa ergonomia</li>
                    <li>Função impacto</li>
                    <li>Ótimo custo-benefício</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Bateria única de baixa capacidade</li>
                    <li>Potência limitada para uso profissional</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mt-16 mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Como saber se a Parafusadeira Hammer é boa?</h2>
            <p>
              Para avaliar se a Parafusadeira Hammer é boa, considere custo-benefício, ergonomia, potência do motor, velocidade e variação de torque.
            </p>
            <p>
              O design com grip emborrachado melhora o conforto e a agilidade em tarefas prolongadas.
            </p>
            <p>
              Verifique autonomia e comportamento da bateria — alguns usuários relatam que ela vicia rápido.
            </p>
            <p>
              Exemplos: a Parafusadeira/Furadeira a Bateria com Impacto Hammer PLI12 tem torque máximo de 15 Nm e até 700 rpm; a Furadeira Impacto 3/8 570W Gyfi2000 entrega 570 W e até 2800 rpm, sendo recomendada para madeira e concreto.
            </p>
            <p>
              Analise avaliações de outros consumidores e a durabilidade em uso real. Por fim, compare desempenho e preço conforme sua frequência de uso.
            </p>
            <p>
              Consulte o Reclame Aqui, onde a Hammer registra nota 9.3/10, como indicador adicional de satisfação dos clientes.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Alternativas para Parafusadeira Hammer</h2>
            <p>
              Há diversas opções além da Parafusadeira Hammer que podem atender diferentes perfis de uso. Avaliar modelos de outras marcas ajuda a encontrar a ferramenta mais adequada conforme suas necessidades e tipo de trabalho.
            </p>
            <p>
              Nos tópicos a seguir, você confere algumas alternativas que se destacam pelo desempenho, versatilidade e praticidade.
            </p>
          </div>

          {/* Alternatives */}
          <div className="space-y-16 flex flex-col pt-8">
            <section id="Parafusadeira-e-Furadeira-Vonder-12-V" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                1. Parafusadeira/furadeira, Carregador Bivolt Automático – Vonder
              </h2>
              <div className="w-full flex justify-center mb-8">
                 <img src="/images/blog/melhor-parafusadeira/Parafusadeira-e-Furadeira-Vonder-12-V.webp" alt="Parafusadeira e Furadeira Vonder 12 V" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Parafusadeira/Furadeira Vonder é uma ferramenta versátil para uso profissional e doméstico.</p>
                <p>Possui carregador bivolt automático e bateria de íons de lítio 12 V, 1,3 Ah.</p>
                <p>Com velocidade de até 650 rpm e 18 posições de torque mais 1 posição para perfuração, atende tarefas de aparafusar e perfurar em madeira e metais.</p>
                <p>Design ergonômico com cabo emborrachado, luz LED e indicador de bateria para maior conforto e segurança.</p>
                <p>Indicada para apertar e soltar parafusos de até 6 mm de diâmetro e fazer furos de até 10 mm em aço e 16 mm em madeira.</p>
                <p>Acompanha maleta, seis brocas de aço rápido, seis bits e soquete magnético de 1/4″.</p>
                <p>Dimensões aproximadas: 26 x 9 x 25 cm; peso: 1,87 kg. É prática e confiável, oferecendo bom desempenho em diferentes tipos de trabalho, com operação eficiente e boa portabilidade.</p>
              </div>

              <div className="mt-8 flex justify-center">
                <a 
                  href={products["Parafusadeira-e-Furadeira-Vonder-12-V"].link}
                  target="_blank"
                  rel="nofollow"
                  className="bg-[#FFD700] text-[#1a1a1a] font-bold no-underline text-lg py-3 px-8 rounded-lg whitespace-nowrap inline-block hover:opacity-90 transition-opacity"
                >
                  Clique aqui para ver o preço
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Leve e fácil de manusear</li>
                    <li>Bateria de íons de lítio</li>
                    <li>Iluminação LED integrada</li>
                    <li>Boa relação custo-benefício</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Ponteiras e brocas simples</li>
                    <li>Não indicada para trabalhos pesados</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="parafusadeira-black-decker-ld12" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                2. Parafusadeira e Furadeira de 3/8 Pol. (10mm) – Black+Decker
              </h2>
              <div className="w-full flex justify-center mb-8">
                 <img src="/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Black & Decker LD12.webp" alt="Parafusadeira Furadeira Black & Decker LD12" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Parafusadeira e Furadeira 3/8 Pol. (10mm) da Black+Decker modelo LD12S é alimentada por bateria de 12V e indicada para parafusar e perfurar madeira e metal.</p>
                <p>Compacta e leve, possui empunhadura emborrachada e ergonômica, oferecendo conforto durante o uso e facilitando o trabalho em locais de difícil acesso.</p>
                <p>Conta com velocidade variável e reversível de até 900 rpm, luz LED integrada para melhor visibilidade e mandril sem chave de 3/8” (10 mm), garantindo praticidade.</p>
                <p>Acompanha carregador, 13 acessórios (entre bits, brocas e extensor de bit) e manual.</p>
                <p>Durável e fácil de usar, oferece excelente custo-benefício para uso doméstico e pequenos reparos.</p>
              </div>

              <div className="mt-8 flex justify-center">
                <a 
                  href={products["parafusadeira-black-decker-ld12"].link}
                  target="_blank"
                  rel="nofollow"
                  className="bg-[#FFD700] text-[#1a1a1a] font-bold no-underline text-lg py-3 px-8 rounded-lg whitespace-nowrap inline-block hover:opacity-90 transition-opacity"
                >
                  Clique aqui para ver o preço
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Leve e fácil de manusear</li>
                    <li>Boa autonomia de bateria</li>
                    <li>Empunhadura confortável</li>
                    <li>Bom custo-benefício</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Potência limitada para uso profissional</li>
                    <li>Não possui função impacto</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Conclusion */}
          <section className="mt-16 text-center border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Conclusão</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mx-auto text-left">
              <p>A Parafusadeira Hammer se destaca por oferecer bom equilíbrio entre desempenho e preço, sendo ideal para quem realiza pequenos reparos e montagens domésticas.</p>
              <p>Sua construção leve e ergonômica torna o uso confortável, especialmente em tarefas prolongadas, e o sistema de torque ajustável garante mais controle nas aplicações.</p>
              <p>Apesar das limitações para trabalhos profissionais ou de maior exigência, ela entrega eficiência e praticidade dentro da categoria em que se propõe atuar.</p>
              <p>Portanto, a Parafusadeira Hammer é uma escolha acertada para quem busca uma ferramenta funcional, acessível e confiável para o dia a dia.</p>
            </div>
          </section>

        </div>
    </>
  );
};
