import React, { useState, useEffect } from 'react';
import { Phone, List } from 'lucide-react';

// Components
import Header from './layout/Header';
import Footer from './layout/Footer';

// Data and Types
import { 
  navigation, 
  services, 
  contactInfo, 
  stats
} from '../data/qualityNurse';
import { FormData } from '../types';

const QualityNurseWebsite: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
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
      <Header isScrolled={isScrolled} />

      {/* Hero Section */}
      <section id="accueil" className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Quality Nurse
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Soins infirmiers à domicile de qualité
            </p>
            <button
              onClick={handleEmergencyCall}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center space-x-2 text-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Contactez-nous: {contactInfo.phone}</span>
            </button>
          </div>
        </div>
      </section>

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
      <section id="prestations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contactez-nous</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Adresse:</strong> {contactInfo.address}, {contactInfo.city}
                </p>
                <p className="text-gray-600">
                  <strong>Téléphone:</strong> {contactInfo.phone}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> {contactInfo.email}
                </p>
                <p className="text-gray-600">
                  <strong>N° INAMI:</strong> {contactInfo.inami}
                </p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Prénom"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Nom"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <input
                  type="text"
                  name="object"
                  placeholder="Objet"
                  value={formData.object}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default QualityNurseWebsite;