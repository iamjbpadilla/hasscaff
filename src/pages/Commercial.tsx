import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import { COMPANY_INFO } from '../lib/constants';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { Building2, ShieldCheck, Clock, Award, Check } from 'lucide-react';

const Commercial: React.FC = () => {
  return (
    <>
      <SEO 
        title="Commercial Scaffolding Brisbane | Hasscaff"
        description="Full-service commercial scaffolding solutions for large-scale projects across Brisbane, Gold Coast & SEQ. Engineered systems, certified teams, rapid deployment."
        path="/services/commercial"
      />
      <Schema 
        type="Service"
        data={{
          name: 'Commercial Scaffolding',
          description: 'Complete scaffolding solutions for commercial construction, maintenance, and industrial projects. Engineered systems with full project management.'
        }}
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Commercial', path: '/services/commercial' }
          ]
        }}
      />
      <PageLayout 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Commercial', path: '/services/commercial' }
        ]}
      >
        <PageHeader 
          title="Commercial Scaffolding"
          description="Complete scaffolding solutions for commercial construction, maintenance, and industrial projects. Engineered systems with full project management."
          badge={{
            text: "Full-Service Solutions",
            icon: Building2
          }}
        />

        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Commercial Scaffolding Gallery Placeholder</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-dark bg-pattern-grid">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">Why Choose Our Commercial Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Full-service scaffolding solutions for large-scale commercial projects
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Engineered Systems</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Custom-designed scaffolding for complex commercial structures.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Project Management</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dedicated project managers for seamless coordination.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Safety Compliance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full compliance with all commercial safety regulations.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Large-Scale Capacity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Resources for multi-story and complex projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">Industries We Serve</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Experienced across diverse commercial sectors
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Construction</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">New builds, renovations, and structural projects.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Industrial</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Factories, warehouses, and industrial facilities.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Infrastructure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Bridges, tunnels, and public infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-dark bg-pattern-diagonal">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">Commercial Project?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us for commercial scaffolding solutions. We provide detailed quotes within 48 hours.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Request Commercial Quote
            </a>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Commercial;
