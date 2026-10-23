import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Lock } from 'lucide-react';

interface ContactProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    setIsSubmitting(true);

    // Simulate async submission API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '', consent: false });

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

              {/* DPDP Act 2023 Explicit Consent Checkbox (Ticket LC-002) */}
              <div className="form-group-checkbox">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="legal-checkbox"
                />
                <label htmlFor="consent" className="legal-checkbox-label">
                  I consent to Cruvo Consulting processing my contact details and business inquiry
                  pursuant to India&apos;s <strong>Digital Personal Data Protection Act, 2023</strong>{' '}
                  and agree to the{' '}
                  <button
                    type="button"
                    className="legal-inline-link"
                    onClick={onOpenPrivacy}
                  >
                    Privacy Policy
                  </button>{' '}
                  and{' '}
                  <button
                    type="button"
                    className="legal-inline-link"
                    onClick={onOpenTerms}
                  >
                    Terms of Service
                  </button>
                  .
                </label>
              </div>

              {/* Statutory Confidentiality Safeguard (Ticket LC-015) */}
              <div className="confidentiality-notice">
                <Lock className="icon-small" />
                <span>
                  <strong>Confidentiality Guaranteed:</strong> All financial bottlenecks and operational
                  records disclosed are treated with strict professional confidentiality under Section 72A
                  of the IT Act, 2000 and will never be shared with third parties.
                </span>
              </div>

              <button
                type="submit"
                className="cta-button form-submit-btn"
                disabled={isSubmitting || !formData.consent}
                style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginTop: '1.2rem' }}
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
