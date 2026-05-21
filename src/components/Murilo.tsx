import React from 'react';

export const Murilo: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
            
            {/* Foto do Autor */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[500/680] w-full max-w-xs mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-gray-50">
                <img 
                  src="/images/autores/Murilo.webp" 
                  alt="Murilo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/500x680/1a1a1a/ffffff?text=Murilo';
                  }}
                />
              </div>
            </div>

            {/* Texto Biográfico */}
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">
                Murilo
              </h1>
              
              {/* Tag de Especialidade em Preto para melhor leitura */}
              <div className="inline-block bg-[#1a1a1a] text-white px-4 py-1.5 rounded font-bold text-sm uppercase tracking-wider mb-8">
                Fundador e Especialista em SEO
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg border-l-4 border-[#FFD700] pl-6">
                <p>
                  Sou o Murilo, fundador do Mestre das Ferramentas e especialista em SEO e criação de sites de nicho. Meu trabalho é desenvolver conteúdos estratégicos sobre ferramentas físicas de trabalho, ajudando profissionais, hobistas e empresas a encontrarem informações realmente úteis para o dia a dia.
                </p>
                <p>
                  Atuo na construção de projetos digitais focados em autoridade temática, estruturação de conteúdo e posicionamento orgânico nos mecanismos de busca. Tenho experiência em planejamento editorial, arquitetura de sites, organização de silos e interligação estratégica entre páginas, sempre alinhando SEO com a intenção de busca do usuário.
                </p>
                <p>
                  No Mestre das Ferramentas, sou responsável pela definição da estratégia de conteúdo, revisão técnica dos artigos e desenvolvimento da estrutura do site, garantindo materiais completos, objetivos e relevantes para quem busca informações confiáveis sobre ferramentas, equipamentos e soluções para trabalho profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
