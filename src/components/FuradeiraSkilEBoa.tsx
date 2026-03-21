import React from 'react';

import { AffiliateCard } from './AffiliateCard';
import { BunnerDoMeio } from './BunnerDoMeio';
import { products, type ProductId } from '../data/products';
import { Check, X, Info } from 'lucide-react';

export const FuradeiraSkilEBoa: React.FC = () => {
  const featuredIds: ProductId[] = [
    "Furadeira Skil 6600"
  ];

  return (
    <>
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/melhor-furadeira-e-parafusadeira/furadeira-skil-e-boa_.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Furadeira Skil é boa? <br/>
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
              Nos dias de hoje, escolher a ferramenta certa pode fazer toda a diferença em um projeto.
              A Furadeira Skil tem se destacado no mercado, prometendo desempenho e praticidade.
            </p>
            <p>
              Mas será que ela realmente cumpre o que promete?
            </p>
            <p>
              Neste artigo, compartilho minha experiência de uso e avalio se essa furadeira é uma boa escolha para quem busca qualidade e eficiência nas tarefas de bricolagem.
            </p>
            <p>
              Vamos descobrir se vale a pena investir nessa ferramenta.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Sobre a Skil</h2>
            <p>A Skil, fundada em 1924 e parte do Grupo Bosch desde 1996, é reconhecida por ferramentas elétricas de qualidade, oferecendo furadeiras, serras e parafusadeiras.</p>
            <p>Seus produtos unem inovação, durabilidade, ergonomia e bom custo-benefício, atraindo tanto entusiastas do DIY quanto profissionais da construção.</p>
          </div>

          {/* Vitrine / Showcase Table */}
          <div className="mb-16 max-w-[800px] mx-auto bg-slate-50 p-2.5 rounded-lg sm:p-5">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Principais modelos</h2>
            
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
              <tbody>
                {featuredIds.map((id) => {
                  const product = products[id];
                  let nameImage = product.name;
                  if (id === "Furadeira Skil 6600") {
                    nameImage = "Skil-Furadeira-De-Impacto-6600-570W-127V-Preto";
                  }

                  return (
                    <tr key={id} className="border-b border-slate-200 last:border-b-0">
                      <td className="w-[65px] p-2 align-middle text-center sm:w-[80px] sm:p-3">
                        <div className="w-[40px] h-[40px] border border-slate-100 rounded flex items-center justify-center p-0.5 sm:w-[60px] sm:h-[60px] mx-auto">
                          <img 
                            src={`/images/blog/melhor-furadeira-e-parafusadeira/${nameImage}.webp`}
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

          {/* Detailed Features & Specs */}
          <div className="space-y-16 flex flex-col pt-8">
            <section id="Furadeira-Skil-6600" className="scroll-mt-24">
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Skil Furadeira De Impacto 6600 570W 127V, Preto</h3>
              <div className="w-full flex justify-center mb-8">
                 <img src="/images/blog/melhor-furadeira-e-parafusadeira/Skil-Furadeira-De-Impacto-6600-570W-127V-Preto.webp" alt="Furadeira Skil 6600" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Furadeira de Impacto Skil 6600, com potência de 570W, é uma ferramenta desenvolvida para realizar perfurações em diferentes materiais, como madeira, metal, concreto e alvenaria.</p>
                <p>Seu design leve e compacto facilita o uso em locais de difícil acesso, oferecendo praticidade em diversas situações.</p>
                <p>O modelo conta com mandril metálico de 3/8″ (10 mm), que garante maior durabilidade e firmeza durante o trabalho.</p>
                <p>A ferramenta também possui o botão comutador, permitindo alternar entre perfurações com e sem impacto, adaptando-se conforme o tipo de superfície.</p>
                <p>O botão trava possibilita o uso contínuo, ideal para tarefas que exigem longos períodos de perfuração sem interrupções.</p>
                <p>Além disso, sua empunhadura ergonômica contribui para maior conforto e segurança durante o manuseio, reduzindo a fadiga do operador.</p>
                <p>Com essas características, a Skil 6600 é indicada tanto para uso profissional quanto para trabalhos domésticos, sendo uma opção eficiente e acessível dentro da categoria.</p>
              </div>

              <div className="mt-8 flex justify-center">
                <a 
                  href={products["Furadeira Skil 6600"].link}
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
                    <li>Boa potência (570W)</li>
                    <li>Mandril metálico resistente</li>
                    <li>Possui botão trava para uso contínuo</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Cabo de alimentação curto</li>
                    <li>Embalagem simples, sem maleta</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <BunnerDoMeio />

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12 mt-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Minha Opinião</h2>
            <p>Após testar a Furadeira de Impacto Skil 6600, confirmo que cumpre o prometido.</p>
            <p>Com 570W, perfura rápido em vários materiais.</p>
            <p>Compacta (22 cm) e leve (1,3 kg), facilita o manuseio em locais difíceis.</p>
            <p>Mandril metálico de 10 mm é resistente.</p>
            <p>Cabo de 2 m, ergonomia confortável e função de impacto para alvenaria.</p>
            <p>Bom custo-benefício para amadores e profissionais.</p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Qualidade das furadeiras</h2>
            <p>As furadeiras Skil oferecem alta qualidade, durabilidade, controle rigoroso, inovações de segurança e redução de vibração, proporcionando conforto e eficiência.</p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Potência e Versatilidade</h2>
            <p>A potência das furadeiras Skil destaca-se, permitindo tarefas variadas com eficiência.</p>
            <p>Testei uma com 570 Watts, capaz de perfurar concreto, alvenaria, madeira e metal; a função de impacto facilitou trabalhos em parede de concreto.</p>
            <p>A comutação para perfuração com ou sem impacto é útil: em madeira, desativa-se o impacto para acabamento mais limpo.</p>
            <p>Ergonomia e design oferecem conforto e controle, tornando as furadeiras Skil versáteis e adequadas para iniciantes e profissionais.</p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Onde são fabricadas</h2>
            <p>A Skil fabrica ferramentas em várias unidades globais: Campinas (Brasil), Chicago (EUA), Breda (Holanda), Miskolc (Hungria) e Hangzhou (China), com furadeiras produzidas no Brasil.</p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Custo benefício</h2>
            <p>Ao ponderar a compra, as furadeiras Skil oferecem excelente custo-benefício: qualidade e desempenho a preços competitivos, potência adequada, durabilidade e inovações que atendem tanto amadores quanto profissionais, unindo economia e eficiência.</p>
            <p>Dica: Se você ainda está em dúvida se esta é a opção ideal para o seu perfil, confira nosso guia completo com as <a href="/melhores-marcas-de-furadeira/" className="text-blue-600 hover:underline font-medium">melhores marcas de furadeira</a> do mercado e compare a Skil com suas principais concorrentes.</p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Funcionalidades que Facilitam o Uso</h2>
            <p>As furadeiras Skil oferecem recursos que facilitam o uso e melhoram a experiência.</p>
            <p>Muitos modelos têm acionamento e troca rápida de acessórios, botões ergonômicos, e perfuração eficaz (até 10 mm em aço, 20 mm em madeira e 10 mm em concreto).</p>
            <p>Velocidade variável permite ajuste ao material.</p>
            <p>Luz LED ilumina a área de trabalho e o botão de trava mantém a operação contínua sem pressionar o gatilho, garantindo eficiência e praticidade.</p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Assistência técnica e Garantia</h2>
            <p>A Skil oferece garantia de 1 a 3 anos contra defeitos de fabricação, ampla rede de assistência técnica autorizada, disponibilidade de peças e canais de suporte ao cliente, garantindo facilidade de reparo e maior tranquilidade e durabilidade no uso das ferramentas.</p>
          </div>

          {/* Conclusion */}
          <section className="mt-16 text-center border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">A Furadeira Skil é boa?</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mx-auto text-left">
              <p>A Furadeira Skil combina potência e praticidade, adequada para iniciantes e profissionais.</p>
              <p>O motor robusto perfura madeira e concreto, enquanto o design ergonômico reduz fadiga.</p>
              <p>Recursos como regulagem de velocidade e reversível aumentam controle.</p>
              <p>Usuários elogiam durabilidade, acabamento e ergonomia.</p>
              <p>Com bom custo-benefício, a Skil oferece ferramenta confiável e acessível para uso hobby e profissional.</p>
            </div>
          </section>

        </div>
    </>
  );
};
