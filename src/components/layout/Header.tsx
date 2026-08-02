import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import DogIcon from '../icons/DogIcon';
import { COMPANY_INFO } from '../../lib/constants';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const NavLink = ({ to, children, mobile = false }: { to: string; children: React.ReactNode; mobile?: boolean }) => {
    const active = isActive(to);
    return (
      <Link 
        to={to} 
        className={`text-sm font-medium transition-colors duration-300 relative ${
          mobile ? 'block py-2' : ''
        } ${
          active 
            ? 'text-brand-primary dark:text-brand-primary' 
            : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
        }`}
      >
        {children}
        {active && !mobile && (
          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full" />
        )}
      </Link>
    );
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b bg-white/80 backdrop-blur-lg border-gray-200 dark:bg-brand-dark/80 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
              <DogIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">{COMPANY_INFO.name}</span>
              <p className="text-xs text-gray-600 dark:text-gray-400">QBCC #{COMPANY_INFO.qbccLicense}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-gray-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center space-x-2 font-semibold text-sm text-brand-primary"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-brand-primary text-white font-semibold text-sm rounded-full hover:bg-brand-secondary transition-colors duration-300 whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-900 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <NavLink to="/services" mobile>Services</NavLink>
            <NavLink to="/locations" mobile>Locations</NavLink>
            <NavLink to="/about" mobile>About</NavLink>
            <NavLink to="/contact" mobile>Contact</NavLink>
            <NavLink to="/admin" mobile>Admin</NavLink>
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center space-x-2 text-brand-primary font-semibold py-2"
              >
                {darkMode ? <Sun className="w-4 h-4 text-brand-primary" /> : <Moon className="w-4 h-4 text-brand-primary" />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center space-x-2 text-brand-primary font-semibold py-2"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
