import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Nome do cliente',
    rating: 5,
    service: 'Troca de óleo',
    text: 'Texto da avaliação real será inserido aqui. Atendimento claro, serviço bem executado e equipe cuidadosa com o veículo.',
    googleReviewUrl: 'INSERIR_LINK_DA_AVALIACAO_AQUI',
  },
  {
    name: 'Nome do cliente',
    rating: 5,
    service: 'Revisão preventiva',
    text: 'Texto da avaliação real será inserido aqui. Diagnóstico preciso e explicação transparente antes da aprovação do serviço.',
    googleReviewUrl: 'INSERIR_LINK_DA_AVALIACAO_AQUI',
  },
  {
    name: 'Nome do cliente',
    rating: 5,
    service: 'Freios',
    text: 'Texto da avaliação real será inserido aqui. Serviço entregue no prazo combinado e com atenção aos detalhes de segurança.',
    googleReviewUrl: 'INSERIR_LINK_DA_AVALIACAO_AQUI',
  },
  {
    name: 'Nome do cliente',
    rating: 5,
    service: 'Suspensão',
    text: 'Texto da avaliação real será inserido aqui. Atendimento profissional, orçamento bem explicado e resultado confiável.',
    googleReviewUrl: 'INSERIR_LINK_DA_AVALIACAO_AQUI',
  },
  {
    name: 'Nome do cliente',
    rating: 5,
    service: 'Injeção eletrônica',
    text: 'Texto da avaliação real será inserido aqui. Problema identificado com scanner e resolvido de forma objetiva.',
    googleReviewUrl: 'INSERIR_LINK_DA_AVALIACAO_AQUI',
  },
  {
    name: 'Nome do cliente',
    rating: 5,
    service: 'Ar-condicionado',
    text: 'Texto da avaliação real será inserido aqui. Equipe atenciosa, oficina organizada e comunicação simples pelo WhatsApp.',
    googleReviewUrl: 'INSERIR_LINK_DA_AVALIACAO_AQUI',
  },
];

const getVisibleCount = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export default function Avaliacoes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(reviews.length - visibleCount, 0);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const visibleReviews = useMemo(
    () => reviews.slice(activeIndex, activeIndex + visibleCount),
    [activeIndex, visibleCount]
  );

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? maxIndex : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  return (
    <section id="avaliacoes" className="bg-gradient-to-b from-brand-gray-light to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="red-line" />
              <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
                Avaliações
              </span>
            </div>
            <h2 className="section-title max-w-lg">
              O que os clientes dizem sobre a Maypam
            </h2>
          </div>
          <div className="surface-card flex items-center gap-3 px-5 py-4 lg:flex-shrink-0">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-brand-dark">5,0</span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-brand-gray-border" />
            <div>
              <p className="text-sm font-semibold text-brand-dark">Google Meu Negócio</p>
              <p className="text-xs text-brand-gray-text mt-0.5">Avaliações de clientes reais</p>
            </div>
          </div>
        </div>

        <p className="surface-card mb-8 max-w-2xl border-l-4 border-l-brand-red bg-white/80 p-4 text-sm italic text-brand-gray-text">
          "A confiança dos clientes é construída com atendimento claro, serviço bem feito e comprometimento com o resultado."
        </p>

        <div className="relative">
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-dark shadow-lg shadow-black/15 ring-1 ring-brand-gray-mid transition-colors hover:bg-brand-red hover:text-white sm:-left-5"
            aria-label="Ver avaliações anteriores"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review, idx) => (
              <article
                key={`${review.name}-${activeIndex + idx}`}
                className="surface-card surface-card-hover flex min-h-[310px] flex-col p-5 sm:p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-0.5" aria-label={`${review.rating} estrelas`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                  <Quote size={22} className="text-brand-red/20 flex-shrink-0" />
                </div>
                <p className="mb-5 flex-1 text-[13.5px] leading-relaxed text-brand-gray-text italic">
                  "{review.text}"
                </p>
                <div className="border-t border-brand-gray-mid pt-4">
                  <p className="text-[13px] font-bold text-brand-dark">{review.name}</p>
                  <p className="mt-1 inline-flex rounded-full bg-brand-red/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-red">
                    {review.service}
                  </p>
                  <a
                    href={review.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-brand-red transition-colors hover:text-brand-red-dark"
                  >
                    Ver avaliação no Google
                    <ExternalLink size={13} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-dark shadow-lg shadow-black/15 ring-1 ring-brand-gray-mid transition-colors hover:bg-brand-red hover:text-white sm:-right-5"
            aria-label="Ver próximas avaliações"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <p className="text-center text-xs text-brand-gray-text mt-8">
          Substitua os campos googleReviewUrl pelos links reais de cada avaliação no Google Maps.
        </p>
      </div>
    </section>
  );
}
