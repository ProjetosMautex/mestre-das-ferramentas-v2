import React from 'react';

export const SeverinoTorquato: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
            
            {/* Foto do Autor */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[500/680] w-full max-w-xs mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-50">
                <img 
                  src="/images/autores/severino-torquato.webp" 
                  alt="Severino Torquato"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/500x680/1a1a1a/ffffff?text=Severino+Torquato';
                  }}
                />
              </div>
            </div>

            {/* Texto Biográfico */}
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">
                Severino Torquato
              </h1>
              
              {/* Tag de Especialidade em Preto (Substituindo o amarelo no fundo branco) */}
              <div className="inline-block bg-[#1a1a1a] text-white px-4 py-1.5 rounded font-bold text-sm uppercase tracking-wider mb-8">
                Técnico em Manutenção Residencial
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg border-l-4 border-[#FFD700] pl-6">
                <p>
                  Sou o Severino Torquato, Técnico em Manutenção Residencial com mais de 20 anos de experiência no uso de ferramentas para trabalhos domésticos e projetos DIY.
                </p>
                <p>
                  Ao longo da minha trajetória, já auxiliei desde famílias que precisavam de pequenos reparos até entusiastas que montam e personalizam seus próprios móveis.
                </p>
                <p>
                  Minha especialidade é analisar ferramentas como parafusadeiras e furadeiras de uso leve, avaliando pontos como ergonomia, potência, praticidade e custo-benefício. Com esse conhecimento, consigo indicar os modelos ideais para quem busca eficiência em reparos rápidos, montagem de móveis e atividades do dia a dia, sempre de forma prática e acessível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};