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
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-brand-primary" />
            <span className="text-sm font-semibold text-brand-primary">2-Hour Response Guaranteed</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get Your Free Quote</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">We'll call you back with a detailed quote</p>
        </div>
      )}
      
      {formSubmitted ? (
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Request Received!</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Thanks for reaching out. Our team will call you back within 2 hours with your personalized quote.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Need immediate assistance?</p>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 text-brand-primary font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
          <button 
            onClick={() => setFormSubmitted(false)}
            className="text-sm text-brand-primary font-medium hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form 
          className="space-y-5"
          onSubmit={onSubmit}
        >
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">What do you need?</label>
            <select 
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all"
              name="service"
            >
              <option value="">Select a service</option>
              <option value="hang-on">Hang-On Scaffold Hire</option>
              <option value="labour">Scaffold Labour Hire</option>
              <option value="commercial">Commercial Full Package</option>
              <option value="residential">Residential / Renovation</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Where is the project?</label>
            <input 
              type="text" 
              placeholder="e.g. Brisbane South / 4000"
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all"
              name="location"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Your mobile number</label>
            <input 
              type="tel" 
              placeholder="04XX XXX XXX"
              className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all"
              name="phone"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Attach plans (optional)</label>
            <div className="border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300 px-4 py-6 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700">
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-500 text-center">Click to upload PDF, PNG, or JPG</span>
              <span className="text-xs text-gray-400">Max 10MB</span>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-lg flex items-center justify-center gap-2"
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

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
            <ShieldCheck className="w-4 h-4" />
            <span>QBCC Licensed • {COMPANY_INFO.insurance}M Insured</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default QuoteForm;
