import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, AlertCircle, FileText, Handshake } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-[#1a1a1a] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contato</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Se você tem dúvidas, sugestões, deseja colaborar ou entrar em contato conosco por qualquer motivo, estamos à disposição para atender você da melhor forma possível.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Aqui no <span className="font-bold text-[#1a1a1a]">Mestre das Ferramentas</span>, levamos a sério a qualidade das informações que oferecemos. Nosso objetivo é ajudar você a escolher e utilizar as melhores ferramentas elétricas e manuais — como parafusadeiras, furadeiras, chaves de impacto e acessórios profissionais e domésticos.
            </p>
            <p>
              Todos os conteúdos publicados no site são produzidos com base em testes práticos, análises técnicas e anos de experiência real no uso de ferramentas em diferentes contextos: do faça-você-mesmo em casa até o trabalho profissional em oficinas e construções.
            </p>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-10 text-center border-b-4 border-[#FFD700] inline-block pb-2">
            Como Podemos Ajudar?
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">Você pode entrar em contato para:</p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#FFD700] flex items-start gap-4">
              <div className="bg-yellow-50 p-3 rounded-full text-[#b39700]">
                <MessageSquare size={24} />
              </div>
              <p className="text-gray-700 font-medium">Tirar dúvidas sobre modelos de parafusadeiras, furadeiras e outras ferramentas</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#FFD700] flex items-start gap-4">
              <div className="bg-yellow-50 p-3 rounded-full text-[#b39700]">
                <AlertCircle size={24} />
              </div>
              <p className="text-gray-700 font-medium">Relatar algum erro ou sugerir atualização em nossos conteúdos</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#FFD700] flex items-start gap-4">
              <div className="bg-yellow-50 p-3 rounded-full text-[#b39700]">
                <FileText size={24} />
              </div>
              <p className="text-gray-700 font-medium">Sugerir novos testes, comparativos e guias práticos</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#FFD700] flex items-start gap-4">
              <div className="bg-yellow-50 p-3 rounded-full text-[#b39700]">
                <Handshake size={24} />
              </div>
              <p className="text-gray-700 font-medium">Propor parcerias comerciais ou colaborações</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Informações de Contato</h2>
              
              <div className="bg-[#F9F9F9] p-8 rounded-xl shadow-sm border border-gray-100 space-y-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Responsável</h3>
                    <p className="text-gray-600">Mateus Ribeiro</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Empresa/Projeto</h3>
                    <p className="text-gray-600">Mestre das Ferramentas</p>
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="text-[#FFD700] mt-1"><MapPin size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Endereço</h4>
                      <p className="text-gray-600">Avenida dos Tamarindos, nº 214 – Centro – Petrolina, PE – CEP 56300-000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#FFD700] mt-1"><Phone size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">Telefone</h4>
                      <p className="text-gray-600">(87) 99641-2248</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500 bg-white px-2 py-1 rounded inline-flex border border-gray-100">
                        <Clock size={14} />
                        <span>Segunda a sexta, das 9h às 18h</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-[#FFD700] mt-1"><Mail size={20} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900">E-mail</h4>
                      <p className="text-gray-600 break-all">contato@mestredasferramentas.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Transparência e Compromisso</h3>
                <div className="prose text-gray-700 space-y-4">
                  <p>
                    O <span className="font-semibold">Mestre das Ferramentas</span> é totalmente independente e não é patrocinado por nenhuma marca específica de ferramentas.
                  </p>
                  <p>
                    Nossas recomendações são feitas com base em critérios técnicos, usabilidade, custo-benefício e experiência prática em diferentes níveis de uso: doméstico, semiprofissional e profissional.
                  </p>
                  <p className="font-medium text-[#1a1a1a] border-l-4 border-[#FFD700] pl-4 py-2 bg-gray-50">
                    Nosso compromisso é com você, leitor, e com a veracidade das informações que compartilhamos.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full min-h-[800px]">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSd1F8q9EcCaobCa1xOnSym8LUgywyAD6XVWLkZcIm4ZEKIkMA/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                className="w-full h-full min-h-[800px] border-0"
                title="Formulário de Contato"
              >
                Carregando…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};