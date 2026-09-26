const fs = require('fs');

const path = 'src/components/ParafusadeiraBoschGsr1000SmartEBoa.tsx';
let content = fs.readFileSync(path, 'utf8');

const sectionToRemove = `          <section className="mt-16">
            <h2 className="text-3xl font-extrabold text-slate-900 border-b-4 border-[#FFD700] pb-2 mb-6">Desempenho e Bateria Embutida</h2>
            
            <div className="w-full flex justify-center mb-8 mt-6">
                 <img src="/images/blog/1/Conceito técnico da bateria embutida de íons de lítio da Bosch.webp" alt="Conceito técnico da bateria embutida de íons de lítio da Bosch" title="Conceito técnico da bateria embutida de íons de lítio da Bosch" className="max-h-96 object-contain rounded-xl shadow-md" loading="lazy" />
            </div>

            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>A bateria fixa de íons de lítio altera completamente a pegada da ferramenta.</p>
              <p>Como o peso das células de energia fica distribuído no próprio cabo, a máquina não sofre com aquele desequilíbrio para frente, comum em parafusadeiras que usam baterias externas grandes na base.</p>
              <p>Essa distribuição inteligente de massa permite que você realize parafusamentos no teto ou acima da linha dos ombros sem forçar as articulações.</p>
              <p>Desde que você crie o hábito saudável de colocar o equipamento para carregar após cada sessão de reparos, a bateria interna funcionará por anos sem apresentar o temido efeito memória.</p>
            </div>
          </section>`;

if (content.includes(sectionToRemove)) {
    content = content.replace(sectionToRemove, '');
    fs.writeFileSync(path, content);
    console.log('Section successfully removed.');
} else {
    console.log('Section NOT FOUND. Check for minor whitespace differences.');
}
