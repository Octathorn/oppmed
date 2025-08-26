import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';
import ContactSection from '../components/Contact/ContactSection';
import ContactDetails from '../components/Contact/ContactDetails';
import GoogleMapSimple from '../components/Contact/GoogleMapSimple';
import { WebPageSchema, BreadcrumbSchema } from '../components/SEO/StructuredData';

export default function Contact() {
  const pageSchema = WebPageSchema({
    title: "Contact Us - Opportunity Medical | Veteran C&P Exams",
    description: "Contact Opportunity Medical for C&P exam scheduling and support. Get in touch with our team of board-certified physicians serving Veterans across the US.",
    url: "https://oppmed.com/contact"
  });

  const breadcrumbData = BreadcrumbSchema([
    { name: "Home", url: "https://oppmed.com" },
    { name: "Contact", url: "https://oppmed.com/contact" }
  ]);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Opportunity Medical",
    "description": "Contact us for C&P exam scheduling and support",
    "url": "https://oppmed.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Opportunity Medical",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Contact Us - Opportunity Medical | Veteran C&P Exams"
        description="Contact Opportunity Medical for C&P exam scheduling and support. Get in touch with our team of board-certified physicians serving Veterans across the US."
        keywords="contact opportunity medical, C&P exam scheduling, veteran support, disability benefits contact, medical exam contact"
        url="https://oppmed.com/contact"
        structuredData={pageSchema}
      />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={contactSchema} />

      <ContactSection />
      <ContactDetails />
      <GoogleMapSimple />
    </>
  );
}
