import { CheckCircle2, MapPin } from 'lucide-react';
import sobreMecanicoServico from '../assets/sobre-mecanico-servico.jpg';
import sobreOficinaMaypam from '../assets/sobre-oficina-maypam.jpg';
import sobreFerramentasEquipamentos from '../assets/sobre-ferramentas-equipamentos.jpg';



const highlights = [
  '10 anos de atuação em Cascavel - PR',
  'Mecânicos experientes em múltiplas marcas e modelos',
  'Diagnóstico preciso antes de qualquer reparo',
  'Orçamento transparente sem surpresas',
  'Garantia em todos os serviços realizados',
  'Busca e entrega de veículos disponível',
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden aspect-[16/8]">
                <img
                  src={sobreFerramentasEquipamentos}
                  alt="Interior da Maypam Auto Center com área de trabalho organizada"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden aspect-square">
                <img
                  src={sobreOficinaMaypam}
                  alt="Ferramentas e equipamentos automotivos profissionais"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden aspect-square">
                <img
                  src={sobreMecanicoServico}
                  alt="Mecânico realizando serviço de manutenção automotiva"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-4 -right-4 bg-brand-red text-white p-5 shadow-xl">
              <p className="text-4xl font-bold leading-none">10</p>
              <p className="text-sm font-medium opacity-90 mt-1">anos de<br />experiência</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="red-line" />
              <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
                Quem somos
              </span>
            </div>

            <h2 className="section-title mb-6">
              Maypam Auto Center: oficina mecânica de confiança em Cascavel
            </h2>

            <p className="text-brand-gray-text leading-relaxed mb-5">
              A Maypam Auto Center é uma oficina mecânica em Cascavel com 10 anos de atuação,
              focada em manutenção automotiva, revisão, diagnóstico e reparos com atendimento
              técnico e garantia. A empresa atende clientes que valorizam confiança, clareza
              e um serviço bem executado.
            </p>

            <p className="text-brand-gray-text leading-relaxed mb-8">
              Localizada no bairro Alto Alegre, na Av. Assunção, 295, a Maypam conta com
              estrutura completa, equipe qualificada e comprometimento com a satisfação de
              cada cliente. Do carro popular ao veículo mais exigente, cada serviço é tratado
              com a mesma seriedade.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-[13.5px] text-brand-dark font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-brand-gray-mid">
              <div className="flex items-center gap-2 text-sm text-brand-gray-text">
                <MapPin size={15} className="text-brand-red flex-shrink-0" />
                Av. Assunção, 295 - Alto Alegre, Cascavel - PR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
