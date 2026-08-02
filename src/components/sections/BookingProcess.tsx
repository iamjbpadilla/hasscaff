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
    <section className="py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get your scaffolding project started in 3 simple steps
          </p>
        </div>
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-primary/40 to-brand-primary/20 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-12 items-start relative z-10">
            {steps.map((step) => (
              <React.Fragment key={step.number}>
                <div className="relative group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-base shadow-lg z-20">
                    {step.number}
                  </div>
                  
                  <div className="border-2 rounded-3xl p-10 pt-16 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 h-full hover:border-brand-primary hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                        <step.icon className="w-10 h-10" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">{step.title}</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">{step.description}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a 
            href="#quote"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-primary text-white font-bold text-lg rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start Your Scaffolding Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;
