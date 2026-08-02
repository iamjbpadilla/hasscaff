import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Mail, Phone, Linkedin, Building2, Target, User, LayoutDashboard, ArrowRight } from 'lucide-react';

const DemoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show modal on home page and admin page load
    if (location.pathname === '/' || location.pathname === '/admin') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-5 relative flex-shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Building2 className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold text-white">HASSCAFF SCAFFOLDING</h1>
          </div>
          <p className="text-white/90 text-lg font-medium">Digital Platform Transformation</p>
          <p className="text-white/80 text-sm mt-1">Enhanced Lead Generation & Management System</p>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1">
          {/* Stakeholders */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Client</h3>
                <p className="text-gray-900 dark:text-white font-medium text-sm">Ryan Hassett</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">Hasscaff Scaffolding</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Developed By</h3>
                <p className="text-gray-900 dark:text-white font-medium text-sm">Jubet Padilla</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">ICT Specialist & Digital Lead</p>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Project Overview</h3>
            <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
              This demonstration showcases a comprehensive digital platform renovation designed to scale organic lead generation across South East Queensland. The system includes modern UI/UX design, integrated admin management, and streamlined customer engagement workflows.
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Key Capabilities</h3>
            <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-gray-600 dark:text-gray-400 mt-0.5">•</span>
                <span>Enhanced quote request management system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600 dark:text-gray-400 mt-0.5">•</span>
                <span>Admin panel for real-time lead tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600 dark:text-gray-400 mt-0.5">•</span>
                <span>Industrial-themed responsive design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600 dark:text-gray-400 mt-0.5">•</span>
                <span>Optimized for South East QLD market</span>
              </li>
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Quick Access</h3>
            <a
              href="/admin"
              onClick={handleClose}
              className="flex items-center justify-between gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">Admin Panel</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Contact */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-3">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Get In Touch</h3>
            <div className="space-y-2">
              <a
                href="mailto:jubetpadilla@gmail.com"
                className="flex items-center gap-3 text-xs text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>jubetpadilla@gmail.com</span>
              </a>
              <a
                href="tel:+639055746155"
                className="flex items-center gap-3 text-xs text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+63 905 574 6155 (PH)</span>
              </a>
              <a
                href="https://linkedin.com/in/jbmayogapadilla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/jbmayogapadilla</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3 border-t border-gray-200 dark:border-gray-800 flex-shrink-0">
          <button
            onClick={handleClose}
            className="w-full px-5 py-2.5 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
          >
            View Demo Platform
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
