import React from 'react';
import { Target, Sparkles, MessageSquare } from 'lucide-react';

const RootedValues: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision in Every Detail',
      description: 'We don\'t just meet safety standards — we exceed them. Every scaffold is engineered for maximum stability and performance.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Solutions Built Around You',
      description: 'No two projects are the same. We tailor our approach to your specific requirements, timeline, and budget.',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Clear Communication, Always',
      description: 'No jargon, no surprises. We keep you informed at every stage with honest updates and real answers.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">Values That Guide Everything We Do</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            These aren't just words on a wall — they're the principles we live by every day on every job site
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="border-2 rounded-2xl p-8 h-full bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-brand-primary text-white group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 flex items-center justify-center">{value.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RootedValues;
