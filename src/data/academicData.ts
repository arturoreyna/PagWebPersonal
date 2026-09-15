import { WorkshopModule, ServiceItem, TestimonialItem, PublicationItem } from '../types';

export const ACADEMIC_PROFILE = {
  name: 'Dr. Luis Arturo Reyna Fernández, Ph.D.',
  title: 'Consultor EdTech • Director Académico • Catedrático Universitario',
  institutionAffiliation: 'Doctor en Tecnología Educativa e Innovación Curricular (Universidad de Salamanca)',
  shortBio: 'Especialista en modernización curricular, gobernanza institucional y adopción estratégica de Inteligencia Artificial para la educación superior en América Latina y Europa.',
  stats: [
    { value: '+18', label: 'Años en Docencia & Gestión Universitaria' },
    { value: '42', label: 'Planes Curriculares Acreditados' },
    { value: '14', label: 'Universidades Asesoradas en LATAM y España' },
    { value: '18,500+', label: 'Docentes & Estudiantes Impactados' },
  ],
  pillars: [
    {
      id: 'docente',
      title: 'Docente Universitario & Catedrático',
      subtitle: 'Pedagogía Digital, Diseño Instruccional & Posgrado',
      description: 'Más de 18 años impartiendo cátedras de maestría y doctorado en metodologías activas, evaluación auténtica y diseño instruccional adaptativo. Evaluador de tesis doctorales y revisor por pares.',
      highlights: [
        'Profesor Titular en maestrías de Innovación Educativa y Didáctica Digital',
        'Coordinador de líneas de investigación en Inteligencia Artificial y Aprendizaje',
        'Revisor editorial en revistas indexadas en Scopus (Q1/Q2) y SciELO',
      ],
      iconName: 'GraduationCap',
    },
    {
      id: 'edtech',
      title: 'Consultor EdTech & Estrategia Digital',
      subtitle: 'Arquitectura LMS, IA Generativa & Analítica',
      description: 'Asesoramiento a rectorías y vicerrectorías para seleccionar, migrar y optimizar ecosistemas tecnológicos (Canvas, Blackboard, Moodle), políticas de IA generativa y analítica predictiva de retención.',
      highlights: [
        'Diagnóstico de madurez digital institucional bajo marco DigCompEdu',
        'Implementación de modelos de alerta temprana con Learning Analytics',
        'Directrices institucionales y comités éticos para el uso de IA generativa',
      ],
      iconName: 'Laptop',
    },
    {
      id: 'director',
      title: 'Director Académico & Aseguramiento de Calidad',
      subtitle: 'Gobernanza, Acreditación & Gestión Curricular',
      description: 'Liderazgo en comisiones de acreditación internacional (ABET, SINEACE, ANECA, EQUIS). Rediseño de mallas curriculares orientadas a competencias laborales del siglo XXI y microcredenciales.',
      highlights: [
        'Liderazgo de procesos de licenciamiento y reacreditación institucional',
        'Diseño de marcos de cualificación docente y evaluación del desempeño',
        'Optimización de carga académica, tasas de titulación y empleabilidad',
      ],
      iconName: 'Briefcase',
    },
  ],
};

