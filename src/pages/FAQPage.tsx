import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';
import PageHeader from '../components/ui/PageHeader';
import { contactInfo } from '../data/qualityNurse';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<{[key: number]: boolean}>({});

  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, '')}`;
  };

  const toggleItem = (id: number) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = [
    {
      id: 1,
      question: "Quels types de soins proposez-vous à domicile ?",
      answer: "Nous proposons une large gamme de soins : toilette complète, administration de médicaments, glycémies capillaires, soins de plaies, perfusions, alimentation entérale et parentérale, sondages vésicaux, aspiration des voies respiratoires, et soins palliatifs."
    },
    {
      id: 2,
      question: "Dans quelles communes intervenez-vous ?",
      answer: "Nous couvrons Uccle, Ixelles, Forest, Waternael-Boitsfort, ainsi qu'une partie de Drogenbos. Notre secteur géographique restreint nous permet de garantir des interventions rapides."
    },
    {
      id: 3,
      question: "Pratiquez-vous le tiers payant ?",
      answer: "Oui, nous pratiquons le tiers payant avec toutes les mutuelles. Vous n'avez aucune avance de frais à faire, nous nous occupons directement de la facturation."
    },
    {
      id: 4,
      question: "Intervenez-vous en urgence ?",
      answer: "Oui, nous assurons une permanence 7j/7. En cas d'urgence, vous pouvez nous joindre au 0484/883.799. Nous évaluons chaque situation et nous déplaçons selon les besoins."
    },
    {
      id: 5,
      question: "Les soins sont-ils remboursés par la mutuelle ?",
      answer: "Oui, tous nos soins sont remboursés selon les barèmes INAMI en vigueur. Nous sommes agréés INAMI (numéro 941 741 32 001) et nos prestations sont reconnues par toutes les mutuelles."
    },
    {
      id: 6,
      question: "Comment se déroule la première visite ?",
      answer: "Lors de la première visite, nous évaluons vos besoins, établissons un plan de soins personnalisé, et nous assurons que toutes les conditions sont réunies pour un maintien à domicile en toute sécurité."
    },
    {
      id: 7,
      question: "Proposez-vous des soins palliatifs ?",
      answer: "Oui, nous sommes spécialisés dans la prise en charge de patients palliatifs à domicile. Notre équipe a l'expérience nécessaire pour accompagner les patients et leurs familles avec respect et professionnalisme."
    },
    {
      id: 8,
      question: "Travaillez-vous avec les médecins traitants ?",
      answer: "Absolument. Nous travaillons en étroite collaboration avec votre médecin traitant et l'équipe hospitalière pour assurer une continuité des soins optimale."
    }
  ];

  const FAQItem = ({ question, answer, id, isOpen, onToggle }: {
    question: string;
    answer: string;
    id: number;
    isOpen: boolean;
    onToggle: (id: number) => void;
  }) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors px-4 sm:px-6"
        onClick={() => onToggle(id)}
      >
        <span className="font-medium text-gray-900 pr-4 sm:pr-8 text-sm sm:text-base leading-tight">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-emerald-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-emerald-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 sm:pb-6 px-4 sm:px-6">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base pr-4 sm:pr-8">{answer}</p>
        </div>
      )}
    </div>
  );

  return (
    <PageContainer>
      <PageHeader 
        title="Questions fréquentes"
        subtitle="Retrouvez les réponses aux questions les plus courantes"
        description="Trouvez rapidement les réponses aux questions les plus fréquemment posées sur nos services de soins infirmiers à domicile"
      />

      <section className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FAQ */}
          <div className="bg-white rounded-lg sm:rounded-xl shadow-md mb-8 sm:mb-16">
            <div className="divide-y divide-gray-200">
              {faqData.map((faq) => (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  id={faq.id}
                  isOpen={openItems[faq.id]}
                  onToggle={toggleItem}
                />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-emerald-100">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Vous ne trouvez pas la réponse ?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                N'hésitez pas à nous contacter directement pour toute question spécifique
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={handleEmergencyCall}
                  className="w-full sm:w-auto bg-emerald-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{contactInfo.phone}</span>
                </button>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-full sm:w-auto bg-white text-emerald-600 px-4 sm:px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base font-medium border border-emerald-200"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{contactInfo.email}</span>
                </a>
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
                to="/contact"
                className="px-3 sm:px-4 py-2 text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default FAQPage;