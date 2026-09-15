import React from 'react';
import { PUBLICATIONS_DATA } from '../data/academicData';
import { FileText, ExternalLink, BookmarkCheck, ArrowUpRight } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  return (
    <section
      id="publicaciones"
      className="py-20 bg-slate-50 border-b border-slate-200"
      aria-labelledby="publicaciones-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900 uppercase tracking-wider">
            Producción Científica & Divulgación
          </div>
          <h2
            id="publicaciones-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Investigaciones & Whitepapers Recientes
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Aportes al debate académico internacional sobre la adopción ética de IA en educación superior, analítica predictiva y modelos de evaluación auténtica.
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {PUBLICATIONS_DATA.map((pub) => (
            <article
              key={pub.id}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded font-semibold bg-slate-900 text-white">
                      {pub.year}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                      {pub.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {pub.journal}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pub.abstract}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono pt-1">
                    <span>DOI:</span>
                    <span className="text-blue-700 underline">{pub.doi}</span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center md:flex-col gap-2 pt-2 md:pt-0">
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Descargando resumen ejecutivo de: "${pub.title}" (Preprint Académico en PDF)`);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-700" />
                    <span>Descargar PDF</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google Scholar & Scopus profiles link */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            Consulte el perfil completo de citaciones y métricas H-Index en{' '}
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 font-medium underline inline-flex items-center gap-1"
            >
              <span>Google Scholar</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>{' '}
            y{' '}
            <a
              href="https://orcid.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 font-medium underline inline-flex items-center gap-1"
            >
              <span>ORCID iD</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
