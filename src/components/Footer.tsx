import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Scale, AlertTriangle, UserCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenDisclosures?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenDisclosures,
}) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Corporate Identification */}
          <div className="footer-brand">
            <a href="#home" className="logo">
              Cruvo<span>.</span>
            </a>
            <p className="footer-tagline">
              Strategic finance leadership for manufacturing and service SMEs across India.
            </p>
            <div className="footer-entity-meta">
              <p>
                <strong>Legal Entity:</strong> Cruvo Consulting Advisory Services
              </p>
              <p>
                <strong>Principal Office:</strong> Pune / Mumbai Business Corridor, Maharashtra 411001, India
              </p>
            </div>
            <div className="footer-social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cruvo on LinkedIn"
                className="social-icon-link"
              >
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:cruvoconsulting@gmail.com"
                aria-label="Email Cruvo Consulting"
                className="social-icon-link"
              >
                <Mail className="icon" />
              </a>
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">Fractional CFO</a>
                </li>
                <li>
                  <a href="#services">Finance Transformation</a>
                </li>
                <li>
                  <a href="#services">Business Intelligence</a>
                </li>
                <li>
                  <a href="#process">Engagement Methodology</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Legal & Compliance</h4>
              <ul className="footer-legal-links">
                <li>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={onOpenPrivacy}
                  >
                    <ShieldCheck className="icon-small" />
                    <span>Privacy Policy (DPDP)</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={onOpenTerms}
                  >
                    <Scale className="icon-small" />
                    <span>Terms of Service</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="footer-link-btn"
                    onClick={onOpenDisclosures}
                  >
                    <AlertTriangle className="icon-small" />
                    <span>ICAI & SEBI Disclaimers</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Grievance Redressal (IT Act SPDI Rules Rule 5(9)) */}
            <div className="footer-col">
              <h4>Grievance Officer</h4>
              <div className="grievance-officer-box">
                <p className="grievance-name">
                  <UserCheck className="icon-small" />
                  <strong>Anika Nair, CA</strong>
                </p>
                <p className="grievance-desc">Designated Grievance & Data Protection Officer</p>
                <ul className="footer-contact-list">
                  <li>
                    <Mail className="icon-small" />
                    <a href="mailto:cruvoconsulting@gmail.com">cruvoconsulting@gmail.com</a>
                  </li>
                  <li>
                    <Phone className="icon-small" />
                    <a href="tel:+919325094211">+91 9325094211</a>
                  </li>
                  <li>
                    <MapPin className="icon-small" />
                    <span>Maharashtra, India</span>
                  </li>
                </ul>
                <p className="grievance-sla">
                  Statutory Response SLA: 24-36h acknowledgment, resolution within 15 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimers Footnote Banner (Tickets LC-005, LC-006, LC-007) */}
        <div className="footer-statutory-disclaimer">
          <p>
            <strong>*Statutory Disclaimers (India):</strong> Cruvo Consulting is a strategic management and business
            consulting enterprise. Founder Anika Nair is a Chartered Accountant; however, Cruvo Consulting is NOT a
            practicing CA audit firm and does not perform statutory audit or attest functions reserved under the
            Chartered Accountants Act, 1949. Under Clauses (6) and (7) of Part I of the First Schedule to the CA Act,
            nothing on this website constitutes an advertisement, solicitation, or personal inducement for professional
            accounting services. Furthermore, Cruvo is NOT a SEBI-registered Investment Adviser or Portfolio Manager;
            services are strictly confined to internal managerial accounting and SME operations. Historical metrics cited
            (e.g., ₹1.5Cr+ capital unlocked, 25% margin improvements) are illustrative case studies; past performance is
            not a guarantee of future financial results.
          </p>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Cruvo Consulting Advisory Services. All rights reserved.</p>
          <p className="jurisdiction-text">
            Subject to the Exclusive Jurisdiction of Courts in Pune / Mumbai, Maharashtra, India.
          </p>
        </div>
      </div>
    </footer>
  );
};
