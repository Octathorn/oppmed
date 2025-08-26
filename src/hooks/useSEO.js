import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useSEO = (seoConfig) => {
  const location = useLocation();
  
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    structuredData = null,
    canonical = null
  } = seoConfig;

  // Update meta tags
  const updateMetaTags = useCallback(() => {
    const fullTitle = title.includes('Opportunity Medical') ? title : `${title} | Opportunity Medical`;
    const fullUrl = canonical || url || `https://oppmed.com${location.pathname}`;

    // Update title
    document.title = fullTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullUrl;

    // Update Open Graph tags
    const ogTags = {
      'og:title': fullTitle,
      'og:description': description,
      'og:url': fullUrl,
      'og:type': type,
      'og:image': image,
      'og:site_name': 'Opportunity Medical'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    });

    // Update Twitter tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': image
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.name = name;
        document.head.appendChild(twitterTag);
      }
      twitterTag.content = content;
    });

    // Add structured data
    if (structuredData) {
      // Remove existing structured data
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => {
        if (script.textContent.includes('"@type"')) {
          script.remove();
        }
      });

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, image, url, type, structuredData, canonical, location.pathname]);

  // Track page view for analytics
  const trackPageView = useCallback(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: `https://oppmed.com${location.pathname}`,
        page_path: location.pathname
      });
    }
  }, [title, location.pathname]);

  // Initialize SEO on mount and route change
  useEffect(() => {
    updateMetaTags();
    trackPageView();
  }, [updateMetaTags, trackPageView]);

  // Preload critical resources
  useEffect(() => {
    if (image) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = image;
      document.head.appendChild(link);
    }
  }, [image]);

  return {
    updateMetaTags,
    trackPageView
  };
};

// SEO configuration presets
export const seoPresets = {
  home: {
    title: "Opportunity Medical - Veteran C&P Exams & Disability Benefits",
    description: "Empowering Veterans with personalized care through face-to-face C&P exams. Network of board-certified physicians across the US.",
    keywords: "veteran C&P exams, disability benefits, compensation and pension exams, VA medical exams, veteran healthcare",
    image: "https://oppmed.com/og-image.jpg",
    url: "https://oppmed.com"
  },
  services: {
    title: "Our Services - Veteran C&P Exams",
    description: "Comprehensive C&P exam services including musculoskeletal, psychological, and extra-musculoskeletal assessments.",
    keywords: "C&P exam services, musculoskeletal assessment, psychological evaluation, veteran disability exams",
    image: "https://oppmed.com/services-og-image.jpg",
    url: "https://oppmed.com/services"
  },
  contact: {
    title: "Contact Us - Opportunity Medical",
    description: "Contact Opportunity Medical for C&P exam scheduling and support.",
    keywords: "contact opportunity medical, C&P exam scheduling, veteran support",
    image: "https://oppmed.com/contact-og-image.jpg",
    url: "https://oppmed.com/contact"
  },
  careers: {
    title: "Careers - Join Opportunity Medical",
    description: "Join Opportunity Medical's mission to serve Veterans. Career opportunities for healthcare professionals.",
    keywords: "careers opportunity medical, physician jobs, C&P exam jobs",
    image: "https://oppmed.com/careers-og-image.jpg",
    url: "https://oppmed.com/careers"
  }
};
