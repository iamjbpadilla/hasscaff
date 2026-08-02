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
    <section className="py-32 bg-white dark:bg-brand-dark bg-pattern-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">Serving South East Queensland</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Rapid dispatch across Brisbane, Gold Coast, and Sunshine Coast
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_AREAS.map((area, index) => (
            <Link 
              key={index} 
              to={locationRoutes[area.name]}
              className="group border-2 rounded-3xl p-10 hover:border-brand-primary hover:shadow-2xl transition-all duration-300 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-brand-primary/10 group-hover:bg-brand-primary transition-colors duration-300">
                  <div className="w-7 h-7 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors duration-300">{area.name}</h3>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{area.description}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#quote"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-primary text-white font-bold text-lg rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Get Scaffolding in Your Area
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
