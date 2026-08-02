import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import ServicesSection from '../components/sections/Services';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';

const Services: React.FC = () => {
  return (
    <>
      <SEO 
        title="Services - Hasscaff | Professional Scaffolding Solutions"
        description="Complete scaffolding services including hang-on scaffold hire, labour hire, commercial systems, and residential packages across Brisbane, Gold Coast & SEQ."
        path="/services"
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' }
          ]
        }}
      />
      <PageLayout 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' }
        ]}
      >
        <PageHeader 
          title="Our Services"
          description="Professional scaffolding solutions for every project"
        />
        <ServicesSection />
      </PageLayout>
    </>
  );
};

export default Services;
