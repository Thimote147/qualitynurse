import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ExtraServicesPage from '../pages/ExtraServicesPage';
import SectorPage from '../pages/SectorPage';
import TestimonialsPage from '../pages/TestimonialsPage';
import FAQPage from '../pages/FAQPage';
import LinksPage from '../pages/LinksPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nous" element={<AboutPage />} />
          <Route path="/prestations" element={<ServicesPage />} />
          <Route path="/extra" element={<ExtraServicesPage />} />
          <Route path="/secteur" element={<SectorPage />} />
          <Route path="/temoignages" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/liens" element={<LinksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;