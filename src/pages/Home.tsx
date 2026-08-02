import PageLayout from '../components/layout/PageLayout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import ServiceAreas from '../components/sections/ServiceAreas';
import BookingProcess from '../components/sections/BookingProcess';
import SEO from '../components/common/SEO';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../lib/constants';

const Home: React.FC = () => {
  return (
    <>
      <SEO />
      <PageLayout
        breadcrumbs={[
          { name: 'Home', path: '/' }
        ]}
      >
        <Hero />
        <Services />
        <ServiceAreas />
        <BookingProcess />
        
        {/* Final CTA Section */}
        <section className="py-32 bg-brand-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get your free quote within 2 hours. Our team is ready to help with your scaffolding project.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a 
                href="#quote"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-primary font-bold text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Get Free Quote
              </a>
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Home;
