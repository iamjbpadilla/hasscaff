import React from 'react';
import { LayoutDashboard, Home, RefreshCw, Settings, LogOut, Sun, Moon } from 'lucide-react';

interface AdminHeaderProps {
  title: string;
  description?: string;
  onRefresh?: () => void;
  darkMode?: boolean;
  setDarkMode?: (value: boolean) => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, description, onRefresh, darkMode, setDarkMode }) => {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 md:px-6 lg:px-8 py-3 md:py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5 md:mb-1">
              <LayoutDashboard className="w-4 h-4 md:w-5 md:h-5 text-brand-primary flex-shrink-0" />
              <h1 className="text-base md:text-xl font-bold text-gray-900 dark:text-white truncate">{title}</h1>
            </div>
            {description && (
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">{description}</p>
            )}
          </div>
          
          <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
            <a
              href="/"
              className="flex items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              title="View Site"
            >
              <Home className="w-4 h-4" />
            </a>
            {onRefresh && (
              <button
                onClick={onRefresh}
                className="flex items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                title="Refresh"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
            {setDarkMode && (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                title="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <button className="flex items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="Settings">
              <Settings className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="Logout">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
