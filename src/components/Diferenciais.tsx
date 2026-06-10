import { Users, Wrench, Shield, ScanLine, MessageSquare } from 'lucide-react';

const items = [
  {
    icon: Wrench,
    title: 'Oficina Completa',
    desc: 'Estrutura equipada com elevadores, ferramentas e tecnologia para atender todos os tipos de veículos.',
  },
  {
    icon: Users,
    title: 'Equipe Experiente',
    desc: 'Mecânicos com anos de prática em revisão, diagnóstico e reparos de diferentes marcas e modelos.',
  },
  {
    icon: ScanLine,
    title: 'Atendimento Técnico',
    desc: 'Cada serviço começa por uma avaliação técnica precisa, sem diagnósticos superficiais ou soluções provisórias.',
  },
  {
    icon: Shield,
    title: 'Garantia nos Serviços',
    desc: 'Todos os serviços realizados têm garantia. Trabalhamos com responsabilidade e comprometimento.',
  },
  {
    icon: ScanLine,
    title: 'Diagnóstico com Scanner',
    desc: 'Utilizamos scanner automotivo para leitura de falhas eletrônicas com precisão e agilidade.',
  },
  {
    icon: MessageSquare,
    title: 'Transparência no Atendimento',
    desc: 'Orçamento claro antes de iniciar qualquer serviço. Sem surpresas na hora de pagar.',
  },
];

export default function Diferenciais() {
  return (
    <section className="bg-gradient-to-b from-brand-gray-light to-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="red-line" />
            <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
              Por que escolher a Maypam
            </span>
          </div>
          <h2 className="section-title max-w-xl">
            Uma oficina preparada para resolver com responsabilidade
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="surface-card surface-card-hover group relative overflow-hidden p-6 lg:p-7"
            >
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-brand-red/[0.04]" />
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-brand-red/10 bg-brand-red/[0.06] transition-colors duration-200 group-hover:bg-brand-red">
                <Icon size={20} className="text-brand-red group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-[15px] font-bold text-brand-dark mb-2">{title}</h3>
              <p className="text-[13.5px] text-brand-gray-text leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
