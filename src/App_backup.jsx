import React, { useState } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  ShieldCheck, 
  Wrench,
  Users,
  Building2,
  Home,
  Upload,
  MapPin,
  Dog,
  Sun,
  Moon
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const services = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Hang-On Scaffold Hire",
      description: "Rapid deployment for residential & commercial projects",
      specs: "Up to 450kg/m² capacity",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Scaffold Labour Hire",
      description: "Certified scaffolders available 24/7",
      specs: "QBCC certified crews",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Commercial Systems",
      description: "Heavy-duty engineered solutions",
      specs: "Custom engineering available",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residential Packages",
      description: "Complete home renovation solutions",
      specs: "Weekend friendly",
    }
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-brand-dark text-white' : 'bg-white text-gray-900'}`}>
      {/* Mobile Sticky Action Bar */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 border-t-2 border-brand-primary p-2 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="flex gap-2">
          <a
            href="tel:0424170737"
            className="flex-1 min-h-touch flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-sm rounded"
          >
            <Phone className="w-5 h-5" />
            <span>CALL: 0424 170 737</span>
          </a>
          <a
            href="#quote"
            className="flex-1 min-h-touch flex items-center justify-center bg-brand-secondary text-white font-semibold text-sm rounded"
          >
            <span>GET QUOTE</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 border-b ${darkMode ? 'bg-brand-dark/80 backdrop-blur-lg border-gray-800' : 'bg-white/80 backdrop-blur-lg border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <Dog className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">HASSCAFF</span>
                <p className="text-xs text-brand-gray">QBCC #12345678</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className={`text-sm font-medium transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                Services
              </a>
              <a href="#contact" className={`text-sm font-medium transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                Contact
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                {darkMode ? <Sun className="w-5 h-5 text-gray-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              <a 
                href="tel:0424170737" 
                className={`flex items-center space-x-2 font-semibold text-sm ${darkMode ? 'text-brand-primary' : 'text-brand-primary'}`}
              >
                <Phone className="w-4 h-4" />
                <span>0424 170 737</span>
              </a>
              <a 
                href="#quote" 
                className="min-h-touch px-6 bg-brand-primary text-white font-semibold text-sm rounded-full hover:bg-brand-secondary transition-colors"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className={`block text-sm font-medium py-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                Services
              </a>
              <a href="#contact" className={`block text-sm font-medium py-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                Contact
              </a>
              <div className="pt-3 border-t border-gray-700">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center space-x-2 text-brand-primary font-semibold py-2"
                >
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                <a 
                  href="tel:0424170737" 
                  className="flex items-center space-x-2 text-brand-primary font-semibold py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>0424 170 737</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                <span className="text-xs font-medium text-brand-primary">QBCC LICENSED • WORKCOVER APPROVED</span>
              </div>
              
              {/* Headline */}
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Professional Scaffold<br />
                <span className="text-brand-primary">Hire & Labour</span>
              </h1>
              
              {/* Subtext */}
              <p className={`text-lg max-w-xl leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Reliable scaffolding solutions across Brisbane, Gold Coast & Sunshine Coast. 
                Certified crews, rapid dispatch, engineered for safety.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0424170737" 
                  className="min-h-touch flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 0424 170 737</span>
                </a>
                <a 
                  href="#quote" 
                  className="min-h-touch flex items-center justify-center border-2 border-brand-primary text-brand-primary font-semibold rounded-full hover:bg-brand-primary hover:text-white transition-colors"
                >
                  <span>Get Free Quote</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                <div>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>15+</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</p>
                </div>
                <div>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>24/7</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dispatch</p>
                </div>
                <div>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>$20M</p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Insurance</p>
                </div>
              </div>
            </div>

            {/* Right - Quote Form */}
            <div 
              id="quote"
              className={`border rounded-2xl p-8 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}
            >
              <div className="mb-6">
                <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Request a Quote</h2>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Get a response within 2 hours</p>
              </div>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Request Received</h3>
                  <p className={darkMode ? 'text-gray-400 mb-4' : 'text-gray-600 mb-4'}>
                    We'll call you back within 2 hours.
                  </p>
                  <p className="text-sm text-brand-primary font-semibold">
                    Need immediate assistance? Call 0424 170 737
                  </p>
                </div>
              ) : (
                <form 
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setFormSubmitted(true);
                    }, 1500);
                  }}
                >
                  <div>
                    <label className={`block text-xs font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Service Required</label>
                    <select className={`w-full min-h-touch border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}>
                      <option value="">Select service</option>
                      <option value="hang-on">Hang-On Scaffold Hire</option>
                      <option value="labour">Scaffold Labour Hire</option>
                      <option value="commercial">Commercial Full Package</option>
                      <option value="residential">Residential / Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Job Location</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Brisbane South / 4000"
                      className={`w-full min-h-touch border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="04XX XXX XXX"
                      className={`w-full min-h-touch border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-medium mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Attach Plans (Optional)</label>
                    <div className={`min-h-touch border border-dashed rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:border-brand-primary transition-colors px-4 py-3 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
                      <Upload className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-400">Click to upload PDF, PNG, JPG</span>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[52px] bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>

                  <p className={`text-xs text-center ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    <ShieldCheck className="w-3 h-3 inline mr-1" />
                    QBCC Licensed • $20M Insured
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Our Services</h2>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Professional scaffolding solutions for every project</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <a 
                key={index}
                href="#quote"
                className={`border rounded-2xl p-8 hover:border-brand-primary transition-colors group ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <div className="text-brand-primary">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-2 group-hover:text-brand-primary transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm mb-3 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                    <p className="text-xs text-brand-primary font-medium">
                      {service.specs}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className={`py-24 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Service Areas</h2>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Rapid dispatch across South East Queensland</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className={`border rounded-xl p-6 text-center ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <MapPin className="w-6 h-6 text-brand-primary mx-auto mb-3" />
              <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Brisbane</p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Metro & Surrounds</p>
            </div>
            <div className={`border rounded-xl p-6 text-center ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <MapPin className="w-6 h-6 text-brand-primary mx-auto mb-3" />
              <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Gold Coast</p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>South to Coolangatta</p>
            </div>
            <div className={`border rounded-xl p-6 text-center ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <MapPin className="w-6 h-6 text-brand-primary mx-auto mb-3" />
              <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sunshine Coast</p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Noosa to Caboolture</p>
            </div>
            <div className={`border rounded-xl p-6 text-center ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              <MapPin className="w-6 h-6 text-brand-primary mx-auto mb-3" />
              <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>SEQ Wide</p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Same-day service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={`border-t py-16 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                  <Dog className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">HASSCAFF</span>
                  <p className="text-xs text-brand-gray">QBCC #12345678</p>
                </div>
              </div>
              <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Professional scaffolding hire and labour services across South East Queensland.
              </p>
              <a 
                href="tel:0424170737" 
                className="flex items-center space-x-2 text-brand-primary font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>0424 170 737</span>
              </a>
            </div>

            <div>
              <h4 className={`text-sm font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Compliance</h4>
              <ul className={`space-y-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                  <span>QBCC Licensed #12345678</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                  <span>$20M Public Liability</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                  <span>WorkCover Approved</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-brand-primary" />
                  <span>Safety Certified</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={`text-sm font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Services</h4>
              <ul className={`space-y-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Hang-On Scaffold Hire</li>
                <li>Scaffold Labour Hire</li>
                <li>Commercial Systems</li>
                <li>Residential Packages</li>
              </ul>
            </div>
          </div>

          <div className={`border-t mt-12 pt-8 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                &copy; 2024 Hasscaff. All rights reserved.
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                QBCC License #12345678 • ABN XX XXX XXX XXX
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
