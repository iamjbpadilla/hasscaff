import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck } from 'lucide-react';
import DogIcon from '../icons/DogIcon';
import { COMPANY_INFO, COMPLIANCE_INFO } from '../../lib/constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t py-16 bg-white border-gray-200 dark:bg-brand-dark dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <DogIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">{COMPANY_INFO.name}</span>
                <p className="text-xs text-gray-600 dark:text-gray-400">QBCC #{COMPANY_INFO.qbccLicense}</p>
              </div>
            </div>
            <p className="text-sm mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
              Professional scaffolding hire and labour services across South East Queensland.
            </p>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center space-x-2 text-brand-primary font-semibold"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-900 dark:text-white">Services</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/services/hang-on-systems" className="hover:text-brand-primary transition-colors">Hang-On Scaffold Hire</Link></li>
              <li><Link to="/services/labour-hire" className="hover:text-brand-primary transition-colors">Scaffold Labour Hire</Link></li>
              <li><Link to="/services/commercial" className="hover:text-brand-primary transition-colors">Commercial Systems</Link></li>
              <li><Link to="/services/residential" className="hover:text-brand-primary transition-colors">Residential Packages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-900 dark:text-white">Locations</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/locations" className="hover:text-brand-primary transition-colors">All Locations</Link></li>
              <li><Link to="/locations/brisbane" className="hover:text-brand-primary transition-colors">Brisbane</Link></li>
              <li><Link to="/locations/gold-coast" className="hover:text-brand-primary transition-colors">Gold Coast</Link></li>
              <li><Link to="/locations/sunshine-coast" className="hover:text-brand-primary transition-colors">Sunshine Coast</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 text-gray-900 dark:text-white">Compliance</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {COMPLIANCE_INFO.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              &copy; {COMPANY_INFO.year} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              QBCC License #{COMPANY_INFO.qbccLicense} • ABN {COMPANY_INFO.abn}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
