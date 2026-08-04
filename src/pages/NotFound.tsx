import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../components/common/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Hasscaff"
        description="The page you were looking for could not be found. Explore Hasscaff scaffolding services across Brisbane, Gold Coast and Sunshine Coast."
        path="/404"
      />
      <PageLayout>
        <section className="py-16 md:py-24 flex items-center justify-center text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-6xl md:text-8xl font-bold text-brand-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              The page you were looking for does not exist. It might have been moved or deleted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Back to Home
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-brand-primary text-brand-primary font-semibold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default NotFound;
