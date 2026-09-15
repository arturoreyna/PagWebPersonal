import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, Terminal, ExternalLink } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  indexHtmlContent: string;
  scriptJsContent: string;
  deploymentGuideContent: string;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
  indexHtmlContent,
  scriptJsContent,
  deploymentGuideContent,
}) => {
  const [activeTab, setActiveTab] = useState<'html' | 'js' | 'deploy'>('html');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const getCurrentContent = () => {
    switch (activeTab) {
      case 'html':
        return indexHtmlContent;
      case 'js':
        return scriptJsContent;
      case 'deploy':
        return deploymentGuideContent;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getCurrentContent());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const handleDownload = () => {
    const filename =
      activeTab === 'html'
        ? 'index.html'
        : activeTab === 'js'
        ? 'script.js'
        : 'INSTRUCCIONES_DESPLIEGUE.md';
    
    const mimeType = activeTab === 'deploy' ? 'text/markdown' : 'text/plain';
    const blob = new Blob([getCurrentContent()], { type: `${mimeType};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-code-title"
    >
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-700 text-white">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-code-title" className="font-serif text-lg font-bold text-slate-900">
                Dossier de Código de Producción & Guía de Despliegue
              </h3>
              <p className="text-xs text-slate-500">
                HTML5 semántico puro + Tailwind CSS utilitario + JavaScript Vanilla (WCAG 2.1 AA)
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-700"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Selection Bar */}
        <div className="px-6 pt-3 border-b border-slate-200 flex items-center justify-between bg-white">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('html')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'html'
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>1. index.html (Semántico + Tailwind)</span>
            </button>

            <button
              onClick={() => setActiveTab('js')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'js'
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>2. script.js (Vanilla JS)</span>
            </button>

            <button
              onClick={() => setActiveTab('deploy')}
              className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'deploy'
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>3. Despliegue (GitHub / Vercel / Netlify)</span>
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pb-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Código</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-blue-700 hover:bg-blue-800 text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar Archivo</span>
            </button>
          </div>
        </div>

        {/* Code Content Body */}
        <div className="flex-1 bg-slate-950 p-4 overflow-auto">
          <pre className="text-xs text-slate-200 font-mono leading-relaxed whitespace-pre font-normal selection:bg-blue-700 selection:text-white">
            <code>{getCurrentContent()}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>
            {activeTab === 'html' && 'Estructura HTML5 completa con OpenGraph, WCAG 2.1 AA y clases Tailwind CSS'}
            {activeTab === 'js' && 'JavaScript Vanilla sin dependencias pesadas: Smooth Scroll, Hamburguesa, Acordeón y Validación'}
            {activeTab === 'deploy' && 'Instrucciones paso a paso para publicación estática en menos de 2 minutos'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium rounded text-xs transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
