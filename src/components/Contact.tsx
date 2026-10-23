import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });

    // Hide success message after 6 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="contact-form-section">
      <div className="container">
        <div className="contact-form-wrapper fade-in">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <div className="badge">Get Started</div>
            <h2 className="section-title">Ready to Build Financial Excellence?</h2>
            <p>
              Let's discuss how complete financial transformation can accelerate your
              business growth and profitability.
            </p>
          </div>

          <div id="contactFormContainer">
            {isSubmitted && (
              <div
                className="form-success-banner"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="icon" />
                <span>Thank you! Your message has been sent. We'll be in touch soon.</span>
              </div>
            )}

            <form id="contactForm" onSubmit={handleSubmit} noValidate={false}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g., Rajesh Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g., rajesh@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-describedby="email-error"
                />
                <span id="email-error" className="form-field-error">
                  Please enter a valid email address.
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="e.g., Apex Manufacturing Ltd"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your business goals and financial challenges..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="cta-button form-submit-btn"
                disabled={isSubmitting}
                style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="icon spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="icon-small" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
