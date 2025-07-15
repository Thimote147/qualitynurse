import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Shield, Clock } from "lucide-react";
import { contactInfo } from "../../data/qualityNurse";
import iconImage from "../../assets/icon.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, "")}`;
  };

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Prestations", href: "/prestations" },
    { name: "Secteur", href: "/secteur" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Liens utiles", href: "/liens" },
  ];

  const communes = ["Uccle", "Ixelles", "Forest", "Watermael-Boitsfort"];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <img
                  src={iconImage}
                  alt="Quality Nurse"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Quality Nurse
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Soins infirmiers à domicile
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 max-w-md">
              Votre partenaire de confiance pour des soins infirmiers de qualité
              à domicile dans la région de Bruxelles depuis plus de{" "}
              {new Date().getFullYear() - 2000} ans.
            </p>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium text-gray-900">
                  Agréé INAMI
                </span>
              </div>
              <p className="text-sm text-gray-600 font-mono">
                {contactInfo.inami}
              </p>
            </div>

            <div className="bg-emerald-50 p-3 sm:p-4 rounded-lg border border-emerald-200">
              <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-900">
                  Service d'urgence
                </span>
              </div>
              <p className="text-sm text-emerald-800">
                Disponible 24h/24, 7j/7
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 sm:mb-6 text-base sm:text-lg">
              Contact
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  <div className="font-medium">{contactInfo.name}</div>
                  <div>{contactInfo.address}</div>
                  <div>{contactInfo.city}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-500" />
                <button
                  onClick={handleEmergencyCall}
                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors font-medium py-3"
                >
                  {contactInfo.phone}
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-500" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors font-medium py-3"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation & Coverage */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 sm:mb-6 text-base sm:text-lg">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-emerald-600 transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-bold text-gray-900 mb-3 sm:mb-4 text-base">
              Zone de couverture
            </h4>
            <div className="space-y-1 sm:space-y-2">
              {communes.map((commune, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">{commune}</span>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Drogenbos (partie)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Auderghem (partie)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-sm text-gray-500">
              © {currentYear} QualityNurse.be. Tous droits réservés.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={handleEmergencyCall}
                className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition-colors font-medium"
              >
                Urgence: {contactInfo.phone}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
