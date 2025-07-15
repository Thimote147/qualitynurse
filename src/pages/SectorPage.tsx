import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Shield, Users } from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/SEO/SEO';
import { contactInfo } from '../data/qualityNurse';
import { seoConfig } from '../data/seoConfig';

const SectorPage: React.FC = () => {
  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, '')}`;
  };

  const communes = [
    {
      name: 'Uccle',
      description: 'Couverture complète de la commune'
    },
    {
      name: 'Ixelles',
      description: 'Tous quartiers desservis'
    },
    {
      name: 'Forest',
      description: 'Service 24h/24 disponible'
    },
    {
      name: 'Watermael-Boitsfort',
      description: 'Intervention rapide garantie'
    }
  ];

  const advantages = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Intervention rapide',
      description: 'Secteur restreint pour des déplacements plus rapides'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Connaissance du terrain',
      description: 'Expertise locale et partenariats avec les services médicaux'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Proximité',
      description: 'Relation de confiance avec les patients et familles'
    }
  ];

  return (
    <PageContainer>
      <SEO {...seoConfig.sector} />
      <PageHeader 
        title="Notre Secteur"
        subtitle="Zones d'intervention Quality Nurse"
        description="Un secteur géographique restreint pour une meilleure qualité de service et des interventions plus rapides"
      />

      <section className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Zones d'intervention
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  Notre secteur couvre les communes suivantes avec un service personnalisé :
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  {communes.map((commune, index) => (
                    <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{commune.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{commune.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-sm sm:text-base text-emerald-800">
                    Ainsi qu'une partie de <strong>Drogenbos et Auderghem</strong>
                  </p>
                </div>
              </div>

              {/* Advantages */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Avantages de notre secteur restreint
                </h3>
                <div className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        {React.cloneElement(advantage.icon as React.ReactElement, {
                          className: "w-5 h-5 text-emerald-600"
                        })}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{advantage.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Map Placeholder */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-6 sm:p-8">
              <div className="aspect-square bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Bruxelles Sud
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Zone de couverture Quality Nurse
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                  Contact d'urgence
                </h4>
                <button
                  onClick={handleEmergencyCall}
                  className="inline-flex items-center space-x-2 sm:space-x-3 text-emerald-600 hover:text-emerald-700 transition-colors group"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-base sm:text-lg font-medium">{contactInfo.phone}</span>
                </button>
                <p className="text-xs text-gray-500 mt-2">Disponible 24h/24, 7j/7</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 sm:mt-16">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-emerald-100">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Vous habitez dans notre secteur ?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Contactez-nous dès maintenant pour bénéficier de soins infirmiers de qualité à votre domicile
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={handleEmergencyCall}
                    className="w-full sm:w-auto bg-red-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Urgence: {contactInfo.phone}</span>
                  </button>
                  
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto bg-emerald-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium"
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Prendre rendez-vous</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 sm:mt-12 text-center">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
              En savoir plus sur Quality Nurse
            </h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <Link
                to="/prestations"
                className="px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Nos prestations
              </Link>
              <Link
                to="/nous"
                className="px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Notre équipe
              </Link>
              <Link
                to="/faq"
                className="px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Questions fréquentes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default SectorPage;