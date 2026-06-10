import galeriaBoxesAtendimento from '../assets/galeria-boxes-atendimento.jpg';
import galeriaElevadoresAutomotivos from '../assets/galeria-elevadores-automotivos.jpg';
import galeriaEquipamentosTecnicos from '../assets/galeria-equipamentos-diagnostico.jpg';
import galeriaAreaAtendimento from '../assets/galeria-recepcao-atendimento.jpg';



const images = [
  {
    src: galeriaBoxesAtendimento,
    alt: 'Boxes de serviço da Maypam Auto Center',
    label: 'Boxes de atendimento',
  },
  {
    src: galeriaElevadoresAutomotivos,
    alt: 'Mecânico trabalhando em veículo levantado no elevador',
    label: 'Elevadores automotivos',
  },
  {
    src: galeriaEquipamentosTecnicos,
    alt: 'Ferramentas e equipamentos de diagnóstico',
    label: 'Equipamentos técnicos',
  },
  {
    src: galeriaAreaAtendimento,
    alt: 'Área de recepção e atendimento ao cliente',
    label: 'Área de atendimento',
  },
];

export default function Galeria() {
  return (
    <section className="bg-brand-dark py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-brand-red" />
              <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
                Estrutura
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Preparada para atender<br className="hidden md:block" /> seu veículo
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-xs md:text-right leading-relaxed">
            Conheça nossa estrutura equipada para diagnóstico, manutenção e reparos automotivos.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {images.map(({ src, alt, label }) => (
            <div key={label} className="group relative overflow-hidden aspect-[4/3]">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-xs font-semibold uppercase tracking-wider">{label}</span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="text-[11px] font-bold text-white bg-brand-red px-2 py-1 uppercase tracking-wider">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { value: '10+', label: 'Anos de mercado' },
            { value: '100%', label: 'Serviços com garantia' },
            { value: 'Cascavel', label: 'Alto Alegre - PR' },
          ].map(({ value, label }) => (
            <div key={label} className="border border-white/10 px-6 py-5 flex items-center gap-4">
              <span className="text-brand-yellow text-2xl font-bold">{value}</span>
              <span className="text-white/60 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
