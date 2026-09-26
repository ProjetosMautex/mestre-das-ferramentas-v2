const fs = require('fs');

const path = 'src/components/ParafusadeiraBoschGsr1000SmartEBoa.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove the first image
const imgToRemove1 = `          <div className="w-full flex justify-center mb-12">
             <img src="/images/blog/1/Parafusadeira Bosch GSR 1000 Smart sendo testada em reparo doméstico na prática.webp" alt="Parafusadeira Bosch GSR 1000 Smart sendo testada em reparo doméstico na prática" title="Parafusadeira Bosch GSR 1000 Smart sendo testada em reparo doméstico na prática" className="max-h-96 object-contain rounded-xl shadow-md" loading="lazy" />
          </div>`;
content = content.replace(imgToRemove1, '');

// 2. Replace ergonomia
content = content.replace(
  '/images/blog/1/Ergonomia e tamanho compacto da parafusadeira Bosch cabendo na palma da mão.webp',
  '/images/blog/1/Ergonomia e tamanho compacto da parafusadeira Bosch cabendo na palma da mão - Nova.webp'
);

// 3. Replace ficha tecnica
content = content.replace(
  '/images/blog/1/Ficha técnica e especificações da Bosch GSR 1000 Smart.webp',
  '/images/blog/1/Ficha técnica e especificações da Bosch GSR 1000 Smart - Nova.webp'
);

// 4. Replace led
content = content.replace(
  '/images/blog/1/Parafusadeira com luz LED integrada iluminando ambiente escuro de trabalho.webp',
  '/images/blog/1/Parafusadeira com luz LED integrada iluminando ambiente escuro de trabalho - Novo.webp'
);

// 5. Replace comparativo
content = content.replace(
  '/images/blog/1/Comparativo entre modelos de entrada - Bosch GSR 1000 Smart, GSR 12V-15 e Black+Decker LD12S.webp',
  '/images/blog/1/Comparativo entre modelos de entrada - Bosch GSR 1000 Smart, GSR 12V-15 e Black+Decker LD12S - Novo.webp'
);

// 6. Remove profile image from Conclusao
const profileImgToRemove = `            <div className="w-full flex justify-center mb-8 mt-6">
                <img src="https://secure.gravatar.com/avatar/e943d60be8f22e2b63f5a37b0513dd3eacfee87748c7e69330d318d34710d964?s=100&#038;d=mm&#038;r=g" alt="Severino Torquato" className="w-24 h-24 rounded-full border-4 border-[#FFD700] shadow-md" loading="lazy" />
            </div>`;
content = content.replace(profileImgToRemove, '');

// 7. Remove AuthorSeverinoTorquato
const authorToRemove = `            <div className="mt-8">
              <AuthorSeverinoTorquato />
            </div>`;
content = content.replace(authorToRemove, '');

// 8. Remove the second intro
const intro2ToRemove = `          <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mt-8">
            <p>Ao longo da minha trajetória, vi muita gente sofrer à toa tentando montar armários inteiros com chave de fenda manual ou, no extremo oposto, usando furadeiras pesadas de martelete que acabam esmagando a madeira de MDF.</p>
            <p>A Bosch GSR 1000 Smart consolidou-se como aquela escolha certeira de entrada para quem quer a precisão da engenharia alemã sem precisar carregar um trambolho.</p>
            <p>Ela foi pensada na medida certa para eliminar o desgaste físico em tarefas rotineiras, como regular dobradiças de armários, instalar trilhos de cortina ou montar mesas de centro.</p>
            <p>Se a sua meta é aposentar o esforço braçal e investir em uma ferramenta prática, confiável e com excelente custo-benefício para pequenos reparos caseiros, este modelo é um dos primeiros que você deve colocar no radar.</p>
          </div>`;
content = content.replace(intro2ToRemove, '');

// Save
fs.writeFileSync(path, content);
console.log('Done replacing strings.');
