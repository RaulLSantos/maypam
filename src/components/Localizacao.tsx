import { Clock, MapPin, Navigation, Phone } from 'lucide-react';

const googleMapsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Av.+Assun%C3%A7%C3%A3o,+295+-+Alto+Alegre,+Cascavel+-+PR,+85805-055';

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="red-line" />
              <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
                Localização
              </span>
            </div>
            <h2 className="section-title mb-3">
              Encontre a Maypam Auto Center em Cascavel
            </h2>
            <p className="text-brand-gray-text leading-relaxed mb-8">
              Estamos localizados no bairro Alto Alegre, em Cascavel - PR, com fácil acesso.
              Atendemos clientes de toda a cidade e região.
            </p>

            <div className="space-y-4 mb-8">
              <div className="surface-card flex items-start gap-4 bg-brand-gray-light/70 p-4">
                <div className="w-9 h-9 rounded-lg bg-brand-red flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-brand-gray-text uppercase tracking-wider mb-1">Endereço</p>
                  <p className="text-[14px] font-medium text-brand-dark leading-snug">
                    Av. Assunção, 295 - Alto Alegre<br />
                    Cascavel - PR, 85805-055
                  </p>
                </div>
              </div>

              <div className="surface-card flex items-start gap-4 bg-brand-gray-light/70 p-4">
                <div className="w-9 h-9 rounded-lg bg-brand-red flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-brand-gray-text uppercase tracking-wider mb-1">Telefone / WhatsApp</p>
                  <a
                    href="tel:+5545999386063"
                    className="text-[14px] font-medium text-brand-dark hover:text-brand-red transition-colors"
                  >
                    (45) 99938-6063
                  </a>
                </div>
              </div>

              <div className="surface-card flex items-start gap-4 bg-brand-gray-light/70 p-4">
                <div className="w-9 h-9 rounded-lg bg-brand-red flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-brand-gray-text uppercase tracking-wider mb-1">Horário de atendimento</p>
                  <p className="text-[14px] font-medium text-brand-dark">
                    Segunda a Sexta: 08h às 18h<br />
                    Sábado: consultar disponibilidade
                  </p>
                </div>
              </div>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <Navigation size={16} />
              Como chegar
            </a>
          </div>

          <div className="media-frame group relative h-80 w-full cursor-pointer overflow-hidden bg-brand-gray-light lg:h-[460px]">
            <iframe
              title="Localização Maypam Auto Center - Cascavel PR"
              src="https://www.google.com/maps?q=Av.+Assun%C3%A7%C3%A3o+295+Alto+Alegre+Cascavel+PR&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir rota para a Maypam Auto Center no Google Maps"
              className="absolute inset-0 z-10 bg-transparent"
            />
            <span className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-dark shadow-lg shadow-black/15 transition-transform group-hover:-translate-y-0.5">
              <Navigation size={14} className="text-brand-red" />
              Abrir no mapa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
