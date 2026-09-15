export interface WorkshopModule {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  duration: string;
  modality: string;
  targetAudience: string;
  topics: {
    unit: string;
    description: string;
  }[];
  deliverables: string[];
  competencies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  impactMetrics: string;
  features: string[];
  deliverable: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  location: string;
  avatarUrl: string;
}

export interface PublicationItem {
  id: string;
  year: string;
  title: string;
  journal: string;
  doi: string;
  category: 'Artículo Scopus' | 'Whitepaper' | 'Guía Institucional';
  abstract: string;
}

export interface ContactFormData {
  fullName: string;
  institutionEmail: string;
  institutionName: string;
  roleTitle: string;
  serviceType: string;
  message: string;
  urgency: 'planificacion_semestral' | 'inmediato' | 'proximo_ano';
  termsAccepted: boolean;
}

export interface FormErrors {
  fullName?: string;
  institutionEmail?: string;
  institutionName?: string;
  roleTitle?: string;
  serviceType?: string;
  message?: string;
  termsAccepted?: string;
}
