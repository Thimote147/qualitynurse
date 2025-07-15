import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Users,
  Award,
  Shield,
  Clock,
  MapPin,
} from "lucide-react";
import PageContainer from "../components/ui/PageContainer";
import SEO from "../components/SEO/SEO";
import { contactInfo, stats } from "../data/qualityNurse";
import { seoConfig } from "../data/seoConfig";

const HomePage: React.FC = () => {
  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, "")}`;
  };

  return (
    <PageContainer className="pt-0">
      <SEO {...seoConfig.home} />
      {/* Hero Section - Mobile Optimized */}
      <section
        className="relative flex items-center overflow-hidden min-h-screen"
        style={{ height: "100vh" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative w-full px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              {/* Emergency Info Banner - Mobile */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-white font-medium">
                  <span className="hidden sm:inline">
                    {contactInfo.phone} -{" "}
                  </span>
                  Disponible 24h/24
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                L'alternative à l'hospitalisation
              </h1>

              <div className="space-y-2 sm:space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed">
                  L'alternative à l'hospitalisation est possible grâce à{" "}
                  <span className="font-semibold text-white">
                    "Quality Nurse"
                  </span>
                  .
                </p>
                <p className="leading-relaxed">
                  La volonté du groupe Q&N est d'élever la qualité de service au
                  rang de vertu.
                </p>
                <p className="leading-relaxed">
                  La prise en charge de patients atteints de pathologies lourdes
                  requiert une expertise que seuls des professionnels de la
                  santé peuvent offrir.
                </p>
              </div>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleEmergencyCall}
                  className="w-full sm:w-auto bg-red-600 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  <span>Appeler maintenant</span>
                </button>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-white text-emerald-600 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail className="w-5 h-5" />
                  <span>Nous contacter</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/prestations"
                  className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-200 backdrop-blur-sm text-center"
                >
                  Nos prestations
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 sm:bottom-28 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-80 drop-shadow-lg" />
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-8 sm:py-16 bg-white relative -mt-16 sm:-mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-8 border border-gray-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-emerald-100 rounded-full mb-2 sm:mb-4 text-emerald-600">
                    {React.cloneElement(stat.icon as React.ReactElement, {
                      className: "w-4 h-4 sm:w-6 sm:h-6",
                    })}
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Besoin de soins à domicile dès maintenant ?
              </p>
              <button
                onClick={handleEmergencyCall}
                className="w-full sm:w-auto bg-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Contactez-nous</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section - Mobile Optimized */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nos Services Principaux
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des soins professionnels à domicile avec plus de{" "}
              {new Date().getFullYear() - 2000} années d'expérience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Soins à Domicile",
                description:
                  "Tous types de soins infirmiers dans le confort de votre domicile",
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                link: "/prestations",
                color: "emerald",
              },
              {
                title: "Disponibilité 24h/24",
                description:
                  "Service d'urgence disponible jour et nuit, toute l'année",
                icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
                link: "/contact",
                color: "blue",
              },
              {
                title: "Expertise Professionnelle",
                description: `${new Date().getFullYear() - 2000} années d'expérience en soins infirmiers spécialisés`,
                icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
                link: "/nous",
                color: "purple",
              },
              {
                title: "Qualité Garantie",
                description:
                  "Professionnels diplômés et matériel médical de pointe",
                icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
                link: "/nous",
                color: "teal",
              },
              {
                title: "Zone de Couverture",
                description: "Service dans 5 communes de Bruxelles et environs",
                icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
                link: "/secteur",
                color: "green",
              },
              {
                title: "Contact Direct",
                description: "Réponse rapide et prise en charge immédiate",
                icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
                link: "/contact",
                color: "red",
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-${service.color}-100 text-${service.color}-600 rounded-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Main CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border-l-4 border-emerald-600 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Besoin d'aide immédiate ?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Notre équipe est disponible 24h/24 pour répondre à vos urgences
                médicales
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handleEmergencyCall}
                  className="w-full sm:w-auto bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Urgence: {contactInfo.phone}</span>
                </button>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto bg-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Prendre rendez-vous</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default HomePage;
