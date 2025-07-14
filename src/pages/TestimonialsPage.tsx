import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, Mail, Users, Award, Heart } from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';
import PageHeader from '../components/ui/PageHeader';
import { contactInfo } from '../data/qualityNurse';

const TestimonialsPage: React.FC = () => {
  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, '')}`;
  };
  const testimonials = [
    {
      id: 1,
      name: "Marie D.",
      location: "Uccle",
      rating: 5,
      text: "Après mon hospitalisation, l'équipe de Quality Nurse m'a permis de rentrer chez moi en toute sécurité. Jean-Charles et son équipe sont d'un professionnalisme exemplaire.",
      service: "Soins post-hospitalisation"
    },
    {
      id: 2,
      name: "Paul M.",
      location: "Ixelles",
      rating: 5,
      text: "La prise en charge de ma nutrition entérale à domicile s'est parfaitement déroulée. Je recommande vivement Quality Nurse pour leur expertise.",
      service: "Nutrition entérale"
    },
    {
      id: 3,
      name: "Famille L.",
      location: "Forest",
      rating: 5,
      text: "Durant les derniers mois de notre mère, Quality Nurse nous a accompagnés avec beaucoup de respect et de professionnalisme.",
      service: "Soins palliatifs"
    },
    {
      id: 4,
      name: "Sophie R.",
      location: "Waternael-Boitsfort",
      rating: 5,
      text: "Les soins de perfusion à domicile m'ont évité de nombreux déplacements à l'hôpital. L'équipe est ponctuelle et rassurante.",
      service: "Perfusions à domicile"
    }
  ];

  const stats = [
    { 
      number: "20+", 
      label: "Années d'expérience",
      icon: <Award className="w-6 h-6" />,
      color: "emerald"
    },
    { 
      number: "150+", 
      label: "Familles accompagnées",
      icon: <Users className="w-6 h-6" />,
      color: "blue"
    },
    { 
      number: "7j/7", 
      label: "Disponibilité",
      icon: <Heart className="w-6 h-6" />,
      color: "purple"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'text-emerald-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Témoignages"
        subtitle="L'expérience de nos patients et de leurs familles"
        description="Découvrez les témoignages de nos patients et de leurs familles qui nous font confiance pour leurs soins à domicile"
      />

      <section className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-md">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-${stat.color}-100 rounded-full mb-4 text-${stat.color}-600`}>
                  {React.cloneElement(stat.icon as React.ReactElement, {
                    className: "w-6 h-6 sm:w-8 sm:h-8"
                  })}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md border border-gray-100">
                <div className="mb-4 sm:mb-6">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-emerald-600 font-medium">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-emerald-100">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Rejoignez nos patients satisfaits
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Bénéficiez vous aussi de soins infirmiers de qualité à domicile avec plus de 20 années d'expérience
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
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Nous contacter</span>
                </Link>
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
                to="/secteur"
                className="px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Zone de couverture
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

export default TestimonialsPage;