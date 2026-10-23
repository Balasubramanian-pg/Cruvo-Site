import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              Cruvo<span>.</span>
            </a>
            <p className="footer-tagline">
              Strategic finance leadership for manufacturing and service SMEs across India.
            </p>
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
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About Founder</a>
                </li>
                <li>
                  <a href="#results">Success Stories</a>
                </li>
                <li>
                  <a href="#process">Methodology</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
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
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Cruvo Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
