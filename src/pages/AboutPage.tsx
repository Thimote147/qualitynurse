import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Stethoscope, Heart, Award, Clock, Shield, ArrowRight } from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/SEO/SEO';
import { seoConfig } from '../data/seoConfig';
import jcImage from '../assets/jc.jpg';

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <SEO {...seoConfig.about} />
      <PageHeader
        title="Qui sommes-nous ?"
        subtitle="Notre équipe"
        description="Une équipe de professionnels dédiés à votre bien-être à domicile avec plus de 20 années d'expérience"
      />

      <section className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
            
            {/* Text Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md border-l-4 border-emerald-600 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-emerald-600 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Fondation & Structure
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  La société "Quality Nurse" a été fondée par Mr Tonnelle Jean-Charles. C'est une structure indépendante, 
                  pratiquant le tiers payant, constituée d'infirmier(e)s ayant une expérience de vingt années en soins à domicile.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-teal-600 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                  <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Notre Spécialisation
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Nous sommes spécialisés dans la prise en charge à domicile de patients palliatifs, perfusés et de patients 
                  bénéficiant d'une nutrition entérale.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md border-l-4 border-cyan-600 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-cyan-600 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Notre Engagement Qualité
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Le nom Quality Nurse traduit notre volonté de nous positionner comme une véritable interface entre le domicile 
                  et l'hôpital tout en respectant le même niveau de qualité des soins.
                </p>
              </div>
            </div>

            {/* Team Leader Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl text-white order-1 lg:order-2">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                  <img src={jcImage} alt="Jean-Charles TONNELLE" className="w-full h-full object-cover object-top rounded-full scale-150" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">TONNELLE Jean-Charles</h3>
                <p className="text-emerald-100 font-medium text-sm sm:text-base">Infirmier SIAMU</p>
                <p className="text-white/80 text-sm">20 années de soins à domicile</p>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base">Expertise professionnelle reconnue</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base">Disponibilité 7j/7, 24h/24</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base">Patient au centre de nos préoccupations</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base">Qualité, sécurité et confort garantis</span>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white text-emerald-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base"
                >
                  Nous faire confiance
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Notre Philosophie</h3>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="space-y-3 sm:space-y-4 text-left">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Q&N est capable d'envisager la prise en charge dans sa globalité afin que le retour à domicile 
                    d'un patient soit réalisé selon des règles drastiques de qualité, de sécurité et de confort.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    C'est parce qu'au travers de toutes nos actions, nous gardons cette philosophie que nous pouvons 
                    vous garantir que le patient sera toujours au centre de nos préoccupations.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mt-8 sm:mt-12 md:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-6 md:mb-8">
              Nos Valeurs
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: 'Bienveillance',
                  description: 'Écoute et respect de chaque patient',
                  color: 'red'
                },
                {
                  icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: 'Sécurité',
                  description: 'Protocoles rigoureux et matériel de qualité',
                  color: 'blue'
                },
                {
                  icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: 'Excellence',
                  description: 'Formation continue et expertise reconnue',
                  color: 'yellow'
                },
                {
                  icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: 'Disponibilité',
                  description: 'Présence 24h/24 pour vos urgences',
                  color: 'green'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-${value.color}-100 text-${value.color}-600 rounded-full mb-3 sm:mb-4`}>
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-emerald-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Découvrez nos services
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Explorez notre gamme complète de soins infirmiers à domicile et découvrez comment nous pouvons vous aider.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link
                  to="/prestations"
                  className="w-full sm:w-auto bg-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium"
                >
                  <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Nos prestations</span>
                </Link>
                
                <Link
                  to="/secteur"
                  className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium"
                >
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Notre secteur</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default AboutPage;