export const WORKSHOP_MODULES: WorkshopModule[] = [
  {
    id: 'modulo-1',
    number: '01',
    title: 'Integración de IA Generativa en el Claustro Universitario & Evaluación Auténtica',
    shortDesc: 'Estrategias pedagógicas para rediseñar rúbricas, combatir el fraude pasivo y aprovechar modelos LLM en el aula superior.',
    duration: '24 horas académicas (4 semanas híbridas)',
    modality: 'Sincrónico + Asincrónico con acompañamiento docente',
    targetAudience: 'Docentes de pregrado/posgrado, directores de departamento y coordinadores pedagógicos.',
    topics: [
      {
        unit: 'Unidad 1.1: Marco Epistemológico y Diagnóstico de la IA en la Educación Superior',
        description: 'Comprensión técnica de los modelos de lenguaje (LLM). Mitos, sesgos algorítmicos y redefinición del rol del docente como curador del pensamiento crítico.',
      },
      {
        unit: 'Unidad 1.2: Prompt Engineering Pedagógico para Diseño Curricular',
        description: 'Técnicas avanzadas de inducción de prompts para generar casos de estudio socráticos, simulaciones de debate y materiales diferenciados por ritmo de aprendizaje.',
      },
      {
        unit: 'Unidad 1.3: Rediseño de la Evaluación: Hacia la Evaluación Auténtica y Oralidad',
        description: 'Sustitución de ensayos tradicionales vulnerables por evaluaciones de desempeño real: defensas orales socráticas, bitácoras de metacognición y portafolios de proyectos.',
      },
      {
        unit: 'Unidad 1.4: Políticas de Aula y Herramientas de Detección Ética',
        description: 'Límites de los detectores de IA y elaboración de un código de honor transparente consensuado con los estudiantes.',
      },
    ],
    deliverables: [
      'Guía institucional de evaluación rediseñada a prueba de IA',
      'Banco de 30 prompts pedagógicos validados para distintas facultades',
      'Rúbrica institucional de evaluación auténtica y competencias críticas',
    ],
    competencies: [
      'Diseño instruccional con IA',
      'Evaluación de aprendizajes complejos',
      'Ética docente digital',
    ],
  },
  {
    id: 'modulo-2',
    number: '02',
    title: 'Arquitectura, Gobernanza e Interoperabilidad de Ambientes Virtuales (LMS / LXP)',
    shortDesc: 'Optimización de plataformas Canvas LMS, Moodle y Blackboard con estándares LTI 1.3 y ecosistemas de microcredenciales.',
    duration: '30 horas académicas (5 semanas)',
    modality: 'Talleres ejecutivos dirigidos a equipos de TI y Vicerrectorías',
    targetAudience: 'Directores de TI educativa, coordinadores de campus virtual y directores de innovación.',
    topics: [
      {
        unit: 'Unidad 2.1: Auditoría de Experiencia de Usuario (UX) y Usabilidad Pedagógica en LMS',
        description: 'Evaluación de tasas de rebote, navegación móvil y accesibilidad WCAG 2.1 AA en las aulas virtuales institucionales.',
      },
      {
        unit: 'Unidad 2.2: Interoperabilidad LTI 1.3, Caliper Analytics y Conectores SIS/ERP',
        description: 'Conexión sin fricciones entre el sistema de gestión académica (Banner, Peoplesoft, SIGA) y las herramientas pedagógicas de terceros.',
      },
      {
        unit: 'Unidad 2.3: Microcredenciales e Insignias Digitales Verificables',
        description: 'Diseño de arquitectura Open Badges para certificar competencias extracurriculares y trayectorias formativas modulares.',
      },
      {
        unit: 'Unidad 2.4: Planes de Contingencia y Gobernanza de Servidores en la Nube',
        description: 'Métricas de disponibilidad del 99.9%, políticas de respaldo automatizado y seguridad de datos de los estudiantes (GDPR / normativas locales).',
      },
    ],
    deliverables: [
      'Matriz de evaluación y auditoría de la plataforma virtual actual',
      'Protocolo de integración LTI y seguridad de credenciales',
      'Hoja de ruta institucional para el despliegue de microcredenciales',
    ],
    competencies: [
      'Gestión de infraestructura EdTech',
      'Gobernanza de datos de aprendizaje',
      'Diseño de insignias verificables',
    ],
  },
  {
    id: 'modulo-3',
    number: '03',
    title: 'Learning Analytics: Modelos Predictivos y Retención Estudiantil Temprana',
    shortDesc: 'Uso de ciencia de datos pedagógicos para identificar riesgo de deserción antes del primer tercio del semestre académico.',
    duration: '20 horas académicas (3 semanas)',
    modality: 'Laboratorio de datos analíticos con casos reales anonimizados',
    targetAudience: 'Direcciones de bienestar estudiantil, vicerrectorías académicas y directores de carrera.',
    topics: [
      {
        unit: 'Unidad 3.1: Fuentes de Datos del Ecosistema Universitario',
        description: 'Consolidación de huella digital en LMS, registros de biblioteca, asistencia y rendimiento en asignaturas filtro.',
      },
      {
        unit: 'Unidad 3.2: Indicadores Clave de Deserción y Variables Centinela',
        description: 'Identificación de patrones de desconexión temprana y su correlación con la tasa de retención semestral.',
      },
      {
        unit: 'Unidad 3.3: Diseño de Cuadros de Mando (Dashboards) para Decanos y Tutores',
        description: 'Construcción de interfaces claras de semaforización de riesgo para intervenciones psicopedagógicas oportunas.',
      },
      {
        unit: 'Unidad 3.4: Ética, Privacidad y No-Estigmatización en Analítica',
        description: 'Marcos de salvaguarda para evitar sesgos discriminatorios en las intervenciones preventivas.',
      },
    ],
    deliverables: [
      'Plantilla de Dashboard Ejecutivo de Retención en PowerBI/Looker',
      'Protocolo de intervención temprana para tutores académicos',
      'Matriz de indicadores de riesgo para facultades críticas',
    ],
    competencies: [
      'Interpretación de datos pedagógicos',
      'Estrategias de retención universitaria',
      'Toma de decisiones basada en evidencia',
    ],
  },
  {
    id: 'modulo-4',
    number: '04',
    title: 'Gobernanza Institucional, Integridad Académica y Normativas de IA para Consejos Universitarios',
    shortDesc: 'Diseño e implantación del marco normativo y comités de ética para salvaguardar la reputación y calidad institucional.',
    duration: '16 horas académicas (2 semanas intensivas)',
    modality: 'Mesa de trabajo directiva y comités de decanatos',
    targetAudience: 'Rectores, vicerrectores, secretarios generales, directores jurídicos y decanos.',
    topics: [
      {
        unit: 'Unidad 4.1: Estado del Arte de la Regulación Global en Educación Superior',
        description: 'Análisis comparativo de directrices de UNESCO, Comisión Europea y principales agencias de acreditación sobre IA.',
      },
      {
        unit: 'Unidad 4.2: Redacción del Reglamento Institucional de Uso de IA',
        description: 'Estructuración de artículos sobre autoría, propiedad intelectual, transparencia algorítmica y régimen sancionador.',
      },
      {
        unit: 'Unidad 4.3: Conformación y Operación del Comité de Ética Digital',
        description: 'Protocolos de arbitraje para casos complejos de disputas de originalidad en tesis de grado y publicaciones docentes.',
      },
      {
        unit: 'Unidad 4.4: Comunicación Estratégica con la Comunidad Universitaria',
        description: 'Estrategia de socialización con estudiantes, claustro profesoral y egresados para evitar pánico y fomentar la cultura de transparencia.',
      },
    ],
    deliverables: [
      'Modelo de Reglamento de Inteligencia Artificial para Consejo Universitario',
      'Estatuto de creación y funciones del Comité de Ética e Integridad Digital',
      'Guía de derechos y deberes para el estudiante en la era digital',
    ],
    competencies: [
      'Gobernanza y política universitaria',
      'Derecho y ética digital aplicada',
      'Gestión del cambio en organizaciones académicas',
    ],
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'transformacion-digital',
    badge: 'Ecosistema Tecnológico',
    title: 'Transformación Digital y Auditoría EdTech del Campus',
    summary: 'Diagnóstico exhaustivo de la infraestructura tecnológica universitaria, auditoría de LMS, seguridad de datos y hoja de ruta para la modernización a 3 años.',
    impactMetrics: 'Reducción de costos de licenciamiento del 22% y aumento del 40% en uso activo de plataformas.',
    features: [
      'Evaluación de madurez tecnológica bajo estándares internacionales',
      'Optimización y migración entre LMS (Canvas, Moodle, Blackboard)',
      'Diseño de arquitectura de microcredenciales e interoperabilidad LTI',
      'Capacitación técnica a equipos de soporte y administradores',
    ],
    deliverable: 'Plan Maestro de Transformación Digital con cronograma y presupuesto valorado.',
  },
  {
    id: 'innovacion-curricular',
    badge: 'Gestión Académica',
    title: 'Rediseño Curricular por Competencias y Acreditación',
    summary: 'Acompañamiento a decanatos y comités de currículo para actualizar planes de estudio conforme a demandas laborales del siglo XXI y estándares de acreditación.',
    impactMetrics: '100% de éxito en procesos de licenciamiento y reacreditación en programas asesorados.',
    features: [
      'Mapeo de competencias genéricas, transversales y específicas de egreso',
      'Articulación de mallas curriculares con modalidades híbridas y flexibles',
      'Alineamiento con agencias de acreditación (ABET, ANECA, SINEACE, CACS)',
      'Diseño de guías docentes y rúbricas estandarizadas de evaluación',
    ],
    deliverable: 'Dossier curricular completo listo para presentación ante el ministerio de educación / agencias.',
  },
  {
    id: 'capacitacion-ia',
    badge: 'Formación Docente',
    title: 'Programa de Desarrollo Docente en IA y Metodologías Activas',
    summary: 'Talleres inmersivos y programas de certificación continua para capacitar a todo el claustro docente en evaluación auténtica, docencia híbrida y herramientas de IA.',
    impactMetrics: 'Más de 14,000 docentes capacitados con un índice de satisfacción del 96.8%.',
    features: [
      'Módulos prácticos de diseño de asignaturas potenciadas con IA',
      'Estrategias de aprendizaje basado en retos (ABR) y aula invertida',
      'Rúbricas de evaluación anti-plagio y fomento de argumentación oral',
      'Comunidades de práctica docente inter-facultades',
    ],
    deliverable: 'Certificación institucional y banco colaborativo de recursos pedagógicos abiertos.',
  },
  {
    id: 'gobernanza-analitica',
    badge: 'Estrategia Institucional',
    title: 'Gobernanza Universitaria y Learning Analytics para la Retención',
    summary: 'Diseño de tableros de mando y políticas de alerta temprana para vicerrectorías, orientadas a mitigar la deserción y optimizar la permanencia estudiantil.',
    impactMetrics: 'Incremento promedio del 8.5% en la tasa de retención estudiantil de primer año.',
    features: [
      'Modelado de predicción de abandono con datos de interacción en LMS',
      'Dashboards en tiempo real para directores de programa y tutores',
      'Protocolos éticos de protección de datos de los estudiantes',
      'Normativa institucional para el uso responsable de algoritmos',
    ],
    deliverable: 'Sistema de Alerta Temprana operativo con manual de intervención psicopedagógica.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'La consultoría del Dr. Reyna Fernández fue decisiva para que nuestra Facultad de Ingeniería renovara la acreditación internacional ABET. Su visión sobre la integración de la IA en la evaluación auténtica transformó la práctica de más de 200 profesores.',
    author: 'Dra. Carmen Rosa Delgado',
    role: 'Decana de la Facultad de Ingeniería y Ciencias Aplicadas',
    institution: 'Universidad Iberoamericana de Posgrados',
    location: 'Bogotá, Colombia',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'test-2',
    quote: 'Su liderazgo en el rediseño de nuestro campus virtual y la política institucional de Inteligencia Artificial nos posicionó como pioneros regionales. Su capacidad para dialogar tanto con ingenieros de sistemas como con decanos humanistas es extraordinaria.',
    author: 'Dr. Fernando M. Sotomayor',
    role: 'Vicerrector Académico de Educación Superior',
    institution: 'Universidad Central del Sur',
    location: 'Santiago, Chile',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    id: 'test-3',
    quote: 'Implementamos el sistema de Learning Analytics y los talleres de formación docente con el acompañamiento del Dr. Reyna Fernández. En solo dos semestres logramos reducir la deserción en primer ciclo en un 9.2%. Un retorno de inversión pedagógica incalculable.',
    author: 'Mtra. Elena Bustamante',
    role: 'Directora de Calidad y Acreditación Institucional',
    institution: 'Instituto Tecnológico Superior de Innovación',
    location: 'Ciudad de México',
    avatarUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&h=200&q=80',
  },
];

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: 'pub-1',
    year: '2025',
    title: 'Transformación de los Marcos de Evaluación en la Educación Superior frente a los Modelos de Lenguaje de Gran Escala (LLM): Un Enfoque por Competencias Críticas',
    journal: 'Revista Iberoamericana de Educación a Distancia (RIED)',
    doi: '10.5944/ried.28.1.39201',
    category: 'Artículo Scopus',
    abstract: 'Estudio empírico longitudinal con 1,200 estudiantes universitarios evaluando el impacto del reemplazo de ensayos convencionales por defensas dialógicas y bitácoras de aprendizaje supervisadas por IA.',
  },
  {
    id: 'pub-2',
    year: '2024',
    title: 'Guía de Gobernanza y Ética Algorítmica para Consejos Universitarios: Directrices Prácticas de Implementación Institucional',
    journal: 'Consorcio de Universidades de Innovación Latinoamericana (CUIL)',
    doi: '10.21071/edtech-whitepaper.2024.11',
    category: 'Whitepaper',
    abstract: 'Marco de gobernanza para rectores y equipos jurídicos universitarios que delimita los derechos de autoría de materiales generados por estudiantes y docentes bajo herramientas de IA.',
  },
  {
    id: 'pub-3',
    year: '2023',
    title: 'Learning Analytics y Sistemas de Alerta Temprana: Predicción del Rendimiento Académico y Retención en Entornos Virtuales Canvas y Moodle',
    journal: 'Journal of Higher Education Management & Technology (JHEMT)',
    doi: '10.1016/j.jhemt.2023.08.004',
    category: 'Artículo Scopus',
    abstract: 'Análisis de variables multivariadas de interacción en el LMS durante las tres primeras semanas de curso y su efectividad predictiva en la disminución de la tasa de abandono.',
  },
];
