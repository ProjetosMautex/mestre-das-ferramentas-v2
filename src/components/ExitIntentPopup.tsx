import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bannerType, setBannerType] = useState<'discreet' | 'big'>('discreet');
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  useEffect(() => {
    // Se já fechou tudo ou já se inscreveu nesta sessão, não faz nada
    if (sessionStorage.getItem('closedAll') || sessionStorage.getItem('emailSubmitted')) return;

    if (!sessionStorage.getItem('siteEntryTime')) {
      sessionStorage.setItem('siteEntryTime', String(Date.now()));
    }

    const entryTime = Number(sessionStorage.getItem('siteEntryTime'));

    const triggerDiscreet = () => {
      if (!sessionStorage.getItem('closedAll') && !sessionStorage.getItem('emailSubmitted') && !sessionStorage.getItem('bigBannerShown')) {
        setBannerType('discreet');
        setIsVisible(true);
      }
    };

    const handleExitIntent = (e: MouseEvent) => {
      const elapsed = Date.now() - entryTime;
      // Triga apenas se passou 40s no site (PC EXIT INTENT)
      if (e.clientY <= 0 && elapsed >= 40000) {
        if (!sessionStorage.getItem('closedAll') && !sessionStorage.getItem('emailSubmitted') && !sessionStorage.getItem('bigBannerShown')) {
          setBannerType('big');
          setIsVisible(true);
          sessionStorage.setItem('bigBannerShown', 'true');
        }
      }
    };

    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const distance = lastScrollY - currentScrollY; // positivo se rolar para CIMA
      const timeDiff = currentTime - lastScrollTime;
      const elapsed = Date.now() - entryTime;
      
      // Triga se rolar rápido para cima após 60s no site
      if (distance > 50 && timeDiff > 0 && timeDiff < 100 && elapsed >= 60000) {
        if (!sessionStorage.getItem('closedAll') && !sessionStorage.getItem('emailSubmitted') && !sessionStorage.getItem('bigBannerShown')) {
          setBannerType('big');
          setIsVisible(true);
          sessionStorage.setItem('bigBannerShown', 'true');
        }
      }
      
      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    const elapsed = Date.now() - entryTime;
    const DISCREET_MS = 30000;
    const remainingDiscreet = Math.max(DISCREET_MS - elapsed, 0);

    const discreetTimer = setTimeout(triggerDiscreet, remainingDiscreet);

    document.addEventListener('mouseleave', handleExitIntent);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(discreetTimer);
    };
  }, []);

  // Delay para aparecer o botão de fechar (X) e o link "Não obrigado"
  // Reseta o timer sempre que a visibilidade ou o tipo de banner muda
  useEffect(() => {
    if (isVisible) {
      setShowCloseButton(false);
      const timer = setTimeout(() => setShowCloseButton(true), 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible, bannerType]);

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem('closedAll', 'true');
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
        sessionStorage.setItem('emailSubmitted', 'true');
        window.location.href = '/obrigado';
      } else {
        setStatus('idle');
        alert('Erro ao registrar. Tente novamente.');
      }
    } catch {
      setStatus('idle');
      alert('Erro de conexão. Tente novamente.');
    }
  };

  if (!isVisible) return null;

  if (bannerType === 'discreet') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1a1a1a] text-white p-4 shadow-[0_-4px_25px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom duration-500 border-t border-gray-800 pb-6 md:pb-4">
        <div className="max-w-5xl mx-auto relative px-2">
          {showCloseButton && (
            <button 
              onClick={handleClose}
              className="absolute -top-1 -right-2 md:top-0 md:right-0 p-1 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors text-gray-400 hover:text-white"
              aria-label="Fechar"
            >
              <X size={16} />
            </button>
          )}

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-left">
            <p className="font-medium text-sm md:text-base">
              🛠️ <strong className="text-[#FFD700]">Guia Maker Grátis:</strong> 5 projetos para renovar sua casa.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail aqui..."
                className="flex-grow px-3 py-2 bg-white text-gray-900 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting' || !isValidEmail}
                className="bg-[#FFD700] hover:bg-[#ffcd38] text-black font-black py-2 px-6 rounded-lg text-sm transition-transform active:scale-95 disabled:opacity-50 whitespace-nowrap"
              >
                {status === 'submitting' ? '...' : 'BAIXAR AGORA'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // BIG BANNER (EXIT / SCROLL INTENT)
  return (
    <div className="fixed inset-0 z-[150] flex flex-col justify-center items-center bg-white/90 px-3 animate-in fade-in duration-300 backdrop-blur-sm">
      <div className="relative bg-[#1a1a1a] p-5 md:p-6 rounded-3xl max-w-sm md:max-w-md w-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-700">
        {showCloseButton && (
          <button 
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors bg-gray-800/80 hover:bg-gray-700 rounded-full p-2 border border-gray-700 shadow-lg z-10"
            aria-label="Fechar"
          >
            <X size={18} strokeWidth={3} />
          </button>
        )}

        <div className="flex flex-col items-center">
          <h2 className="text-[#FFD700] font-black text-xl md:text-2xl text-center leading-tight mb-3 uppercase tracking-tighter">
            Espere! <span className="text-white block text-lg md:text-xl font-bold mt-1">Leve seu Guia antes de ir.</span>
          </h2>
          
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-[#FFD700]/5 blur-2xl rounded-full"></div>
            <img 
              src="/images/melhorebook.webp" 
              alt="Guia Gratuito" 
              className="relative w-full max-w-[180px] md:max-w-[220px] h-auto object-contain transform -rotate-1 drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)]"
            />
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail..."
              className="w-full px-4 py-2 bg-[#242424] text-white border border-gray-700 placeholder-gray-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#FFD700]/30 text-sm text-center font-medium"
              required
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-[#FFD700] hover:bg-[#ffcd38] text-black font-black py-3 px-4 rounded-xl text-sm transition-all hover:scale-[1.02] active:scale-95 uppercase shadow-xl shadow-[#FFD700]/10 border-b-4 border-[#ccab00] active:border-b-0"
            >
              {status === 'submitting' ? '...' : 'QUERO MEU GUIA'}
            </button>
          </form>
          
          <button 
            onClick={handleClose}
            className={`mt-4 text-xs font-medium uppercase tracking-widest transition-all duration-1000 underline underline-offset-4 ${
              showCloseButton 
                ? 'text-white decoration-white opacity-100' 
                : 'text-gray-400 decoration-gray-600 opacity-40'
            }`}
          >
            Não, obrigado. Quero continuar lendo.
          </button>
        </div>
      </div>
    </div>
  );
};






