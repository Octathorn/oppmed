import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/ContactDetails.css';

// Web3Forms handles form delivery + spam verification server-side, so no backend
// of our own is required. The access key is designed to be public (safe in the
// frontend bundle). Get a free key (email only, no account/password) at
// https://web3forms.com and set it as VITE_WEB3FORMS_ACCESS_KEY in your local
// .env file and in the Vercel project's Environment Variables.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const ContactDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    smsConsent: false
  });

  const [expandedFaq, setExpandedFaq] = useState(0);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle | submitting | success | error
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear the error for a field as soon as the user edits it
    setErrors(prev => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.firstName.trim()) {
      nextErrors.firstName = 'Please enter your first name.';
    }
    if (!formData.lastName.trim()) {
      nextErrors.lastName = 'Please enter your last name.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      // Move focus to the first field with an error so screen-reader and
      // keyboard users are taken straight to what needs fixing.
      const firstErrorField = document.getElementById(Object.keys(nextErrors)[0]);
      if (firstErrorField) firstErrorField.focus();
      return;
    }

    // Honeypot: if this hidden field is filled, it's almost certainly a bot.
    if (form.botcheck && form.botcheck.checked) {
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitStatus('error');
      setSubmitMessage(
        'The contact form is not fully configured yet. Please call us at 424-208-7434 or email office@oppmed.com.'
      );
      return;
    }

    setSubmitStatus('submitting');
    setSubmitMessage('');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New contact form submission — Opportunity Medical',
          from_name: 'Opportunity Medical Website',
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          sms_consent: formData.smsConsent ? 'Yes' : 'No',
          botcheck: '',
        }),
      });
      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you — your message has been sent. Our team will be in touch soon.');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', smsConsent: false });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(
          (data && data.message) ||
            'Something went wrong sending your message. Please try again, or call us at 424-208-7434.'
        );
      }
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage(
        'We could not reach the server. Please check your connection and try again, or call us at 424-208-7434.'
      );
    }
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
                    aria-expanded={expandedFaq === index}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="faq-icon" aria-hidden="true">
                      {expandedFaq === index ? '−' : '+'}
                    </span>
                    {faq.question}
                  </button>

                  {expandedFaq === index && (
                    <div
                      className="faq-answer"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="contact-details-right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Honeypot: hidden from real users and assistive tech; only bots fill it */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: 'none' }}
              />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First name <span className="required" aria-hidden="true">*</span>
                    <span className="required-text">Required</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First"
                    className="form-input"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  />
                  {errors.firstName && (
                    <span id="firstName-error" className="form-error" role="alert">
                      {errors.firstName}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last name <span className="required" aria-hidden="true">*</span>
                    <span className="required-text">Required</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last"
                    className="form-input"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    aria-required="true"
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  />
                  {errors.lastName && (
                    <span id="lastName-error" className="form-error" role="alert">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email <span className="required" aria-hidden="true">*</span>
                  <span className="required-text">Required</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="form-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="424-208-7434"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Comment or Message</label>
                <textarea
                  id="message"
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
                  information, text "HELP" or contact us at 424-208-7434. 
                  <br/><br/>
                  <button
                    type="button"
                    className="link-button"
                    onClick={() => navigate('/terms-privacy#privacy')}
                  >
                    Privacy Policy
                  </button>: Your phone number will be stored and used solely for the purpose of sending SMS
                  communications. We do not share your information with third parties, except 
                  as required by law. Please refer to our full Privacy Policy for more details on 
                  how we protect your personal data. 
                  <br/><br/>
                  <button
                    type="button"
                    className="link-button"
                    onClick={() => navigate('/terms-privacy#terms')}
                  >
                    Terms & Conditions
                  </button>: By providing your phone number, you agree to our Terms & Conditions.
                </div>
              </div>
              
              <button
                type="submit"
                className="submit-button"
                disabled={submitStatus === 'submitting'}
              >
                {submitStatus === 'submitting' ? 'Sending…' : 'Submit'}
              </button>

              {/* Submission result — announced to screen readers via aria-live */}
              {(submitStatus === 'success' || submitStatus === 'error') && (
                <p
                  className={`form-status form-status--${submitStatus}`}
                  role={submitStatus === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;