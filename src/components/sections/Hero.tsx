import React from 'react';
import { Phone, ShieldCheck, Clock, Award } from 'lucide-react';
import { COMPANY_INFO } from '../../lib/constants';
import QuoteForm from './QuoteForm';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 industrial-glow">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary">QBCC Licensed & Fully Insured</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              Your Trusted Partner for<br />
              <span className="text-brand-primary">Safe Scaffolding Solutions</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-xl max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
              We make your project safer and more efficient with professional scaffolding across Brisbane, Gold Coast & Sunshine Coast. Get a quote in 2 hours.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900 dark:text-white">2-Hour Quote</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fast Response</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900 dark:text-white">15+ Years</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900 dark:text-white">{COMPANY_INFO.insurance}M</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Insurance</p>
                </div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="px-8 py-4 flex items-center justify-center gap-3 bg-brand-primary text-white font-bold text-lg rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-xl hover:shadow-2xl whitespace-nowrap industrial-glow"
              >
                <Phone className="w-5 h-5" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
              <a 
                href="#quote" 
                className="px-8 py-4 flex items-center justify-center border-2 border-brand-primary text-brand-primary font-bold text-lg rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                <span>Get Free Quote</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-4xl font-extrabold text-gray-900 dark:text-white">500+</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-gray-900 dark:text-white">24/7</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">Emergency Service</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-gray-900 dark:text-white">100%</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">Safety Record</p>
              </div>
            </div>
          </div>

          {/* Right - Quote Form */}
          <div className="lg:sticky lg:top-28">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
