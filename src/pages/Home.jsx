import React from 'react'
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import MissionSection from '../components/Home/MissionSection'
import ServicesSection from '../components/Home/ServiceSection'
import { WebPageSchema, FAQSchema } from '../components/SEO/StructuredData';

export default function Home() {
  const pageSchema = WebPageSchema({
    title: "Opportunity Medical - Veteran C&P Exams & Disability Benefits",
    description: "Empowering Veterans with personalized care through face-to-face C&P exams. Network of board-certified physicians across the US.",
    url: "https://oppmed.com"
  });

  const faqData = FAQSchema([
    {
      question: "What is a C&P exam?",
      answer: "A C&P (Compensation and Pension) exam is a medical examination required by the VA to determine a Veteran's eligibility for disability benefits and the level of compensation they should receive."
    },
    {
      question: "What services does Opportunity Medical provide?",
      answer: "Opportunity Medical provides face-to-face C&P exams including musculoskeletal assessments, psychological evaluations, and extra-musculoskeletal examinations through our network of board-certified physicians."
    },
    {
      question: "How do I schedule a C&P exam?",
      answer: "Contact Opportunity Medical to schedule your C&P exam. We work with Veterans across the United States and can connect you with qualified physicians in your area."
    },
    {
      question: "Are the physicians board-certified?",
      answer: "Yes, all physicians in our network are board-certified and experienced in conducting C&P examinations for Veterans."
    }
  ]);

  return (
    <>
      <SEOHead 
        title="Opportunity Medical - Veteran C&P Exams & Disability Benefits | Board-Certified Physicians"
        description="Empowering Veterans with personalized care through face-to-face C&P exams. Network of board-certified physicians across the US. Specializing in musculoskeletal, psychological, and extra-musculoskeletal assessments."
        keywords="veteran C&P exams, disability benefits, compensation and pension exams, VA medical exams, veteran healthcare, musculoskeletal assessment, psychological evaluation, board-certified physicians, veteran support, disability claims"
        url="https://oppmed.com"
        structuredData={pageSchema}
      />
      <StructuredData data={faqData} />
      
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
    </>
  )
}
