import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Phone, Search } from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';
import { contactInfo } from '../data/qualityNurse';

const NotFoundPage: React.FC = () => {
  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, '')}`;
  };

  const quickLinks = [
    { title: "Accueil", href: "/" },
    { title: "Prestations", href: "/prestations" },
    { title: "Contact", href: "/contact" },
    { title: "Notre secteur", href: "/secteur" },
    { title: "FAQ", href: "/faq" },
    { title: "Témoignages", href: "/temoignages" }
  ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 min-h-[calc(100vh-70px)] sm:min-h-[calc(100vh-80px)] flex items-center justify-center pt-20 sm:pt-24">
      <PageContainer>
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* 404 */}
          <div className="mb-8 sm:mb-12">
            <div className="text-6xl sm:text-8xl lg:text-9xl font-light text-emerald-200 mb-4 sm:mb-6">404</div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </div>

          {/* Message */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Page non trouvée
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-lg mx-auto leading-relaxed">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
            <Link 
              to="/" 
              className="w-full sm:w-auto bg-emerald-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Retour à l'accueil</span>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto bg-white text-emerald-600 px-4 sm:px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium border border-emerald-200"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Page précédente</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center border border-gray-100 hover:border-emerald-200 group"
              >
                <span className="text-gray-900 font-medium text-sm sm:text-base group-hover:text-emerald-600 transition-colors">{link.title}</span>
              </Link>
            ))}
          </div>

          {/* Emergency Contact */}
          <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg max-w-md mx-auto border border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Besoin d'aide immédiate ?
            </h3>
            <button
              onClick={handleEmergencyCall}
              className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors mb-2"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-base sm:text-lg font-medium">{contactInfo.phone}</span>
            </button>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">Urgences 7j/7 - Disponible 24h/24</p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default NotFoundPage;