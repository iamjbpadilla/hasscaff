import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import { COMPANY_INFO } from '../lib/constants';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { ShieldCheck, Clock, Award, Wrench, Check } from 'lucide-react';

const HangOnSystems: React.FC = () => {
  return (
    <>
      <SEO 
        title="Hang-On Scaffold Hire Brisbane | Hasscaff"
        description="Professional hang-on scaffold hire services across Brisbane, Gold Coast & SEQ. QBCC licensed, rapid dispatch, engineered for safety. Get a free quote today."
        path="/services/hang-on-systems"
      />
      <Schema 
        type="Service"
        data={{
          name: 'Hang-On Scaffold Hire',
          description: 'Efficient, cost-effective hang-on scaffolding solutions for residential and commercial projects across South East Queensland.'
        }}
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Hang-On Systems', path: '/services/hang-on-systems' }
          ]
        }}
      />
      <PageLayout 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Hang-On Systems', path: '/services/hang-on-systems' }
        ]}
      >
        <PageHeader 
          title="Hang-On Scaffold Hire"
          description="Efficient, cost-effective hang-on scaffolding solutions for residential and commercial projects across South East Queensland."
          badge={{
            text: "Efficient & Cost-Effective",
            icon: Wrench
          }}
        />

        {/* Image Placeholder */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Hang-On Scaffold Gallery Placeholder</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white dark:bg-brand-dark bg-pattern-grid">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Our Hang-On Systems</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Designed for efficiency without compromising on safety
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Rapid Installation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Quick setup and dismantling to keep your project on schedule.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Engineered Safety</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">All systems meet and exceed Australian safety standards.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">QBCC Licensed</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fully licensed and insured for your peace of mind.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Wrench className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Cost-Effective</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Competitive rates with flexible hire periods.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Technical Specifications</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Built to perform, engineered to last
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">System Capabilities</h3>
                <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>Load capacity: Up to 2.0kN/m²</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>Maximum height: 50m+</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>Bay widths: 1.2m - 2.4m</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>Lift heights: 2.0m standard</span>
                  </li>
                </ul>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Compliance & Safety</h3>
                <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>AS/NZS 1576 compliant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>WorkCover approved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>QBCC License #{COMPANY_INFO.qbccLicense}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.insurance}M public liability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white dark:bg-brand-dark bg-pattern-diagonal">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us for a free quote on your hang-on scaffolding requirements. We respond within 2 hours.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Request Free Quote
            </a>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default HangOnSystems;
