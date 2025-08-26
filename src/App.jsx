import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';
import HomeFooter from './components/Home/HomeFooter';
import TeamSection from './components/Home/TeamSection';
import SEOHead from './components/SEO/SEOHead';
import GoogleAnalytics from './components/SEO/GoogleAnalytics';
import PerformanceOptimizer from './components/SEO/PerformanceOptimizer';
import { OrganizationSchema } from './components/SEO/StructuredData';

// Route change tracker for analytics
const RouteChangeTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
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
        <GoogleAnalytics measurementId="GA_MEASUREMENT_ID" />
        <PerformanceOptimizer />
        <RouteChangeTracker />
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <TeamSection />
        <HomeFooter />
      </div>
    </Router>
  )
}

export default App;
