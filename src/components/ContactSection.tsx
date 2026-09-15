import React, { useState } from 'react';
import { ContactFormData, FormErrors } from '../types';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Building, 
  User, 
  Briefcase, 
  MessageSquare,
  ShieldCheck,
  Calendar
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    institutionEmail: '',
    institutionName: '',
    roleTitle: '',
    serviceType: 'taller_ia',
    message: '',
    urgency: 'planificacion_semestral',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre y apellidos son obligatorios.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Por favor ingrese al menos 3 caracteres.';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.institutionEmail.trim()) {
      newErrors.institutionEmail = 'El correo institucional es obligatorio.';
    } else if (!emailRegex.test(formData.institutionEmail.trim())) {
      newErrors.institutionEmail = 'Ingrese un formato de correo electrónico válido (ej. nombre@universidad.edu).';
    }

    // Validate institution name
    if (!formData.institutionName.trim()) {
      newErrors.institutionName = 'El nombre de la universidad o institución es obligatorio.';
    }

    // Validate role title
    if (!formData.roleTitle.trim()) {
      newErrors.roleTitle = 'Indique su cargo o función académica (ej. Decano, Vicerrector, Director de Carrera).';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Por favor describa el contexto de su consulta.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Por favor detalle su requerimiento en al menos 20 caracteres.';
    }

    // Validate terms
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'Debe aceptar la política de privacidad y tratamiento de datos institucionales.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      // Find first error field and focus it for accessibility
      const firstErrorKey = Object.keys(errors)[0];
      const errorElement = document.getElementById(firstErrorKey);
      if (errorElement) {
        errorElement.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate API dispatch to academic advisory secretariat
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      const generatedRef = `EDTECH-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      institutionEmail: '',
      institutionName: '',
      roleTitle: '',
      serviceType: 'taller_ia',
      message: '',
      urgency: 'planificacion_semestral',
      termsAccepted: false,
    });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-white border-b border-slate-200"
      aria-labelledby="contacto-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-900 uppercase tracking-wider">
            Canal Institucional Directo
          </div>
          <h2
            id="contacto-heading"
            className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Solicitud de Asesoría & Consultoría Académica
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Inicie el diálogo con el Dr. Luis Arturo Reyna Fernández para evaluar las necesidades de su facultad o planificar una propuesta a medida para su institución.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Advisory Protocol */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Protocolo de Atención a Instituciones
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Todas las solicitudes son revisadas directamente por la secretaría académica y el Dr. Reyna Fernández para agendar una primera sesión exploratoria virtual.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Correo Electrónico Directo:</strong>
                    <a
                      href="mailto:arturoreyna74@gmail.com"
                      className="text-blue-700 hover:underline"
                    >
                      arturoreyna74@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Sede Principal de Consultoría:</strong>
                    <span>Edificio de Innovación Académica, Campus Universitario</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Tiempo de Respuesta:</strong>
                    <span>Menos de 24 horas hábiles tras recibir el requerimiento.</span>
                  </div>
                </div>
              </div>

              {/* Confidentiality Notice */}
              <div className="pt-4 border-t border-slate-200 flex items-start gap-3 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Tratamiento confidencial garantizado bajo acuerdos de no divulgación (NDA) para planes de acreditación y reformas curriculares.
                </span>
              </div>
            </div>

            {/* Quick Summary of Priority Programs */}
            <div className="bg-slate-900 text-white rounded-xl p-6 space-y-3">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block">
                Convocatoria Institucional Activa
              </span>
              <h4 className="font-serif text-lg font-bold text-white">
                Talleres de IA Generativa para Claustros 2026
              </h4>
              <p className="text-xs text-slate-300">
                Cupos limitados para acompañamiento sincrónico a universidades durante el presente ciclo lectivo.
              </p>
            </div>
          </div>

          {/* Right Column: Semantic Validated Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm">
              
              {submitSuccess ? (
                /* Success Feedback Screen */
                <div
                  className="text-center py-10 space-y-5 animate-fadeIn"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      ¡Solicitud Registrada con Éxito!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Estimado/a <strong>{formData.fullName}</strong>, hemos recibido su consulta institucional. Su código de seguimiento es:
                    </p>
                    <div className="inline-block px-4 py-2 bg-slate-100 border border-slate-300 font-mono text-base font-bold text-slate-900 rounded-md">
                      {referenceId}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-700 text-left max-w-md mx-auto space-y-2">
                    <div className="font-semibold text-slate-900">Próximos pasos inmediatos:</div>
                    <p>1. Se ha enviado un acuse de recibo a <em>{formData.institutionEmail}</em>.</p>
                    <p>2. En un plazo de 24 horas recibirá una propuesta de fecha y enlace para una reunión virtual exploratoria.</p>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800 underline pt-2"
                  >
                    Enviar otra solicitud o consultar otro programa
                  </button>
                </div>
              ) : (
                /* Form fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      Formulario Oficial de Contacto
                    </h3>
                    <p className="text-xs text-slate-500">
                      Los campos marcados con un asterisco (*) son obligatorios para tramitar la asesoría.
                    </p>
                  </div>

                  {/* General error banner if errors exist */}
                  {Object.keys(errors).length > 0 && (
                    <div
                      className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                      <div>
                        <strong>Por favor corrija los siguientes errores:</strong>
                        <ul className="list-disc pl-4 mt-1 space-y-0.5">
                          {Object.values(errors).map((err, i) => (
                            <li key={i}>{err}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Field: Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5"
                    >
                      Nombre y Apellidos *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        placeholder="Ej. Dr. Roberto Mendoza"
                        className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-700 focus:ring-blue-100'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Row: Email & Institution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Field: Institutional Email */}
                    <div>
                      <label
                        htmlFor="institutionEmail"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5"
                      >
                        Correo Institucional *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          id="institutionEmail"
                          name="institutionEmail"
                          value={formData.institutionEmail}
                          onChange={(e) => {
                            setFormData({ ...formData, institutionEmail: e.target.value });
                            if (errors.institutionEmail) setErrors({ ...errors, institutionEmail: undefined });
                          }}
                          aria-required="true"
                          aria-invalid={!!errors.institutionEmail}
                          aria-describedby={errors.institutionEmail ? 'institutionEmail-error' : undefined}
                          placeholder="nombre@universidad.edu"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                            errors.institutionEmail
                              ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-700 focus:ring-blue-100'
                          }`}
                        />
                      </div>
                      {errors.institutionEmail && (
                        <p id="institutionEmail-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.institutionEmail}
                        </p>
                      )}
                    </div>

                    {/* Field: Institution Name */}
                    <div>
                      <label
                        htmlFor="institutionName"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5"
                      >
                        Universidad / Organización *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Building className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="institutionName"
                          name="institutionName"
                          value={formData.institutionName}
                          onChange={(e) => {
                            setFormData({ ...formData, institutionName: e.target.value });
                            if (errors.institutionName) setErrors({ ...errors, institutionName: undefined });
                          }}
                          aria-required="true"
                          aria-invalid={!!errors.institutionName}
                          aria-describedby={errors.institutionName ? 'institutionName-error' : undefined}
                          placeholder="Ej. Universidad Central"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                            errors.institutionName
                              ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-700 focus:ring-blue-100'
                          }`}
                        />
                      </div>
                      {errors.institutionName && (
                        <p id="institutionName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.institutionName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row: Role Title & Service Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Field: Role Title */}
                    <div>
                      <label
                        htmlFor="roleTitle"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5"
                      >
                        Cargo o Función Académica *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          id="roleTitle"
                          name="roleTitle"
                          value={formData.roleTitle}
                          onChange={(e) => {
                            setFormData({ ...formData, roleTitle: e.target.value });
                            if (errors.roleTitle) setErrors({ ...errors, roleTitle: undefined });
                          }}
                          aria-required="true"
                          aria-invalid={!!errors.roleTitle}
                          aria-describedby={errors.roleTitle ? 'roleTitle-error' : undefined}
                          placeholder="Ej. Decana / Vicerrector / Dir. TI"
                          className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                            errors.roleTitle
                              ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-700 focus:ring-blue-100'
                          }`}
                        />
                      </div>
                      {errors.roleTitle && (
                        <p id="roleTitle-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.roleTitle}
                        </p>
                      )}
                    </div>

                    {/* Field: Service Type */}
                    <div>
                      <label
                        htmlFor="serviceType"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5"
                      >
                        Tipo de Asesoría Requerida
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full py-2.5 px-3 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                      >
                        <option value="taller_ia">Taller de Capacitación en IA para Claustro Docente</option>
                        <option value="consultoria_edtech">Consultoría Integral de Ecosistema EdTech y LMS</option>
                        <option value="rediseno_curricular">Rediseño Curricular y Acreditación de Programas</option>
                        <option value="learning_analytics">Implantación de Learning Analytics y Retención</option>
                        <option value="conferencia_magistral">Conferencia Magistral para Apertura de Semestre</option>
                      </select>
                    </div>
                  </div>

                  {/* Field: Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-900"
                      >
                        Detalle del Requerimiento o Contexto Institucional *
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {formData.message.length} caracteres
                      </span>
                    </div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        placeholder="Describa brevemente la situación actual, objetivos de su facultad, número estimado de docentes o estudiantes, y fechas tentativas de ejecución..."
                        className={`w-full p-3 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-200'
                            : 'border-slate-300 focus:border-blue-700 focus:ring-blue-100'
                        }`}
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Field: Terms Checkbox */}
                  <div>
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={(e) => {
                          setFormData({ ...formData, termsAccepted: e.target.checked });
                          if (errors.termsAccepted) setErrors({ ...errors, termsAccepted: undefined });
                        }}
                        aria-required="true"
                        aria-invalid={!!errors.termsAccepted}
                        aria-describedby={errors.termsAccepted ? 'terms-error' : undefined}
                        className="mt-1 w-4 h-4 rounded text-blue-700 focus:ring-blue-700 border-slate-300"
                      />
                      <label htmlFor="termsAccepted" className="text-xs text-slate-600 leading-normal">
                        Autorizo el tratamiento confidencial de los datos suministrados exclusivamente para la coordinación de la propuesta académica y contacto institucional, conforme a la política de protección de datos.
                      </label>
                    </div>
                    {errors.termsAccepted && (
                      <p id="terms-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.termsAccepted}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-medium rounded-lg px-6 py-3 transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Procesando solicitud institucional...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" aria-hidden="true" />
                          <span>Enviar Requerimiento a Secretaría Académica</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
