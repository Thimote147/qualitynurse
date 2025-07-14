import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/SEO/SEO';
import { services, contactInfo } from '../data/qualityNurse';
import { seoConfig } from '../data/seoConfig';

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, '')}`;
  };

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'basic': return 'bg-emerald-100 text-emerald-800';
      case 'advanced': return 'bg-blue-100 text-blue-800';
      case 'specialized': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryCount = (category: string) => {
    return category === 'all' ? services.length : services.filter(s => s.category === category).length;
  };

  return (
    <PageContainer>
      <SEO {...seoConfig.services} />
      <PageHeader
        title="Nos Prestations"
        subtitle="Services professionnels"
        description="Afin de répondre au mieux aux besoins des patients à domicile, Quality Nurse est une structure composée d'intervenants qui sont (et seront toujours) des professionnels de la santé. Car seuls des infirmiers diplômés sont à même d'avoir l'expertise suffisante pour évaluer une situation à risque et donc permettre un retour ou un maintien à domicile en toute sécurité. Ainsi chaque prise en charge est personnalisée."
      />

      <section className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter - Mobile Optimized */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center sm:text-left">
              Filtrer par catégorie
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
              {[
                { key: 'all', label: 'Tous les soins', color: 'emerald' },
                { key: 'basic', label: 'Soins de base', color: 'emerald' },
                { key: 'advanced', label: 'Soins avancés', color: 'blue' },
                { key: 'specialized', label: 'Soins spécialisés', color: 'purple' }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base whitespace-nowrap ${
                    selectedCategory === category.key
                      ? `bg-${category.color}-600 text-white shadow-lg` 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                  <span className="ml-1 sm:ml-2 text-xs">
                    ({getCategoryCount(category.key)})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid - Mobile Optimized */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`p-2 sm:p-3 rounded-lg ${getCategoryColor(service.category)} group-hover:scale-110 transition-transform flex-shrink-0`}>
                    {React.cloneElement(service.icon as React.ReactElement, {
                      className: "w-4 h-4 sm:w-5 sm:h-5"
                    })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(service.category)}`}>
                      {service.category === 'basic' ? 'Soins de base' : 
                       service.category === 'advanced' ? 'Soins avancés' : 'Soins spécialisés'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action - Mobile Optimized */}
          <div className="mt-8 sm:mt-16">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-emerald-100">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Besoin d'un de ces soins ?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Notre équipe est prête à intervenir rapidement à votre domicile. 
                  Contactez-nous pour une évaluation personnalisée de vos besoins.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
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
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Prendre rendez-vous</span>
                  </Link>
                </div>

                <div className="mt-6 sm:mt-8 grid sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <div className="text-lg sm:text-xl font-bold text-emerald-600">24h/24</div>
                    <div className="text-xs sm:text-sm text-gray-600">Disponibilité</div>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <div className="text-lg sm:text-xl font-bold text-blue-600">20+ ans</div>
                    <div className="text-xs sm:text-sm text-gray-600">Expérience</div>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <div className="text-lg sm:text-xl font-bold text-purple-600">100%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Professionnels</div>
                  </div>
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
                to="/nous"
                className="px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Notre équipe
              </Link>
              <Link
                to="/secteur"
                className="px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Zone de couverture
              </Link>
              <Link
                to="/temoignages"
                className="px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Témoignages
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

export default ServicesPage;