import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProfilePillars } from './components/ProfilePillars';
import { ServicesSection } from './components/ServicesSection';
import { WorkshopsAccordion } from './components/WorkshopsAccordion';
import { InstitutionalImpact } from './components/InstitutionalImpact';
import { PublicationsSection } from './components/PublicationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CodeExportModal } from './components/CodeExportModal';
import { STANDALONE_HTML_TEXT, STANDALONE_JS_TEXT, DEPLOYMENT_GUIDE_TEXT } from './data/sourceCodeStrings';
import { Code2, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-sans flex flex-col selection:bg-blue-700 selection:text-white">
      {/* Semantic Accessible Floating Header */}
      <Header onOpenCodeModal={() => setIsCodeModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* Executive Academic Hero */}
        <Hero />

        {/* Triple Identity Profile Pillars */}
        <ProfilePillars />

        {/* Strategic Consulting Services */}
        <ServicesSection />

        {/* Interactive Accordion for EdTech Workshops */}
        <WorkshopsAccordion />

        {/* Institutional Testimonials & Alliances */}
        <InstitutionalImpact />

        {/* Academic Research & Publications */}
        <PublicationsSection />

        {/* Validated Semantic Contact Form */}
        <ContactSection />
      </main>

      {/* Semantic Footer */}
      <Footer />

      {/* Floating Action Button for Instant Code Inspection & Deployment */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsCodeModalOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-4 py-3 rounded-xl shadow-xl hover:shadow-2xl border border-slate-700 flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Ver y copiar código fuente index.html y script.js"
        >
          <Code2 className="w-4 h-4 text-teal-400" />
          <span className="hidden sm:inline">Ver Código Fuente (index.html + script.js)</span>
          <span className="sm:hidden">Código</span>
        </button>
      </div>

      {/* Modal for Code Inspection & Deployment Guidelines */}
      <CodeExportModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        indexHtmlContent={STANDALONE_HTML_TEXT}
        scriptJsContent={STANDALONE_JS_TEXT}
        deploymentGuideContent={DEPLOYMENT_GUIDE_TEXT}
      />
    </div>
  );
}
