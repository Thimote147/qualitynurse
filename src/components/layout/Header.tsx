import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { contactInfo } from '../../data/qualityNurse';
import iconImage from '../../assets/icon.png';

interface HeaderProps {
  isScrolled: boolean;
}

const navigation = [
  { path: '/', label: 'Accueil' },
  { path: '/nous', label: 'Nous' },
  { path: '/prestations', label: 'Prestations' },
  { path: '/extra', label: 'Services Extra' },
  { path: '/secteur', label: 'Secteur' },
  { path: '/faq', label: 'FAQ' },
  { path: '/liens', label: 'Liens Utiles' },
  { path: '/contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, '')}`;
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-xl' : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600'
      }`}
      onKeyDown={handleKeyDown}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 xl:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Optimized for mobile */}
          <Link to="/" className="flex items-center space-x-3 p-0">
            <div className={`w-12 h-12 rounded-lg ${
              isScrolled ? 'bg-white' : 'bg-white'
            } flex items-center justify-center shadow-lg flex-shrink-0`}>
              <img src={iconImage} alt="Quality Nurse" className="w-10 h-10" />
            </div>
            <div className="min-w-0">
              <h1 className={`text-xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Quality Nurse
              </h1>
              <p className={`text-sm leading-tight mb-1 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                Soins infirmiers & hospitaliers à domicile
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 xl:space-x-2" role="navigation" aria-label="Navigation principale">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 px-3 py-3 rounded-lg whitespace-nowrap relative group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                  location.pathname === item.path
                    ? (isScrolled ? 'text-emerald-600 bg-emerald-50 shadow-sm' : 'text-white bg-white/20 shadow-sm')
                    : (isScrolled ? 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 hover:shadow-sm' : 'text-white/80 hover:text-white hover:bg-white/10 hover:shadow-sm')
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`} />
              </Link>
            ))}
            
            {/* Separator */}
            <div className={`w-px h-6 mx-2 ${isScrolled ? 'bg-gray-300' : 'bg-white/30'}`} />
            
            {/* Desktop Actions */}
            <div className="flex items-center space-x-2">
              {/* Emergency Call Button */}
              <button
                onClick={handleEmergencyCall}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  isScrolled 
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg' 
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
                aria-label="Appel d'urgence"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">Urgence</span>
              </button>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-2">
            {/* Emergency Call Button - Mobile */}
            <button
              onClick={handleEmergencyCall}
              className={`xl:hidden pt-5 md:p-0 rounded-md transition-colors touch-target ${
                isScrolled ? 'text-red-600 hover:bg-red-50' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Appel d'urgence"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`xl:hidden p-2 rounded-md transition-colors touch-target ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menu de navigation"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`xl:hidden pb-4 animate-slide-down ${
            isScrolled ? 'border-t border-gray-200 bg-white' : 'border-t border-white/20'
          }`}>
            {/* Emergency Info Banner */}
            <div className={`px-4 py-3 mb-3 rounded-lg touch-spacing ${
              isScrolled ? 'bg-red-50' : 'bg-white/10'
            }`}>
              <div className="flex items-center space-x-2">
                <Phone className={`w-4 h-4 ${isScrolled ? 'text-red-600' : 'text-white'}`} />
                <span className={`text-sm font-medium ${
                  isScrolled ? 'text-red-600' : 'text-white'
                }`}>
                  Urgence 24h/24 : {contactInfo.phone}
                </span>
              </div>
            </div>

            <nav className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-colors duration-200 touch-target ${
                    location.pathname === item.path
                      ? (isScrolled ? 'bg-emerald-50 text-emerald-600' : 'bg-white/20 text-white')
                      : (isScrolled ? 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600' : 'text-white/80 hover:bg-white/10 hover:text-white')
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;