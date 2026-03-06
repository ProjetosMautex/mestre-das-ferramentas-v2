import React from 'react';

export const MateusRibeiro: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
            
            {/* Foto do Autor */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[500/680] w-full max-w-xs mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-50">
                <img 
                  src="/images/autores/mateus-ribeiro.webp" 
                  alt="Mateus Ribeiro"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/500x680/1a1a1a/ffffff?text=Mateus+Ribeiro';
                  }}
                />
              </div>
            </div>

            {/* Texto Biográfico */}
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">
                Mateus Ribeiro
              </h1>
              
              {/* Tag de Especialidade em Preto (Substituindo o amarelo no fundo branco) */}
              <div className="inline-block bg-[#1a1a1a] text-white px-4 py-1.5 rounded font-bold text-sm uppercase tracking-wider mb-8">
                Marceneiro e Designer de Móveis Sob Medida
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg border-l-4 border-[#FFD700] pl-6">
                <p>
                  Sou o Mateus Ribeiro, Marceneiro e Designer de Móveis Sob Medida, com mais de 15 anos de experiência em projetos que vão desde móveis planejados até trabalhos de marcenaria artesanal. Minha trajetória começou cedo, em 2009, e desde então atuo tanto em oficinas quanto em projetos DIY avançados.
                </p>
                <p>
                  Minha especialidade está em técnicas de parafusamento em diferentes tipos de madeira — como maciça, MDF e compensado — além de pré-furação, colagem e acabamento. Também realizo avaliações de ferramentas voltadas para marcenaria, sempre considerando precisão, durabilidade e eficiência. Com essa experiência, ajudo tanto profissionais quanto entusiastas a escolherem as melhores ferramentas para alcançar resultados de qualidade em seus projetos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};