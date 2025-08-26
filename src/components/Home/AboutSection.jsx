import React from 'react';
import '../../css/AboutSection.css'

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        {/* Left Side - Image */}
        <div className="about-image">
          <img 
            src="src\assets\images\pexels-cottonbro-5989933-768x512.jpg" 
            alt="Medical consultation with tablet" 
            className="consultation-img"
          />
        </div>

        {/* Right Side - Content */}
        <div className="about-text">
          <div className="about-label">
            ABOUT OPPORTUNITY MEDICAL
          </div>
          
          <h2 className="about-title">
            What is Opportunity Medical?
          </h2>
          
          <p className="about-description">
            At Opportunity Medical, our primary mission is to offer dedicated support to Veterans who have endured injuries during their honorable military service. After filing a disability benefits claim, VA might ask Veteran to perform a VA claim exam, also known as a compensation and pension (C&P) exam. This examination is used by VA to determine the Veterans eligibility for benefits and the level of compensation. We specialize in facilitating access for Veterans to a network of proficient, board-certified providers located across the United States. Our goal is to provide comprehensive C&P exams in a personalized, face-to-face setting...
          </p>
          
          <button className="about-button">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;