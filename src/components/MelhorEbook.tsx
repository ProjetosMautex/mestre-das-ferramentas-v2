import React, { useState } from 'react';
import { Target, CheckCircle, ExternalLink, ArrowRight, Lightbulb, PiggyBank, Hammer, Package, Wrench, ShieldCheck, Mail, ShoppingCart, Zap, Clock, Star, Cpu, Trophy } from 'lucide-react';
import { products } from '../data/products';

export const MelhorEbook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  const handleNextPage = () => {
    setCurrentPage(p => Math.min(totalPages, p + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    setCurrentPage(p => Math.max(1, p - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-8 bg-[#1a1a1a]">
      <div className="w-full max-w-4xl bg-black rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center border border-zinc-800 relative">
        <div className="w-full flex items-start justify-center min-h-[70vh] p-6 md:p-12">
          
          {currentPage === 1 && (
            <div className="w-full flex flex-col justify-center items-center my-auto min-h-[60vh] gap-8 animate-in fade-in duration-700">
              <img 
                src="/images/melhorebook.webp" 
                alt="Projetos Práticos para Renovar sua Casa" 
                className="w-full max-w-2xl h-auto object-contain shadow-2xl rounded-2xl animate-in fade-in duration-700"
              />
            </div>
          )}

          {currentPage === 2 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  MENTALIDADE
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex items-center gap-3 leading-tight tracking-tight">
                  <span className="text-[#FFD700]"><Target className="w-10 h-10 md:w-14 md:h-14" /></span>
                  <span className="flex-1">
                    O Despertar do <br className="hidden md:block" />
                    <span className="text-[#FFD700] block mt-2 text-3xl md:text-5xl">"Faça Você Mesmo"</span>
                  </span>
                </h1>
              </div>

              <div className="space-y-8">
                <section>
                  <p className="text-xl leading-relaxed text-zinc-300 mb-6">
                    Sabe aquela prateleira que está encostada no canto da sala há meses? Ou aquele quadro que você comprou e ainda está no chão esperando alguém instalar?
                  </p>
                  <p className="text-xl leading-relaxed text-zinc-300 mb-6">
                    A maioria das pessoas paga fortunas para "maridos de aluguel" para resolver essas pequenas coisas. E adivinhe: não é por falta de habilidade manual. É simplesmente por <strong className="text-white">falta de coragem</strong> e pelo medo de esburacar a parede ou estragar o móvel.
                  </p>
                  
                  <div className="bg-zinc-800/40 p-6 md:p-8 rounded-2xl border border-zinc-700/50 shadow-inner group">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <ShieldCheck className="text-green-500 w-8 h-8" /> 
                      A Verdade Que Ninguém Conta
                    </h2>
                    <p className="text-lg leading-relaxed text-zinc-300 mb-4">
                      O mercado quer que você acredite que montar um móvel ou instalar um suporte de TV exige um dom natural ou anos de experiência. Isso é mentira.
                    </p>
                    <p className="text-lg leading-relaxed text-zinc-300">
                      O "Faça Você Mesmo" (DIY) não exige talento nato. Ele exige apenas duas coisas: o <strong className="text-[#FFD700]">passo a passo correto</strong> e a <strong className="text-[#FFD700]">ferramenta certa</strong> nas mãos. Com isso, o risco de errar cai para zero.
                    </p>
                  </div>
                </section>

                <section className="bg-gradient-to-r from-[#FFD700]/10 to-transparent p-6 md:p-8 rounded-xl border-l-4 border-[#FFD700]">
                  <h3 className="text-2xl font-bold text-white mb-3">O Nosso Acordo Para Este Fim de Semana</h3>
                  <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                    <p>
                      Com os projetos perfeitamente mapeados nas próximas páginas, sua casa vai se transformar. Esqueça os orçamentos caros, as taxas abusivas de montadores e a frustração de esperar semanas por um profissional que desmarca em cima da hora.
                    </p>
                    <p className="text-xl font-medium text-white italic">
                      A partir de hoje, quem tem o controle da sua casa é você.
                    </p>
                  </div>
                </section>

                <div className="text-center pt-4">
                  <p className="text-zinc-400 text-lg md:text-xl flex items-center justify-center gap-2">
                    Vire a página, escolha o seu primeiro projeto e vamos colocar a mão na massa. <ArrowRight className="text-[#FFD700]" />
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  VITÓRIAS RÁPIDAS
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex items-center gap-3 leading-tight tracking-tight">
                  <span className="text-blue-400"><Zap className="w-10 h-10 md:w-14 md:h-14" /></span>
                  <span className="flex-1">Projetos 1 e 2</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-300 mt-4 leading-relaxed">
                  As melhores mudanças em casa são aquelas que você começa e termina no mesmo dia. Vamos começar com dois projetos que levam menos de 30 minutos e mudam completamente o ambiente.
                </p>
              </div>

              <div className="space-y-10">
                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="p-6 md:p-8 pb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Projeto 1: A Parede de Quadros Perfeita</h2>
                  </div>
                  <div className="w-full bg-black border-y border-zinc-800 flex justify-center py-2">
                    <img src="/images/A Parede de Quadros Perfeita.webp" alt="Parede de Quadros Perfeita" className="w-full h-auto max-h-[400px] object-contain" />
                  </div>
                  <div className="p-6 md:p-8 pt-6 space-y-4">
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      Pare de acumular quadros encostados no chão ou no fundo do guarda-roupa. Criar uma composição harmonizada (uma "Gallery Wall") na parede da sala dá vida imediata a um cômodo apagado.
                    </p>
                    
                    <div className="bg-zinc-800/60 p-5 rounded-xl border-l-[4px] border-[#FFD700] mt-4 space-y-4">
                      <h3 className="text-[#FFD700] text-xl font-bold">O Segredo do Profissional (Como fazer sem errar):</h3>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">Não fure às cegas:</strong> O maior erro é tentar furar a parede medindo no "olhômetro". Você vai acabar com uma parede cheia de buracos extras.</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">O Truque do Papel:</strong> Recorte folhas de jornal ou papel pardo no exato tamanho dos seus quadros. Cole esses papéis na parede usando fita crepe.</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">Ajuste o Layout:</strong> Mova os papéis até achar a posição perfeita. Dê um passo para trás, olhe de longe e ajuste.</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">O Furo Certeiro:</strong> Faça o furo direto sobre o papel, exatamente onde o parafuso deve ficar. Depois, é só rasgar o papel, colocar a bucha (tamanho 5 ou 6 é ideal para quadros) e fixar. Zero erro.</p>
                    </div>
                  </div>
                </section>

                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="p-6 md:p-8 pb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Projeto 2: Ajuste e Conserto de Dobradiças</h2>
                  </div>
                  <div className="w-full bg-black border-y border-zinc-800 flex justify-center py-2">
                    <img src="/images/Ajuste e Fixação de Dobradiças.webp" alt="Ajuste de Dobradiças" className="w-full h-auto max-h-[400px] object-contain" />
                  </div>
                  <div className="p-6 md:p-8 pt-6 space-y-4">
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      Sabe aquela porta de armário torta, que fica arrastando embaixo ou simplesmente não fecha direito? Você não precisa chamar um marceneiro para isso.
                    </p>
                    
                    <div className="bg-zinc-800/60 p-5 rounded-xl border-l-[4px] border-[#FFD700] mt-4 space-y-4">
                      <h3 className="text-[#FFD700] text-xl font-bold">O Segredo do Profissional (Como consertar em minutos):</h3>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">Entenda a Dobradiça:</strong> Se a porta está torta, olhe para a dobradiça metálica por dentro. Ela tem dois parafusos principais no meio. Um ajusta a porta para a direita/esquerda, e o outro empurra a porta para frente/trás. Gire devagar até a porta alinhar.</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">O Truque do Furo Espanado:</strong> O parafuso soltou porque a madeira esfarelou e o buraco ficou largo? Não troque a porta. Pegue 2 palitos de dente, passe um pouco de cola branca e enfie no buraco espanado. Quebre o excesso do palito que ficou para fora.</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">A Fixação Mágica:</strong> Agora, coloque o parafuso de volta no mesmo lugar. O palito vai criar o "aperto" necessário e o parafuso ficará mais firme do que quando o móvel era novo.</p>
                    </div>
                  </div>
                </section>

                <section className="bg-zinc-900 border border-red-500/30 p-6 md:p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-4 flex items-center gap-2">⚠️ O Aviso Importante:</h3>
                  <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                    <p>Saber o truque é fundamental, mas preste muita atenção: tentar apertar um parafuso novo em uma madeira dura na força da chave de fenda manual vai te deixar com bolhas nas mãos e o serviço mal feito.</p>
                    <p>Furar a parede com uma máquina fraca vai trepidar tanto que fará um rombo no seu reboco, inutilizando a bucha.</p>
                    <p>Para fazer esses projetos sem destruir seus móveis ou esburacar a parede toda, o segredo não é a força do seu braço...</p>
                    <p className="text-[#FFD700] font-bold text-2xl pt-2">É a máquina que você usa.</p>
                    <p className="italic text-zinc-400 mt-2 text-base">👉 (Na próxima página, descubra a ferramenta definitiva que faz o trabalho pesado por você).</p>
                  </div>
                </section>
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div className="border-b border-zinc-800 pb-6 text-center md:text-left">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  A ESCOLHA INTELIGENTE
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4 leading-tight tracking-tight">
                  <span className="text-[#FFD700] flex justify-center"><Star className="w-12 h-12 md:w-14 md:h-14 fill-[#FFD700]" /></span>
                  <span className="flex-1">
                    O "Pulo do Gato" <br className="hidden md:block" />
                    <span className="text-[#FFD700] text-2xl md:text-4xl font-black tracking-normal block mt-2">
                      Bosch GSB 185-LI
                    </span>
                  </span>
                </h1>
              </div>

              <div className="space-y-8">
                <section className="text-lg md:text-xl leading-relaxed text-zinc-300">
                  <p className="mb-5 bg-zinc-800/30 p-5 rounded-lg border-l-4 border-blue-500">
                    <strong className="text-white">Antes de irmos para os projetos maiores, você precisa de uma aliada.</strong> Se você tentar montar um móvel complexo ou furar uma parede com uma chave de fenda manual, vai desistir no meio do caminho com bolhas nas mãos.
                  </p>
                  <p className="mb-5">
                    Se você saísse em busca da máquina perfeita hoje para realizar estes trabalhos sem sufoco, chegaria inevitavelmente a um modelo: a <strong className="text-white">Bosch GSB 185-LI</strong>.
                  </p>
                  <p>Muitos usuários gastam o mesmo valor em marcas desconhecidas que prometem muito e não entregam quase nada. Com este modelo, <strong className="text-[#FFD700]">você inverte o jogo:</strong> leva para casa um equipamento profissional pagando preço de hobby.</p>
                </section>

                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="flex flex-col md:flex-row relative z-10 w-full min-h-full">
                    <div className="w-full md:w-1/2 bg-transparent flex items-center justify-center p-0 md:p-4 min-h-[300px]">
                      <img 
                        src="/images/bosch 185 li ebook.webp" 
                        alt="Parafusadeira Bosch GSB 185-LI" 
                        className="w-full h-auto object-cover md:object-contain transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center gap-4 border-t md:border-t-0 md:border-l border-zinc-800">
                      <h3 className="text-2xl font-black text-white mb-2">O Padrão Ouro</h3>
                      <ul className="space-y-4 mb-6 flex-1">
                        <li className="text-zinc-300 text-[15px]">
                          <div className="flex items-center gap-2 mb-1"><CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> <span className="font-bold text-white">Motor Brushless:</span></div>
                          <span className="pl-7 block">Frio, durável e não solta faíscas.</span>
                        </li>
                        <li className="text-zinc-300 text-[15px]">
                          <div className="flex items-center gap-2 mb-1"><CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> <span className="font-bold text-white">Função Impacto:</span></div>
                          <span className="pl-7 block">Força real para furar tijolo e concreto.</span>
                        </li>
                        <li className="text-zinc-300 text-[15px]">
                          <div className="flex items-center gap-2 mb-1"><CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> <span className="font-bold text-white">Design Compacto:</span></div>
                          <span className="pl-7 block">Acesso fácil a cantos curtos e gavetas.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 group hover:border-[#FFD700]/30 transition">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3 flex items-center gap-2"><Cpu size={24} /> Tecnologia Acessível</h3>
                    <p className="text-zinc-300 text-[15px] md:text-base leading-relaxed">
                      Equipada com motor <strong className="text-white">Brushless</strong> de última geração. Ela aproveita cada gota da bateria e dura até 10x mais. A Bosch conseguiu democratizar essa tecnologia, entregando uma ferramenta indestrutível por um valor justo.
                    </p>
                  </div>
                  <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800 group hover:border-[#FFD700]/30 transition">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-3 flex items-center gap-2"><Target size={24} /> Compacta & Gigante</h3>
                    <p className="text-zinc-300 text-[15px] md:text-base leading-relaxed">
                      Não se engane pelo design moderno e leve. O alcance compacto permite trabalhar dentro de armários apertados sem cansar o braço. E apesar de pequena, entrega força bruta, garantindo torque absurdo para parafusar em madeiras densas sem "chorar".
                    </p>
                  </div>
                </section>
                
                <section className="bg-zinc-900/60 p-6 md:p-8 rounded-xl border border-zinc-800 hover:border-[#FFD700]/30 transition group">
                  <h3 className="text-xl md:text-2xl font-bold text-[#FFD700] mb-3 flex items-center gap-2"><Zap size={24} className="text-blue-400 group-hover:text-white transition" /> Versatilidade: Impacto Verdadeiro</h3>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                    Ela vai além do básico e conta com a <strong className="text-white">Função Impacto</strong>. Isso é indispensável para furação em alvenaria. É ter tudo em uma única ferramenta; você não precisa ter uma furadeira gigante e velha guardada só para instalar um quadro na sala.
                  </p>
                </section>

                <div className="flex flex-col items-center justify-center gap-3 mt-6">
                  <a 
                    href={products["parafusadeira-bosch-gsb-185-li"].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full md:w-auto bg-[#FFD700] hover:bg-yellow-400 text-black font-black py-4 px-8 rounded-xl text-lg md:text-xl tracking-tight text-center transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,215,0,0.3)] flex flex-col md:flex-row items-center justify-center gap-2"
                  >
                    👉 VERIFICAR PREÇO E DISPONIBILIDADE
                  </a>
                  <p className="text-zinc-400 font-medium italic">(Minha recomendação oficial de custo-benefício)</p>
                </div>

                <div className="mt-8 bg-zinc-800/40 border border-zinc-700/50 p-6 md:p-8 rounded-xl text-center shadow-inner">
                  <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                    Agora que você já sabe qual é a ferramenta certa para o trabalho pesado, vire a página. Vamos aos <strong className="text-white">Projetos 3 e 4</strong>, onde vamos colocar essa força bruta em prática na sua casa.
                  </p>
                </div>

              </div>
            </div>
          )}

          {currentPage === 5 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  A FERRAMENTA NA PRÁTICA
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex items-center gap-3 leading-tight tracking-tight">
                  <span className="text-blue-400"><Wrench className="w-10 h-10 md:w-14 md:h-14" /></span>
                  <span className="flex-1">Projetos 3 e 4</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-300 mt-4 leading-relaxed">
                  Agora que você já tem a ferramenta certa em mãos, vamos subir o nível. Estes dois projetos vão modernizar a sua casa, mas exigem precisão e força bruta.
                </p>
              </div>

              <div className="space-y-10">
                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="p-6 md:p-8 pb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Projeto 3: A Instalação do Suporte de TV</h2>
                  </div>
                  <div className="w-full bg-black border-y border-zinc-800 flex justify-center py-2">
                    <img src="/images/Instalação de Suporte de TV.webp" alt="Instalação de TV" className="w-full h-auto max-h-[400px] object-contain" />
                  </div>
                  <div className="p-6 md:p-8 pt-6 space-y-4">
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      Liberte espaço na sala e traga aquele visual de "cinema" pendurando sua TV diretamente na parede com total segurança.
                    </p>
                    
                    <div className="bg-zinc-800/60 p-5 rounded-xl border-l-[4px] border-[#FFD700] mt-4 space-y-4">
                      <h3 className="text-[#FFD700] text-xl font-bold">O Segredo do Profissional (Para a TV não cair):</h3>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">A Altura de Ouro:</strong> O centro da sua TV deve ficar exatamente na altura dos seus olhos quando você estiver sentado no sofá. Não coloque alto demais para não dar dor no pescoço.</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">O Truque da Fita:</strong> Antes de furar, cole fita crepe sobre as marcações. Isso evita que a broca escorregue e lasque a pintura da parede.</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">A Função Impacto em Ação (Onde os amadores choram):</strong> Para suportar o peso de uma TV, você precisa de furos grossos (buchas 8mm ou 10mm). Se você tentar furar tijolo ou concreto sem a Função Impacto da sua Bosch, a broca vai derreter, o furo vai ficar frouxo e sua TV corre risco de cair. Com o impacto ativado, a máquina entra na parede como uma faca quente na manteiga.</p>
                    </div>
                  </div>
                </section>

                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="p-6 md:p-8 pb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Projeto 4: Prateleiras Flutuantes</h2>
                  </div>
                  <div className="w-full bg-black border-y border-zinc-800 flex justify-center py-2">
                    <img src="/images/Instalação de Prateleiras Flutuantes.webp" alt="Prateleiras Flutuantes" className="w-full h-auto max-h-[400px] object-contain" />
                  </div>
                  <div className="p-6 md:p-8 pt-6 space-y-4">
                    <p className="text-zinc-300 text-lg leading-relaxed">
                      Elas dão um toque rústico ou moderno imediato ao ambiente. Em menos de 20 minutos, você adiciona espaço organizado para livros ou decoração no seu escritório, quarto ou sala, sem deixar suportes feios aparentes.
                    </p>
                    
                    <div className="bg-zinc-800/60 p-5 rounded-xl border-l-[4px] border-[#FFD700] mt-4 space-y-4">
                      <h3 className="text-[#FFD700] text-xl font-bold">O Segredo do Profissional (Zero Sujeira e Nível Perfeito):</h3>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">O Nível é Rei:</strong> Prateleira torta destrói a decoração. Se você não tem uma ferramenta de nível em casa, baixe um aplicativo de "Nível Bolha" no seu celular e coloque em cima da prateleira antes de marcar os furos.</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">O Truque do Post-it:</strong> Dobre um papel adesivo (Post-it) ao meio e cole na parede, bem embaixo de onde vai fazer o furo. Ele vai funcionar como uma "pazinha" e recolher todo o pó do tijolo. Seu chão continua limpo.</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">Furação 100% Reta:</strong> O suporte invisível exige que o buraco na parede seja perfeitamente reto. O motor estável e o design equilibrado da máquina que te indiquei garantem que a sua mão não trema, deixando a prateleira absurdamente firme.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}

          {currentPage === 6 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  O PROJETO MESTRE
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex items-center gap-3 leading-tight tracking-tight">
                  <span className="text-blue-400"><Trophy className="w-10 h-10 md:w-14 md:h-14" /></span>
                  <span className="flex-1">A Montagem do Seu Primeiro Móvel</span>
                </h1>
              </div>

              <div className="space-y-10">
                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="w-full bg-black border-b border-zinc-800 flex justify-center py-2">
                    <img src="/images/Montagem do Primeiro Móvel Comprado na Internet.webp" alt="Montagem do Primeiro Móvel" className="w-full h-auto max-h-[450px] object-contain" />
                  </div>
                  <div className="p-6 md:p-8 space-y-6">
                    <div className="text-lg md:text-xl text-zinc-300 leading-relaxed space-y-4">
                      <p>
                        Comprar móveis pela internet economiza muito dinheiro, mas pagar a taxa abusiva dos montadores (e esperar semanas pelo agendamento) acaba com a alegria da compra. Com a ferramenta certa na mão, montar um rack de TV ou uma mesinha de cabeceira vira um "Lego para adultos".
                      </p>
                      <p>
                        Você toma o controle da sua casa. Mas, para não se perder no meio de tantas peças de madeira, você precisa da mentalidade certa.
                      </p>
                    </div>
                    
                    <div className="bg-zinc-800/60 p-5 rounded-xl border-l-[4px] border-[#FFD700] space-y-4">
                      <h3 className="text-[#FFD700] text-xl font-bold">Os Segredos do Montador Profissional:</h3>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">A Técnica dos Copos Plásticos:</strong> O erro número um do iniciante é rasgar todos os saquinhos de ferragens juntos. Antes de começar, separe os parafusos, cavilhas e pregos em copos descartáveis diferentes. Coloque um pedaço de papel dentro de cada copo com a letra correspondente do manual (Parafuso A, Prego B). Você nunca mais vai usar a ferragem errada.</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">O Mapa dos Furos:</strong> Ao ler o manual, não olhe apenas para o formato da tábua de madeira. Olhe para a posição dos pequenos buracos desenhados nela. São os furos que indicam qual é a parte de cima, de baixo, da frente e de trás da peça. "Leia duas vezes, parafuse uma".</p>
                      <p className="text-zinc-300 text-[15px] md:text-base"><strong className="text-white">Use a Embreagem da Máquina:</strong> Lembra dos números (1 a 20) que ficam na frente da sua parafusadeira? Aquilo controla a força. Para móveis de MDF, coloque no número 3 ou 4. Assim, a máquina para de girar sozinha quando o parafuso entra, evitando que você fure a madeira de um lado ao outro.</p>
                    </div>

                    <div className="pt-4 border-t border-zinc-700/50 space-y-4">
                      <h3 className="text-2xl font-bold text-white">O Próximo Nível</h3>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Não existe sensação mais gratificante e viciante do que olhar para a sua sala no final de semana, apontar para um móvel bonito e dizer: <strong className="text-[#FFD700]">"Fui eu que montei"</strong>.
                      </p>
                      <p className="text-zinc-300 text-lg leading-relaxed">
                        Começar por móveis pequenos e médios é o caminho perfeito para você pegar confiança e dominar a sua ferramenta nova.
                      </p>
                    </div>

                    <div className="bg-red-900/10 border border-red-500/20 p-5 rounded-xl">
                      <p className="text-zinc-300 text-base leading-relaxed">
                        <strong className="text-red-400">Mas preste muita atenção:</strong> Quando você decidir subir de nível e montar móveis grandes (como guarda-roupas de 6 portas ou armários de cozinha completos), o jogo muda completamente. Móveis complexos exigem técnicas avançadas de "esquadro", alinhamento de trilhos e nivelamento de portas que nunca vêm escritas nos manuais de fábrica. Um guarda-roupa montado sem esses macetes profissionais fica balançando e as gavetas começam a despencar no primeiro mês de uso.
                      </p>
                      <p className="text-zinc-400 text-sm mt-3 italic text-center">
                        (Mas vamos deixar os projetos gigantes para um outro momento. Por hoje, sua casa já está prestes a mudar de cara!)
                      </p>
                    </div>

                  </div>
                </section>
              </div>
            </div>
          )}

          {currentPage === 7 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="border-b border-zinc-800 pb-6 text-center md:text-left">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  CONCLUSÃO
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4 leading-tight tracking-tight">
                  <span className="text-green-500 flex justify-center"><CheckCircle className="w-12 h-12 md:w-14 md:h-14" /></span>
                  <span className="flex-1">O Seu Próximo Passo</span>
                </h1>
              </div>

              <div className="space-y-8">
                <section className="text-lg md:text-xl leading-relaxed text-zinc-300 text-center md:text-left">
                  <p className="mb-4">
                    <strong className="text-white text-2xl relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-[#FFD700]">Parabéns!</strong> Você já tem o mapa completo para transformar sua casa hoje mesmo. 
                  </p>
                  <p className="text-zinc-300">Toda grande mudança começa no primeiro furo na parede, e ter o controle para consertar e melhorar o seu próprio ambiente não tem preço.</p>
                </section>

                <section className="bg-zinc-900 border-2 border-red-500/50 rounded-2xl p-6 md:p-8 shadow-xl relative mt-4">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 text-red-500">
                    <Mail size={28} /> O Aviso Mais Importante (Atenção)
                  </h3>
                  <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-4">
                    O nosso guia prático acaba aqui, mas o seu preparo não. <strong className="text-white">Fique de olho na sua caixa de entrada de e-mail amanhã cedo.</strong>
                  </p>
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    Eu vou te enviar uma mensagem rápida revelando um segredo extra para você <strong className="text-[#FFD700]">não queimar a broca (e nem o motor)</strong> da sua parafusadeira nova logo na primeira semana de uso. É um erro bobo que 80% dos iniciantes cometem e que destrói a máquina. <strong className="text-red-400">Não perca esse e-mail!</strong>
                  </p>
                </section>

                <section className="mt-8 bg-gradient-to-br from-[#FFD700]/20 to-zinc-900 border-2 border-[#FFD700] rounded-2xl p-6 md:p-10 shadow-[0_0_40px_rgba(255,215,0,0.15)] text-center relative overflow-hidden">
                  <Wrench className="absolute -left-10 -top-10 w-48 h-48 text-[#FFD700]/10 pointer-events-none" />
                  <ShoppingCart className="absolute -right-10 -bottom-10 w-64 h-64 text-[#FFD700]/5 pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4 flex justify-center items-center gap-3">
                       Tudo Pronto para o Fim de Semana?
                    </h3>
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                      Se você já escolheu qual será o seu primeiro projeto, mas ainda não tem a ferramenta bruta nas mãos para começar, deixei o link da oferta especial que te indiquei logo abaixo.
                    </p>
                    
                    <a 
                      href={products["parafusadeira-bosch-gsb-185-li"].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-black py-4 md:py-6 px-4 md:px-8 rounded-xl text-[16px] md:text-xl uppercase tracking-widest text-center transition-all transform hover:-translate-y-2 shadow-[0_10px_30px_rgba(255,215,0,0.4)] flex flex-col md:flex-row items-center justify-center gap-3 mx-auto max-w-2xl"
                    >
                      <span> 👉 GARANTIR MINHA BOSCH GSB 185-LI EM OFERTA AGORA</span>
                    </a>

                    <p className="mt-8 text-xl font-medium text-zinc-300 italic">Nos vemos amanhã lá no seu e-mail! Mãos à obra.</p>
                  </div>
                </section>

                <div className="pt-4 md:pt-8 border-t border-zinc-800 text-center pb-20 md:pb-8">
                  <p className="text-zinc-500 font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2">
                    <CheckCircle size={16} /> Fim do Ebook
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
        
        {totalPages > 1 && (
          <div className="w-full p-4 flex justify-between items-center bg-zinc-900 border-t border-zinc-800">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-6 py-2 bg-zinc-800 text-white rounded-lg disabled:opacity-30 hover:bg-zinc-700 transition font-medium"
            >
              Anterior
            </button>
            <span className="text-zinc-400 font-medium">
              Página {currentPage} de {totalPages}
            </span>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-6 py-2 bg-[#FFD700] text-black font-bold rounded-lg disabled:opacity-50 hover:bg-[#ffcd38] transition"
            >
              Próxima
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
