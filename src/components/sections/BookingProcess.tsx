import React from 'react';
import { CheckCircle, ClipboardCheck, Calendar } from 'lucide-react';

const BookingProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: CheckCircle,
      title: 'Tell Us Your Needs',
      description: 'Share your project details through our quick quote form or give us a call. We respond within 2 hours.'
    },
    {
      number: '02',
      icon: ClipboardCheck,
      title: 'Get Expert Recommendations',
      description: 'Our team reviews your requirements and recommends the most cost-effective scaffolding solution.'
    },
    {
      number: '03',
      icon: Calendar,
      title: 'We Handle the Rest',
      description: 'Once confirmed, we schedule delivery, installation, and support. You focus on your project.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get your scaffolding project started in 3 simple steps
          </p>
        </div>
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-primary/40 to-brand-primary/20 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 items-start relative z-10">
            {steps.map((step) => (
              <React.Fragment key={step.number}>
                <div className="relative group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm shadow-lg z-20">
                    {step.number}
                  </div>
                  
                  <div className="border-2 rounded-2xl p-8 pt-12 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 h-full hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                        <step.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white text-center">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center">{step.description}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#quote"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Scaffolding Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
