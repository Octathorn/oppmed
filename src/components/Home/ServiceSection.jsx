import React from 'react';
import '../../css/servicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-container">
      <div className="services-header">
        <div className="services-label">
          OPPORTUNITY MEDICAL SERVICES
        </div>
        
        <h2 className="services-title">
          Our Services
        </h2>
        
        <p className="services-description">
          Comprehensive Care for Veterans' Physical and Mental Health, Face-to-Face Assessments and Precise Support for Disability Benefits.
        </p>
      </div>

      <div className="services-grid">
        {/* Skeletal-Muscular Service */}
        <div className="service-card">
          <div className="service-icon">
            <img src="src\assets\images\fibrotic-skeletal-muscle-cross-section.png" alt="Brain icon" />
          </div>
          <h3 className="service-title">Skeletal-Muscular</h3>
          <p className="service-text">
            We address musculoskeletal issues to enhance mobility and alleviate discomfort in Veterans.
          </p>
          <button className="service-link">
            Learn More →
          </button>
        </div>

        {/* Extra-Musculoskeletal Service */}
        <div className="service-card">
          <div className="service-icon">
            <img src="src\assets\images\heal.png" alt="Bandage icon" />
          </div>
          <h3 className="service-title">Extra-Musculoskeletal</h3>
          <p className="service-text">
            Our care extends to internal organs, relieving pain caused by conditions like scarring, arthritis, and more.
          </p>
          <button className="service-link">
            Learn More →
          </button>
        </div>

        {/* Psychological Service */}
        <div className="service-card">
          <div className="service-icon">
            <img src="src\assets\images\brain.png" alt="Psychology icon" />
          </div>
          <h3 className="service-title">Psychological</h3>
          <p className="service-text">
            We offer comprehensive support for a range of psychological conditions, including PTSD.
          </p>
          <button className="service-link">
            Learn More →
          </button>
        </div>

        {/* Face-to-Face Assessments Service */}
        <div className="service-card">
          <div className="service-icon">
            <img src="src\assets\images\meeting.png" alt="Assessment icon" />
          </div>
          <h3 className="service-title">Face-to-Face Assessments</h3>
          <p className="service-text">
            Our certified medical professionals conduct personalized disability medical evaluations for Veterans in private settings.
          </p>
          <button className="service-link">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;