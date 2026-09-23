import React, { useEffect } from 'react';
import { BunnerDoMeio } from './BunnerDoMeio';
import { ExitIntentPopup } from './ExitIntentPopup';

export const ComoUsarFuradeira = () => {
  useEffect(() => {
    document.title = "Como Usar Furadeira com Segurança Passo a Passo Completo - Mestre das Ferramentas";
  }, []);

  return (
    <div className="flex flex-col font-sans bg-gray-50">
      <div className="flex-grow">
        {/* Article Header */}
        <div className="bg-[#1a1a1a] border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Como Usar Furadeira com Segurança <br />
              <span className="text-[#FFD700]">Passo a Passo Completo</span>
            </h1>
            
            <div className="flex items-center justify-center text-gray-300 mb-8">
              <div className="flex items-center">
                <a href="/author/severino-torquato/" className="flex items-center hover:text-[#FFD700] transition-colors group">
                  <img 
                    src="/images/autores/severino-torquato.webp" 
                    alt="Severino Torquato" 
                    className="w-8 h-8 rounded-full border-2 border-[#FFD700] group-hover:scale-110 transition-transform mr-2"
                    onError={(e) => {
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Severino+Torquato&background=FFD700&color=1a1a1a";
                    }}
                  />
                  Severino Torquato
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg max-w-none text-gray-700">
            
            {/* Main Image generated according to instructions */}
            <div className="w-full flex justify-center mb-8">
              <img 
                src="/images/blog/1/passo-a-passo-furadeira.webp" 
                alt="Passo a passo de como usar furadeira em madeira, metal e parede com segurança"
                title="Passo a passo de como usar furadeira em madeira, metal e parede com segurança"
                width="800"
                height="533"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            <p className="mb-4">Quem nunca tentou pendurar um quadro no final de semana e acabou com um buraco na parede que mais parecia uma cratera?</p>
            <p className="mb-4">Eu vejo isso acontecer direto.</p>
            <p className="mb-4">Instalar uma prateleira ou consertar um armário exige jeito, não força.</p>
            <p className="mb-4">Muitas vezes, a frustração bate não porque a ferramenta é ruim, mas porque não entendemos como usá-la a nosso favor.</p>
            <p className="mb-4">Dominar a furadeira é o primeiro passo para ganhar autonomia em casa, economizando dinheiro com pequenos serviços e garantindo que o seu projeto de fim de semana não vire uma dor de cabeça na segunda-feira.</p>
            <p className="mb-8">Vou te mostrar o caminho para perder o medo e ganhar precisão, sem estragar as paredes ou queimar o motor.</p>



            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">O que é uma Furadeira e Como Funciona?</h2>
            <p className="mb-4">Se você olhar por dentro, a furadeira não é nenhum bicho de sete cabeças.</p>
            <p className="mb-4">O coração dela é um motor elétrico que gira uma peça na ponta chamada mandril — é ele quem morde e segura a broca no lugar.</p>
            <p className="mb-4">Quando você aperta o gatilho, a broca gira e raspa o material (seja madeira ou concreto) até abrir o furo.</p>
            <p className="mb-4">Entender isso é o pulo do gato.</p>
            <p className="mb-4">Se você empurrar a máquina com todo o seu peso contra a parede, o motor vai sofrer e a broca vai superaquecer.</p>
            <p className="mb-4">O segredo é deixar a rotação da máquina trabalhar por você.</p>
            <p className="mb-8">Quem faz a força bruta é a ferramenta, a sua mão está ali apenas para dar direção e firmeza.</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tipos de Furadeiras e suas Funções</h2>
            <p className="mb-4">Não adianta tentar abrir uma lata de tinta com uma faca de manteiga.</p>
            <p className="mb-4">Usar a ferramenta errada para o serviço é a receita certa para passar nervoso.</p>
            <p className="mb-4">Ao longo dos anos, vi muita gente queimar motor novo tentando furar viga de concreto com furadeira para madeira.</p>
            <p className="mb-4">O mercado criou modelos específicos justamente para facilitar a nossa vida e proteger o equipamento.</p>
            <p className="mb-4">Conhecer qual é a máquina certa para o seu tipo de reparo é a diferença entre terminar o serviço em dez minutos ou passar a tarde inteira brigando com a parede.</p>
            <p className="mb-8">Aliás, se você ainda não tem a sua ferramenta ou está pensando em fazer um upgrade, vale a pena conferir o nosso guia completo para escolher a <strong><a href="/melhor-furadeira/" className="text-blue-600 hover:text-blue-800 underline">melhor furadeira</a></strong> do mercado e não jogar dinheiro fora.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Furadeiras Elétricas</h3>
            <p className="mb-4">A velha de guerra que vai na tomada.</p>
            <p className="mb-4">Essa é a ferramenta que não te deixa na mão no meio de um projeto demorado, porque não depende de bateria.</p>
            <p className="mb-4">Ela tem o motor mais forte e aguenta o tranco se você precisar montar um guarda-roupa inteiro numa tarde.</p>
            <p className="mb-4">Para quem faz trabalhos esporádicos em casa, ela é fantástica porque você tira da gaveta depois de seis meses e ela está pronta para uso (diferente das baterias que descarregam sozinhas).</p>
            <p className="mb-8">É a escolha certeira para quem quer potência garantida sem se preocupar com recargas.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Furadeiras a Bateria</h3>
            <p className="mb-4">Se você precisa consertar o telhado, apertar o trinco do portão na rua ou enfiar a mão dentro do armário da pia, a furadeira a bateria é a melhor invenção.</p>
            <p className="mb-4">A ausência de cabos puxando a sua mão dá uma agilidade incrível para serviços rápidos e repetitivos.</p>
            <p className="mb-4">O cuidado aqui é com o bolso e a paciência.</p>
            <p className="mb-4">Modelos muito baratos vêm com baterias fracas que perdem força no meio do furo.</p>
            <p className="mb-4">Hoje em dia, o ideal é focar nas baterias de Íons de Lítio (elas não "viciam").</p>
            <p className="mb-8">É a máquina perfeita para ter sempre à mão na gaveta da cozinha para pequenos apertos.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Furadeiras de Impacto</h3>
            <p className="mb-4">Sabe aquela parede dura de concreto que não fura por nada?</p>
            <p className="mb-4">É aqui que entra a furadeira de impacto.</p>
            <p className="mb-4">Além de girar, ela tem uma engrenagem dentro que dá pequenos "soquinhos" para frente, em alta velocidade.</p>
            <p className="mb-4">É como se ela estivesse martelando e girando ao mesmo tempo.</p>
            <p className="mb-4">Essa função de impacto (geralmente marcada com o desenho de um martelinho no botão superior) quebra a resistência do tijolo e do cimento.</p>
            <p className="mb-8">Mas atenção: nunca ligue o impacto para furar madeira, cerâmica ou metal, senão você vai rachar o azulejo e estragar a sua broca em segundos.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Furadeiras de Bancada</h3>
            <div className="w-full flex justify-center mb-8">
              <img 
                src="/images/blog/1/furadeira-bancada.webp" 
                alt="Furadeira de bancada ideal para trabalhos de marcenaria de precisão e oficinas"
                title="Furadeira de bancada ideal para trabalhos de marcenaria de precisão e oficinas"
                width="800"
                height="533"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            <p className="mb-4">Dificilmente você vai ter uma dessas na área de serviço, mas se você faz artesanato ou marcenaria por hobby na garagem, ela muda o jogo.</p>
            <p className="mb-4">Ela fica presa numa base e desce a broca num ângulo perfeitamente reto, como uma guilhotina controlada.</p>
            <p className="mb-4">Ela elimina o famoso "furo torto" que a gente faz quando a mão treme.</p>
            <p className="mb-4">Serve para furar dobradiças de armário com precisão milimétrica ou fazer vários furos em sequência numa placa de metal.</p>
            <p className="mb-8">É um investimento para quem já passou dos consertos básicos e está criando peças do zero.</p>

            <div className="my-12">
              <BunnerDoMeio />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Escolhendo a Broca Certa para Cada Trabalho</h2>
            <p className="mb-4">Uma furadeira de mil reais com a broca errada não fura nem caixa de papelão direito.</p>
            <p className="mb-4">A broca é quem faz o trabalho sujo.</p>
            <p className="mb-4">Vejo muito iniciante usar a mesma broca que usou na parede para tentar furar o rack da sala, e o resultado é madeira lascada e prateleira estragada.</p>
            <p className="mb-4">Cada material exige uma ponta com um desenho diferente.</p>
            <p className="mb-8">Usar o conjunto certo vai deixar o seu trabalho mais fácil, o acabamento perfeito e ainda salva o motor da sua ferramenta de forçar à toa.</p>



            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Que broca usar para furar madeira?</h3>
            <p className="mb-4">Para a madeira não lascar e não estragar a pintura do seu móvel, você precisa da broca de três pontas.</p>
            <p className="mb-4">Ela tem um biquinho central bem afiado que funciona como um guia.</p>
            <p className="mb-4">Você espeta essa pontinha onde marcou com o lápis e ela trava, impedindo que a broca fuja para os lados quando o motor liga.</p>
            <p className="mb-8">O acabamento fica limpo, sem arrancar lascas das bordas do furo.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Que broca usar para furar metal</h3>
            <div className="w-full flex justify-center mb-8">
              <img 
                src="/images/blog/1/broca-aco-rapido-hss.webp" 
                alt="Broca de aço rápido HSS ideal para perfurar superfícies de metal com precisão"
                title="Broca de aço rápido HSS ideal para perfurar superfícies de metal com precisão"
                width="800"
                height="533"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            <p className="mb-4">Aqui a conversa é sobre calor.</p>
            <p className="mb-4">Furar metal gera muito atrito.</p>
            <p className="mb-4">Se você usar uma broca comum, a ponta derrete e fica cega no primeiro furo.</p>
            <p className="mb-4">A broca correta é a de Aço Rápido (HSS).</p>
            <p className="mb-4">Ela tem um formato espiral liso na ponta e aguenta o tranco térmico.</p>
            <p className="mb-4">Uma dica de quem já derreteu muita broca: pingue uma gotinha de óleo de máquina (ou até óleo de cozinha, num aperto) em cima do furo enquanto fura.</p>
            <p className="mb-8">Isso esfria o atrito e a broca corta muito mais rápido.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Que broca usar para furar parede de alvenaria</h3>
            <div className="w-full flex justify-center mb-8">
              <img 
                src="/images/blog/1/broca-videa-alvenaria.webp" 
                alt="Broca de vídea específica para furar parede de alvenaria, tijolo e concreto com segurança"
                title="Broca de vídea específica para furar parede de alvenaria, tijolo e concreto com segurança"
                width="800"
                height="533"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            <p className="mb-4">Para enfrentar concreto e tijolo, você precisa da broca de vídea.</p>
            <p className="mb-4">Se você olhar a ponta dela, vai ver que tem uma plaquinha soldada, parecendo uma espátula minúscula.</p>
            <p className="mb-4">Essa pecinha é de um metal superduro e não tem corte afiado; a função dela é "socos" e esfarelar a parede enquanto gira (usando a função martelete).</p>
            <p className="mb-8">Tentar furar parede com broca de metal lisa vai só arranhar a tinta e cegar a ferramenta.</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Como Colocar a Broca na Furadeira</h2>
            <div className="w-full flex justify-center mb-8">
              <img 
                src="/images/blog/1/como-colocar-broca.webp" 
                alt="Como utilizar a chave de mandril para apertar a broca da furadeira"
                title="Como utilizar a chave de mandril para apertar a broca da furadeira"
                width="800"
                height="533"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            <p className="mb-4">Colocar a broca torta no mandril faz a furadeira tremer igual britadeira e alarga o furo inteiro, estragando a bucha.</p>
            <p className="mb-4">Sempre tire a máquina da tomada antes de mexer.</p>
            <p className="mb-4">Abra a boca do mandril girando com a mão.</p>
            <p className="mb-4">Coloque a broca bem funda, garantindo que as "garras" do mandril peguem na parte lisa de trás da broca, não nas ranhuras.</p>
            <p className="mb-4">Aperte firme.</p>
            <p className="mb-8">Se sua máquina usar chavinha, encaixe a chave nos buraquinhos e dê um aperto final para a broca não patinar lá dentro.</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Equipamentos adicionais de segurança:</h2>
            <p className="mb-4">Não subestime o pozinho da parede.</p>
            <p className="mb-4">Quando você fura alvenaria na altura do rosto, aquele pó fino de cimento cai direto no seu olho.</p>
            <p className="mb-4">Óculos de proteção transparente (daqueles baratinhos de acrílico) não são frescura, são a diferença entre terminar o serviço rápido e parar no oftalmologista para tirar um cisco arranhando a córnea.</p>
            <p className="mb-4">Para pó de cimento, uma máscara simples de pano já salva o seu nariz.</p>
            <p className="mb-8">E evite usar luvas largas; o tecido pode enrolar no mandril girando e puxar a sua mão.</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Passo a Passo para Usar uma Furadeira</h2>
            <p className="mb-4">Fazer o furo certo não é encostar e apertar o botão com força.</p>
            <p className="mb-4">Tem um ritual simples que garante que o parafuso vai casar direitinho com a parede depois.</p>
            <p className="mb-8">Seguir essa ordem salva você de rachar os móveis ou achar um cano de água escondido atrás do azulejo do banheiro.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Preparação e Segurança</h3>
            <p className="mb-4">Primeiro, olhe bem onde vai furar.</p>
            <p className="mb-4">Vai furar parede de banheiro ou cozinha?</p>
            <p className="mb-4">Cuidado para não alinhar o furo na mesma direção da torneira ou do registro do chuveiro (cano de água passa reto nessas linhas).</p>
            <p className="mb-4">Marque o ponto com um lápis.</p>
            <p className="mb-8">Dica de ouro: cole um post-it dobrado embaixo do furo, na parede; ele funciona como uma "pazinha" e segura o pó, poupando você de varrer a casa inteira depois.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ajustando a Furadeira</h3>
            <p className="mb-4">Se a sua furadeira tiver controle de velocidade no gatilho, comece apertando bem de leve.</p>
            <p className="mb-4">Se você puxar o botão de uma vez, a broca dá um tranco e risca a parede inteira.</p>
            <p className="mb-4">Gire a chave de função: se for parede dura, coloque no desenho do martelinho (impacto).</p>
            <p className="mb-8">Se for madeira, metal ou cerâmica, deixe no desenho da broca lisa (sem impacto).</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Técnica de Perfuração</h3>
            <p className="mb-4">Na hora de furar, segure a máquina firme, como se estivesse segurando um copo cheio de água, para mantê-la reta.</p>
            <p className="mb-4">Se você entortar o pulso para cima ou para baixo, o furo vai ficar oval e a bucha vai ficar frouxa.</p>
            <p className="mb-4">Faça o furo devagar, puxando a broca para fora um pouquinho no meio do caminho para limpar o pó lá de dentro.</p>
            <p className="mb-8">Deixe a velocidade da máquina fazer o serviço; se você colocar muito peso, a broca entorta e quebra lá dentro.</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Usando a Furadeira para Diferentes Tarefas</h2>
            <p className="mb-4">Cada canto da casa pede um trato diferente.</p>
            <p className="mb-4">O jeito que você fura a placa do guarda-roupa não é o mesmo jeito que fura o tijolo da sala.</p>
            <p className="mb-8">Dominar o peso da mão para cada superfície é o que vai deixar o seu reparo com cara de serviço profissional.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Perfuração em Madeira</h3>
            <p className="mb-4">A madeira é mole, mas engana.</p>
            <p className="mb-4">Se você entrar com a broca muito rápido de uma vez só, quando ela vazar do outro lado da placa, vai arrancar uma lasca enorme (estourar o fundo).</p>
            <p className="mb-4">Para não lascar a saída, coloque um pedaço de madeira velha sobrando atrás da peça que está furando, para servir de "escoro".</p>
            <p className="mb-4">Assim a broca vaza limpa.</p>
            <p className="mb-8">Mantenha a máquina firme e deixe ela ir no tempo dela.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Perfuração em Metal</h3>
            <p className="mb-4">O metal assusta, mas é só ter paciência.</p>
            <p className="mb-4">Antes de ligar, pegue um prego grosso e dê uma batidinha com o martelo bem no ponto marcado, fazendo um "furinho guia".</p>
            <p className="mb-4">Isso impede a broca de ficar "sambando" no metal liso na hora de começar.</p>
            <p className="mb-4">Use a furadeira bem devagar, girando lento, e lembre do pingo de óleo.</p>
            <p className="mb-8">Se a broca esquentar demais e ficar azulada, ela estragou (destemperou).</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Perfuração em Concreto e Alvenaria</h3>
            <p className="mb-4">Aqui a força bruta não resolve, quem resolve é o martelinho (impacto).</p>
            <p className="mb-4">Marque o lugar.</p>
            <p className="mb-4">Se for no rejunte, ótimo, é mais mole.</p>
            <p className="mb-4">Se for furar o azulejo, um truque mestre: cole um pedaço de fita crepe em cima da marca antes de furar.</p>
            <p className="mb-4">Isso não deixa a broca lisa escorregar e arranhar o esmalte da cerâmica.</p>
            <p className="mb-8">Fure a cerâmica sem impacto; ligue o impacto só quando a broca passar do azulejo e alcançar o tijolo.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Como colocar um parafuso na madeira?</h3>
            <p className="mb-4">Tentar enfiar um parafuso grosso direto na madeira, na força, é a pior ideia: a madeira racha na hora.</p>
            <p className="mb-4">O segredo do marceneiro? Faça um "furo piloto" primeiro.</p>
            <p className="mb-4">Pegue uma broca bem mais fina que o parafuso e fure o caminho.</p>
            <p className="mb-4">Depois, você entra com o parafuso de mão (ou parafusadeira).</p>
            <p className="mb-8">Esse furinho guia tira a pressão de dentro da madeira e deixa o parafuso assentar firme sem trincar a peça.</p>

            <div className="my-12">
              <BunnerDoMeio />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Exemplos de Aplicações Comuns</h2>
            <p className="mb-8">A verdadeira utilidade de ter essa máquina na gaveta aparece naqueles probleminhas chatos de casa que a gente vai adiando por preguiça de chamar alguém.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Pendurar Quadros</h3>
            <p className="mb-4">Escolha a bucha certa.</p>
            <p className="mb-4">Para parede normal, a bucha universal tamanho 6 ou 8 resolve a vida.</p>
            <p className="mb-4">A dica é fazer o furo exatamente na profundidade da bucha (você pode enrolar uma fita crepe na broca para marcar a profundidade certa).</p>
            <p className="mb-8">Assim, a bucha não fica saltada para fora e o quadro não fica "bambo" encostado na parede.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Montagem de Móveis</h3>
            <p className="mb-4">Se for usar a ferramenta como parafusadeira para montar rack ou guarda-roupa, reduza a força dela no seletor da ponta (se ela tiver embreagem, coloque nos números menores).</p>
            <p className="mb-4">Isso é vital para não espanar o buraco da dobradiça da porta do armário.</p>
            <p className="mb-8">Apertou? O parafuso encostou na madeira? Pare de girar.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Instalação de Prateleiras</h3>
            <p className="mb-4">A grande bronca de prateleira é ficar torta.</p>
            <p className="mb-4">Nenhuma prateleira cai por falta de força na parede, mas sim porque furamos torto e a bucha fica folgada.</p>
            <p className="mb-4">Use um nível de mão baratinho (ou o app do celular) para marcar os pontos.</p>
            <p className="mb-4">Fure bem retinho.</p>
            <p className="mb-8">Se você colocar torto, a prateleira vai forçar só os parafusos de cima e acabar arrancando as buchas da parede com o tempo.</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Dicas de Manutenção e Armazenamento</h2>
            <p className="mb-4">Ferramenta largada jogada na área de serviço é dinheiro no lixo.</p>
            <p className="mb-4">A maresia (se você mora no litoral) ou a umidade debaixo do tanque travam o mandril em poucos meses.</p>
            <p className="mb-8">O zelo garante que a máquina esteja inteira quando aquele vazamento chato aparecer num domingo de noite.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Limpeza e Armazenamento</h3>
            <p className="mb-4">Bateu na parede? A ferramenta vai ficar cheia de pó branco de cimento, que puxa umidade e enferruja as peças de metal.</p>
            <p className="mb-4">Passe um pincel seco nela antes de guardar.</p>
            <p className="mb-4">Nunca jogue a ferramenta solta na caixa com chave de fenda e alicates roçando nela; guarde na maleta ou enrolada num pano grosso.</p>
            <p className="mb-8">Se o mandril (a boca) começar a ficar duro de girar, pingue um óleozinho desengripante nele e guarde assim.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Verificação de Componentes</h3>
            <p className="mb-4">Sempre dê uma olhada no cabo de tomada perto da base da furadeira (onde ele dobra mais).</p>
            <p className="mb-4">Ali o fio costuma quebrar por dentro se você enrolar muito apertado.</p>
            <p className="mb-4">Fio descascado ali dá choque na mão ou fecha curto.</p>
            <p className="mb-8">Trate o cabo com carinho, enrole soltinho ao redor da máquina e ela dura décadas.</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusão</h2>
            <div className="w-full flex justify-center mb-8">
              <img 
                src="/images/blog/1/dicas-manutencao-furadeira.webp" 
                alt="Dicas extras para uso seguro e prolongado da sua furadeira em casa"
                title="Dicas extras para uso seguro e prolongado da sua furadeira em casa"
                width="800"
                height="533"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
            <p className="mb-4">A diferença entre passar raiva arrumando a casa ou resolver o serviço em cinco minutos não é a força, é o conhecimento.</p>
            <p className="mb-4">Quando você entende que a broca de madeira não fura ferro, e que o azulejo pede fita crepe antes de furar, você deixa de ser o refém das diárias de manutenção.</p>
            <p className="mb-4">Com calma, óculos no rosto e a máquina firme na mão, você domina qualquer reparo que a sua casa pedir.</p>
            <p className="mb-8">Pegue sua furadeira, a bucha certa, aquele quadro que está encostado há meses e faça o seu primeiro furo do jeito correto hoje mesmo!</p>

          </div>
        </div>
      </div>
      <ExitIntentPopup />
    </div>
  );
};
