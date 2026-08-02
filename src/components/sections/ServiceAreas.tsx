import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS } from '../../lib/constants';

const ServiceAreas: React.FC = () => {
  const locationRoutes: Record<string, string> = {
    'Brisbane': '/locations/brisbane',
    'Gold Coast': '/locations/gold-coast',
    'Sunshine Coast': '/locations/sunshine-coast',
  };

  return (
    <section className="py-24 bg-white dark:bg-brand-dark bg-pattern-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Serving South East Queensland</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Rapid dispatch across Brisbane, Gold Coast, and Sunshine Coast
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area, index) => (
            <Link 
              key={index} 
              to={locationRoutes[area.name]}
              className="group border-2 rounded-2xl p-8 hover:border-brand-primary hover:shadow-xl transition-all duration-300 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-primary/10 group-hover:bg-brand-primary transition-colors duration-300">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors duration-300">{area.name}</h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
