import React from 'react';
import '../../css/teamSection.css';

const TeamSection = () => {
  return (
    <>
      {/* First Div - White Background with Card */}
      <section className="team-card-section">
        <div className="team-card">
          <div className="team-card-content">
            <div className="team-text">
              <div className="team-label">
                NEED HELP?
              </div>
              
              <h2 className="team-title">
                Our team of qualified physicians.
              </h2>
              
              <p className="team-description">
                Opportunity Medical has steadily expanded, continuously welcoming new physicians, dedicated staff members, and additional offices to enhance our ability to serve Veterans with the utmost dedication.
              </p>
              
              <button className="team-button">
                Contact Us Now
              </button>
            </div>
            
            <div className="team-image">
              <img 
                src="/src/assets/images/pexels-los-muertos-crew-8460371-removebg-preview.png" 
                alt="Team of medical professionals" 
                className="team-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Div - Blue Background with Text */}
      <section className="team-section">
        <div className="team-bottom-content">
          <div className="about-us-section">
            <h3 className="about-us-title">ABOUT US</h3>
            
            <p className="about-us-text">
              Our team of exceptionally qualified physicians undergoes rigorous training and holds prestigious credentials, ensuring that Veterans receive assessments characterized by honesty and professionalism. Our doctors possess in-depth expertise, an essential factor in delivering comprehensive C&P examinations. Throughout our journey, Opportunity Medical has steadily expanded, continuously welcoming new physicians, dedicated staff members, and additional offices to enhance our ability to serve Veterans with the utmost dedication.
            </p>
          </div>

          <div className="terms-section">
            <h4 className="terms-title">TCPA (Telephone Consumer Protection Act)</h4>
            <h5 className="sms-title">SMS Text Message Communications Terms & Conditions</h5>
            
            <p className="terms-text">
              By providing your phone number and opting in, you consent to receive updates, promotions, marketing, other relevant information and communications via SMS text messages from Opportunity Medical at the phone number provided. You are not required to consent to receive text messages to purchase goods or services. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to cancel. See our Privacy Policy and Terms of Service for additional information about our SMS program.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;