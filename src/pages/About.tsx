import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import RootedValues from '../components/sections/RootedValues';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import { COMPANY_INFO } from '../lib/constants';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us - Hasscaff | 15+ Years Experience"
        description="Learn about Hasscaff's 15+ years of experience providing professional scaffolding services across Brisbane, Gold Coast & SEQ. QBCC licensed and fully insured."
        path="/about"
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' }
          ]
        }}
      />
      <PageLayout 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' }
        ]}
      >
        <PageHeader 
          title={`About ${COMPANY_INFO.name}`}
          description="Professional scaffolding hire and labour services across South East Queensland with over 15 years of industry experience."
        />
        
        {/* Our Story */}
        <section className="py-24 bg-white dark:bg-brand-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  With over 15 years of experience in the scaffolding industry, {COMPANY_INFO.name} has established itself as a trusted provider of professional scaffolding solutions across Brisbane, Gold Coast, and Sunshine Coast.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our team of certified scaffolders is available 24/7 to ensure your project stays on schedule with rapid dispatch and engineered safety solutions.
                </p>
              </div>
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Team Photo Placeholder</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Commitment</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We are committed to providing the highest quality scaffolding services with a focus on safety, reliability, and customer satisfaction.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Safety First</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">All systems meet and exceed Australian safety standards.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">QBCC Licensed</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fully licensed and insured for your peace of mind.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">24/7 Service</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Round-the-clock availability for urgent projects.</p>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <RootedValues />

        {/* CTA */}
        <section className="py-24 bg-white dark:bg-brand-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us for a free quote on your scaffolding requirements. We respond within 2 hours.
            </p>
            <a 
              href="/#quote" 
              className="inline-block px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Get Free Quote
            </a>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default About;
