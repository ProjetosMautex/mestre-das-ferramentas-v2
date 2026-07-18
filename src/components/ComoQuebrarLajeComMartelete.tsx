import React, { useState } from 'react';
import { BunnerDoMeiomartelete } from './BunnerDoMeiomartelete';
import { ExitIntentPopupmartelete } from './ExitIntentPopupmartelete';

export const ComoQuebrarLajeComMartelete: React.FC = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <ExitIntentPopupmartelete />
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/2/como quebrar laje com martelete.webp" 
              alt="Como Quebrar Laje com Martelete (Sem Comprometer a Estrutura)" 
              className="w-full h-full object-cover opacity-20 blur-sm"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/martelete/1920/1080?blur=4";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Como Quebrar Laje com Martelete <br/>
              <span className="text-[#FFD700]">(Sem Comprometer a Estrutura)</span>
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
                      e.currentTarget.src = "/images/autores/default.webp";
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
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 mb-8">
              Fazer reformas que mexem na estrutura sempre gera um pouco de medo e muitas dúvidas. Quando você quer ampliar um cômodo, esbarra na dificuldade de lidar com concreto duro.
            </p>
            <p>
              Se fizer isso sem o conhecimento certo, pode acabar comprometendo a segurança da casa. O trabalho exige muito mais do que apenas força bruta.
            </p>
            <p>
              Você precisa entender como o material se comporta e saber usar a ferramenta certa. Aprender como quebrar laje com martelete do jeito certo é o primeiro passo para evitar dores de cabeça na obra.
            </p>
          </div>

          <BunnerDoMeiomartelete />

          {/* Table of Contents (TOC) */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-12 mt-8">
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Índice do Conteúdo</h3>
            <ul className="space-y-2 text-blue-600 font-medium list-disc list-inside">
              <li><a href="#avaliacao" className="hover:underline">Avaliação Estrutural: O que verificar antes de começar?</a></li>
              <li><a href="#equipamentos" className="hover:underline">Equipamentos de proteção necessários (EPIs)</a></li>
              <li><a href="#escolha-martelete" className="hover:underline">Escolha do martelete adequado para demolição</a></li>
              <li><a href="#acessorios" className="hover:underline">Tipos de Acessórios: Quando usar Ponteiro ou Talhadeira?</a></li>
              <li><a href="#tecnica" className="hover:underline">Técnica correta para uso do martelete</a></li>
              <li><a href="#cuidados" className="hover:underline">Cuidados com ferragens, conduítes e canos</a></li>
              <li><a href="#descarte" className="hover:underline">Como fazer o descarte correto do entulho</a></li>
              <li><a href="#faq" className="hover:underline">Perguntas Frequentes (FAQ)</a></li>
            </ul>
          </div>

          <div className="w-full flex justify-center mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <img 
              src="/images/blog/2/como quebrar laje com martelete.webp" 
              alt="Como Quebrar Laje com Martelete" 
              className="max-h-80 object-contain hover:scale-105 transition-transform duration-300 rounded-lg" 
              loading="lazy" 
            />
          </div>

          <section id="avaliacao" className="mb-12 mt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Avaliação Estrutural: O que verificar antes de começar?</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Antes de ligar o martelete, lembre-se que nem toda laje pode ser removida. Muita gente confunde uma laje de forro (que só tampa o teto) com uma laje estrutural (que sustenta o peso da casa).</p>
              <p>O ideal é olhar a planta da casa ou chamar um engenheiro para avaliar os riscos. Sempre veja se tem vigas ou pilares escondidos no reboco antes de começar a quebrar.</p>
              <p>Ignorar isso pode transformar uma simples obra num grande prejuízo estrutural. A segurança da sua reforma começa na avaliação do que está sustentando o telhado.</p>
            </div>
          </section>

          <section id="equipamentos" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Equipamentos de proteção necessários (EPIs)</h2>
            <div className="w-full flex justify-center mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <img 
                src="/images/blog/2/epis para martelete.webp" 
                alt="Equipamentos de proteção necessários EPIs para Martelete" 
                className="max-h-80 object-contain hover:scale-105 transition-transform duration-300 rounded-lg" 
                loading="lazy" 
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Trabalhar sem proteção na demolição é um erro que pode sair caro para sua saúde. O concreto voando e a poeira fina não são só sujeira, eles causam riscos reais. Sempre use:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Óculos e Máscara PFF2:</strong> Protegem seus olhos dos pedaços de pedra e evitam que você respire aquele pó fino do cimento.</li>
                <li><strong>Protetor de ouvido:</strong> O barulho do martelete é muito alto e cansa rápido, então o abafador é obrigatório.</li>
                <li><strong>Luvas grossas ou antivibração:</strong> Ajudam a segurar a máquina firme e diminuem o cansaço nas mãos e braços.</li>
                <li><strong>Botas com biqueira de aço:</strong> Protegem seus pés caso algum bloco pesado de concreto caia no chão.</li>
              </ul>
              <p>Usar esses equipamentos não é frescura, é o que te protege de acidentes sérios durante o trabalho.</p>
            </div>
          </section>

          <section id="escolha-martelete" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Escolha do martelete adequado para demolição</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Evite usar um martelete perfurador pequeno para quebrar laje. Ele não tem força suficiente, vai forçar o motor e você vai demorar muito mais.</p>
              <p>Para esse serviço, você precisa de um martelete rompedor com bastante energia de impacto (medida em Joules). Ferramentas de 5 a 10 Joules servem para reparos rápidos, mas para quebrar laje inteira, procure máquinas acima de 15 Joules.</p>
              <p>O encaixe da broca também importa. Prefira o padrão SDS-Max, que é mais grosso e aguenta o tranco sem quebrar. Se não quiser comprar, vale a pena alugar uma máquina profissional em vez de queimar uma ferramenta fraca.</p>
              <div className="bg-[#FFFAF0] border-l-4 border-[#FFD700] p-4 my-6 rounded-r-lg">
                <p className="font-semibold text-gray-800 m-0">
                  💡 LEIA TAMBÉM: Quer ter certeza de que está investindo na ferramenta com a força em Joules correta para a sua obra? Acesse nosso guia completo e descubra <a href="/qual-o-melhor-martelete" className="text-blue-600 hover:underline">qual o melhor martelete do mercado atualmente</a>.
                </p>
              </div>
            </div>
          </section>

          <BunnerDoMeiomartelete />

          <section id="acessorios" className="mb-12 mt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Tipos de Acessórios: Quando usar Ponteiro ou Talhadeira?</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Usar a ponta certa faz toda a diferença na hora de quebrar o concreto.</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Ponteiro (ponta fina):</strong> Ele concentra toda a força da máquina num ponto só. É ótimo para começar o buraco ou quebrar um concreto muito duro.</li>
                <li><strong>Talhadeira (ponta chata):</strong> Serve para cortar em linha reta ou remover lascas mais largas. Use ela para descolar pedaços maiores depois de já ter furado.</li>
              </ul>
              <p>O truque na obra é usar os dois juntos. Você começa com o ponteiro para trincar a laje e depois entra com a talhadeira para soltar os blocos, forçando menos a máquina.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                   <div className="h-40 w-full flex items-center justify-center bg-gray-100 rounded mb-2 overflow-hidden">
                     <img src="/images/blog/2/tecnica para usar martelete.webp" alt="Ponteiro" className="object-cover h-full w-full opacity-90" loading="lazy" />
                   </div>
                   <p className="font-semibold text-center text-gray-800">Ponteiro SDS-Max (Foco)</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                   <div className="h-40 w-full flex items-center justify-center bg-gray-100 rounded mb-2 overflow-hidden">
                     <img src="/images/blog/2/descarte de entulho laje.webp" alt="Talhadeira" className="object-cover h-full w-full opacity-90" loading="lazy" />
                   </div>
                   <p className="font-semibold text-center text-gray-800">Talhadeira SDS-Max (Corte)</p>
                </div>
              </div>

            </div>
          </section>

          <section id="tecnica" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Técnica correta para uso do martelete</h2>
            <div className="w-full flex justify-center mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <img 
                src="/images/blog/2/tecnica para usar martelete.webp" 
                alt="Técnica correta para uso do martelete" 
                className="max-h-80 object-contain hover:scale-105 transition-transform duration-300 rounded-lg" 
                loading="lazy" 
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Usar bem o martelete não é só apertar o botão e empurrar. O erro mais comum é tentar fazer muita força, empurrando a máquina contra o concreto o tempo todo.</p>
              <p>Fazer isso só cansa seus braços e faz o motor da ferramenta esquentar mais rápido. O segredo é deixar o próprio peso da máquina fazer o trabalho sujo.</p>
              <p>Você só precisa segurar firme e guiar a ponta no lugar certo. Fique com as pernas um pouco afastadas para não perder o equilíbrio e não trave os cotovelos, deixando eles dobrarem um pouco para amortecer o impacto.</p>
              
              <div className="my-8 aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe 
                  width="100%" 
                  height="450" 
                  src="https://www.youtube.com/embed/EGY3eMbvx5g" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Posição do equipamento e postura do operador</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Trabalhe com o martelete meio inclinado ou reto (entre 45 e 90 graus). Evite usar a máquina acima da altura do seu ombro, porque isso vai acabar com as suas costas e pescoço rapidinho.</p>
              <p>Mantenha o corpo bem apoiado no chão, dobrando um pouco os joelhos. Isso ajuda a segurar o tranco da ferramenta sem te machucar.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Sequência de quebra (das bordas para o centro)</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>O jeito que você quebra o concreto muda tudo na obra. Nunca comece batendo no meio da laje, porque ali ela é mais frágil e pode ceder de uma vez.</p>
              <p>O certo é começar pelas bordas e ir quebrando na direção do centro. Assim, o concreto vai caindo aos poucos e você tem mais controle.</p>
              <p>Isso também evita que a vibração da máquina trinque as paredes em volta. O bloco de concreto cai livre, sem estragar vigas que precisam ficar intactas.</p>
            </div>
          </section>

          <section id="cuidados" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Cuidados com ferragens, conduítes e canos</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>A laje esconde canos e fios que podem te dar uma baita dor de cabeça. Antes de sair quebrando tudo, tente descobrir onde passam os conduítes e canos de água.</p>
              <p>Se você esbarrar num ferro grosso da estrutura, pare e não tente cortar ele logo de cara. Esses ferros mantêm a casa em pé.</p>
              <p>Se precisar limpar o concreto em volta do ferro, use o martelete devagar, sem fazer muita força. Bater forte demais ali pode soltar a ferragem do resto do concreto que vai ficar.</p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
                <h4 className="text-xl font-bold text-red-800 mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  DICA PRÁTICA: Como cortar os vergalhões expostos?
                </h4>
                <p className="text-red-900 m-0">
                  Nunca use a ponta do martelete para tentar cortar os ferros da laje. Além de estragar a sua broca, a vibração solta a ferragem. O jeito certo de fazer isso é usar uma esmerilhadeira com disco de corte para metal, que faz um serviço rápido e limpo.
                </p>
              </div>

            </div>
          </section>

          <section id="descarte" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Como fazer o descarte correto do entulho</h2>
            <div className="w-full flex justify-center mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <img 
                src="/images/blog/2/descarte de entulho laje.webp" 
                alt="Como fazer o descarte correto do entulho" 
                className="max-h-80 object-contain hover:scale-105 transition-transform duration-300 rounded-lg" 
                loading="lazy" 
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Quebrar laje faz muito mais entulho do que parece. E jogar esse lixo em qualquer lugar pode render uma multa cara para o dono da obra.</p>
              <p>A melhor saída é alugar uma caçamba própria para entulho. Tente não misturar restos de gesso, madeira ou lixo de casa com o concreto quebrado.</p>
              <p>E sempre confira se a empresa da caçamba tem o documento certo (chamado de CTR). Isso garante que eles vão jogar o entulho num aterro legalizado.</p>
            </div>
          </section>

          <section id="faq" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Perguntas Frequentes (FAQ)</h2>
            <div className="space-y-4">
              
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button 
                  onClick={() => setFaq1(!faq1)} 
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-800">Qual a diferença entre martelete perfurador e rompedor?</span>
                  <svg className={`w-6 h-6 text-gray-500 transform transition-transform ${faq1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faq1 && (
                  <div className="p-5 text-gray-700 prose prose-lg">
                    <p>O martelete perfurador serve mais para fazer furos normais com brocas, como colocar buchas na parede. O rompedor é feito só para quebrar e demolir peso pesado, pois bate muito mais forte. Usar um perfurador para quebrar laje vai acabar queimando a máquina.</p>
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button 
                  onClick={() => setFaq2(!faq2)} 
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-800">Posso quebrar laje de isopor (EPS) com martelete?</span>
                  <svg className={`w-6 h-6 text-gray-500 transform transition-transform ${faq2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faq2 && (
                  <div className="p-5 text-gray-700 prose prose-lg">
                    <p>Sim, mas só para tirar o contrapiso que fica por cima do isopor. Se você bater com o martelete direto no isopor, vai rasgar tudo e pode até quebrar as vigotas que seguram a laje. Para cortar a parte de isopor, use um serrote ou estilete.</p>
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button 
                  onClick={() => setFaq3(!faq3)} 
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-800">Quantos Joules o martelete precisa ter para quebrar concreto?</span>
                  <svg className={`w-6 h-6 text-gray-500 transform transition-transform ${faq3 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faq3 && (
                  <div className="p-5 text-gray-700 prose prose-lg">
                    <p>Para quebrar laje de casa e concreto de estrutura, você vai precisar de um martelete com pelo menos 15 a 20 Joules de força. Modelos mais fracos que isso vão demorar demais e esquentar muito.</p>
                  </div>
                )}
              </div>

            </div>
          </section>

          <section className="mb-12 mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Conclusão</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Fazer uma reforma segura e rápida depende muito de usar a máquina certa e saber o jeito de trabalhar. Quebrar concreto cansa, mas não precisa ser um pesadelo.</p>
              <p>Usando os equipamentos de proteção, escolhendo o martelete com a força certa e quebrando pelas bordas, o serviço rende muito mais.</p>
              <p>Saber o que está fazendo sempre ganha da força bruta na obra. Trabalhe com calma e você consegue fazer o serviço sem quebrar a ferramenta, se machucar e nem cometer erros.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
