import React from 'react';
import { BunnerDoMeio } from './BunnerDoMeio';

export const ComoTrocarOMandrilDaFuradeira: React.FC = () => {
  return (
    <>
        {/* Hero Section */}
        <div className="relative bg-[#1a1a1a] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog/melhor-parafusadeira-custo-beneficio/como-trocar-o-mandril-da-furadeira_.webp" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Como Trocar o Mandril da Furadeira:<br/>
              <span className="text-[#FFD700]">(Passo a Passo Simples)</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <span>Por</span>
                <a href="/author/andre-carvalho/" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors font-semibold group">
                  <img 
                    src="/images/autores/andre-carvalho.webp" 
                    alt="Andre carvalho" 
                    className="w-8 h-8 rounded-full border-2 border-[#FFD700] group-hover:scale-110 transition-transform"
                    onError={(e) => { e.currentTarget.src = "/images/autores/default.webp"; }}
                  />
                  Andre carvalho
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="space-y-6 prose prose-lg max-w-none text-gray-700 mb-12">
            <p className="lead text-xl md:text-2xl font-medium text-gray-800 mb-8">
              Trocar o mandril da furadeira pode parecer uma tarefa complexa, mas na verdade é um processo simples e rápido.
            </p>
            <p>
              Seja para substituir uma peça danificada ou para adaptar a ferramenta a diferentes tipos de brocas, entender como fazer essa troca corretamente é fundamental para manter sua furadeira em ótimo estado.
            </p>
            <p>
              Neste artigo, vamos te guiar em um passo a passo descomplicado para que você consiga realizar essa troca facilmente.
            </p>
          </div>

          <BunnerDoMeio />

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">O que é e para que serve o mandril?</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>O mandril é a peça da furadeira que fixa brocas e acessórios, permitindo trocas rápidas e seguras.</p>
              <p>Usado em perfurações em madeira, metal e alvenaria, também aceita acessórios de aparafusamento.</p>
              <p>Escolher o mandril adequado melhora desempenho, precisão, evita escorregamento e suporta forças da operação, garantindo durabilidade e segurança.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Tipos de mandril para furadeira</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Mandris variam: mandril com chave (fixação firme), sem chave (troca rápida) e mandril de impacto (mais resistente para materiais duros); escolha conforme projeto.</p>
              
              <h3 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">Mandril de aperto com chave</h3>
              <p>Mandril de aperto com chave: ferramenta robusta e precisa, oferece fixação firme e segura para brocas maiores ou materiais duros.</p>
              <p>Requer chave para troca, aumentando segurança apesar de demandar mais tempo.</p>

              <h3 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">Mandril de aperto rápido</h3>
              <p>Mandril de aperto rápido permite trocar brocas com as mãos, sem chave, acelerando o trabalho.</p>
              <p>É prático para trocas frequentes e oferece boa firmeza, embora possa não ser ideal em materiais muito duros.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Quando trocar o mandril?</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Troque o mandril quando a broca não fixar corretamente, causando furos imprecisos ou perigo.</p>
              <p>Substitua se houver desgaste visível, rachaduras, dentes gastos, ferrugem, travamentos ou ruídos anormais.</p>
              <p>A troca também é necessária para compatibilidade com brocas ou acessórios de diâmetro diferente.</p>
              <p>Nesses casos você vai precisar de um novo mandril, <a href="/qual-melhor-mandril-para-furadeira/" className="text-blue-600 hover:underline font-medium">aqui tem uma lista com os melhores mandris</a> para te ajudar.</p>
              <p>Em projetos com materiais variados, um mandril adequado garante segurança, eficiência e qualidade do trabalho.</p>
            </div>
          </section>

          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Como trocar o mandril de furadeira: passo a passo</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Trocar o mandril exige atenção à segurança e ao método correto.</p>
              <p>A seguir, você verá as formas de fazer isso tanto sem abrir a furadeira quanto acessando o interior do equipamento.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Sem abrir a furadeira</h2>
            <div className="w-full mb-8">
               <img src="/images/blog/melhor-parafusadeira-custo-beneficio/trocar-o-mandril-sem-abrir-a-furadeira.webp" alt="Sem abrir a furadeira" className="w-full h-auto rounded-lg shadow-md" loading="lazy" />
            </div>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Para trocar o mandril sem abrir a furadeira, desligue-a da fonte de energia.</p>
              <p>Insira uma chave Allen no centro do eixo e gire para travá-lo.</p>
              <p>Com a chave de mandril, encaixe-a nos orifícios das castanhas e gire no sentido horário, dividindo a compressão entre os pontos para evitar danos.</p>
              <p>Aplique pressão firme e controlada para soltar o mandril antigo.</p>
              <p>Limpe a haste com um pano seco antes de instalar o novo mandril.</p>
              <p>Rosqueie-o manualmente no sentido horário até ficar firme, depois use a chave Allen para travar e apertar definitivamente.</p>
              <p>Assim a troca é segura e eficiente.</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6 border-l-4 border-[#FFD700] pl-4">Com a furadeira aberta</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Troque o mandril com a furadeira desconectada da energia e a carcaça aberta para melhor acesso.</p>
              <p>Remova a tampa, solte o mandril com chave adequada; se estiver preso por desgaste ou corrosão, aplique lubrificante.</p>
              <p>Verifique peças internas, alinhe engrenagens e fixações ao instalar o novo mandril e aperte com firmeza.</p>
              <p>Se usar torno e alicate de pressão, proteja com borracha.</p>
              <p>Feche a carcaça e teste em baixa velocidade antes de uso intenso.</p>
            </div>
          </section>

          <BunnerDoMeio />

          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8">Dicas extras para trocar o mandril da furadeira</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none">
              <p>Desconecte a furadeira antes de qualquer procedimento para garantir segurança.</p>
              <p>Antes de instalar o novo mandril, teste o conjunto em um material semelhante ao que será usado para confirmar o funcionamento.</p>
              <p>A seguir, você encontrará orientações específicas sobre lubrificação, cuidado no manuseio da peça e escolha de um mandril de qualidade.</p>
              
              <h3 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">Lubrifique o mandril</h3>
              <p>Lubrifique o mandril aplicando uma fina camada de lubrificante (silicone ou grafite) nas partes móveis e roscas.</p>
              <p>Antes da troca, use óleo desengripante e gire o mandril para distribuir.</p>

              <h3 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">Não force a peça</h3>
              <p>Ao trocar o mandril da furadeira, não force a peça.</p>
              <p>Use ferramentas adequadas, respeite o sentido de rosca, certifique-se de que está solto, lubrifique e não aperte em excesso para evitar danos e riscos.</p>
              <p>Utilizar um mandril de qualidade garante eficiência e segurança: evita falhas na fixação de brocas, escorregamentos e acidentes.</p>
              <p>Verifique abertura (⅜–½), tipo de encaixe (2, 18, 24, B, J) e especificações do fabricante.</p>
              <p>Mandril bem feito aumenta durabilidade, precisão e compatibilidade.</p>

              <h3 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">Não coloque um mandril incompatível com sua furadeira</h3>
              <p>Usar um mandril incompatível pode causar vibrações, folgas, travamentos e até danificar o eixo da furadeira.</p>
            </div>
          </section>

          <section className="mt-16 text-center border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Conclusão</h2>
            <div className="space-y-6 prose prose-lg text-gray-700 max-w-none mx-auto text-left md:text-center">
              <p>Trocar o mandril da furadeira é um processo simples quando você conhece o tipo de mandril, identifica o momento certo para substituí-lo e segue o método adequado.</p>
              <p>Com atenção aos passos de segurança e ao encaixe correto, a instalação do novo mandril se torna rápida e eficiente.</p>
              <p>Cuidar da lubrificação, evitar forçar a peça e escolher um modelo compatível garante melhor desempenho e prolonga a vida útil da furadeira.</p>
              <p>Seguindo essas orientações, você realiza a troca com segurança, precisão e sem complicações.</p>
            </div>
          </section>

        </div>
    </>
  );
};
