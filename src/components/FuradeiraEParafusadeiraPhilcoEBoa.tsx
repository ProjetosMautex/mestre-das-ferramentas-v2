import React from 'react';

import { AffiliateCard } from './AffiliateCard';
import { BunnerDoMeio } from './BunnerDoMeio';
import { products, type ProductId } from '../data/products';
import { Check, X, Info } from 'lucide-react';

export const FuradeiraEParafusadeiraPhilcoEBoa: React.FC = () => {
  const featuredIds: ProductId[] = [
    "Parafusadeira Philco Force 3 em 1 PPF120MF"
  ];

  return (
    <>
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/melhores-marcas-de-furadeira/furadeira-e-parafusadeira-philco-e-boa.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Furadeira e Parafusadeira Philco é boa? <br/>
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
              Se você está em busca de uma furadeira e parafusadeira que una qualidade e preço acessível, a Philco pode ser uma opção interessante.
            </p>
            <p>
              Neste artigo, compartilho minha experiência prática com esse produto, destacando suas funcionalidades e se realmente vale a pena investir nele.
            </p>
            <p>
              Venha conferir se a Philco cumpre o que promete e se você deve colocá-la na sua lista de ferramentas!
            </p>
          </div>

          {/* Vitrine / Showcase Table */}
          <div className="mb-16 max-w-[800px] mx-auto bg-slate-50 p-2.5 rounded-lg sm:p-5">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Principal modelo</h2>
            
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
              <tbody>
                {featuredIds.map((id) => {
                  const product = products[id];
                  let nameImage = product.name;

                  return (
                    <tr key={id} className="border-b border-slate-200 last:border-b-0">
                      <td className="w-[65px] p-2 align-middle text-center sm:w-[80px] sm:p-3">
                        <div className="w-[40px] h-[40px] border border-slate-100 rounded flex items-center justify-center p-0.5 sm:w-[60px] sm:h-[60px] mx-auto">
                          <img 
                            src={`/images/blog/melhor-parafusadeira/${nameImage}.webp`}
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

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mt-16 mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Sobre a Philco</h2>
            <p>
              Fundada nos EUA em 1892, abriu fábrica no Brasil em 1948.
            </p>
            <p>
              Conhecida por eletrônicos e eletrodomésticos.
            </p>
            <p>
              Hoje, sob gestão da Britânia, terceiriza parte da produção na China e oferece produtos que equilibram praticidade, tecnologia e preço acessível.
            </p>
            <p>
              Suas ferramentas, como furadeiras e parafusadeiras, são populares entre entusiastas de DIY e profissionais; valem pena conforme necessidade.
            </p>
          </div>

          <BunnerDoMeio />

          {/* Ficha Técnica */}
          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mt-12 mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Ficha Técnica</h2>
            <p>
              Parafusadeira e Furadeira Philco Force PPF120MF 3 em 1 com motor de alto desempenho, bateria de lítio 12V (1500mAh), mandril de aperto rápido de 10mm, sistema magnético para parafusos e controle de torque de 23 posições. Possui design ergonômico com empunhadura emborrachada, sendo ideal para trabalhos que exigem mobilidade e versatilidade sem fio.
            </p>
          </div>

          {/* Detailed Features & Specs */}
          <div className="space-y-16 flex flex-col pt-8">
            <section id="Parafusadeira-Philco-Force-3-em-1-PPF120MF" className="scroll-mt-24">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">1. Características do Produto</h3>
              <div className="w-full flex justify-center mb-8">
                 <img src="/images/blog/melhor-parafusadeira/Parafusadeira Philco Force 3 em 1 PPF120MF.webp" alt="Parafusadeira Philco Force 3 em 1 PPF120MF" className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Philco Force PPF120MF é uma ferramenta completa 3 em 1: funciona como parafusadeira, furadeira e furadeira com impacto. Seu grande diferencial é a área magnética no topo da carcaça, que segura os parafusos enquanto você trabalha, evitando perdas.</p>
                <p>Possui 23 níveis de ajuste de torque (chegando a 20 Nm), gatilho com speed control (velocidade variável) e mandril de aperto rápido.</p>
                <p>Se você tem dúvidas sobre como configurar essas posições para cada tipo de serviço, vale a pena entender <a href="/qual-o-melhor-torque-para-parafusadeira/" className="text-blue-600 hover:underline font-medium">o que é o torque para parafusadeira e como ele funciona</a> para garantir que você tenha potência na furação e delicadeza no parafusamento.</p>
                <p>A bateria de 1500mAh garante uma autonomia sólida, contando com indicador de nível de carga.</p>
              </div>

              <h3 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">2. Recomendações para Utilização e Segurança</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Utilize o seletor de torque adequadamente: use torques menores para materiais sensíveis e torques maiores para furações.</li>
                <li>Aproveite a área magnética para organizar seus parafusos, mas mantenha-a limpa para garantir a aderência.</li>
                <li>Carregue a bateria totalmente antes do primeiro uso para calibrar as células de lítio.</li>
                <li>Sempre selecione a função de impacto apenas para furos em alvenaria. Para madeira e metal, utilize a função sem impacto.</li>
                <li>Mantenha a ferramenta na maleta para proteger os componentes eletrônicos da umidade e poeira.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">3. Especificações Técnicas</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Tensão: Bivolt.</li>
                <li>Bateria: Íon de Lítio 12V – 1.500mAh.</li>
                <li>Torque máximo: 20 Nm.</li>
                <li>Velocidade máxima: 1500 rpm.</li>
                <li>Mandril: 10mm (3/8”) de aperto rápido.</li>
                <li>Funções: Parafusadeira, Furadeira e Furadeira com Impacto.</li>
                <li>Peso: Aprox. 1,4 kg (unidade) / 2,7 kg (kit completo).</li>
                <li>Acompanha: Maleta rígida e 15 acessórios (incluindo brocas para madeira e bits).</li>
              </ul>

              <div className="mt-8 flex justify-center">
                <a 
                  href={products["Parafusadeira Philco Force 3 em 1 PPF120MF"].link}
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
                    <li>Torque superior (20 Nm) para a categoria.</li>
                    <li>Área magnética para suporte de parafusos.</li>
                    <li>Indicador de nível de bateria no corpo da máquina.</li>
                    <li>Excelente ergonomia (leve e emborrachada).</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Kit de acessórios mais focado em madeira.</li>
                    <li>Não indicada para uso profissional pesado.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12 mt-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Qualidade das furadeiras</h2>
            <p>
              A qualidade das furadeiras e parafusadeiras Philco merece atenção.
            </p>
            <p>
              A marca investe em tecnologia e materiais que garantem durabilidade e funcionamento contínuo mesmo em uso intensivo. Alguns usuários relatam fragilidade em peças como o mandril.
            </p>
            <p>
              Embora sejam anunciadas para uso profissional, muitos as consideram mais adequadas a trabalhos residenciais ou esporádicos.
            </p>
            <p>
              Pontos positivos incluem ajuste de torque, facilidade de manuseio, bons acabamentos e ergonomia, tornando-as uma opção segura para quem busca qualidade.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Onde são fabricadas</h2>
            <p>
              As furadeiras e parafusadeiras Philco são fabricadas no Brasil, com distribuição e assistência da Britânia, gerando empregos, reduzindo custos logísticos e facilitando manutenção local.
            </p>
          </div>

          <BunnerDoMeio />

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12 mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Custo benefício</h2>
            <p>
              A furadeira e parafusadeira Philco oferecem bom custo-benefício, combinando preço competitivo e desempenho adequado para iniciantes e usuários experientes.
            </p>
            <p>
              Têm durabilidade superior a muitos concorrentes, o que gera economia a longo prazo.
            </p>
            <p>
              Fabricadas no Brasil, reduzem custos adicionais.
            </p>
            <p>
              São opção viável para quem busca qualidade, funcionalidade e resistência sem gastar muito.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Assistência técnica e Garantia</h2>
            <p>
              Philco conta com ampla rede de autorizadas no Brasil, oferecendo suporte fácil, reparos e peças.
            </p>
            <p>
              A garantia de 12 meses contra defeitos de fabricação traz tranquilidade, como também reforça a confiança e o custo-benefício da furadeira e parafusadeira.
            </p>
          </div>

          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">A marca Philco é boa? É confiável os produtos dessa marca?</h2>
            <p>
              A Philco é confiável graças a mais de 130 anos de história e atuação no Brasil desde 1934.
            </p>
            <p>
              Inovações como controle remoto e TV colorida, relatos positivos sobre desempenho e durabilidade, assistência técnica acessível e constante atualização do portfólio reforçam sua qualidade.
            </p>
            <p>
              Assim, suas furadeiras e parafusadeiras são opções seguras para uso profissional e projetos domésticos.
            </p>
          </div>

        </div>
    </>
  );
};
