import '../../css/CareerInfo.css';

const CareerInfo = () => {
  return (
    <section className="career-info-section">
      <div className="career-info-container">
        <div className="career-info-content">
          <p className="recruitment-text">
            Providers are being recruited in all states.
          </p>
          
          <p className="main-description">
            If you are interested in expanding your patient base and conducting Disability Benefit Evaluations for our valued Veterans, all while receiving competitive compensation 
            for your services, kindly contact Opportunity Medical at <a href="tel:424-208-7434" className="phone-link">(424) 208-7434</a>. Comprehensive training will be made available to ensure you are well-prepared for this role.
          </p>
          
          <p className="assessment-description">
            It's important to note that these assessments do not involve treatment, prescription, or ongoing patient care. They are one-time evaluations designed to assess the effect 
            of an existing disability on a veteran's overall health.
          </p>
          
          <div className="contact-info-section">
            <h3 className="contact-info-heading">
              Contact Information
            </h3>
            
            <div className="contact-details">
              <div className="address-info">
                <p className="address-line">1494 S. Robertson Blvd, Suite 203</p>
                <p className="address-line">Los Angeles, CA 90035</p>
                <p className="phone-line">T <a href="tel:424-208-7434" className="contact-link">(424) 208-7434</a></p>
                <p className="fax-line">F (424) 208-7435</p>
              </div>
              
              <div className="email-info">
                <p className="email-line">
                  Email – <a href="mailto:office@oppmed.local" className="contact-link">office@oppmed.local</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerInfo;