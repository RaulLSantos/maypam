import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'RAUL TESTESTEST',
    service: 'Troca de óleo e REVISAAAAOOOO',
    text: 'Avaliação real do Google será inserida aqui. Serviço realizado com excelência, equipe atenciosa e preço justo.',
    stars: 5,
  },
  {
    name: 'Nome do cliente',
    service: 'Suspensão e freios',
    text: 'Avaliação real do Google será inserida aqui. Diagnóstico preciso e serviço entregue no prazo combinado.',
    stars: 5,
  },
  {
    name: 'Nome do cliente',
    service: 'Injeção eletrônica',
    text: 'Avaliação real do Google será inserida aqui. Atendimento transparente e problema resolvido de forma definitiva.',
    stars: 5,
  },
];

export default function Avaliacoes() {
  return (
    <section id="avaliacoes" className="bg-brand-gray-light py-16 lg:py-24">
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
          <div className="bg-white border border-brand-gray-border px-5 py-4 flex items-center gap-3 lg:flex-shrink-0">
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

        <p className="text-brand-gray-text text-sm italic mb-10 border-l-2 border-brand-red pl-4 max-w-2xl">
          "A confiança dos clientes é construída com atendimento claro, serviço bem feito e comprometimento com o resultado."
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-gray-border p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <Quote size={20} className="text-brand-gray-border flex-shrink-0" />
              </div>
              <p className="text-[13.5px] text-brand-gray-text leading-relaxed mb-5 italic">
                "{review.text}"
              </p>
              <div className="pt-4 border-t border-brand-gray-mid">
                <p className="text-[13px] font-bold text-brand-dark">{review.name}</p>
                <p className="text-[12px] text-brand-red font-medium mt-0.5">{review.service}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-brand-gray-text mt-8">
          Avaliações reais serão adicionadas após publicação do perfil no Google Meu Negócio.
        </p>
      </div>
    </section>
  );
}
