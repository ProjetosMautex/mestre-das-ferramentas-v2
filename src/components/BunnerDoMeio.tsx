import React, { useState } from 'react';

export const BunnerDoMeio: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1000);
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
            <h2 className="text-2xl font-extrabold text-white mb-2">Obrigado!</h2>
            <p className="text-gray-300">Seu guia exclusivo já foi enviado para o seu e-mail.</p>
          </div>
        </div>
      </div>
    );
  }

  // Se não for sucesso, mostra o banner com o formulário
  return (
    <div className="w-full bg-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden border border-gray-800 my-12 p-3 md:p-6">
      <div className="flex flex-row items-center justify-between gap-2 md:gap-6">
        
        {/* Esquerda: Texto */}
        <div className="flex-1 min-w-0 text-left">
          <h2 className="text-sm md:text-2xl font-extrabold text-white mb-1 tracking-tight leading-tight">
            Espera um Pouco!
          </h2>
          <p className="text-[#FFD700] text-xs md:text-lg font-bold leading-tight">
            Você vai sair sem pegar isso?
          </p>
        </div>

        {/* Meio: Imagem */}
        <div className="flex-shrink-0 mx-2">
             <img 
              src="/images/design/O Mapa das Parafusadeiras.jpg" 
              alt="Ebook O Mapa das Parafusadeiras" 
              className="w-20 md:w-32 h-auto rounded shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
            />
        </div>

        {/* Direita: Formulário */}
        <div className="flex-1 min-w-0 max-w-[200px] md:max-w-xs">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="w-full px-2 py-1.5 md:py-2 bg-white text-gray-900 placeholder-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-[#FFD700] text-xs md:text-base font-medium shadow-inner"
                required
              />
              
              <button
                type="submit"
                disabled={status === 'submitting' || !isValidEmail}
                className="w-full bg-[#FFD700] hover:bg-[#ffcd38] text-black font-black py-1.5 md:py-2 px-2 rounded text-[10px] md:text-sm uppercase tracking-tighter transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-[0_2px_8px_rgba(255,215,0,0.3)] whitespace-nowrap"
              >
                {status === 'submitting' ? '...' : 'QUERO GRÁTIS'}
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};
