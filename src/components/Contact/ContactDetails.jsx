import React, { useState } from 'react';
import '../../css/ContactDetails.css';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    smsConsent: false
  });

  const [expandedFaq, setExpandedFaq] = useState(0);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? -1 : index);
  };

  const faqData = [
    {
      question: "How can I schedule a C&P examination through Opportunity Medical?",
      answer: "Scheduling is easy: simply contact us, and our team will assist you in arranging a convenient appointment with a certified medical professional near you."
    },
    {
      question: "Are your services limited to specific medical conditions?",
      answer: "No, we provide comprehensive medical services for all types of conditions and examinations."
    },
    {
      question: "Can I become a part of Opportunity Medical's network as a medical professional?",
      answer: "Yes, we welcome qualified medical professionals to join our network. Please contact us for more information about partnership opportunities."
    }
  ];

  return (
    <div className="contact-details">
      <div className="contact-details-container">
        <div className="contact-details-grid">
          {/* Left Column */}
          <div className="contact-details-left">
            <div className="contact-details-label">
              HAVE ANY QUESTION?
            </div>
            
            <h2 className="contact-details-heading">
              Send us a message
            </h2>
            
            <p className="contact-details-description">
              Opportunity Medical proudly links Veterans with a vast nationwide 
              network of accomplished, board-certified physicians.
            </p>
            
            <div className="contact-details-divider"></div>
            
            <div className="faq-section">
              <h3 className="faq-heading">Frequently asked questions</h3>
              
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className={`faq-question ${expandedFaq === index ? 'expanded' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="faq-icon">
                      {expandedFaq === index ? '−' : '+'}
                    </span>
                    {faq.question}
                  </button>
                  
                  {expandedFaq === index && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="contact-details-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First"
                    className="form-input"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label-hidden">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last"
                    className="form-input"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="424-208-7434"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Comment or Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <div className="consent-section">
                <div className="consent-text">
                  I agree to receive SMS communications from Opportunity Medical.
                </div>
                
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="smsConsent"
                    name="smsConsent"
                    className="form-checkbox"
                    checked={formData.smsConsent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="smsConsent" className="checkbox-label">
                    Please check the box to confirm
                  </label>
                </div>
                
                <div className="privacy-text">
                  By providing your phone number and opting in, you consent to receive 
                  updates, promotions, marketing, other relevant information and 
                  communications via SMS text messages from Opportunity Medical at the 
                  phone number provided. You are not required to consent to receive text 
                  messages to purchase goods or services. Message frequency may vary. 
                  Message and data rates may apply. You may opt-out at any time by texting 
                  "STOP" to 424-208-7434 from any SMS message received. For more 
                  information, text "HELP" or contact us at 424-208-7434. Privacy Policy: Your 
                  phone number will be stored and used solely for the purpose of sending SMS 
                  communications. We do not share your information with third parties, except 
                  as required by law. Please refer to our full Privacy Policy for more details on 
                  how we protect your personal data. Terms & Conditions: By providing your 
                  phone number, you agree to our Terms & Conditions.
                </div>
              </div>
              
              <div className="recaptcha-section">
                <div className="recaptcha-placeholder">
                  <div className="recaptcha-checkbox"></div>
                  <span className="recaptcha-text">I'm not a robot</span>
                  <div className="recaptcha-logo">
                    <div className="recaptcha-icon"></div>
                    <div className="recaptcha-brand">
                      <div>reCAPTCHA</div>
                      <div className="recaptcha-small">Privacy - Terms</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;