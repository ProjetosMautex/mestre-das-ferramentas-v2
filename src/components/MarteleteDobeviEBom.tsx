import React, { useState } from 'react';
import { AffiliateCard } from './AffiliateCard';
import { BunnerDoMeiomartelete } from './BunnerDoMeiomartelete';
import { ExitIntentPopupmartelete } from './ExitIntentPopupmartelete';
import { products as generalProducts } from '../data/products';
import { productsmartele as products, type ProductId } from '../data/productsmartele';
import { Check, X, Info, ChevronDown, ChevronUp, AlertTriangle, ArrowRight, ArrowLeft, Play } from 'lucide-react';

export const MarteleteDobeviEBom: React.FC = () => {
  const featuredIds: ProductId[] = [
    "Martelete Rompedor Furadeira 2200w Sds Plus Cmaleta Dobevi",
    "Martelete Perfurador Bosch GBH 2-24 D"
  ];
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const relatedProducts = [
    {
      title: "Jogo de brocas Bosch SDS Plus-1 para concreto Ø 5-6-6-8-8-10 mm com 6 peças",
      image: "/images/blog/melhor-furadeira-e-parafusadeira/BOSCH-Jogo-de-Brocas-SDS-Plus-1-para-Concreto-｜-_2607019447.webp",
      description: "Brocas de metal duro de alta performance para furos precisos em concreto e alvenaria sem quebras.",
      link: generalProducts["BOSCH Jogo de Brocas SDS Plus-1 para Concreto ｜ 2607019447"]?.link || "https://meli.la/2fTdVBu",
      badge: "Recomendado"
    },
    {
      title: "Óculos 3m Securefit Sf 100 Antiembaçante Lente Incolor",
      image: "/images/blog/2/Óculos 3m Securefit Sf 100 Antiembaçante Lente Incolor.webp",
      description: "EPI essencial com hastes autoajustáveis e lentes antirrisco e antiembaçante de alta proteção.",
      link: products["Óculos 3m Securefit Sf 100 Antiembaçante Lente Incolor"]?.link || "https://meli.la/2WoFmi2",
      badge: "Segurança"
    },
    {
      title: "Graxa Alto Teor Grafite P Martelete Porta De Enrrolar 250g",
      image: "/images/blog/2/Graxa Alto Teor Grafite P Martelete Porta De Enrrolar 250g.webp",
      description: "Graxa de alto teor de grafite e extrema pressão ideal para lubrificar o mandril do martelete.",
      link: products["Graxa Alto Teor Grafite P Martelete Porta De Enrrolar 250g"]?.link || "https://meli.la/1YQCVaJ",
      badge: "Manutenção"
    }
  ];

  const faqItems = [
    {
      question: "O martelete Dobevi aguenta trabalho diário em obras pesadas?",
      answer: "Não é o recomendado. O Dobevi é excelente para uso doméstico, reformas pontuais e tarefas intermediárias. Para uso contínuo de 8 horas por dia quebrando concreto de alta densidade, recomendamos marcas profissionais como a Bosch."
    },
    {
      question: "Onde encontrar peças de reposição para o martelete Dobevi?",
      answer: "Como as escovas de carvão adicionais vêm inclusas no kit, a reposição rápida está garantida. Peças adicionais podem ser encontradas em assistências autorizadas ou adaptando componentes SDS padrão compatíveis com as marcas nacionais do Kit BEV no Mercado Livre."
    },
    {
      question: "Qual tipo de lubrificante devo usar no mandril do martelete?",
      answer: "Recomendamos o uso de graxa de extrema pressão (EP) com bissulfeto de molibdênio ou graxas lubrificantes de lítio específicas para mandril SDS-Plus. Evite usar óleos finos, pois escorrem e perdem o efeito lubrificante rápido."
    },
    {
      question: "É seguro perfurar madeira usando a função martelete?",
      answer: "Não! A função de impacto (martelete) estilhaçará a madeira e pode danificar ou travar a broca. Para perfurar madeira ou metal, use a função de rotação simples."
    }
  ];

  return (
    <>
      <ExitIntentPopupmartelete />
      {/* Hero Section */}
      <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/blog/2/martelete dobevi e bom.webp" 
            alt="Martelete Dobevi é Bom" 
            className="w-full h-full object-cover opacity-20 blur-sm mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/90 to-[#1a1a1a]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Martelete Dobevi é Bom? E o Bosch? Veja o Teste!
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span>Por</span>
              <a href="/author/andre-carvalho" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors font-semibold group">
                <img 
                  src="/images/autores/andre-carvalho.webp" 
                  alt="André Carvalho" 
                  className="w-8 h-8 rounded-full border-2 border-[#FFD700] group-hover:scale-110 transition-transform"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/e2e8f0/1e293b?text=AC';
                  }}
                />
                André Carvalho
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-8">
          <p className="lead text-xl md:text-2xl font-medium text-gray-800 mb-8">
            A busca por uma <strong>ferramenta eficiente</strong> para perfuração e rompimento costuma gerar muitas dúvidas, especialmente quando nos deparamos com opções de marcas que estão ganhando espaço no mercado.
          </p>
          <p>Encontrar o <strong>equilíbrio entre durabilidade e um investimento justo</strong> é o desafio principal de quem precisa de um equipamento confiável para o dia a dia.</p>
          <p>Muitas vezes, a incerteza sobre se o martelete Dobervi é bom o suficiente para demandas variadas acaba travando a decisão de compra.</p>
          <p>Entender como esses equipamentos se comportam na prática é o primeiro passo para alinhar expectativas e garantir <strong>eficiência no trabalho</strong>.</p>
        </div>

        {/* SIMULADOR RÁPIDO */}
        <div className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-700 text-white text-center">
          <span className="bg-[#FFD700] text-gray-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Simulador Rápido
          </span>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
            Qual será o uso principal do seu martelete?
          </h3>
          <p className="text-gray-400 text-sm md:text-base mb-6 max-w-xl mx-auto">
            Responda em 1 clique para ver a recomendação ideal para o seu perfil e evitar desperdício de dinheiro.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
            <button
              onClick={() => setQuizAnswer('diy')}
              className={`w-full py-4 px-6 rounded-xl font-bold border transition-all duration-200 text-center ${
                quizAnswer === 'diy'
                  ? 'bg-[#FFD700] text-gray-900 border-[#FFD700] scale-[1.02] shadow-[#FFD700]/20 shadow-lg'
                  : 'bg-transparent text-white border-gray-600 hover:border-gray-400 hover:bg-white/5'
              }`}
            >
              🛠️ Reformas pontuais / DIY
            </button>
            <button
              onClick={() => setQuizAnswer('obra')}
              className={`w-full py-4 px-6 rounded-xl font-bold border transition-all duration-200 text-center ${
                quizAnswer === 'obra'
                  ? 'bg-[#FFD700] text-gray-900 border-[#FFD700] scale-[1.02] shadow-[#FFD700]/20 shadow-lg'
                  : 'bg-transparent text-white border-gray-600 hover:border-gray-400 hover:bg-white/5'
              }`}
            >
              🏗️ Uso diário em obras
            </button>
          </div>

          {quizAnswer && (
            <div className="mt-6 p-5 rounded-xl bg-white/5 border border-white/10 text-left animate-fadeIn">
              {quizAnswer === 'diy' ? (
                <div>
                  <h4 className="text-[#FFD700] font-black text-lg mb-2 flex items-center gap-2">
                    <Check className="w-5 h-5" /> Dobevi é ideal para você!
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Você economizará muito comprando o Dobevi. Ele entrega a <strong>potência bruta de 2200W necessária</strong> para furar e romper concreto esporadicamente em reformas de casa. Não há necessidade de pagar mais do que o triplo do preço por um martelete industrial.
                  </p>
                </div>
              ) : (
                <div>
                  <h4 className="text-red-400 font-black text-lg mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5" /> Recomendamos investir em um Bosch!
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Atenção: Embora o Dobevi seja muito potente, o <strong>uso diário profissional de 8 horas por dia</strong> exige maior durabilidade interna nos rolamentos e retentores. Para evitar paradas no meio da sua obra, invista em um modelo de linha profissional industrial como Bosch ou Makita.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Vitrine / Showcase Table */}
        <div className="mb-16 max-w-[800px] mx-auto bg-slate-50 p-2.5 rounded-lg sm:p-5">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Melhores marteletes para comprar online</h2>
          
          {featuredIds.length > 0 ? (
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
              <tbody>
                {featuredIds.map((id) => {
                  const product = products[id];
                  if (!product) return null;
                  return (
                    <tr key={id} className="border-b border-slate-200 last:border-b-0">
                      <td className="w-[65px] p-2 align-middle text-center sm:w-[80px] sm:p-3">
                        <div className="w-[40px] h-[40px] border border-slate-100 rounded flex items-center justify-center p-0.5 sm:w-[60px] sm:h-[60px] mx-auto">
                          <img 
                            src={`/images/blog/2/${product.name}.webp`}
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
                          rel="noopener noreferrer sponsored"
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
          ) : (
            <p className="text-center text-gray-500 italic">Vitrine em atualização com as melhores ofertas...</p>
          )}
        </div>

        {/* Article Body */}
        <div className="space-y-12">
          
          <section>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Características Gerais da Ferramenta</h2>
            
            {/* Imagem do Produto Dobevi 2200W */}
            <div className="my-8 max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white">
              <img 
                src="/images/blog/2/Martelete Rompedor Furadeira 2200w Sds Plus Cmaleta Dobevi.webp" 
                alt="Martelete Rompedor Furadeira 2200w Sds Plus Cmaleta Dobevi" 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Ao analisar a ficha técnica do martelete Dobevi, o primeiro ponto que salta aos olhos é a <strong>entrega de 2200 W de potência</strong>. Embora o fabricante prometa alta potência, na prática ela se mostra muito boa para diversas tarefas cotidianas, com a ressalva de que não é indicada para trabalhos extremamente pesados ou uso contínuo de alta intensidade.</p>
              <p>Essa configuração posiciona o equipamento como uma <strong>alternativa altamente competitiva</strong> para quem precisa de força para reformas e perfurações, sem desembolsar os <strong>valores exorbitantes</strong> cobrados por marcas líderes.</p>
              <p>O sistema de <strong>encaixe SDS Plus</strong> é o padrão de mercado que garante a agilidade necessária, permitindo <strong>trocas rápidas de brocas</strong> e talhadeiras com total segurança operacional.</p>
              <p>A estrutura, contando com uma carcaça durável em liga de alumínio, foca na robustez para reformas domésticas ou uso pontual, embora exija cautela para não sobrecarregar a ferramenta em tarefas severas.</p>
              <p>Optar por essa ferramenta é, acima de tudo, uma estratégia inteligente para equilibrar um orçamento enxuto com um bom desempenho para trabalhos que não exijam o extremo do equipamento.</p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Especificações Técnicas</h3>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Para entender se o investimento compensa, é preciso olhar além da potência de 2200 W do motor com núcleo de cobre.</p>
              <p>A ferramenta opera com uma velocidade variável de 300 a 1050 rpm e executa até 4500 impactos por minuto (bpm), entregando a percussão ideal para romper estruturas densas.</p>
              <p>A voltagem de 220V (ou 127V conforme a escolha) atende perfeitamente a demandas residenciais e profissionais, e o encaixe padrão SDS Plus otimiza a produtividade diária.</p>
              <p>Um diferencial importante é a embreagem de segurança integrada, que protege o pulso do operador contra torções causadas por trancos quando a broca trava no ferro estrutural do concreto.</p>
              <p>O sistema antivibração duplo na empunhadura ajustável em 360° reduz drasticamente a fadiga do operador em jornadas de demolição prolongadas.</p>
            </div>

            {/* BOTÃO DE AFILIADO */}
            <AffiliateCard id="Martelete Rompedor Furadeira 2200w Sds Plus Cmaleta Dobevi" />
          </section>

          <BunnerDoMeiomartelete />

          <section>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Acessórios e Componentes Inclusos</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>A aquisição deste martelete vai muito além da carcaça principal, entregando um conjunto pensado para o pronto uso.</p>
              <p>Na maleta, o operador encontra brocas, ponteiros e talhadeiras essenciais para iniciar rompimentos ou furos de imediato.</p>
              <p>A presença de itens de proteção, como óculos e luvas, sinaliza uma preocupação básica com a integridade física do usuário, algo frequentemente negligenciado em kits de entrada.</p>
              <p>Entretanto, é prudente ajustar as expectativas: enquanto a variedade de componentes facilita a operação, a qualidade dessas peças secundárias pode não acompanhar a resistência do motor.</p>
              <p>Ter em mãos um jogo completo é uma conveniência notável, mas considere que acessórios de alta performance podem ser investimentos futuros necessários para garantir máxima precisão.</p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Itens Inclusos</h3>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>O kit acompanha itens essenciais que visam facilitar o início imediato dos trabalhos.</p>
              <p>A maleta de transporte, embora em material simples, cumpre o papel de organizar os acessórios e proteger o corpo do martelete.</p>
              <p>O pacote inclui brocas SDS variadas, ponteiros e talhadeiras, permitindo que você atenda diferentes demandas de perfuração sem custos extras imediatos.</p>
              <p>Vale destacar a presença das escovas de carvão de reposição e do lubrificante específico para o encaixe SDS.</p>
              <p>Esses componentes demonstram um cuidado preventivo com a vida útil do motor e da ponta de impacto.</p>
              <p>Contudo, atente-se às proteções individuais: os óculos e luvas inclusos atendem critérios básicos de segurança, mas, para jornadas intensas, investir em equipamentos de proteção com ergonomia superior é uma recomendação de prudência para qualquer profissional que preza pela própria integridade física.</p>
            </div>

            {/* PRÓS E CONTRAS */}
            <div className="my-10 border border-gray-200 rounded-2xl p-6 bg-slate-50">
              <h4 className="font-extrabold text-gray-900 text-lg mb-4 flex items-center gap-2">
                📊 Prós e Contras - Dobevi 2200W
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 border border-emerald-100 shadow-sm">
                  <h5 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Prós (Pontos Fortes)
                  </h5>
                  <ul className="space-y-2.5 text-sm text-gray-600 list-inside list-disc">
                    <li><strong>Extrema Potência (2200W):</strong> Motor de alto torque ideal para concreto duro e trabalhos de demolição.</li>
                    <li><strong>Embreagem de Segurança:</strong> Protege o pulso do operador contra trancos caso a broca trave de repente.</li>
                    <li><strong>Carcaça em Liga de Alumínio:</strong> Estrutura metálica mais resistente ao impacto e calor em comparação ao plástico.</li>
                    <li><strong>Kit Inicial Completo:</strong> Acompanha maleta de transporte, 4 brocas SDS, 3 cinzéis/talhadeiras, luvas e óculos.</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 border border-red-100 shadow-sm">
                  <h5 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0" /> Contras (Limitações)
                  </h5>
                  <ul className="space-y-2.5 text-sm text-gray-600 list-inside list-disc">
                    <li><strong>Peso Elevado:</strong> O corpo metálico robusto o torna cansativo para uso contínuo acima da altura dos ombros.</li>
                    <li><strong>Ciclos de Pausa Necessários:</strong> Requer intervalos de descanso para resfriamento durante trabalhos intensos.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Observações sobre os acessórios</h3>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>É fundamental alinhar expectativas quanto aos itens que acompanham o martelete.</p>
              <p>Embora a maleta ofereça conveniência, a qualidade dos acessórios é condizente com a categoria de entrada.</p>
              <p>Observe que algumas brocas podem apresentar irregularidades em sua superfície, o que impacta diretamente a precisão e a vida útil do acessório.</p>
              <p>Quanto aos itens de segurança, vale ressaltar que este modelo específico não costuma acompanhar óculos de proteção na caixa na maioria dos lotes, vindo apenas com luvas simples.</p>
              <p>Por ser uma ferramenta de altíssimo impacto que lança fragmentos de pedra, concreto e poeira, o uso de óculos de proteção é obrigatório e indispensável.</p>
              <p>Para assegurar sua integridade física e otimizar a performance, planeje adquirir um jogo de brocas de alta qualidade e óculos de proteção robustos.</p>
              <p>Enxergue os acessórios originais como um "quebra-galho" imediato, reservando verba para acessórios que acompanhem a potência da máquina.</p>
            </div>

            {/* CARROSSEL DE PRODUTOS RELACIONADOS (Cross-sell) */}
            <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 relative max-w-2xl mx-auto shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xs bg-[#FFD700]/20 text-[#b39700] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                    Equipamentos Recomendados
                  </span>
                  <h4 className="font-bold text-gray-900 text-lg mt-1">Upgrade Recomendado de Acessórios</h4>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setCarouselIndex((prev) => (prev === 0 ? relatedProducts.length - 1 : prev - 1))}
                    className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-100 transition-colors shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4 text-gray-700" />
                  </button>
                  <button 
                    onClick={() => setCarouselIndex((prev) => (prev === relatedProducts.length - 1 ? 0 : prev + 1))}
                    className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-100 transition-colors shadow-sm"
                  >
                    <ArrowRight className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-5 flex flex-col md:flex-row gap-5 items-center transition-all duration-300">
                <div className="w-[120px] h-[120px] flex-shrink-0 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center p-2 relative">
                  <span className="absolute top-2 left-2 bg-[#1a1a1a] text-[#FFD700] text-[9px] font-black uppercase px-1.5 py-0.5 rounded shadow">
                    {relatedProducts[carouselIndex].badge}
                  </span>
                  <img 
                    src={relatedProducts[carouselIndex].image} 
                    alt={relatedProducts[carouselIndex].title}
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h5 className="font-bold text-gray-900 text-md md:text-lg mb-2">
                    {relatedProducts[carouselIndex].title}
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {relatedProducts[carouselIndex].description}
                  </p>
                  <a 
                    href={relatedProducts[carouselIndex].link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-2 bg-[#FFD700] text-gray-900 font-bold px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity no-underline shadow-sm"
                  >
                    VER PREÇO <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex justify-center gap-1.5 mt-5">
                {relatedProducts.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      carouselIndex === i ? 'w-6 bg-[#FFD700]' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
              Alternativa Premium: Martelete Perfurador Rompedor 820W GBH 2-24 D Bosch
            </h2>

            {/* Imagem do Produto Bosch GBH 2-24 D */}
            <div className="my-8 max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white">
              <img 
                src="/images/blog/2/Martelete Perfurador Bosch GBH 2-24 D.webp" 
                alt="Martelete Perfurador Bosch GBH 2-24 D" 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>
                Para quem busca uma ferramenta voltada ao uso diário industrial e contínuo, o <strong>Bosch GBH 2-24 D</strong> de 820W surge como a principal alternativa de alta durabilidade. Embora seu custo de aquisição seja mais elevado, a <strong>qualidade de construção alemã</strong> assegura que a máquina suporte o tranco de obras exigentes de <strong>8 horas por dia</strong> sem apresentar desgaste mecânico precoce.
              </p>
              <p>
                Este modelo conta com força de impacto de 2,7 Joules e rotação variável de até 1.300 rpm, garantindo perfurações extremamente rápidas e cinzelamento eficiente em <strong>concretos de alta densidade</strong>. Se você é um profissional da construção civil ou prefere investir em uma ferramenta para a vida toda, o GBH 2-24 D é a escolha ideal.
              </p>
            </div>

            {/* BOTÃO DE AFILIADO */}
            <AffiliateCard id="Martelete Perfurador Bosch GBH 2-24 D" />

            {/* PRÓS E CONTRAS - BOSCH GBH 2-24 D */}
            <div className="my-10 border border-gray-200 rounded-2xl p-6 bg-slate-50">
              <h4 className="font-extrabold text-gray-900 text-lg mb-4 flex items-center gap-2">
                📊 Prós e Contras - Bosch GBH 2-24 D
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 border border-emerald-100 shadow-sm">
                  <h5 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Prós (Pontos Fortes)
                  </h5>
                  <ul className="space-y-2.5 text-sm text-gray-600 list-inside list-disc">
                    <li><strong>Durabilidade Extrema:</strong> Componentes de padrão industrial feitos para aguentar uso diário e severo.</li>
                    <li><strong>Embreagem de Segurança:</strong> Protege o operador contra contragolpes severos caso a broca trave.</li>
                    <li><strong>Design Ergonômico e Leve:</strong> Pesando apenas 2,8 kg, é muito fácil de manusear mesmo no alto da parede.</li>
                    <li><strong>Cabo Giratório de 4m:</strong> Excelente raio de ação que evita dobras e prolonga a vida útil do fio.</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 border border-red-100 shadow-sm">
                  <h5 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0" /> Contras (Limitações)
                  </h5>
                  <ul className="space-y-2.5 text-sm text-gray-600 list-inside list-disc">
                    <li><strong>Alto Investimento Inicial:</strong> Preço cerca de três vezes maior que as opções de entrada.</li>
                    <li><strong>Manutenção de Escovas de Carvão:</strong> Exige paradas preventivas periódicas após uso muito prolongado.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            {/* VÍDEO DO YOUTUBE */}
            <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 text-center max-w-2xl mx-auto shadow-sm">
              <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-red-600" /> Vídeo Explicativo: Uso e Lubrificação SDS Plus
              </h4>
              <p className="text-sm text-gray-600 mb-5">
                Veja uma demonstração prática de como lubrificar o mandril SDS e usar a ferramenta corretamente para prolongar sua vida útil.
              </p>
              <div className="relative aspect-[9/16] max-w-[315px] mx-auto rounded-xl overflow-hidden shadow-md border border-gray-200 bg-black">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/0KE4eFEDS88" 
                  title="Como lubrificar e usar martelete SDS Plus"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>

                    {/* SEÇÕES REESCRITAS APÓS O VÍDEO */}
          <section>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Retornando ao Dobevi: A Marca e o Custo-Benefício</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Após conhecermos uma alternativa premium e a forma correta de operar o sistema SDS Plus, é hora de voltarmos nossa atenção para o protagonista desta análise: o martelete Dobevi e a proposta da marca como um todo.</p>
              <p>Ao pesquisar por marteletes acessíveis, você inevitavelmente esbarrará no que chamamos de "Kit BEV". Esse termo abrange <strong>ferramentas importadas</strong> que chegam ao Brasil sob marcas como <strong>Dobevi, Hanab, Nakasaki, Camoli e Ofidra</strong>. Na prática, tratam-se muitas vezes do mesmo maquinário robusto de origem chinesa, importado e renomeado por diferentes empresas para oferecer o máximo de potência pelo menor preço possível.</p>
              <p>Compreender essa dinâmica é essencial: você não está pagando por uma grife, mas sim por uma ferramenta funcional, de projeto padronizado, que entrega exatamente a <strong>força bruta prometida</strong> sem os custos de uma marca tradicional.</p>
            </div>
          </section>

          <section className="mt-10">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Desempenho Prático: Alvenaria, Concreto e Madeira</h3>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Em nossos testes, o Dobevi mostrou seu verdadeiro valor na <strong>alvenaria e no concreto</strong>. A perfuração ocorre de maneira cadenciada e estável, <strong>reduzindo drasticamente o esforço físico</strong> quando comparado a furadeiras de impacto convencionais. Para remover pisos, azulejos ou abrir rasgos na parede, ele <strong>transforma horas de sofrimento manual em minutos</strong> de trabalho ágil.</p>
              <p>Ele se mostra altamente eficiente na abertura de rasgos para instalações elétricas ou hidráulicas em alvenaria. Se você tem dúvidas sobre a melhor técnica para esse tipo de serviço pesado, veja nosso guia passo a passo sobre <a href="/como-quebrar-concreto-com-martelete" className="text-[#b39700] font-bold hover:underline decoration-[#FFD700] decoration-2">como quebrar concreto com martelete</a>.</p>
              <p>Ele também pode ser usado em <strong>madeira graças ao mandril adaptador</strong> incluso, realizando perfurações limpas e rápidas. Contudo, preste muita atenção ao alerta abaixo:</p>
            </div>

            {/* BOX DE ALERTA DE ERRO COMUM */}
            <div className="my-8 border-l-4 border-amber-500 bg-amber-50 p-5 rounded-r-xl max-w-2xl mx-auto shadow-sm">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 text-base mb-1">🚨 Erro Comum a Evitar: Impacto na Madeira</h4>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    <strong>Nunca use a função de impacto (martelete) ao furar madeira!</strong> A vibração intensa vai quebrar e estilhaçar as fibras da madeira, arruinando a sua peça e podendo entortar ou quebrar a broca. Certifique-se sempre de desativar a função impacto na chave seletora, usando apenas a rotação.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Cuidados Essenciais: Aquecimento e Lubrificação</h3>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>O segredo para transformar este equipamento de entrada em um parceiro duradouro está no <strong>gerenciamento térmico e na lubrificação</strong>.</p>
              <p><strong>Gerenciamento Térmico:</strong> O motor do Dobevi <strong>esquenta consideravelmente</strong> sob carga contínua. Sempre que sentir a carcaça muito quente, faça uma pausa estratégica de <strong>5 minutos</strong> para que as bobinas resfriem, evitando o derretimento do isolamento interno.</p>
              <p><strong>Lubrificação:</strong> O impacto mecânico gera <strong>atrito severo</strong>. Adote o hábito de <strong>aplicar uma pequena quantidade de graxa</strong> (tipo EP - Extreme Pressure) no encaixe SDS da broca antes de usá-la. A cada 40 horas de uso pesado, faça uma inspeção no compartimento de graxa interno do martelete.</p>
            </div>
          </section>

          <section className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#FFD700] pl-4">Veredito: O Dobevi Realmente Vale a Pena?</h2>
            <div className="space-y-6 prose prose-lg prose-invert max-w-none text-gray-300">
              <p>A escolha pelo martelete Dobevi é uma decisão puramente <strong>pragmática</strong>. Se o seu projeto demanda quebrar concreto por mais de dois ou três dias, a <strong>compra da máquina já se paga</strong> se comparada ao valor de um aluguel diário. Você adquire um equipamento robusto que simplifica trabalhos braçais, perfeito para quem está <strong>montando a oficina em casa</strong> ou realiza reformas pontuais.</p>
            </div>

            {/* TABELA COMPARATIVA DE CUSTO-BENEFÍCIO */}
            <div className="my-8 overflow-hidden rounded-xl border border-gray-700 shadow-sm max-w-2xl mx-auto bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700">
                  <thead className="text-xs uppercase bg-gray-100 text-gray-800 font-bold border-b border-gray-200">
                    <tr>
                      <th scope="col" className="px-6 py-4">Opção</th>
                      <th scope="col" className="px-6 py-4">Custo Médio</th>
                      <th scope="col" className="px-6 py-4 text-center">Ponto de Equilíbrio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900 flex items-center gap-2">🛠️ Dobevi (Compra)</td>
                      <td className="px-6 py-4 font-semibold text-emerald-600">R$ 300 - R$ 370</td>
                      <td className="px-6 py-4 text-center">Se paga em <strong>3 dias de uso</strong> comparado ao aluguel.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">📦 Aluguel de Martelete</td>
                      <td className="px-6 py-4 text-gray-600">R$ 120 / dia</td>
                      <td className="px-6 py-4 text-center text-red-500">Ideal apenas para tarefas de 1 ou 2 dias.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">🏆 Bosch Professional</td>
                      <td className="px-6 py-4 text-gray-600">R$ 700 - R$ 900</td>
                      <td className="px-6 py-4 text-center">Para uso diário profissional (8h/dia).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* MINI COMPARATIVO FINAL - DOBEVI VS BOSCH */}
            <div className="mt-10 border-t border-gray-700 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="font-bold text-[#FFD700] text-base mb-2">Selecione o Dobevi se:</h4>
                  <ul className="space-y-2 list-inside list-disc">
                    <li>O seu orçamento de compra é restrito (R$ 300 - R$ 370).</li>
                    <li>O uso será residencial, esporádico ou em reformas pontuais.</li>
                    <li>Você precisa de um equipamento para "bater sem dó" sem peso no bolso.</li>
                    <li>Prefere um kit inicial completo já com acessórios inclusos.</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="font-bold text-gray-100 text-base mb-2">Selecione o Bosch se:</h4>
                  <ul className="space-y-2 list-inside list-disc text-gray-300">
                    <li>Trabalha profissionalmente 8 horas por dia quebrando concreto pesado.</li>
                    <li>Busca durabilidade industrial extrema a longo prazo.</li>
                    <li>Exige precisão milimétrica e tecnologia de amortecimento refinada.</li>
                    <li>Pode investir o triplo do valor buscando menor manutenção futura.</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-300 text-sm mt-6 leading-relaxed italic border-l-2 border-[#FFD700] pl-4">
                <strong>Veredito:</strong> Se você busca durabilidade extrema, precisão milimétrica e trabalha 8 horas por dia quebrando vigas, o investimento em um Bosch é inegociável. No entanto, se o seu cenário envolve reformas residenciais, uso esporádico ou se você precisa de um equipamento valente sem comprometer seu fluxo de caixa, o Dobevi (e seus irmãos de importação) entregam a força bruta necessária por uma fração do preço.
              </p>
            </div>
          </section>

          {/* FAQ EXPANSÍVEL (ACORDEÃO) */}
          <section className="mt-16 border-t border-gray-200 pt-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] mb-8 text-center">
              Dúvidas Frequentes (FAQ)
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-900 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span>{item.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#b39700] flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-slate-50/50 animate-slideDown">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
};
