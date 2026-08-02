import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import { COMPANY_INFO, COMPLIANCE_INFO } from '../lib/constants';
import { Phone, MapPin, Mail, Clock, ShieldCheck } from 'lucide-react';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';

const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us - Hasscaff | 24/7 Scaffolding Services"
        description="Contact Hasscaff for professional scaffolding services across Brisbane, Gold Coast & SEQ. Call 0424 170 737 for 24/7 emergency service and rapid dispatch."
        path="/contact"
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' }
          ]
        }}
      />
      <PageLayout 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' }
        ]}
      >
        <PageHeader 
          title="Get in Touch"
          description={`Contact ${COMPANY_INFO.name} for all your scaffolding needs. We respond within 2 hours.`}
          badge={{
            text: "We're Here to Help",
            icon: Phone
          }}
        />

        {/* Contact Cards */}
        <section className="py-24 bg-white dark:bg-brand-dark bg-pattern-grid">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 rounded-2xl p-8 text-center bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Call Us</h3>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                  className="text-xl font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">24/7 Emergency Service</p>
              </div>
              
              <div className="border-2 rounded-2xl p-8 text-center bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Service Areas</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Brisbane, Gold Coast<br />
                  Sunshine Coast, SEQ
                </p>
              </div>
              
              <div className="border-2 rounded-2xl p-8 text-center bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-brand-primary text-white">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Email Us</h3>
                <a 
                  href="mailto:info@hasscaff.com.au"
                  className="text-brand-primary hover:text-brand-secondary transition-colors font-medium"
                >
                  info@hasscaff.com.au
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">We reply within 2 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Emergency */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-6 h-6 text-brand-primary" />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Compliance & Credentials</h2>
                </div>
                <ul className="space-y-4">
                  {COMPLIANCE_INFO.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6" />
                  <h2 className="text-xl font-bold">Need Urgent Help?</h2>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed text-sm">
                  Our 24/7 emergency line is always available for urgent scaffolding needs. We dispatch immediately to get your project back on track.
                </p>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Contact;
