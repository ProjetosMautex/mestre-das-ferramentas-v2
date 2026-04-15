import React, { useState } from 'react';
import { AlertTriangle, Zap, Wrench, Cpu, Settings, Flame, ShieldCheck, Battery, Clock, ZapOff, CheckCircle, Target, DollarSign, Star, ExternalLink, ArrowRight, Table, Lightbulb, Check, XCircle, Briefcase, PiggyBank } from 'lucide-react';
import { products } from '../data/products';

export const Ebook: React.FC = () => {
  // Estado para controlar a página atual do eBook
  const [currentPage, setCurrentPage] = useState(1);
  
  // Total de páginas no momento
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
      
      {/* Container Principal do Ebook */}
      <div className="w-full max-w-4xl bg-black rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center border border-zinc-800 relative">
        
        {/* Renderização da Página Atual */}
        <div className="w-full flex items-start justify-center min-h-[70vh] p-6 md:p-12">
          {currentPage === 1 && (
            <div className="w-full flex justify-center items-center my-auto min-h-[60vh]">
              <img 
                src="/images/ebook.webp" 
                alt="Capa do Ebook: O Mapa das Parafusadeiras" 
                className="w-full max-w-2xl h-auto object-contain shadow-2xl animate-in fade-in duration-700"
              />
            </div>
          )}
          
          {currentPage === 2 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Título */}
              <div className="border-b border-zinc-800 pb-6">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex items-center gap-3 leading-tight tracking-tight">
                  <span className="text-[#FFD700]"><AlertTriangle className="w-10 h-10 md:w-14 md:h-14" /></span>
                  <span className="flex-1">
                    A Mentira dos "Volts" <br className="hidden md:block" />
                    <span className="text-gray-400 text-2xl md:text-3xl block mt-2 font-bold tracking-normal">(O Choque de Realidade)</span>
                  </span>
                </h1>
              </div>

              <div className="space-y-8">
                {/* Seção 1: Marketing */}
                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
                    <Zap size={24} /> O que o marketing não te conta
                  </h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Você já entrou em um site ou loja e viu máquinas baratas estampando <strong className="text-white">"21V"</strong>, <strong className="text-white">"26V"</strong> ou até <strong className="text-white">"36V"</strong> em letras garrafais na caixa?
                  </p>
                  <div className="bg-red-900/10 border-l-4 border-red-500 p-4 mb-5 rounded-r">
                    <p className="text-red-400 font-bold text-lg">Cuidado: Isso é uma armadilha visual.</p>
                  </div>
                  <p className="text-lg leading-relaxed text-zinc-300">
                    Muitas marcas genéricas aumentam esses números apenas para impressionar quem não conhece a técnica. Na prática, a maioria dessas máquinas não entrega sequer a potência de uma bateria profissional de 12V de verdade. É o que chamamos de <strong className="text-[#FFD700]">"Voltagem de Marketing"</strong>: números altos em máquinas leves que servem apenas para atrair o seu bolso.
                  </p>
                </section>

                {/* Seção 2: Construção Real */}
                <section className="bg-zinc-800/40 p-6 md:p-8 rounded-2xl border border-zinc-700/50 shadow-inner">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Wrench size={24} className="text-zinc-400" /> Voltagem vs. Construção Real
                  </h2>
                  <p className="text-lg leading-relaxed mb-5 text-zinc-300">
                    O número de Volts indica apenas o "tamanho do tanque", mas não a qualidade do motor.
                  </p>
                  <ul className="space-y-4 text-lg text-zinc-300">
                    <li className="flex gap-3 items-start">
                      <span className="text-green-500 font-bold mt-1">✓</span>
                      <span>Uma máquina de <strong className="text-white">18V de uma marca líder</strong> (como a Bosch) é, quase sempre, muito mais potente, durável e eficiente do que uma "genérica" de supostos 21V.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-green-500 font-bold mt-1">✓</span>
                      <span>Máquinas profissionais são construídas com componentes internos que aguentam o tranco sem derreter a fiação ou queimar o motor no primeiro esforço real.</span>
                    </li>
                  </ul>
                  <div className="mt-8 text-center bg-zinc-900/60 p-5 rounded-xl border border-zinc-800">
                    <p className="text-xl font-bold text-white italic">
                      "A conta é simples: É melhor ter 18V reais de engenharia alemã do que 26V de plástico e componentes de baixa qualidade."
                    </p>
                  </div>
                </section>

                {/* Seção 3: Torque */}
                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">
                    O que olhar: Esqueça os Volts e foque no Torque (Nm)
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-zinc-300">
                    Se você quer saber se uma máquina é forte de verdade, pare de olhar para a bateria e procure pela sigla <strong className="text-white">Nm (Newton-Metro)</strong>. <br/>
                    O Torque é a força de giro real da sua máquina.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-5 group">
                    <div className="bg-zinc-900/50 border border-red-500/20 p-6 rounded-xl transition hover:border-red-500/40">
                      <h3 className="text-red-400 font-bold text-xl mb-3 flex items-center gap-2">Torque Baixo</h3>
                      <p className="text-zinc-400 text-lg">A máquina trava no meio do caminho ao tentar apertar um parafuso em madeira dura.</p>
                    </div>
                    <div className="bg-zinc-900/50 border border-green-500/20 p-6 rounded-xl transition hover:border-green-500/40">
                      <h3 className="text-green-400 font-bold text-xl mb-3 flex items-center gap-2">Torque Alto</h3>
                      <p className="text-zinc-400 text-lg">É o que determina que você vai atravessar vigas, furar alvenaria e fixar parafusos longos sem esforço e sem "pedir arrego".</p>
                    </div>
                  </div>
                </section>

                {/* Chamada para o próximo capítulo */}
                <div className="mt-10 bg-gradient-to-r from-[#FFD700]/10 to-transparent p-6 md:p-8 rounded-xl border-l-4 border-[#FFD700]">
                  <p className="text-2xl font-medium text-white mb-3">
                    <strong className="text-[#FFD700]">Lembre-se:</strong> No mundo das ferramentas, Torque é autoridade.
                  </p>
                  <p className="text-lg text-zinc-300">
                    No próximo capítulo, você vai entender por que o tipo de motor é o que garante que esse torque dure por 10 anos ou apenas 10 meses.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 3 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Título Principal */}
              <div className="border-b border-zinc-800 pb-6 text-center md:text-left">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  O DIVISOR DE ÁGUAS
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4 leading-tight tracking-tight">
                  <span className="text-[#FFD700] flex justify-center"><Cpu className="w-12 h-12 md:w-14 md:h-14" /></span>
                  <span className="flex-1">
                    Motores Brushless <br className="hidden md:block" />
                    <span className="text-gray-400 text-xl md:text-2xl font-semibold tracking-normal block mt-2">
                      O único termo que você precisa decorar
                    </span>
                  </span>
                </h1>
              </div>

              <div className="space-y-8">
                {/* Introdução Textual */}
                <section className="text-lg md:text-xl leading-relaxed text-zinc-300 space-y-4">
                  <p>
                    Se você quer uma ferramenta que dure os próximos 10 anos na sua prateleira e não te deixe na mão no meio de um serviço, esqueça as "perfumarias". Existe uma tecnologia que separa as máquinas de "brinquedo" das máquinas de verdade: o <strong className="text-[#FFD700]">Motor Brushless</strong>.
                  </p>
                  <p className="bg-zinc-800/40 p-4 rounded-lg border-l-2 border-zinc-600 italic text-zinc-400">
                    Até pouco tempo atrás, essa tecnologia era restrita apenas a ferramentas industriais caríssimas. Hoje, ela é o segredo para você ter potência profissional pagando pouco.
                  </p>
                </section>

                {/* Explicação: O que é e o problema dos escovas */}
                <section className="bg-zinc-900/60 p-6 md:p-8 rounded-2xl border border-red-500/20 shadow-inner group transition-all hover:border-red-500/40">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Settings className="text-zinc-500" /> O que significa "Sem Escovas"?
                  </h2>
                  <p className="text-lg leading-relaxed mb-4 text-zinc-300">
                    Os motores antigos usam pequenas peças de carvão (escovas) que ficam esfregando dentro do motor para gerar energia.
                  </p>
                  <div className="bg-red-900/20 p-5 rounded-xl border border-red-500/30 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="bg-red-500/20 p-3 rounded-full shrink-0">
                      <Flame className="w-8 h-8 text-red-400" />
                    </div>
                    <div>
                      <strong className="text-red-400 block mb-1 text-lg">O Grande Problema:</strong>
                      <span className="text-zinc-300 text-base">Esse atrito gera calor, desperdiça energia e faz o motor sofrer um desgaste natural violento toda vez que você aperta o gatilho.</span>
                    </div>
                  </div>
                </section>

                {/* Benefícios da Tecnologia Brushless */}
                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-6 flex items-center gap-2">
                    <ShieldCheck size={28} /> A Revolução Brushless
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-zinc-800/30 p-5 rounded-xl border border-zinc-700/50 flex flex-col items-center text-center">
                      <ZapOff className="w-10 h-10 text-blue-400 mb-3" />
                      <h3 className="font-bold text-white mb-2">Sem Calor e Faíscas</h3>
                      <p className="text-zinc-400 text-sm">Sem contato físico interno, a máquina não esquenta e não espirra faísca em trabalhos pesados.</p>
                    </div>
                    <div className="bg-zinc-800/30 p-5 rounded-xl border border-zinc-700/50 flex flex-col items-center text-center">
                      <Battery className="w-10 h-10 text-green-400 mb-3" />
                      <h3 className="font-bold text-white mb-2">50% Mais Bateria</h3>
                      <p className="text-zinc-400 text-sm">Você evita o desperdício de energia por atrito mecânico. A mesma carga de bateria rende o dobro.</p>
                    </div>
                    <div className="bg-zinc-800/30 p-5 rounded-xl border border-zinc-700/50 flex flex-col items-center text-center">
                      <Cpu className="w-10 h-10 text-purple-400 mb-3" />
                      <h3 className="font-bold text-white mb-2">Inteligência</h3>
                      <p className="text-zinc-400 text-sm">O motor "lê" a resistência do parafuso e entrega só a força exata, preservando o sistema.</p>
                    </div>
                  </div>
                </section>

                {/* Comparativo Visual Customizado ao invés de Imagem Externa */}
                <section className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">O Fim das Ferramentas Descartáveis</h2>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-stretch">
                    {/* Antigo */}
                    <div className="flex-1 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-red-500/20 p-6 rounded-xl relative overflow-hidden flex flex-col items-center text-center group transition hover:border-red-500/50">
                      <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition">
                        <Flame className="w-32 h-32 text-red-500" />
                      </div>
                      <Settings className="w-12 h-12 text-zinc-500 mb-4" />
                      <h3 className="text-red-400 font-bold text-xl mb-2">Motor com Escovas</h3>
                      <p className="text-zinc-400 text-sm">Cheiro de queimado, fumaça ao forçar e troca periódica de carvão. Durabilidade limitada p/ serviços pesados.</p>
                    </div>
                    
                    {/* VS */}
                    <div className="flex items-center justify-center shrink-0">
                      <div className="bg-zinc-800 text-zinc-400 font-black px-4 py-2 rounded-full border border-zinc-700">VS</div>
                    </div>

                    {/* Novo */}
                    <div className="flex-1 bg-gradient-to-tl from-[#FFD700]/5 to-zinc-900 border border-green-500/30 p-6 rounded-xl relative overflow-hidden flex flex-col items-center text-center shadow-[0_0_20px_rgba(34,197,94,0.1)] transition hover:border-green-500/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                      <div className="absolute -left-4 -top-4 opacity-10">
                        <ShieldCheck className="w-32 h-32 text-green-500" />
                      </div>
                      <Cpu className="w-12 h-12 text-green-400 mb-4" />
                      <h3 className="text-green-400 font-bold text-xl mb-2">Motor Brushless</h3>
                      <p className="text-zinc-300 text-sm font-medium">10x Mais Durável. Eletrônico, frio e livre de manutenção interna. Funciona impecável na força bruta.</p>
                    </div>
                  </div>
                </section>

                {/* Conclusão Fixada */}
                <div className="mt-8 bg-[#FFD700] text-black p-6 rounded-xl flex items-center shadow-lg transform hover:-translate-y-1 transition duration-300">
                  <Clock className="w-12 h-12 shrink-0 mr-4 opacity-80" />
                  <p className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight">
                    É a diferença entre comprar uma ferramenta descartável hoje ou fazer um investimento para a vida toda.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 4 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Título Principal */}
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
                {/* Introdução Textual */}
                <section className="text-lg md:text-xl leading-relaxed text-zinc-300">
                  <p className="mb-5">
                    Se você aplicasse tudo o que aprendeu nas páginas anteriores e saísse em busca da máquina perfeita hoje, chegaria inevitavelmente a um modelo: a <strong className="text-white">Bosch GSB 185-LI</strong>. Ela é o exemplo real de como levar para casa um equipamento profissional pagando preço de hobby.
                  </p>
                  <div className="bg-zinc-800/40 p-5 rounded-xl border-l-4 border-zinc-500 italic text-zinc-300 shadow-inner">
                    <p>Muitos usuários gastam o mesmo valor em máquinas de marcas desconhecidas que prometem muito e entregam pouco. Com este modelo, você inverte o jogo.</p>
                  </div>
                </section>

                {/* Imagem do Produto + Botão */}
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
                      <h3 className="text-2xl font-black text-white mb-1">Padrão Ouro</h3>
                      <p className="text-zinc-400 text-sm mb-2">Motor de última geração.</p>
                      <ul className="space-y-3 mb-6 flex-1">
                        <li className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> <span className="font-medium text-white">Motor Brushless</span> (Frio e Durável)
                        </li>
                        <li className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> <span className="font-medium text-white">Função Impacto</span> (Fura Tijolo/Concreto)
                        </li>
                        <li className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> <span className="font-medium text-white">Compacta</span> (Acesso a cantos curtos)
                        </li>
                      </ul>
                      <a 
                        href={products["parafusadeira-bosch-gsb-185-li"].link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-[#FFD700] hover:bg-[#ffcd38] text-black font-black py-4 px-6 rounded-lg text-lg uppercase tracking-tight text-center transition-all transform hover:-translate-y-1 shadow-[0_4px_15px_rgba(255,215,0,0.3)] flex items-center justify-center gap-2"
                      >
                        Clique aqui para ver o preço <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </section>

                {/* Benefícios Detalhados */}
                <section className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div className="bg-zinc-900/60 p-6 md:p-8 rounded-xl border border-zinc-800 hover:border-[#FFD700]/30 transition group">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
                      <Cpu size={24} className="group-hover:text-white transition" /> Tecnologia Acessível
                    </h3>
                    <p className="text-zinc-300 text-[15px] md:text-lg leading-relaxed">
                      Lembra da revolução que vimos na Página 3? A GSB 185-LI já vem equipada com motor <strong className="text-white">Brushless</strong>. Ela aproveita cada gota da bateria, não solta faíscas, e a Bosch conseguiu democratizar essa tecnologia entregando ferramentas indestrutíveis por um valor justo.
                    </p>
                  </div>

                  <div className="bg-zinc-900/60 p-6 md:p-8 rounded-xl border border-zinc-800 hover:border-[#FFD700]/30 transition group">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
                      <Target size={24} className="group-hover:text-white transition" /> Compacta & Gigante
                    </h3>
                    <p className="text-zinc-300 text-[15px] md:text-lg leading-relaxed">
                      Não se engane pelo design moderno e reduzido. O alcance compacto permite trabalhar dentro de armários apertados. E apesar de pequena, entrega força bruta, garantindo torque absurdo para parafusar em madeiras densas sem chorar.
                    </p>
                  </div>

                  <div className="bg-zinc-900/60 p-6 md:p-8 rounded-xl border border-zinc-800 hover:border-[#FFD700]/30 transition group sm:col-span-2">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-4 flex items-center gap-2">
                      <Zap size={28} className="text-blue-400 group-hover:text-white transition" /> Versatilidade: Impacto Verdadeiro
                    </h3>
                    <p className="text-zinc-300 md:text-lg leading-relaxed">
                      Muitas parafusadeiras baratas servem apenas para parafusar. A GSB 185-LI vai além e conta com a <strong className="text-white">Função Impacto</strong>. Indispensável para furação em alvenaria (parede de tijolo ou concreto). Tudo em uma única ferramenta; não precisa ter uma furadeira gigante e velha só para instalar um quadro.
                    </p>
                  </div>
                </section>

                {/* Custo Benefício */}
                <section className="mt-8 bg-gradient-to-r from-green-900/30 to-zinc-900 p-6 md:p-8 rounded-xl border-l-[6px] border-green-500 shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <DollarSign size={28} className="text-green-400" /> Custo-Benefício Imbatível
                  </h3>
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    Aqui você derrota o marketing: Paga preço de ferramenta de hobby, mas leva pra casa a <strong className="text-white">garantia, o suporte mundial e a durabilidade</strong> da linha profissional da Bosch. Segurança em assistência técnica pronta para ajudar, em vez daquela marca da China que some do mapa no mês seguinte.
                  </p>
                </section>

                {/* Transição P4 -> P5 */}
                <div className="mt-6 bg-zinc-800/40 text-center p-6 md:p-8 rounded-xl border border-zinc-700/50 flex flex-col gap-3 shadow-inner">
                  <span className="font-black uppercase tracking-wider text-sm text-[#FFD700] flex items-center justify-center gap-2 mb-2">
                    Próximo Capítulo
                  </span>
                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    Na próxima página, preparei uma <strong className="text-white">Tabela de Decisão de 5 Minutos</strong> que vai mostrar exatamente qual potência você precisa para o seu tipo de serviço, para que você não gaste nem um centavo a mais do que o necessário.
                  </p>
                </div>

              </div>
            </div>
          )}

          {currentPage === 5 && (
            <div className="w-full max-w-4xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Título Principal */}
              <div className="border-b border-zinc-800 pb-6 text-center md:text-left">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  GUIA DEFINITIVO
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4 leading-tight tracking-tight">
                  <span className="text-[#FFD700] flex justify-center"><Table className="w-10 h-10 md:w-14 md:h-14" /></span>
                  <span className="flex-1">
                    A Tabela de Decisão <br className="hidden md:block" />
                    <span className="text-gray-400 text-2xl md:text-3xl font-semibold tracking-normal block mt-2 text-white">
                      (Em 5 Minutos)
                    </span>
                  </span>
                </h1>
              </div>

              <div className="space-y-6">
                {/* Introdução Textual */}
                <section className="text-lg md:text-xl leading-relaxed text-zinc-300">
                  <p className="bg-zinc-800/30 p-5 rounded-xl border border-zinc-700/30 shadow-inner">
                    Não perca tempo comparando centenas de modelos técnicos. Use este guia visual prático para identificar sua necessidade real e escolher a potência certa sem erro.
                  </p>
                </section>

                {/* Tabela em formato de Cards para Mobile/Desktop responsiveness */}
                <div className="flex flex-col gap-4 mt-6">
                  
                  {/* Card 1: Hobby */}
                  <div className="bg-zinc-900 border border-zinc-700/50 rounded-xl overflow-hidden shadow-lg transition hover:border-zinc-500">
                    <div className="bg-zinc-800/80 px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-zinc-700/50">
                      <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-400 shrink-0"></span> Hobby / Montagem
                      </h3>
                      <div className="flex flex-wrap md:flex-nowrap md:items-center gap-2 md:gap-3 text-sm">
                        <span className="bg-zinc-900 px-3 py-1 rounded-full text-blue-300 border border-zinc-700 font-semibold text-xs md:text-sm">12V Leve (Compacta)</span>
                        <span className="bg-zinc-900 px-3 py-1 rounded-full text-[#FFD700] border border-zinc-700 font-bold text-xs md:text-sm">15 - 25 Nm</span>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-green-400 font-bold mb-2 uppercase text-xs md:text-sm tracking-wider">
                          <Check size={18} /> O que você faz com ela?
                        </h4>
                        <p className="text-zinc-300 leading-relaxed text-[15px]">Montar móveis de MDF, apertar parafusos soltos e furos leves em madeira macia.</p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-red-400 font-bold mb-2 uppercase text-xs md:text-sm tracking-wider">
                          <XCircle size={18} /> O que evitar?
                        </h4>
                        <p className="text-zinc-400 leading-relaxed text-[15px]">Não tente furar concreto ou vigas; a máquina pode superaquecer rapidamente.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Reformas */}
                  <div className="bg-zinc-900 border-2 border-[#FFD700]/50 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.1)] relative transition hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] hover:border-[#FFD700] z-10">
                    <div className="absolute top-0 right-0 bg-[#FFD700] text-black text-[10px] md:text-xs font-black px-3 py-1 rounded-bl-lg uppercase tracking-widest pointer-events-none">
                      A Melhor Escolha
                    </div>
                    <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-zinc-700/50 pt-8 md:pt-4">
                      <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-500 shrink-0"></span> Reformas / Marcenaria
                      </h3>
                      <div className="flex flex-wrap md:flex-nowrap md:items-center gap-2 md:gap-3 text-sm">
                        <span className="bg-zinc-900 px-3 py-1 rounded-full text-green-400 border border-green-900 font-semibold text-xs md:text-sm">18V Brushless (GSB 185-LI)</span>
                        <span className="bg-zinc-900 px-3 py-1 rounded-full text-[#FFD700] border border-[#FFD700]/30 font-bold text-xs md:text-sm">35 - 65 Nm</span>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-green-400 font-bold mb-2 uppercase text-xs md:text-sm tracking-wider">
                          <Check size={18} /> O que você faz com ela?
                        </h4>
                        <p className="text-zinc-300 leading-relaxed text-[15px]"><strong className="text-white">Tudo em um:</strong> Instalar armários, furar alvenaria (tijolo/parede), decks de madeira e encarar uso intenso nas reformas caseiras.</p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-red-400 font-bold mb-2 uppercase text-xs md:text-sm tracking-wider">
                          <XCircle size={18} /> O que evitar?
                        </h4>
                        <p className="text-zinc-400 leading-relaxed text-[15px]">Evite apenas uso industrial contínuo pesado (ex: ficar 8h por dia furando metal grosso e viga de ferro direto).</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Pesado */}
                  <div className="bg-zinc-900 border border-zinc-700/50 rounded-xl overflow-hidden shadow-lg transition hover:border-zinc-500">
                    <div className="bg-zinc-800/80 px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-zinc-700/50">
                      <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-orange-500 shrink-0"></span> Obras Pesadas
                      </h3>
                      <div className="flex flex-wrap md:flex-nowrap md:items-center gap-2 md:gap-3 text-sm">
                        <span className="bg-zinc-900 px-3 py-1 rounded-full text-orange-400 border border-zinc-700 font-semibold text-xs md:text-sm">18V Alta Performance</span>
                        <span className="bg-zinc-900 px-3 py-1 rounded-full text-[#FFD700] border border-zinc-700 font-bold text-xs md:text-sm">+70 Nm</span>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="flex items-center gap-2 text-green-400 font-bold mb-2 uppercase text-xs md:text-sm tracking-wider">
                          <Check size={18} /> O que você faz com ela?
                        </h4>
                        <p className="text-zinc-300 leading-relaxed text-[15px]">Perfuração de metal grosso, grandes estruturas de madeira de lei e concreto maciço / denso.</p>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-red-400 font-bold mb-2 uppercase text-xs md:text-sm tracking-wider">
                          <XCircle size={18} /> O que evitar?
                        </h4>
                        <p className="text-zinc-400 leading-relaxed text-[15px]">Não compre se for apenas para uso doméstico ou hobby leve; ela é <strong className="text-white">pesada</strong> e <strong className="text-white">cara demais</strong> para usar no dia a dia do lar.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regra de Ouro */}
                <div className="mt-8 bg-gradient-to-r from-[#FFD700]/10 to-zinc-900 p-6 md:p-8 rounded-2xl border border-[#FFD700]/30 shadow-xl relative overflow-hidden">
                  <Lightbulb className="absolute -right-4 -top-4 w-32 h-32 text-[#FFD700]/10 pointer-events-none" />
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 relative z-10">
                    <div className="bg-[#FFD700] text-black p-2 rounded-lg shrink-0"><Lightbulb size={24} /></div>
                    A Regra de Ouro do "Ponto Doce"
                  </h3>
                  <div className="relative z-10 space-y-4">
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      A categoria de <strong className="text-[#FFD700]">35 a 65 Nm</strong> (onde a Bosch GSB 185-LI se encaixa com perfeição) é considerada o verdadeiro <strong className="text-white">"ponto doce"</strong> da economia e performance.
                    </p>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      <strong>Por que?</strong> Porque ela tem força de sobra para furar parede e madeira dura, mas ainda mantém um preço acessível e um peso equilibrado para você usar em casa sem deixar o braço doendo. 
                    </p>
                    <p className="text-xl md:text-2xl font-black text-[#FFD700] mt-6 border-l-4 border-[#FFD700] pl-5 py-2 leading-tight">
                      "É a máquina que resolve 99% dos problemas de um proprietário de imóvel ou marceneiro iniciante."
                    </p>
                  </div>
                </div>

                {/* Transição P5 -> P6 */}
                <div className="mt-6 bg-zinc-800/40 text-center p-6 rounded-xl border border-zinc-700/50 flex flex-col md:flex-row items-center justify-center gap-3 text-zinc-400">
                  <span className="font-semibold uppercase tracking-wider text-sm">Próximo Passo</span>
                  <span className="opacity-50 hidden md:block">|</span>
                  <p className="flex items-center gap-2 text-base md:text-lg">
                    Veja como não jogar dinheiro fora com acessórios inúteis <ArrowRight size={20} className="text-[#FFD700]" />
                  </p>
                </div>

              </div>
            </div>
          )}

          {currentPage === 6 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Título Principal */}
              <div className="border-b border-zinc-800 pb-6 text-center md:text-left">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  MINDSET PROFISSIONAL
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4 leading-tight tracking-tight">
                  <span className="text-[#FFD700] flex justify-center"><PiggyBank className="w-12 h-12 md:w-14 md:h-14" /></span>
                  <span className="flex-1">
                    Economia Inteligente <br className="hidden md:block" />
                    <span className="text-gray-400 text-2xl md:text-3xl font-semibold tracking-normal block mt-2 text-white">
                      (Acessórios e Armadilhas)
                    </span>
                  </span>
                </h1>
              </div>

              <div className="space-y-8">
                {/* Introdução Textual */}
                <section className="text-lg md:text-xl leading-relaxed text-zinc-300">
                  <p className="bg-zinc-800/40 p-5 rounded-xl border-l-4 border-zinc-500 shadow-inner italic">
                    Comprar a máquina certa é apenas metade da batalha. A outra metade é não cair no "conto do vigário" dos Kits Completos. O marketing das lojas adora brilho e quantidade, mas quem trabalha de verdade sabe que qualidade vence o volume em qualquer obra.
                  </p>
                </section>

                {/* 1. Armadilha dos Kits de 100 Peças */}
                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-red-500/30 transition shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-red-500/20 text-red-500 p-2 rounded-lg shrink-0"><AlertTriangle size={24} /></span> 
                    1. A Armadilha dos Kits de 100 Peças
                  </h3>
                  <div className="space-y-4 text-zinc-300 text-[15px] md:text-lg">
                    <p><strong className="text-white">Fuja</strong> de maletas que vêm com centenas de brocas e bits de marcas genéricas inclusos.</p>
                    <div className="bg-red-900/10 border-l-[3px] border-red-500/50 pl-4 py-2">
                      <strong className="text-red-400">O Problema:</strong> Essas peças costumam ser feitas de metal macio que entorta no primeiro furo ou, pior, "come" a cabeça do seu parafuso, estragando seu móvel.
                    </div>
                    <div className="bg-green-900/10 border-l-[3px] border-green-500/50 pl-4 py-2">
                      <strong className="text-green-400">Dica Profissional:</strong> É infinitamente melhor investir em um jogo pequeno de bits de alta qualidade (como a linha Impact Control) do que ter 100 peças descartáveis que vão te deixar na mão no meio do domingo.
                    </div>
                  </div>
                </section>

                {/* 2. O Erro das Baterias Gigantes */}
                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-blue-500/20 text-blue-500 p-2 rounded-lg shrink-0"><Battery size={24} /></span> 
                    2. O Erro das Baterias Gigantes (4.0Ah ou 5.0Ah)
                  </h3>
                  <div className="space-y-4 text-zinc-300 text-[15px] md:text-lg">
                    <p>Para uso em casa, reformas ou marcenaria leve, baterias gigantes são um <strong className="text-white">erro estratégico e financeiro</strong>.</p>
                    <div className="bg-blue-900/10 border-l-[3px] border-blue-500/50 pl-4 py-2">
                      <strong className="text-blue-400">Peso Desnecessário:</strong> Elas tornam a máquina muito pesada, cansando o seu pulso rapidamente.
                    </div>
                    <div className="bg-green-900/10 border-l-[3px] border-green-500/50 pl-4 py-2">
                      <strong className="text-green-400">O Equilíbrio Perfeito:</strong> Uma bateria de <strong className="text-white">2.0Ah</strong> é o ideal. Ela carrega muito mais rápido, é barata e mantém a máquina leve e compacta para você trabalhar dentro de armários ou embaixo de pias sem sofrimento.
                    </div>
                  </div>
                </section>

                {/* 3. Maletas Rígidas */}
                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-[#FFD700]/30 transition shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="bg-[#FFD700]/20 text-[#FFD700] p-2 rounded-lg shrink-0"><Briefcase size={24} /></span> 
                    3. Maletas Rígidas: Luxo ou Necessidade?
                  </h3>
                  <div className="space-y-4 text-zinc-300 text-[15px] md:text-lg">
                    <p>Muitas vezes, o mesmo modelo de máquina é vendido em duas versões: uma em maleta plástica e outra em caixa de papelão.</p>
                    <div className="bg-[#FFD700]/10 border-l-[3px] border-[#FFD700]/50 pl-4 py-2">
                      <strong className="text-[#FFD700]">Poupe Dinheiro:</strong> Se você pretende guardar sua ferramenta em uma gaveta, em uma caixa de ferramentas própria ou em um painel na parede, não pague a mais pela maleta de plástico.
                    </div>
                    <div className="bg-zinc-800/40 border-l-[3px] border-zinc-500 pl-4 py-2 text-white">
                      <strong>Mesma Potência:</strong> A máquina dentro da caixa de papelão é <strong className="text-[#FFD700]">exatamente a mesma</strong>, mas o preço costuma ser significativamente menor.
                    </div>
                  </div>
                </section>

                {/* Transição Final */}
                <div className="mt-8 bg-zinc-800 border-t-[6px] border-[#FFD700] rounded-xl p-6 md:p-10 text-center shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">
                    "Você está a um passo da sua ferramenta ideal."
                  </h3>
                  <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed relative z-10">
                    Agora que você já sabe o que comprar e, principalmente, o que não comprar para evitar desperdícios, vamos ao fechamento.
                  </p>
                  
                  <div className="bg-black/40 p-5 md:p-6 rounded-xl border border-zinc-700/50 mx-auto max-w-2xl flex flex-col items-center justify-center gap-4 relative z-10">
                    <span className="font-bold uppercase tracking-widest text-[#FFD700] text-sm">Na Próxima Página</span>
                    <p className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 text-base md:text-lg text-white">
                      <span>Preparei um <strong className="text-white">Checklist Final</strong> para você usar antes de clicar em comprar, garantindo que nenhum detalhe técnico passe despercebido.</span>
                      <ArrowRight size={24} className="text-[#FFD700] shrink-0 hidden md:block" />
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {currentPage === 7 && (
            <div className="w-full max-w-3xl flex flex-col gap-8 text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Título Principal */}
              <div className="border-b border-zinc-800 pb-6 text-center md:text-left">
                <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-[#FFD700]/20">
                  DECISÃO FINAL
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white flex flex-col md:flex-row md:items-center gap-3 md:gap-4 leading-tight tracking-tight">
                  <span className="text-green-500 flex justify-center"><CheckCircle className="w-12 h-12 md:w-14 md:h-14" /></span>
                  <span className="flex-1">
                    Checklist "Pé no Chão" <br className="hidden md:block" />
                    <span className="text-gray-400 text-2xl md:text-3xl font-semibold tracking-normal block mt-2 text-white">
                      (Não erre aqui)
                    </span>
                  </span>
                </h1>
              </div>

              <div className="space-y-8">
                {/* Introdução Textual */}
                <section className="text-lg md:text-xl leading-relaxed text-zinc-300">
                  <p className="mb-4">
                    <strong className="text-white text-2xl relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-[#FFD700]">Parabéns!</strong> Você acaba de economizar horas de pesquisa e, provavelmente, centenas de reais que seriam jogados fora em ferramentas erradas. Agora você sabe mais sobre parafusadeiras do que 90% dos compradores e está imune às armadilhas comuns do marketing.
                  </p>
                  <div className="bg-zinc-800/40 p-5 rounded-xl border-l-4 border-[#FFD700] shadow-inner italic">
                    Antes de passar o cartão ou clicar em "comprar", faça esta varredura final no anúncio para garantir que nenhum detalhe técnico passe despercebido:
                  </div>
                </section>

                {/* Checklist de Verificação */}
                <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-lg">
                  <ul className="space-y-6">
                    <li className="flex gap-4 group">
                      <div className="bg-zinc-800 p-3 rounded-lg text-zinc-400 group-hover:bg-[#FFD700]/20 group-hover:text-[#FFD700] transition h-fit shrink-0">
                        <Wrench size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFD700] transition">1. Mandril de Metal</h4>
                        <p className="text-zinc-400 leading-relaxed text-[15px] md:text-base">
                          Verifique se o bocal onde prende a broca é de metal; <strong className="text-red-400">mandris de plástico espanam com o tempo</strong> e reduzem a vida útil da máquina.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 group">
                      <div className="bg-zinc-800 p-3 rounded-lg text-zinc-400 group-hover:bg-[#FFD700]/20 group-hover:text-[#FFD700] transition h-fit shrink-0">
                        <Lightbulb size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFD700] transition">2. Luz de LED Integrada</h4>
                        <p className="text-zinc-400 leading-relaxed text-[15px] md:text-base">
                          Essencial para enxergar dentro de armários, embaixo de pias ou em cantos escuros onde a iluminação externa não chega.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 group">
                      <div className="bg-zinc-800 p-3 rounded-lg text-zinc-400 group-hover:bg-[#FFD700]/20 group-hover:text-[#FFD700] transition h-fit shrink-0">
                        <Battery size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFD700] transition">3. Ecossistema de Baterias</h4>
                        <p className="text-zinc-400 leading-relaxed text-[15px] md:text-base">
                          A bateria serve em outras ferramentas? A <strong className="text-white">linha Bosch 18V</strong>, por exemplo, é compatível com dezenas de outras máquinas profissionais, barateando sua próxima compra.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 group">
                      <div className="bg-zinc-800 p-3 rounded-lg text-zinc-400 group-hover:bg-[#FFD700]/20 group-hover:text-[#FFD700] transition h-fit shrink-0">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFD700] transition">4. Assistência Técnica Real</h4>
                        <p className="text-zinc-400 leading-relaxed text-[15px] md:text-base">
                          Fuja de <strong className="text-red-400">marcas "fantasmas"</strong>. Certifique-se de que existem peças de reposição e oficinas autorizadas na sua região para não ficar com um peso de papel na mão.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 group">
                      <div className="bg-zinc-800 p-3 rounded-lg text-zinc-400 group-hover:bg-[#FFD700]/20 group-hover:text-[#FFD700] transition h-fit shrink-0">
                        <Settings size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFD700] transition">5. Controle Gradual</h4>
                        <p className="text-zinc-400 leading-relaxed text-[15px] md:text-base">
                          O gatilho permite controlar a velocidade conforme a pressão? Isso é vital para não espanar parafusos delicados.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Call to Action Final */}
                <section className="mt-10 bg-gradient-to-br from-[#FFD700]/20 to-zinc-900 border-2 border-[#FFD700] rounded-2xl p-6 md:p-10 shadow-[0_0_40px_rgba(255,215,0,0.15)] relative overflow-hidden text-center md:text-left">
                  <Star className="absolute -right-10 -bottom-10 w-64 h-64 text-[#FFD700]/5 pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 flex flex-col md:flex-row items-center gap-3 justify-center md:justify-start">
                      <Target className="text-[#FFD700]" size={36} /> O Seu Próximo Passo
                    </h3>
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
                      Como prometido, para facilitar sua busca, identifiquei o melhor custo-benefício atual que entrega exatamente tudo o que discutimos: <strong className="text-white">Motor Brushless, Função Impacto e Robustez Profissional</strong>.
                    </p>
                    <p className="text-xl font-medium text-white mb-8 bg-zinc-800/80 p-5 rounded-lg border border-zinc-700/50 shadow-inner">
                      A <strong className="text-[#FFD700] text-2xl font-black px-1">Bosch GSB 185-LI</strong> é a máquina que eu escolheria hoje para equilibrar economia bruta e potência para os próximos 10 anos.
                    </p>
                    
                    <a 
                      href={products["parafusadeira-bosch-gsb-185-li"].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-black py-5 md:py-6 px-4 md:px-8 rounded-xl text-[17px] md:text-xl uppercase tracking-widest text-center transition-all transform hover:-translate-y-2 shadow-[0_10px_30px_rgba(255,215,0,0.4)] flex flex-col md:flex-row items-center justify-center gap-3"
                    >
                      <span className="text-center">Clique Aqui para Ver a Bosch numa Loja Oficial</span> <ExternalLink size={26} className="shrink-0" />
                    </a>
                  </div>
                </section>

                {/* Dica Final */}
                <div className="bg-zinc-800/40 p-6 md:p-10 rounded-xl border border-zinc-700/50 flex flex-col items-center justify-center relative mt-4">
                  <Lightbulb size={32} className="text-[#FFD700] mb-4" />
                  <span className="font-bold text-[#FFD700] uppercase tracking-widest mb-3">Dica Final</span>
                  <p className="text-zinc-300 text-lg md:text-2xl text-center italic font-serif leading-relaxed max-w-2xl px-4">
                    "Uma ferramenta de qualidade não é um gasto; é um investimento que se paga na primeira vez que você resolve um problema em casa sem precisar contratar ninguém."
                  </p>
                </div>

                {/* Footer Assinatura */}
                <div className="pt-8 border-t border-zinc-800 text-center pb-20 md:pb-8">
                  <p className="text-zinc-500 font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2">
                    <CheckCircle size={16} /> Conteúdo Exclusivo: Mestre das Ferramentas
                  </p>
                </div>

              </div>
            </div>
          )}
          
        </div>

        {/* Controles de Navegação do Ebook (escondido se tiver só 1 página) */}
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
