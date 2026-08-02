import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';

const SunshineCoast: React.FC = () => {
  return (
    <>
      <SEO 
        title="Scaffolding Services Sunshine Coast | Hasscaff"
        description="Professional scaffolding hire and labour services on the Sunshine Coast, Queensland. QBCC licensed, 24/7 rapid dispatch, serving Maroochydore, Noosa, and all SC suburbs."
        path="/locations/sunshine-coast"
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: 'Sunshine Coast', path: '/locations/sunshine-coast' }
          ]
        }}
      />
      <PageLayout 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: 'Sunshine Coast', path: '/locations/sunshine-coast' }
        ]}
      >
        <PageHeader 
          title="Scaffolding Services on the Sunshine Coast"
          description="Your trusted scaffolding partner across the Sunshine Coast. From coastal projects to hinterland renovations, we deliver safe, reliable scaffolding solutions."
          badge={{
            text: "Sunshine Coast-Based Team",
            icon: MapPin
          }}
        />

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Sunshine Coast Projects Gallery Placeholder</span>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-24 bg-white dark:bg-brand-dark bg-pattern-grid">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Sunshine Coast Service Areas</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Covering from Caloundra to Noosa and beyond
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Caloundra</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Southern Sunshine Coast and coastal projects.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Maroochydore</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Central Sunshine Coast and Maroochy region.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Noosa</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Northern Sunshine Coast and Noosa Hinterland.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Hinterland</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sunshine Coast Hinterland and surrounding areas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sunshine Coast Chooses Hasscaff */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Sunshine Coast Chooses Hasscaff</h2>
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
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Coastal Expert</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Specialized in coastal and waterfront projects.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Safety First</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rigorous safety protocols for all projects.</p>
              </div>
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Local Team</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sunshine Coast-based team with local knowledge.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white dark:bg-brand-dark bg-pattern-diagonal">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Sunshine Coast Scaffolding Enquiry</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us for scaffolding services across the Sunshine Coast. We respond within 2 hours.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Request Sunshine Coast Quote
            </a>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default SunshineCoast;
