import React from 'react';
import { SERVICES_LIST } from '../data/academicData';
import { Check, ArrowRight, Layers, Award, Users, TrendingUp } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'transformacion-digital':
        return <Layers className="w-6 h-6 text-blue-700" />;
      case 'innovacion-curricular':
        return <Award className="w-6 h-6 text-teal-600" />;
      case 'capacitacion-ia':
        return <Users className="w-6 h-6 text-indigo-700" />;
      case 'gobernanza-analitica':
        return <TrendingUp className="w-6 h-6 text-emerald-700" />;
      default:
        return <Layers className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section
      id="servicios"
      className="py-20 bg-white border-b border-slate-200"
      aria-labelledby="servicios-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            Consultoría Estratégica Institucional
          </div>
          <h2
            id="servicios-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Servicios Especializados para Universidades e Institutos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Metodologías probadas de intervención académica y tecnológica para elevar la competitividad, la retención y los estándares de acreditación.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service) => (
            <article
              key={service.id}
              className="bg-slate-50 rounded-xl border border-slate-200 p-8 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-xs">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-white border border-slate-200 rounded text-slate-700">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Impact metric highlight box */}
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700">
                  <span className="font-semibold text-teal-700 block mb-0.5">Impacto Verificable:</span>
                  <span>{service.impactMetrics}</span>
                </div>

                {/* Features list */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-900 block">
                    Alcance del Acompañamiento:
                  </span>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable and CTA */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  <strong className="text-slate-800">Entregable:</strong> {service.deliverable}
                </div>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 shrink-0"
                >
                  <span>Solicitar Propuesta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Institutional Consultation Advisory Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              ¿Requiere una evaluación de madurez digital o diagnóstico curricular?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Coordinamos una sesión de análisis exploratoria de 45 minutos con su Consejo de Facultad o Comité de Transformación Digital sin costo.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg px-6 py-3 transition-all text-sm shadow-md"
          >
            Agendar Sesión de Diagnóstico
          </a>
        </div>

      </div>
    </section>
  );
};
