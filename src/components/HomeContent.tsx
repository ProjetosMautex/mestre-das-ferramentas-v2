import React from 'react';
import { Zap, ShieldCheck, Clock, PenTool, Search, Star, ArrowRight } from 'lucide-react';

export const HomeContent = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-[#FFD700]" />,
      title: "Eficiência",
      description: "Realize trabalhos em segundos que levariam minutos manualmente."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#FFD700]" />,
      title: "Durabilidade",
      description: "Investir na ferramenta certa garante anos de uso sem dores de cabeça."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#FFD700]" />,
      title: "Economia de Tempo",
      description: "Otimize seus projetos e tenha mais tempo para o que realmente importa."
    }
  ];

  const reviewProcess = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Pesquisa",
      description: "Analisamos o mercado e selecionamos os modelos mais promissores."
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Testes Práticos",
      description: "Submetemos as ferramentas a testes reais de uso intenso."
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: "Veredito",
      description: "Classificamos com base em performance, custo e durabilidade."
    }
  ];

  const highlights = [
    {
      title: "Melhor Parafusadeira 2026 Testamos as 11 Melhores (Guia Definitivo)",
      url: "/melhor-parafusadeira",
      image: "/images/blog/melhor-parafusadeira/melhor-parafusadeira.webp",
      excerpt: "Cansado de parafusos soltos? Nosso guia revela a parafusadeira ideal para você!"
    },
    {
      title: "Melhor Furadeira",
      url: "/melhor-furadeira",
      image: "/images/blog/melhor-furadeira/melhor-furadeira.webp",
      excerpt: "Potência e precisão: selecionamos as melhores furadeiras para concreto e madeira."
    },
    {
      title: "Melhor Parafusadeira Custo Benefício",
      url: "/melhor-parafusadeira-custo-beneficio",
      image: "/images/blog/melhor-parafusadeira-custo-beneficio/melhor-parafusadeira-custo-beneficio.webp",
      excerpt: "Não gaste mais do que o necessário. Veja as melhores opções para o seu bolso."
    },
    {
      title: "Melhor Furadeira e Parafusadeira",
      url: "/melhor-furadeira-e-parafusadeira",
      image: "/images/blog/melhor-furadeira-e-parafusadeira/melhor-furadeira-e-parafusadeira.webp",
      excerpt: "A versatilidade dos combos 2 em 1 que valem a pena ter na sua caixa de ferramentas."
    },
    {
      title: "Melhores Marcas de Furadeira",
      url: "/melhores-marcas-de-furadeira",
      image: "/images/blog/melhores-marcas-de-furadeira/melhores-marcas-de-furadeira.webp",
      excerpt: "Makita, Bosch, DeWalt? Saiba qual marca oferece a melhor garantia e assistência."
    },
    {
      title: "Parafusadeira Black Tools é Boa",
      url: "/parafusadeira-black-tools-e-boa/",
      image: "/images/blog/parafusadeira-black-tools-e-boa/parafusadeira-black-tools-e-boa.webp",
      excerpt: "Análise completa da marca que tem ganhado espaço no mercado nacional."
    }
  ];

  return (
    <div className="font-sans bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#F9F9F9] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
              Domine suas <span className="text-[#1a1a1a]">Ferramentas</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              O guia definitivo para profissionais e entusiastas. Descubra as melhores parafusadeiras, furadeiras e equipamentos do mercado.
            </p>
            <a href="#destaques" className="inline-block bg-[#FFD700] text-[#1a1a1a] px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#e6c200] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              Ver Melhores Reviews
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a1a1a]">Por que ter uma boa ferramenta?</h2>
              <p className="text-gray-600 mt-2">Investir em qualidade transforma seu trabalho.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-[#F9F9F9] p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center border-t-4 border-[#FFD700]">
                  <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                    {React.cloneElement(benefit.icon as React.ReactElement<any>, { strokeWidth: 2.5 })}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Review Section */}
        <section className="py-16 bg-[#1a1a1a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Como avaliamos cada produto</h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Nosso processo de avaliação é rigoroso e 100% independente. Não aceitamos dinheiro para elogiar produtos específicos. Para manter o Mestre das Ferramentas ativo, recebemos uma pequena comissão quando você realiza uma compra através dos nossos links – sem nenhum custo adicional para você. Isso garante nossa imparcialidade e foco total na qualidade.
                </p>
                <div className="space-y-6">
                  {reviewProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-[#FFD700] p-2 rounded-lg mt-1 text-[#1a1a1a]">
                        {React.cloneElement(step.icon as React.ReactElement<any>, { 
                          className: 'w-6 h-6 text-[#1a1a1a]', 
                          strokeWidth: 2.5 
                        })}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{step.title}</h4>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-full min-h-[300px] bg-gray-800 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-700">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/confianca.webp')" }}></div>
                <div className="relative z-10 text-center p-8">
                  <ShieldCheck className="w-24 h-24 text-[#FFD700] mx-auto mb-4" strokeWidth={2} />
                  <h3 className="text-2xl font-bold text-white">100% Imparcial</h3>
                  <p className="text-gray-300 mt-2">Confiança é nossa principal ferramenta.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Highlights Section */}
        <section id="destaques" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a1a] border-l-4 border-[#FFD700] pl-4">
              Destaques Recentes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
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
                  <div className="absolute top-4 left-4 bg-[#FFD700] text-[#1a1a1a] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide shadow-sm">
                    Review
                  </div>
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
        </section>
      </main>
    </div>
  );
};