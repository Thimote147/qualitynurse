import React from 'react';
import { 
  Clock, Shield, Award, MapPin, Home, Activity, Stethoscope, 
  Heart, FileText, CheckCircle
} from 'lucide-react';
import { NavigationItem, Service, UsefulLink, ContactInfo, Testimonial, FAQ, Sector, Stat } from '../types';

// Navigation data
export const navigation: NavigationItem[] = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'nous', label: 'Nous', href: '#nous' },
  { id: 'prestations', label: 'Prestations', href: '#prestations' },
  { id: 'extra', label: 'Services Extra', href: '#extra' },
  { id: 'secteur', label: 'Secteur', href: '#secteur' },
  { id: 'temoignages', label: 'Témoignages', href: '#temoignages' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'liens', label: 'Liens Utiles', href: '#liens' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

// Services data
export const services: Service[] = [
  { 
    title: 'Toilette complète', 
    description: 'Soins d\'hygiène corporelle personnalisés à domicile avec respect de la dignité du patient',
    icon: React.createElement(Home, { className: "w-5 h-5" }),
    category: 'basic'
  },
  { 
    title: 'Administration de médicaments', 
    description: 'Injections sous-cutanées, intra-musculaires, intra-veineuses par des professionnels qualifiés',
    icon: React.createElement(Activity, { className: "w-5 h-5" }),
    category: 'advanced'
  },
  { 
    title: 'Glycémies capillaires', 
    description: 'Surveillance et contrôle du taux de glucose sanguin pour patients diabétiques',
    icon: React.createElement(Stethoscope, { className: "w-5 h-5" }),
    category: 'basic'
  },
  { 
    title: 'Soins de plaies', 
    description: 'Soins simples, complexes et spécifiques avec matériel stérilisé et techniques adaptées',
    icon: React.createElement(Shield, { className: "w-5 h-5" }),
    category: 'advanced'
  },
  { 
    title: 'Perfusions', 
    description: 'Mise en place et surveillance de perfusions sous-cutanées et intra-veineuses',
    icon: React.createElement(Activity, { className: "w-5 h-5" }),
    category: 'specialized'
  },
  { 
    title: 'Alimentation parentérale', 
    description: 'Nutrition par voie intraveineuse pour patients ne pouvant s\'alimenter normalement',
    icon: React.createElement(Heart, { className: "w-5 h-5" }),
    category: 'specialized'
  },
  { 
    title: 'Alimentation entérale', 
    description: 'Nutrition par sonde gastrique ou stomie avec surveillance continue',
    icon: React.createElement(FileText, { className: "w-5 h-5" }),
    category: 'specialized'
  },
  { 
    title: 'Lavement rectal', 
    description: 'Soins intestinaux spécialisés dans le respect de l\'intimité du patient',
    icon: React.createElement(CheckCircle, { className: "w-5 h-5" }),
    category: 'basic'
  },
  { 
    title: 'Sondage vésical', 
    description: 'Sondage et lavage vésical avec matériel stérile et technique aseptique',
    icon: React.createElement(Shield, { className: "w-5 h-5" }),
    category: 'advanced'
  },
  { 
    title: 'Aspiration des voies respiratoires', 
    description: 'Dégagement professionnel des voies respiratoires pour améliorer la respiration',
    icon: React.createElement(Activity, { className: "w-5 h-5" }),
    category: 'advanced'
  },
  { 
    title: 'Soins palliatifs', 
    description: 'Accompagnement de fin de vie avec dignité, soulagement de la douleur et soutien familial',
    icon: React.createElement(Heart, { className: "w-5 h-5" }),
    category: 'specialized'
  },
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    name: "Marie D.",
    message: "L'équipe de Quality Nurse a été formidable avec ma mère. Professionnels, attentionnés et toujours disponibles. Je recommande vivement leurs services.",
    rating: 5,
    service: "Soins palliatifs"
  },
  {
    name: "Jean P.",
    message: "Excellent suivi post-opératoire. L'infirmier était très compétent pour les soins de plaie et toujours ponctuel. Service de qualité.",
    rating: 5,
    service: "Soins de plaies"
  },
  {
    name: "Claire M.",
    message: "Merci à toute l'équipe pour l'accompagnement de mon père diabétique. Les contrôles glycémiques à domicile nous ont beaucoup aidés.",
    rating: 5,
    service: "Glycémies capillaires"
  },
  {
    name: "Robert L.",
    message: "Service irréprochable pendant ma convalescence. L'équipe est très professionnelle et rassurante. Disponible 24h/24 comme promis.",
    rating: 5,
    service: "Perfusions"
  }
];

