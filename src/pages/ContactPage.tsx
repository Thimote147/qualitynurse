import React, { useState } from 'react';
import { submitContactForm } from '../data/contactFormApi';
import { MapPin, Phone, Mail, FileText, Clock, CheckCircle } from 'lucide-react';
import PageContainer from '../components/ui/PageContainer';
import PageHeader from '../components/ui/PageHeader';
import SEO from '../components/SEO/SEO';
import { contactInfo } from '../data/qualityNurse';
import { FormData } from '../types';
import { seoConfig } from '../data/seoConfig';
import jcImage from '../assets/jc.jpg';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    lastname: '',
    firstname: '',
    email: '',
    object: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const error = await submitContactForm(formData);
    if (!error) {
      setFormData({
        lastname: '',
        firstname: '',
        email: '',
        object: '',
        message: ''
      });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
    setIsSubmitting(false);
  };

  const handleEmergencyCall = () => {
    window.location.href = `tel:+32${contactInfo.phone.replace(/\//g, '')}`;
  };

  return (
    <PageContainer>
      <SEO {...seoConfig.contact} />
      <PageHeader
        title="Nous Contacter"
        subtitle="Prenez contact avec nous"
        description="Notre équipe est à votre disposition pour répondre à toutes vos questions et organiser vos soins à domicile"
      />

      <section className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          
          {/* Emergency Banner - Mobile Optimized */}
          <div className="bg-red-600 text-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl mb-6 sm:mb-8 md:mb-12 text-center">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">Urgence Médicale ?</h3>
            <p className="text-sm sm:text-base mb-3 sm:mb-4 opacity-90">
              Pour toute urgence, appelez-nous immédiatement
            </p>
            <button
              onClick={handleEmergencyCall}
              className="bg-white text-red-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{contactInfo.phone}</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Contact Information - Mobile Optimized */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-700 mb-6 sm:mb-8 text-center">
                    QUALITY NURSE
                  </h3>
                  
                  {/* Responsable Section */}
                  <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
                        <img src={jcImage} alt="Jean-Charles TONNELLE" className="w-full h-full object-cover object-top scale-125" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-emerald-800 text-lg sm:text-xl mb-1">
                          {contactInfo.name}
                        </h4>
                        <p className="text-emerald-700 font-medium text-sm sm:text-base">Infirmier responsable</p>
                        <p className="text-emerald-600 text-xs sm:text-sm mt-1">{new Date().getFullYear() - 2000} années d'expérience en soins à domicile</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4 sm:space-x-5">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Adresse</h4>
                          <p className="text-sm sm:text-base text-gray-700">{contactInfo.address}</p>
                          <p className="text-sm sm:text-base text-gray-700">{contactInfo.city}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4 sm:space-x-5">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Téléphone</h4>
                          <a 
                            href={`tel:+32${contactInfo.phone.replace(/\//g, '')}`} 
                            className="text-base sm:text-lg text-green-600 hover:text-green-700 font-semibold block"
                          >
                            GSM : {contactInfo.phone}
                          </a>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">Disponible 24h/24, 7j/7</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4 sm:space-x-5">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Email</h4>
                          <a 
                            href={`mailto:${contactInfo.email}`} 
                            className="text-sm sm:text-base text-purple-600 hover:text-purple-700 font-medium break-all block"
                          >
                            {contactInfo.email}
                          </a>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">Réponse rapide garantie</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border border-gray-200">
                      <div className="flex items-start space-x-4 sm:space-x-5">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
                            Numéro I.N.A.M.I.
                          </h4>
                          <p className="text-sm sm:text-base text-gray-700 font-mono">{contactInfo.inami}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours & Info */}
                <div className="bg-emerald-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                  <h4 className="font-semibold text-emerald-900 mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Horaires & Disponibilité
                  </h4>
                  <div className="space-y-2 text-sm text-emerald-800">
                    <p>• Service d'urgence disponible 24h/24</p>
                    <p>• Intervention 7 jours sur 7</p>
                    <p>• Réponse téléphonique immédiate</p>
                    <p>• Déplacement dans l'heure pour les urgences</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Mobile Optimized */}
            <div className="bg-white">
              <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Envoyez-nous un message
                </h3>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <p className="text-sm text-green-800">
                        Message envoyé avec succès ! Nous vous recontacterons rapidement.
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lastname" className="form-label">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="firstname" className="form-label">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Votre prénom"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="object" className="form-label">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="object"
                      name="object"
                      value={formData.object}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Objet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="form-textarea"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-emerald-700 disabled:bg-emerald-400 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                  </button>
                </div>

                <p className="mt-4 text-xs text-gray-500 text-center">
                  * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ContactPage;