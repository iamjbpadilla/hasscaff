import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Mail, Phone, Linkedin } from 'lucide-react';

const DemoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/admin') {
      setIsOpen(true);
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
      setIsOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onClick={handleBackdropClick}
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl max-w-md w-full shadow-xl overflow-hidden transform transition-all duration-200 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2'
        }`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <h2 id="demo-modal-title" className="text-lg font-semibold text-gray-900 dark:text-white">
            Project Information
          </h2>
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close project information dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Client</h3>
            <p className="text-gray-900 dark:text-white font-medium">Hasscaff Scaffolding</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Developed By</h3>
            <p className="text-gray-900 dark:text-white font-medium">Jubet Padilla</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">ICT Specialist & Digital Lead</p>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Project Overview</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Digital platform renovation designed to scale organic lead generation across South East Queensland with modern UI/UX design and integrated admin management.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Key Capabilities</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Enhanced quote request management</li>
              <li>Admin panel for real-time lead tracking</li>
              <li>Industrial-themed responsive design</li>
              <li>Optimized for South East QLD market</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:jubetpadilla@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>jubetpadilla@gmail.com</span>
              </a>
              <a
                href="tel:+639055746155"
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+63 905 574 6155</span>
              </a>
              <a
                href="https://linkedin.com/in/jbmayogapadilla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={handleClose}
            className="w-full px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
