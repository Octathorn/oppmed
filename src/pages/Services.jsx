import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
import StructuredData from '../components/SEO/StructuredData';
import MainServices from '../components/Services/MainServices';
import Musculoskeletal from '../components/Services/Musculoskeletal';
import Psychological from '../components/Services/Psychological';
import MedicalExaminations from '../components/Services/MedicalExaminations';
import PsychiatricExaminations from '../components/Services/PsychiatricExaminations';
import FaceToFace from '../components/Services/FaceToFace';
import FaceToFaceTwo from '../components/Services/FaceToFaceTwo';
import Precise from '../components/Services/Precise';
import SkeletalService from '../components/Services/SkeletalService';
import { WebPageSchema, ServiceSchema, BreadcrumbSchema } from '../components/SEO/StructuredData';

export default function Services() {
  const pageSchema = WebPageSchema({
    title: "Our Services - Veteran C&P Exams | Opportunity Medical",
    description: "Comprehensive C&P exam services including musculoskeletal, psychological, and extra-musculoskeletal assessments. Face-to-face evaluations by board-certified physicians.",
    url: "https://oppmed.com/services"
  });

  const breadcrumbData = BreadcrumbSchema([
    { name: "Home", url: "https://oppmed.com" },
    { name: "Services", url: "https://oppmed.com/services" }
  ]);

  const servicesData = [
    {
      name: "Musculoskeletal C&P Exams",
      description: "Comprehensive assessment of bone, joint, and muscle conditions affecting Veterans' mobility and daily activities.",
      type: "Musculoskeletal Assessment"
    },
    {
      name: "Psychological C&P Exams",
      description: "Professional evaluation of mental health conditions including PTSD, depression, anxiety, and other psychological disorders.",
      type: "Psychological Evaluation"
    },
    {
      name: "Extra-Musculoskeletal C&P Exams",
      description: "Assessment of internal organ conditions, scarring, arthritis, and other non-musculoskeletal health issues.",
      type: "Internal Medicine Assessment"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Our Services - Veteran C&P Exams | Opportunity Medical"
        description="Comprehensive C&P exam services including musculoskeletal, psychological, and extra-musculoskeletal assessments. Face-to-face evaluations by board-certified physicians across the US."
        keywords="C&P exam services, musculoskeletal assessment, psychological evaluation, veteran disability exams, VA medical examinations, board-certified physicians, face-to-face exams"
        url="https://oppmed.com/services"
        structuredData={pageSchema}
      />
      <StructuredData data={breadcrumbData} />
      {servicesData.map((service, index) => (
        <StructuredData key={index} data={ServiceSchema(service)} />
      ))}

      <MainServices />
      <Musculoskeletal />
      <Psychological />
      <MedicalExaminations />
      <PsychiatricExaminations />
      <FaceToFace />
      <FaceToFaceTwo />
      <Precise />
      <SkeletalService />
    </>
  );
}
