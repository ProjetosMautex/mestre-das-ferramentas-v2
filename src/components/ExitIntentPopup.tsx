import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDiscreetVisible, setIsDiscreetVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const popupRef = useRef<HTMLDivElement>(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  useEffect(() => {
    // Marca o instante em que o usuário entrou no site pela primeira vez
    if (!sessionStorage.getItem('siteEntryTime')) {
      sessionStorage.setItem('siteEntryTime', String(Date.now()));
    }

    const entryTime = Number(sessionStorage.getItem('siteEntryTime'));
    const elapsed = Date.now() - entryTime;
    const TARGET_MS = 37000; // 37 segundos
    const remaining = Math.max(TARGET_MS - elapsed, 0);

    // --- DESKTOP: mouse sai da página ---
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        showFullPopup();
      }
    };

    // --- MOBILE + DESKTOP: timer baseado no tempo restante (agora mostra o discreto) ---
    const timer = setTimeout(() => {
      // Mostrar o discreto somente se nunca tiver aberto o grande nem fechado o discreto nesta sessão
      if (!sessionStorage.getItem('exitIntentShown') && !sessionStorage.getItem('discreetClosed')) {
        setIsDiscreetVisible(true);
      }
    }, remaining);

    // --- MOBILE SCROLL INTENT: detecta se a pessoa subiu o scroll rapidamente ---
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      
      const distance = lastScrollY - currentScrollY; // > 0 significa subindo a página
      const timeDiff = currentTime - lastScrollTime;
      
      // Se subiu mais de 50 pixels em menos de 100ms e ainda não mostrou
      if (distance > 50 && timeDiff > 0 && timeDiff < 100) {
        if (!sessionStorage.getItem('exitIntentShown')) {
          showFullPopup();
        }
      }
      
      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    document.addEventListener('mouseleave', handleExitIntent);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const showFullPopup = () => {
    setIsDiscreetVisible(false);
    setIsVisible(true);
    sessionStorage.setItem('exitIntentShown', 'true');
  };

  const handleCloseFull = () => setIsVisible(false);

  const handleCloseDiscreet = (e: React.MouseEvent) => {
    e.stopPropagation(); // Impede de abrir o modal grande ao clicar no X
    setIsDiscreetVisible(false);
    sessionStorage.setItem('discreetClosed', 'true');
  };

  const handleDiscreetClick = () => {
    showFullPopup();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert('Erro ao registrar. Tente novamente.');
      }
    } catch {
      setStatus('idle');
      alert('Erro de conexão. Tente novamente.');
    }
  };

  if (!isVisible && !isDiscreetVisible) return null;

  return (
    <>
      {/* 1. BANNER DISCRETO (BOTTOM BAR) */}
      {isDiscreetVisible && !isVisible && (
        <div 
          onClick={handleDiscreetClick}
          className="fixed bottom-0 left-0 right-0 z-[90] bg-[#1a1a1a] text-white p-4 flex items-center justify-between shadow-[0_-4px_15px_rgba(0,0,0,0.5)] cursor-pointer hover:bg-gray-900 transition-colors animate-in slide-in-from-bottom duration-500 border-t border-gray-800"
        >
          <div className="flex-1 font-bold text-center text-sm md:text-base flex items-center justify-center flex-wrap gap-2">
            <span>🎁 <span className="text-[#FFD700]">Guia Grátis:</span> Aprenda a comprar parafusadeira PRO pelo preço de Hobby.</span>
            <button className="bg-[#FFD700] hover:bg-[#ffcd38] text-black font-black px-3 py-1 rounded-md text-xs sm:text-sm uppercase transition-colors whitespace-nowrap">
              VER AGORA
            </button>
          </div>
          <button 
            onClick={handleCloseDiscreet}
            className="p-2 ml-2 md:ml-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors flex-shrink-0"
            aria-label="Fechar banner"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>
      )}

      {/* 2. BANNER TELA CHEIA (POPUP ORGINAL) */}
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div 
            ref={popupRef}
            className="relative w-full max-w-lg bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 border border-gray-800"
          >
            {/* Botão Fechar — grande e visível */}
            <button 
              onClick={handleCloseFull}
              className="absolute top-3 right-3 z-50 text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-full p-2.5 shadow-lg transition-colors"
              aria-label="Fechar"
            >
              <X size={22} strokeWidth={3} />
            </button>

            {status !== 'success' && (
              <>
                {/* 1. Parte de Cima: Mensagem de Impacto */}
                <div className="p-6 text-center bg-gradient-to-b from-gray-900 to-[#1a1a1a]">
                  <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
                    Espera um Pouco!
                  </h2>
                  <p className="text-[#FFD700] text-lg font-bold leading-tight">
                    Você vai sair sem pegar isso?
                  </p>
                </div>

                {/* 2. Parte Central: Imagem do eBook */}
                <div className="px-10 pb-4 flex justify-center bg-[#1a1a1a]">
                  <div className="relative group max-w-[240px]">
                    <img 
                      src="/images/O Mapa das Parafusadeiras.webp" 
                      alt="Ebook O Mapa das Parafusadeiras" 
                      className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.2)] group-hover:scale-105 transition-transform duration-500"
                      style={{ maxHeight: '350px', objectFit: 'contain' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/1024x1536/1a1a1a/FFD700?text=O+Mapa+das+Parafusadeiras';
                      }}
                    />
                  </div>
                </div>
              </>
            )}

            {/* 3. Parte de Baixo: Formulário e Chamada */}
            <div className="p-8 pt-2 bg-[#1a1a1a] text-center">
              {status === 'success' ? (
                <div className="py-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-extrabold text-white mb-2">Quase lá! Seu guia está a caminho. 🚀</h2>
                  <p className="text-gray-300 mb-4">Verifique sua caixa de entrada em instantes.</p>
                  <div className="mt-4 p-3 bg-red-900/40 border border-red-500 rounded-lg text-left">
                    <p className="text-[#FFD700] font-bold text-sm tracking-wide leading-relaxed">
                      ⚠️ IMPORTANTE: Se o e-mail não chegar em 1 minuto, ele pode ter caído por engano no SPAM ou em PROMOÇÕES.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Deixe aqui seu melhor e-mail para receber o eBook grátis"
                    className="w-full px-4 py-4 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base font-medium shadow-inner"
                    required
                  />
                  
                  <button
                    type="submit"
                    disabled={status === 'submitting' || !isValidEmail}
                    className="w-full bg-[#FFD700] hover:bg-[#ffcd38] text-black font-black py-4 px-6 rounded-lg text-lg uppercase tracking-tighter transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-[0_4px_15px_rgba(255,215,0,0.3)]"
                  >
                    {status === 'submitting' ? 'Enviando...' : 'Me mostre os modelos profissionais'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
