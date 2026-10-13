import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '../../config/analytics';

// Loads and initializes Google Analytics 4 once, only when a Measurement ID
// is configured via VITE_GA_MEASUREMENT_ID. Route-change tracking is handled
// by RouteChangeTracker in App.jsx.
const GoogleAnalytics = ({ measurementId = GA_MEASUREMENT_ID }) => {
  useEffect(() => {
    // No ID configured → don't load analytics at all.
    if (!measurementId || typeof window === 'undefined') return undefined;

    // Avoid double-initialization (e.g. React strict-mode remount).
    if (window.gtag) return undefined;

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [measurementId]);

  return null;
};

export default GoogleAnalytics;
