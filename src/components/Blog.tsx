import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const categories = [
    {
      id: 'parafusadeiras-e-furadeiras',
      name: 'Parafusadeiras e Furadeiras',
      url: '/category/parafusadeiras-e-furadeiras',
      image: '/images/blog/melhor-furadeira-e-parafusadeira/melhor-furadeira-e-parafusadeira.webp',
      description: 'Análises completas, testes reais e comparativos das melhores parafusadeiras e furadeiras do mercado.',
    },
    {
      id: 'chaves-de-impacto',
      name: 'Chaves de Impacto',
      url: '/category/chaves-de-impacto',
      image: '/images/blog/1/Melhor chave de impacto.webp',
      description: 'Descubra as chaves de impacto mais potentes para trabalhos exigentes e mecânica.',
    },
    {
      id: 'martelete',
      name: 'Marteletes',
      url: '/category/martelete',
      image: '/images/blog/2/marteletes.webp',
      description: 'Análises técnicas, testes reais e guias dos melhores marteletes para perfurar e romper.',
    }
  ];

  return (
    <main className="flex-grow bg-gray-50">
      <section className="bg-[#1a1a1a] py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Blog & Reviews</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Escolha uma categoria para explorar nossas análises técnicas e guias detalhados.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#1a1a1a] border-l-4 border-[#FFD700] pl-4">
            Categorias
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a 
              key={category.id}
              href={category.url}
              className="bg-[#F9F9F9] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x533/e2e8f0/1e293b?text=' + encodeURIComponent(category.name);
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#FFD700] text-[#1a1a1a] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide shadow-sm">
                  Categoria
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#b39700] transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-[#1a1a1a] font-bold mt-auto transition-all group-hover:underline decoration-[#FFD700] decoration-2 underline-offset-4">
                  Ver artigos <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};