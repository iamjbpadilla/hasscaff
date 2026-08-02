import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';

const GoldCoast: React.FC = () => {
  return (
    <>
      <SEO 
        title="Scaffolding Services Gold Coast | Hasscaff"
        description="Professional scaffolding hire and labour services on the Gold Coast, Queensland. QBCC licensed, 24/7 rapid dispatch, serving Surfers Paradise, Broadbeach, and all GC suburbs."
        path="/locations/gold-coast"
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: 'Gold Coast', path: '/locations/gold-coast' }
          ]
        }}
      />
      <PageLayout 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Gold Coast', path: '/locations/gold-coast' }
        ]}
      >
        <PageHeader 
          title="Scaffolding Services on the Gold Coast"
          description="Your trusted scaffolding partner across the Gold Coast. From high-rise projects to residential renovations, we deliver safe, reliable scaffolding solutions."
          badge={{
            text: "Gold Coast-Based Team",
            icon: MapPin
          }}
        />

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Gold Coast Projects Gallery Placeholder</span>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-24 bg-white dark:bg-brand-dark bg-pattern-grid">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Gold Coast Service Areas</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Covering from Surfers Paradise to Coolangatta
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Surfers Paradise</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Central Gold Coast and high-rise projects.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Southport</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Southport and Broadwater areas.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Coolangatta</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Southern Gold Coast and Tweed border region.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Hinterland</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gold Coast Hinterland and surrounding suburbs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Gold Coast Chooses Hasscaff */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Gold Coast Chooses Hasscaff</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Local expertise with national standards
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Rapid Response</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fast dispatch across the entire Gold Coast region.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">High-Rise Expert</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Specialized in high-rise and complex structures.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Local Team</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gold Coast-based team with local expertise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white dark:bg-brand-dark bg-pattern-diagonal">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Gold Coast Scaffolding Enquiry</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us for scaffolding services across the Gold Coast. We respond within 2 hours.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Request Gold Coast Quote
            </a>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default GoldCoast;
