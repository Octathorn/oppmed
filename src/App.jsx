import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import TermsPrivacy from './pages/TermsPrivacy';
import NotFound from './pages/NotFound';
import HomeFooter from './components/Home/HomeFooter';
import TeamSection from './components/Home/TeamSection';
import SEOHead from './components/SEO/SEOHead';
import GoogleAnalytics from './components/SEO/GoogleAnalytics';
import PerformanceOptimizer from './components/SEO/PerformanceOptimizer';
import { OrganizationSchema } from './components/SEO/StructuredData';
import { GA_MEASUREMENT_ID } from './config/analytics';

// Route change tracker for analytics
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Global SEO */}
        <SEOHead 
          structuredData={OrganizationSchema()}
        />
        <GoogleAnalytics />
        <PerformanceOptimizer />
        <RouteChangeTracker />
        
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms-privacy" element={<TermsPrivacy />} />
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <TeamSection />
        <HomeFooter />
      </div>
    </Router>
  )
}

export default App;
