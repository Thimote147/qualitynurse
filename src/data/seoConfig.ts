export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: "Quality Nurse - Soins infirmiers à domicile - Bruxelles",
    description: "Quality Nurse offre des soins infirmiers professionnels à domicile à Bruxelles. Service 24h/24, équipe expérimentée, alternative à l'hospitalisation.",
    keywords: "soins infirmiers, domicile, Bruxelles, urgence 24h, hospitalisation domicile, quality nurse",
    url: "/",
    type: "website"
  },
  contact: {
    title: "Contact - Quality Nurse - Soins infirmiers à domicile",
    description: "Contactez Quality Nurse pour vos besoins en soins infirmiers à domicile à Bruxelles. Service 24h/24, réponse rapide, équipe professionnelle.",
    keywords: "contact quality nurse, soins infirmiers contact, urgence médicale Bruxelles, rendez-vous infirmier",
    url: "/contact"
  },
  about: {
    title: "À propos - Quality Nurse - Équipe professionnelle",
    description: "Découvrez l'équipe Quality Nurse : 20 années d'expérience en soins infirmiers à domicile, professionnels diplômés et dévoués à votre bien-être.",
    keywords: "équipe quality nurse, infirmiers professionnels, expérience soins domicile, qualifications médicales",
    url: "/nous"
  },
  services: {
    title: "Prestations - Quality Nurse - Services de soins infirmiers",
    description: "Découvrez nos prestations de soins infirmiers à domicile : injections, pansements, prises de sang, soins post-opératoires et bien plus encore.",
    keywords: "prestations infirmières, soins domicile, injections, pansements, prises de sang, soins post-opératoires",
    url: "/prestations"
  },
  extraServices: {
    title: "Services supplémentaires - Quality Nurse - Soins spécialisés",
    description: "Services supplémentaires Quality Nurse : soins palliatifs, suivi post-hospitalisation, accompagnement médical personnalisé à domicile.",
    keywords: "services supplémentaires, soins palliatifs, post-hospitalisation, accompagnement médical, soins spécialisés",
    url: "/services-supplementaires"
  },
  sector: {
    title: "Zone de couverture - Quality Nurse - Bruxelles et environs",
    description: "Découvrez notre zone de couverture : Uccle, Watermael-Boitsfort, Auderghem, Ixelles, Saint-Gilles. Soins infirmiers à domicile à Bruxelles.",
    keywords: "zone couverture, Uccle, Watermael-Boitsfort, Auderghem, Ixelles, Saint-Gilles, soins infirmiers Bruxelles",
    url: "/secteur"
  },
  faq: {
    title: "FAQ - Quality Nurse - Questions fréquentes",
    description: "Trouvez les réponses à vos questions sur nos soins infirmiers à domicile : tarifs, disponibilité, prestations, zones d'intervention.",
    keywords: "FAQ soins infirmiers, questions fréquentes, tarifs, disponibilité, prestations domicile",
    url: "/faq"
  },
  links: {
    title: "Liens utiles - Quality Nurse - Ressources santé",
    description: "Liens utiles vers des organismes officiels de santé, associations médicales et ressources pour vos soins infirmiers à domicile.",
    keywords: "liens utiles, organismes santé, associations médicales, ressources soins infirmiers",
    url: "/liens"
  },
  notFound: {
    title: "Page non trouvée - Quality Nurse - Erreur 404",
    description: "Page non trouvée. Retournez à l'accueil ou contactez Quality Nurse pour vos besoins en soins infirmiers à domicile.",
    url: "/",
    noindex: true
  }
};