import PageLayout from '../components/layout/PageLayout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import ServiceAreas from '../components/sections/ServiceAreas';
import BookingProcess from '../components/sections/BookingProcess';
import SEO from '../components/common/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO />
      <PageLayout>
        <Hero />
        <Services />
        <ServiceAreas />
        <BookingProcess />
      </PageLayout>
    </>
  );
};

export default Home;
