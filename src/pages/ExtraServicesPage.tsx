import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, Phone, Mail, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/SEO/SEO';
import { contactInfo } from '../data/qualityNurse';
import { seoConfig } from '../data/seoConfig';

const ExtraServicesPage: React.FC = () => {
  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, '')}`;
  };

  return (
    <PageContainer>
      <SEO {...seoConfig.extraServices} />
      <PageHeader
        title="Services Complémentaires"
        subtitle="Au-delà des soins"
        description="Des services additionnels pour un accompagnement complet et personnalisé à domicile"
      />

      <section className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          
          {/* Main Services Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
            
            {/* Home Care Support */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Home className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Aide au maintien à domicile
                    </h3>
                    <p className="text-sm sm:text-base text-emerald-100">
                      Support complet pour votre confort
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Pour cet ensemble de service, l'équipe de QUALITY NURSE se veut à la pointe du progrès, 
                    avec la logistique la plus adaptée à vos besoins, que ce soit en terme de fourniture ou de garde malade. 
                    Elle dispose du meilleur matériel médical.
                  </p>
                  
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Si d'autres services doivent être mis en place (aide familiale, garde malade, pédicure, coiffeur, ...) 
                    votre infirmier pourra vous renseigner ou vous donner des coordonnées d'une personne de contact.
                  </p>
                  
                  {/* Services List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Services inclus :</h4>
                    <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                      {[
                        'Matériel médical professionnel',
                        'Garde malade qualifiée',
                        'Coordination des soins',
                        'Aide familiale',
                        'Services de confort',
                        'Accompagnement personnalisé'
                      ].map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-medium">
                      Matériel médical
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-medium">
                      Garde malade
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-medium">
                      Coordination
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Service */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Service de facturation
                    </h3>
                    <p className="text-sm sm:text-base text-blue-100">
                      Gestion administrative complète
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Outre les soins prodigués aux patients, notre société vous propose aussi un service de facturation, 
                    d'encodages de vos soins à l'aide d'un logiciel agréé par l'Inami.
                  </p>
                  
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    C'est un service complet suivant la législation en vigueur. Ce service de facturation est destiné 
                    aux infirmiers à domicile travaillant sur la région de Bruxelles ainsi que dans toute la Belgique.
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Caractéristiques :</h4>
                    <div className="space-y-2">
                      {[
                        'Logiciel agréé par l\'Inami',
                        'Conforme à la législation en vigueur',
                        'Service pour toute la Belgique',
                        'Encodage automatisé des soins',
                        'Suivi des remboursements',
                        'Support technique inclus'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                      Logiciel Inami
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                      Conforme
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                      Belgique entière
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 sm:p-8 rounded-xl sm:rounded-2xl mb-8 sm:mb-12">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Pourquoi choisir nos services extra ?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
                Une approche holistique pour votre bien-être et votre tranquillité d'esprit
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: 'Expertise',
                  description: 'Équipe spécialisée et formée',
                  color: 'emerald'
                },
                {
                  icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: 'Réseau',
                  description: 'Partenaires de confiance',
                  color: 'blue'
                },
                {
                  icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: 'Qualité',
                  description: 'Matériel médical certifié',
                  color: 'green'
                },
                {
                  icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: 'Légalité',
                  description: 'Conformité réglementaire',
                  color: 'purple'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-${item.color}-100 text-${item.color}-600 rounded-full mb-3 sm:mb-4`}>
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="grid md:grid-cols-2 gap-8 mb-8 sm:mb-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Pour les patients et familles
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-gray-700">
                  Nos services complémentaires vous permettent de bénéficier d'un accompagnement complet 
                  pour maintenir votre autonomie et votre confort à domicile.
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li>• Coordination avec d'autres professionnels</li>
                  <li>• Matériel médical de pointe</li>
                  <li>• Soutien logistique personnalisé</li>
                  <li>• Tranquillité d'esprit garantie</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Pour les professionnels
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base text-gray-700">
                  Notre service de facturation permet aux infirmiers indépendants de se concentrer 
                  sur les soins tout en respectant les obligations administratives.
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                  <li>• Gestion administrative simplifiée</li>
                  <li>• Conformité Inami garantie</li>
                  <li>• Support technique dédié</li>
                  <li>• Couverture nationale</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 sm:p-8 rounded-xl sm:rounded-2xl text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Intéressé par nos services complémentaires ?
            </h3>
            <p className="text-sm sm:text-base text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment 
              nous pouvons vous accompagner au-delà des soins infirmiers traditionnels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                onClick={handleEmergencyCall}
                className="w-full sm:w-auto bg-white text-emerald-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Appelez-nous : {contactInfo.phone}</span>
              </button>
              
              <Link
                to="/contact"
                className="w-full sm:w-auto border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Demander des informations</span>
              </Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 sm:mt-12 text-center">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
              Découvrez aussi
            </h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <Link
                to="/prestations"
                className="inline-flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Nos prestations de soins
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                to="/nous"
                className="inline-flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Notre équipe
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                to="/secteur"
                className="inline-flex items-center px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Zone de couverture
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ExtraServicesPage;