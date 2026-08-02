import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col">
      <main className="flex-1">
        {React.cloneElement(children as React.ReactElement, { darkMode, setDarkMode })}
      </main>
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 HASSCAFF Scaffolding. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
                View Site
              </a>
              <a href="/admin" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
                Admin Panel
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
