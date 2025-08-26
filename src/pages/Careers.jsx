import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';
import CareerInfo from '../components/Careers/CareerInfo';
import { WebPageSchema, BreadcrumbSchema } from '../components/SEO/StructuredData';

export default function Careers() {
  const pageSchema = WebPageSchema({
    title: "Careers - Join Opportunity Medical | Veteran Healthcare",
    description: "Join Opportunity Medical's mission to serve Veterans. Career opportunities for board-certified physicians and healthcare professionals across the US.",
    url: "https://oppmed.com/careers"
  });

  const breadcrumbData = BreadcrumbSchema([
    { name: "Home", url: "https://oppmed.com" },
    { name: "Careers", url: "https://oppmed.com/careers" }
  ]);

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Board-Certified Physician - C&P Exams",
    "description": "Join Opportunity Medical as a board-certified physician conducting C&P exams for Veterans. Make a difference in Veterans' lives through comprehensive medical assessments.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Opportunity Medical",
      "url": "https://oppmed.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    },
    "employmentType": "CONTRACTOR",
    "qualifications": "Board-certified physician with experience in C&P examinations",
    "responsibilities": "Conduct face-to-face C&P exams for Veterans seeking disability benefits"
  };

  return (
    <>
      <SEOHead 
        title="Careers - Join Opportunity Medical | Veteran Healthcare"
        description="Join Opportunity Medical's mission to serve Veterans. Career opportunities for board-certified physicians and healthcare professionals across the US."
        keywords="careers opportunity medical, physician jobs, C&P exam jobs, veteran healthcare careers, medical professional opportunities, board-certified physician positions"
        url="https://oppmed.com/careers"
        structuredData={pageSchema}
      />
      <StructuredData data={breadcrumbData} />
      <StructuredData data={jobPostingSchema} />

      <CareerInfo />
    </>
  );
}
