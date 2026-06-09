import { MessageCircle } from 'lucide-react';

export default function CTAFinal() {
  return (
    <section className="bg-brand-red py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-white/10 px-4 py-1.5 mb-6">
          <span className="text-white/80 text-[11px] font-semibold uppercase tracking-widest">
            Atendimento técnico e profissional
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
          Precisa de revisão, diagnóstico ou<br className="hidden md:block" /> manutenção para seu veículo?
        </h2>

        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-9 max-w-xl mx-auto">
          Entre em contato com a Maypam Auto Center e fale com a equipe pelo WhatsApp
          para solicitar orçamento ou agendar atendimento.
        </p>

        <a
          href="https://wa.me/554533068530?text=Olá%2C+Maypam+Auto+Center!+Gostaria+de+solicitar+um+orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-white text-brand-red font-bold px-8 py-4 text-[15px] hover:bg-brand-gray-light transition-colors active:scale-95"
        >
          <MessageCircle size={19} />
          Falar no WhatsApp
        </a>

        <p className="text-white/50 text-xs mt-6">
          Av. Assunção, 295 - Alto Alegre, Cascavel - PR &bull; (45) 3306-8530
        </p>
      </div>
    </section>
  );
}
