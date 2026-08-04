import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Brisbane from './pages/Brisbane';
import GoldCoast from './pages/GoldCoast';
import SunshineCoast from './pages/SunshineCoast';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import LabourHire from './pages/LabourHire';
import HangOnSystems from './pages/HangOnSystems';
import Locations from './pages/Locations';
import NotFound from './pages/NotFound';
import DemoModal from './components/common/DemoModal';
import Analytics from './components/common/Analytics';
import Schema from './components/common/Schema';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Schema type="LocalBusiness" />
          <Analytics />
          <DemoModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/hang-on-systems" element={<HangOnSystems />} />
            <Route path="/services/labour-hire" element={<LabourHire />} />
            <Route path="/services/commercial" element={<Commercial />} />
            <Route path="/services/residential" element={<Residential />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/brisbane" element={<Brisbane />} />
            <Route path="/locations/gold-coast" element={<GoldCoast />} />
            <Route path="/locations/sunshine-coast" element={<SunshineCoast />} />
            {/* Legacy routes for backward compatibility */}
            <Route path="/brisbane" element={<Brisbane />} />
            <Route path="/gold-coast" element={<GoldCoast />} />
            <Route path="/sunshine-coast" element={<SunshineCoast />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/labour-hire" element={<LabourHire />} />
            <Route path="/hang-on-systems" element={<HangOnSystems />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
