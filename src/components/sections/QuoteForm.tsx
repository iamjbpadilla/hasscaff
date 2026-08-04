import React, { useState } from 'react';
import { ShieldCheck, Upload, Phone, Clock, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../../lib/constants';

const QuoteForm: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  return (
    <div 
      id="quote"
      className="border-2 rounded-2xl p-8 bg-white border-gray-200 shadow-xl dark:bg-gray-900 dark:border-gray-800"
    >
      {!formSubmitted && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-primary">2-Hour Response Guaranteed</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Get Your Free Quote</h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">We'll call you back with a detailed quote</p>
        </div>
      )}
      
      {formSubmitted ? (
        <div className="text-center py-10">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Request Received!</h3>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Thanks for reaching out. Our team will call you back within 2 hours with your personalized quote.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-6">
            <p className="text-base text-gray-600 dark:text-gray-400 mb-3">Need immediate assistance?</p>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 text-brand-primary font-bold text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
          <button 
            onClick={() => setFormSubmitted(false)}
            className="text-base text-brand-primary font-bold hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form 
          className="space-y-6"
          onSubmit={onSubmit}
        >
          <div>
            <label htmlFor="service" className="block text-base font-semibold mb-3 text-gray-700 dark:text-gray-300">What do you need?</label>
            <select 
              id="service"
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all text-base"
              name="service"
              required
              aria-required="true"
            >
              <option value="">Select a service</option>
              <option value="hang-on">Hang-On Scaffold Hire</option>
              <option value="labour">Scaffold Labour Hire</option>
              <option value="commercial">Commercial Full Package</option>
              <option value="residential">Residential / Renovation</option>
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-base font-semibold mb-3 text-gray-700 dark:text-gray-300">Where is the project?</label>
            <input 
              id="location"
              type="text" 
              placeholder="e.g. Brisbane South / 4000"
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all text-base"
              name="location"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-base font-semibold mb-3 text-gray-700 dark:text-gray-300">Your mobile number</label>
            <input 
              id="phone"
              type="tel" 
              placeholder="04XX XXX XXX"
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all text-base"
              name="phone"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label className="block text-base font-semibold mb-3 text-gray-700 dark:text-gray-300">Attach plans (optional)</label>
            <label htmlFor="plans" className="border-2 border-dashed rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300 px-4 py-6 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700">
              <Upload className="w-10 h-10 text-gray-400" />
              <span className="text-base text-gray-500 text-center">Click to upload PDF, PNG, or JPG</span>
              <span className="text-sm text-gray-400">Max 10MB</span>
              <input id="plans" type="file" name="plans" accept=".pdf,.png,.jpg,.jpeg" className="sr-only" />
            </label>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-brand-primary text-white font-bold text-lg rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              'Get My Free Quote'
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
            <ShieldCheck className="w-4 h-4" />
            <span>QBCC Licensed • {COMPANY_INFO.insurance}M Insured</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default QuoteForm;
