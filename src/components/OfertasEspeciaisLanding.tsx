import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { products } from '../data/products';

export const OfertasEspeciaisLanding: React.FC = () => {
  const reviews = [
    {
      title: "1. Makita DHP490 (O Equilíbrio Perfeito)",
      image: "/images/Parafusadeira Furadeira Impacto Makita Dhp490 18v 2 Baterias teste.webp",
      desc1: "A DHP490 é a escolha ideal para quem busca tecnologia sem escovas (Brushless) por um preço justo. Com torque de 65Nm, ela encara madeira e alvenaria sem sofrer. É compacta, resistente à poeira (XPT) e já vem com duas baterias.",
      ideal: "Marceneiros e instaladores que precisam de autonomia.",
      destaque: "Motor Brushless que não gasta carvão.",
      productId: "Parafusadeira Furadeira Impacto Makita Dhp490 18v 2 Baterias teste"
    },
    {
      title: "2. Bosch GSB 18V-50 (O Combo Profissional Completo)",
      image: "/images/Parafusadeira Furadeira Gsb18v-50 2 Bateria kit Cor Azul Frequência 60Hz Bosch teste.webp",
      desc1: "Este é o \"tanque de guerra\" da Bosch em sua versão definitiva. Além do motor Brushless e mandril metálico, este kit é imbatível: vem com 2 baterias, carregador e uma maleta com 23 acessórios. Com 70Nm de torque, é a máquina para quem não quer perder tempo comprando peças separadas.",
      ideal: "Quem quer comprar uma vez só e já sair trabalhando.",
      destaque: "Kit completo com maleta, baterias e jogo de brocas/bits.",
      productId: "Parafusadeira Furadeira Gsb18v-50 2 Bateria kit Cor Azul Frequência 60Hz Bosch teste"
    },
    {
      title: "3. Bosch GSB 185-LI (Leveza e Praticidade)",
      image: "/images/Parafusadeira E Furadeira De Impacto 18v Gsb185 Li Com Trena Azul teste.webp",
      desc1: "A GSB 185-LI é surpreendente pelo tamanho. Pesa apenas 1,3 kg, sendo perfeita para montagem de móveis e trabalhos em locais apertados ou acima da cabeça. Este kit acompanha uma trena original Bosch, um baita bônus.",
      ideal: "Uso doméstico avançado ou montadores de móveis.",
      destaque: "Super leve, evita fadiga no braço.",
      productId: "Parafusadeira E Furadeira De Impacto 18v Gsb185 Li Com Trena Azul teste"
    },
    {
      title: "4. DeWalt DCD7781B (A Força da Categoria)",
      image: "/images/Parafusadeira E Furadeira De Impacto 12 Dcd7781b Sbateria Cor Amarelo 20V teste.webp",
      desc1: "Se você já tem baterias 20V da DeWalt, a DCD7781B é o melhor upgrade. Com 340W de potência e um impacto agressivo, ela fura concreto com facilidade. É uma máquina \"pau para toda obra\" com 3 anos de garantia.",
      ideal: "Quem já está no ecossistema DeWalt e busca potência.",
      destaque: "3 anos de garantia de fábrica.",
      productId: "Parafusadeira E Furadeira De Impacto 12 Dcd7781b Sbateria Cor Amarelo 20V teste"
    }
  ];

  const trackConversion = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-11080689986',
        'value': 1.0,
        'currency': 'BRL'
      });
      console.log('Conversão disparada para o Google Ads');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6 md:py-10 px-4 font-sans">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        
        <div className="bg-gradient-to-r from-[#FFD700] to-[#ffc800] p-8 md:p-10 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] leading-tight flex flex-col items-center md:block">
            <span className="text-4xl md:text-5xl mb-2">🛠️</span> <br className="md:hidden" /> Reviews Rápidos: <br className="md:hidden" /> As Melhores 18V/20V de 2026
          </h1>
          <p className="mt-4 text-[#1a1a1a] font-bold text-base md:text-lg max-w-xl mx-auto opacity-90">
            O guia definitivo e sem enrolação para você escolher sua próxima máquina profissional.
          </p>
        </div>

        <div className="p-5 md:p-10 space-y-12">
          {reviews.map((review, i) => {
            // Remove the type assertion since we index the raw object
            const productLink = (products as Record<string, { link: string }>)[review.productId]?.link || "#";
            
            return (
              <div key={i} className="flex flex-col bg-white border border-gray-100 shadow-md rounded-2xl p-5 md:p-8 hover:shadow-lg transition-shadow">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-5">{review.title}</h2>
                
                <div className="relative mb-6 bg-white rounded-xl overflow-hidden p-2 flex justify-center">
                   <img 
                     src={review.image} 
                     alt={review.title}
                     className="w-full h-auto object-contain max-h-[350px] mix-blend-multiply"
                     loading={i === 0 ? "eager" : "lazy"}
                   />
                </div>

                <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                  <p className="font-medium text-gray-800">{review.desc1}</p>
                  
                  <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <p className="font-bold text-blue-900 flex items-center">
                      <span className="mr-2 text-xl">🎯</span> Ideal para:
                    </p>
                    <p className="text-blue-800 mt-1 pl-7">{review.ideal}</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                    <p className="font-bold text-green-900 flex items-center">
                      <span className="mr-2 text-xl">⭐</span> Destaque:
                    </p>
                    <p className="text-green-800 mt-1 pl-7">{review.destaque}</p>
                  </div>
                </div>

                {/* Novo botão de compra customizado com aviso */}
                <div className="mt-8 w-full flex flex-col items-center">
                  <a
                    href={productLink}
                    target="_blank"
                    rel="noopener noreferrer sponsored nofollow"
                    onClick={trackConversion}
                    className="flex items-center justify-center gap-3 bg-[#FFD700] text-[#1a1a1a] px-8 py-5 rounded-xl font-black text-xl hover:scale-105 transition-all w-full sm:w-auto shadow-lg no-underline uppercase tracking-tight"
                  >
                    <ShoppingCart size={28} strokeWidth={3} />
                    VER PREÇO
                  </a>
                  <p className="mt-3 text-xs text-gray-500 italic">
                    * Você será redirecionado para a loja oficial
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#1a1a1a] text-gray-400 p-8 text-center text-sm rounded-b-3xl">
          <p className="font-bold mb-2">Mestre das Ferramentas © 2026</p>
          <p className="text-xs">Todos os direitos reservados.</p>
        </div>

      </div>
    </div>
  );
};
