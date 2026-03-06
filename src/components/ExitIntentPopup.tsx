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
    const hasShown = sessionStorage.getItem('exitIntentShown');
    if (hasShown) return;

    // 1. Lógica para Desktop (Mouse saindo da tela)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) showPopup();
    };

    // 2. Lógica para Mobile (Volta ao navegador/aba)
    const handleVisibilityChange = () => {
      // Se a página estava escondida (user foi pra home/outra aba) e agora está visível
      if (document.visibilityState === 'visible') {
        showPopup();
      }
    };

    // 3. Lógica do Botão Voltar (Android/Browser Back)
    const handlePopState = () => {
      showPopup();
      // Reinserir o estado para evitar que o usuário saia na próxima tentativa sem o popup
      window.history.pushState({ exitIntent: true }, '', window.location.href);
    };

    // Inicialização do estado do histórico
    window.history.pushState({ exitIntent: true }, '', window.location.href);

    // Listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const showPopup = () => {
    // Verifica novamente o sessionStorage para não repetir se já foi disparado por outro evento
    if (sessionStorage.getItem('exitIntentShown')) return;
    
    setIsVisible(true);
    sessionStorage.setItem('exitIntentShown', 'true');
  };

  const handleClose = () => setIsVisible(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setIsVisible(false), 3000);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        ref={popupRef}
        className="relative w-full max-w-lg bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 border border-gray-800"
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 text-gray-400 hover:text-white transition-colors bg-black/40 rounded-full p-2"
        >
          <X size={20} />
        </button>

        <div className="p-6 text-center bg-gradient-to-b from-gray-900 to-[#1a1a1a]">
          <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
            Espera um Pouco!
          </h2>
          <p className="text-[#FFD700] text-lg font-bold leading-tight">
            Você vai sair sem pegar isso?
          </p>
        </div>

        <div className="px-10 pb-4 flex justify-center bg-[#1a1a1a]">
          <div className="relative group max-w-[240px]">
            <img 
              src="/images/design/O Mapa das Parafusadeiras.jpg" 
              alt="Ebook O Mapa das Parafusadeiras" 
              className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.2)] group-hover:scale-105 transition-transform duration-500"
              style={{ maxHeight: '350px', objectFit: 'contain' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/1024x1536/1a1a1a/FFD700?text=O+Mapa+das+Parafusadeiras';
              }}
            />
          </div>
        </div>

        <div className="p-8 pt-2 bg-[#1a1a1a] text-center">
          {status === 'success' ? (
            <div className="py-6 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white font-bold text-xl">Perfeito! Seu guia está a caminho.</p>
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