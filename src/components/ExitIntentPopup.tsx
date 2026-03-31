import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const popupRef = useRef<HTMLDivElement>(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  useEffect(() => {
    // Se já mostrou nesta sessão, não faz nada
    const hasShown = sessionStorage.getItem('exitIntentShown');
    if (hasShown) return;

    // Marca o instante em que o usuário entrou no site pela primeira vez
    if (!sessionStorage.getItem('siteEntryTime')) {
      sessionStorage.setItem('siteEntryTime', String(Date.now()));
    }

    // Calcula quanto tempo já se passou desde a entrada no site
    const entryTime = Number(sessionStorage.getItem('siteEntryTime'));
    const elapsed = Date.now() - entryTime;
    const TARGET_MS = 37000; // 37 segundos
    const remaining = Math.max(TARGET_MS - elapsed, 0);

    // --- DESKTOP: mouse sai da página ---
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) showPopup();
    };

    // --- MOBILE + DESKTOP: timer baseado no tempo restante ---
    const timer = setTimeout(() => {
      showPopup();
    }, remaining);

    document.addEventListener('mouseleave', handleExitIntent);

    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
      clearTimeout(timer);
    };
  }, []);

  const showPopup = () => {
    if (sessionStorage.getItem('exitIntentShown')) return;
    setIsVisible(true);
    sessionStorage.setItem('exitIntentShown', 'true');
  };

  const handleClose = () => setIsVisible(false);

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
        setTimeout(() => setIsVisible(false), 4000);
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        ref={popupRef}
        className="relative w-full max-w-lg bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 border border-gray-800"
      >
        {/* Botão Fechar — grande e visível */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 z-50 text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-full p-2.5 shadow-lg transition-colors"
          aria-label="Fechar"
        >
          <X size={22} strokeWidth={3} />
        </button>

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

        {/* 3. Parte de Baixo: Formulário e Chamada */}
        <div className="p-8 pt-2 bg-[#1a1a1a] text-center">
          {status === 'success' ? (
            <div className="py-6 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-bold text-xl">Pronto! Verifique seu e-mail em instantes.</p>
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
                className="w-full bg-[#FFD700] hover:bg-[#ffcd38] text-black font-black py-5 px-6 rounded-lg text-lg uppercase tracking-tighter transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-[0_4px_15px_rgba(255,215,0,0.3)]"
              >
                {status === 'submitting' ? 'Enviando...' : 'QUERO MEU EBOOK GRÁTIS'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
