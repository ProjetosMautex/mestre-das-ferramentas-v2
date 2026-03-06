import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setSearchQuery('');
  };

  // Função que executa a busca
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redireciona para a página de busca passando o parâmetro 'q'
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const menuItems = [
    { label: 'Página Inicial', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Sobre', href: '/sobre-nos' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <header className="bg-[#1a1a1a] shadow-md sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <Logo lightMode={true} />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className={`flex space-x-8 ${isSearchOpen ? 'hidden' : 'flex'}`}>
              {menuItems.map((item) => (
                <a key={item.label} href={item.href} className="text-gray-300 hover:text-[#FFD700] font-medium transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center">
              {isSearchOpen ? (
                /* FORMULÁRIO DE BUSCA */
                <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-[#2a2a2a] rounded-lg border-2 border-[#FFD700]">
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="pl-4 pr-10 py-2 bg-transparent text-white focus:outline-none w-64"
                    placeholder="O que você procura?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="absolute right-8 text-gray-400 hover:text-[#FFD700]">
                    <Search size={18} />
                  </button>
                  <X className="absolute right-2 cursor-pointer text-gray-400 hover:text-white" onClick={toggleSearch} size={20} />
                </form>
              ) : (
                <button onClick={toggleSearch} className="p-2 text-gray-300 hover:text-[#FFD700]">
                  <Search size={24} />
                </button>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-gray-300">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1a1a1a] z-[100] flex flex-col p-6">
          <div className="flex justify-between items-center">
            <Logo lightMode={true} />
            <X className="text-white" onClick={() => setIsMobileMenuOpen(false)} size={32} />
          </div>
          
          {/* Busca no Mobile */}
          <form onSubmit={handleSearchSubmit} className="mt-8 relative">
             <input 
               type="text"
               className="w-full bg-[#2a2a2a] text-white p-4 rounded-lg border border-gray-700 focus:border-[#FFD700] outline-none"
               placeholder="Pesquisar ferramentas..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
             <Search className="absolute right-4 top-4 text-gray-500" />
          </form>

          <nav className="flex flex-col space-y-6 mt-10">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="text-2xl text-white border-b border-gray-800 pb-2">{item.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};