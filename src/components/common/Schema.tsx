import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../../lib/constants';

interface SchemaProps {
  type: 'LocalBusiness' | 'Service' | 'BreadcrumbList';
  data?: any;
}

const Schema: React.FC<SchemaProps> = ({ type, data }) => {
  const generateLocalBusinessSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      description: 'Professional scaffolding hire and labour services across Brisbane, Gold Coast, and South East Queensland.',
      url: 'https://hasscaff.com.au',
      telephone: COMPANY_INFO.phone,
      email: 'info@hasscaff.com.au',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Brisbane',
        addressRegion: 'QLD',
        addressCountry: 'AU',
        postalCode: '4000'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-27.4698',
        longitude: '153.0251'
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Brisbane'
        },
        {
          '@type': 'City',
          name: 'Gold Coast'
        },
        {
          '@type': 'City',
          name: 'Sunshine Coast'
        }
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      },
      priceRange: '$$',
      paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
      license: `QBCC #${COMPANY_INFO.qbccLicense}`
    };
  };

  const generateServiceSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.name,
      description: data.description,
      provider: {
        '@type': 'LocalBusiness',
        name: COMPANY_INFO.name,
        telephone: COMPANY_INFO.phone
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Brisbane'
        },
        {
          '@type': 'City',
          name: 'Gold Coast'
        },
        {
          '@type': 'City',
          name: 'Sunshine Coast'
        }
      ]
    };
  };

  const generateBreadcrumbSchema = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: data.items.map((item: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `https://hasscaff.com.au${item.path}`
      }))
    };
  };

  const getSchema = () => {
    switch (type) {
      case 'LocalBusiness':
        return generateLocalBusinessSchema();
      case 'Service':
        return generateServiceSchema();
      case 'BreadcrumbList':
        return generateBreadcrumbSchema();
      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default Schema;
