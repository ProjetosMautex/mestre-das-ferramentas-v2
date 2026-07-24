import React, { useState } from 'react';
import { AffiliateCard } from './AffiliateCard';
import { BunnerDoMeio } from './BunnerDoMeio';
import { products, type ProductId } from '../data/products';
import { Check, X, Info, HelpCircle, ArrowRight, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const MelhorFuradeira: React.FC = () => {
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const featuredIds: ProductId[] = [
    "furadeira-impacto-bosch-850w",
    "furadeira-impacto-makita-760w",
    "furadeira-dewalt-dwd502",
    "furadeira-impacto-mondial-650w",
    "parafusadeira-bosch-gsb-185-li",
    "furadeira-bosch-gsb-550-re",
    "bosch-gsr-7-14-e-400w",
    "parafusadeira-vonder-pfv-012i",
    "furadeira Mondial FFI-09"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/melhor-parafusadeira/melhor-furadeira-hero.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 blur-sm"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/drill/1920/1080?blur=4";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              9 Melhores Furadeiras de 2026: <br/>
              <span className="text-[#FFD700]">Bosch, Makita, DeWalt ou Outra?</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span>Por</span>
                <a href="/author/andre-carvalho" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors font-semibold group">
                  <img 
                    src="/images/autores/andre-carvalho.webp" 
                    alt="Andre Carvalho" 
                    className="w-8 h-8 rounded-full border-2 border-[#FFD700] group-hover:scale-110 transition-transform"
                  />
                  Andre Carvalho
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 mb-8">
              A escolha da furadeira ideal depende muito do que você vai fazer no dia a dia. Não adianta comprar a mais forte para uso em casa, nem a mais básica para trabalhar em obra.
            </p>
            <p>
              Usar uma máquina fraca para furar concreto vai forçar o motor e até queimar a ferramenta. Por outro lado, entender o que você realmente precisa ajuda a economizar e ter o equipamento certo na mão.
            </p>
            <p>
              Neste guia, mostro as melhores furadeiras que temos hoje no mercado. Avaliei a força, a resistência e o custo-benefício de cada modelo, pensando em quem usa para trabalhar e em quem faz pequenos reparos.
            </p>
          </div>

          {/* Quiz Rápido de Engajamento */}
          <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl shadow-xl border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="text-[#FFD700] w-6 h-6 animate-pulse" />
              <h3 className="text-xl font-bold text-white">Simulador Rápido: Qual será o seu nível de exigência?</h3>
            </div>
            <p className="text-slate-300 text-sm mb-4">Responda para encontrar a categoria de ferramenta ideal:</p>
            
            <div className="grid sm:grid-cols-2 gap-3">
              <button 
                onClick={() => setQuizResult('professional')}
                className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${quizResult === 'professional' ? 'bg-[#FFD700] text-slate-900 border-[#FFD700]' : 'bg-slate-800 border-slate-600 hover:border-[#FFD700]'}`}
              >
                <span>Obras e Concreto Armado</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setQuizResult('hobby')}
                className={`py-3 px-4 rounded-xl font-semibold border-2 transition-all text-left flex justify-between items-center ${quizResult === 'hobby' ? 'bg-[#FFD700] text-slate-900 border-[#FFD700]' : 'bg-slate-800 border-slate-600 hover:border-[#FFD700]'}`}
              >
                <span>Reformas e Madeira (Hobby)</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {quizResult && (
              <div className="mt-6 p-4 bg-slate-700/50 border border-slate-600 rounded-xl animate-fadeIn">
                {quizResult === 'professional' ? (
                  <p className="text-sm leading-relaxed m-0 text-slate-100">
                    🎯 <strong>Recomendação:</strong> Dê preferência aos modelos da categoria <strong>🏆 O Top 3: Linha Profissional Pesada</strong>. As furadeiras de impacto da <a href="#furadeira-impacto-bosch-850w" className="text-[#FFD700] underline font-bold">Bosch 850W</a>, <a href="#furadeira-impacto-makita-760w" className="text-[#FFD700] underline font-bold">Makita 760W</a> ou <a href="#furadeira-dewalt-dwd502" className="text-[#FFD700] underline font-bold">DeWalt 750W</a> entregam o torque contínuo e a resistência mecânica necessários para longas frentes construtivas no concreto.
                  </p>
                ) : (
                  <p className="text-sm leading-relaxed m-0 text-slate-100">
                    🎯 <strong>Recomendação:</strong> A categoria <strong>💰 Custo-Benefício e Uso Doméstico</strong> atende perfeitamente ao seu cenário. Modelos como a <a href="#furadeira-impacto-mondial-650w" className="text-[#FFD700] underline font-bold">Mondial 650W</a> (que acompanha maleta completa de acessórios) ou a compacta <a href="#furadeira-bosch-gsb-550-re" className="text-[#FFD700] underline font-bold">Bosch GSB 550 RE</a> oferecem excelente facilidade no uso doméstico a um preço acessível.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Vitrine / Showcase Table */}
          <div className="mb-16 max-w-[800px] mx-auto bg-slate-50 p-2.5 rounded-lg sm:p-5">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Melhores furadeiras para comprar online</h2>
            
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
              <tbody>
                {featuredIds.map((id) => {
                  const product = products[id];
                  return (
                    <tr key={id} className="border-b border-slate-200 last:border-b-0">
                      <td className="w-[65px] p-2 align-middle text-center sm:w-[80px] sm:p-3">
                        <div className="w-[40px] h-[40px] border border-slate-100 rounded flex items-center justify-center p-0.5 sm:w-[60px] sm:h-[60px] mx-auto">
                          <img 
                            src={`/images/blog/melhor-parafusadeira/${product.name}.webp`}
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
          </div>

          {/* Tabela Comparativa: O Duelo das Gigantes */}
          <div className="mb-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">O Duelo das Gigantes</h3>
            <p className="text-gray-600 text-sm mb-4">Veja o comparativo direto entre as três marcas líderes para serviço pesado:</p>
            
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full border-collapse">
                <thead className="bg-slate-100 text-slate-700 text-xs uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3 text-left">Modelo</th>
                    <th className="p-3 text-left">Potência</th>
                    <th className="p-3 text-left">Foco Principal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-semibold text-slate-800">Bosch GSB 16 RE</td>
                    <td className="p-3">850W</td>
                    <td className="p-3 text-slate-600">Alta performance sob carga pesada e precisão eletrônica</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-semibold text-slate-800">Makita HP1640</td>
                    <td className="p-3">760W</td>
                    <td className="p-3 text-slate-600">Resistência mecânica para concreto fechado e longas jornadas</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-semibold text-slate-800">DeWalt DWD502</td>
                    <td className="p-3">750W</td>
                    <td className="p-3 text-slate-600">Robustez com mandril travado e haste limitadora integrada</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Reviews */}
          <div className="space-y-16">
            
            <h2 className="text-3xl font-extrabold text-slate-900 border-b-4 border-[#FFD700] pb-2 mt-16 flex items-center gap-2">
              🏆 O Top 3: Linha Profissional Pesada
            </h2>

            {/* Bosch 850W */}
            <section id="furadeira-impacto-bosch-850w" className="scroll-mt-24">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Furadeira de Impacto 850W – Bosch
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={`/images/blog/melhor-parafusadeira/${products["furadeira-impacto-bosch-850w"].name}.webp`} alt={products["furadeira-impacto-bosch-850w"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Bosch GSB 16 RE é aquela máquina que você compra quando precisa furar concreto duro todo santo dia e não pode perder tempo. Com 850W, ela sobra em potência e tem uma precisão eletrônica excelente no gatilho, perfeita para começar furos em azulejos sem escorregar.</p>
                <p>O que faz ela se destacar das outras é justamente esse equilíbrio entre força bruta e controle fino. O mandril é de metal maciço, garantindo que a broca fique muito firme durante o uso.</p>
                <p><strong>Ponto negativo:</strong> Justamente por ter tanto metal e ser tão parruda, ela é mais pesada que as concorrentes, o que pode cansar o braço se você for furar o teto o dia todo.</p>
              </div>

              <AffiliateCard id="furadeira-impacto-bosch-850w" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Potência de sobra para uso intenso.</li>
                    <li>Mandril robusto que evita folgas.</li>
                    <li>Controle de velocidade para diferentes materiais.</li>
                    <li>Função parafusadeira integrada.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Modelo com fio (limita a mobilidade).</li>
                    <li>Peso pode cansar em usos prolongados.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Makita HP1640 */}
            <section id="furadeira-impacto-makita-760w" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Furadeira Impacto 760W – Makita
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={`/images/blog/melhor-parafusadeira/${products["furadeira-impacto-makita-760w"].name}.webp`} alt={products["furadeira-impacto-makita-760w"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Makita HP1640 é praticamente um tanque de guerra, feita para aguentar o tranco de uma obra pesada sem abrir o bico. Seu grande diferencial em relação à Bosch e DeWalt é a durabilidade mecânica extrema, resistindo melhor ao desgaste diário, poeira e quedas.</p>
                <p>Apesar de ter 760W, ela compensa com um sistema de impacto muito rápido (até 44.800 batidas por minuto), furando blocos e concreto com muita facilidade. Além disso, ela é bem balanceada e tem a pegada emborrachada.</p>
                <p><strong>Ponto negativo:</strong> Ela foca tanto na resistência bruta que não tem o controle eletrônico de velocidade tão refinado no gatilho quanto o modelo da Bosch.</p>
              </div>

              <AffiliateCard id="furadeira-impacto-makita-760w" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Alta durabilidade para uso contínuo.</li>
                    <li>Ótima performance em concreto.</li>
                    <li>Empunhadura confortável.</li>
                    <li>Mandril robusto de 13mm.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Modelo com fio.</li>
                    <li>Pode ser pesada para trabalhos leves.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* DeWalt DWD502 */}
            <BunnerDoMeio />
            <section id="furadeira-dewalt-dwd502" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                DeWalt DWD502 – furadeira para uso profissional
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={`/images/blog/melhor-parafusadeira/${products["furadeira-dewalt-dwd502"].name}.webp`} alt={products["furadeira-dewalt-dwd502"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A DeWalt DWD502 é a escolha certa se você quer uma furadeira extremamente robusta, mas um pouco mais leve e compacta para usar em posições difíceis. Com 750W, ela encara concreto denso e madeira pesada com tranquilidade.</p>
                <p>O que a coloca no topo junto com as outras é o design focado em segurança e praticidade. Ela conta com um sistema de refrigeração excelente para evitar superaquecimento, e a haste limitadora de profundidade é muito útil para não varar a parede instalando buchas.</p>
                <p><strong>Ponto negativo:</strong> O cabo de energia é um pouco mais curto (cerca de 1,9m) do que a gente gostaria para usar livremente em obras maiores.</p>
              </div>

              <AffiliateCard id="furadeira-dewalt-dwd502" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Potência ideal para uso profissional.</li>
                    <li>Mandril robusto com fixação segura.</li>
                    <li>Empunhadura lateral para maior controle.</li>
                    <li>Função reversa para versatilidade.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Cabo de 1,9m pode ser limitante.</li>
                    <li>Peso pode cansar em trabalhos longos.</li>
                  </ul>
                </div>
              </div>
            </section>



            {/* Vídeo do YouTube Comparativo */}
            <div className="my-12 p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-[#FFD700]">
                <Sparkles size={20} className="animate-pulse text-[#FFD700]" /> Teste Prático: Bosch vs Makita no Concreto
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Assista a este teste prático mostrando o desempenho real de furadeiras de impacto líderes do mercado em perfuração de concreto.
              </p>
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-slate-700">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/OVwTMbg9xCw" 
                  title="Teste Prático: Bosch vs Makita no Concreto" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 border-b-4 border-[#FFD700] pb-2 mt-16 flex items-center gap-2">
              💰 Custo-Benefício e Uso Doméstico
            </h2>

            {/* Mondial 650W */}
            <section id="furadeira-impacto-mondial-650w" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Furadeira de Impacto com Maleta 650W – Mondial
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src="/images/blog/melhor-parafusadeira/Furadeira de Impacto com Maleta 650W – Mondial.webp" alt={products["furadeira-impacto-mondial-650w"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Mondial 650W é aquela opção barata e que já vem pronta para usar em casa. Como ela acompanha uma maleta cheia de brocas e buchas, você não precisa ficar correndo na loja de materiais de construção toda vez que for pendurar um quadro.</p>
                <p>Com 650W e função impacto, ela dá conta de furar paredes de tijolo comuns e fazer instalações básicas pela casa, como suporte de TV e prateleiras. A alça lateral também ajuda bastante a dar mais firmeza na hora do furo.</p>
                <p>Vale lembrar que essa é uma máquina para reparos de fim de semana. Não é indicada para encarar o tranco diário de uma obra ou furar concreto muito duro, pois o motor pode sofrer. É o famoso "quebra-galho" barato e muito prático para o lar.</p>
              </div>

              <AffiliateCard id="furadeira-impacto-mondial-650w" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Kit completo com diversos acessórios.</li>
                    <li>Empunhadura lateral para maior controle.</li>
                    <li>Função impacto para alvenaria.</li>
                    <li>Ótimo custo-benefício.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Potência limitada para uso intenso.</li>
                    <li>Mandril de 10mm pode limitar o uso de brocas maiores.</li>
                  </ul>
                </div>
              </div>
            </section>


            {/* Bosch GSB 185-LI */}
            <section id="parafusadeira-bosch-gsb-185-li" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Furadeira Parafusadeira Impacto 18 V ｜ GSB185LI-1B
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={`/images/blog/melhor-parafusadeira/${products["parafusadeira-bosch-gsb-185-li"].name}.webp`} alt={products["parafusadeira-bosch-gsb-185-li"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Se você faz montagem de móveis ou instalações e está cansado de puxar extensão, a Bosch GSB 185-LI resolve o seu problema. Ela é uma furadeira e parafusadeira a bateria com motor brushless, o que significa que o motor dura muito mais e a bateria rende melhor durante o dia inteiro de trabalho.</p>
                <p>Por ser de 18V e entregar 60 Nm de força, você consegue furar alvenaria para colocar buchas e parafusos grandes sem o menor esforço. O melhor de tudo é que ela vem com um kit gigante de 300 peças (brocas, bits e buchas) da The Black Tools, então você já sai com tudo que precisa numa maleta só.</p>
              </div>

              <AffiliateCard id="parafusadeira-bosch-gsb-185-li" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Motor brushless de alta durabilidade.</li>
                    <li>Função impacto para alvenaria.</li>
                    <li>Bateria de 18V com boa autonomia.</li>
                    <li>Design leve e ergonômico.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Preço mais elevado.</li>
                    <li>Acompanha apenas uma bateria.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Bosch GSB 550 RE */}
            <section id="furadeira-bosch-gsb-550-re" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Bosch GSB 550 RE – Melhor furadeira para uso doméstico
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={`/images/blog/melhor-parafusadeira/${products["furadeira-bosch-gsb-550-re"].name}.webp`} alt={products["furadeira-bosch-gsb-550-re"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Bosch GSB 550 RE é, na minha opinião, a furadeira com melhor custo-benefício para quem precisa de uma máquina confiável em casa, mas que também aguenta trabalhos leves de manutenção profissional.</p>
                <p>Com 550W, ela não é a mais forte da categoria, mas faz furos precisos em parede, madeira e metal. Ela costuma vir numa maleta muito boa, tem o corpo leve, pegada emborrachada e velocidade controlada no gatilho, facilitando furar azulejos e chapas de MDF sem estragar o material.</p>
              </div>

              <AffiliateCard id="furadeira-bosch-gsb-550-re" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Ótimo custo-benefício.</li>
                    <li>Potente para diversas aplicações.</li>
                    <li>Design ergonômico e confortável.</li>
                    <li>Maleta para transporte.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Cabo curto.</li>
                    <li>Apenas uma velocidade.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Bosch GSR 7-14 */}
            <section id="bosch-gsr-7-14-e-400w" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Furadeira e Parafusadeira 400W – Bosch
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={`/images/blog/melhor-parafusadeira/${products["bosch-gsr-7-14-e-400w"].name}.webp`} alt={products["bosch-gsr-7-14-e-400w"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Bosch GSR 7-14 é quase uma lenda entre marceneiros e montadores de móveis. Ela é uma parafusadeira (e furadeira para madeira) com fio, ou seja, você não depende de bateria carregada para trabalhar horas seguidas montando guarda-roupas ou cozinhas.</p>
                <p>Como ela tem controle de torque (força de aperto), você não espana parafusos e nem estraga a madeira na hora de montar móveis de MDF. Além disso, o cabo de energia dela tem 4 metros, o que dá uma liberdade enorme de movimentação pelo cômodo sem precisar de extensão o tempo todo.</p>
              </div>

              <AffiliateCard id="bosch-gsr-7-14-e-400w" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Torque ajustável com 24 níveis.</li>
                    <li>Motor robusto para uso contínuo.</li>
                    <li>Cabo de 4 metros.</li>
                    <li>Design compacto e ergonômico.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Não possui função impacto.</li>
                    <li>Não é sem fio.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Vonder PFV 012 */}
            <section id="parafusadeira-vonder-pfv-012i" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Vonder PFV 012
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={`/images/blog/melhor-parafusadeira/${products["parafusadeira-vonder-pfv-012i"].name}.webp`} alt={products["parafusadeira-vonder-pfv-012i"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Vonder PFV 012 é uma daquelas parafusadeiras a bateria ideais para ter em casa. Ela é bem pequena e leve, o que ajuda muito quando você precisa apertar parafusos em locais apertados, como dentro de gavetas e cantos de armários.</p>
                <p>Ela conta com regulagem de força para você não estragar a cabeça do parafuso, vem com um jogo de brocas e bits (pontas de parafusar), e já tem uma luzinha de LED que salva a vida nos cantos escuros. Só não recomendo para serviço pesado, pois a bateria e o motor de 12V são pensados para uso ocasional.</p>
              </div>

              <AffiliateCard id="parafusadeira-vonder-pfv-012i" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Ótima para uso doméstico.</li>
                    <li>Design leve e compacto.</li>
                    <li>Kit de acessórios completo.</li>
                    <li>Iluminação LED integrada.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Tempo de recarga da bateria.</li>
                    <li>Potência limitada para uso profissional.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Mondial FFI-09 */}
            <section id="furadeira-mondial-ffi-09" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Furadeira Mondial FFI-09
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={`/images/blog/melhor-parafusadeira/${products["furadeira Mondial FFI-09"].name}.webp`} alt={products["furadeira Mondial FFI-09"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Mondial FFI-09 de 550W é bem parecida com a Mondial de 650W, mas um pouco mais básica e mais voltada para quem quer gastar o mínimo possível para ter uma furadeira na gaveta de ferramentas.</p>
                <p>Ela fura madeira, metal e alvenaria comum, e tem um limitador de profundidade que evita furar o cano do outro lado da parede por acidente. O mandril de 10mm dá conta da maioria das tarefas domésticas. É uma boa pedida para quem vai usar pouco e quer economizar, mas evite usá-la para furar pilares de concreto ou em obras de longo prazo.</p>
              </div>

              <AffiliateCard id="furadeira Mondial FFI-09" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Design compacto e ergonômico.</li>
                    <li>Velocidade variável (até 2.800 RPM).</li>
                    <li>Empunhadura lateral e limitador de profundidade.</li>
                    <li>Ótimo custo-benefício para uso residencial.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Potência de 550W pode ser baixa para trabalhos pesados.</li>
                    <li>Mandril de 10mm limita brocas maiores.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cross-Sell Section */}
            <div className="my-16 bg-white p-6 rounded-2xl border border-slate-200 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles className="text-[#FFD700]" size={20} /> Uma excelente furadeira não faz milagres com brocas ruins
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                Turbine seu kit com acessórios de alta qualidade para não passar sufoco em alvenaria ou madeira:
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex flex-col bg-slate-50 border border-slate-200 rounded-xl p-4 hover:shadow-sm transition-shadow">
                  <div className="h-28 w-full flex items-center justify-center bg-white rounded-lg mb-3 p-2">
                    <img 
                      src="/images/blog/melhor-furadeira-e-parafusadeira/Jogo-de-Brocas-mistas-15-psecas-Bosch.webp"
                      alt="Jogo de Brocas Mistas" 
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/seed/bosch-drill-kit/200";
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-xs text-gray-800 line-clamp-2 mb-2 flex-grow">
                    Jogo de Brocas Mistas 15 Peças – Bosch
                  </h4>
                  <a 
                    href={products["Jogo de Brocas mistas 15 peças – Bosch"]?.link || "https://meli.la/1E3Yzex"} 
                    target="_blank" 
                    rel="noopener noreferrer sponsored nofollow" 
                    className="w-full bg-[#FFD700] text-[#1a1a1a] font-bold text-center py-2 rounded-lg text-[11px] hover:bg-[#e6c200] transition-colors"
                  >
                    VER PREÇO
                  </a>
                </div>
                <div className="flex flex-col bg-slate-50 border border-slate-200 rounded-xl p-4 hover:shadow-sm transition-shadow">
                  <div className="h-28 w-full flex items-center justify-center bg-white rounded-lg mb-3 p-2">
                    <img 
                      src="/images/blog/melhor-furadeira-e-parafusadeira/Conjunto de Brocas e Bits Makita – 34 Peças.webp"
                      alt="Kit Brocas Makita" 
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/seed/makita-drill-kit/200";
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-xs text-gray-800 line-clamp-2 mb-2 flex-grow">
                    Conjunto de Brocas e Bits 34 Peças – Makita
                  </h4>
                  <a 
                    href={products["Conjunto de Brocas e Bits Makita – 34 Peças"]?.link || "https://meli.la/2jcLSKS"} 
                    target="_blank" 
                    rel="noopener noreferrer sponsored nofollow" 
                    className="w-full bg-[#FFD700] text-[#1a1a1a] font-bold text-center py-2 rounded-lg text-[11px] hover:bg-[#e6c200] transition-colors"
                  >
                    VER PREÇO
                  </a>
                </div>
                <div className="flex flex-col bg-slate-50 border border-slate-200 rounded-xl p-4 hover:shadow-sm transition-shadow">
                  <div className="h-28 w-full flex items-center justify-center bg-white rounded-lg mb-3 p-2">
                    <img 
                      src="/images/blog/melhor-furadeira-e-parafusadeira/Jogo de Brocas e Bits Tramontina com Maleta – 110 Peças.webp"
                      alt="Kit Brocas e Bits Tramontina" 
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/seed/concrete-drill-kit/200";
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-xs text-gray-800 line-clamp-2 mb-2 flex-grow">
                    Jogo de Brocas e Bits Tramontina com Maleta – 110 Peças
                  </h4>
                  <a 
                    href={products["Jogo de Brocas e Bits Tramontina com Maleta – 110 Peças"]?.link || "https://meli.la/2zZ3wdx"} 
                    target="_blank" 
                    rel="noopener noreferrer sponsored nofollow" 
                    className="w-full bg-[#FFD700] text-[#1a1a1a] font-bold text-center py-2 rounded-lg text-[11px] hover:bg-[#e6c200] transition-colors"
                  >
                    VER PREÇO
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Buying Guide */}
          <section className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Como escolher a melhor furadeira do mercado</h2>
            
            <div className="space-y-12 prose prose-lg max-w-none text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Uso profissional ou doméstico: O que você realmente precisa?</h3>
                <p className="mb-6">O primeiro passo é ser sincero sobre o quanto você vai usar a máquina. Ferramentas profissionais (como Bosch, Makita e DeWalt) são construídas com peças reforçadas para aguentar o tranco de furar concreto todo dia sem queimar.</p>
                <p className="mb-6">Já as domésticas (como Mondial e Skil) são mais leves e baratas, perfeitas para montar móveis e furar paredes de tijolo nos fins de semana, mas não aguentam o batente de uma obra.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Potência e velocidade: O que isso muda na prática?</h3>
                <div className="my-8">
                  <img src="/images/blog/melhor-parafusadeira/Potencia-e-velocidade.webp" alt="Potência e velocidade" className="w-full rounded-lg shadow-md" loading="lazy" />
                </div>
                <p className="mb-6">A potência (em Watts) é a força bruta da furadeira. Quanto mais Watts, mais fácil ela vai furar materiais duros, como concreto armado.</p>
                <p className="mb-6">Já a velocidade (RPM) indica quão rápido a broca gira. Furar metal e madeira geralmente exige mais velocidade, enquanto furar paredes grossas exige mais força (Watts e Torque) para a broca não travar no meio do caminho.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">A importância de uma boa pegada (Ergonomia)</h3>
                <p className="mb-6">Se você vai passar horas com a furadeira na mão, o conforto faz toda a diferença. Modelos com revestimento emborrachado não escorregam com o suor e ajudam a absorver a vibração, poupando os braços de dores no fim do dia.</p>
                <p className="mb-6">Além disso, um gatilho macio dá muito mais precisão para iniciar um furo no azulejo sem deixar a broca escorregar.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Recursos extras que facilitam a vida</h3>
                <p className="mb-6">Preste atenção nos detalhes que ajudam na hora do aperto: uma luz de LED ilumina o fundo dos armários; a haste de profundidade impede que você faça um furo maior que a bucha (evitando varar canos do outro lado da parede).</p>
                <p className="mb-6">E a função reversa serve tanto para soltar a broca presa na parede quanto para soltar parafusos.</p>
                
                {/* Safety Alert Box */}
                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl my-6 flex gap-4 items-start shadow-sm">
                  <Info className="text-red-500 shrink-0 w-6 h-6 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-red-800 text-base mb-1">Aviso de Segurança Importante</h4>
                    <p className="text-red-700 text-sm leading-relaxed m-0">
                      <strong>Atenção:</strong> Modelos sem velocidade variável não devem ser usados como parafusadeira em hipótese alguma, sob o risco de espanar as fendas ou quebrar a madeira.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Tipos de furadeiras</h3>
                <div className="my-8">
                  <img src="/images/blog/melhor-parafusadeira/Tipos de furadeiras.webp" alt="Tipos de furadeiras" className="w-full rounded-lg shadow-md" loading="lazy" />
                </div>
                
                <h4 className="text-lg font-bold text-[#1a1a1a] mt-6 mb-4">Para que serve cada tipo?</h4>
                <p className="mb-6">Se o foco for marcenaria e madeira, furadeiras simples sem impacto (ou parafusadeiras) são ideais, pois são mais precisas.</p>
                <p className="mb-6">Agora, se a ideia é pendurar coisas na parede ou trabalhar em obra, você precisa obrigatoriamente de uma furadeira de impacto, que bate enquanto gira para furar o concreto.</p>
                <p className="mb-6">Já as furadeiras de bancada são para profissionais de oficina que precisam fazer dezenas de furos iguais em peças de metal ou madeira, sempre retos e com profundidade exata, sem depender da firmeza das mãos.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">A importância de usar a broca certa</h3>
                <p className="mb-6">A melhor furadeira do mundo não faz milagre com a broca errada. Use brocas de aço rápido (HSS) para furar metal, brocas de videa para paredes e concreto, e brocas de três pontas (ou chatas) quando for trabalhar com madeira.</p>
                <p className="mb-6">Usar broca de parede em madeira vai queimar a peça e estragar o serviço.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Dicas práticas antes de furar</h3>
                <div className="my-8">
                  <img src="/images/blog/melhor-parafusadeira/As-etapas-para-fazer-um-furo-com-uma-broca.webp" alt="Etapas para fazer um furo" className="w-full rounded-lg shadow-md" loading="lazy" />
                </div>
                <p className="mb-6">Vai furar azulejo? Cole uma fita crepe no local ou bata levemente com um prego para fazer uma marcaquinha antes. Isso impede que a broca escorregue e risque o piso inteiro.</p>
                <p className="mb-6">Na hora de furar paredes, comece devagar para firmar a broca e só acelere depois.</p>
                <p className="mb-6">Se o buraco for muito fundo, puxe a furadeira um pouco para trás durante o giro, isso ajuda a tirar o pó e evita que a broca trave lá dentro.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Como fazer furos perfeitamente retos?</h3>
                <div className="my-8">
                  <img src="/images/blog/melhor-parafusadeira/gabarito_furacao_mdf.webp" alt="Gabarito de furação em MDF para perfurar em linha reta" className="w-full rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
                </div>
                <p className="mb-6">Não confie só no olho na hora de montar móveis. O ideal é usar gabaritos de madeira (pequenos blocos com furos retos já feitos na bancada) ou furadeiras que venham com um mini nível bolha embutido na carcaça.</p>
                <p className="mb-6">Um furo torto na hora de juntar duas madeiras pode estragar o móvel todo.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Segurança na obra ou em casa</h3>
                <p className="mb-6">Antes de furar, tenha certeza que não passa nenhum cano de água ou conduíte de energia atrás da parede (existem aparelhos baratos para detectar isso).</p>
                <p className="mb-6">E o mais importante: óculos de proteção sempre. Uma lasca de concreto ou tijolo no olho durante a perfuração vai te custar muito mais caro que o óculos de proteção.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">As melhores fabricantes hoje</h3>
                <p className="mb-6">Para resumir com quem trabalha na área: Makita e DeWalt são as queridinhas das obras pesadas por aguentarem muito tranco, sujeira e quedas.</p>
                <p className="mb-6">A Bosch também é de primeira linha e muitas vezes se destaca por tecnologias e confortos extras que facilitam a vida na marcenaria e reformas.</p>
                <p className="mb-6">Para ver os detalhes de todas, confira nossa <a href="/melhores-marcas-de-furadeira" className="text-blue-600 hover:underline font-medium">lista dedicada às principais fabricantes de ferramentas</a>.</p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Perguntas Frequentes (FAQ)</h2>
            
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(0)} 
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors font-semibold"
                >
                  <span className="font-bold text-lg text-gray-800">Qual a melhor furadeira para furar concreto duro?</span>
                  {openFaq === 0 ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                {openFaq === 0 && (
                  <div className="p-5 text-gray-700 border-t border-gray-100 bg-white">
                    <p className="m-0 leading-relaxed">
                      Modelos com alta potência e alto índice de impacto por minuto (IPM), como a <strong>Bosch de 850W (GSB 16 RE)</strong> ou a <strong>DeWalt DWD502 (750W)</strong>, são os mais indicados para concreto duro. Eles fornecem a resistência mecânica necessária para perfurar superfícies densas sem sobreaquecer o motor.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(1)} 
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors font-semibold"
                >
                  <span className="font-bold text-lg text-gray-800">Furadeira Mondial é boa para uso diário?</span>
                  {openFaq === 1 ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                {openFaq === 1 && (
                  <div className="p-5 text-gray-700 border-t border-gray-100 bg-white">
                    <p className="m-0 leading-relaxed">
                      Não. As furadeiras da Mondial, como o modelo de 650W, são excelentes opções em custo-benefício para uso doméstico, hobbista e pequenos reparos esporádicos. Para frentes de trabalho diárias, intensas e profissionais na construção civil, o recomendado é investir em marcas como Bosch, Makita ou DeWalt.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(2)} 
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors font-semibold"
                >
                  <span className="font-bold text-lg text-gray-800">Posso usar a furadeira como parafusadeira?</span>
                  {openFaq === 2 ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                {openFaq === 2 && (
                  <div className="p-5 text-gray-700 border-t border-gray-100 bg-white">
                    <p className="m-0 leading-relaxed">
                      Apenas se o modelo contar com a função de rotação reversível (para apertar e desapertar) e controle de velocidade variável no gatilho. Sem essas funções, a rotação excessiva sem controle de torque pode facilmente espanar a fenda dos parafusos ou rachar superfícies de madeira.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Qual escolher afinal?</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mx-auto">
              <p>Escolher a ferramenta certa é pensar no seu bolso a longo prazo e, principalmente, no seu conforto.</p>
              <p>Gastar mais numa furadeira profissional faz total sentido se você vive disso, pois ela não vai te deixar na mão no meio de uma instalação com o cliente esperando.</p>
              <p>Por outro lado, se a ideia é só resolver pequenos reparos em casa, os modelos de custo-benefício de marcas como Mondial ou Skil dão conta do recado e sobram no orçamento para você comprar buchas e parafusos de qualidade.</p>
              <p>Avalie o que você realmente precisa e bom trabalho!</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
