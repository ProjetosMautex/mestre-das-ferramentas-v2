const fs = require('fs');
let code = fs.readFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/components/MelhorParafusadeiraParaMontarMoveis.tsx', 'utf8');

const startString = '          {/* FAQ */}';
const endString = '          {/* Tips */}';

const startIndex = code.indexOf(startString);
const endIndex = code.indexOf(endString);

if (startIndex >= 0 && endIndex > startIndex) {
    const before = code.substring(0, startIndex);
    const after = code.substring(endIndex);
    
    const newFaq = \          {/* FAQ Section - FORMATADO COMO ACORDEÃO EXPANSÍVEL */}
          <section className="mt-16 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4 text-center">Perguntas frequentes (FAQ)</h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Clique sobre cada pergunta abaixo para expandir a resposta e entender melhor os detalhes técnicos antes de comprar.</p>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-slate-800 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#FFD700] text-slate-900 flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                    {openFaq === index ? <ChevronUp className="text-slate-600 flex-shrink-0 ml-2" /> : <ChevronDown className="text-slate-600 flex-shrink-0 ml-2" />}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 pt-1 text-gray-600 border-t border-slate-100 animate-slideDown space-y-3">
                      {index === 0 && (
                        <div className="w-full flex justify-center mb-4 mt-2">
                           <img src="/images/blog/1/controle_torque.webp" alt="Anel de controle de torque de parafusadeira para montagem precisa em MDF sem espanar" title="Anel de controle de torque de parafusadeira para montagem precisa em MDF sem espanar" className="max-h-60 object-contain mix-blend-multiply rounded" loading="lazy" />
                        </div>
                      )}
                      {faq.answer.map((paragraph, pIndex) => (
                        <p key={pIndex} className="leading-relaxed text-sm">{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>\n\n\;

    code = before + newFaq + after;
    fs.writeFileSync('c:/Users/Murilo vieira/Documents/projetos/mestre-ferramentas - V2/src/components/MelhorParafusadeiraParaMontarMoveis.tsx', code, 'utf8');
    console.log('FAQ section replaced successfully without encoding issues.');
} else {
    console.log('Could not find start or end tags.');
}
