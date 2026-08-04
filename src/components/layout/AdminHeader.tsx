import React from 'react';
import { LayoutDashboard, Home, RefreshCw, Settings, LogOut, Sun, Moon, Bell, Inbox } from 'lucide-react';

interface AdminHeaderProps {
  title: string;
  description?: string;
  view: 'overview' | 'requests';
  onViewChange: (view: 'overview' | 'requests') => void;
  notificationCount?: number;
  onRefresh?: () => void;
  darkMode?: boolean;
  setDarkMode?: (value: boolean) => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  title,
  description,
  view,
  onViewChange,
  notificationCount = 0,
  onRefresh,
  darkMode,
  setDarkMode,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 md:px-8 py-3 md:py-4">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5 md:mb-1">
              <LayoutDashboard className="w-4 h-4 md:w-5 md:h-5 text-brand-primary flex-shrink-0" />
              <h1 className="text-base md:text-xl font-bold text-gray-900 dark:text-white truncate">{title}</h1>
            </div>
            {description && (
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">{description}</p>
            )}
          </div>

          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <nav className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl" aria-label="Admin navigation">
              <button
                onClick={() => onViewChange('overview')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  view === 'overview'
                    ? 'bg-white dark:bg-gray-700 text-brand-primary shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
                aria-label="Overview"
              >
                <LayoutDashboard className="w-3.5 h-3.5" /> Overview
              </button>
              <button
                onClick={() => onViewChange('requests')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  view === 'requests'
                    ? 'bg-white dark:bg-gray-700 text-brand-primary shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
                aria-label="Requests"
              >
                <Inbox className="w-3.5 h-3.5" /> Requests
              </button>
            </nav>

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
            <button
              className="relative flex items-center justify-center p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {notificationCount > 9 ? '9+' : notificationCount}
                </span>
              )}
            </button>
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
