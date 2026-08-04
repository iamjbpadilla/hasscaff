import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Locations from './pages/Locations';
import ServicePage from './pages/ServicePage';
import LocationPage from './pages/LocationPage';
import NotFound from './pages/NotFound';
import DemoModal from './components/common/DemoModal';
import Analytics from './components/common/Analytics';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Analytics />
          <DemoModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:slug" element={<LocationPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            {/* Legacy redirects to canonical URLs */}
            <Route path="/brisbane" element={<Navigate to="/locations/brisbane" replace />} />
            <Route path="/gold-coast" element={<Navigate to="/locations/gold-coast" replace />} />
            <Route path="/sunshine-coast" element={<Navigate to="/locations/sunshine-coast" replace />} />
            <Route path="/residential" element={<Navigate to="/services/residential" replace />} />
            <Route path="/commercial" element={<Navigate to="/services/commercial" replace />} />
            <Route path="/labour-hire" element={<Navigate to="/services/labour-hire" replace />} />
            <Route path="/hang-on-systems" element={<Navigate to="/services/hang-on-systems" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
