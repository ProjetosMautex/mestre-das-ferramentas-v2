const fs = require('fs');
const path = 'src/components/ParafusadeiraBoschGsr1000SmartEBoa.tsx';
let content = fs.readFileSync(path, 'utf8');

const target1 = `          <section className="mt-16 pt-8 scroll-mt-24">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Avaliação dos consumidores</h3>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>As avaliações em lojas especializadas destacam com frequência a ergonomia e o alívio que o equipamento trouxe para o corpo.</p>
              <p>Pessoas com menos força nos pulsos relatam facilidade incomum para apertar parafusos difíceis sem machucar as mãos.</p>
              <p>As críticas negativas, quando surgem, vêm quase sempre de usuários que compraram a ferramenta esperando furar paredes de alvenaria densa — um erro comum de expectativa e falta de orientação técnica.</p>
              <p>Quando utilizada exatamente para aquilo que foi projetada, o índice de satisfação é altíssimo, com elogios constantes à durabilidade e precisão do kit.</p>
            </div>
          </section>`;

const target2 = `          <section className="mt-16">
            <h2 className="text-3xl font-extrabold text-slate-900 border-b-4 border-[#FFD700] pb-2 mb-6">Quem pode gostar?</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <ul className="list-disc list-inside space-y-2">
                <li>Entusiastas do faça você mesmo (DIY) que constroem ou customizam pequenos móveis de MDF e compensado;</li>
                <li>Pessoas que moram sozinhas ou famílias que desejam autonomia para fazer pequenos reparos sem depender de ajuda externa;</li>
                <li>Técnicos de informática, instaladores de segurança eletrônica e eletricistas que precisam fixar caixas e placas com agilidade;</li>
                <li>Usuários que buscam uma parafusadeira leve, fácil de guardar em armários e que não cause dores nos braços durante o uso.</li>
              </ul>
            </div>
          </section>`;

if (content.includes(target1)) {
    content = content.replace(target1, '');
    console.log('Target 1 removed.');
} else {
    console.log('Target 1 NOT FOUND.');
}

if (content.includes(target2)) {
    content = content.replace(target2, '');
    console.log('Target 2 removed.');
} else {
    console.log('Target 2 NOT FOUND.');
}

fs.writeFileSync(path, content);
console.log('Script completed.');
