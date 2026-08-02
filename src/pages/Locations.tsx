import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/layout/PageHeader';
import ServiceAreas from '../components/sections/ServiceAreas';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';

const Locations: React.FC = () => {
  return (
    <>
      <SEO 
        title="Locations - Hasscaff | Scaffolding Services Across SEQ"
        description="Professional scaffolding services across Brisbane, Gold Coast, Sunshine Coast and South East Queensland. QBCC licensed with rapid dispatch."
        path="/locations"
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' }
          ]
        }}
      />
      <PageLayout 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations' }
        ]}
      >
        <PageHeader 
          title="Service Locations"
          description="Professional scaffolding services across South East Queensland"
        />
        <ServiceAreas />
      </PageLayout>
    </>
  );
};

export default Locations;
