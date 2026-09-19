import React, { useState } from 'react';
import { BunnerDoMeio } from './BunnerDoMeio';
import { ExitIntentPopup } from './ExitIntentPopup';

export const OQueEBrocaEscalonada: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  const handleMaterialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMaterial(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/1/o-que-e-broca-escalonada-small.webp" 
              alt="O que é Broca Escalonada" 
              className="w-full h-full object-cover opacity-20 blur-sm"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/drill/1920/1080?blur=4";
              }}
              width={490}
              height={329}
              fetchPriority="high"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              O Que é Broca Escalonada e Como Usar - <br/>
              <span className="text-[#FFD700]">Mestre das Ferramentas</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span>Por</span>
                <a href="/author/andre-carvalho/" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors font-semibold group">
                  <img 
                    src="/images/autores/andre-carvalho-small.webp" 
                    alt="André Carvalho" 
                    className="w-8 h-8 rounded-full border-2 border-[#FFD700] group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Andre+Carvalho&background=FFD700&color=1a1a1a";
                    }}
                    width={32}
                    height={32}
                    fetchPriority="high"
                    loading="eager"
                  />
                  André Carvalho
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <ExitIntentPopup />

          {/* SIMULADOR RÁPIDO DE ENGAJAMENTO */}
          <div className="my-8 p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl shadow-xl border border-slate-700">
            <h2 className="text-xl font-bold mb-4">Qual material você precisa furar com mais frequência?</h2>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="material" 
                  value="metal" 
                  onChange={handleMaterialChange}
                  className="form-radio h-5 w-5 text-blue-500 bg-slate-800 border-slate-600"
                />
                <span className="text-slate-200 font-medium">Chapas de metal e alumínio</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="radio" 
                  name="material" 
                  value="madeira" 
                  onChange={handleMaterialChange}
                  className="form-radio h-5 w-5 text-blue-500 bg-slate-800 border-slate-600"
                />
                <span className="text-slate-200 font-medium">Madeira ou concreto</span>
              </label>
            </div>
            
            {selectedMaterial === 'metal' && (
              <div className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200">
                <p className="font-semibold">Perfeito para Broca Escalonada!</p>
                <p>Para chapas finas de metal e alumínio, a broca escalonada é a ferramenta ideal. Ela fura sem travar, não deforma a chapa e já deixa o furo sem rebarbas. Continue lendo para ver como usá-la do jeito certo.</p>
              </div>
            )}
            
            {selectedMaterial === 'madeira' && (
              <div className="mt-4 p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200">
                <p className="font-semibold">Cuidado!</p>
                <p>A broca escalonada NÃO é recomendada para madeira grossa ou concreto. Para esses materiais, use <a href="/o-que-e-broca-helicoidal/" className="text-blue-700 underline hover:text-blue-800">brocas helicoidais</a> (madeira) ou brocas de vídea (concreto). Mas se você também trabalha com perfis de metal, vale a pena conhecer as vantagens abaixo.</p>
              </div>
            )}
          </div>

          <BunnerDoMeio />

          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12 mt-8">
            <p>Parar o trampo na bancada ou no meio da obra para desapertar o mandril e trocar de broca a cada dois milímetros de diâmetro é o jeito mais rápido de queimar tempo e paciência.</p>
            <p>Quem passa o dia na correria de montagens industriais, instalações ou reformas pesadas sabe o quanto cortar o ritmo da furação para caçar acessórios na maleta atrasa a entrega e cansa o braço.</p>
            <p>A broca escalonada entra exatamente para matar essa ineficiência na raiz, permitindo abrir furos de vários diâmetros diferentes usando uma única peça no mandril da sua furadeira ou parafusadeira.</p>
            <p>Mas não adianta só comprar a ferramenta e sair apertando o gatilho no talo: entender a mecânica desse cone, saber controlar a rotação e casar o acessório com o material certo é o que separa um furo industrial limpo e perfeito de uma ferramenta cara com os dentes queimados logo no primeiro dia.</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">O Que é uma Broca Escalonada</h2>
            <div className="mb-6 flex justify-center">
              <img 
                src="/images/blog/1/o-que-e-broca-escalonada-medium.webp" 
                srcSet="/images/blog/1/o-que-e-broca-escalonada-small.webp 490w, /images/blog/1/o-que-e-broca-escalonada-medium.webp 800w, /images/blog/1/o-que-e-broca-escalonada.webp 1063w"
                sizes="(max-width: 768px) 100vw, 800px"
                alt="Broca escalonada com perfil cônico e degraus progressivos furando chapa metálica" 
                title="O que é broca escalonada - estrutura cônica progressiva"
                className="w-full max-w-2xl rounded-xl shadow-lg"
                width={800}
                height={537}
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Pense na broca escalonada como se fosse um jogo completo de brocas condensado em um único corpo cônico de aço rápido.</p>
              <p>Ao contrário das <a href="/o-que-e-broca-helicoidal/" className="text-blue-700 underline hover:text-blue-800">brocas helicoidais</a> comuns que você usa todo dia — que possuem um diâmetro único e travam fácil em chapas finas —, este modelo é construído com vários degraus retificados que sobem de forma progressiva.</p>
              <p>Cada patamar desse cone corresponde a uma medida exata em milímetros ou polegadas, eliminando de vez a necessidade de trocar de broca toda vez que você precisa alargar um orifício.</p>
              <p>O grande trunfo está no desenho geométrico feito sob medida para chapas metálicas e superfícies de pouca espessura.</p>
              <p>Quem já tentou furar lata, calha ou painel elétrico com broca comum grossa sabe o perigo: ela costuma "morder" o metal de sopetão, entortar a chapa, dar tranco no pulso do operador e deixar rebarbas vivas cortantes.</p>
              <p>A broca escalonada trabalha de forma contínua e suave, desbastando o material sem deformar a peça e entregando um acabamento impecável logo de primeira.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Como funcionam as brocas escalonadas?</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>A dinâmica dessa ferramenta se baseia no corte axial progressivo, projetado para render ao máximo sem exigir esforço mecânico excessivo da máquina.</p>
              <p>Conforme a broca gira e avança no metal, cada degrau atua como uma lâmina independente que alarga o furo aberto pelo estágio anterior.</p>
              <p>Entender a física por trás do avanço desses canais de corte é a chave para você não forçar o motor da furadeira, dosar a força correta no gatilho e garantir um trabalho com padrão de montagem industrial.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Principais características</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>A engenharia por trás do cone vai muito além de um formato bonito.</p>
              <p>O grande diferencial técnico é a estabilidade: como cada degrau tem uma altura reduzida e apoio lateral próprio, a broca não flexiona nem vibra como uma broca convencional comprida.</p>
              <p>Em materiais chatos de trabalhar, como perfis de alumínio ou chapas finas de aço inoxidável, essa rigidez evita que a ferramenta saia do centro e deforme a área ao redor do furo.</p>
              <p>Além disso, a geometria dos gumes de corte foi calculada para escoar o calor e as lascas de metal com rapidez.</p>
              <p>Uma broca escalonada bem projetada trabalha tirando cavacos finos e contínuos, aliviando a carga sobre o motor da parafusadeira e preservando a têmpera do metal.</p>
              <p>Escolher um modelo de qualidade comprovada garante que os diâmetros finais fiquem rigorosamente dentro da medida, sem criar folgas em parafusos ou eletrodutos.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Corpo Escalonado</h3>
            <div className="mb-6 flex justify-center">
              <img 
                src="/images/blog/1/corpo-escalonado.webp" 
                alt="Detalhes da anatomia da broca escalonada com ponta autoperfurante e estrias helicoidais" 
                title="Corpo escalonado e características técnicas da broca"
                className="w-full max-w-2xl rounded-xl shadow-lg"
                width={800}
                height={537}
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Analisando o corpo da broca na bancada, você enxerga os detalhes que garantem o rendimento sob uso contínuo.</p>
              <p>A ponta autoperfurante (tipo split point) é um divisor de águas: ela crava no metal e inicia o furo piloto sem escorregar pela peça, o que dispensa perder tempo batendo punção e martelo para marcar o centro.</p>
              <p>As estrias (que podem ser retas ou helicoidais) funcionam como canais de escape contínuos, jogando as lascas de metal quente para fora antes que elas acumulem e travem a rotação.</p>
              <p>Outro ponto indispensável para quem trabalha no ritmo da produção são as medidas gravadas a laser no fundo de cada degrau: elas não se apagam com o atrito do corte, dando a você a certeza exata da hora de soltar o gatilho sem furar além da conta.</p>
            </div>
          </section>

          <BunnerDoMeio />

          <section className="mb-12 mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Vantagens da Broca Escalonada</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Colocar uma boa broca escalonada na sua rotina muda completamente a produtividade na oficina ou no canteiro de obras.</p>
              <p>A primeira vantagem óbvia é não perder tempo abrindo e fechando mandril a cada mudança de bitola.</p>
              <p>Enquanto o método tradicional exige furo guia, broca intermediária, broca grossa e depois escareador, a escalonada faz toda essa sequência em uma única descida contínua.</p>
              <p>A precisão do acabamento é outro ponto forte: como cada patamar é balanceado e concêntrico, o furo sai perfeitamente circular, sem ovalizar — um problema clássico de brocas helicoidais quando pegam em chapas finas.</p>
              <p>Para completar, o degrau seguinte atua naturalmente quebrando a quina viva do anterior.</p>
              <p>Isso significa que você já finaliza a furação sem aquela rebarba cortante que costuma exigir lima manual ou esmerilhadora para limpar.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Vantagens da Broca Escalonada em Relação à Serra Copo</h2>
            <div className="mb-6 flex justify-center">
              <img 
                src="/images/blog/1/comparacao-broca-escalonada-serra-copo.webp" 
                alt="Comparação visual entre broca escalonada e serra copo em chapa de metal" 
                title="Broca escalonada versus serra copo em chapas finas"
                className="w-full max-w-2xl rounded-xl shadow-lg"
                width={800}
                height={537}
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>A serra copo tem sua utilidade indiscutível quando precisamos abrir furos largos em vigas grossas, madeira pesada ou tubos de parede espessa.</p>
              <p>Mas tentar furar chapa metálica fina com serra copo na obra é pedir dor de cabeça.</p>
              <p>Os dentes da serra copo travam com facilidade em chapas de lata, provocando trancos violentos na máquina que podem torcer o pulso do operador ou danificar o painel de montagem.</p>
              <p>A broca escalonada resolve essa parada com total segurança e suavidade.</p>
              <p>Ela não depende de suporte com broca piloto frágil e nem corre o risco de "dançar" riscando a superfície do trabalho.</p>
              <p>O corte cônico vai abrindo o diâmetro sem tranco e sem soltar aquele disco de metal prensado dentro do copo, que costuma levar minutos preciosos para ser arrancado com chave de fenda.</p>
              <p>É menos peso na maleta, menos peças móveis para estragar e um corte limpo direto no alvo.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Materiais Indicados para Uso</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Embora seja uma ferramenta extremamente versátil, a broca escalonada não foi feita para qualquer tipo de material bruto.</p>
              <p>Para proteger seu investimento e não queimar as arestas de corte logo nos primeiros furos, você precisa respeitar a compatibilidade mecânica entre a peça e a dureza da broca.</p>
              <p>Conhecer onde ela trabalha folgada e onde ela simplesmente não deve ser usada é o segredo para ter a ferramenta afiada por anos.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Materiais Recomendados</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>O verdadeiro terreno dessa ferramenta são as chapas metálicas de baixa e média espessura.</p>
              <p>Chapas de aço carbono, aço galvanizado, latão, cobre e perfis estruturais de alumínio aceitam essa furação com facilidade surpreendente.</p>
              <p>Nessas superfícies, o gume de corte fatia o metal com pouca resistência mecânica, sem amassar a estrutura e sem sobrecarregar a furadeira.</p>
              <p>Plásticos técnicos e rígidos — como PVC, acrílico e chapas de policarbonato — também são perfurados com facilidade impecável, desde que você controle a velocidade para o calor não derreter as bordas.</p>
              <p>O ponto crucial é a espessura da chapa, que deve ser compatível com a altura de cada degrau da broca.</p>
              <p>Respeitando esse limite, você garante cortes sem rebarba e preserva o corte do acessório para centenas de operações.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Materiais Não Recomendados</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Evite usar a broca escalonada em madeira maciça ou vigas espessas.</p>
              <p>Pelo seu formato cônico progressivo, ela cria um orifício com degraus internos em materiais grossos, não conseguindo entregar um canal cilíndrico reto.</p>
              <p>Em chapas metálicas com espessura maior que a altura do degrau (geralmente acima de 4 mm ou 5 mm), o problema é o mesmo: a ferramenta atinge o próximo diâmetro antes de furar o anterior por completo, resultando em medidas desiguais em cada face da peça.</p>
              <p>Outro erro fatal é tentar forçar o acessório em ligas temperadas de altíssima dureza, ferro fundido maciço ou aços estruturais pesados sem refrigeração industrial.</p>
              <p>O atrito severo vai gerar superaquecimento imediato, queimar a têmpera do aço rápido (HSS) e deixar a broca totalmente cega em questão de trinta segundos de rotação.</p>
            </div>
          </section>

          <BunnerDoMeio />

          <section className="mb-12 mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Aplicações Práticas da Broca Escalonada</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Na rotina prática de montagens e reformas, a escalonada brilha quando o serviço exige agilidade, tolerância mínima de erro e um acabamento técnico limpo.</p>
              <p>Entender como aplicar a ferramenta no momento certo transforma tarefas demoradas em procedimentos rápidos, entregando furos centralizados sem exigir uma bancada cheia de ferramentas espalhadas.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">APLICAÇÃO PROFISSIONAL</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Na lida pesada, essa ferramenta é item obrigatório na maleta de eletricistas industriais, montadores de quadros elétricos, mecânicos automotivos, instaladores de ar-condicionado (HVAC) e profissionais de serralheria.</p>
              <p>Sempre que você precisa abrir passagens de tubulações de 1/2", 3/4" ou botões de comando de 22 mm em painéis metálicos, nada supera a agilidade da escalonada.</p>
              <p>Acoplada a boas parafusadeiras a bateria de alto torque ou furadeiras elétricas com seletor de velocidade, ela permite furar com controle milimétrico.</p>
              <p>Para manter a performance em uso contínuo, a postura profissional exige o uso de rotações controladas e refrigeração constante com óleo de corte, garantindo produtividade sem queimar consumíveis caros no canteiro.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Exemplo de Uso em Trilhos para Disjuntores</h3>
            <div className="mb-6 flex justify-center">
              <img 
                src="/images/blog/1/broca-escalonada-trilho-din.webp" 
                alt="Furação com broca escalonada em trilho DIN para quadro de disjuntores" 
                title="Aplicação prática da broca escalonada em trilhos elétricos"
                className="w-full max-w-2xl rounded-xl shadow-lg"
                width={800}
                height={537}
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Na montagem de quadros de distribuição, a fixação de trilhos DIN exige furação perfeitamente alinhada.</p>
              <p>Um furo fora de centro faz o trilho ficar torto, travando o encaixe modular dos disjuntores.</p>
              <p>Com a broca escalonada, a ponta autocentrante crava no metal galvanizado sem escorregar e sem precisar de punção.</p>
              <p>Você inicia com rotação média, deixa o primeiro estágio furar a chapa e desce apenas até o degrau correspondente à bitola do parafuso ou rebite de fixação.</p>
              <p>Como o furo sai limpo, sem rebarbas cortantes que possam descascar condutores elétricos, o trilho assenta reto e firme, eliminando folgas mecânicas com rapidez absurda na montagem.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Exemplo de Uso em PVC</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Perfurar tubulações ou quadros plásticos de PVC exige cuidado: brocas de aço comuns costumam morder o plástico de forma brusca, lascando ou abrindo trincas que inutilizam a tubulação.</p>
              <p>Com a escalonada, o processo é suave.</p>
              <p>Basta apoiar a ponta na marcação, acionar a máquina em velocidade baixa e deixar a ponta abrir a passagem inicial.</p>
              <p>A partir daí, aplique uma pressão leve e constante conforme os degraus vão abrindo o diâmetro do eletroduto ou conexão.</p>
              <p>O grande segredo: ao atingir a medida desejada, puxe a ferramenta para trás com a máquina ainda girando em baixa velocidade.</p>
              <p>Esse movimento remove rebarbas plásticas, impede marcas de queimado por fricção e entrega uma vedação perfeita para conexões estanques.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Cuidados e Procedimentos Durante a Perfuração</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Uma boa ferramenta na mão é apenas metade da equação; a outra metade é o seu procedimento no gatilho.</p>
              <p>Trabalhar sem técnica na bancada só serve para destruir o fio de corte e condenar materiais caros.</p>
              <p>Dominar os parâmetros de ajuste antes de iniciar a perfuração é a marca registrada de quem opera com padrão profissional.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Velocidade de Perfuração</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>O erro mais comum de quem pega uma broca escalonada pela primeira vez é socar o gatilho da furadeira na velocidade máxima achando que o trabalho vai render mais.</p>
              <p>Em metal, rotação em excesso só gera atrito violento, elevando a temperatura a níveis críticos que destemperam o aço da ferramenta.</p>
              <p>A regra mecânica básica é simples: quanto maior o diâmetro do degrau que está cortando, menor deve ser a rotação (RPM) da máquina.</p>
              <p>Comece o contato com a chapa em giro baixo para a ponta assentar firme.</p>
              <p>Conforme você avança pelos degraus mais largos (como 16, 20 ou 30 mm), reduza ainda mais a velocidade ou troque para a primeira marcha mecânica da sua parafusadeira.</p>
              <p>Esse ajuste diminui as vibrações no punho, protege o motor do equipamento e garante que a lâmina corte fatias limpas de metal em vez de apenas esfregar a quente contra a chapa.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Lubrificação</h3>
            <div className="mb-6 flex justify-center">
              <img 
                src="/images/blog/1/lubrificacao-broca-escalonada.webp" 
                alt="Aplicação de fluido de corte para lubrificação de broca escalonada" 
                title="Procedimento correto de lubrificação da broca escalonada"
                className="w-full max-w-2xl rounded-xl shadow-lg"
                width={800}
                height={537}
                loading="lazy"
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Furar metal a seco é o caminho mais rápido para queimar qualquer broca de qualidade.</p>
              <p>O atrito direto entre o aço rápido da ferramenta e a chapa metálica gera calor térmico destrutivo.</p>
              <p>Usar óleo de corte, fluido solúvel ou até mesmo um óleo lubrificante fino cria uma barreira térmica crucial que preserva o fio dos dentes de corte e reduz o esforço do motor.</p>
              <p>Além de salvar a vida útil do acessório, o fluido ajuda a expulsar os cavacos pelas estrias sem grudar no metal da broca, deixando o orifício com acabamento liso e espelhado.</p>
              <p>Mantenha sempre um frasco de fluido de corte ao lado da sua furadeira: o custo de algumas gotas de lubrificante é insignificante perto do valor de ter que repor uma broca nova toda semana.</p>
            </div>
          </section>

          <BunnerDoMeio />

          <section className="mb-12 mt-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Fixação da Peça</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Tentar furar chapas ou perfis de metal segurando a peça com a mão livre é uma das atitudes mais arriscadas dentro de uma oficina.</p>
              <p>Se a broca escalonada agarrar em um degrau maior durante a passagem, a furadeira vai girar a chapa feito uma lâmina cortante, provocando acidentes sérios nas mãos e punhos do operador.</p>
              <p>Prenda sempre o material com sargentos, grampos tipo C ou trave a peça em uma morsa de bancada rígida.</p>
              <p>Quando o material fica totalmente estático, você elimina trepidações mecânicas que causam microfissuras na ferramenta ou deformam o furo tornando-o oval.</p>
              <p>A rigidez do conjunto protege a precisão do trabalho e canaliza 100% da potência da ferramenta diretamente para o corte.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Equipamentos de Proteção</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Segurança no trabalho não é conselho decorativo; é o que mantém você trabalhando no dia seguinte com saúde.</p>
              <p>A perfuração com brocas escalonadas ejeta lascas e cavacos metálicos quentes e pontiagudos em várias direções.</p>
              <p>Usar óculos de segurança com proteção lateral é obrigatório para evitar lesões graves nos olhos.</p>
              <p>Luvas de proteção de boa aderência são fundamentais para manipular as chapas e remover cavacos sem risco de cortes.</p>
              <p>Antes de manusear a broca no mandril ou verificar o estado dos dentes, solte o botão de acionamento e remova a bateria da ferramenta (ou desconecte o plugue da tomada).</p>
              <p>E um lembrete indispensável: nunca use a função de impacto/martelete da sua furadeira ao trabalhar com brocas escalonadas.</p>
              <p>O impacto mecânico quebra as quinas temperadas da ferramenta na primeira pancada.</p>
              <p>O trabalho aqui exige apenas rotação pura e contínua.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Dicas para Limitar a Profundidade de Furo</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Com a furadeira ligada e girando, a leitura dos números gravados na broca pode ficar difícil.</p>
              <p>Para evitar descer um degrau a mais por distração e abrir um buraco maior do que o diâmetro do conector, você pode usar um truque prático de bancada: o limitador visual com fita.</p>
              <p>Pegue um pedaço de fita isolante ou fita crepe e passe em volta do degrau exatamente anterior à medida que você precisa alcançar.</p>
              <p>Quando o topo da fita encostar na superfície do metal, você tem o sinal visual e tátil imediato de que chegou na cota certa e deve soltar o gatilho.</p>
              <p>Para trabalhos de produção repetitiva em série, acoplar um limitador mecânico de profundidade na haste garante padronização milimétrica em todas as peças do lote.</p>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Atenção</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>A própria ferramenta avisa quando algo está errado pelo som e pela vibração no punho.</p>
              <p>Se você sentir a furadeira perder força, notar trepidação fora do normal ou se o metal começar a chiar e soltar fumaça escura sem soltar cavaco, pare imediatamente de furar.</p>
              <p>Insistir no avanço nessas condições vai queimar o gume de corte ou trincar o corpo da broca.</p>
              <p>Afaste a máquina, cheque se a rotação não está rápida demais para o diâmetro atual, aplique mais óleo de corte e certifique-se de que a chapa não flexionou sob a pressão.</p>
              <p>Um operador experiente sabe a hora de pausar por dez segundos para reajustar os parâmetros em vez de insistir na força bruta e ter o prejuízo de quebrar o equipamento.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Desafios e Limitações</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Apesar de ser uma ferramenta indispensável, a broca escalonada possui limites técnicos que precisam ser respeitados.</p>
              <p>A principal limitação é a espessura da peça: cada degrau tem uma altura útil de trabalho (geralmente entre 3 mm e 5 mm).</p>
              <p>Se a chapa tiver espessura superior a essa altura, a ferramenta começará a cortar o próximo diâmetro antes que o anterior termine de vazar o metal, gerando um furo chanfrado em vez de cilíndrico.</p>
              <p>A qualidade da liga metálica da broca também define sua durabilidade.</p>
              <p>Modelos baratos de aço carbono desclassificado não aguentam o tranco em serviços profissionais.</p>
              <p>Para trabalhos contínuos, opte sempre por brocas de Aço Rápido (HSS) com revestimento de Nitreto de Titânio (TiN) ou ligas de Cobalto (HSS-Co), que aguentam temperaturas mais altas de fricção.</p>
              <p>Mesmo com esses tratamentos, o uso incorreto em rotações altas ou sem fluido condena a ferramenta prematuramente.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Manutenção e Durabilidade</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Cuidar bem das suas ferramentas é preservar o seu dinheiro e o seu tempo.</p>
              <p>Ao encerrar o dia de trabalho, limpe a broca com um pano seco e passe um pouco de óleo anticorrosivo ou desengripante para evitar oxidação na maleta.</p>
              <p>Nunca guarde as brocas soltas dentro de caixas com martelos, chaves e alicates pesados: o choque entre as ferramentas amassa o fio de corte dos degraus, estragando o rendimento da próxima furação.</p>
              <p>Guarde-as sempre nos estojos plásticos originais.</p>
            </div>
          </section>

          <section className="mb-12 mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
              <span className="text-[#FFD700]">💡</span> Dica de Uso
            </h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Para estender ao máximo a vida útil do seu acessório, crie uma regra de bancada inegociável: aplique uma gota de óleo de corte antes de iniciar cada perfuração em metal.</p>
              <p>Esse cuidado simples derruba a temperatura de atrito, protege o tratamento térmico do aço e impede que as pontas lasquem com a pressão do avanço.</p>
              <p>Aqui no Mestre das Ferramentas, nosso foco é passar para você a experiência real de quem vive a rotina pesada da obra e da oficina, sem rodeios.</p>
              <p>Quando você une a ferramenta certa com a técnica correta de rotação e conservação, seu trabalho ganha velocidade, os furos saem precisos e a sua produtividade sobe de nível em qualquer serviço.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
