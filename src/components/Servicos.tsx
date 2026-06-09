import {
  Droplets,
  ClipboardCheck,
  Disc,
  Settings,
  Zap,
  ArrowLeftRight,
  Cpu,
  Wind,
  Circle,
  ScanLine,
  BadgeCheck,
  MessageCircle,
} from 'lucide-react';

const servicos = [
  {
    icon: Droplets,
    name: 'Troca de Óleo',
    desc: 'Substituição do óleo do motor com filtro, seguindo especificações do fabricante para cada veículo.',
  },
  {
    icon: ClipboardCheck,
    name: 'Revisão Preventiva',
    desc: 'Verificação completa de fluidos, filtros, correias, freios e componentes essenciais do veículo.',
  },
  {
    icon: Disc,
    name: 'Freios',
    desc: 'Reparo e substituição de pastilhas, discos, tambores, fluido de freio e todo o sistema de frenagem.',
  },
  {
    icon: Settings,
    name: 'Suspensão',
    desc: 'Diagnóstico e reparo de amortecedores, buchas, molas e componentes da suspensão.',
  },
  {
    icon: Zap,
    name: 'Motor',
    desc: 'Retífica, reparos internos, substituição de juntas, vedações e componentes do motor.',
  },
  {
    icon: ArrowLeftRight,
    name: 'Câmbio',
    desc: 'Revisão, reparo e troca de fluido de câmbio manual e automático.',
  },
  {
    icon: Cpu,
    name: 'Injeção Eletrônica',
    desc: 'Limpeza, calibração e reparo de bicos, sensores e componentes do sistema de injeção.',
  },
  {
    icon: Wind,
    name: 'Ar-condicionado',
    desc: 'Manutenção completa do sistema de ar-condicionado: recarga de gás, higienização e reparo.',
  },
  {
    icon: Circle,
    name: 'Alinhamento e Balanceamento',
    desc: 'Correção de alinhamento e balanceamento para maior segurança e vida útil dos pneus.',
  },
  {
    icon: ScanLine,
    name: 'Diagnóstico com Scanner',
    desc: 'Leitura de falhas eletrônicas com equipamento de diagnóstico para identificação precisa de problemas.',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="red-line" />
              <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
                O que fazemos
              </span>
            </div>
            <h2 className="section-title max-w-lg">
              Serviços automotivos com técnica e responsabilidade
            </h2>
          </div>
          <p className="text-brand-gray-text text-sm lg:text-[15px] max-w-sm lg:text-right leading-relaxed">
            Atendemos veículos de todas as marcas e modelos com serviço técnico qualificado e garantia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0 border-l border-t border-brand-gray-border">
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-2 p-6 lg:p-8 bg-brand-gray-light border-r border-b border-brand-red/70 ring-1 ring-inset ring-brand-red/20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 h-1 w-full bg-brand-red" />
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-11 h-11 flex items-center justify-center bg-white border border-brand-red/30 group-hover:bg-brand-red transition-colors duration-200">
                  <BadgeCheck size={20} className="text-brand-red group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="inline-flex items-center border border-brand-red/30 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-red">
                  Serviço especializado
                </span>
              </div>

              <h3 className="text-[20px] lg:text-[22px] font-bold text-brand-dark mb-3 leading-tight">
                Troca de óleo de câmbio automático
              </h3>
              <p className="text-[13.5px] lg:text-sm text-brand-gray-text leading-relaxed">
                Substituição do fluido do câmbio automático com atenção às especificações do fabricante, ajudando a preservar o desempenho, reduzir desgastes e aumentar a vida útil do sistema.
              </p>
              <p className="mt-4 text-[12px] font-semibold text-brand-dark">
                Serviço técnico com mais segurança e cuidado para veículos automáticos.
              </p>

              <a
                href="https://wa.me/5545999386063?text=Ol%C3%A1%2C+gostaria+de+consultar+sobre+troca+de+%C3%B3leo+de+c%C3%A2mbio+autom%C3%A1tico."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 border border-brand-red bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-wide text-brand-red transition-colors duration-200 hover:bg-brand-red hover:text-white"
              >
                <MessageCircle size={15} />
                Consultar via WhatsApp
              </a>
            </div>
          </div>

          {servicos.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="p-6 border-r border-b border-brand-gray-border hover:bg-brand-gray-light transition-colors duration-200 group cursor-default"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-brand-gray-light border border-brand-gray-border mb-4 group-hover:bg-brand-red group-hover:border-brand-red transition-colors duration-200">
                <Icon size={17} className="text-brand-red group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-[14px] font-bold text-brand-dark mb-2 leading-snug">{name}</h3>
              <p className="text-[12.5px] text-brand-gray-text leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-brand-gray-light border border-brand-gray-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-brand-dark text-[15px]">Não encontrou o serviço que precisa?</p>
            <p className="text-brand-gray-text text-sm mt-0.5">Entre em contato e consulte disponibilidade com nossa equipe.</p>
          </div>
          <a
            href="https://wa.me/5545999386063?text=Olá%2C+gostaria+de+verificar+a+disponibilidade+de+um+serviço."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm whitespace-nowrap flex-shrink-0"
          >
            Consultar via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
