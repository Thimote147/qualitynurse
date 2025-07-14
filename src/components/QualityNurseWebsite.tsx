import React, { useState, useEffect } from 'react';
import { Phone, List } from 'lucide-react';

// Components
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Data and Types
import { 
  navigation, 
  services, 
  contactInfo, 
  stats
} from '../data/qualityNurse';
import { FormData } from '../types';

const QualityNurseWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showTOC, setShowTOC] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    lastname: '',
    firstname: '',
    email: '',
    object: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowTOC(window.scrollY > 200);
      
      const sections = navigation.map(nav => nav.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Update URL fragment when section changes
    if (activeSection && window.location.hash !== `#${activeSection}`) {
      window.history.replaceState(null, '', `#${activeSection}`);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Handle initial URL fragment
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && navigation.some(nav => nav.id === hash)) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      lastname: '',
      firstname: '',
      email: '',
      object: '',
      message: ''
    });
    alert('Message envoyé avec succès! Nous vous recontacterons dans les plus brefs délais.');
  };

  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, '')}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Call Button */}
      <button
        onClick={handleEmergencyCall}
        className="fixed bottom-6 right-6 z-50 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all duration-200 animate-pulse hover:animate-none group"
        aria-label="Appel d'urgence"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Urgence: {contactInfo.phone}
        </span>
      </button>

      {/* Floating Table of Contents */}
      {showTOC && (
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-gray-200">
            <div className="flex items-center space-x-2 mb-3">
              <List className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">Navigation</span>
            </div>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-xs rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-emerald-100 text-emerald-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Header */}
      <Header
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        navigation={navigation}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        onScrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero
        contactInfo={contactInfo}
        onEmergencyCall={handleEmergencyCall}
        onScrollToSection={scrollToSection}
      />

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 text-emerald-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Besoin de soins à domicile dès maintenant ?</p>
              <button
                onClick={handleEmergencyCall}
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contactez-nous</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services
        services={services}
        selectedCategory={selectedCategory}
        contactInfo={contactInfo}
        onCategoryChange={setSelectedCategory}
        onEmergencyCall={handleEmergencyCall}
        onScrollToSection={scrollToSection}
      />

      {/* Contact Section */}
      <Contact
        contactInfo={contactInfo}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />

      {/* Footer */}
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default QualityNurseWebsite;