import React from 'react';
import { Phone, ShieldCheck, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../lib/constants';
import QuoteForm from './QuoteForm';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 industrial-glow">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary">QBCC Licensed & Fully Insured</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Safe Scaffolding Hire
              <span className="block text-brand-primary mt-2 text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Brisbane, Gold Coast & Sunshine Coast
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
              We make your project safer and more efficient with professional scaffolding across Brisbane, Gold Coast & Sunshine Coast. Get a quote in 2 hours.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-2">
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
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="px-8 py-4 flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
              <a 
                href="#quote" 
                className="px-8 py-4 flex items-center justify-center border-2 border-brand-primary text-brand-primary font-semibold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                <span>Get Free Quote</span>
              </a>
            </div>
          </div>

          {/* Right - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="lg:sticky lg:top-24"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
