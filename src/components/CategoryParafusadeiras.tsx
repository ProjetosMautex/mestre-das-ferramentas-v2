import React, { useState } from 'react';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { articles } from '../data/articles';

export const CategoryParafusadeiras: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [inputPage, setInputPage] = useState('');

  // Todos os artigos atuais são de Parafusadeiras e Furadeiras
  const filteredArticles = articles;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageJump = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(inputPage);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      setInputPage('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-grow bg-gray-50">
      <section className="bg-[#1a1a1a] py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Parafusadeiras e Furadeiras</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Análises técnicas, comparativos detalhados e guias para você escolher a ferramenta certa.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mb-8">
          <a 
            href="/blog"
            className="inline-flex items-center text-[#1a1a1a] font-bold hover:underline decoration-[#FFD700] decoration-2 underline-offset-4 mb-6 transition-all"
          >
            <ChevronLeft className="mr-1 w-4 h-4" /> Voltar para categorias
          </a>
          
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a1a] border-l-4 border-[#FFD700] pl-4">
              Artigos de Parafusadeiras e Furadeiras
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((item, index) => (
            <article key={index} className="bg-[#F9F9F9] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x533/e2e8f0/1e293b?text=Mestre+das+Ferramentas';
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 line-clamp-2 group-hover:text-[#b39700] transition-colors">
                  <a href={item.url}>
                    {item.title}
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.excerpt}
                </p>
                <a 
                  href={item.url} 
                  className="inline-flex items-center text-[#1a1a1a] font-bold hover:underline decoration-[#FFD700] decoration-2 underline-offset-4 mt-auto transition-all"
                >
                  Ler análise completa <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-16 flex flex-col items-center space-y-6">
            <div className="flex justify-center items-center space-x-4">
              <button 
                onClick={prevPage} 
                disabled={currentPage === 1}
                className={`px-6 py-2 rounded font-bold transition-all ${
                  currentPage === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#FFD700] text-[#1a1a1a] hover:bg-[#e6c200] shadow-md active:scale-95'
                }`}
              >
                Anterior
              </button>
              
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                <span className="text-gray-600 font-medium">
                  Página <span className="text-[#1a1a1a] font-bold">{currentPage}</span> de <span className="text-[#1a1a1a] font-bold">{totalPages}</span>
                </span>
              </div>

              <button 
                onClick={nextPage} 
                disabled={currentPage === totalPages}
                className={`px-6 py-2 rounded font-bold transition-all ${
                  currentPage === totalPages 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#FFD700] text-[#1a1a1a] hover:bg-[#e6c200] shadow-md active:scale-95'
                }`}
              >
                Próxima
              </button>
            </div>

            <form onSubmit={handlePageJump} className="flex items-center space-x-2 bg-[#1a1a1a] p-2 rounded-xl shadow-lg border border-gray-800">
              <label htmlFor="page-jump" className="text-white text-xs font-bold uppercase tracking-wider ml-2">Ir para:</label>
              <input 
                id="page-jump"
                type="number" 
                min="1" 
                max={totalPages}
                value={inputPage}
                onChange={(e) => setInputPage(e.target.value)}
                placeholder="Ex: 5"
                className="w-16 bg-gray-800 text-white border-none rounded-lg px-2 py-1 text-center font-bold focus:ring-2 focus:ring-[#FFD700] outline-none transition-all placeholder:text-gray-500 placeholder:font-normal"
              />
              <button 
                type="submit"
                className="bg-[#FFD700] text-[#1a1a1a] px-4 py-1 rounded-lg font-black text-sm uppercase hover:bg-[#e6c200] transition-all active:scale-95"
              >
                OK
              </button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
};
