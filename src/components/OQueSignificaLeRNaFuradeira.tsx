import React from 'react';
import { BunnerDoMeio } from './BunnerDoMeio';

export const OQueSignificaLeRNaFuradeira: React.FC = () => {
  return (
    <>
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/melhor-parafusadeira-custo-beneficio/o-que-significa-l-e-r-na-furadeira_.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              O que significa L e R na furadeira?<br/>
              <span className="text-[#FFD700]">Guia simples e direto com exemplos</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span>Por</span>
                <a href="/author/severino-torquato/" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors font-semibold group">
                  <img 
                    src="/images/autores/severino-torquato.webp" 
                    alt="Severino Torquato" 
                    className="w-8 h-8 rounded-full border-2 border-[#FFD700] group-hover:scale-110 transition-transform"
                    onError={(e) => { e.currentTarget.src = "/images/autores/default.webp"; }}
                  />
                  Severino Torquato
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 mb-8">
              Quando você pega uma furadeira, pode notar letras como “L” e “R” em seus botões.
            </p>
            <p>
              Mas o que isso realmente significa?
            </p>
            <p>
              Entender essas siglas é essencial para usar sua ferramenta de maneira eficiente e segura. Neste guia, vamos explicar de forma simples o que L e R representam, como também mostrar exemplos práticos para que você possa aproveitar ao máximo sua furadeira em diferentes situações.
            </p>
          </div>

          <BunnerDoMeio />

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">O que são as letras L e R?</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>As letras L e R na furadeira indicam as direções de rotação.</p>
              <p><strong>L (left)</strong> gira para a esquerda e é usada para soltar parafusos ou peças rosqueadas, útil ao desmontar ou reverter montagens.</p>
              <p><strong>R (right)</strong> gira para a direita — configuração padrão para perfurar e apertar parafusos; R vem de “right”, palavra inglesa para direita.</p>
              <p>Saber alternar entre L e R é essencial para trabalhar de forma eficiente e segura, evitando danos à ferramenta e ao material durante montagem, reparo ou perfuração.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Como usar a furadeira na prática?</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Para <a href="/como-usar-parafusadeira/" className="text-blue-600 hover:underline font-medium">usar a parafusadeira</a> eficazmente, escolha a bitola e o tipo de broca adequados ao material.</p>
              <p>Antes de iniciar, ajuste a furadeira: “R” para perfurar e “L” para remover.</p>
              <p>Para perfuração, mantenha a posição “R”, posicione a broca perpendicular à superfície e aplique pressão constante, sem forçar.</p>
              <p>Use “L” para retirar parafusos ou trocar brocas ao encontrar resistência, evitando danos e economizando esforço.</p>
              <p>Ao usar o sentido inverso, verifique se a rosca não está muito presa para não danificar o material.</p>
              <p>Consulte o manual para ajustes específicos.</p>
              <p>Para prolongar a vida útil, limpe a furadeira após o uso e guarde-a em local seco e seguro.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Aplicações práticas de L e R</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>As direções L (esquerda) e R (direita) em uma furadeira têm usos práticos importantes.</p>
              <p>A rotação para L é indicada para afrouxar parafusos presos, enferrujados ou danificados, permitindo soltar peças sem danificar o material.</p>
              <p>Também facilita desmontagens e correções de montagem.</p>
              <p>A rotação para R é usada para perfurar e para apertar parafusos, garantindo fixação segura em madeira, metal e outros materiais.</p>
              <p>Alternar corretamente entre L e R acelera trabalhos, evita danos às peças e às ferramentas e é essencial em reparos domésticos e projetos de construção.</p>
            </div>
          </section>

          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">Exemplos de situações práticas</h2>
            <div className="w-full mb-8">
               <img src="/images/blog/melhor-parafusadeira-custo-beneficio/Exemplos-de-situacoes-praticas.webp" alt="Exemplos de situações práticas" className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
            </div>
            
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Em diversas tarefas, entender L (rotacionar à esquerda) e R (à direita) facilita o trabalho e aumenta a segurança.</p>
              <p>Ao restaurar móveis, usar L para soltar parafusos evita danos; ao montar móveis, usar R garante firmeza.</p>
              <p>Em encanamentos com roscas, R aperta conexões para evitar vazamentos, e L serve para desmontar.</p>
              <p>Em bricolagem, alternar L e R é comum — por exemplo, afrouxar para medir e depois apertar com R; ao fixar prateleiras, todos os parafusos devem ficar bem apertados.</p>
              <p>Em troca de pneus, usar a direção correta permite soltar ou apertar parafusos de modo eficiente.</p>
              <p>Assim, compreender L e R otimiza tarefas e aumenta a segurança ao usar furadeiras e chaves.</p>
            </div>
          </section>

          <BunnerDoMeio />

          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Dicas para um uso eficiente e seguro</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Para garantir uso eficiente e seguro da furadeira, siga dicas práticas: escolha a direção de rotação correta (L ou R) antes de perfurar ou desmontar, pois configuração errada compromete o trabalho.</p>
              <p>Verifique se a broca está bem presa e adequada ao material, evitando acidentes.</p>
              <p>Use equipamentos de proteção, como óculos e luvas, para prevenir cortes, fragmentos e faíscas.</p>
              <p>Realize manutenção periódica: limpeza após o uso e checagem de peças desgastadas.</p>
              <p>Se for iniciante, busque orientação de alguém experiente ou faça cursos.</p>
              <p>Assim você otimiza o trabalho e reduz riscos.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Como colocar a broca com o uso do botão L e R</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Para colocar a broca na furadeira usando os botões L e R, primeiro desconecte a ferramenta da energia.</p>
              <p>Localize o mandril e ajuste o botão L/R para a posição central ou de parada para facilitar a inserção.</p>
              <p>Se o mandril for sem chave, pressione R (direita) enquanto segura o mandril; isso faz girar no sentido horário e ajuda a travar a broca.</p>
              <p>Se for manual, gire o mandril no sentido anti-horário ou use L (esquerda) para abri-lo até acomodar a broca.</p>
              <p>Insira a broca na profundidade adequada e selecione R para travá-la com segurança.</p>
              <p>Verifique sempre se a broca está firme antes de ligar a furadeira para garantir segurança e eficiência.</p>
            </div>
          </section>

          <section className="mt-16 text-center border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Conclusão</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mx-auto text-left md:text-center">
              <p>Usar corretamente as posições L e R na furadeira garante eficiência e evita danos às peças e à ferramenta.</p>
              <p>Compreender cada função ajuda a executar tarefas com mais precisão, seja ao apertar, soltar ou perfurar materiais.</p>
              <p>Aplicar esse conhecimento no dia a dia melhora a segurança e torna o trabalho mais rápido e profissional.</p>
              <p>Com prática e atenção aos detalhes, qualquer pessoa consegue aproveitar todo o potencial da furadeira com confiança.</p>
            </div>
          </section>

        </div>
    </>
  );
};
