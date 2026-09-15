import React, { useState } from 'react';
import { WORKSHOP_MODULES } from '../data/academicData';
import { 
  ChevronDown, 
  Clock, 
  Users, 
  CheckCircle2, 
  Layers, 
  Award, 
  BookOpen, 
  Download,
  Filter,
  Sparkles
} from 'lucide-react';

export const WorkshopsAccordion: React.FC = () => {
  // Store array of open module IDs (allows multiple or single expansion)
  const [openModuleIds, setOpenModuleIds] = useState<string[]>(['modulo-1']);
  const [filterAudience, setFilterAudience] = useState<string>('todos');

  const toggleModule = (id: string) => {
    setOpenModuleIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenModuleIds(WORKSHOP_MODULES.map((m) => m.id));
  };

  const collapseAll = () => {
    setOpenModuleIds([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleModule(id);
    }
  };

  const filteredModules = WORKSHOP_MODULES.filter((module) => {
    if (filterAudience === 'todos') return true;
    if (filterAudience === 'docentes') return module.id === 'modulo-1';
    if (filterAudience === 'ti') return module.id === 'modulo-2';
    if (filterAudience === 'direccion') return module.id === 'modulo-3' || module.id === 'modulo-4';
    return true;
  });

  return (
    <section
      id="talleres"
      className="py-20 bg-slate-50 border-b border-slate-200"
      aria-labelledby="talleres-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900 uppercase tracking-wider">
            Capacitación e Inmersión Ejecutiva
          </div>
          <h2
            id="talleres-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Temario & Módulos de Talleres de Consultoría EdTech
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Programas modulares estructurados con rigor académico, diseñados para capacitar desde claustros de profesores hasta vicerrectorías y directores de campus virtual.
          </p>
        </div>

        {/* Filter and Accordion Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          
          {/* Audience Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Filtrar:
            </span>
            <button
              onClick={() => setFilterAudience('todos')}
              className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                filterAudience === 'todos'
                  ? 'bg-blue-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todos los Módulos ({WORKSHOP_MODULES.length})
            </button>
            <button
              onClick={() => setFilterAudience('docentes')}
              className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                filterAudience === 'docentes'
                  ? 'bg-blue-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Claustro Docente
            </button>
            <button
              onClick={() => setFilterAudience('ti')}
              className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                filterAudience === 'ti'
                  ? 'bg-blue-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              TI & Campus Virtual
            </button>
            <button
              onClick={() => setFilterAudience('direccion')}
              className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                filterAudience === 'direccion'
                  ? 'bg-blue-700 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Alta Dirección & Decanatos
            </button>
          </div>

          {/* Expand / Collapse All */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
            <button
              type="button"
              onClick={expandAll}
              className="text-slate-600 hover:text-blue-700 font-medium px-2.5 py-1 rounded hover:bg-slate-100 transition-colors"
            >
              Expandir todos
            </button>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={collapseAll}
              className="text-slate-600 hover:text-blue-700 font-medium px-2.5 py-1 rounded hover:bg-slate-100 transition-colors"
            >
              Contraer todos
            </button>
          </div>
        </div>

        {/* Accessible Accordion Component */}
        <div className="space-y-4" role="region" aria-label="Acordeón de módulos formativos">
          {filteredModules.map((module) => {
            const isOpen = openModuleIds.includes(module.id);

            return (
              <div
                key={module.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                {/* Accordion Trigger Header Button */}
                <button
                  type="button"
                  id={`accordion-header-${module.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${module.id}`}
                  onClick={() => toggleModule(module.id)}
                  onKeyDown={(e) => handleKeyDown(e, module.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-slate-50/80 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-inset"
                >
                  <div className="flex items-start gap-4">
                    {/* Module Number badge */}
                    <span className="shrink-0 w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-serif text-sm font-bold shadow-xs">
                      {module.number}
                    </span>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                          {module.title}
                        </h3>
                        {module.id === 'modulo-1' && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                            <Sparkles className="w-3 h-3" />
                            Alta Demanda
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-slate-600">
                        {module.shortDesc}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" />
                          <span>{module.duration}</span>
                        </span>
                        <span className="hidden sm:inline text-slate-300">•</span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
                          <span>{module.modality}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Chevron Icon */}
                  <div
                    className={`shrink-0 mt-2 p-1.5 rounded-full bg-slate-100 text-slate-700 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" aria-hidden="true" />
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                {isOpen && (
                  <div
                    id={`accordion-content-${module.id}`}
                    role="region"
                    aria-labelledby={`accordion-header-${module.id}`}
                    className="border-t border-slate-200 p-6 bg-slate-50/50 space-y-6 animate-fadeIn"
                  >
                    {/* Target Audience Notice */}
                    <div className="text-xs bg-white p-3 rounded-lg border border-slate-200 text-slate-700 flex items-start gap-2">
                      <Users className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>
                        <strong>Audiencia Objetivo:</strong> {module.targetAudience}
                      </span>
                    </div>

                    {/* Breakdown of Units / Topics */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-700" />
                        <span>Estructura Curricular y Unidades Temáticas:</span>
                      </h4>
                      <div className="space-y-3">
                        {module.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs"
                          >
                            <h5 className="font-semibold text-sm text-slate-900">
                              {topic.unit}
                            </h5>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {topic.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables and Competencies Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Deliverables */}
                      <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-2.5 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-teal-600" />
                          <span>Entregables Institucionales:</span>
                        </h5>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {module.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Competencies */}
                      <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2.5 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-blue-700" />
                          <span>Competencias Desarrolladas:</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {module.competencies.map((comp, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 font-medium"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action button inside accordion */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs text-slate-500">
                        ¿Desea adaptar este temario a las necesidades específicas de su facultad?
                      </span>
                      <a
                        href="#contacto"
                        className="text-xs font-semibold text-blue-700 hover:text-blue-800 bg-white border border-slate-300 hover:border-blue-700 px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>Solicitar Taller para su Institución</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Workshop Proposal Box */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-bold text-slate-900">
              Modalidades a Medida: Presencial, Híbrido o In-House
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Todos los talleres incluyen acceso a plataforma virtual de prueba, banco de prompts pedagógicos certificados y emisión de certificados institucionales con código QR verificable.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-medium rounded-lg px-5 py-2.5 transition-all shadow-xs"
          >
            Solicitar Cotización de Taller
          </a>
        </div>

      </div>
    </section>
  );
};
