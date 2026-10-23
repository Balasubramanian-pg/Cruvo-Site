import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, X } from 'lucide-react';

interface CookieConsentBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cruvo_cookie_consent');
    if (!savedConsent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cruvo_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('cruvo_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      className="cookie-banner"
      role="region"
      aria-label="Cookie and Privacy Preferences"
    >
      <div className="container cookie-banner-container">
        <div className="cookie-banner-content">
          <div className="cookie-icon-box">
            <Cookie className="icon" />
          </div>
          <div className="cookie-text">
            <p className="cookie-title">
              <strong>Digital Personal Data Protection & Cookie Notice</strong>
            </p>
            <p className="cookie-desc">
              In accordance with India&apos;s DPDP Act, 2023, we use strictly essential cookies for
              navigation and telemetry to improve our strategic finance advisory platform. We respect
              your data privacy and never sell or monetize client records.
            </p>
          </div>
        </div>

        <div className="cookie-actions">
          <button
            type="button"
            className="cookie-link-btn"
            onClick={onOpenPrivacy}
          >
            <ShieldCheck className="icon-small" />
            <span>Privacy Notice</span>
          </button>
          <button
            type="button"
            className="cta-button cta-secondary cookie-reject-btn"
            onClick={handleRejectNonEssential}
          >
            Essential Only
          </button>
          <button
            type="button"
            className="cta-button cookie-accept-btn"
            onClick={handleAcceptAll}
          >
            Accept All
          </button>
          <button
            type="button"
            className="cookie-close-icon"
            onClick={handleRejectNonEssential}
            aria-label="Close cookie notice"
          >
            <X className="icon-small" />
          </button>
        </div>
      </div>
    </aside>
  );
};
