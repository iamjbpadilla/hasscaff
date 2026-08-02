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
  Sun,
  Moon
} from 'lucide-react';

const DogIcon = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M16 4V7C16 9.20914 14.2091 11 12 11H10V15H0V13L0.931622 10.8706C1.25226 10.9549 1.59036 11 1.94124 11C3.74931 11 5.32536 9.76947 5.76388 8.01538L3.82359 7.53031C3.60766 8.39406 2.83158 9.00001 1.94124 9.00001C1.87789 9.00001 1.81539 8.99702 1.75385 8.99119C1.02587 8.92223 0.432187 8.45551 0.160283 7.83121C0.0791432 7.64491 0.0266588 7.44457 0.00781272 7.23658C-0.0112323 7.02639 0.00407892 6.80838 0.0588889 6.58914C0.0588882 6.58914 0.0588896 6.58913 0.0588889 6.58914L0.698705 4.02986C1.14387 2.24919 2.7438 1 4.57928 1H10L12 4H16ZM9 6C9.55229 6 10 5.55228 10 5C10 4.44772 9.55229 4 9 4C8.44771 4 8 4.44772 8 5C8 5.55228 8.44771 6 9 6Z" 
      fill="#FFFFFF"
    />
  </svg>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const services = [
    {
      icon: <Wrench />,
      title: "Hang-On Scaffold Hire",
      description: "Rapid deployment for residential & commercial projects",
      specs: "Up to 450kg/m² capacity",
    },
    {
      icon: <Users />,
      title: "Scaffold Labour Hire",
      description: "Certified scaffolders available 24/7",
      specs: "QBCC certified crews",
    },
    {
      icon: <Building2 />,
      title: "Commercial Systems",
      description: "Heavy-duty engineered solutions",
      specs: "Custom engineering available",
    },
    {
      icon: <Home />,
      title: "Residential Packages",
      description: "Complete home renovation solutions",
      specs: "Weekend friendly",
    }
  ];

  const IconWrapper = ({ children }) => (
    <div className="text-brand-primary">
      {React.cloneElement(children, { className: 'w-6 h-6' })}
    </div>
  );

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'dark' : ''} bg-white text-gray-900 dark:bg-brand-dark dark:text-white`}>
      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t-2 border-brand-primary p-2 bg-gray-100 dark:bg-gray-900">
        <div className="flex gap-2">
          <a
            href="tel:0424170737"
            className="flex-1 min-h-touch flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold text-sm rounded"
          >
            <Phone className="w-5 h-5 text-white" />
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
      <header className="fixed top-0 left-0 right-0 z-40 border-b bg-white/80 backdrop-blur-lg border-gray-200 dark:bg-brand-dark/80 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <DogIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">HASSCAFF</span>
                <p className="text-xs text-gray-600 dark:text-gray-400">QBCC #12345678</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Services
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5 text-gray-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>
              <a 
                href="tel:0424170737" 
                className="flex items-center space-x-2 font-semibold text-sm text-brand-primary"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
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
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-900 dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-sm font-medium py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Services
              </a>
              <a href="#contact" className="block text-sm font-medium py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Contact
              </a>
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center space-x-2 text-brand-primary font-semibold py-2"
                >
                  {darkMode ? <Sun className="w-4 h-4 text-brand-primary" /> : <Moon className="w-4 h-4 text-brand-primary" />}
                  <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                <a 
                  href="tel:0424170737" 
                  className="flex items-center space-x-2 text-brand-primary font-semibold py-2"
                >
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>0424 170 737</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white dark:bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 border px-4 py-2 rounded-full bg-brand-primary/10 border-brand-primary/20">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                <span className="text-xs font-medium text-brand-primary">QBCC LICENSED • WORKCOVER APPROVED</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                Professional Scaffold<br />
                <span className="text-brand-primary">Hire & Labour</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-lg max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
                Reliable scaffolding solutions across Brisbane, Gold Coast & Sunshine Coast. 
                Certified crews, rapid dispatch, engineered for safety.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0424170737" 
                  className="min-h-touch flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-white" />
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
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">15+</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">24/7</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Dispatch</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$20M</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Insurance</p>
                </div>
              </div>
            </div>

            {/* Right - Quote Form */}
            <div 
              id="quote"
              className="border rounded-2xl p-8 bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-800"
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Request a Quote</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get a response within 2 hours</p>
              </div>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Request Received</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
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
                    <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Service Required</label>
                    <select className="w-full min-h-touch border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                      <option value="">Select service</option>
                      <option value="hang-on">Hang-On Scaffold Hire</option>
                      <option value="labour">Scaffold Labour Hire</option>
                      <option value="commercial">Commercial Full Package</option>
                      <option value="residential">Residential / Renovation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Job Location</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Brisbane South / 4000"
                      className="w-full min-h-touch border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="04XX XXX XXX"
                      className="w-full min-h-touch border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-2 text-gray-600 dark:text-gray-400">Attach Plans (Optional)</label>
                    <div className="min-h-touch border border-dashed rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:border-brand-primary transition-colors px-4 py-3 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700">
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

                  <p className="text-xs text-center text-gray-500">
                    <ShieldCheck className="w-3 h-3 inline mr-1 text-gray-500" />
                    QBCC Licensed • $20M Insured
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400">Professional scaffolding solutions for every project</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <a 
                key={index}
                href="#quote"
                className="border rounded-2xl p-8 hover:border-brand-primary transition-colors group bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-100 dark:bg-gray-800">
                    <IconWrapper>
                      {service.icon}
                    </IconWrapper>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-brand-primary transition-colors text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm mb-3 leading-relaxed text-gray-600 dark:text-gray-400">
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
      <section className="py-24 border-t bg-gray-50 border-gray-200 dark:bg-gray-900/50 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Service Areas</h2>
            <p className="text-gray-600 dark:text-gray-400">Rapid dispatch across South East Queensland</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border rounded-xl p-6 text-center bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
              <MapPin className="w-6 h-6 text-brand-primary mx-auto mb-3" />
              <p className="font-bold text-gray-900 dark:text-white">Brisbane</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Metro & Surrounds</p>
            </div>
            <div className="border rounded-xl p-6 text-center bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
              <MapPin className="w-6 h-6 text-brand-primary mx-auto mb-3" />
              <p className="font-bold text-gray-900 dark:text-white">Gold Coast</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">South to Coolangatta</p>
            </div>
            <div className="border rounded-xl p-6 text-center bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
              <MapPin className="w-6 h-6 text-brand-primary mx-auto mb-3" />
              <p className="font-bold text-gray-900 dark:text-white">Sunshine Coast</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Noosa to Caboolture</p>
            </div>
            <div className="border rounded-xl p-6 text-center bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
              <MapPin className="w-6 h-6 text-brand-primary mx-auto mb-3" />
              <p className="font-bold text-gray-900 dark:text-white">SEQ Wide</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Same-day service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t py-16 bg-white border-gray-200 dark:bg-brand-dark dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                  <DogIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">HASSCAFF</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">QBCC #12345678</p>
                </div>
              </div>
              <p className="text-sm mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                Professional scaffolding hire and labour services across South East Queensland.
              </p>
              <a 
                href="tel:0424170737" 
                className="flex items-center space-x-2 text-brand-primary font-semibold"
              >
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>0424 170 737</span>
              </a>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6 text-gray-900 dark:text-white">Compliance</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
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
              <h4 className="text-sm font-bold mb-6 text-gray-900 dark:text-white">Services</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>Hang-On Scaffold Hire</li>
                <li>Scaffold Labour Hire</li>
                <li>Commercial Systems</li>
                <li>Residential Packages</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500">
                &copy; 2024 Hasscaff. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
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
