const fs = require('fs');
let code = fs.readFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/components/MelhorParafusadeiraParaMontarMoveis.tsx', 'utf8');

// 1. Move "Compra segura" section
const compraSeguraRegex = /<h2 className="text-3xl font-bold text-\[\#1a1a1a\] mt-12 mb-4">Compra segura para uso doméstico<\/h2>\s*<p>A primeira coisa que você precisa fazer antes de passar o cartão é um exercício sincero sobre a sua rotina: com que frequência você realmente vai usar essa ferramenta\?<\/p>\s*<p>Nem todo mundo precisa de uma parafusadeira pesada de canteiro de obras; na verdade, na montagem de móveis residenciais, o excesso de força bruta é o seu pior inimigo\.<\/p>\s*<p>Comprar com segurança significa entender o tipo de material que você vai encarar — geralmente aglomerado e MDF de 15 mm — e escolher um modelo leve, que não canse o seu punho e ofereça a delicadeza necessária para não transformar o furo do parafuso em pó de madeira\.<\/p>/s;

const matchCompra = code.match(compraSeguraRegex);
if(matchCompra) {
  code = code.replace(matchCompra[0], ''); // remove from original place
}

// 2. Add metadata and FAQ state
const metadataStr = \  const productMetadata: Record<string, { category: string; score: string; shortName: string }> = {
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
  ];\;

code = code.replace('const [simuladorResposta, setSimuladorResposta] = useState(\'\');', metadataStr + '\n\n  const [simuladorResposta, setSimuladorResposta] = useState(\'\');');
code = code.replace('import { Check, X } from \'lucide-react\';', 'import { Check, X, ChevronDown, ChevronUp } from \'lucide-react\';');

// 3. Update Vitrine and append Compra Segura
const oldTableRegex = /<h2 className="text-3xl font-bold text-\[\#1a1a1a\] mb-8 text-center">Top 5 Modelos de Parafusadeiras<\/h2>[\s\S]*?<\/table>\s*<\/div>/;
const newTableStr = \{/* MISTURA DA TABELA COM A VITRINE */}
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
                    return (
                      <tr key={id} className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors">
                        <td className="p-2 align-middle text-center">
                          <div className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] border border-slate-100 rounded flex items-center justify-center p-0.5 bg-white mx-auto">
                            <img 
                              src={productImages[id] || ""}
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
          </div>\;

code = code.replace(oldTableRegex, newTableStr);

// 4. Update FAQ
const oldFaqRegex = /<section className="mt-16 space-y-8">[\s\S]*?{/\* Tips \*\/}/;
const newFaqStr = \{/* FAQ Section - FORMATADO COMO ACORDEÃO EXPANSÍVEL */}
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
                           <img src="/images/blog/1/controle_torque.webp" alt="Anel de controle de torque de parafusadeira para montagem precisa em MDF sem espanar" title="Anel de controle de torque de parafusadeira para montagem precisa em MDF sem espanar" className="max-h-60 object-contain mix-blend-multiply rounded" loading="lazy" />
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

          {/* Tips */}\;

code = code.replace(oldFaqRegex, newFaqStr);

// 5. Shorten Pros/Cons
code = code.replace('Extremamente leve (850 g), não cansa o punho em montagens longas', 'Extremamente leve (850 g)');
code = code.replace('Kit com 13 acessórios que já resolve as ferragens básicas', 'Kit com 13 acessórios');
code = code.replace('Empunhadura emborrachada com pegada anatômica muito segura', 'Empunhadura emborrachada');
code = code.replace('Indicador de carga em LED que avisa a hora certa de recarregar', 'Indicador de carga em LED');
code = code.replace('Torque menos progressivo para materiais muito sensíveis', 'Torque menos progressivo');
code = code.replace('Não indicada para serviços contínuos pesados ou madeiras maciças', 'Não indicada para serviços pesados');

code = code.replace('Controle eletrônico de torque muito progressivo, protegendo o MDF', 'Controle eletrônico de torque progressivo');
code = code.replace('Carcaça com padrão de qualidade e durabilidade profissional', 'Alta durabilidade e qualidade');
code = code.replace('Ergonomia superior com baixa vibração para os punhos', 'Ergonomia superior e baixa vibração');
code = code.replace('LED integrado eficiente para iluminar nichos e cantos escuros', 'LED integrado eficiente');
code = code.replace('Bateria integrada não permite troca imediata por outra avulsa', 'Bateria integrada (não removível)');
code = code.replace('Não possui função martelete/impacto para perfurar paredes duras', 'Sem função martelete/impacto');

code = code.replace('Função impacto que permite pequenos furos em paredes de alvenaria', 'Função impacto para alvenaria');
code = code.replace('Maleta completa com brocas, bits e acessórios essenciais', 'Maleta com brocas e bits');
code = code.replace('Excelente relação de custo-benefício para quem faz de tudo na casa', 'Excelente custo-benefício');
code = code.replace('Pegada confortável para transitar entre furadeira e parafusadeira', 'Pegada confortável');
code = code.replace('Autonomia de bateria modesta (1,3 Ah) para projetos longos', 'Autonomia de bateria modesta (1,3 Ah)');
code = code.replace('Motor com escovas exige atenção contra superaquecimento em uso contínuo', 'Motor com escovas');

code = code.replace('Maleta prática com kit completo de brocas e pontas para uso imediato', 'Maleta com kit completo');
code = code.replace('18 níveis de ajuste de torque para calibrar o aperto no MDF', '18 níveis de ajuste de torque');
code = code.replace('Mandril de aperto rápido de 10 mm que dispensa chaves manuais', 'Mandril de aperto rápido (10 mm)');
code = code.replace('Luz de LED frontal que auxilia na mira das cabeças dos parafusos', 'Luz de LED frontal');
code = code.replace('Tempo de recarga mais lento (3 a 5 horas)', 'Tempo de recarga lento (3 a 5 horas)');
code = code.replace('Desenvolvida estritamente para aplicações domésticas e montagens leves', 'Apenas para uso doméstico leve');

code = code.replace('Câmbio com duas velocidades mecânicas para máxima versatilidade de trabalho', 'Duas velocidades mecânicas');
code = code.replace('Controle de torque extremamente calibrado e suave no desengate', 'Controle de torque extremamente calibrado');
code = code.replace('Mandril metálico de aperto rápido com excelente alinhamento de pontas', 'Mandril metálico de aperto rápido');
code = code.replace('Ergonomia de padrão industrial, muito confortável para jornadas longas', 'Ergonomia padrão industrial');
code = code.replace('Não possui função de impacto para paredes de concreto ou tijolo maciço', 'Sem função de impacto');
code = code.replace('Valor de aquisição mais elevado quando comparada às opções de entrada', 'Valor de aquisição mais elevado');

// Add the internal link
code = code.replace('<p>Escolher o equipamento correto é o primeiro passo para não estragar chapas de MDF e garantir que suas peças fiquem firmes por muitos anos.</p>', '<p><a href="/como-escolher-parafusadeira/" className="text-blue-600 hover:text-blue-800 underline">Escolher o equipamento correto</a> é o primeiro passo para não estragar chapas de MDF e garantir que suas peças fiquem firmes por muitos anos.</p>');

fs.writeFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/components/MelhorParafusadeiraParaMontarMoveis.tsx', code, 'utf8');
