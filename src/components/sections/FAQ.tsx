import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faq';
import Schema from '../common/Schema';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Schema type="FAQPage" data={faqs} />
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Quick answers about hiring, safety, pricing, and permits
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-2 rounded-2xl bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-primary rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-gray-900 dark:text-white pr-4">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'pb-6 max-h-96' : 'max-h-0'}`}
                  >
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
