import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { locationsBySlug, LocationData } from '../data/locations';
import { services } from '../data/services';

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? locationsBySlug[slug] : undefined;

  if (!location) return <Navigate to="/not-found" replace />;

  return <LocationPageContent location={location} />;
};

const LocationPageContent: React.FC<{ location: LocationData }> = ({ location }) => {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
    { name: location.name, path: location.route },
  ];

  const serviceLinks = services.map((s) => ({
    ...s,
    label: `${s.shortTitle} in ${location.name}`,
    href: `${s.route}?location=${location.slug}`,
  }));

  return (
    <>
      <SEO title={location.metaTitle} description={location.metaDescription} path={location.route} />
      <Schema
        type="LocalBusiness"
        data={{
          name: `Hasscaff - ${location.name}`,
          description: location.description,
          areaServed: [{ name: location.name }],
        }}
      />
      <Schema type="BreadcrumbList" data={{ items: breadcrumbs }} />
      <PageLayout breadcrumbs={breadcrumbs}>
        <PageHeader title={location.title} description={location.description} badge={location.badge} />

        {/* Gallery Placeholder */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">{location.galleryLabel}</span>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-dark bg-pattern-grid">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
                {location.serviceAreasTitle}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {location.serviceAreasSubtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {location.serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{area.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
                {location.reasonsTitle}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {location.reasonsSubtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {location.reasons.map((reason, index) => (
                <div
                  key={index}
                  className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{reason.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Suburbs - SEO content */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-dark bg-pattern-diagonal">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
              Servicing {location.name} and Surrounding Suburbs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We regularly deliver, install, and dismantle scaffolding across {location.name} and the surrounding areas. If your suburb is not listed, call us — we almost certainly cover it.
            </p>
            <div className="flex flex-wrap gap-2 mb-12">
              {location.nearbySuburbs.map((suburb) => (
                <span
                  key={suburb}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                >
                  {suburb}
                </span>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
              Services Available in {location.name}
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 mb-10">
              {serviceLinks.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:border-brand-primary transition-all group"
                  >
                    <s.icon className="w-5 h-5 text-brand-primary" />
                    <span className="text-gray-900 dark:text-white font-medium group-hover:text-brand-primary transition-colors">
                      {s.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
                {location.ctaTitle}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                {location.ctaText}
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                {location.ctaButton}
              </a>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default LocationPage;
