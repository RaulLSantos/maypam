import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Orçamento', href: '#orcamento' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-brand-gray-mid'
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="flex items-center justify-center w-9 h-9 bg-brand-red">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z" fill="white" opacity="0.3"/>
                <circle cx="12" cy="12" r="4" fill="white"/>
                <path d="M12 8V12L14.5 14.5" stroke="#CC1414" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block text-[15px] font-bold text-brand-dark tracking-tight group-hover:text-brand-red transition-colors">
                MAYPAM
              </span>
              <span className="block text-[10px] font-medium text-brand-gray-text tracking-widest uppercase">
                Auto Center
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-2 text-[13.5px] font-medium text-[#3A3A3A] hover:text-brand-red transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5545999386063"
              className="flex items-center gap-1.5 text-[13px] font-medium text-brand-gray-text hover:text-brand-red transition-colors"
            >
              <Phone size={14} />
              (45) 99938-6063
            </a>
            <a
              href="https://wa.me/5545999386063?text=Olá%2C+Maypam+Auto+Center!+Gostaria+de+solicitar+um+orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-brand-dark hover:text-brand-red transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-brand-gray-mid`}
      >
        <nav className="px-4 py-3 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="py-3 text-sm font-medium text-brand-dark border-b border-brand-gray-mid last:border-0 hover:text-brand-red transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="tel:+5545999386063"
              className="flex items-center gap-2 py-2.5 text-sm font-medium text-brand-gray-text"
            >
              <Phone size={15} />
              (45) 99938-6063
            </a>
            <a
              href="https://wa.me/5545999386063?text=Olá%2C+Maypam+Auto+Center!+Gostaria+de+solicitar+um+orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm text-center justify-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
