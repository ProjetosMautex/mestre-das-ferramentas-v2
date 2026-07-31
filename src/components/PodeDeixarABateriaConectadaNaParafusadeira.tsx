import React, { useState } from 'react';
import { BunnerDoMeio } from './BunnerDoMeio';
import { ExitIntentPopup } from './ExitIntentPopup';

export const PodeDeixarABateriaConectadaNaParafusadeira: React.FC = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [surveyAnswer, setSurveyAnswer] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <ExitIntentPopup />
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/1/Pode deixar a bateria conectada na parafusadeira.webp" 
              alt="Pode Deixar a Bateria na Parafusadeira? (O Erro Oculto)" 
              className="w-full h-full object-cover opacity-20 blur-sm"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/parafusadeira/1920/1080?blur=4";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Pode Deixar a Bateria na Parafusadeira? <br/>
              <span className="text-[#FFD700]">(O Erro Oculto)</span>
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
                      e.currentTarget.src = "/images/autores/default.webp";
                    }}
                  />
                  Severino Torquato
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 mb-8">
              Manter as ferramentas organizadas e prontas para o uso é o desejo de qualquer profissional ou entusiasta do "faça você mesmo".
            </p>
            <p>
              No entanto, uma dúvida comum surge frequentemente no dia a dia da oficina ou da garagem.
            </p>
            <p>
              Pode deixar a bateria conectada na parafusadeira por longos períodos sem comprometer a vida útil do equipamento?
            </p>
            <p>
              O hábito de armazenar o conjunto montado oferece praticidade imediata, mas ignora aspectos fundamentais sobre a conservação dos componentes internos e a segurança do operador.
            </p>
            <p>
              Compreender a forma correta de gerenciar essa conexão é essencial para garantir o desempenho e a durabilidade da ferramenta a longo prazo.
            </p>
          </div>
          
          {/* Enquete Simulada */}
          <div className="bg-white border-2 border-blue-100 rounded-xl p-6 shadow-sm mb-12 text-center">
             <h4 className="text-xl font-bold text-gray-800 mb-4">Como você guarda sua parafusadeira hoje?</h4>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => setSurveyAnswer('connected')}
                  className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 border ${surveyAnswer === 'connected' ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-gray-100 hover:bg-blue-50 text-gray-700 border-gray-200'}`}
                >
                  ( ) Sempre conectada
                </button>
                <button 
                  onClick={() => setSurveyAnswer('separated')}
                  className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 border ${surveyAnswer === 'separated' ? 'bg-green-600 text-white border-green-600 shadow-md' : 'bg-gray-100 hover:bg-green-50 text-gray-700 border-gray-200'}`}
                >
                  ( ) Bateria separada na maleta
                </button>
             </div>
             {surveyAnswer === 'connected' && (
                <div className="mt-6 p-4 bg-yellow-50 text-yellow-800 rounded-lg animate-fade-in border border-yellow-200">
                  <p className="font-semibold">⚠️ Cuidado!</p>
                  <p className="mt-1">Deixar a bateria sempre conectada pode estar reduzindo a vida útil da sua ferramenta sem você perceber. Continue lendo para entender por que isso acontece.</p>
                </div>
             )}
             {surveyAnswer === 'separated' && (
                <div className="mt-6 p-4 bg-green-50 text-green-800 rounded-lg animate-fade-in border border-green-200">
                  <p className="font-semibold">✅ Excelente hábito!</p>
                  <p className="mt-1">Você já está um passo à frente na conservação do seu equipamento. Veja abaixo como outros cuidados podem prolongar ainda mais a vida útil da bateria.</p>
                </div>
             )}
          </div>

          <BunnerDoMeio />

          <section id="remover-ou-nao" className="mb-12 mt-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Remover ou não a bateria da ferramenta?</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>A decisão de desconectar a bateria após o expediente é o divisor de águas entre ferramentas que duram anos e aquelas que perdem a força precocemente.</p>
              <p>Muitas parafusadeiras, mesmo desligadas, mantêm um consumo residual mínimo nos circuitos, o que pode levar a uma descarga profunda se o equipamento ficar inativo por semanas.</p>
              <p>Mais do que apenas preservar a carga, remover o componente elimina o risco de acionamentos acidentais durante o transporte na maleta, uma falha comum que gera desgaste desnecessário ou danos à ponta da ferramenta.</p>
              <p>Embora os modelos de íon de lítio atuais possuam proteções contra sobrecarga, o hábito da desconexão atua como uma camada extra de segurança técnica.</p>
            </div>
          </section>

          <section id="vantagens" className="mb-12 scroll-mt-24">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Vantagens de remover a bateria</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Adotar a prática de separar a bateria da parafusadeira traz benefícios práticos que vão muito além da simples organização na bancada:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Segurança Operacional:</strong> Você elimina qualquer possibilidade de acionamento inadvertido do gatilho dentro da maleta, evitando acidentes.</li>
                <li><strong>Fim do Consumo Residual:</strong> Interrompe o fluxo de corrente que, embora imperceptível, desequilibra as células de íon de lítio em semanas de inatividade.</li>
                <li><strong>Controle de Temperatura:</strong> O armazenamento isolado favorece a dissipação térmica natural da peça.</li>
              </ul>
            </div>
          </section>

          <section id="quando-manter" className="mb-12 scroll-mt-24">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Quando a bateria pode ser mantida na ferramenta?</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Manter a bateria conectada é uma estratégia aceitável apenas em cenários de uso rotineiro, onde a ferramenta é solicitada diversas vezes ao longo do dia (como em oficinas de alta demanda).</p>
              <p>Nesses casos, o risco de descarga residual é mitigado pelo ciclo constante de carga e uso.</p>
            </div>
            
            <div className="bg-[#FFFAF0] border-l-4 border-[#FFD700] p-6 rounded-r-lg my-8">
              <h4 className="text-xl font-bold text-yellow-800 mb-2 flex items-center gap-2">
                ⚠️ Atenção
              </h4>
              <p className="text-yellow-900 m-0">
                Se for manter a bateria conectada durante o expediente, posicione a trava do gatilho no modo neutro (central). Esse ajuste mecânico bloqueia o acionamento elétrico do motor e protege contra disparos inesperados.
              </p>
            </div>
          </section>

          <section id="recomendacoes" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Recomendações para o Uso e Armazenamento da Bateria</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>A longevidade das baterias de íon de lítio não depende apenas da sorte, mas de uma disciplina rigorosa de manuseio.</p>
              <p>O maior inimigo desses componentes é o estresse químico causado pelos extremos.</p>
              <p>A regra de ouro: Tente manter o nível de energia entre 20% e 80% durante o uso diário.</p>
              <p>Se você pretende deixar a parafusadeira encostada por semanas, armazene-a em um local com temperatura controlada.</p>
              <p>O calor excessivo é um catalisador de falhas internas.</p>
            </div>
          </section>
          
          <BunnerDoMeio />

          <section id="remocao-ao-guardar" className="mb-12 scroll-mt-24 mt-12">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Remoção ao Guardar</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Transformar o ato de desconectar a bateria em um ritual pós-trabalho é o hábito que separa amadores de profissionais zelosos.</p>
              <p>Mesmo que a ferramenta pareça inerte, a conexão contínua pode sobrecarregar os terminais e comprometer a resistência interna das células.</p>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
              <p className="font-semibold text-blue-900 m-0">
                💡 LEIA TAMBÉM: Se você tem dúvidas sobre o jeito certo de desencaixar o equipamento sem forçar os trilhos de contato, confira nosso passo a passo completo sobre <a href="/como-tirar-a-bateria-da-parafusadeira" className="text-blue-700 hover:underline">como tirar a bateria da parafusadeira</a>.
              </p>
            </div>
          </section>

          <section id="evitar-descarga" className="mb-12 scroll-mt-24">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Evitar Descarga Total</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Muitos usuários acreditam erroneamente que precisam esvaziar a carga da bateria antes de recarregá-la, um mito herdado das antigas baterias de níquel.</p>
              <p>Com as atuais tecnologias de íon de lítio, essa prática é extremamente prejudicial.</p>
              <p>O descarregamento profundo atinge a "zona de perigo" da voltagem, onde os processos químicos internos se tornam instáveis e irreversíveis.</p>
            </div>
            
            <div className="w-full flex justify-center mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <img 
                src="/images/blog/1/bateria-remocao.webp" 
                alt="Removendo a bateria da parafusadeira" 
                className="max-h-80 object-contain hover:scale-105 transition-transform duration-300 rounded-lg" 
                loading="lazy" 
              />
            </div>
          </section>


          <section id="prevencao" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Prevenção de acidentes e cuidados com baterias</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Embora raras, falhas elétricas em ferramentas de bateria exigem atenção redobrada.</p>
              <p>Fique atento a:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Inchaços na carcaça.</li>
                <li>Odores anômalos de queimado.</li>
                <li>Autodescarga acelerada fora do comum.</li>
              </ul>
              <p>A prevenção começa na origem: utilize exclusivamente carregadores originais.</p>
              <p>Carregadores genéricos costumam ignorar protocolos vitais de segurança, expondo seu equipamento a riscos de sobretensão.</p>
            </div>
          </section>

          <section id="dica-seguranca" className="mb-12 scroll-mt-24">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Dica de Segurança</h3>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Ao transportar seu equipamento, sempre remova a bateria.</p>
              <p>Esse gesto simples evita acionamentos involuntários causados por pressões externas (como outras ferramentas batendo no gatilho dentro do carro), garantindo sua total segurança.</p>
            </div>
          </section>

          <section id="organizacao" className="mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Organização e manutenção</h2>
            <div className="w-full flex justify-center mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <img 
                src="/images/blog/1/bateria-organizada.webp" 
                alt="Baterias organizadas na bancada" 
                className="max-h-80 object-contain hover:scale-105 transition-transform duration-300 rounded-lg" 
                loading="lazy" 
              />
            </div>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>Ao separar a bateria da parafusadeira, você cria um sistema de controle de inventário.</p>
              <p>Reserve um espaço dedicado na sua bancada, preferencialmente um suporte ventilado, para concentrar as unidades de energia longe de objetos metálicos que podem causar curtos acidentais (como pregos e parafusos soltos).</p>
              <p>Rotular ou alternar o uso entre as baterias evita que apenas um componente sofra todo o desgaste, distribuindo a vida útil do seu conjunto de forma equilibrada.</p>
            </div>
          </section>

          <section id="consideracoes-finais" className="mb-12 mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Considerações finais</h2>
            <div className="space-y-4 prose prose-lg text-gray-700 max-w-none">
              <p>A preservação das suas ferramentas elétricas depende menos de tecnologia de ponta e mais da disciplina que você aplica no dia a dia.</p>
              <p>Ao tratar a remoção da bateria como um protocolo obrigatório, você blinda seu investimento contra o desgaste químico silencioso.</p>
              <p>O veredito é claro: a conveniência de manter a bateria conectada custa caro a médio prazo.</p>
              <p>Substitua a preguiça pelo hábito estratégico de armazenar as peças separadamente em locais secos e ventilados.</p>
              <p>O profissional zeloso nunca deixa o futuro do seu maquinário ao acaso; ele assume o controle através do armazenamento inteligente.</p>
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
                  <span className="font-bold text-lg text-gray-800">Pode guardar a parafusadeira com a bateria 100% carregada?</span>
                  <svg className={`w-6 h-6 text-gray-500 transform transition-transform ${faq1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faq1 && (
                  <div className="p-5 text-gray-700 prose prose-lg">
                    <p>Não é recomendado para longos períodos. O ideal é armazenar com cerca de 50% a 80% de carga para evitar o estresse químico das células.</p>
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button 
                  onClick={() => setFaq2(!faq2)} 
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-800">Bateria de Lítio vicia se deixar conectada?</span>
                  <svg className={`w-6 h-6 text-gray-500 transform transition-transform ${faq2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faq2 && (
                  <div className="p-5 text-gray-700 prose prose-lg">
                    <p>Elas não "viciam" no sentido tradicional (efeito memória), mas a descarga profunda residual causada por deixar a bateria conectada pode danificar as células permanentemente.</p>
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button 
                  onClick={() => setFaq3(!faq3)} 
                  className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-800">Posso usar carregador paralelo na minha bateria?</span>
                  <svg className={`w-6 h-6 text-gray-500 transform transition-transform ${faq3 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faq3 && (
                  <div className="p-5 text-gray-700 prose prose-lg">
                    <p>Não. Carregadores genéricos podem fornecer voltagem incorreta e não possuem os sensores de temperatura necessários, oferecendo risco de explosão e perda da bateria.</p>
                  </div>
                )}
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
