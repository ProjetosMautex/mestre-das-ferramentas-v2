import React from 'react';
import { Logo } from './Logo';
const MapPin = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>);
const Mail = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);
const User = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>);
const Building = ({ size = 24, className = "" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Coluna Esquerda - Logo e Descrição */}
          <div className="space-y-6">
            <div className="mb-6">
              <Logo lightMode={true} />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md text-lg">
              No <span className="text-[#FFD700] font-semibold">Mestre das Ferramentas</span> você encontra reviews completos, comparativos e guias de compra das melhores parafusadeiras e furadeiras para seus projetos. Conteúdo técnico, prático e imparcial para uso doméstico e profissional.
            </p>
          </div>

          {/* Coluna Direita - Informações de Contato Detalhadas */}
          <div className="lg:pl-12">
            <h3 className="text-2xl font-bold mb-8 border-l-4 border-[#FFD700] pl-4">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              
              {/* Responsável */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-[#FFD700] flex-shrink-0">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-100">Responsável</h4>
                  <p className="text-gray-300">Murilo Vieira</p>
                </div>
              </div>

              {/* Empresa */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-[#FFD700] flex-shrink-0">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-100">Empresa/Projeto</h4>
                  <p className="text-gray-300">Mestre das Ferramentas</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-[#FFD700] flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-100">Endereço</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Sitio Pedrinhas, 50 – Zona Rural – Venturosa, PE – CEP 55270-000
                  </p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-[#FFD700] flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-100">E-mail</h4>
                  <a href="mailto:contato@mestredasferramentas.com.br" className="text-gray-300 break-all hover:text-[#FFD700] transition-colors block">
                    contato@mestredasferramentas.com.br
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Barra Inferior - Copyright e Links Legais */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; 2026 Projetos Mautex. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/termos-de-uso/" className="hover:text-[#FFD700] transition-colors">Termos de Uso</a>
            <a href="/politica-de-privacidade/" className="hover:text-[#FFD700] transition-colors">Políticas de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
