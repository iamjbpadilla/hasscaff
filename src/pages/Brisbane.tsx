import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';

const Brisbane: React.FC = () => {
  return (
    <>
      <SEO 
        title="Scaffolding Services Brisbane | Hasscaff"
        description="Professional scaffolding hire and labour services in Brisbane, Queensland. QBCC licensed, 24/7 rapid dispatch, serving all Brisbane suburbs and surrounding areas."
        path="/locations/brisbane"
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: 'Brisbane', path: '/locations/brisbane' }
          ]
        }}
      />
      <PageLayout 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Brisbane', path: '/locations/brisbane' }
        ]}
      >
        <PageHeader 
          title="Scaffolding Services in Brisbane"
          description="Your trusted scaffolding partner across Brisbane and surrounding suburbs. From CBD projects to residential renovations, we deliver safe, reliable scaffolding solutions."
          badge={{
            text: "Brisbane-Based Team",
            icon: MapPin
          }}
        />

        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Brisbane Projects Gallery Placeholder</span>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-dark bg-pattern-grid">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">Brisbane Service Areas</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Covering all of Brisbane and surrounding regions
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Brisbane CBD</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Central business district and inner-city projects.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">North Brisbane</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Northside suburbs including Chermside, Sandgate, and Redcliffe.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">South Brisbane</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Southside including Woolloongabba, West End, and Stones Corner.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Greater Brisbane</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">All Brisbane metropolitan areas and surrounding regions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Brisbane Chooses Hasscaff */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">Why Brisbane Chooses Hasscaff</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">24/7 Service</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Round-the-clock availability for urgent Brisbane projects.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">QBCC Licensed</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fully licensed and insured for Queensland projects.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Local Team</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Brisbane-based team with local knowledge and expertise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-dark bg-pattern-diagonal">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">Brisbane Scaffolding Enquiry</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us for scaffolding services across Brisbane. We respond within 2 hours.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Request Brisbane Quote
            </a>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Brisbane;
