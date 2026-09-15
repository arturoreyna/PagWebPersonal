import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, GraduationCap, ArrowRight, BookOpen } from 'lucide-react';

interface HeaderProps {
  onOpenCodeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCodeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Perfil & Cátedra', href: '#perfil' },
    { name: 'Servicios de Consultoría', href: '#servicios' },
    { name: 'Talleres EdTech', href: '#talleres' },
    { name: 'Casos & Testimonios', href: '#casos' },
    { name: 'Publicaciones', href: '#publicaciones' },
    { name: 'Contacto Institucional', href: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update browser history without jump
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      {/* Top institutional strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-teal-400"></span>
            <span className="font-medium text-slate-200">Asesoría Académica de Alta Dirección Universitaria</span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-400">Transformación Digital & Acreditación</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline">Período Académico 2026: Convocatoria de Talleres Abierta</span>
            <button
              onClick={onOpenCodeModal}
              className="inline-flex items-center gap-1.5 font-medium text-teal-300 hover:text-teal-200 focus:outline-none focus:ring-1 focus:ring-teal-400 rounded px-1.5 py-0.5 transition-colors"
              aria-label="Abrir visor de código fuente y guía de despliegue"
            >
              <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Código Fuente & Despliegue</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Brand / Academic Signature */}
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, '#inicio')}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-lg p-1"
        >
          <div className="w-11 h-11 rounded-lg bg-slate-900 text-white flex items-center justify-center font-serif text-xl font-bold shadow-sm group-hover:bg-blue-800 transition-colors">
            LR
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-blue-900 transition-colors">
              Dr. Luis Arturo Reyna Fernández
            </span>
            <span className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-1">
              Docente • Consultor EdTech • Director Académico
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 rounded-md hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contacto"
            onClick={(e) => handleLinkClick(e, '#contacto')}
            className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium rounded-lg px-5 py-2.5 transition-all shadow-sm hover:shadow flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
          >
            <span>Agendar Asesoría</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-700"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-blue-700 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCodeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Code2 className="w-4 h-4 text-blue-700" aria-hidden="true" />
              <span>Ver Código Fuente (index.html + script.js)</span>
            </button>

            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg px-6 py-3 transition-all shadow-sm"
            >
              Agendar Asesoría Institucional
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
