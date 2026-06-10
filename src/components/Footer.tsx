import { useState } from 'react';
import { Phone, MapPin, Clock, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Orçamento', href: '#orcamento' },
];

const services = [
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
];

type ModalType = 'privacy' | 'terms' | null;

function PrivacyModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div
        className="bg-white max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:text-brand-red transition-colors">
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold text-brand-dark mb-4">Política de Privacidade</h2>
        <div className="text-sm text-brand-gray-text leading-relaxed space-y-4">
          <p><strong className="text-brand-dark">Maypam Auto Center</strong> — Última atualização: junho de 2025</p>
          <p>A Maypam Auto Center respeita a privacidade de seus clientes e visitantes. Esta política descreve como tratamos as informações coletadas neste site.</p>
          <h3 className="font-bold text-brand-dark">Informações coletadas</h3>
          <p>Este site pode coletar informações fornecidas voluntariamente pelo visitante por meio do formulário de orçamento, como nome, modelo do veículo e descrição do serviço desejado. Essas informações são utilizadas exclusivamente para fins de contato e prestação de serviços.</p>
          <h3 className="font-bold text-brand-dark">Uso das informações</h3>
          <p>As informações fornecidas são utilizadas para responder solicitações de orçamento, prestar atendimento ao cliente e melhorar nossos serviços. Não compartilhamos dados pessoais com terceiros para fins comerciais.</p>
          <h3 className="font-bold text-brand-dark">Cookies</h3>
          <p>Este site pode utilizar cookies técnicos para funcionamento adequado das páginas. Não utilizamos cookies de rastreamento para fins publicitários.</p>
          <h3 className="font-bold text-brand-dark">WhatsApp</h3>
          <p>Ao utilizar o formulário de orçamento, o visitante será direcionado ao WhatsApp da Maypam Auto Center. Esse redirecionamento é feito com consentimento explícito do usuário.</p>
          <h3 className="font-bold text-brand-dark">Contato</h3>
          <p>Dúvidas sobre esta política podem ser enviadas pelo WhatsApp (45) 99938-6063 ou presencialmente na Av. Assunção, 295 - Alto Alegre, Cascavel - PR.</p>
        </div>
      </div>
    </div>
  );
}

function TermsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div
        className="bg-white max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:text-brand-red transition-colors">
          <X size={20} />
        </button>
        <h2 className="text-xl font-bold text-brand-dark mb-4">Termos de Uso</h2>
        <div className="text-sm text-brand-gray-text leading-relaxed space-y-4">
          <p><strong className="text-brand-dark">Maypam Auto Center</strong> — Última atualização: junho de 2025</p>
          <p>Ao acessar e utilizar este site, você concorda com os termos abaixo.</p>
          <h3 className="font-bold text-brand-dark">Finalidade do site</h3>
          <p>Este site tem finalidade exclusivamente institucional e informativa. Destina-se à apresentação dos serviços da Maypam Auto Center, facilitação de contato e solicitação de orçamentos.</p>
          <h3 className="font-bold text-brand-dark">Informações de serviços</h3>
          <p>As descrições de serviços disponíveis neste site têm caráter informativo. Valores, prazos e disponibilidade devem ser confirmados diretamente com a equipe da Maypam pelo WhatsApp ou presencialmente.</p>
          <h3 className="font-bold text-brand-dark">Responsabilidade</h3>
          <p>A Maypam Auto Center não se responsabiliza por decisões tomadas com base exclusivamente nas informações deste site sem confirmação prévia da equipe técnica.</p>
          <h3 className="font-bold text-brand-dark">Propriedade intelectual</h3>
          <p>Todo o conteúdo deste site, incluindo textos, logotipo e identidade visual, é de propriedade da Maypam Auto Center e não pode ser reproduzido sem autorização.</p>
          <h3 className="font-bold text-brand-dark">Contato</h3>
          <p>Dúvidas sobre estes termos podem ser enviadas pelo WhatsApp (45) 99938-6063.</p>
        </div>
      </div>
    </div>
  );
}

const handleNavClick = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export default function Footer() {
  const [modal, setModal] = useState<ModalType>(null);

  return (
    <>
      <footer className="bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-brand-red flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="4" fill="white"/>
                    <path d="M12 8V12L14.5 14.5" stroke="#CC1414" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-bold tracking-tight">MAYPAM</p>
                  <p className="text-[10px] text-white/40 tracking-widest uppercase">Auto Center</p>
                </div>
              </div>
              <p className="text-white/50 text-[13px] leading-relaxed mb-5">
                Oficina mecânica em Cascavel com 10 anos de experiência, manutenção completa e garantia nos serviços.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin size={13} className="text-brand-red mt-0.5 flex-shrink-0" />
                  <span className="text-white/50 text-[12.5px]">Av. Assunção, 295 - Alto Alegre<br />Cascavel - PR, 85805-055</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-brand-red flex-shrink-0" />
                  <a href="tel:+5545999386063" className="text-white/50 text-[12.5px] hover:text-white transition-colors">
                    (45) 99938-6063
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-brand-red flex-shrink-0" />
                  <span className="text-white/50 text-[12.5px]">Seg–Sex: 08h às 18h</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-white/30 mb-4">Navegação</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-[13px] text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-white/30 mb-4">Serviços</h4>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s}>
                    <a
                      href="#servicos"
                      onClick={(e) => { e.preventDefault(); handleNavClick('#servicos'); }}
                      className="text-[13px] text-white/60 hover:text-white transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div>
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-white/30 mb-4">Atendimento</h4>
              <p className="text-white/50 text-[13px] leading-relaxed mb-5">
                Solicite orçamento, tire dúvidas ou agende seu atendimento diretamente pelo WhatsApp.
              </p>
              <a
                href="https://wa.me/5545999386063?text=Olá%2C+Maypam+Auto+Center!+Gostaria+de+solicitar+um+orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-[13px] font-semibold px-4 py-2.5 hover:bg-[#1EBE59] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.126 1.535 5.862L0 24l6.335-1.652A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.36-.214-3.732.979.999-3.645-.234-.373A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Falar no WhatsApp
              </a>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-brand-yellow" />
                  <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest">Desde 2014</span>
                </div>
                <p className="text-white/30 text-[11.5px]">10 anos servindo Cascavel e região</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-white/30 text-[12px]">
              &copy; {new Date().getFullYear()} Maypam Auto Center. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setModal('privacy')}
                className="text-white/30 text-[12px] hover:text-white/60 transition-colors"
              >
                Política de Privacidade
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setModal('terms')}
                className="text-white/30 text-[12px] hover:text-white/60 transition-colors"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </footer>

      {modal === 'privacy' && <PrivacyModal onClose={() => setModal(null)} />}
      {modal === 'terms' && <TermsModal onClose={() => setModal(null)} />}
    </>
  );
}
