import React from 'react';
import { AffiliateCard } from './AffiliateCard';
import { BunnerDoMeio } from './BunnerDoMeio';
import { products, type ProductId } from '../data/products';
import { Check, X, Info } from 'lucide-react';

export const FuradeiraTitaniumEBoa: React.FC = () => {
  const featuredIds: ProductId[] = [
    "Parafusadeira Titanium Carbon 5657",
    "Parafusadeira e Furadeira 12V com Maleta – Titanium",
    "Parafusadeira Titanium 21v Impacto Brushless 2 Baterias",
    "Furadeira de Impacto 500W 3/8” Platina – Titanium"
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/blog/melhores-marcas-de-furadeira/furadeira titanium é boa.webp" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Furadeira Titanium é boa? <br/>
            <span className="text-[#FFD700]">Testei e te conto se vale a pena</span>
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
            Quando se trata de ferramentas, a furadeira é um item essencial para quem gosta de DIY ou precisa realizar reparos em casa.
          </p>
          <p>
            A Furadeira Titanium ganhou destaque no mercado, prometendo eficiência e durabilidade.
          </p>
          <p>
            Mas será que tudo isso se traduz em uma experiência prática satisfatória?
          </p>
          <p>
            Neste artigo, vou compartilhar minhas impressões após testar esse modelo e te ajudar a decidir se vale a pena investir nela.
          </p>
        </div>

        {/* Vitrine / Showcase Table */}
        <div className="mb-16 max-w-[800px] mx-auto bg-slate-50 p-2.5 rounded-lg sm:p-5">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Principais modelos</h2>
          
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
            <tbody>
              {featuredIds.map((id) => {
                const product = products[id];
                
                const getImageSrc = (productId: string) => {
                  switch (productId) {
                    case "Parafusadeira Titanium Carbon 5657": return "/images/blog/melhores-marcas-de-furadeira/Parafusadeira-de-21V-Titanium-Carbon-_5657-Melhor-custo-beneficio-da-marca.webp";
                    case "Parafusadeira e Furadeira 12V com Maleta – Titanium": return "/images/blog/melhores-marcas-de-furadeira/Parafusadeira e Furadeira 12V com Maleta – Titanium.webp";
                    case "Parafusadeira Titanium 21v Impacto Brushless 2 Baterias": return "/images/blog/melhores-marcas-de-furadeira/Parafusadeira-Titanium-21v-Impacto-Brushless-2-Baterias.webp";
                    case "Furadeira de Impacto 500W 3/8” Platina – Titanium": return "/images/blog/melhores-marcas-de-furadeira/Furadeira de Impacto 500W 38” Platina – Titanium.webp";
                    default: return `/images/blog/melhores-marcas-de-furadeira/${product.name.replace(/ /g, '-')}.webp`;
                  }
                };

                return (
                  <tr key={id} className="border-b border-slate-200 last:border-b-0">
                    <td className="w-[65px] p-2 align-middle text-center sm:w-[80px] sm:p-3">
                      <div className="w-[40px] h-[40px] border border-slate-100 rounded flex items-center justify-center p-0.5 sm:w-[60px] sm:h-[60px] mx-auto">
                        <img 
                          src={getImageSrc(id)}
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
                        rel="nofollow noopener noreferrer"
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
        <div className="space-y-16">
          
          <section id="parafusadeira-titanium-carbon-5657" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
              Parafusadeira de 21V Titanium Carbon 5657 Melhor custo benefício da marca
            </h2>
            <div className="w-full flex justify-center mb-8">
               <img src="/images/blog/melhores-marcas-de-furadeira/Parafusadeira-de-21V-Titanium-Carbon-_5657-Melhor-custo-beneficio-da-marca.webp" alt="Parafusadeira Titanium Carbon 5657" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>A Parafusadeira Titanium Carbon 21V 5657 oferece um bom equilíbrio entre potência e praticidade a preço acessível.</p>
              <p>Indicada para montagens e reparos domésticos, conta com mandril de aperto rápido, 25 níveis de torque ajustáveis e função de impacto, o que amplia sua versatilidade em diferentes tipos de superfície.</p>
              <p>Acompanha duas baterias de 21V, carregador bivolt e maleta com 35 acessórios, incluindo brocas, bits e soquetes, que tornam o conjunto completo para uso residencial.</p>
              <p>Alcança até 1400 rotações por minuto e possui torque de 32 Nm, permitindo bom desempenho em tarefas leves de perfuração e fixação.</p>
              <p>Apesar de sua função de impacto, é mais indicada para uso doméstico e moderado, não sendo ideal para trabalhos contínuos ou profissionais de alta exigência.</p>
              <p>É uma opção eficiente e econômica para quem busca uma ferramenta prática, bem equipada e com ótimo custo-benefício.</p>
            </div>

            <AffiliateCard id="Parafusadeira Titanium Carbon 5657" />
          </section>

          <section id="parafusadeira-e-furadeira-12v-com-maleta-titanium" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
              Parafusadeira e Furadeira 12V com Maleta – Titanium
            </h2>
            <div className="w-full flex justify-center mb-8">
               <img src="/images/blog/melhores-marcas-de-furadeira/Parafusadeira e Furadeira 12V com Maleta – Titanium.webp" alt="Parafusadeira e Furadeira 12V com Maleta – Titanium" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>A Parafusadeira e Furadeira 12V da Titanium é uma das opções mais acessíveis do mercado, ideal para quem precisa de uma ferramenta prática para socorros domésticos.</p>
              <p>Ela atende muito bem a montagem de móveis, reparos em drywall e furos leves em madeiras e aços finos.</p>
              <p>Equipada com bateria de íons de lítio de 1,3Ah, ela oferece uma autonomia ligeiramente superior aos modelos de entrada mais antigos.</p>
              <p>Conta com mandril de aperto rápido de 10mm, luz LED para auxiliar em locais escuros e controle de velocidade variável no gatilho.</p>
              <p>Com torque máximo de 21Nm, entrega a força necessária para parafusamentos do dia a dia, acompanhada de uma maleta que facilita o transporte e a organização.</p>
            </div>

            <AffiliateCard id="Parafusadeira e Furadeira 12V com Maleta – Titanium" />
          </section>

          <BunnerDoMeio />

          <section id="parafusadeira-titanium-21v-impacto-brushless-2-baterias" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
              Parafusadeira Titanium 21v Impacto Brushless 2 Baterias
            </h2>
            <div className="w-full flex justify-center mb-8">
               <img src="/images/blog/melhores-marcas-de-furadeira/Parafusadeira-Titanium-21v-Impacto-Brushless-2-Baterias.webp" alt="Parafusadeira Titanium 21v Impacto Brushless 2 Baterias" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>A Parafusadeira Titanium 21V Impacto Brushless combina potência e praticidade.</p>
              <p>O motor sem escovas garante maior durabilidade, melhor aproveitamento de energia e funcionamento mais silencioso.</p>
              <p>Com duas baterias de lítio de 21V e 7500mAh, permite trabalhos prolongados sem interrupções.</p>
              <p>O sistema de impacto e o mandril de aperto rápido de 10mm facilitam o uso em materiais duros e trocas ágeis de ponteiras.</p>
              <p>Conta com velocidade variável (0–400 / 0–1350 RPM), ajuste de torque e função reversível, oferecendo precisão em diferentes tarefas.</p>
              <p>O design ergonômico e o cabo emborrachado proporcionam conforto e firmeza durante o uso.</p>
              <p>Ideal para quem busca eficiência, desempenho e qualidade em atividades de montagem e perfuração.</p>
            </div>

            <AffiliateCard id="Parafusadeira Titanium 21v Impacto Brushless 2 Baterias" />
          </section>

          <section id="furadeira-de-impacto-500w-38-platina-titanium" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
              Furadeira de Impacto 500W 3/8” Platina – Titanium
            </h2>
            <div className="w-full flex justify-center mb-8">
               <img src="/images/blog/melhores-marcas-de-furadeira/Furadeira de Impacto 500W 38” Platina – Titanium.webp" alt="Furadeira de Impacto 500W 3/8” Platina – Titanium" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>A Furadeira De Impacto Force 3/8 220v 05622 Titanium Amarela é uma ferramenta prática e eficiente para quem precisa realizar perfurações em diferentes superfícies.</p>
              <p>Com potência de 500W e velocidade máxima de 2800 rpm, oferece desempenho consistente em trabalhos com madeira, metal e alvenaria.</p>
              <p>Seu design compacto e ergonômico facilita o manuseio, garantindo conforto e precisão durante o uso.</p>
              <p>O modelo conta com função impacto e chave seletora reversível, o que amplia suas possibilidades de aplicação.</p>
              <p>A capacidade do mandril é de 1/2″ (13 mm), permitindo o uso de brocas variadas conforme o tipo de material.</p>
              <p>Fabricada com materiais resistentes, assegura durabilidade e bom desempenho mesmo em usos frequentes.</p>
              <p>A Furadeira Force 05622 Titanium se destaca por unir potência e praticidade, sendo uma escolha eficiente para uso doméstico e profissional leve.</p>
            </div>

            <AffiliateCard id="Furadeira de Impacto 500W 3/8” Platina – Titanium" />
          </section>

          <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">Mais informações sobre</h2>
            <p>
              A Furadeira Titanium é uma excelente escolha para quem busca aliar potência e conforto, permitindo que até mesmo iniciantes realizem tarefas de perfuração com facilidade.
            </p>
            <p>
              O modelo se destaca pela sua versatilidade, sendo ideal tanto para projetos de bricolagem simples quanto para trabalhos mais exigentes, como a perfuração de alvenaria.
            </p>
            <p>
              Com um motor potente, a furadeira é capaz de lidar com diferentes tipos de materiais, oferecendo resultados eficientes e satisfatórios.
            </p>
            <p>
              Como também, a Furadeira Titanium é projetada para ser resistente e oferecer uma longa vida útil, resultado de sua construção robusta com materiais de alta qualidade.
            </p>
            <p>
              Para ampliar suas capacidades, ela também é compatível com uma variedade de acessórios, o que a torna uma ferramenta essencial para aqueles que desejam realizar obras em casa ou manutenções com um padrão profissional.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">Sobre a Titanium</h2>
            <p>
              Marca desde 1989, a Titanium oferece ferramentas duráveis e inovadoras; a furadeira combina conforto, ajustes de velocidade/torque e versatilidade para vários materiais.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">Qualidade das furadeiras</h2>
            <p>
              A Furadeira Titanium destaca-se pela construção robusta e materiais de alta resistência, oferecendo durabilidade, desempenho e ergonomia.
            </p>
            <p>
              Ajustes precisos de velocidade e torque aumentam versatilidade para trabalhos intensivos, superando opções básicas para uso prolongado.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">Onde são fabricadas</h2>
            <p>
              Furadeira Titanium é fabricada em centros com rígidos controles de qualidade e parte da produção no Brasil.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">Custo benefício</h2>
            <p>
              Furadeira Titanium oferece ótimo custo-benefício: robusta, versátil, ergonômica e durável, ideal para hobbies e pequenos projetos.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">Assistência técnica e Garantia</h2>
            <p>
              A Furadeira Titanium oferece assistência técnica via site do fabricante, com envio geralmente sem custo.
            </p>
            <p>
              Garantia varia por modelo, normalmente até 12 meses, cobrindo defeitos de fabricação.
            </p>
            <p>
              O distribuidor concede 90 dias legais a partir da nota fiscal.
            </p>
            <p>
              Há canal de atendimento ao cliente para dúvidas sobre operação e manutenção, assegurando suporte confiável e satisfação do usuário.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">Alternativas as furadeiras Titanium</h2>
            <p>
              Se você está em dúvida entre diferentes modelos de furadeiras, há várias opções confiáveis no mercado que podem se ajustar a diferentes tipos de uso e orçamentos.
            </p>
            <p>
              Para quem busca um investimento em marcas de linha profissional, vale conferir a disputa entre as <a href="/qual-a-melhor-parafusadeira-bosch-ou-dewalt" className="text-blue-600 hover:underline">parafusadeiras bosch ou dewalt</a>, que são as principais concorrentes globais em durabilidade e assistência técnica.
            </p>
            <p>
              Nos tópicos a seguir, você verá alternativas conhecidas que equilibram potência, durabilidade e bom custo-benefício, ideais para quem busca uma ferramenta eficiente e adequada às suas necessidades.
            </p>
          </div>

          <section id="furadeira-de-impacto-black-decker-500w-tm-500" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
              Furadeira de Impacto Black & Decker 500W TM-500
            </h2>
            <div className="w-full flex justify-center mb-8">
               <img src="/images/blog/melhores-marcas-de-furadeira/Furadeira-de-Impacto-Black-Decker-500W-TM-500.webp" alt="Furadeira de Impacto Black & Decker 500W TM-500" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>A Furadeira de Impacto Black+Decker TM500 conta com motor de 560W e rotação de até 2800 rpm, oferecendo desempenho eficiente para perfurações em madeira, metal e alvenaria.</p>
              <p>O modelo possui função de impacto de 45.000 ipm, garantindo maior força em superfícies mais resistentes.</p>
              <p>Apresenta design leve e compacto, com gatilho de dois dedos e trava para uso contínuo, além de porta-chave mandril integrado ao cabo.</p>
              <p>Sua capacidade máxima de perfuração é de 20 mm em madeira, 10 mm em metal e 10 mm em concreto, sendo ideal tanto para uso doméstico quanto para serviços mais exigentes.</p>
              <p>Produto confiável, indicado para quem busca potência, durabilidade e praticidade em uma única ferramenta.</p>
            </div>

            <AffiliateCard id="Furadeira de Impacto Black & Decker 500W TM-500" />
          </section>

          <section id="furadeira-de-impacto-bosch-450w-gsb-re-450" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
              Furadeira de Impacto Bosch 450W GSB RE 450
            </h2>
            <div className="w-full flex justify-center mb-8">
               <img src="/images/blog/melhor-furadeira-e-parafusadeira/Furadeira-de-Impacto-Profissional-｜-GSB-450.webp" alt="Furadeira de Impacto Bosch 450W GSB RE 450" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>A Furadeira de Impacto Bosch GSB 450 RE conta com motor de 450 W, ideal para perfurações em alvenaria, madeira e metal.</p>
              <p>Possui design compacto e ergonômico, pesando apenas 1,6 kg, o que facilita o manuseio e o transporte durante o uso.</p>
              <p>Seu mandril de 3/8” (10 mm) com chave garante firmeza na troca de brocas, e a velocidade variável de até 2.600 rpm oferece maior controle em diferentes materiais.</p>
              <p>A função reversível permite parafusar e desparafusar, enquanto o botão comutador possibilita perfurações com e sem impacto, aumentando a versatilidade do equipamento.</p>
              <p>O botão trava é ideal para trabalhos contínuos, proporcionando mais conforto e praticidade durante o uso prolongado.</p>
              <p>A ferramenta é indicada principalmente para uso doméstico e semiprofissional, mantendo o equilíbrio entre potência, leveza e durabilidade.</p>
            </div>

            <AffiliateCard id="Bosch ｜ Furadeira de Impacto Profissional ｜ GSB 450" />
          </section>

          <section id="furadeira-vonder-450w-fsv-450" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
              Furadeira Vonder 450W FSV-450
            </h2>
            <div className="w-full flex justify-center mb-8">
               <img src="/images/blog/melhor-parafusadeira/Furadeira-Vonder-450W-FSV-450.webp" alt="Furadeira Vonder 450W FSV-450" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
            </div>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>A Furadeira Vonder FSV-450 de 450W oferece potência e praticidade para trabalhos em madeira e metal.</p>
              <p>Compacta e leve (1,55 kg), possui mandril 3/8″ com chave, punho auxiliar, controle de velocidade variável de 0–2.800 rpm e rotação reversível.</p>
              <p>Com estrutura resistente e ergonômica, é ideal para uso profissional leve e para entusiastas do faça você mesmo.</p>
              <p>Não é indicada para perfurações em concreto.</p>
            </div>

            <AffiliateCard id="Furadeira Vonder 450W FSV-450" />
          </section>

          <div className="space-y-6 prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">Conclusão</h2>
            <p>
              A Furadeira Titanium se destaca como uma opção equilibrada para quem busca potência, conforto e bom custo-benefício.
            </p>
            <p>
              Seu desempenho é consistente em diferentes tipos de materiais, permitindo desde pequenos reparos até projetos mais exigentes com eficiência.
            </p>
            <p>
              A variedade de modelos da marca garante que o consumidor encontre uma opção adequada ao seu perfil, seja para uso doméstico ou profissional leve.
            </p>
            <p>
              Apesar de não ser a mais indicada para serviços pesados e contínuos, oferece recursos suficientes para atender com qualidade às demandas do dia a dia.
            </p>
            <p>
              Com boa durabilidade, ergonomia e suporte técnico acessível, a Furadeira Titanium mostra que vale o investimento para quem deseja uma ferramenta confiável e versátil.
            </p>
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Check className="w-6 h-6" /> Pontos Positivos
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-green-700">
                  <span className="mt-1 text-green-500">•</span>
                  Preço muito acessível
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <span className="mt-1 text-green-500">•</span>
                  Ótima para uso doméstico leve
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <span className="mt-1 text-green-500">•</span>
                  Kits costumam vir com acessórios
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <span className="mt-1 text-green-500">•</span>
                  Leve e fácil de manusear
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <X className="w-6 h-6" /> Pontos Negativos
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-red-700">
                  <span className="mt-1 text-red-500">•</span>
                  Não suporta uso profissional ou pesado
                </li>
                <li className="flex items-start gap-2 text-red-700">
                  <span className="mt-1 text-red-500">•</span>
                  Acabamento mais simples
                </li>
                <li className="flex items-start gap-2 text-red-700">
                  <span className="mt-1 text-red-500">•</span>
                  Assistência técnica pode ser limitada
                </li>
                <li className="flex items-start gap-2 text-red-700">
                  <span className="mt-1 text-red-500">•</span>
                  Durabilidade menor em comparação com marcas premium
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
