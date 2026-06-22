import React, { useState } from 'react';
import { BunnerDoMeio } from './BunnerDoMeio';
import { ExitIntentPopup } from './ExitIntentPopup';
import { ChevronDown } from 'lucide-react';

export const QualADiferencaEntreParafusadeira12Ve18V: React.FC = () => {
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    0: true // Open the first FAQ by default
  });

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "Parafusadeira 12V serve para uso profissional?",
      answer: "Com certeza. A 12V é uma escolha profissional excelente para marcenaria fina, instalações elétricas e montagens rápidas. Sua precisão em parafusos pequenos e a facilidade de manuseio em locais apertados garantem agilidade superior."
    },
    {
      question: "Parafusadeira 18V é sempre melhor do que 12V?",
      answer: "Não necessariamente. A 18V é superior apenas em cenários que demandam torque elevado e resistência contínua. Em marcenaria delicada, o peso e o volume dessa categoria tornam-se obstáculos."
    },
    {
      question: "Para obra, é melhor comprar 12V ou 18V?",
      answer: "Em canteiros de obras, a potência é um requisito inegociável. Por isso, a plataforma 18V torna-se a escolha estratégica mais sensata. O modelo 12V sofre com materiais densos e parafusos estruturais."
    },
    {
      question: "12V cansa menos no uso diário?",
      answer: "Sim, a diferença de peso é determinante para sua ergonomia. Máquinas de 12V são projetadas com uma distribuição de massa compacta, reduzindo drasticamente a carga sobre o punho e ombros ao longo de jornadas extensas."
    },
    {
      question: "Vale mais comprar kit ou corpo da máquina?",
      answer: "Se você já investe em uma plataforma específica (ex: já tem baterias 18V da Makita), comprar apenas a máquina isolada otimiza seu orçamento. Para o primeiro equipamento, o kit completo é indispensável."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <ExitIntentPopup />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/1/Qual a diferença entre parafusadeira 12V e 18V.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 blur-sm"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/diferenca12v18v/1920/1080?blur=4";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white tracking-tight">
              12V vs 18V: Qual Parafusadeira é Melhor?
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span>Por</span>
                <a href="/author/severino-torquato" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors font-semibold group">
                  <img 
                    src="/images/autores/severino-torquato.webp" 
                    alt="Severino Torquato" 
                    className="w-8 h-8 rounded-full border-2 border-[#FFD700] group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      e.currentTarget.src = "https://picsum.photos/seed/severinotorquato/100/100";
                    }}
                  />
                  Severino Torquato
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-8">
            <p>
              Escolher a ferramenta certa é o primeiro passo para garantir eficiência e evitar retrabalho em qualquer projeto.
            </p>
            <p>
              Frequentemente, a dúvida sobre qual potência escolher gera insegurança, já que o desempenho direto na execução da tarefa depende de uma análise precisa das necessidades reais de uso.
            </p>
            <p>
              Afinal, entender a real diferença entre parafusadeira 12V e 18V vai além de olhar apenas os números na etiqueta, envolvendo o equilíbrio ideal entre peso, manuseio e a demanda de força exigida.
            </p>
            <p>
              Compreender o perfil de cada equipamento permite um investimento mais inteligente e alinhado ao fluxo de trabalho pretendido.
            </p>
          </div>

          {/* Quick Simulator (2-Click Quiz) */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white rounded-3xl p-6 md:p-8 my-10 shadow-lg relative overflow-hidden border border-gray-700">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full opacity-10 blur-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1 bg-amber-500 text-gray-900 rounded-lg text-xs font-extrabold uppercase px-2 py-0.5">Quiz</span>
                <h4 className="text-gray-200 text-xs font-bold uppercase tracking-wider">SIMULADOR RÁPIDO</h4>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-6">O que você vai furar mais?</h3>
              
              {!quizAnswer ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setQuizAnswer('mdf')}
                    className="flex flex-col items-center justify-center p-6 bg-gray-800 border-2 border-gray-700 rounded-2xl hover:border-amber-400 hover:bg-gray-850 transition-all text-center group cursor-pointer"
                  >
                    <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">🪵</span>
                    <span className="font-bold text-lg text-white">Madeira em MDF</span>
                    <span className="text-xs text-gray-400 mt-1">Trabalhos delicados e móveis sob medida</span>
                  </button>
                  <button 
                    onClick={() => setQuizAnswer('concreto')}
                    className="flex flex-col items-center justify-center p-6 bg-gray-800 border-2 border-gray-700 rounded-2xl hover:border-amber-400 hover:bg-gray-850 transition-all text-center group cursor-pointer"
                  >
                    <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">🧱</span>
                    <span className="font-bold text-lg text-white">Parede e Concreto</span>
                    <span className="text-xs text-gray-400 mt-1">Furos estruturais e instalações robustas</span>
                  </button>
                </div>
              ) : (
                <div className="bg-gray-850 rounded-2xl p-6 border border-gray-700 transition-all duration-300">
                  {quizAnswer === 'mdf' ? (
                    <div>
                      <h4 className="text-amber-400 font-bold text-lg md:text-xl mb-3 flex items-center gap-2">
                        <span>🪵</span> Recomendação: Parafusadeira 12V!
                      </h4>
                      <p className="text-gray-350 leading-relaxed text-sm md:text-base">
                        A 12V é ideal para marcenaria e montagem de MDF. O torque é equilibrado para evitar rachaduras na madeira ou espanar parafusos delicados, além da leveza prevenir a fadiga física em longos períodos.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-amber-400 font-bold text-lg md:text-xl mb-3 flex items-center gap-2">
                        <span>🧱</span> Recomendação: Parafusadeira 18V!
                      </h4>
                      <p className="text-gray-350 leading-relaxed text-sm md:text-base">
                        Furar concreto ou alvenaria exige força bruta e, na maioria das vezes, a função de impacto. A parafusadeira 18V entrega o torque e robustez necessários para essas superfícies densas sem forçar o motor.
                      </p>
                    </div>
                  )}
                  <button 
                    onClick={() => setQuizAnswer(null)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    ← Refazer Quiz
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Section 12V */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Para quem a parafusadeira 12V faz mais sentido
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                A parafusadeira 12V é a aliada estratégica para quem prioriza mobilidade extrema e um ritmo de trabalho ágil.
              </p>
              <p>
                Ela brilha em cenários que exigem precisão em espaços confinados, como a montagem de móveis planejados, marcenaria fina ou instalações elétricas detalhadas.
              </p>
              <p>
                O grande trunfo dessas ferramentas reside na leveza; ao operar por horas seguidas ou em posições elevadas, a redução da fadiga muscular torna-se um fator determinante para a qualidade do acabamento.
              </p>
              <p>
                Se o seu cotidiano envolve lidar com parafusos pequenos, ferragens delicadas e a necessidade de manuseio constante em locais de difícil acesso, essa voltagem entrega um equilíbrio superior, garantindo produtividade sem o excesso de peso das máquinas de maior porte.
              </p>
              <p>
                Profissionais que atuam com marcenaria fina, montagem de móveis sob medida ou manutenção predial leve encontram na 12V a parceira ideal.
              </p>
              <p>
                Sua agilidade em espaços restritos e conforto durante longas jornadas em altura tornam o dia a dia muito mais produtivo.
              </p>
              <p>
                Se você trabalha com fixações delicadas, instalações elétricas complexas ou atendimento técnico externo, essa categoria entrega a precisão necessária, evitando danos ao material e fadiga desnecessária.
              </p>
            </div>
            
            {/* Real 12V image */}
            <div className="my-8 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="/images/blog/1/Para quem a parafusadeira 12V faz mais sentido.webp" 
                alt="Para quem a parafusadeira 12V faz mais sentido"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </section>

          {/* Banner do Meio */}
          <div className="my-8">
            <BunnerDoMeio />
          </div>

          {/* Section 18V */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Para quem a parafusadeira 18V compensa mais
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                A parafusadeira 18V é a escolha definitiva para quem encara jornadas intensas e operações onde a tolerância a falhas é mínima.
              </p>
              <p>
                Diferente das opções compactas, este equipamento foi projetado para extrair o máximo de desempenho em materiais densos, como madeiras de lei, estruturas metálicas e perfurações profundas que exigem alto torque constante.
              </p>
              <p>
                Se a sua rotina é marcada pela necessidade de força bruta e pelo uso ininterrupto, investir em 18V elimina o receio de encontrar um limite operacional precoce no meio de um projeto.
              </p>
              <p>
                É o investimento certo para quem prioriza robustez, confiabilidade técnica e a certeza de que a máquina jamais deixará a produtividade na mão.
              </p>
              <p>
                A versatilidade das 18V torna-as indispensáveis em canteiros de obras e montagens estruturais exigentes.
              </p>
              <p>
                Se o seu trabalho envolve marcenaria com madeiras densas, parafusos longos ou serralheria leve, esta potência garante a constância necessária.
              </p>
              <p>
                Operar em larga escala exige padronização, e adotar uma plataforma 18V permite que equipes compartilhem baterias entre ferramentas, otimizando o fluxo operacional.
              </p>
            </div>
            
            {/* Real 18V image */}
            <div className="my-8 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="/images/blog/1/Para quem a parafusadeira 18V compensa mais.webp" 
                alt="Para quem a parafusadeira 18V compensa mais"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </section>

          {/* Comparativo */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Comparativo rápido: 12V x 18V
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              <p>
                Para decidir entre essas categorias, visualize a balança entre conforto e capacidade.
              </p>
              <p>
                Enquanto a linha 12V se destaca pela portabilidade, a 18V domina quando o desafio exige torque elevado em materiais brutos ou uso contínuo.
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto my-8 rounded-2xl border border-gray-200 shadow-sm">
              <table className="min-w-full bg-white text-left text-sm md:text-base border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-r border-gray-700">Diferencial</th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-r border-gray-700">Categoria 12V</th>
                    <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs">Categoria 18V</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-gray-900 border-r border-gray-200">Aplicação</td>
                    <td className="py-4 px-5 border-r border-gray-200">Ajustes precisos, montagens e acabamentos</td>
                    <td className="py-4 px-5">Trabalho pesado, construção civil, fixações longas</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-gray-900 border-r border-gray-200">Vantagem</td>
                    <td className="py-4 px-5 border-r border-gray-200">Ergonomia, peso reduzido e agilidade</td>
                    <td className="py-4 px-5">Força de torção superior, autonomia e robustez</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-gray-900 border-r border-gray-200">Limitação</td>
                    <td className="py-4 px-5 border-r border-gray-200">Limite de carga em materiais densos</td>
                    <td className="py-4 px-5">Maior volume e investimento inicial</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-gray-900 border-r border-gray-200">Usuário</td>
                    <td className="py-4 px-5 border-r border-gray-200">Marceneiro, eletricista, pequenos reparos</td>
                    <td className="py-4 px-5">Construtores, marcenaria estrutural, uso industrial</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-5 font-semibold text-gray-900 border-r border-gray-200">Foco</td>
                    <td className="py-4 px-5 border-r border-gray-200">Mobilidade e acessibilidade</td>
                    <td className="py-4 px-5">Alta performance e demanda contínua</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Internal Link Callout - Exactly after Table */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-2xl p-6 my-8 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-600 mt-0.5">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">LEIA TAMBÉM</span>
                  <p className="text-gray-800 font-semibold text-base md:text-lg leading-relaxed">
                    Agora que você já sabe qual voltagem escolher, qual marca entrega mais durabilidade?
                  </p>
                  <a 
                    href="/qual-a-melhor-parafusadeira-bosch-ou-dewalt" 
                    className="inline-flex items-center gap-2 mt-3 font-bold text-amber-600 hover:text-amber-700 transition-colors group"
                  >
                    Descubra qual a melhor parafusadeira: Bosch ou DeWalt?
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specs */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Entendendo as diferenças técnicas: Torque, RPM e bateria
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              <p>
                O desempenho de uma parafusadeira é ditado pela tríade torque, rotação e capacidade energética.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 my-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  <strong className="text-gray-900">Torque (Nm):</strong> Define a força de aperto. Modelos de 12V entregam entre 20 e 35 Nm. Já os de 18V alcançam 45 a 70 Nm.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  <strong className="text-gray-900">Velocidade (RPM):</strong> As 18V atingem até 2.000 RPM, otimizando perfurações rápidas que superam a média de 1.400 RPM das compactas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  <strong className="text-gray-900">Bateria (Ah):</strong> As 12V priorizam o baixo peso (1.5 a 2.0 Ah), já a plataforma 18V comporta bancos de até 5.0 Ah.
                </p>
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Compreender esses números evita sobrecarregar o motor e garante que a ferramenta responda precisamente ao seu esforço.
              </p>
            </div>
          </section>

          {/* Criteria */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Principais critérios de escolha antes de comprar
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Não se deixe seduzir apenas pela etiqueta de voltagem; o sucesso do investimento reside na compatibilidade entre as especificações técnicas e o seu volume diário de tarefas.
              </p>
            </div>
          </section>

          {/* Battery & Platform */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-950 mb-4">
              Bateria, amperagem e plataforma
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Priorizar a compatibilidade é o segredo para economizar.
              </p>
              <p>
                Ao investir in uma plataforma consolidada, você aproveita as mesmas baterias em diversas ferramentas, eliminando gastos desnecessários com carregadores redundantes.
              </p>
              <p>
                Verifique sempre a amperagem (Ah), que dita a autonomia: baterias de maior capacidade garantem jornadas longas.
              </p>
            </div>
          </section>

          {/* Accessories */}
          <section className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-gray-950 mb-4">
              Acessórios e contexto da equipe
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              <p>
                O valor do seu investimento vai muito além da ferramenta isolada.
              </p>
              <p>
                Avalie o ecossistema completo e a presença de itens essenciais como maletas robustas de transporte, jogos de bits de alta qualidade (impacto) e carregadores rápidos.
              </p>
            </div>
          </section>

          {/* Common Errors */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Erros comuns antes de comprar uma parafusadeira profissional
            </h2>
            
            {/* Real error image */}
            <div className="my-8 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="/images/blog/1/Erros comuns antes de comprar uma parafusadeira profissional.webp" 
                alt="Erros comuns antes de comprar uma parafusadeira profissional"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Muitos profissionais consolidam prejuízos antes mesmo de abrir a embalagem.
              </p>
              <p>
                O erro mais recorrente é subestimar a demanda técnica: comprar uma 12V para serviços brutos gera travamentos e fadiga prematura do motor, enquanto adquirir uma 18V para marcenaria delicada resulta em excesso de peso.
              </p>
              <p>
                Outra falha clássica envolve ignorar o escopo do anúncio, confundindo "ferramenta nua" (apenas o corpo) com o kit completo, o que frustra o planejamento financeiro inicial.
              </p>
            </div>
          </section>

          {/* Interactive Accordion FAQ Section */}
          <section className="mb-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Perguntas Frequentes (FAQ)
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-8">
              Clique nos títulos abaixo para abrir as respostas e tirar suas dúvidas rápidas.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqs[index];
                return (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left py-4 px-6 flex items-center justify-between font-bold text-gray-900 hover:bg-gray-50 focus:outline-none transition-colors gap-4"
                    >
                      <span className="text-sm md:text-base flex items-center gap-2">
                        <span className="text-[#FFD700] text-xs">🔽</span>
                        {faq.question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180 text-amber-500' : ''
                        }`} 
                      />
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen 
                          ? 'max-h-56 opacity-100 border-t border-gray-150 bg-gray-50/50' 
                          : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="py-4 px-6 text-gray-700 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
