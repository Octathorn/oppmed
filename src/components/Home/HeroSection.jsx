import React from 'react';
import '../../css/HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Background SVG */}
      <div className="hero-background">
        <img 
          src="src\assets\images\covid19-hero-green-circle-bg-1-2-1.svg" 
          alt="" 
          className="background-svg"
        />
      </div>

      <div className="hero-content">
        {/* Left Side - Text Content */}
        <div className="hero-text">
          <h1 className="hero-title">
            Empowering Veterans with Care.
          </h1>
          
          <p className="hero-description">
            At Opportunity Medical, we empower Veterans through personalized care. Our network of dedicated, board-certified physicians conducts face-to-face C&P exams.
          </p>
          
          <button className="hero-button">
            Learn More
          </button>
        </div>

        {/* Right Side - Doctor Image */}
        <div className="hero-image">
          <img 
            src="src\assets\images\pexels-los-muertos-crew-8460157-removebg-preview.png" 
            alt="Professional doctor in medical scrubs" 
            className="doctor-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;