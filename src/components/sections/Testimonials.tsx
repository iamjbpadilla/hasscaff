import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-dark bg-pattern-dots">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real feedback from builders, homeowners, and project managers across SEQ
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 flex flex-col"
            >
              <Quote className="w-8 h-8 text-brand-primary mb-4" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{t.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.role} · {t.location}
                </p>
                <p className="text-xs text-brand-primary mt-1 font-medium">{t.projectType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
