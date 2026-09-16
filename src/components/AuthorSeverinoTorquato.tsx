import React from 'react';

export const AuthorSeverinoTorquato: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mt-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="shrink-0 mx-auto md:mx-0">
        <a href="/author/severino-torquato" className="block cursor-pointer">
          <img 
            loading="lazy" 
            width="160" 
            height="160" 
            src="/images/autores/severino-torquato.webp" 
            alt="Severino Torquato" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-200 hover:border-[#FFD700] transition-colors shadow-sm" 
          />
        </a>
      </div>
      <div>
        <h2 className="text-sm font-bold text-[#b39700] uppercase tracking-widest mb-2">Sobre o Autor</h2>
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          <a href="/author/severino-torquato" className="hover:text-[#b39700] transition-colors">
            Severino Torquato
          </a>
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Sou o Severino Torquato, Técnico em Manutenção com mais de 20 anos de experiência em reparos domésticos e projetos DIY. Minha especialidade é analisar parafusadeiras e furadeiras de uso leve, focando no custo-benefício e na praticidade. Estou aqui para indicar os modelos ideais para facilitar o seu dia a dia em casa.
        </p>
      </div>
    </div>
  );
};
