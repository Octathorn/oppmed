import React, { useEffect } from 'react';

const SEOHead = ({ 
  title = "Opportunity Medical - Veteran C&P Exams & Disability Benefits",
  description = "Opportunity Medical provides face-to-face C&P exams for Veterans seeking disability benefits. Network of board-certified physicians across the US.",
  keywords = "veteran C&P exams, disability benefits, compensation and pension exams, VA medical exams",
  image = "https://oppmed.com/og-image.jpg",
  url = "https://oppmed.com",
  type = "website",
  structuredData = null,
  canonical = null
}) => {
  const fullTitle = title.includes('Opportunity Medical') ? title : `${title} | Opportunity Medical`;
  const fullUrl = canonical || url;
  
  useEffect(() => {
    // Update title
    document.title = fullTitle;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Update or create canonical URL
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
      'og:site_name': 'Opportunity Medical',
      'og:locale': 'en_US'
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

    // Cleanup function
    return () => {
      // Clean up any dynamically added meta tags if needed
    };
  }, [fullTitle, description, keywords, fullUrl, type, image, structuredData]);

  return null; // This component doesn't render anything
};

export default SEOHead;
