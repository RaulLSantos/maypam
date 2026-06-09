import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '554533068530';

const servicesOptions = [
  'Troca de óleo',
  'Revisão preventiva',
  'Freios',
  'Suspensão',
  'Motor',
  'Câmbio',
  'Injeção eletrônica',
  'Ar-condicionado automotivo',
  'Alinhamento e balanceamento',
  'Diagnóstico com scanner',
  'Outro',
];

interface FormData {
  nome: string;
  telefone: string;
  veiculo: string;
  servico: string;
  mensagem: string;
}

export default function Orcamento() {
  const [form, setForm] = useState<FormData>({
    nome: '',
    telefone: '',
    veiculo: '',
    servico: '',
    mensagem: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, Maypam Auto Center! Gostaria de solicitar um orçamento.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nVeículo: ${form.veiculo}\nServiço desejado: ${form.servico}\nMensagem: ${form.mensagem}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <section id="orcamento" className="bg-brand-gray-light py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="red-line" />
              <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">
                Orçamento
              </span>
            </div>
            <h2 className="section-title mb-5">
              Solicite um orçamento pelo WhatsApp
            </h2>
            <p className="text-brand-gray-text leading-relaxed mb-8">
              Preencha o formulário abaixo com os dados do seu veículo e o serviço desejado.
              Ao enviar, você será direcionado diretamente para o WhatsApp da Maypam com
              as informações já preenchidas.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Resposta rápida', desc: 'Nossa equipe retorna o orçamento em poucos minutos durante o horário de atendimento.' },
                { title: 'Orçamento sem compromisso', desc: 'Solicite o orçamento sem compromisso. Só aprovamos o serviço com sua confirmação.' },
                { title: 'Busca de veículos disponível', desc: 'Podemos buscar e entregar seu veículo mediante agendamento.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3 bg-white border border-brand-gray-border p-4">
                  <div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-[13.5px] font-bold text-brand-dark">{title}</p>
                    <p className="text-[12.5px] text-brand-gray-text mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-brand-dark p-5 flex items-center gap-3">
              <MessageCircle size={20} className="text-brand-yellow flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold">WhatsApp: (45) 3306-8530</p>
                <p className="text-white/50 text-xs mt-0.5">Atendimento presencial e online</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-brand-gray-border p-6 lg:p-8">
            <h3 className="text-lg font-bold text-brand-dark mb-6">Dados para orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12.5px] font-semibold text-brand-dark mb-1.5 uppercase tracking-wider">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                    className="w-full border border-brand-gray-border px-3 py-2.5 text-sm text-brand-dark placeholder:text-brand-gray-text/60 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12.5px] font-semibold text-brand-dark mb-1.5 uppercase tracking-wider">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    required
                    placeholder="(45) 9 9999-9999"
                    className="w-full border border-brand-gray-border px-3 py-2.5 text-sm text-brand-dark placeholder:text-brand-gray-text/60 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12.5px] font-semibold text-brand-dark mb-1.5 uppercase tracking-wider">
                  Veículo *
                </label>
                <input
                  type="text"
                  name="veiculo"
                  value={form.veiculo}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Ford Ka 2019, Fiat Uno 2015..."
                  className="w-full border border-brand-gray-border px-3 py-2.5 text-sm text-brand-dark placeholder:text-brand-gray-text/60 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>

              <div>
                <label className="block text-[12.5px] font-semibold text-brand-dark mb-1.5 uppercase tracking-wider">
                  Serviço desejado *
                </label>
                <select
                  name="servico"
                  value={form.servico}
                  onChange={handleChange}
                  required
                  className="w-full border border-brand-gray-border px-3 py-2.5 text-sm text-brand-dark focus:outline-none focus:border-brand-red transition-colors bg-white appearance-none"
                >
                  <option value="" disabled>Selecione o serviço</option>
                  {servicesOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[12.5px] font-semibold text-brand-dark mb-1.5 uppercase tracking-wider">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Descreva o problema ou detalhe o serviço necessário..."
                  className="w-full border border-brand-gray-border px-3 py-2.5 text-sm text-brand-dark placeholder:text-brand-gray-text/60 focus:outline-none focus:border-brand-red transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-whatsapp w-full justify-center text-sm py-3.5"
              >
                <Send size={16} />
                Enviar pelo WhatsApp
              </button>

              <p className="text-[11px] text-brand-gray-text text-center">
                Ao enviar, você será direcionado para o WhatsApp com as informações preenchidas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
