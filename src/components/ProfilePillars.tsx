import React from 'react';
import { GraduationCap, Laptop, Briefcase, CheckCircle2, FileText, Globe2, BookOpen } from 'lucide-react';
import { ACADEMIC_PROFILE } from '../data/academicData';

export const ProfilePillars: React.FC = () => {
  return (
    <section
      id="perfil"
      className="py-20 bg-slate-50 border-b border-slate-200"
      aria-labelledby="perfil-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900 uppercase tracking-wider">
            Trayectoria Académica Integral
          </div>
          <h2
            id="perfil-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Tres Dimensiones de Liderazgo Universitario
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Una sinergia única entre la práctica docente en el aula, la arquitectura tecnológica de vanguardia y la dirección estratégica de políticas institucionales.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACADEMIC_PROFILE.pillars.map((pillar) => {
            const isDocente = pillar.id === 'docente';
            const isEdTech = pillar.id === 'edtech';
            
            return (
              <article
                key={pillar.id}
                className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isDocente
                      ? 'bg-blue-700'
                      : isEdTech
                      ? 'bg-teal-600'
                      : 'bg-slate-900'
                  }`}
                ></div>

                <div className="space-y-4">
                  {/* Pillar Icon badge */}
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isDocente
                        ? 'bg-blue-50 text-blue-800'
                        : isEdTech
                        ? 'bg-teal-50 text-teal-700'
                        : 'bg-slate-100 text-slate-900'
                    }`}
                  >
                    {isDocente && <GraduationCap className="w-6 h-6" aria-hidden="true" />}
                    {isEdTech && <Laptop className="w-6 h-6" aria-hidden="true" />}
                    {!isDocente && !isEdTech && <Briefcase className="w-6 h-6" aria-hidden="true" />}
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <span className="text-xs font-semibold text-slate-900 block">
                      Competencias & Logros Clave:
                    </span>
                    {pillar.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isDocente
                              ? 'text-blue-700'
                              : isEdTech
                              ? 'text-teal-600'
                              : 'text-slate-800'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Enfoque Pedagógico</span>
                  <span className="font-semibold text-slate-700">Evidencia & Calidad</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Academic Biography & Trajectory Callout */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <Globe2 className="w-4 h-4 text-blue-700" />
                <span>Perfil Académico & Filosofía de Trabajo</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                "La tecnología no reemplaza la pedagogía; la amplifica cuando existe claridad curricular y compromiso docente."
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                El Dr. Reyna Fernández ha liderado la transición de instituciones tradicionales hacia ecosistemas de aprendizaje digitales y flexibles. Su trayectoria como Director de Innovación Curricular y evaluador internacional de programas le permite coordinar con solidez las demandas pedagógicas de los docentes, los requerimientos técnicos de los departamentos de TI y las metas de gobernanza y sostenibilidad de los Consejos Universitarios.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 text-xs">
                <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md font-medium">
                  Ph.D. Educación & TIC
                </span>
                <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md font-medium">
                  Máster en Diseño Curricular
                </span>
                <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md font-medium">
                  Auditor Interno ISO 21001
                </span>
                <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-md font-medium">
                  Certificado Canvas LMS Admin
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-blue-700" />
                <h4 className="font-serif font-bold text-slate-900 text-base">
                  Resumen Curricular
                </h4>
              </div>
              <ul className="text-xs text-slate-600 space-y-2">
                <li>• <strong>14 años</strong> como Docente Principal en Posgrados de Educación</li>
                <li>• <strong>6 años</strong> como Director de Aseguramiento de la Calidad Universitaria</li>
                <li>• <strong>38</strong> publicaciones científicas indexadas (Scopus / WoS)</li>
                <li>• <strong>5 libros</strong> sobre evaluación auténtica y entornos virtuales</li>
              </ul>
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800 bg-white border border-blue-200 rounded-md py-2.5 px-4 transition-colors hover:bg-blue-50"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Solicitar CV Académico Extenso</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
