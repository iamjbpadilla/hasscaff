import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Users, Building2, Home, ArrowRight } from 'lucide-react';
import { services as servicesData } from '../../data/services';

const Services: React.FC = () => {
  // Add icons and routes to services data
  const services = servicesData.map((service, index) => ({
    ...service,
    icon: index === 0 ? <Wrench className="w-6 h-6" /> : index === 1 ? <Users className="w-6 h-6" /> : index === 2 ? <Building2 className="w-6 h-6" /> : <Home className="w-6 h-6" />,
    route: index === 0 ? '/services/hang-on-systems' : index === 1 ? '/services/labour-hire' : index === 2 ? '/services/commercial' : '/services/residential'
  }));

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Scaffolding Solutions for Every Project</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From residential renovations to large-scale commercial projects, we have the right solution for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.route}
              className="group border-2 rounded-2xl p-8 hover:border-brand-primary hover:shadow-xl transition-all duration-300 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-brand-primary/10 group-hover:bg-brand-primary transition-colors duration-300">
                  <div className="w-6 h-6 flex items-center justify-center text-brand-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-primary transition-colors duration-300 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                    {service.description}
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
