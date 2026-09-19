import React from 'react';

export const AuthorAndreCarvalho: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mt-8 mb-16 flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="shrink-0 mx-auto md:mx-0">
        <a href="/author/andre-carvalho/" className="block cursor-pointer">
          <img 
            loading="lazy" 
            width={160} 
            height={160} 
            src="/images/autores/andre-carvalho.webp" 
            alt="André Carvalho" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-gray-200 hover:border-[#FFD700] transition-colors shadow-sm" 
          />
        </a>
      </div>
      <div>
        <h2 className="text-sm font-bold text-[#b39700] uppercase tracking-widest mb-2">Sobre o Autor</h2>
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
          <a href="/author/andre-carvalho/" className="hover:text-[#b39700] transition-colors">
            André Carvalho
          </a>
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          Sou o André Carvalho, Especialista em Ferramentas Profissionais com mais de 12 anos de experiência em obras de alta exigência. Minha especialidade é testar e avaliar equipamentos de uso pesado na prática. Meu objetivo é ajudar você, profissional, a escolher ferramentas potentes e robustas que entregam produtividade de verdade.
        </p>
      </div>
    </div>
  );
};
