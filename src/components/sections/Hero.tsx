import React from 'react';
import { Phone, ShieldCheck, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../lib/constants';
import QuoteForm from './QuoteForm';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-gray-50 to-white dark:bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356e54?auto=format&fit=crop&w=1920&q=80')] dark:bg-cover dark:bg-center overflow-hidden">
      <div className="absolute inset-0 dark:bg-black/65 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial="hidden" animate="show" variants={container} className="space-y-6">
            {/* Trust Badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 industrial-glow">
              <ShieldCheck className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary">QBCC Licensed & Fully Insured</span>
            </motion.div>
            
            {/* Monospaced Location Badge */}
            <motion.div variants={item} className="font-mono text-xs sm:text-sm text-brand-primary tracking-widest uppercase">
              // Serving Brisbane • Gold Coast • Sunshine Coast
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={item} className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.15] tracking-tight text-gray-900 dark:text-white">
              Safe Scaffolding Hire
            </motion.h1>
            
            {/* Subtext */}
            <motion.p variants={item} className="text-lg max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
              We make your project safer and more efficient with professional scaffolding across Brisbane, Gold Coast & Sunshine Coast. Get a quote in 2 hours.
            </motion.p>
            
            {/* Trust Indicators */}
            <motion.div variants={item} className="flex flex-wrap gap-6 pt-2">
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
            </motion.div>
            
            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#quote" 
                className="px-8 py-4 flex items-center justify-center bg-brand-primary text-brand-dark font-bold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <span>Get Free Quote</span>
              </a>
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                aria-label={`Call Hasscaff on ${COMPANY_INFO.phone}`}
                className="px-8 py-4 flex items-center justify-center gap-2 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Direct</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
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
