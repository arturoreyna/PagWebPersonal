import React from 'react';
import { ArrowUp, BookOpen, ShieldCheck, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800"
      aria-label="Pie de página institucional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Academic Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-blue-700 text-white flex items-center justify-center font-serif text-lg font-bold">
                LR
              </div>
              <div>
                <span className="font-serif text-base font-bold text-white block">
                  Dr. Luis Arturo Reyna Fernández
                </span>
                <span className="text-[11px] text-teal-400 font-medium tracking-wide uppercase">
                  Executive Academic & Higher Education Advisory
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Asesoría de alto nivel para rectorías, decanatos e instituciones de educación superior en modernización curricular, gobernanza de IA y ecosistemas de aprendizaje digital.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <p>• Ph.D. en Tecnología Educativa e Innovación Curricular</p>
              <p>• Evaluador de Comités de Acreditación Internacional</p>
              <p>• Catedrático e Investigador Senior Scopus / WoS</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#perfil" className="hover:text-white transition-colors">
                  Perfil & Cátedra Universitaria
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Consultoría Institucional
                </a>
              </li>
              <li>
                <a href="#talleres" className="hover:text-white transition-colors">
                  Talleres EdTech & Temarios
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-white transition-colors">
                  Casos de Éxito & Testimonios
                </a>
              </li>
              <li>
                <a href="#publicaciones" className="hover:text-white transition-colors">
                  Publicaciones Científicas
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto Directo
                </a>
              </li>
            </ul>
          </div>

          {/* Specialized Lines of Work */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Áreas de Intervención
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Acreditación Internacional (ABET / ANECA)</li>
              <li>• Arquitectura LMS / LXP (Canvas, Moodle)</li>
              <li>• Políticas y Ética de IA para Consejos</li>
              <li>• Learning Analytics & Retención</li>
              <li>• Diseño Curricular por Competencias</li>
              <li>• Microcredenciales & Open Badges</li>
            </ul>
          </div>

          {/* Academic & Professional Networks */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Redes Académicas
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn Profesional</span>
                </a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                >
                  <span>Google Scholar Citations</span>
                </a>
              </li>
              <li>
                <a
                  href="https://orcid.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                >
                  <span>ORCID: 0000-0002-8941-9231</span>
                </a>
              </li>
              <li>
                <a
                  href="https://researchgate.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                >
                  <span>ResearchGate Profile</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:arturoreyna74@gmail.com"
                  className="text-slate-300 hover:text-white flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>arturoreyna74@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with WCAG statement and Back to top */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Dr. Luis Arturo Reyna Fernández. Todos los derechos reservados.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Accesibilidad Web WCAG 2.1 AA Verificada</span>
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400"
            aria-label="Volver al inicio de la página"
          >
            <span>Subir al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
