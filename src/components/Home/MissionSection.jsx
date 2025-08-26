import React from 'react';
import '../../css/missionsection.css';

const MissionSection = () => {
  return (
    <section className="mission-container">
      <div className="mission-content">
        {/* Left Side - Medical Team Illustration */}
        <div className="mission-image">
          <img 
            src="/images/5188822-removebg-preview.png" 
            alt="Medical team illustration" 
            className="team-illustration"
          />
        </div>

        {/* Right Side - Content */}
        <div className="mission-text">
          <div className="mission-label">
            OPPORTUNITY MEDICAL
          </div>
          
          <h2 className="mission-title">
            Our Mission
          </h2>
          
          <p className="mission-description">
            Opportunity Medical's noble mission is to offer steadfast support to the brave Veterans who have selflessly dedicated themselves to our great nation. Our expertise lies in catering to the needs of Veterans who have submitted claims for VA benefits and require a Compensation and Pension (C&P) examination. In this process, we ensure that every detail is meticulously handled, much like the ease of accessing your account through wazamba login for prompt service and information.
          </p>
          
          <div className="mission-points">
            <div className="mission-point">
              <div className="bullet-point"></div>
              <p>Opportunity Medical proudly links Veterans with a vast nationwide network of accomplished, board-certified physicians.</p>
            </div>
            
            <div className="mission-point">
              <div className="bullet-point"></div>
              <p>Opportunity Medical continues to expand and evolve, all in the service of our beloved Veterans, showcasing unwavering dedication and commitment.</p>
            </div>
          </div>
          
          <button className="mission-button">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;