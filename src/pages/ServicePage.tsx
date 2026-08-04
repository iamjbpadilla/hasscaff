import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MapPin, Check } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { servicesBySlug, ServiceData } from '../data/services';
import { locationRoutes } from '../data/locations';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesBySlug[slug] : undefined;

  if (!service) return <Navigate to="/not-found" replace />;

  return <ServicePageContent service={service} />;
};

const ServicePageContent: React.FC<{ service: ServiceData }> = ({ service }) => {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: service.route },
  ];

  return (
    <>
      <SEO title={service.metaTitle} description={service.metaDescription} path={service.route} />
      <Schema type="Service" data={{ name: service.title, description: service.description }} />
      <Schema type="BreadcrumbList" data={{ items: breadcrumbs }} />
      <PageLayout breadcrumbs={breadcrumbs}>
        <PageHeader
          title={service.title}
          description={service.description}
          badge={service.badge}
        />

        {/* Gallery Placeholder */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">{service.galleryLabel}</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-dark bg-pattern-grid">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
                {service.featuresTitle}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {service.featuresSubtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800 hover:border-brand-primary hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-brand-primary text-white">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra Section */}
        {service.extra && (
          <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 bg-pattern-dots">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
                  {service.extra.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  {service.extra.subtitle}
                </p>
              </div>
              <div className={`grid ${service.extra.columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
                {service.extra.blocks.map((block, index) => (
                  <div
                    key={index}
                    className="border-2 rounded-2xl p-8 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800"
                  >
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{block.title}</h3>
                    {block.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{block.description}</p>
                    )}
                    {block.list && (
                      <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                        {block.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Service Coverage */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-dark bg-pattern-diagonal">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wide">Serving all of SEQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
              {service.ctaTitle}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              {service.ctaText}
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              {service.ctaButton}
            </a>
          </div>
        </section>

        {/* Internal links to locations */}
        <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
              {service.title} Near You
            </h2>
            <div className="flex flex-wrap gap-3">
              {locationRoutes.map((route) => (
                <a
                  key={route}
                  href={route}
                    className="px-4 py-2 border-2 border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-brand-primary hover:text-brand-primary transition-all"
                >
                  {service.shortTitle} in {route.replace('/locations/', '').replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                </a>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default ServicePage;
