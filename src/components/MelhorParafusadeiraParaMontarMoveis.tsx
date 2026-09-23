import React, { useState } from 'react';
import { AffiliateCard } from './AffiliateCard';
import { BunnerDoMeio } from './BunnerDoMeio';
import { ExitIntentPopup } from './ExitIntentPopup';
import { products, type ProductId } from '../data/products';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';

export const MelhorParafusadeiraParaMontarMoveis: React.FC = () => {
  const featuredIds: ProductId[] = [
    "parafusadeira-black-decker-ld12",
    "parafusadeira-bosch-gsr-1000",
    "parafusadeira-vonder-pfv-012i",
    "parafusadeira-wap-bpf-12k3",
    "DeWalt DCD700LC1"
  ];

  const productImages: Partial<Record<ProductId, string>> = {
    "parafusadeira-black-decker-ld12": "/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Black & Decker LD12.webp",
    "parafusadeira-bosch-gsr-1000": "/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Bosch GSR 1000.webp",
    "parafusadeira-vonder-pfv-012i": "/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Vonder Pfv 012i 12 V.webp",
    "parafusadeira-wap-bpf-12k3": "/images/blog/melhor-parafusadeira/Parafusadeira WAP BPF 12K3.webp",
    "DeWalt DCD700LC1": "/images/blog/1/Furadeira e Parafusadeira Dewalt Modelo DCD700LC1.webp"
  };

  const productMetadata: Record<string, { category: string; score: string; shortName: string }> = {
    "parafusadeira-black-decker-ld12": {
      shortName: "Black+Decker LD12",
      category: "Custo-Benefício / Doméstico",
      score: "8.9 / 10"
    },
    "parafusadeira-bosch-gsr-1000": {
      shortName: "Bosch GSR 1000 Smart",
      category: "Uso Constante / Precisão",
      score: "9.5 / 10"
    },
    "parafusadeira-vonder-pfv-012i": {
      shortName: "Vonder PFV012I 12V",
      category: "Versatilidade / Casa",
      score: "9.0 / 10"
    },
    "parafusadeira-wap-bpf-12k3": {
      shortName: "WAP BPF 12K3",
      category: "Kit Completo / Iniciantes",
      score: "8.8 / 10"
    },
    "DeWalt DCD700LC1": {
      shortName: "DeWalt DCD700LC1",
      category: "Profissional / Durabilidade",
      score: "9.7 / 10"
    }
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Por que o Controle de Torque é Fundamental?",
      answer: [
        "O colar de regulagem de torque é o verdadeiro anjo da guarda de qualquer montador de móveis.",
        "Esse anel numerado nada mais é do que uma embreagem mecânica de segurança ajustável.",
        "Quando você calibra a máquina em uma posição baixa, ela aplica a pressão ideal para encostar o parafuso; assim que a cabeça atinge o batente da madeira, a catraca interna patina e desengata o giro, mesmo que você continue com o dedo pressionando o gatilho.",
        "É esse recurso que impede o parafuso de afundar no miolo do MDF, evitando prejuízos irreversíveis nas peças."
      ]
    },
    {
      question: "Parafusadeira 12V ou 20V: qual é melhor para montar móveis?",
      answer: [
        "Existe o mito popular de que ferramentas de 20V são sempre superiores.",
        "Na marcenaria residencial e na montagem de móveis em placas de MDF, a categoria de 12V é a melhor escolha.",
        "Elas oferecem exatamente a força necessária para parafusos de madeira de até 50 mm e mantêm o equipamento leve e ágil.",
        "Máquinas de 20V foram projetadas para perfurações estruturais pesadas, madeiramento de telhado e perfis metálicos grossos; usá-las em móveis leves traz risco real de estourar as peças com torque excessivo, além de cansar seus braços sem nenhuma necessidade."
      ]
    },
    {
      question: "Parafusadeira com ou sem impacto para montar móveis?",
      answer: [
        "A função de impacto deve passar bem longe dos seus móveis.",
        "O sistema de impacto funciona gerando pequenos golpes para romper a resistência do concreto ou soltar parafusos enferrujados em serralheria.",
        "Quando esses golpes mecânicos atingem as fibras prensadas do aglomerado ou do MDF, eles quebram a estrutura interna do material em segundos, deixando o parafuso frouxo para sempre.",
        "Para montar mobília com precisão e acabamento impecável, prefira sempre parafusadeiras rotativas convencionais sem impacto."
      ]
    },
    {
      question: "Motor com escovas ou brushless?",
      answer: [
        "O termo brushless (motores sem escovas de carvão) tomou conta do marketing das ferramentas nos últimos anos.",
        "Embora entreguem maior autonomia de bateria e menor aquecimento em uso industrial contínuo, para a realidade do uso doméstico os motores com escovas tradicionais continuam sendo uma escolha excelente e muito mais barata.",
        "Se você utiliza a parafusadeira para manutenções pontuais no fim de semana ou montagens esporádicas, pagar o dobro por um motor sem escovas é desnecessário.",
        "Uma boa máquina convencional atenderá suas necessidades perfeitamente por muitos anos."
      ]
    },
    {
      question: "Vale a pena comprar parafusadeira usada para montar móveis?",
      answer: [
        "Comprar ferramentas elétricas a bateria de segunda mão exige cautela redobrada.",
        "O grande calcanhar de Aquiles das parafusadeiras reside na saúde química da bateria.",
        "Se o dono anterior deixou a máquina descarregada por muito tempo ou a expôs ao calor excessivo, as células perdem capacidade de retenção de carga.",
        "Na maioria dos casos, o valor de uma bateria de reposição original chega a custar até 70% do preço de uma ferramenta zero na caixa.",
        "Se você não tiver como testar a bateria sob esforço real, vale muito mais a pena adquirir um modelo novo com nota fiscal e garantia de fábrica."
      ]
    },
    {
      question: "Parafusadeira substitui furadeira para montar móveis?",
      answer: [
        "Em projetos de montagem e marcenaria leve, a parafusadeira não apenas substitui a furadeira convencional, como faz o trabalho com muito mais segurança.",
        "Furadeiras de tomada trabalham em rotações elevadas e não contam com embreagem de torque, o que frequentemente faz a broca atravessar o fundo do móvel ou destrói a cabeça do parafuso num piscar de olhos.",
        "Uma parafusadeira-furadeira de 12V reúne o melhor dos dois mundos: tem sensibilidade para perfurar pequenos furos-guia em madeira e a delicadeza necessária para assentar ferragens sem danificar as superfícies.",
        "Guarde a furadeira pesada apenas para fazer furos em paredes duras de alvenaria."
      ]
    }
  ];

  const [simuladorResposta, setSimuladorResposta] = useState('');

  const handleSimulador = (opcao: string) => {
    if (opcao === 'esporadico') {
      setSimuladorResposta('Para montagens esporádicas, modelos de entrada de 12V como a Black+Decker LD12S-BR são ideais e econômicos.');
    } else {
      setSimuladorResposta('Para marcenaria frequente, invista em modelos robustos com controle de torque preciso, como a Bosch GSR 1000 Smart ou DeWalt DCD700LC1.');
    }
  };

  return (
    <>
        <ExitIntentPopup />
        
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/1/melhor-parafusadeira-para-montar-moveis.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              5 Melhores Parafusadeiras para Montar Móveis <br/>
              <span className="text-[#FFD700]">("Sem Espanar")</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span>Por</span>
                <a href="/author/severino-torquato/" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors font-semibold group">
                  <img 
                    src="/images/autores/severino-torquato.webp" 
                    alt="Severino Torquato" 
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-[#FFD700] group-hover:scale-110 transition-transform"
                  />
                  Severino Torquato
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* SIMULADOR RÁPIDO DE ENGAJAMENTO */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-12 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Qual o seu nível de uso na montagem de móveis?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <button 
                onClick={() => handleSimulador('esporadico')}
                className="bg-white border-2 border-[#FFD700] text-[#1a1a1a] px-4 py-2 rounded font-semibold hover:bg-[#FFD700] transition-colors"
              >
                Montagens esporádicas e reparos domésticos
              </button>
              <button 
                onClick={() => handleSimulador('frequente')}
                className="bg-white border-2 border-[#FFD700] text-[#1a1a1a] px-4 py-2 rounded font-semibold hover:bg-[#FFD700] transition-colors"
              >
                Montagens frequentes e marcenaria
              </button>
            </div>
            {simuladorResposta && (
              <div className="p-4 bg-[#FFFBE6] text-[#1a1a1a] font-medium rounded animate-fade-in border border-[#FFD700]/30">
                {simuladorResposta}
              </div>
            )}
          </div>

          <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mb-12">
            <p>Montar um móvel novo que você comprou pela internet deveria ser um momento prazeroso, mas a frustração de lidar com parafusos que não entram ou o cansaço no antebraço de usar uma chave manual costumam transformar a tarefa em dor de cabeça.</p>
            <p>Em mais de duas décadas fazendo manutenção residencial e acompanhando projetos de marcenaria DIY, já perdi a conta de quantas vezes cheguei na casa de clientes e encontrei laterais de armários novinhos estouradas porque a pessoa usou a ferramenta errada ou apertou além da conta.</p>
            <p>A busca pela melhor parafusadeira para montar móveis nasce justamente da necessidade de unir agilidade, conforto e precisão no dia a dia.</p>
          </div>

          {/* Vitrine / Showcase Table */}
          <div className="mb-16 max-w-[850px] mx-auto bg-slate-50 p-2.5 rounded-2xl sm:p-5 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#1a1a1a] mb-6 text-center">Escolha rápida: o modelo certo para cada perfil</h2>
            
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full border-collapse">
                <thead className="bg-slate-100 text-slate-700 text-xs uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3 text-center w-[70px] sm:w-[90px]">Foto</th>
                    <th className="p-3 text-left">Modelo</th>
                    <th className="p-3 text-left hidden md:table-cell">Categoria</th>
                    <th className="p-3 text-center hidden sm:table-cell">Nota</th>
                    <th className="p-3 text-center w-[100px] sm:w-[150px]">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {featuredIds.map((id) => {
                    const product = products[id];
                    const meta = productMetadata[id as keyof typeof productMetadata];
                    if (!product || !meta) return null;

                    let thumbSrc = productImages[id] || "";
                    if (id === "parafusadeira-black-decker-ld12") thumbSrc = "/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Black & Decker LD12-thumb.webp";
                    else if (id === "parafusadeira-bosch-gsr-1000") thumbSrc = "/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Bosch GSR 1000-thumb.webp";
                    else if (id === "parafusadeira-wap-bpf-12k3") thumbSrc = "/images/blog/melhor-parafusadeira/Parafusadeira WAP BPF 12K3-thumb.webp";
                    else if (id === "parafusadeira-vonder-pfv-012i") thumbSrc = "/images/blog/melhor-furadeira/ParafusadeiraFuradeira-de-Impacto-a-Bateria-12-V-PFV-120I-thumb.webp";

                    return (
                      <tr key={id} className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors">
                        <td className="p-2 align-middle text-center">
                          <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-white mx-auto">
                            <img 
                              src={thumbSrc}
                              alt={meta.shortName} 
                              width="60"
                              height="60"
                              className="max-w-full max-h-full block object-contain mix-blend-multiply"
                              loading="lazy"
                            />
                          </div>
                        </td>
                        <td className="p-2 align-middle">
                          <div className="text-sm sm:text-base font-bold text-slate-800 leading-tight">
                            {meta.shortName}
                          </div>
                          {/* On mobile, show category and note below the name */}
                          <div className="text-[11px] text-slate-500 mt-1 md:hidden">
                            {meta.category}
                          </div>
                          <div className="text-[11px] font-bold text-yellow-700 mt-0.5 sm:hidden">
                            Nota: {meta.score}
                          </div>
                        </td>
                        <td className="p-2 align-middle text-slate-600 text-xs sm:text-sm hidden md:table-cell">
                          {meta.category}
                        </td>
                        <td className="p-2 align-middle text-center hidden sm:table-cell">
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                            {meta.score}
                          </span>
                        </td>
                        <td className="p-2 align-middle text-center">
                          <a 
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="bg-[#FFD700] text-[#1a1a1a] font-bold no-underline text-[11px] py-1.5 px-2.5 rounded whitespace-nowrap inline-block hover:bg-[#FACC15] transition-colors sm:py-2 sm:px-4 sm:text-[13px] shadow-sm w-full"
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
          </div>

          <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mt-12 mb-4">Compra segura para uso doméstico</h2>
            <p>A primeira coisa que você precisa fazer antes de passar o cartão é um exercício sincero sobre a sua rotina: com que frequência você realmente vai usar essa ferramenta?</p>
            <p>Nem todo mundo precisa de uma parafusadeira pesada de canteiro de obras; na verdade, na montagem de móveis residenciais, o excesso de força bruta é o seu pior inimigo.</p>
            <p>Comprar com segurança significa entender o tipo de material que você vai encarar — geralmente aglomerado e MDF de 15 mm — e escolher um modelo leve, que não canse o seu punho e ofereça a delicadeza necessária para não transformar o furo do parafuso em pó de madeira.</p>
          </div>

          {/* Detailed Reviews */}
          <div className="space-y-16">
            
            {/* Black+Decker LD12S-BR */}
            <section id="parafusadeira-black-decker-ld12" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Black+Decker LD12S-BR
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={productImages["parafusadeira-black-decker-ld12"]} alt="Parafusadeira Black+Decker LD12S-BR leve e ergonômica para montagem de móveis" title="Parafusadeira Black+Decker LD12S-BR leve e ergonômica para montagem de móveis" width={800} height={533} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>Se você está montando o seu primeiro jogo de ferramentas e quer resolver as coisas da casa sem complicação, a Black+Decker LD12S-BR é uma porta de entrada muito equilibrada.</p>
                <p>Com apenas 850 gramas na balança, ela praticamente elimina aquela queimação no antebraço comum em montagens demoradas, permitindo que você termine o serviço sem sentir que o braço pediu arrego.</p>
                <p>A ergonomia aqui é o ponto forte: a empunhadura emborrachada encaixa firme na palma da mão, transmitindo segurança para quem ainda tem receio de manusear ferramentas elétricas.</p>
                <p>O estojo com 13 acessórios já resolve de imediato os parafusos Phillips e fenda mais comuns de móveis planejados.</p>
                <p>Só deixo um alerta técnico de quem já viu muito estrago: o controle de torque dela é mais direto e simplificado.</p>
                <p>Evite acelerar com força total em chapas de MDF mais finas para não espanar a peça.</p>
                <p>É uma ferramenta honesta, compacta e excelente para a manutenção da casa.</p>
              </div>

              <AffiliateCard id="parafusadeira-black-decker-ld12" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Extremamente leve (850 g)</li>
                    <li>Kit com 13 acessórios</li>
                    <li>Empunhadura emborrachada</li>
                    <li>Indicador de carga em LED</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Torque menos progressivo</li>
                    <li>Não indicada para serviços pesados</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Bosch GSR 1000 Smart */}
            <section id="parafusadeira-bosch-gsr-1000" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Bosch GSR 1000 Smart
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={productImages["parafusadeira-bosch-gsr-1000"]} alt="Parafusadeira Bosch GSR 1000 Smart com controle eletrônico de torque para montagem de móveis sem espanar" title="Parafusadeira Bosch GSR 1000 Smart com controle eletrônico de torque para montagem de móveis sem espanar" width={800} height={533} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>Se a sua meta é a tranquilidade de investir em uma ferramenta duradoura que vai ficar na família por anos, a Bosch GSR 1000 Smart é a escolha técnica mais robusta para serviços residenciais.</p>
                <p>Diferente de muitas opções de entrada que parecem brinquedos de plástico frágil, esta máquina traz toda a confiabilidade de montagem da linha industrial da Bosch adaptada ao uso leve.</p>
                <p>O grande diferencial aqui não é força bruta, mas sim o controle eletrônico de torque no gatilho.</p>
                <p>Na prática, você consegue dosar a rotação milímetro por milímetro, evitando que a ponta do bit escape e arranhe o acabamento da sua gaveta novinha.</p>
                <p>A carcaça compacta e o sistema antivibração poupam suas articulações mesmo após horas montando estantes.</p>
                <p>A luz de LED frontal parece um detalhe bobo, mas salva o dia quando você precisa parafusar corrediças no fundo escuro de um guarda-roupa.</p>
                <p>O único ponto que você precisa colocar no seu planejamento é a bateria interna: por não ser removível, se a carga acabar durante um trabalho grande, você precisa pausar por cerca de uma hora com a máquina ligada na tomada.</p>
                <p>É o casamento perfeito entre precisão e robustez para reparos caseiros.</p>
              </div>

              <AffiliateCard id="parafusadeira-bosch-gsr-1000" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Controle eletrônico de torque progressivo</li>
                    <li>Alta durabilidade e qualidade</li>
                    <li>Ergonomia superior e baixa vibração</li>
                    <li>LED integrado eficiente</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Bateria integrada (não removível)</li>
                    <li>Sem função martelete/impacto</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <BunnerDoMeio />

            {/* Vonder PFV012I */}
            <section id="parafusadeira-vonder-pfv-012i" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Vonder PFV012I
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={productImages["parafusadeira-vonder-pfv-012i"]} alt="Parafusadeira e furadeira de impacto Vonder PFV012I 12V com maleta e acessórios" title="Parafusadeira e furadeira de impacto Vonder PFV012I 12V com maleta e acessórios" width={800} height={533} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>Para quem quer resolver tudo em casa com uma única ferramenta, a Vonder PFV012I atua como um autêntico canivete suíço.</p>
                <p>O grande atrativo deste modelo em relação às concorrentes puramente de montagem é a função de impacto mecânico.</p>
                <p>Isso significa que, além de montar o rack ou a cabeceira da cama, você pode usar a mesma máquina para fazer furos em alvenaria e pendurar prateleiras ou quadros sem precisar tirar uma furadeira pesada de tomada da caixa.</p>
                <p>O kit que acompanha a máquina é bastante recheado, trazendo trena, brocas para alvenaria e metal, além de vários bits, poupando aquelas idas de última hora à loja de materiais de construção.</p>
                <p>Contudo, vale alinhar as expectativas mecânicas: o motor utiliza escovas de carvão convencionais e a bateria de 1,3 Ah tem autonomia calculada para uso pontual.</p>
                <p>Em montagens muito extensas, como armários de quatro ou seis portas, você precisará fazer pequenas pausas para recarregar.</p>
                <p>Ainda assim, para o uso residencial misto, ela entrega uma versatilidade difícil de bater pelo valor cobrado.</p>
              </div>

              <AffiliateCard id="parafusadeira-vonder-pfv-012i" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Função impacto para alvenaria</li>
                    <li>Maleta com brocas e bits</li>
                    <li>Excelente custo-benefício</li>
                    <li>Pegada confortável</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Autonomia de bateria modesta (1,3 Ah)</li>
                    <li>Motor com escovas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* WAP 12V BPF 12K3 */}
            <section id="parafusadeira-wap-bpf-12k3" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                Parafusadeira Furadeira WAP 12V
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={productImages["parafusadeira-wap-bpf-12k3"]} alt="Parafusadeira e furadeira WAP 12V BPF 12K3 com kit completo de brocas e bits" title="Parafusadeira e furadeira WAP 12V BPF 12K3 com kit completo de brocas e bits" width={800} height={533} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>Para quem quer fugir de complicações e procura uma parafusadeira prática, pronta para uso imediato sem pesar no bolso, a WAP BPF 12K3 é uma companheira de primeira linha.</p>
                <p>O grande atrativo aqui é o pacote completo: a maleta plástica já vem com um jogo de brocas e bits para os parafusos mais comuns do mercado, livrando você daquela incômoda dúvida de quais acessórios comprar separadamente.</p>
                <p>O seletor com 18 níveis de torque permite ajustar a força de aperto com bastante folga, garantindo que o parafuso puxe a chapa de madeira até encostar, sem atravessar a película externa do acabamento.</p>
                <p>O mandril de 10 mm de aperto rápido dispensa qualquer chave, agilizando a troca de uma broca de pré-furo para uma ponta de parafusar em poucos segundos.</p>
                <p>O ponto de atenção fica no carregador: como ele leva de 3 a 5 horas para completar a carga, o ideal é deixar a bateria carregada na véspera do seu projeto de montagem para não ficar parado esperando no meio do caminho.</p>
              </div>

              <AffiliateCard id="parafusadeira-wap-bpf-12k3" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Maleta com kit completo</li>
                    <li>18 níveis de ajuste de torque</li>
                    <li>Mandril de aperto rápido (10 mm)</li>
                    <li>Luz de LED frontal</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Tempo de recarga lento (3 a 5 horas)</li>
                    <li>Apenas para uso doméstico leve</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* DeWalt DCD700LC1 */}
            <section id="dewalt-dcd700lc1" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                DeWalt DCD700LC1
              </h3>
              <div className="w-full flex justify-center mb-8">
                 <img src={productImages["DeWalt DCD700LC1"]} alt="Parafusadeira e furadeira DeWalt DCD700LC1 12V com duas velocidades mecânicas" title="Parafusadeira e furadeira DeWalt DCD700LC1 12V com duas velocidades mecânicas" width={800} height={533} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
                <p>A DeWalt DCD700LC1 é a pedida certa para quem encara o faça você mesmo como uma paixão constante e busca uma máquina de precisão quase cirúrgica.</p>
                <p>Ao contrário dos modelos puramente domésticos, esta parafusadeira entrega uma transmissão mecânica de duas velocidades na parte superior da carcaça.</p>
                <p>Na velocidade 1, você tem rotação baixa e controle total para puxar ferragens delicadas; na velocidade 2, ganha rotação rápida para furar madeiras mais densas com facilidade.</p>
                <p>A engenharia da DeWalt foi moldada para o trabalho duradouro.</p>
                <p>O colar de ajuste com 15 posições de torque desarma a tração na fração de segundo exata em que o parafuso assenta, zerando o risco de espanar roscas ou estalar o revestimento melamínico do móvel.</p>
                <p>A carcaça emborrachada suporta o tranco de pequenas quedas acidentais na bancada sem trincar.</p>
                <p>Ela não tem martelete para perfurar concreto pesado, mas se o seu foco são móveis, painéis e marcenaria residencial, a robustez dessa máquina compensa cada centavo no longo prazo.</p>
              </div>

              <AffiliateCard id="DeWalt DCD700LC1" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Duas velocidades mecânicas</li>
                    <li>Controle de torque extremamente calibrado</li>
                    <li>Mandril metálico de aperto rápido</li>
                    <li>Ergonomia padrão industrial</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Sem função de impacto</li>
                    <li>Valor de aquisição mais elevado</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Buying Guide Sections */}
          <section className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Manual, elétrica ou a bateria? Entendendo os tipos</h2>
            <div className="w-full flex justify-center mb-8">
               <img src="/images/blog/1/comparativo_parafusadeiras.webp" alt="Comparativo entre parafusadeira manual, elétrica com fio e a bateria para montagem de móveis" title="Comparativo entre parafusadeira manual, elétrica com fio e a bateria para montagem de móveis" width={800} height={533} className="max-h-80 object-contain mix-blend-multiply rounded" loading="lazy" />
            </div>
            <div className="space-y-4 prose prose-lg max-w-none text-gray-700">
              <p>Nessas mais de duas décadas fazendo reparos em residências, já perdi a conta de quantas pessoas vi tentando montar um quarto infantil inteiro usando apenas a chave de fenda manual que veio no saquinho de parafusos.</p>
              <p>O resultado final é sempre o mesmo: bolhas na palma da mão, parafusos tortos e painéis desalinhados que começam a chiar em poucas semanas.</p>
              <p>A chave manual serve para apertar um parafuso frouxo de maçaneta, nunca para encarar a montagem de um móvel completo.</p>
              <p>As parafusadeiras com fio até fornecem força contínua, mas o cabo elétrico é um estorvo dentro de casa: ele enrosca nas quinas, derruba potes de parafusos no chão e te deixa dependente de extensões elétricas.</p>
              <p>É por isso que os modelos alimentados por baterias modernas de íon de lítio reinam soberanos.</p>
              <p>Elas oferecem agilidade, leveza e a mobilidade indispensável para você entrar no vão estreito de um armário ou parafusar corrediças por baixo de tampos sem tropeçar em fios.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Critérios de Escolha da Parafusadeira Ideal</h2>
            <div className="space-y-4 prose prose-lg max-w-none text-gray-700">
              <p>Escolher a ferramenta ideal vai muito além de olhar a etiqueta de preço ou se apaixonar pela cor da carcaça.</p>
              <p>Pequenos detalhes de construção impactam diretamente tanto a integridade dos seus móveis quanto a saúde do seu punho e da sua coluna.</p>
              <p>Ao entender como cada recurso mecânico atua no dia a dia da montagem, você faz um investimento certeiro e transforma o que seria uma tarde cansativa em um projeto rápido, alinhado e sem peças estragadas.</p>
              
              <h3 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">Características técnicas que você não pode ignorar</h3>
              <p>A primeira coisa a conferir é se o mandril aceita ponteiras sextavadas de 1/4" (6,35 mm), que é o tamanho universal dos bits Phillips, Fenda e Pozidriv usados nas ferragens de móveis modernos.</p>
              <p>O segundo item indispensável é o gatilho eletrônico de velocidade variável: ele permite que você inicie o aperto bem devagar para guiar a ponta do parafuso no furo sem que ele escorregue e risque a chapa.</p>
              <p>Por fim, analise a distribuição de peso do conjunto.</p>
              <p>Uma parafusadeira compacta, com centro de gravidade bem equilibrado na empunhadura, faz toda a diferença para evitar tendinites e dores no final da tarde.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Os erros que mais geram arrependimento na compra</h2>
            <div className="space-y-4 prose prose-lg max-w-none text-gray-700 mb-8">
              <p>O erro número um que vejo as pessoas cometerem é comprar ferramentas pesadas de 18V ou 20V achando que potência bruta resolve tudo.</p>
              <p>O excesso de força em móveis residenciais é o caminho mais rápido para arrancar a rosca do MDF e inutilizar a lateral de uma gaveta.</p>
              <p>Outro equívoco comum é pagar mais caro por máquinas com modo de impacto quando o único objetivo é montar prateleiras e estantes: a vibração extra só serve para trincar as quinas das placas de aglomerado.</p>
              <p>O peso da ferramenta também costuma ser subestimado: modelos acima de 1,5 kg parecem confortáveis na loja, mas viram um fardo nos primeiros trinta minutos montando nichos no alto da parede.</p>
              <p>Além disso, sempre leia com atenção a descrição da embalagem para não ser pego de surpresa por caixas que não trazem carregador ou bits inclusos.</p>
              <p>Lembre-se: em projetos domésticos, a ferramenta perfeita não é a mais forte, mas sim aquela que te dá controle total.</p>
            </div>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Erro Comum na Compra</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Estratégia Correta</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-slate-900">Comprar máquina de 18V/20V para MDF</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-slate-500">Optar por modelos de 12V que oferecem torque na medida exata.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-slate-900">Pagar mais por função de impacto</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-slate-500">Usar apenas o modo de giro simples para proteger o aglomerado.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-slate-900">Ignorar o peso do equipamento</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-slate-500">Buscar modelos em torno de 1 kg para evitar cansaço extremo.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-slate-900">Não verificar itens inclusos na caixa</td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-slate-500">Ler o manual e a descrição para garantir bateria, carregador e bits.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <BunnerDoMeio />
          
          {/* FAQ Section - FORMATADO COMO ACORDEÃO EXPANSÍVEL */}
          <section className="mt-16 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 text-center">Perguntas frequentes (FAQ)</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Clique sobre cada pergunta abaixo para expandir a resposta e entender melhor os detalhes técnicos antes de comprar.</p>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#FFD700] text-slate-900 flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                    {openFaq === index ? <ChevronUp className="text-slate-600 flex-shrink-0 ml-2" /> : <ChevronDown className="text-slate-600 flex-shrink-0 ml-2" />}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 pt-1 text-gray-600 border-t border-slate-100 animate-slideDown space-y-3">
                      {index === 0 && (
                        <div className="w-full flex justify-center mb-4 mt-2">
                           <img src="/images/blog/1/controle_torque.webp" alt="Anel de controle de torque de parafusadeira para montagem precisa em MDF sem espanar" title="Anel de controle de torque de parafusadeira para montagem precisa em MDF sem espanar" width={800} height={533} className="max-h-60 object-contain mix-blend-multiply rounded" loading="lazy" />
                        </div>
                      )}
                      {faq.answer.map((paragraph, pIndex) => (
                        <p key={pIndex} className="leading-relaxed text-sm">{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>



          {/* Tips */}
          <section className="mt-12 bg-[#FFFBE6] p-8 rounded-xl border border-[#FFD700]/30">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Dica de Marceneiro</h2>
            <div className="space-y-4 text-gray-700">
              <p>Em mais de 20 anos lidando com ferramentas em residências, aprendi uma técnica simples que sempre ensino a quem está começando: nunca comece a montagem usando o torque no número máximo.</p>
              <p>Ajuste sempre o anel seletor em um nível baixo (entre 2 e 4).</p>
              <p>Conforme o parafuso for puxando a madeira, vá subindo a numeração degrau por degrau até sentir que a cabeça ficou perfeitamente nivelada com a chapa, sem afundar.</p>
              <p>Nos últimos milímetros do aperto, alivie o dedo no gatilho para fazer a parada de forma suave.</p>
              <p>É essa sensibilidade que separa um trabalho amador de um serviço com acabamento de marcenaria profissional.</p>
            </div>
          </section>

          <section className="mt-12">
            <div className="space-y-4 prose prose-lg max-w-none text-gray-700">
              <p>Escolher a ferramenta correta tira todo o estresse físico da jogada e protege o seu investimento contra peças quebradas ou parafusos frouxos.</p>
              <p>Com a máquina certa na mão, montar seus próprios móveis deixa de ser uma dor de cabeça e se torna uma tarefa prática, rápida e muito gratificante.</p>
              <p>Agora que você já conhece os segredos para não errar na escolha, basta selecionar o modelo ideal para a sua rotina e colocar a mão na massa!</p>
              <p><a href="/como-escolher-parafusadeira/" className="text-blue-600 hover:text-blue-800 underline">Escolher o equipamento correto</a> é o primeiro passo para não estragar chapas de MDF e garantir que suas peças fiquem firmes por muitos anos.</p>
            </div>
          </section>

        </div>
    </>
  );
};