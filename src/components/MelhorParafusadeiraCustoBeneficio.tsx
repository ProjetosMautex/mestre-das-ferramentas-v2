import React, { useState } from 'react';
import { AffiliateCard } from './AffiliateCard';
import { BunnerDoMeio } from './BunnerDoMeio';
import { products, type ProductId } from '../data/products';
import { Check, X } from 'lucide-react';

const QuizInterativo = () => {
  const [uso, setUso] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-700 my-10">
      <h3 className="text-2xl font-bold text-white mb-3 text-center">🎯 Simulador de Escolha Rápida</h3>
      <p className="text-slate-300 text-center mb-8">Descubra em 5 segundos qual o tipo de parafusadeira é ideal para você!</p>
      
      {!uso ? (
        <div className="space-y-6">
          <p className="font-semibold text-slate-200 text-center text-lg">Qual será o seu uso principal?</p>
          <div className="grid md:grid-cols-2 gap-4">
            <button 
              onClick={() => setUso('leve')}
              className="p-5 border-2 border-slate-600 rounded-xl hover:border-[#FFD700] hover:bg-[#FFD700]/5 transition-all text-left group"
            >
              <div className="font-bold text-white text-lg group-hover:text-[#FFD700]">🏠 Reparos rápidos em casa</div>
              <div className="text-sm text-slate-300 mt-2">Montar móveis pequenos, instalar prateleiras e quadros.</div>
            </button>
            <button 
              onClick={() => setUso('pesado')}
              className="p-5 border-2 border-slate-600 rounded-xl hover:border-[#FFD700] hover:bg-[#FFD700]/5 transition-all text-left group"
            >
              <div className="font-bold text-white text-lg group-hover:text-[#FFD700]">🏗️ Montagem de móveis pesados</div>
              <div className="text-sm text-slate-300 mt-2">Furar paredes de alvenaria, concreto e uso contínuo/profissional.</div>
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center animate-in fade-in zoom-in duration-300">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFD700]/10 text-[#FFD700] mb-4">
            <Check size={32} />
          </div>
          <h4 className="text-xl font-bold text-white mb-3">Recomendação Encontrada!</h4>
          {uso === 'leve' ? (
            <p className="text-slate-200 text-lg">
              Recomendamos modelos de <strong>12V</strong> como a <span className="font-semibold text-[#FFD700]">WAP BPF 12K3</span> ou <span className="font-semibold text-[#FFD700]">Bosch GSR 1000</span>.
            </p>
          ) : (
            <p className="text-slate-200 text-lg">
              Recomendamos modelos de <strong>18V ou 21V com Impacto</strong> como a <span className="font-semibold text-[#FFD700]">WAP K21</span> ou <span className="font-semibold text-[#FFD700]">Bosch GSB 120-LI</span>.
            </p>
          )}
          <button 
            onClick={() => setUso(null)}
            className="mt-8 text-sm font-semibold text-[#FFD700] hover:text-[#F0C800] hover:underline transition-colors"
          >
            Refazer teste
          </button>
        </div>
      )}
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-[#1a1a1a] text-lg pr-4">{question}</span>
        <span className={`text-xl transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          🔽
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-5 border-t border-gray-100 bg-gray-50 text-gray-700 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const MelhorParafusadeiraCustoBeneficio: React.FC = () => {
  const featuredIds: ProductId[] = [
    "parafusadeira-wap-bpf-12k3",
    "parafusadeira-bosch-gsr-1000",
    "WAP K21 ID01",
    "Parafusadeira Furadeira Bosch GSB 120-LI.",
    "parafusadeira-vonder-pfv-012i",
    "parafusadeira-black-decker-ld12",
    "Parafusadeira EINHELL TE-CD 182 LI-I 2B",
    "Parafusadeira-The-Black-Tools-TB-21PX"
  ];

  const principalVantagens = [
    "Kit completo e excelente ergonomia",
    "Ultraleve com bateria integrada",
    "Torque bruto de 60Nm e impacto",
    "Versatilidade profissional",
    "Função impacto em 12V",
    "Kit pronto com 30 acessórios",
    "Bateria intercambiável 18V",
    "Sistema de impacto e duas baterias"
  ];

  const getProductImage = (id: ProductId): string => {
    if (id === "Parafusadeira Furadeira Bosch GSB 120-LI.") {
      return "/images/blog/1/Bosch ｜ Parafusadeira Furadeira 12 V ｜ GSB 120-LI.webp";
    }
    if (id === "parafusadeira-vonder-pfv-012i") {
      return "/images/blog/melhor-furadeira/ParafusadeiraFuradeira-de-Impacto-a-Bateria-12-V-PFV-120I.webp";
    }
    if (id === "Parafusadeira EINHELL TE-CD 182 LI-I 2B") {
      return "/images/blog/1/Parafusadeira EINHELL TE-CD 182 LI-I 2B.webp";
    }
    const product = products[id];
    return `/images/blog/melhor-parafusadeira/${product.name}.webp`;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/melhor-parafusadeira-custo-beneficio/melhor-parafusadeira-custo-beneficio.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 blur-sm"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/drill/1920/1080?blur=4";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/90 to-[#1a1a1a]/70"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                Bosch VS WAP +4:<br className="hidden md:block" />
                <span className="text-[#FFD700]">Qual Melhor Parafusadeira Custo-Benefício 2026</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base mt-8">
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="font-medium">Por</span>
                <a href="/author/severino-torquato" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors font-semibold group">
                  <img 
                    src="/images/autores/severino-torquato.webp" 
                    alt="Severino Torquato" 
                    className="w-8 h-8 rounded-full border-2 border-[#FFD700] group-hover:scale-110 transition-transform"
                  />
                  Severino Torquato
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-8">
            <p className="lead text-xl text-gray-800 font-medium">
              Montar ou consertar objetos em casa exige ferramentas que equilibrem desempenho e investimento. A infinidade de opções disponíveis pode tornar a decisão confusa.
            </p>
            <p className="lead text-xl text-gray-800 font-medium">
              O receio de adquirir um equipamento que te deixe na mão no meio do serviço trava muita gente na hora da compra. Encontrar aquele ponto de equilíbrio entre durabilidade e preço é o que separa um investimento inteligente de uma dor de cabeça.
            </p>
            <p>
              Antes de bater o martelo, entender quais critérios técnicos realmente importam na bancada é fundamental. Somente assim você seleciona a melhor parafusadeira custo beneficio que vai resolver seus problemas práticos com segurança.
            </p>
          </div>

          <QuizInterativo />

          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mt-8 mb-12">
            <p>
              Comprar ferramentas pela internet exige olho clínico para filtrar opções que entreguem resultado real. Não se pode pagar mais caro apenas pela etiqueta da marca.
            </p>
            <p>
              A seguir, vamos analisar os equipamentos que dominam a oficina este ano. Colocamos lado a lado o que cada um tem de melhor (e pior) para você investir do jeito certo.
            </p>
          </div>

          {/* Vitrine / Showcase Table */}
          <div className="mb-16 bg-white p-2.5 sm:p-6 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-b pb-4 text-center sm:text-left">📊 Comparativo Rápido na Bancada</h2>
            
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs sm:text-sm uppercase font-bold text-gray-700">
                    <th className="p-2 sm:p-3 text-center w-[50px] sm:w-[90px]">Foto</th>
                    <th className="p-2 sm:p-3">Modelo</th>
                    <th className="p-2 sm:p-3 hidden md:table-cell">O Grande Destaque</th>
                    <th className="p-2 sm:p-3 text-center w-[90px] sm:w-[150px]">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {featuredIds.map((id, index) => {
                    const product = products[id];
                    const imageSrc = getProductImage(id);
                      
                    return (
                      <tr key={id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-2 sm:p-3 align-middle text-center">
                          <div className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] border border-gray-200 rounded-lg flex items-center justify-center p-0.5 bg-white mx-auto">
                            <img 
                              src={imageSrc}
                              alt={product.name} 
                              className="max-w-full max-h-full object-contain mix-blend-multiply"
                              loading="lazy"
                            />
                          </div>
                        </td>
                        <td className="p-2 sm:p-3 align-middle">
                          <div className="text-xs sm:text-base font-bold text-gray-800 leading-tight">
                            {index + 1}º - {product.name}
                          </div>
                          {/* On mobile, show the highlight text below the name */}
                          <div className="text-[11px] text-slate-500 mt-1 md:hidden">
                            ⭐ {principalVantagens[index]}
                          </div>
                        </td>
                        <td className="p-2 sm:p-3 align-middle text-gray-600 text-xs sm:text-sm hidden md:table-cell">
                          ⭐ {principalVantagens[index]}
                        </td>
                        <td className="p-2 sm:p-3 align-middle text-center">
                          <a 
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="bg-[#FFD700] text-[#1a1a1a] font-bold no-underline text-[10px] sm:text-xs py-1.5 px-2 sm:py-2.5 sm:px-5 rounded-lg whitespace-nowrap inline-block hover:bg-[#F0C800] transition-colors shadow-sm hover:shadow"
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

          {/* Detailed Reviews */}
          <div className="space-y-20">
            
            {/* WAP BPF 12K3 */}
            <section id="parafusadeira-wap-bpf-12k3" className="scroll-mt-24 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-4">
                <span className="bg-[#FFD700] text-gray-900 w-12 h-12 flex items-center justify-center rounded-full text-2xl">1</span>
                WAP BPF 12K3 – A Campeã Nacional
              </h2>
              <div className="w-full flex justify-center mb-8 bg-gray-50 rounded-xl p-4">
                 <img src={getProductImage("parafusadeira-wap-bpf-12k3")} alt={products["parafusadeira-wap-bpf-12k3"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>
              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-8">
                <p>A <strong>WAP BPF 12K3</strong> assume a liderança por um motivo simples: ela entrega um <strong>kit completo na maleta</strong>. Isso elimina a frustração de ter que sair correndo para comprar brocas no meio da montagem.</p>
                <p>Em comparação com os modelos de entrada da Bosch, a WAP ganha disparado no quesito "pronto para o uso" e possui uma enorme vantagem no preço, sendo <strong>extremamente barata</strong> e acessível. Enquanto a alemã cobra caro pela máquina pura, a WAP te arma com tudo o que é necessário gastando pouquíssimo.</p>
                <p>Seu <strong>mandril de aperto rápido de 10 mm</strong> e o <strong>torque de 17 Nm</strong> oferecem a força ideal para móveis e reparos gerais. O diferencial prático fica na <strong>ergonomia "soft grip"</strong>, que emborracha a pegada e não deixa o pulso chorar.</p>
                <p>Sim, o <strong>tempo de carga de 3 a 5 horas</strong> é um gargalo frente a modelos caros. Mas a versatilidade desse pacote a torna a escolha mais racional para resolver 90% das broncas domésticas.</p>
              </div>

              <AffiliateCard id="parafusadeira-wap-bpf-12k3" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                    <li>Kit de acessórios completo direto na maleta.</li>
                    <li>Excelente ergonomia e empunhadura Soft Grip.</li>
                    <li>Leve, compacta e fácil de manusear.</li>
                    <li>Garantia de fábrica de 12 meses.</li>
                    <li>Preço extremamente barato e acessível.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                    <li>Recarga lenta (cerca de 3 a 5 horas).</li>
                    <li>Não indicada para furos em alvenaria densa.</li>
                  </ul>
                </div>
              </div>

              {/* Tabela de Critérios - WAP BPF 12K3 */}
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Critério avaliado</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-[100px]">Nota</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">O que percebemos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                    <tr>
                      <td className="px-4 py-3 font-semibold">Força Bruta e Controle de Parafusamento</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.0 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Adequada para parafusamentos leves; controle básico de torque de 18 níveis.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Desempenho em Furação (Madeira, Metal e Alvenaria)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">7.0 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Fura bem madeira macia e plástico, mas sem impacto não encara alvenaria de concreto.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Ergonomia, Construção e Qualidade do Mandril</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.0 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Leve (1,1 kg) e confortável para uso contínuo, com mandril plástico simples de aperto rápido.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Autonomia e Pacote de Baterias</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">7.5 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Boa autonomia no uso pontual, porém a recarga leva de 3 a 5 horas.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Custo-Benefício e Acessórios Inclusos</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.8 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Excepcional custo-benefício; acompanha maleta com bits e brocas variadas.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Bosch GSR 1000 */}
            <section id="parafusadeira-bosch-gsr-1000" className="scroll-mt-24 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-4">
                <span className="bg-gray-200 text-gray-700 w-12 h-12 flex items-center justify-center rounded-full text-2xl">2</span>
                Bosch GSR 1000 – Qualidade Alemã Acessível
              </h2>
              <div className="w-full flex justify-center mb-8 bg-gray-50 rounded-xl p-4">
                 <img src={getProductImage("parafusadeira-bosch-gsr-1000")} alt={products["parafusadeira-bosch-gsr-1000"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-8">
                <p>Para quem prefere a confiabilidade da engenharia alemã em formato compacto, a <strong>Bosch GSR 1000 Smart</strong> é a resposta. Se a WAP BPF 12K3 é uma caixa de ferramentas inteira, a Bosch é como um bisturi de precisão.</p>
                <p>Ela não vem entupida de acessórios, mas entrega um equipamento formidável pesando <strong>apenas 0,9 kg</strong>. Você parafusa o dia todo e o braço nem sente o esforço.</p>
                <p>O <strong>controle eletrônico de torque</strong> é o salva-vidas de quem costuma espanar parafuso em MDF frágil. Além disso, o <strong>LED integrado</strong> ilumina super bem o local de trabalho.</p>
                <p>O ponto de atenção é o <strong>mandril de 6 mm</strong>, que limita o uso de brocas parrudas. No entanto, os <strong>600 parafusamentos por carga</strong> e a recarga em 1 hora compensam para uma marcenaria fina.</p>
              </div>

              <AffiliateCard id="parafusadeira-bosch-gsr-1000" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                    <li>Extremamente leve e muito ergonômica (0,9 kg).</li>
                    <li>Alta autonomia de bateria (até 600 parafusamentos).</li>
                    <li>Carregamento rápido da bateria em apenas 1 hora.</li>
                    <li>Qualidade e suporte profissional da marca Bosch.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                    <li>Mandril de 6 mm restritivo para brocas comuns.</li>
                    <li>Potência limitada para furos em paredes e superfícies densas.</li>
                  </ul>
                </div>
              </div>

              {/* Tabela de Critérios - Bosch GSR 1000 */}
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Critério avaliado</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-[100px]">Nota</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">O que percebemos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                    <tr>
                      <td className="px-4 py-3 font-semibold">Força Bruta e Controle de Parafusamento</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.2 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Perfeita para precisão em móveis; torque suave que não espana a fenda de parafusos.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Desempenho em Furação (Madeira, Metal e Alvenaria)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">7.2 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Fura bem madeira de espessura média e metal leve; incapaz de perfurar alvenaria.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Ergonomia, Construção e Qualidade do Mandril</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.8 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Extremamente leve (0,9 kg), formato ergonômico fantástico e cabo emborrachado confortável.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Autonomia e Pacote de Baterias</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.8 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Bateria integrada de bom rendimento com recarga rápida completa em apenas 1 hora.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Custo-Benefício e Acessórios Inclusos</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.0 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Excelente valor para instaladores e montadores; acompanha lata/maleta organizadora.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* WAP K21 */}
            <section id="wap-k21" className="scroll-mt-24 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-4">
                <span className="bg-[#cd7f32] text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl">3</span>
                WAP K21 ID01 – A Força Bruta
              </h2>
              <div className="w-full flex justify-center mb-8 bg-gray-50 rounded-xl p-4">
                 <img src={getProductImage("WAP K21 ID01")} alt={products["WAP K21 ID01"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-8">
                <p>Se o seu cenário exige não só montar móveis, mas furar parede sem frescura, a <strong>WAP K21</strong> entra em cena. Colocando ela lado a lado com a Bosch GSB 120-LI, a diferença é gritante no papel.</p>
                <p>A WAP é um "trator" que entrega <strong>impressionantes 60 Nm de torque</strong> contra os 30 Nm da alemã. Isso se traduz em facilidade pura para realizar <strong>furos em concreto e alvenaria densa</strong>.</p>
                <p>O <strong>mandril robusto de 13 mm</strong> aceita brocas maiores, atendendo quem faz serviços pesados. A bateria de <strong>21V</strong> mantém o fôlego alto, embora o peso suba para <strong>1,2 kg</strong> e a carga lenta exija um bom planejamento.</p>
                <p>Em resumo: se a Bosch entrega delicadeza inteligente, a WAP K21 foca em entregar a pancada necessária para o serviço pesado pelo melhor custo.</p>
              </div>

              <AffiliateCard id="WAP K21 ID01" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                    <li>Torque bruto de 60 Nm de alta performance.</li>
                    <li>Mandril metálico de 13 mm (1/2") super robusto e versátil.</li>
                    <li>Função impacto eficiente para furar concreto.</li>
                    <li>Compatível com as baterias da linha WAP K21.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                    <li>Tempo de recarga da bateria longo.</li>
                    <li>Requer baterias extras em caso de uso profissional contínuo.</li>
                  </ul>
                </div>
              </div>

              {/* Tabela de Critérios - WAP K21 */}
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Critério avaliado</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-[100px]">Nota</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">O que percebemos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                    <tr>
                      <td className="px-4 py-3 font-semibold">Força Bruta e Controle de Parafusamento</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.6 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Torque monstruoso de 60 Nm, aperta parafusos estruturais em madeira dura com vigor.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Desempenho em Furação (Madeira, Metal e Alvenaria)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.5 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Função impacto muito forte e mandril de 13 mm, perfura tijolos e alvenaria pesada de forma exemplar.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Ergonomia, Construção e Qualidade do Mandril</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.8 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Peso um pouco elevado (1,2 kg), mas o mandril de metal e empunhadura dão muita firmeza.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Autonomia e Pacote de Baterias</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.2 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Bateria de 21V com ótimo fôlego, porém o carregamento de até 5 horas exige planejamento.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Custo-Benefício e Acessórios Inclusos</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.2 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Ótima relação de custo-benefício para quem busca força bruta sem pagar preço de marcas industriais topo de linha.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Bosch GSB 120-LI */}
            <section id="bosch-gsb-120-li" className="scroll-mt-24 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-4">
                <span className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full text-2xl">4</span>
                Bosch GSB 120-LI – Versatilidade Profissional
              </h2>
              <div className="w-full flex justify-center mb-8 bg-gray-50 rounded-xl p-4">
                 <img src={getProductImage("Parafusadeira Furadeira Bosch GSB 120-LI.")} alt={products["Parafusadeira Furadeira Bosch GSB 120-LI."].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-8">
                <p>Para quem quer cruzar a linha do "quebra-galho" e exigir <strong>produtividade de nível profissional</strong>, a <strong>Bosch GSB 120-LI</strong> é o equipamento definitivo.</p>
                <p>Enquanto a WAP K21 resolve no grito com seus 60 Nm, a Bosch faz o serviço com precisão cirúrgica. Ela entrega <strong>30 Nm muito bem distribuídos em duas velocidades</strong> mecânicas.</p>
                <p>Ela encara furos de impacto na parede e no minuto depois não esmaga a madeira de um móvel fino. Seu cérebro eletrônico, o <strong>sistema ECP</strong>, protege a bateria de 12V contra superaquecimentos, garantindo vida longa.</p>
                <p>Com apenas <strong>17 cm de comprimento</strong>, ela entra em vãos de armário onde outras travam. É a escolha inteligente para quem quer o pacote completo de eficiência, compactação e segurança.</p>
              </div>

              <AffiliateCard id="Parafusadeira Furadeira Bosch GSB 120-LI." />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                    <li>Torque robusto com ótimo controle de velocidade.</li>
                    <li>Sistema de proteção eletrônica de bateria (ECP).</li>
                    <li>Design compacto e empunhadura ergonômica.</li>
                    <li>Versatilidade de padrão profissional no dia a dia.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                    <li>Exige gestão consciente do tempo de uso da bateria.</li>
                    <li>Preço superior em relação a modelos básicos de entrada.</li>
                  </ul>
                </div>
              </div>

              {/* Tabela de Critérios - Bosch GSB 120-LI */}
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Critério avaliado</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-[100px]">Nota</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">O que percebemos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                    <tr>
                      <td className="px-4 py-3 font-semibold">Força Bruta e Controle de Parafusamento</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.8 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Torque de 30 Nm distribuído de forma precisa em duas velocidades mecânicas.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Desempenho em Furação (Madeira, Metal e Alvenaria)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.5 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Função impacto permite furos precisos em alvenaria e tijolos, e excelente rendimento em madeira e metais.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Ergonomia, Construção e Qualidade do Mandril</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.6 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Ultracompacta (17 cm), extremamente leve e ergonômica, facilitando o uso em locais de difícil acesso.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Autonomia e Pacote de Baterias</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.0 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Excelente rendimento da bateria de 12V com sistema inteligente ECP que evita sobreaquecimentos.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Custo-Benefício e Acessórios Inclusos</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.9 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Preço justo para uma Bosch profissional de alta durabilidade, embora não venha recheada de acessórios.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="my-12">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6 text-center">📺 Veja nosso teste na prática:</h2>
              <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/h9FWSUjCqLk" 
                  title="Como escolher a parafusadeira ideal" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-gray-500 text-sm mt-3">Aprenda dicas visuais rápidas no nosso guia em vídeo!</p>
            </section>

            <BunnerDoMeio />

            {/* Vonder PFV 012I */}
            <section id="vonder-pfv-120i" className="scroll-mt-24 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-4">
                <span className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full text-2xl">5</span>
                Vonder PFV 012I – Com Impacto a Bateria
              </h2>
              <div className="w-full flex justify-center mb-8 bg-gray-50 rounded-xl p-4">
                 <img src={getProductImage("parafusadeira-vonder-pfv-012i")} alt={products["parafusadeira-vonder-pfv-012i"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-8">
                <p>Quem quer encarar alvenaria sem gastar uma fortuna encontra na <strong>Vonder PFV 012I</strong> o coringa da oficina. O pulo do gato aqui é a <strong>função impacto (percutor)</strong> integrada em uma máquina compacta de <strong>12V</strong>, operando em bivolt automático (127/220V).</p>
                <p>Com velocidade máxima de <strong>1400 RPM</strong> e controle de torque preciso, ela perfura tijolos e alvenaria com muita agilidade. O kit acompanha maleta de transporte, <strong>bateria de íons de lítio de 1.3 Ah</strong> (que leva cerca de 5 horas para recarga total), fonte de carregamento, 6 brocas de aço rápido, 6 bits variados e 1 soquete magnético de 1/4".</p>
                <p>A <strong>iluminação em LED integrada</strong> e o peso equilibrado de <strong>1,09 kg</strong> garantem um acabamento profissional mesmo em locais de difícil acesso, tornando-a uma excelente parceira de trabalho.</p>
              </div>

              <AffiliateCard id="parafusadeira-vonder-pfv-012i" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                    <li>Função impacto integrada eficiente para alvenaria leve.</li>
                    <li>Kit completo e prático com maleta de transporte e acessórios.</li>
                    <li>Mandril de aperto rápido facilitando a troca dos bits.</li>
                    <li>Velocidade variável no gatilho para controle total.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                    <li>Tempo de recarga longo (aproximadamente 5 horas).</li>
                    <li>Não substitui marteletes pesados para concreto denso.</li>
                  </ul>
                </div>
              </div>

              {/* Tabela de Critérios - Vonder PFV 012I */}
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Critério avaliado</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-[100px]">Nota</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">O que percebemos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                    <tr>
                      <td className="px-4 py-3 font-semibold">Força Bruta e Controle de Parafusamento</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.5 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Bom torque de 23 Nm, permitindo parafusamentos firmes em MDF sem espanar.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Desempenho em Furação (Madeira, Metal e Alvenaria)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.0 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Fura bem madeira e metal; encara alvenaria leve graças à função impacto embutida de 12V.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Ergonomia, Construção e Qualidade do Mandril</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.8 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Leve (1,09 kg) e bem equilibrada, com pegada confortável emborrachada de boa durabilidade.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Autonomia e Pacote de Baterias</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">7.6 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Autonomia adequada de 1.3 Ah, mas a recarga pode levar até 5 horas no carregador.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Custo-Benefício e Acessórios Inclusos</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.7 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Excelente canivete suíço com preço baixo; vem com trena, brocas e bits inclusos.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Black+Decker LD12SC */}
            <section id="black-decker-ld12sc" className="scroll-mt-24 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-4">
                <span className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full text-2xl">6</span>
                Black+Decker LD12SC – Tradição e Confiabilidade
              </h2>
              <div className="w-full flex justify-center mb-8 bg-gray-50 rounded-xl p-4">
                 <img src={getProductImage("parafusadeira-black-decker-ld12")} alt={products["parafusadeira-black-decker-ld12"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-8">
                <p>A <strong>Black+Decker LD12SC</strong> é aquela máquina honesta para quem só quer colocar quadros na parede. Com seu chassi super leve de <strong>apenas 854 gramas</strong>, a fadiga muscular no fim do dia é zero.</p>
                <p>Ela já chega com um verdadeiro arsenal: são <strong>30 acessórios direto na maleta</strong>. É o fim da frustração de descobrir que não tem o "bit" certo pro móvel novo.</p>
                <p>O <strong>indicador de carga da bateria</strong> também é um baita salva-vidas para não ser pego de surpresa. Limitada a <strong>900 RPM</strong>, ela prioriza o controle de torque para que você não destrua a madeira perfurando rápido demais.</p>
              </div>

              <AffiliateCard id="parafusadeira-black-decker-ld12" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                    <li>Kit de 30 acessórios completo pronto para uso imediato.</li>
                    <li>Extremamente leve e confortável na mão (apenas 854 gramas).</li>
                    <li>Indicador luminoso inteligente de carga útil restante.</li>
                    <li>Marca tradicional com excelente rede de suporte nacional.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                    <li>Rotação limitada a 900 RPM para furos exigentes.</li>
                    <li>Sem função impacto, inadequada para alvenaria.</li>
                  </ul>
                </div>
              </div>

              {/* Tabela de Critérios - Black+Decker LD12SC */}
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Critério avaliado</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-[100px]">Nota</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">O que percebemos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                    <tr>
                      <td className="px-4 py-3 font-semibold">Força Bruta e Controle de Parafusamento</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">7.8 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Força de 16 Nm adequada para reparos leves domésticos e montagem de móveis básicos.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Desempenho em Furação (Madeira, Metal e Alvenaria)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">7.0 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Fura gesso, drywall e madeira fina; sem fôlego ou impacto para alvenaria estrutural.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Ergonomia, Construção e Qualidade do Mandril</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.8 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Boa empunhadura emborrachada confortável e mandril de aperto rápido bastante preciso.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Autonomia e Pacote de Baterias</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.2 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Autonomia padrão de 12V com bom indicador do nível útil da bateria.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Custo-Benefício e Acessórios Inclusos</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.6 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Altíssimo custo-benefício; vem com maleta plástica e kit completo de 30 acessórios.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Einhell TE-CD 18/2 Li */}
            <section id="einhell-te-cd-18-2-li" className="scroll-mt-24 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-4">
                <span className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full text-2xl">7</span>
                Einhell TE-CD 18/2 Li – Tecnologia Europeia
              </h2>
              <div className="w-full flex justify-center mb-8 bg-gray-50 rounded-xl p-4">
                 <img src={getProductImage("Parafusadeira EINHELL TE-CD 182 LI-I 2B")} alt={products["Parafusadeira EINHELL TE-CD 182 LI-I 2B"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-8">
                <p>Para quem já pensa grande, a <strong>Einhell TE-CD 18/2 Li</strong> apresenta o ecossistema <strong>Power X-Change</strong>. Com ele, a bateria dessa máquina serve para dezenas de outras ferramentas da marca, garantindo versatilidade.</p>
                <p>Entregando polpudos <strong>35 Nm de torque</strong> gerenciados por <strong>21 regulagens de embreagem</strong>, a precisão cirúrgica na montagem evita que madeiras mais finas trinquem.</p>
                <p>Por operar em <strong>18V</strong>, o motor e a estrutura são um pouco mais pesados, exigindo costume inicial. Mas se o plano de longo prazo é montar uma oficina caseira de respeito, esse é um ótimo ponto de partida.</p>
              </div>

              <AffiliateCard id="Parafusadeira EINHELL TE-CD 182 LI-I 2B" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                    <li>Bateria modular compatível com toda a linha Power X-Change.</li>
                    <li>Torque elevado e 21 ajustes finos de embreagem mecânica.</li>
                    <li>Construção robusta e durável de padrão europeu.</li>
                    <li>Empunhadura emborrachada macia e ergonômica.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                    <li>Chassi ligeiramente mais pesado do que modelos compactos.</li>
                    <li>Ausência de sistema de furação por impacto.</li>
                  </ul>
                </div>
              </div>

              {/* Tabela de Critérios - Einhell TE-CD 18/2 Li */}
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Critério avaliado</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-[100px]">Nota</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">O que percebemos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                    <tr>
                      <td className="px-4 py-3 font-semibold">Força Bruta e Controle de Parafusamento</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.0 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Torque de 35 Nm com 21 níveis de ajuste fino, evitando que madeiras mais finas trinquem.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Desempenho em Furação (Madeira, Metal e Alvenaria)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.2 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Fura muito bem madeira espessa e metais, mas este modelo não possui função de impacto para alvenaria.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Ergonomia, Construção e Qualidade do Mandril</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.2 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Ótima pegada Soft Grip e excelente qualidade de construção de padrão europeu.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Autonomia e Pacote de Baterias</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.5 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Bateria de 18V do sistema intercambiável Power X-Change que serve para outras ferramentas da marca.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Custo-Benefício e Acessórios Inclusos</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.8 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Excelente porta de entrada para montar uma oficina doméstica robusta e integrada de longo prazo.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* The Black Tools */}
            <section id="the-black-tools" className="scroll-mt-24 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-4">
                <span className="bg-blue-100 text-blue-800 w-12 h-12 flex items-center justify-center rounded-full text-2xl">8</span>
                The Black Tools TB-21PX
              </h2>
              <div className="w-full flex justify-center mb-8 bg-gray-50 rounded-xl p-4">
                 <img src={getProductImage("Parafusadeira-The-Black-Tools-TB-21PX")} alt={products["Parafusadeira-The-Black-Tools-TB-21PX"].name} className="max-h-80 object-contain mix-blend-multiply" loading="lazy" />
              </div>

              <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mb-8">
                <p>A <strong>The Black Tools TB-21PX</strong> vem como a máquina parruda pra quem tem pressa e não quer depender de muitas ferramentas. O sistema opera em vigorosos <strong>21V</strong>.</p>
                <p>Aliado ao <strong>modo de impacto</strong>, varar a alvenaria da casa deixa de ser um suplício diário. A sacada de mestre da marca foi incluir no kit um prático <strong>conector flexível</strong>.</p>
                <p>Isso é perfeito para alcançar aqueles parafusos em quinas impossíveis que tomariam muito tempo da sua montagem. O ponto fraco é o motor com escovas que eleva o peso do conjunto para <strong>1,5 kg</strong>.</p>
                <p>Na ponta do lápis, é a força braçal de baixo custo pronta pra resolver imprevistos residenciais sem reclamar.</p>
              </div>

              <AffiliateCard id="Parafusadeira-The-Black-Tools-TB-21PX" />

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Prós</h4>
                  <ul className="space-y-2 text-green-700 text-sm list-disc list-inside">
                    <li>Sistema de impacto versátil a bateria de 21V.</li>
                    <li>Kit de acessórios muito completo com extensor flexível.</li>
                    <li>Acompanha duas baterias de lítio no pacote.</li>
                    <li>Força satisfatória com torque de 35 Nm para reformas.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Contras</h4>
                  <ul className="space-y-2 text-red-700 text-sm list-disc list-inside">
                    <li>Conjunto pesado (1,5 kg) para trabalhos prolongados.</li>
                    <li>Construção e acabamento plástico básico.</li>
                  </ul>
                </div>
              </div>

              {/* Tabela de Critérios - The Black Tools TB-21PX */}
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Critério avaliado</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wider w-[100px]">Nota</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">O que percebemos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                    <tr>
                      <td className="px-4 py-3 font-semibold">Força Bruta e Controle de Parafusamento</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.8 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Torque de 35 Nm sob sistema de 21V, realiza parafusamentos firmes sem dificuldades.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Desempenho em Furação (Madeira, Metal e Alvenaria)</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.7 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Modo impacto permite perfurar alvenaria residencial de forma aceitável.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Ergonomia, Construção e Qualidade do Mandril</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">8.0 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Pesa 1,5 kg (um pouco fatigante) e possui acabamento plástico e mandril mais simples.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Autonomia e Pacote de Baterias</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.3 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Destaca-se por incluir duas baterias de 21V na maleta, garantindo trabalho ininterrupto.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">Custo-Benefício e Acessórios Inclusos</td>
                      <td className="px-4 py-3 text-center font-bold text-slate-900">9.5 / 10</td>
                      <td className="px-4 py-3 text-slate-600">Excepcional kit com conector flexível para quinas difíceis, maleta e diversas ponteiras por preço acessível.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          {/* Por Que Investir em uma Boa Parafusadeira? */}
          <section className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Por Que Investir em uma Boa Parafusadeira?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Olha só: optar por aquela parafusadeira de feira que custa o troco do pão sempre sai caro. O gatilho costuma travar na primeira porta que você tenta arrumar, ou a bateria decide "morrer" justo no meio do serviço.</p>
              <p>O valor real de uma ferramenta decente não está apenas na força bruta do motor, mas em não te deixar estressado no final de semana. Equipamentos de boas marcas te entregam <strong>controle de torque</strong> de verdade, o que impede danos ao móvel novo.</p>
              <p>Você não ganha só rapidez, ganha a segurança de conseguir fazer consertos que, antigamente, você pagaria o triplo chamando um profissional. Basicamente, é uma ferramenta que se paga sozinha logo na primeira reforma da sua sala.</p>
              <p>Se você precisa de parafusadeiras melhores e de nível profissional para encarar qualquer desafio, vale a pena ler o nosso artigo sobre a <a href="/melhor-parafusadeira" className="text-blue-600 hover:underline font-medium">melhor parafusadeira</a> do mercado.</p>
            </div>
          </section>

          {/* Buying Guide */}
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Como escolher a melhor parafusadeira sem errar</h2>
            <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
              <p>Escolher a ferramenta não é sobre ir na loja e pegar a que tem o adesivo mais bonito. Para evitar raiva, o segredo da oficina é simples: cruze o que o motor faz com o que você realmente vai exigir dele.</p>
              <p>Não compre um trator se você só quer regar o jardim, entende? Abaixo eu destrincho os pontos críticos que você precisa olhar antes de passar o cartão na loja.</p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">A Potência do Motor (Voltagem)</h3>
                <p>A voltagem (V) é o verdadeiro "músculo" da sua máquina. Se a ideia é só consertar gavetas e colocar quadros, os <strong>modelos de 12V</strong> dão conta com sobra de braço (e não cansam o seu pulso).</p>
                <p>Mas se a sua lista inclui perfurar reboco e chapa de metal grossa, você precisa pular para os equipamentos de <strong>18V ou 21V</strong>.</p>
                <p>Lembrando sempre: mais volts significa mais força, mas também significa uma máquina mais pesada na sua mão durante o dia inteiro.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Rotação por minuto (A Velocidade)</h3>
                <p>Medida em <strong>RPM</strong>, a velocidade define quão flexível a ferramenta é na prática. Rotação baixa é ideal para o controle fino, quando você precisa apertar um parafuso frágil sem espanar a rosca.</p>
                <p>Já as rotações altíssimas são para varar a madeira o mais rápido possível na função furadeira. O que você precisa procurar é um equipamento com <strong>gatilho de velocidade variável</strong>.</p>
                <p>Com essa função, o seu próprio dedo controla o acelerador de acordo com o peso do serviço, garantindo flexibilidade total.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">A Pegada Ergonômica</h3>
                <p>Um detalhe que muita gente esquece, mas que o ombro cobra no dia seguinte de muito trabalho. Uma parafusadeira mal balanceada vai exaurir seus músculos rapidamente, forçando paradas constantes.</p>
                <p>Sempre prefira carcaças com revestimento <strong>"soft grip"</strong> (emborrachado), pois ele gruda melhor na mão e amortece bem a vibração.</p>
                <p>Uma máquina boa tem o peso distribuído entre a bateria na base e o mandril na ponta, o que impede a ferramenta de "capotar" pra frente o tempo todo.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Kit de Acessórios: A cereja do bolo</h3>
                <img src="/images/blog/1/Kit de Acessórios.webp" alt="Kit de Acessórios" className="w-full max-w-2xl rounded-xl shadow-sm my-6" />
                <p>Às vezes, a compra vira um excelente negócio apenas pelo que vem junto na maleta. Uma <strong>luz de LED no gatilho</strong>, por exemplo, é vital quando você vai montar a base de uma pia onde a iluminação não chega.</p>
                <p>Procure sempre máquinas que venham com um bom sortimento de <strong>bits e soquetes</strong> direto de fábrica. Comprar pecinha por pecinha em loja de material de construção encarece muito o projeto.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Carcaça e Durabilidade</h3>
                <p>A sua ferramenta vai cair no chão, apenas aceite o fato. Máquinas que vão durar anos utilizam <strong>plásticos de alta resistência</strong> (polímeros) que absorvem muito bem as pancadas.</p>
                <p>Além disso, elas costumam ter os dentes da engrenagem interna feitos de metal, e não de náilon. Se a saída de ventilação for minúscula, ela vai fritar o motor por dentro em trabalhos longos.</p>
                <p>Procure também encaixes de bateria firmes para que os contatos não fiquem faiscando ou apresentem folgas prematuras com a trepidação.</p>
              </div>
            </div>
          </section>

          {/* Tipos de Parafusadeira */}
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Tipos de Parafusadeira: Qual é o seu nível?</h2>
            <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
              <p>Saber em qual categoria você se encaixa é o que vai definir o sucesso ou fracasso da sua compra final. O mercado divide basicamente o peso que cada ferramenta aguenta carregar.</p>
              <p>Isso reflete diretamente nas peças internas do motor, e escolher mal aqui é certeza de prejuízo futuro. Entenda as principais diferenças.</p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Parafusadeira Comum (Sem Impacto)</h3>
                <p>Essas são as portas de entrada perfeitas. Elas só giram pra um lado e pro outro, de forma limpa, e não têm mecanismo de marretada interna.</p>
                <p>Isso resulta em equipamentos <strong>extremamente leves e compactos</strong>. São as máquinas padrão para montar MDF, arrumar portas ou colocar simples peças de decoração.</p>
                <p>Elas entregam um manuseio liso e barato para o uso esporádico da casa. Se você só quer apertar parafusos sem dor de cabeça, essa é a escolha.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Parafusadeira de Impacto</h3>
                <p>Aqui a brincadeira da oficina fica séria. Nas furadeiras e parafusadeiras, o mecanismo de impacto não é necessariamente para colocar parafusos difíceis; a função de impacto serve especificamente para furar alvenaria e concreto mesmo.</p>
                <p>É essa batida contínua que faz com que brocas atravessem paredes e concreto sem "chorar" ou queimar o motor da ferramenta.</p>
                <p>Elas entregam muito mais eficiência na furação de superfícies duras, sendo a escolha ideal para quem vai enfrentar uma reforma de verdade na casa.</p>
              </div>
            </div>
          </section>

          {/* Tecnologia de Baterias */}
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">O Coração da Máquina: A Bateria</h2>
            <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
              <p>Se a bateria for ruim, a máquina mais forte do mundo vira rapidamente um peso de papel caro. A tecnologia evoluiu muito e acabou com aqueles velhos problemas chatos de vício de recarga.</p>
              <p>Entender a química moderna por trás dessas células vai te economizar boas trocas desnecessárias de maquinário.</p>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">O Domínio do Íon de Lítio</h3>
                <p>Hoje, o padrão absolutamente obrigatório é o <strong>Íon de Lítio</strong>. As baterias velhas de níquel tinham o terrível "efeito memória", onde você perdia carga máxima facilmente.</p>
                <p>O lítio moderno não tem essa frescura: você pode carregar com 50%, usar apenas 10% e guardar. Ela entrega energia totalmente estável até o último giro do motor.</p>
                <p>Outro fator importante é a amperagem (<strong>Ah</strong>). Para uso de fim de semana, modelos de <strong>1,5Ah</strong> resolvem fácil; já um uso contínuo pede tanques de <strong>2,0Ah</strong> pra cima.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Como Evitar a "Morte" Prematura da Bateria</h3>
                <p>A vida útil da ferramenta pede uma boa gestão inteligente. O maior erro é colocar a máquina na maleta e deixá-la no sol do porta-malas do carro: o calor é o inimigo mortal do lítio.</p>
                <p>Se for ficar um mês ou mais sem usar, carregue até uns 50% e guarde na sombra para preservar as células intactas.</p>
                
                <div className="bg-[#FFD700]/10 border-l-4 border-[#FFD700] p-6 rounded-r-lg my-8">
                  <h4 className="font-bold text-[#1a1a1a] flex items-center gap-2 mb-2">
                    💡 Dica de Mestre para Baterias
                  </h4>
                  <p className="text-gray-800 m-0">A regra de ouro de toda oficina é: <strong>nunca utilize até a ferramenta desligar sozinha</strong>. Quando você esgota totalmente a célula a zero, as reações químicas entram em colapso. Começou a ficar muito fraca? Pare na hora e jogue no carregador.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Manutenção Preventiva */}
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Manutenção Preventiva Básica</h2>
            <div className="space-y-8 prose prose-lg max-w-none text-gray-700">
              <p>Você definitivamente não precisa ser mecânico, mas um trato básico faz o seu investimento durar dez anos. O maior problema que vejo em oficinas é a poeira que entra pelos dutos de ar.</p>
              <p>Essa poeira gruda e lixa as engrenagens por dentro com o passar do tempo. Terminou o serviço sujo de tijolo? Jogue um jato de ar ou passe um pincel seco nela antes de guardar.</p>
              <p>Lembre-se: <strong>Evite produtos químicos fortes</strong> que ressecam o emborrachado da empunhadura e limpe os contatos elétricos brilhantes debaixo da bateria sempre que puder.</p>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16 pt-12 border-t border-gray-200 space-y-6">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Tirando as Dúvidas Rápidas (FAQ)</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>Muita gente trava as mãos na hora do clique final de "comprar". Uma das maiores dúvidas é se compensa deixar as velhas chaves de fenda manuais de lado.</p>
              <p>A verdade prática é que uma boa parafusadeira salva as articulações do seu braço, além de terminar um serviço de um dia inteiro ininterrupto em apenas duas horas de esforço.</p>
              <p>Outra confusão é entre a parafusadeira (que foca no controle do aperto) e a furadeira (focada na velocidade contínua). As ferramentas boas modernas mesclam as duas funções muito bem.</p>
            </div>

            <div className="space-y-2">
              <FAQItem 
                question="Afinal, qual a diferença real na hora de usar 12V ou 20V?"
                answer={
                  <>
                    <p className="mb-4">É a capacidade de aguentar o tranco silencioso quando a parede endurece. Equipamentos de 12V priorizam muito o conforto para você não ficar com o pulso dolorido montando gavetas o dia todo.</p>
                    <p className="mb-4">O 20V entra rasgando quando você precisa que o motor não desista ao tentar furar uma peça de metal grosso ou uma alvenaria muito firme do quintal.</p>
                    <p>Em suma: escolha o 12V para flexibilidade rápida no dia a dia, e o 20V para quem precisa de extrema agressividade na furação estrutural.</p>
                  </>
                }
              />
              <FAQItem 
                question="Vale a pena comprar com fio para ter em casa?"
                answer={
                  <>
                    <p className="mb-4">Se você tem uma bancada fixa e faz marcenaria todo santo dia, o fio elimina a dependência das recargas. Ele te entrega um fôlego infinito de energia e ainda costuma ser bem mais barato na loja.</p>
                    <p className="mb-4">Mas, sejamos francos: para 99% dos usuários residenciais, ficar arrastando extensão quilométrica pela sala de casa é um atraso de vida tremendo.</p>
                    <p>A mobilidade absurda das baterias de lítio atuais justifica, e muito, o investimento no modelo totalmente sem fio.</p>
                  </>
                }
              />
              <FAQItem 
                question="O que faz uma parafusadeira ser 'Profissional' de verdade?"
                answer={
                  <>
                    <p className="mb-4">O grande segredo está muito bem escondido debaixo da carcaça plástica. Uma máquina de trabalho pesado costuma ter um motor <strong>Brushless (sem as clássicas escovas de carvão)</strong>.</p>
                    <p className="mb-4">Isso significa que o motor não tem atrito físico desgastando as peças internas, entregando mais torque e durando o triplo da bateria normal de hobby.</p>
                    <p className="mb-4">A caixa de marchas de uma profissional é de puro metal. Além disso, a placa inteligente corta a energia sozinha bem antes do motor fritar por qualquer superaquecimento acidental.</p>
                    <p>Enquanto as linhas amadoras focam em te dar 40 ponteiras genéricas de brinde, a linha profissional foca exclusivamente em garantir que a máquina funcione todos os dias do ano, faça chuva ou sol.</p>
                  </>
                }
              />
            </div>
          </section>

          {/* Conclusion */}
          <section className="mt-20 text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Veredito: Qual levar para casa?</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mx-auto">
              <div className="flex justify-center mb-6">
                <div className="flex flex-col items-center">
                  <img src="/images/autores/severino-torquato.webp" alt="Redator Severino Torquato" className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover mb-4" />
                  <span className="font-bold text-gray-800">Redator: Severino Torquato</span>
                </div>
              </div>
              <p>Escolher sua máquina não é um bicho de sete cabeças se você tiver clareza real do que vai furar e apertar. Evite comprar por impulso um maquinário industrial brutal se você só quer instalar um varão de cortina leviano.</p>
              <p>Por outro lado, fuja rapidamente daquela ferramenta super barata de feira se você planeja montar toda a mobília da casa nova sozinho.</p>
              <p>Analise com calma as características que revisamos e cheque as <strong>melhores ofertas disponíveis nas tabelas acima</strong>. Tenha a certeza absoluta de fazer um investimento que não vai te frustrar no seu merecido domingo de oficina!</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
