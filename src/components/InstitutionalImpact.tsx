import React from 'react';
import { TESTIMONIALS_DATA } from '../data/academicData';
import { Quote, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const InstitutionalImpact: React.FC = () => {
  return (
    <section
      id="casos"
      className="py-20 bg-white border-b border-slate-200"
      aria-labelledby="casos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            Evidencia & Validación Externa
          </div>
          <h2
            id="casos-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Casos de Éxito & Testimonios de Liderazgo Universitario
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            La confianza de rectores, vicerrectores y decanos respalda el rigor metodológico y el impacto tangible en retención y acreditación internacional.
          </p>
        </div>

        {/* Institutional Alliances & Logos Ribbon */}
        <div className="mb-16 py-6 px-8 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-center text-slate-500 uppercase tracking-wider mb-6">
            Instituciones de Educación Superior y Redes Asesoradas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center text-center">
            <div className="flex items-center gap-2 text-slate-700 font-serif font-bold text-sm">
              <Building2 className="w-5 h-5 text-blue-700" />
              <span>Universidad Iberoamericana</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-serif font-bold text-sm">
              <Building2 className="w-5 h-5 text-teal-600" />
              <span>Universidad Central del Sur</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-serif font-bold text-sm">
              <Building2 className="w-5 h-5 text-indigo-700" />
              <span>Instituto Tecnológico Superior</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-serif font-bold text-sm">
              <Building2 className="w-5 h-5 text-slate-900" />
              <span>Consorcio Andino de Posgrados</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <article
              key={item.id}
              className="bg-slate-50 rounded-xl border border-slate-200 p-8 flex flex-col justify-between relative shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-blue-700/20" aria-hidden="true" />
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-3">
                <img
                  src={item.avatarUrl}
                  alt={`Retrato oficial de ${item.author}`}
                  className="w-12 h-12 rounded-full object-cover border border-slate-300 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-serif font-bold text-sm text-slate-900 leading-snug">
                    {item.author}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-snug mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                    {item.institution} • {item.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
