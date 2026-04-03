import React, { useState } from 'react';

export const BunnerDoMeio: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

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

  // Se for sucesso, mostra apenas o card de agradecimento
  if (status === 'success') {
    return (
      <div className="w-full bg-[#1a1a1a] rounded-xl shadow-2xl border border-green-500/50 my-12 p-6 animate-in fade-in duration-500">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">Quase lá! Seu guia está a caminho. 🚀</h2>
            <p className="text-gray-300">Verifique sua caixa de entrada em instantes.</p>
            <div className="mt-4 p-3 bg-red-900/40 border border-red-500 rounded-lg max-w-xl mx-auto">
              <p className="text-[#FFD700] font-bold text-sm md:text-base tracking-wide leading-relaxed">
                ⚠️ IMPORTANTE: Se o e-mail não chegar em 1 minuto, ele pode ter caído por engano no SPAM ou em PROMOÇÕES.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Se não for sucesso, mostra o banner com o formulário
  return (
    <div className="w-full bg-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden border border-gray-800 my-12 p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-6">
        
        {/* Esquerda: Texto */}
        <div className="w-full md:flex-1 text-center md:text-left md:pl-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 md:mb-1 tracking-tight leading-tight">
            Espera um Pouco!
          </h2>
          <p className="text-[#FFD700] text-lg md:text-xl font-bold leading-tight">
            Você vai sair sem pegar isso?
          </p>
        </div>

        {/* Meio: Imagem */}
        <div className="flex-shrink-0 mx-0 md:mx-4">
             <img 
              src="/images/O Mapa das Parafusadeiras.webp" 
              alt="Ebook O Mapa das Parafusadeiras" 
              className="w-48 md:w-48 h-auto rounded shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
            />
        </div>

        {/* Direita: Formulário */}
        <div className="w-full max-w-sm md:flex-1 md:max-w-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Deixe aqui seu melhor email"
                className="w-full px-4 py-3 md:py-2 bg-white text-gray-900 placeholder-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-[#FFD700] text-base font-medium shadow-inner"
                required
              />
              
              <button
                type="submit"
                disabled={status === 'submitting' || !isValidEmail}
                className="w-full bg-[#FFD700] hover:bg-[#ffcd38] text-black font-black py-3 md:py-3 px-4 rounded text-base uppercase tracking-tighter transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-[0_2px_8px_rgba(255,215,0,0.3)] whitespace-nowrap"
              >
                {status === 'submitting' ? '...' : 'QUERO MEU EBOOK GRATIS'}
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};
