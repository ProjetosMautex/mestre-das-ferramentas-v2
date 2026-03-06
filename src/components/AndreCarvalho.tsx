import React from 'react';

export const AndreCarvalho: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
            
            {/* Foto do Autor */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[500/680] w-full max-w-xs mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-50">
                <img 
                  src="/images/autores/andre-carvalho.webp" 
                  alt="André Carvalho"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/500x680/1a1a1a/ffffff?text=André+Carvalho';
                  }}
                />
              </div>
            </div>

            {/* Texto Biográfico */}
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">
                André Carvalho
              </h1>
              
              {/* Tag de Especialidade em Preto para melhor leitura */}
              <div className="inline-block bg-[#1a1a1a] text-white px-4 py-1.5 rounded font-bold text-sm uppercase tracking-wider mb-8">
                Especialista em Uso Profissional de Ferramentas
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg border-l-4 border-[#FFD700] pl-6">
                <p>
                  Sou o André Carvalho, Especialista em Uso Profissional de Ferramentas, com mais de 12 anos de experiência em obras, reformas e serviços de alta exigência. Minha atuação sempre esteve ligada a ambientes onde desempenho, resistência e confiabilidade das ferramentas fazem toda a diferença no resultado final.
                </p>
                <p>
                  Minha especialidade é avaliar ferramentas como parafusadeiras, furadeiras e chaves de impacto em situações de uso intenso, analisando potência, autonomia, robustez e eficiência em trabalhos contínuos. Meu objetivo é ajudar profissionais da construção civil, montagem industrial e manutenção a escolherem equipamentos que aguentam a rotina pesada e entregam produtividade de verdade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};