// FAQ data
export const faqs: FAQ[] = [
  {
    question: "Êtes-vous disponibles 24h/24 et 7j/7 ?",
    answer: "Oui, notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos urgences et besoins de soins à domicile. N'hésitez pas à nous appeler au 0484/883.799 à tout moment."
  },
  {
    question: "Les soins sont-ils remboursés par la mutuelle ?",
    answer: "Oui, la plupart de nos soins sont remboursés par l'INAMI et votre mutuelle. Nous pratiquons le tiers payant pour simplifier vos démarches. Notre numéro INAMI est le 941 741 32 001."
  },
  {
    question: "Dans quelles communes intervenez-vous ?",
    answer: "Nous intervenons dans les communes d'Uccle, Ixelles, Forest, Watermael-Boitsfort ainsi qu'une partie de Drogenbos. N'hésitez pas à nous contacter pour vérifier si votre adresse est couverte."
  },
  {
    question: "Faut-il une prescription médicale ?",
    answer: "Oui, une prescription médicale est nécessaire pour la plupart des soins infirmiers. Votre médecin traitant ou l'hôpital peut établir cette prescription. Nous pouvons vous aider dans les démarches."
  },
  {
    question: "Combien de temps à l'avance faut-il vous contacter ?",
    answer: "Pour les soins programmés, contactez-nous idéalement 24-48h à l'avance. Pour les urgences, nous intervenons dans les plus brefs délais, souvent dans l'heure qui suit votre appel."
  },
  {
    question: "Disposez-vous de tout le matériel médical nécessaire ?",
    answer: "Oui, nous disposons de tout le matériel médical professionnel nécessaire : matériel stérile, dispositifs de perfusion, équipements de surveillance, etc. Tout est inclus dans nos prestations."
  }
];

// Useful links data
export const usefulLinks: UsefulLink[] = [
  {
    title: 'Les soins palliatifs',
    description: 'Informations sur l\'accompagnement de fin de vie et le soulagement de la douleur',
    url: 'http://www.hospidom.be/index.php/reseau-hospidom/',
    category: 'medical'
  },
  {
    title: 'L\'I.N.A.M.I.',
    description: 'Institut National d\'Assurance Maladie-Invalidité - Informations officielles',
    url: 'http://www.inami.fgov.be/fr/professionnels/sante/infirmiers/Pages/default.aspx',
    category: 'administrative'
  },
  {
    title: 'Honoraires et remboursements',
    description: 'Tarifs officiels et modalités de remboursement des soins infirmiers',
    url: 'http://www.inami.fgov.be/fr/themes/cout-remboursement/par-mutualite/prestations-individuelles/prix/Pages/infirmier.aspx',
    category: 'administrative'
  },
  {
    title: 'Soins Chez Soi',
    description: 'Portail d\'information sur les soins de santé à domicile en Belgique',
    url: 'http://www.soinschezsoi.be/',
    category: 'medical'
  },
  {
    title: 'Matériels - Bandagisterie',
    description: 'Fourniture de matériel médical et orthopédique professionnel',
    url: 'http://www.alphamed-medical.com/',
    category: 'medical'
  },
  {
    title: 'Pharmacies de garde',
    description: 'Localisation des pharmacies ouvertes en urgence dans votre région',
    url: 'http://www.bruxelles.be/artdet.cfm/4212',
    category: 'emergency'
  }
];

// Sectors data
export const sectors: Sector[] = [
  { name: 'Uccle', description: 'Couverture complète de la commune' },
  { name: 'Ixelles', description: 'Service 7j/7 disponible' },
  { name: 'Forest', description: 'Intervention rapide garantie' },
  { name: 'Watermael-Boitsfort', description: 'Équipe dédiée sur zone' },
  { name: 'Partie de Drogenbos', description: 'Secteur partiel couvert' }
];

// Contact info
export const contactInfo: ContactInfo = {
  name: 'Jean-Charles Tonnelle',
  address: 'rue des Cottages 82',
  city: '1180 Uccle',
  phone: '0484/883.799',
  email: 'info@qualitynurse.be',
  inami: '941 741 32 001'
};

// Stats data
export const stats: Stat[] = [
  { 
    number: `${new Date().getFullYear() - 2000}+`, 
    label: 'Années d\'expérience', 
    icon: React.createElement(Clock, { className: "w-6 h-6" })
  },
  { 
    number: '24/7', 
    label: 'Disponibilité', 
    icon: React.createElement(Shield, { className: "w-6 h-6" })
  },
  { 
    number: '100%', 
    label: 'Professionnels diplômés', 
    icon: React.createElement(Award, { className: "w-6 h-6" })
  },
  { 
    number: '5', 
    label: 'Communes couvertes', 
    icon: React.createElement(MapPin, { className: "w-6 h-6" })
  }
];