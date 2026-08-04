import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Hasscaff | Heavy-Duty Scaffold Hire & Labour | Brisbane, Gold Coast & SEQ',
  description = 'Professional scaffolding hire and labour services across Brisbane, Gold Coast, and South East Queensland. QBCC licensed, fully insured, and safety compliant.',
  path = '',
  noIndex = false,
}) => {
  const url = `https://hasscaff.com.au${path}`;
  const image = 'https://hasscaff.com.au/og-image.jpg';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:locale" content="en_AU" />
      <meta property="og:site_name" content="Hasscaff" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
