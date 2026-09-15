import React from 'react';
import { ArrowRight, BookCheck, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ACADEMIC_PROFILE } from '../data/academicData';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800"
      aria-labelledby="hero-heading"
    >
      {/* Subtle architectural background styling */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Academic Credential Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span>Asesoría de Nivel Ejecutivo para Rectores, Decanos y Consejos Académicos</span>
            </div>

            {/* Display Headline in Playfair Display */}
            <h1
              id="hero-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Liderazgo Académico, Acreditación y Transformación EdTech en Educación Superior
            </h1>

            {/* Subheading / Executive Abstract */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Asesoría estratégica orientada al rediseño curricular por competencias, 
              modernización de campus virtuales con Inteligencia Artificial ética 
              y aseguramiento de la calidad ante agencias acreditadoras internacionales.
            </p>

            {/* Core Triple Identity Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" aria-hidden="true" />
                <span>Docente de Posgrado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" aria-hidden="true" />
                <span>Consultor Senior EdTech</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400" aria-hidden="true" />
                <span>Director Académico & Acreditador</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contacto"
                className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg px-6 py-3 transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span>Solicitar Asesoría Institucional</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#talleres"
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium rounded-lg px-6 py-3 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <BookCheck className="w-4 h-4 text-teal-400" aria-hidden="true" />
                <span>Ver Temario de Talleres</span>
              </a>
            </div>
          </div>

          {/* Academic Dossier Card & Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-800/90 border border-slate-700 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-4 pb-5 border-b border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Retrato oficial de Dr. Luis Arturo Reyna Fernández en auditorio universitario"
                  className="w-20 h-20 rounded-lg object-cover border-2 border-slate-600 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h2 className="font-serif text-lg font-bold text-white leading-tight">
                    Dr. Luis Arturo Reyna Fernández
                  </h2>
                  <p className="text-xs text-teal-300 font-medium mt-0.5">
                    Ph.D. en Tecnología Educativa
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Catedrático e Investigador Senior
                  </p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-700">
                    ORCID: 0000-0002-8941-9231
                  </span>
                </div>
              </div>

              {/* Verified Institutional Accreditations */}
              <div className="py-4 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Acreditaciones & Membresías
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Doctorado con Mención de Honor por la Universidad de Salamanca</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Evaluador de Comités de Acreditación Internacional (ABET / ANECA)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Asesor en Marcos de IA para Consorcios Universitarios</span>
                  </div>
                </div>
              </div>

              {/* Consultation availability indicator */}
              <div className="pt-4 border-t border-slate-700 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-slate-300">Agenda Abierta para Consultoría 2026</span>
                </div>
                <a
                  href="#contacto"
                  className="text-blue-400 hover:text-blue-300 font-medium underline"
                >
                  Consultar fecha
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Executive Stats Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {ACADEMIC_PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-slate-800/40 border border-slate-800">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
