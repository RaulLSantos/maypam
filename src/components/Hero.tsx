import { ArrowRight, MessageCircle, Shield, Clock, Truck, Star } from 'lucide-react';
import heroImage from '../assets/hero-maypam-oficina.jpg';

const WHATSAPP_URL =
  'https://wa.me/5545999386063?text=Olá%2C+Maypam+Auto+Center!+Gostaria+de+solicitar+um+orçamento.';

const badges = [
  { icon: Clock, value: '10 anos', label: 'de mercado' },
  { icon: Shield, value: 'Garantia', label: 'nos serviços' },
  { icon: MessageCircle, value: 'Orçamento', label: 'online' },
  { icon: Truck, value: 'Busca', label: 'de veículos' },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-[70px]">
      <div className="grid lg:grid-cols-2 min-h-[580px] lg:min-h-[640px]">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-14 lg:py-16 bg-gradient-to-br from-white via-white to-brand-gray-light/70 order-2 lg:order-1">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-0.5 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
                Oficina Mecânica em Cascavel - PR
              </span>
            </div>

            <h1 className="text-[1.75rem] sm:text-[2.1rem] lg:text-[2.35rem] font-bold text-brand-dark leading-[1.2] mb-5 text-balance">
              Manutenção automotiva com diagnóstico preciso e{' '}
              <span className="text-brand-red">garantia no serviço</span>
            </h1>

            <p className="text-brand-gray-text text-base lg:text-[1.05rem] leading-relaxed mb-8 max-w-lg">
              A Maypam Auto Center oferece manutenção automotiva com diagnóstico preciso,
              mecânicos experientes e atendimento profissional para quem busca confiança
              e solução de verdade para o veículo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={17} />
                Solicitar orçamento
              </a>
              <button
                onClick={() => scrollToSection('#servicos')}
                className="btn-secondary"
              >
                Ver serviços
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Rating strip */}
            <div className="mt-8 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm shadow-black/5 ring-1 ring-brand-gray-mid">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <span className="text-sm text-brand-gray-text font-medium">
                Avaliação 5 estrelas no Google
              </span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative overflow-hidden order-1 lg:order-2 min-h-[280px] sm:min-h-[360px] lg:min-h-full lg:p-5">
          <div className="media-frame absolute inset-4 overflow-hidden lg:inset-5">
          <img
            src={heroImage}
            alt="Mecânico realizando manutenção em veículo na Maypam Auto Center"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute bottom-7 left-7 flex items-center gap-3 rounded-lg bg-white/95 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur">
            <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[11px] text-brand-gray-text font-medium uppercase tracking-wider">Garantia</p>
              <p className="text-[13px] font-bold text-brand-dark">em todos os serviços</p>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional badges bar */}
      <div className="bg-brand-dark border-b-4 border-brand-red shadow-xl shadow-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
            {badges.map(({ icon: Icon, value, label }) => (
              <div key={value} className="flex items-center gap-3 bg-brand-dark px-4 py-5 sm:px-8">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-brand-yellow" />
                </div>
                <div>
                  <p className="text-white font-bold text-[15px] leading-tight">{value}</p>
                  <p className="text-white/60 text-[12px] leading-tight">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
