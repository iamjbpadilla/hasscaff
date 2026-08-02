import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyActionBar from './StickyActionBar';
import Breadcrumb from '../common/Breadcrumb';
import { useTheme } from '../../context/ThemeContext';

interface PageLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: Array<{ name: string; path: string }>;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, breadcrumbs }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-white text-gray-900 dark:bg-brand-dark dark:text-white">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      <StickyActionBar />
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      {breadcrumbs && (
        <Breadcrumb items={breadcrumbs} />
      )}
      
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
