import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import { COMPANY_INFO } from '../lib/constants';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { Users, ShieldCheck, Clock, Award, Check } from 'lucide-react';

const LabourHire: React.FC = () => {
  return (
    <>
      <SEO 
        title="Scaffold Labour Hire Brisbane | Hasscaff"
        description="Expert scaffold labour hire services across Brisbane, Gold Coast & SEQ. Certified scaffolders available 24/7 for rapid dispatch. QBCC licensed team."
        path="/services/labour-hire"
      />
      <Schema 
        type="Service"
        data={{
          name: 'Scaffold Labour Hire',
          description: 'Get skilled scaffolding professionals for your project. Our certified team ensures safe, efficient installation and dismantling.'
        }}
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Labour Hire', path: '/services/labour-hire' }
          ]
        }}
      />
      <PageLayout 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Labour Hire', path: '/services/labour-hire' }
        ]}
      >
        <PageHeader 
          title="Scaffold Labour Hire"
          description="Get skilled scaffolding professionals for your project. Our certified team ensures safe, efficient installation and dismantling."
          badge={{
            text: "Certified Professionals",
            icon: Users
          }}
        />

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Scaffold Labour Team Gallery Placeholder</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white dark:bg-brand-dark bg-pattern-dots">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Our Labour Hire</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Skilled professionals who understand scaffolding inside and out
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Certified Scaffolders</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">All team members hold current scaffolding certifications.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">24/7 Availability</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Round-the-clock service for urgent projects.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Experienced Team</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Average 10+ years industry experience per team member.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Full Project Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">From installation to dismantling, we handle it all.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-grid">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Labour Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive scaffolding support for every stage of your project
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Installation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Professional setup following all safety protocols and site requirements.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Modifications</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Quick adjustments as your project evolves and requirements change.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Dismantling</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Safe and efficient removal with site cleanup included.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white dark:bg-brand-dark bg-pattern-diagonal">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Need Skilled Scaffolders?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us for labour hire services. We dispatch within 2 hours for urgent requests.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Request Labour Quote
            </a>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default LabourHire;
