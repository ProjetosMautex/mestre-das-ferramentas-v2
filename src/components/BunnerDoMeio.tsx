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
      <div className="w-full bg-green-50 rounded-xl border border-green-200 my-12 p-6 animate-in fade-in duration-500">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">Quase lá! Seu guia está a caminho. 🚀</h2>
            <p className="text-green-800">Verifique sua caixa de entrada em instantes.</p>
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg max-w-xl mx-auto text-left">
              <p className="text-red-800 font-bold text-sm tracking-wide leading-relaxed text-center">
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
    <div className="w-full bg-gray-50 rounded-xl border border-dotted border-gray-400 my-12 p-6 md:p-8 text-gray-800">
      <div className="flex flex-col items-center text-center gap-4">
        
        {/* Topo: Texto */}
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold mb-2 tracking-tight flex items-center justify-center gap-2">
            <span role="img" aria-label="ferramenta">🛠️</span> Dica Técnica: Fuja das parafusadeiras fracas
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra como escolher modelos profissionais pagando preço de hobby. Montei um guia que te ensina a não jogar dinheiro fora com parafusadeiras fracas.
          </p>
        </div>

        {/* Baixo: Formulário */}
        <div className="w-full max-w-md mt-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Deixe aqui seu melhor email"
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 placeholder-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-base shadow-sm"
                required
              />
              
              <button
                type="submit"
                disabled={status === 'submitting' || !isValidEmail}
                className="w-full bg-[#FFD700] hover:bg-[#ffcd38] text-black font-bold py-3 px-4 rounded text-base transition-colors disabled:opacity-50 shadow-sm"
              >
                {status === 'submitting' ? '...' : 'Me mostre os modelos profissionais'}
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};
