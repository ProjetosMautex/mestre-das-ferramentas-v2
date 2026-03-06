import React from 'react';
import { CheckCircle2, Clock, Smartphone, Mail, MapPin, Wrench, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const team = [
    {
      name: "Severino Torquato",
      role: "Técnico em Manutenção Residencial",
      image: "/images/autores/severino-torquato.webp",
      description: [
        "Sou o Severino Torquato, Técnico em Manutenção Residencial com mais de 20 anos de experiência no uso de ferramentas para trabalhos domésticos e projetos DIY.",
        "Ao longo da minha trajetória, já auxiliei desde famílias que precisavam de pequenos reparos até entusiastas que montam e personalizam seus próprios móveis.",
        "Minha especialidade é analisar ferramentas como parafusadeiras e furadeiras de uso leve, avaliando pontos como ergonomia, potência, praticidade e custo-benefício. Com esse conhecimento, consigo indicar os modelos ideais para quem busca eficiência em reparos rápidos, montagem de móveis e atividades do dia a dia, sempre de forma prática e acessível."
      ]
    },
    {
      name: "André Carvalho",
      role: "Especialista em Uso Profissional de Ferramentas",
      image: "/images/autores/andre-carvalho.webp",
      description: [
        "Sou o André Carvalho, Especialista em Uso Profissional de Ferramentas, com mais de 12 anos de experiência em obras, reformas e serviços de alta exigência. Minha atuação sempre esteve ligada a ambientes onde desempenho, resistência e confiabilidade das ferramentas fazem toda a diferença no resultado final.",
        "Minha especialidade é avaliar ferramentas como parafusadeiras, furadeiras e chaves de impacto em situações de uso intenso, analisando potência, autonomia, robustez e eficiência em trabalhos contínuos. Meu objetivo é ajudar profissionais da construção civil, montagem industrial e manutenção a escolherem equipamentos que aguentam a rotina pesada e entregam produtividade de verdade."
      ]
    },
    {
      name: "Mateus Ribeiro",
      role: "Marceneiro e Designer de Móveis Sob Medida",
      image: "/images/autores/mateus-ribeiro.webp",
      description: [
        "Sou o Mateus Ribeiro, Marceneiro e Designer de Móveis Sob Medida, com mais de 15 anos de experiência em projetos que vão desde móveis planejados até trabalhos de marcenaria artesanal. Minha trajetória começou cedo, em 2009, e desde então atuo tanto em oficinas quanto em projetos DIY avançados.",
        "Minha especialidade está em técnicas de parafusamento em diferentes tipos de madeira — como maciça, MDF e compensado — além de pré-furação, colagem e acabamento. Também realizo avaliações de ferramentas voltadas para marcenaria, sempre considerando precisão, durabilidade e eficiência. Com essa experiência, ajudo tanto profissionais quanto entusiastas a escolherem as melhores ferramentas para alcançar resultados de qualidade em seus projetos."
      ]
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-[#1a1a1a] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Sobre Nós</h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Seja bem-vindo ao <span className="text-[#FFD700] font-bold">Mestre das Ferramentas</span>!
          </p>
        </div>
      </section>

      {/* Introduction Completa */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed font-medium">
              Aqui, nosso objetivo é ajudar entusiastas do faça-você-mesmo, profissionais de manutenção, marceneiros, mecânicos e apaixonados por ferramentas a escolherem os equipamentos certos para cada necessidade.
            </p>
            <p>
              Se você procura uma parafusadeira leve para uso em casa, uma furadeira potente para reformas, ou até mesmo ferramentas profissionais de alto desempenho para oficina e construção, este é o lugar certo. Estamos aqui para orientar você de forma prática, honesta e técnica — sem enrolação.
            </p>
            <div className="bg-gray-50 border-l-8 border-[#FFD700] p-8 rounded-r-xl italic shadow-sm text-gray-800">
              "Cada artigo do site é escrito com base em vivência real: especialistas que testam, comparam e utilizam ferramentas diariamente em diferentes contextos — seja em trabalhos domésticos, marcenaria, serralheria, oficinas mecânicas ou obras profissionais."
            </div>
          </div>
        </div>
      </section>

      {/* O que você encontrará */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] inline-block border-b-4 border-[#FFD700] pb-2">
              O que você encontrará no site?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Reviews Técnicos", desc: "Análises baseadas em testes práticos, desempenho em uso real e comparações honestas.", icon: <Zap size={32} /> },
              { title: "Dicas Práticas", desc: "Orientações para aproveitar ao máximo sua ferramenta e aumentar a durabilidade.", icon: <Wrench size={32} /> },
              { title: "Guias Objetivos", desc: "Conteúdo claro para ajudar você a escolher o equipamento certo para sua rotina.", icon: <ShieldCheck size={32} /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#FFD700] hover:shadow-lg transition-all">
                <span className="text-[#FFD700] mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-20 text-center">Nossa Equipe de Especialistas</h2>
          <div className="space-y-24">
            {team.map((member, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="w-full md:w-2/5">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-[#FFD700] rounded-2xl blur opacity-20"></div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                        onError={(e) => {(e.target as HTMLImageElement).src = 'https://placehold.co/500x680/1a1a1a/FFD700?text=' + member.name.replace(' ', '+')}}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-3/5 text-left">
                  {/* Badge Removida aqui */}
                  <h3 className="text-4xl font-black text-[#1a1a1a] mb-2">{member.name}</h3>
                  <p className="text-gray-600 font-bold mb-6 text-lg border-l-4 border-[#FFD700] pl-4">
                    {member.role}
                  </p>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    {member.description.map((p, idx) => <p key={idx}>{p}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section Detalhada */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Por que confiar no Mestre das Ferramentas?</h2>
          <div className="grid gap-10">
            {[
              { title: "Especialização Prática", desc: "Nossa equipe é formada por especialistas com sólida experiência prática e conhecimento técnico em ferramentas elétricas. Conhecemos parafusadeiras e furadeiras no detalhe — tanto na teoria quanto no uso real." },
              { title: "Testes no Mundo Real", desc: "Não nos baseamos apenas em catálogos. Avaliamos desempenho, durabilidade, ergonomia e facilidade de uso em situações cotidianas e profissionais." },
              { title: "Independência Editorial", desc: "Não aceitamos patrocínios que interfiram nas avaliações. Nossas recomendações são imparciais e focadas no seu custo-benefício real." }
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-black">
                    <CheckCircle2 size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience & Sustainability Completa */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Para quem é este site</h2>
            <p className="text-gray-600 mb-6">Este site é feito para você que:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#FFD700] font-bold">✔</span>
                <span className="text-gray-700">Está comprando sua primeira parafusadeira ou furadeira.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFD700] font-bold">✔</span>
                <span className="text-gray-700">Quer entender qual modelo realmente vale o investimento.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFD700] font-bold">✔</span>
                <span className="text-gray-700">Já utiliza ferramentas e busca comparativos sérios e confiáveis.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Como o site se sustenta</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Para manter a independência e a qualidade do conteúdo, utilizamos <strong>links de afiliado</strong>. Quando você faz uma compra através desses links, recebemos uma pequena comissão — sem nenhum custo extra para você.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Esse modelo nos permite continuar oferecendo conteúdo técnico, confiável e totalmente imparcial, com foco total na experiência do usuário e na qualidade das informações.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Visão para o Futuro</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Nosso objetivo é continuar oferecendo conteúdo técnico, imparcial e de qualidade, garantindo que você tenha sempre à disposição informações confiáveis para fazer escolhas acertadas.
          </p>
          <p className="text-2xl font-bold text-[#1a1a1a]">
            🙌 Obrigado por fazer parte do Mestre das Ferramentas!
          </p>
        </div>
      </section>

      {/* Contact Section Detalhada */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
            <div className="bg-[#FFD700] p-12 md:w-1/3 flex flex-col justify-center text-black">
              <h2 className="text-3xl font-black mb-6 uppercase">Contato</h2>
              <p className="font-medium opacity-80">Estamos prontos para tirar suas dúvidas sobre ferramentas.</p>
            </div>
            <div className="p-12 md:w-2/3 grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#FFD700] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Endereço</h4>
                    <p className="text-gray-600 text-sm">Avenida dos Tamarindos, nº 214 – Centro – Petrolina, PE</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-[#FFD700] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">E-mail</h4>
                    <p className="text-gray-600 text-sm">contato@mestredasferramentas.com.br</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Smartphone className="text-[#FFD700] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Telefone</h4>
                    <p className="text-gray-600 text-sm">(87) 99641-2248</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#FFD700] mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Horário</h4>
                    <p className="text-gray-600 text-sm">Seg a Sex, 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};