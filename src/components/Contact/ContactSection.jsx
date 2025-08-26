import React from 'react';
import '../../css/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-left-column">
            <div className="contact-label">
              CONTACT US
            </div>
            
            <h1 className="contact-main-heading">
              We are here to serve Veterans.
            </h1>
            
            <p className="contact-description">
              Opportunity Medical has steadily expanded, continuously welcoming 
              new physicians, dedicated staff members, and additional offices to 
              enhance our ability to serve Veterans with the utmost dedication. This 
              growth allows us to provide seamless services, ensuring that Veterans 
              can easily access resources, much like the straightforward 
              platincasinoplayde that offers various options for entertainment and 
              engagement.
            </p>
          </div>
          
          {/* Right Column */}
          <div className="contact-right-column">
            {/* Emergency Call */}
            <div className="contact-item">
              <div className="contact-header">
                <div className="contact-icon-circle">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="contact-label-small">
                  24/7 EMERGENCY CALL
                </div>
              </div>
              <div className="contact-phone-number">
                424-208-7434
              </div>
            </div>
            
            {/* Email */}
            <div className="contact-item">
              <div className="contact-header">
                <div className="contact-icon-circle">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-label-small">
                  EMAIL US
                </div>
              </div>
              <div className="contact-info">
                office@oppmed.local
              </div>
            </div>
            
            {/* Address */}
            <div className="contact-item">
              <div className="contact-header">
                <div className="contact-icon-circle">
                  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="contact-label-small">
                  OUR ADDRESS
                </div>
              </div>
              <div className="contact-address-info">
                <div className="contact-info">1494 S. Robertson, Suite #203</div>
                <div className="contact-info">Los Angeles CA 90035</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;