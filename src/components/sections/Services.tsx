import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">Scaffolding Solutions for Every Project</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From residential renovations to large-scale commercial projects, we have the right solution for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link 
              key={service.id}
              to={service.route}
              className="group border-2 rounded-2xl overflow-hidden hover:border-brand-primary hover:shadow-xl transition-all duration-300 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800"
            >
              <div className="h-2 bg-brand-primary" />
              <div className="p-6 flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-brand-primary/10 group-hover:bg-brand-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-primary transition-colors duration-300 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-brand-primary font-medium group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="#quote"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get a Quote for Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
