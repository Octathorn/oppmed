import React, { useEffect } from 'react';

// Organization Schema
export const OrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Opportunity Medical",
  "url": "https://oppmed.com",
  "logo": "https://oppmed.com/logo.png",
  "description": "Opportunity Medical provides face-to-face C&P exams for Veterans seeking disability benefits through a network of board-certified physicians across the United States.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/opportunitymedical",
    "https://www.linkedin.com/company/opportunity-medical"
  ],
  "medicalSpecialty": [
    "Musculoskeletal Medicine",
    "Psychological Evaluation",
    "Veteran Disability Assessment",
    "C&P Examinations"
  ]
});

// Breadcrumb Schema
export const BreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// FAQ Schema
export const FAQSchema = (questions) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.answer
    }
  }))
});

// Service Schema
export const ServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "MedicalService",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "MedicalOrganization",
    "name": "Opportunity Medical"
  },
  "serviceType": service.type,
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
});

// WebPage Schema
export const WebPageSchema = (page) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": page.title,
  "description": page.description,
  "url": page.url,
  "mainEntity": {
    "@type": "Organization",
    "name": "Opportunity Medical"
  }
});

// Structured Data Component
const StructuredData = ({ data }) => {
  useEffect(() => {
    if (data) {
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
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }
  }, [data]);

  return null;
};

export default StructuredData;
