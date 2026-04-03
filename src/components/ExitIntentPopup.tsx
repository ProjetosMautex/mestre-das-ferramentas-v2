import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isDiscreetVisible, setIsDiscreetVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  useEffect(() => {
    // Para não incomodar quem já assinou, caso você futuramente adicione flag de inscrito, pode validar aqui
    if (sessionStorage.getItem('discreetClosed')) return;

    if (!sessionStorage.getItem('siteEntryTime')) {
      sessionStorage.setItem('siteEntryTime', String(Date.now()));
    }

    const entryTime = Number(sessionStorage.getItem('siteEntryTime'));
    const elapsed = Date.now() - entryTime;
    const TARGET_MS = 37000;
    const remaining = Math.max(TARGET_MS - elapsed, 0);

    const triggerPopup = () => {
      if (!sessionStorage.getItem('discreetClosed')) {
        setIsDiscreetVisible(true);
      }
    };

    // --- DESKTOP: Mouse Sai ---
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) triggerPopup();
    };

    // --- MOBILE SCROLL INTENT ---
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const distance = lastScrollY - currentScrollY; 
      const timeDiff = currentTime - lastScrollTime;
      
      if (distance > 50 && timeDiff > 0 && timeDiff < 100) triggerPopup();
      
      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    const timer = setTimeout(triggerPopup, remaining);

    document.addEventListener('mouseleave', handleExitIntent);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleCloseDiscreet = () => {
    setIsDiscreetVisible(false);
    sessionStorage.setItem('discreetClosed', 'true');
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

  if (!isDiscreetVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1a1a1a] text-white p-4 shadow-[0_-4px_25px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom duration-500 border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {status === 'success' ? (
          <div className="w-full flex items-center justify-between gap-4">
            <div className="flex-1 flex flex-col md:flex-row items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mb-2 md:mb-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg text-green-400">Guia a caminho! 🚀</h3>
                <p className="text-sm text-gray-300">
                  <span className="font-bold text-[#FFD700]">⚠️ SPAM:</span> Se não chegar em 1 minuto, olhe lá!
                </p>
              </div>
            </div>
            <button 
              onClick={handleCloseDiscreet}
              className="p-2 ml-2 bg-gray-800 hover:bg-gray-700 rounded transition-colors self-start md:self-auto"
              aria-label="Fechar"
            >
              <X size={24} strokeWidth={2} />
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 text-center md:text-left text-sm md:text-base font-medium">
              🎁 <strong className="text-[#FFD700]">Guia Grátis:</strong> Aprenda a comprar parafusadeira PRO pelo preço de Hobby.
            </div>
            
            <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-2 flex-shrink-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail aqui"
                className="w-full sm:w-64 px-4 py-2 bg-white text-gray-900 placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-sm shadow-inner"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting' || !isValidEmail}
                className="w-full sm:w-auto bg-[#FFD700] hover:bg-[#ffcd38] text-black font-bold py-2 px-6 rounded text-sm transition-colors whitespace-nowrap disabled:opacity-50"
              >
                {status === 'submitting' ? '...' : 'VER MODELOS PRO'}
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
