import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, AlertTriangle, Phone, Mail } from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/SEO/SEO';
import { contactInfo } from '../data/qualityNurse';
import { seoConfig } from '../data/seoConfig';

const LinksPage: React.FC = () => {
  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, '')}`;
  };
  const linkCategories = [
    {
      title: "Organismes officiels",
      links: [
        {
          name: "INAMI - Institut National d'Assurance Maladie-Invalidité",
          url: "https://www.inami.fgov.be/fr/professionnels/sante/infirmiers/Pages/default.aspx",
          description: "Informations officielles pour les professionnels infirmiers",
          status: "active" as const
        },
        {
          name: "Honoraires et remboursements",
          url: "https://www.inami.fgov.be/fr/themes/cout-remboursement/par-mutualite/prestations-individuelles/prix/Pages/infirmier.aspx",
          description: "Barème officiel des honoraires infirmiers",
          status: "active" as const
        }
      ]
    },
    {
      title: "Soins à domicile",
      links: [
        {
          name: "Soins chez soi",
          url: "http://www.soinschezsoi.be/",
          description: "Plateforme d'information sur les soins à domicile",
          status: "active" as const
        },
        {
          name: "Les soins palliatifs",
          url: "http://www.hospidom.be/index.php/reseau-hospidom/",
          description: "Réseau de soins palliatifs à domicile",
          status: "inactive" as const,
          note: "Page non accessible"
        }
      ]
    },
    {
      title: "Matériel médical",
      links: [
        {
          name: "Alphamed Medical",
          url: "http://www.alphamed-medical.com/",
          description: "Matériel médical et bandagisterie",
          status: "active" as const
        }
      ]
    },
    {
      title: "Services d'urgence",
      links: [
        {
          name: "Pharmacie de garde",
          url: "http://www.bruxelles.be/artdet.cfm/4212",
          description: "Informations sur les pharmacies de garde à Bruxelles",
          status: "inactive" as const,
          note: "Page non existante"
        }
      ]
    }
  ];

  interface LinkType {
    name: string;
    url: string;
    description: string;
    status: 'active' | 'inactive';
    note?: string;
  }

  const LinkCard = ({ link }: { link: LinkType }) => {
    const isActive = link.status === 'active';
    
    return (
      <div className={`border-l-4 pl-4 sm:pl-6 py-4 ${
        isActive ? 'border-emerald-500' : 'border-red-400'
      }`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{link.name}</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-2 leading-relaxed">{link.description}</p>
            {link.note && (
              <p className="text-red-500 text-xs italic">*{link.note}</p>
            )}
          </div>
          {isActive && (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 transition-colors flex-shrink-0"
            >
              <span className="text-xs sm:text-sm">Visiter</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {!isActive && (
            <AlertTriangle className="w-4 h-4 text-red-400 ml-4 flex-shrink-0" />
          )}
        </div>
      </div>
    );
  };

  return (
    <PageContainer>
      <SEO {...seoConfig.links} />
      <PageHeader 
        title="Liens utiles"
        subtitle="Une sélection de liens vers des organismes et services utiles"
        description="Accédez rapidement aux informations et services essentiels pour vos soins de santé à domicile"
      />

      <section className="py-8 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-blue-900 mb-2 text-sm sm:text-base">Information importante</h3>
                <p className="text-blue-800 text-xs sm:text-sm leading-relaxed">
                  Certains liens peuvent être temporairement inaccessibles. 
                  En cas de problème, n'hésitez pas à nous contacter.
                </p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-8 sm:space-y-12 mb-8 sm:mb-16">
            {linkCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                  {category.title}
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {category.links.map((link, linkIndex) => (
                    <LinkCard key={linkIndex} link={link} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-emerald-100">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Besoin d'aide ?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Notre équipe peut vous orienter vers les bons interlocuteurs
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

export default LinksPage;