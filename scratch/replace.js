const fs = require('fs');
const path = require('path');

const targetFilePath = 'c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/components/MelhorFuradeiraParafusadeira.tsx';
let fileContent = fs.readFileSync(targetFilePath, 'utf8');

// We want to replace from const featuredIds down to {/* Buying Guide */}
const startMarker = '  const featuredIds: ProductId[] = [';
const endMarker = '          {/* Buying Guide */}';

const startIndex = fileContent.indexOf(startMarker);
const endIndex = fileContent.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Markers not found!");
  process.exit(1);
}

const beforePart = fileContent.substring(0, startIndex);
const afterPart = fileContent.substring(endIndex);

const newMiddle = `  const featuredIds: ProductId[] = [
    "parafusadeira-bosch-gsb-185-li",
    "furadeira e parafusadeira Makita DHP485RF1J",
    "parafusadeira-wap-bpf-12k3",
    "bosch-gsr-7-14-e-400w",
    "parafusadeira-bosch-gsr-1000",
    "parafusadeira-vonder-pfv-012i",
    "WAP K21 ID01",
    "parafusadeira-bosch-gsr-120-li",
    "parafusadeira-wap-k21-id02"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/blog/melhor-parafusadeira/melhor-parafusadeira.webp"
              alt="Background"
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              As 9 Melhores Furadeiras e Parafusadeiras 2026 <br />
              <span className="text-[#FFD700]">(Bosch e +)</span>
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
              Quem já precisou realizar pequenos reparos ou iniciar um projeto de marcenaria em casa sabe que a falta da ferramenta certa transforma um processo simples em uma tarefa exaustiva. O desafio surge quando percebemos que o mercado oferece uma variedade imensa de modelos, cada um prometendo versatilidade e eficiência distintas.
            </p>
            <p>
              Identificar a <strong>melhor furadeira e parafusadeira</strong> para as suas necessidades exige entender como diferentes especificações técnicas impactam o resultado final e a durabilidade do equipamento. Compreender esses diferenciais é o passo fundamental para garantir uma escolha assertiva e tornar qualquer trabalho manual muito mais preciso e produtivo.
            </p>
          </div>

          {/* Vitrine / Showcase Table */}
          <div className="mb-16 max-w-[800px] mx-auto bg-slate-50 p-2.5 rounded-lg sm:p-5">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 text-center">Quais são as melhores furadeira e parafusadeira em 2026?</h2>
            <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
              O mercado de ferramentas em 2026 evoluiu significativamente, trazendo inovações que elevam a produtividade tanto em ambientes profissionais quanto residenciais. Para guiar sua escolha, compilamos uma seleção criteriosa dos modelos que se destacam pela engenharia de ponta, performance sob carga e durabilidade. Ao explorar as opções a seguir, convidamos você a observar como cada categoria de produto responde aos diferentes desafios de uso, desde demandas intensas em obras até a versatilidade necessária para o dia a dia.
            </p>

            <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
              <tbody>
                {featuredIds.map((id) => {
                  const product = products[id];
                  return (
                    <tr key={id} className="border-b border-slate-200 last:border-b-0">
                      <td className="w-[65px] p-2 align-middle text-center sm:w-[80px] sm:p-3">
                        <div className="w-[40px] h-[40px] border border-slate-100 rounded flex items-center justify-center p-0.5 sm:w-[60px] sm:h-[60px] mx-auto">
                          <img
                            src={product.image || \`/images/blog/melhor-parafusadeira/\${product.name}.webp\`}
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

          {/* Detailed Reviews */}
          <div className="space-y-16">

            {/* 1. Bosch GSB 185-LI */}
            <section id="parafusadeira-bosch-gsb-185-li" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                1. Furadeira Parafusadeira Impacto 18 V ｜ GSB185LI-1B
              </h2>
              <div className="w-full flex justify-center mb-8">
                <img src="/images/blog/melhor-parafusadeira/Parafusadeira Bosch GSB 185-LI.webp" alt={products["parafusadeira-bosch-gsb-185-li"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Se você busca produtividade, a Bosch GSB 185-LI é um salto evolutivo. Seu motor Brushless elimina a manutenção com escovas, garantindo fôlego extra para montagens intensas e perfurações em alvenaria. Com apenas 1,3 kg, ela reduz drasticamente a fadiga em trabalhos suspensos. O mandril metálico de 13 mm oferece a segurança necessária para acessórios mais robustos, evitando folgas indesejadas. Embora exija investimento superior a modelos hobby, a compatibilidade com a linha 18V Bosch compensa a longo prazo.</p>
                <p>Para extrair o máximo desempenho da GSB 185-LI, considere seus números de fábrica: ela entrega 50 Nm de torque e alcança até 1900 RPM. Esses dados revelam uma máquina capaz de perfurar 35 mm em madeira e 10 mm em metal ou alvenaria, superando expectativas em tarefas que exigem força bruta. Com uma cadência de 27000 IPM no modo impacto, a versatilidade está garantida para quem não quer trocar de ferramenta entre um furo no concreto e a fixação de um parafuso longo. Analisar essas capacidades técnicas evita sobrecarga do motor, assegurando que o equipamento opere sempre dentro de sua zona ideal de eficiência e vida útil.</p>
              </div>

              <AffiliateCard id="parafusadeira-bosch-gsb-185-li" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Motor Brushless durável.</li>
                    <li>Leve e ergonômica.</li>
                    <li>Sistema 18V compartilhado.</li>
                    <li>Mandril metálico resistente.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Custo inicial elevado.</li>
                    <li>Exige baterias adicionais para uso contínuo.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Makita DHP485RF1J */}
            <section id="furadeira e parafusadeira Makita DHP485RF1J" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                2. MAKITA Parafusadeira e Furadeira de Impacto 18 V ｜ DHP485RF1J
              </h2>
              <div className="w-full flex justify-center mb-8">
                <img src={products["furadeira e parafusadeira Makita DHP485RF1J"].image} alt={products["furadeira e parafusadeira Makita DHP485RF1J"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Makita DHP485RF1J é a escolha definitiva para quem não tolera paradas inesperadas em canteiros de obra ou marcenarias exigentes. Com o motor Brushless, a máquina mantém um torque constante de 50 Nm, garantindo furos precisos em concreto e fixações pesadas sem superaquecer. A tecnologia XPT oferece um diferencial valioso: proteção real contra poeira e umidade, permitindo que você trabalhe em ambientes insalubres sem medo de danificar os componentes internos. Embora o carregador rápido de 22 minutos minimize tempos mortos, o sistema de bateria única pode limitar o ritmo se você não possuir unidades reservas para turnos estendidos.</p>
              </div>

              <AffiliateCard id="furadeira e parafusadeira Makita DHP485RF1J" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Resistência contra poeira e água (XPT).</li>
                    <li>Carregamento ultrarrápido em 22 min.</li>
                    <li>21 níveis de ajuste de torque.</li>
                    <li>Construção robusta e durável.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Acompanha apenas uma bateria.</li>
                    <li>Preço elevado para hobbistas.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. WAP BPF 12K3 */}
            <section id="parafusadeira-wap-bpf-12k3" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                3. Parafusadeira Furadeira WAP BPF 12K3
              </h2>
              <div className="w-full flex justify-center mb-8">
                <img src="/images/products/melhor-parafusadeira/parafusadeira-furadeira-wap-bpf-12k3.webp" alt={products["parafusadeira-wap-bpf-12k3"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Se você mora em apartamento ou precisa resolver pequenas manutenções domésticas sem investir uma fortuna, a WAP BPF 12K3 surge como uma aliada estratégica. O design extremamente leve e a empunhadura ergonômica facilitam o manejo por qualquer pessoa, tornando tarefas como montar móveis de MDF ou fixar quadros uma atividade simples e silenciosa. Com 18 níveis de torque, ela entrega o controle preciso necessário para não espanar parafusos ou danificar superfícies delicadas.</p>
                <p>Apesar da praticidade, é preciso alinhar expectativas: esta não é uma máquina para reformas pesadas. A ausência da função impacto e a rotação limitada deixam claro que ela sofre em materiais densos, como concreto ou cerâmica. O tempo de recarga entre 3 e 5 horas exige um planejamento prévio, impedindo o uso ininterrupto em projetos maiores. No entanto, pelo custo-benefício e pela facilidade de armazenamento proporcionada pela maleta inclusa, ela cumpre com louvor o papel de ser a primeira ferramenta essencial para quem está começando agora.</p>
              </div>

              <AffiliateCard id="parafusadeira-wap-bpf-12k3" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Extremamente leve e ergonômica.</li>
                    <li>Excelente custo-benefício para reparos domésticos.</li>
                    <li>Ajuste de torque preciso (18 níveis).</li>
                    <li>Kit completo com acessórios e maleta.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Tempo de carregamento prolongado.</li>
                    <li>Limitada para perfurar alvenaria ou concreto.</li>
                  </ul>
                </div>
              </div>
            </section>

            <BunnerDoMeio />

            {/* 4. Bosch GSR 7-14 E 400W */}
            <section id="bosch-gsr-7-14-e-400w" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                4. Bosch GSR 7-14 E 400W
              </h2>
              <div className="w-full flex justify-center mb-8">
                <img src="/images/blog/melhor-parafusadeira/Bosch GSR 7-14 E 400W.webp" alt={products["bosch-gsr-7-14-e-400w"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Para quem trabalha em marcenarias ou montagens industriais e não pode interromper o ritmo por causa de baterias descarregadas, a Bosch GSR 7-14 E é a ferramenta definitiva. Com seus 400W de potência constante, ela elimina a preocupação com recargas e entrega um torque de até 10,3 Nm, ideal para parafusamentos precisos sem danificar materiais delicados, graças aos seus 24 níveis de ajuste. O cabo de 4 metros garante uma liberdade de movimento impressionante, permitindo que você trabalhe em qualquer bancada sem amarras. Seu mandril de aperto rápido facilita a troca de bits e brocas em segundos, mantendo sua produtividade em alta. Embora a ausência da função impacto limite seu uso em concreto denso, a robustez desta máquina em madeira e metal compensa cada centavo investido. É a confiabilidade do motor com escovas aliada à engenharia de precisão alemã.</p>
              </div>

              <AffiliateCard id="bosch-gsr-7-14-e-400w" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Potência ininterrupta (com fio).</li>
                    <li>Precisão máxima (24 níveis de torque).</li>
                    <li>Mandril de troca rápida.</li>
                    <li>Cabo longo de 4 metros.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Sem função impacto.</li>
                    <li>Dependência de tomada próxima.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Bosch GSR 1000 */}
            <section id="parafusadeira-bosch-gsr-1000" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                5. Bosch GSR 1000
              </h2>
              <div className="w-full flex justify-center mb-8">
                <img src="/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Bosch GSR 1000.webp" alt={products["parafusadeira-bosch-gsr-1000"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Bosch GSR 1000 Smart é a aliada ideal para quem prioriza praticidade em reparos domésticos e montagens leves. Com apenas 0,93 kg e um design ultra compacto, ela elimina a fadiga em tarefas prolongadas, permitindo alcançar cantos apertados onde ferramentas maiores falhariam. Seus 15 Nm de torque são ajustados precisamente para evitar que você espanar parafusos em móveis de MDF, enquanto a iluminação LED integrada clareia a área de trabalho, garantindo precisão mesmo em armários ou locais pouco iluminados.</p>
                <p>Embora não seja indicada para perfurações pesadas em concreto, sua bateria integrada de 12V oferece uma autonomia surpreendente, chegando a 600 parafusamentos por carga. É uma escolha inteligente para quem busca a confiabilidade da engenharia Bosch sem precisar de um equipamento robusto de obra.</p>
              </div>

              <AffiliateCard id="parafusadeira-bosch-gsr-1000" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Extremamente leve e compacta.</li>
                    <li>Indicador de carga de bateria.</li>
                    <li>Iluminação LED integrada.</li>
                    <li>Carregamento rápido (1 hora).</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Não indicada para alvenaria.</li>
                    <li>Bateria integrada (não substituível).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Vonder Pfv 12v */}
            <section id="parafusadeira-vonder-pfv-012i" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                6. Vonder Pfv 12v
              </h2>
              <div className="w-full flex justify-center mb-8">
                <img src="/images/blog/melhor-parafusadeira/Parafusadeira Furadeira Com Impacto a Bateria Pfv012i Vonder Cor Amarelo Frequência 50 Hz/60 Hz.webp" alt={products["parafusadeira-vonder-pfv-012i"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A Vonder PFV 012I é a escolha certeira para quem deseja equipar a casa sem complicações. O grande trunfo desta máquina é a versatilidade: ao integrar a função de impacto em um corpo de apenas 1,09 kg, ela supera modelos básicos ao permitir furos em alvenaria com surpreendente facilidade. O kit que acompanha o produto é um diferencial prático, eliminando a necessidade de compras avulsas de brocas ou bits logo após a aquisição.</p>
                <p>A empunhadura <em>soft grip</em> garante que o uso prolongado, como na montagem de um guarda-roupa, não resulte em desconforto nas mãos. Embora seu motor com escovas exija um pouco mais de cuidado preventivo ao longo dos anos, o excelente custo-benefício torna este modelo o ponto de partida ideal para hobbistas e profissionais que realizam manutenções rápidas. A bateria de 12V entrega a autonomia necessária para o dia a dia, mantendo o controle sempre à mão.</p>
              </div>

              <AffiliateCard id="parafusadeira-vonder-pfv-012i" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Kit completo com acessórios inclusos.</li>
                    <li>Função impacto para alvenaria.</li>
                    <li>Design leve e muito ergonômico.</li>
                    <li>Carregador bivolt automático.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Motor com escovas (exige manutenção).</li>
                    <li>Garantia de fábrica limitada (90 dias).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. WAP K21 ID01 */}
            <section id="WAP K21 ID01" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                7. Parafusadeira e Furadeira de Impacto 21 V WAP K21 ID01 ｜ FW009461
              </h2>
              <div className="w-full flex justify-center mb-8">
                <img src="/images/blog/melhor-parafusadeira/WAP K21 ID01.webp" alt={products["WAP K21 ID01"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A WAP K21 ID01 eleva o patamar de força para quem exige versatilidade em reformas. Com seu torque robusto de 60 Nm e mandril de 13 mm, ela encara madeira, metal e concreto com facilidade impressionante. O sistema de duas velocidades permite transitar entre parafusamentos delicados e perfurações pesadas sem esforço. Contudo, o tempo de carga de 5 horas demanda organização prévia para evitar interrupções. É uma escolha poderosa e equilibrada para quem busca desempenho profissional em um equipamento compacto, pronto para qualquer desafio de montagem ou manutenção.</p>
              </div>

              <AffiliateCard id="WAP K21 ID01" />

              <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 mt-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Info className="text-[#FFD700]" /> Especificações Técnicas
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p><span className="font-bold">Voltagem:</span> 21 V</p>
                    <p><span className="font-bold">Giro Máximo:</span> 1400 RPM</p>
                    <p><span className="font-bold">Capacidade de Furação:</span> 13 mm (concreto), 6 mm (aço) e 20 mm (madeira)</p>
                  </div>
                  <div className="space-y-2">
                    <p><span className="font-bold">Taxa de Impactos:</span> Não informado</p>
                    <p><span className="font-bold">Função Impacto:</span> Sim</p>
                    <p><span className="font-bold">Força de Aperto:</span> 45 Nm</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Alto torque de 45 Nm.</li>
                    <li>Bateria de 21V.</li>
                    <li>Luz LED integrada.</li>
                    <li>Maleta inclusa.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Motor com escovas (menor vida útil).</li>
                    <li>Carregador de 0,4A (lento).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 8. Bosch 3/8" GSR 120-LI */}
            <section id="parafusadeira-bosch-gsr-120-li" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                8. Parafusadeira Furadeira Bosch 3/8" GSR 120-LI
              </h2>
              <div className="w-full flex justify-center mb-8">
                <img src={products["parafusadeira-bosch-gsr-120-li"].image || \`/images/blog/melhor-parafusadeira/\${products["parafusadeira-bosch-gsr-120-li"].name}.webp\`} alt={products["parafusadeira-bosch-gsr-120-li"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>Para quem atua com marcenaria ou instalações rápidas, a Bosch GSR 120-LI é sinônimo de versatilidade. Com apenas 17 cm de comprimento e 780 g, esta ferramenta elimina o esforço em locais de difícil acesso, como interiores de armários. O sistema ECP protege a bateria de 12V contra sobrecargas, garantindo longevidade mesmo em rotinas intensas. Embora não possua impacto, seus 30 Nm de torque lidam com eficiência em metal e madeira. O mandril de 3/8" permite trocas rápidas, mantendo o fluxo de trabalho ininterrupto para profissionais que priorizam mobilidade e precisão.</p>
              </div>

              <AffiliateCard id="parafusadeira-bosch-gsr-120-li" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Design ultracompacto e leve.</li>
                    <li>Proteção eletrônica (ECP) da bateria.</li>
                    <li>Duas velocidades mecânicas precisas.</li>
                    <li>Iluminação LED de alta visibilidade.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Sem função impacto.</li>
                    <li>Mandril limitado a 10 mm.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 9. WAP 3/8" K21 ID02 */}
            <section id="parafusadeira-wap-k21-id02" className="scroll-mt-24 pt-8 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">
                9. Parafusadeira Furadeira de Impacto WAP 3/8" K21 ID02
              </h2>
              <div className="w-full flex justify-center mb-8">
                <img src={products["parafusadeira-wap-k21-id02"].image || \`/images/blog/melhor-parafusadeira/\${products["parafusadeira-wap-k21-id02"].name}.webp\`} alt={products["parafusadeira-wap-k21-id02"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
                <p>A WAP K21 ID02 entrega versatilidade equilibrada para quem transita entre reparos domésticos e demandas profissionais de marcenaria ou instalação. Com 45 Nm de torque e três modos de operação, incluindo impacto, ela lida com eficiência tanto em metais quanto em alvenaria. O design ergonômico com <em>soft grip</em> e o peso de 1,1 kg garantem conforto em tarefas extensas, enquanto a luz LED integrada resolve a falta de visibilidade em cantos escuros. Embora o tempo de recarga de até 5 horas exija um cronograma planejado, sua integração à plataforma de baterias K21 facilita a expansão do seu arsenal de ferramentas. É um investimento sólido para quem busca potência, controle e a confiabilidade de uma garantia estendida de 12 meses.</p>
              </div>

              <AffiliateCard id="parafusadeira-wap-k21-id02" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>Três modos de operação.</li>
                    <li>Torque robusto de 45 Nm.</li>
                    <li>Design ergonômico confortável.</li>
                    <li>Compatível com linha K21.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>Recarga lenta da bateria.</li>
                    <li>Motor com escovas.</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
          
`;

const newFileContent = beforePart + newMiddle + afterPart;
fs.writeFileSync(targetFilePath, newFileContent, 'utf8');
console.log("File replaced successfully!");
