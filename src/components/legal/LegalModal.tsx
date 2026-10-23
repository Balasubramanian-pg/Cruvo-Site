import React, { useEffect, useState } from 'react';
import { X, Shield, Scale, AlertCircle, FileText } from 'lucide-react';
import {
  PRIVACY_POLICY,
  TERMS_OF_SERVICE,
  REGULATORY_DISCLOSURES,
  type LegalDocument,
} from '../../data/legalContent';

interface LegalModalProps {
  isOpen: boolean;
  initialDoc: 'privacy' | 'terms' | 'disclosures';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialDoc,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'disclosures'>(initialDoc);

  useEffect(() => {
    setActiveTab(initialDoc);
  }, [initialDoc]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  let currentDoc: LegalDocument = PRIVACY_POLICY;
  if (activeTab === 'terms') currentDoc = TERMS_OF_SERVICE;
  if (activeTab === 'disclosures') currentDoc = REGULATORY_DISCLOSURES;

  return (
    <div
      className="legal-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legalModalTitle"
      onClick={onClose}
    >
      <div
        className="legal-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="legal-modal-header">
          <div className="legal-tab-group">
            <button
              type="button"
              className={`legal-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              <Shield className="icon-small" />
              <span>Privacy Policy</span>
            </button>
            <button
              type="button"
              className={`legal-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => setActiveTab('terms')}
            >
              <Scale className="icon-small" />
              <span>Terms of Service</span>
            </button>
            <button
              type="button"
              className={`legal-tab-btn ${activeTab === 'disclosures' ? 'active' : ''}`}
              onClick={() => setActiveTab('disclosures')}
            >
              <AlertCircle className="icon-small" />
              <span>Disclosures & ICAI</span>
            </button>
          </div>

          <button
            type="button"
            className="legal-modal-close"
            onClick={onClose}
            aria-label="Close legal modal"
          >
            <X className="icon-small" />
          </button>
        </div>

        {/* Body */}
        <div className="legal-modal-body">
          <div className="legal-doc-hero">
            <div className="badge">Statutory Compliance (India)</div>
            <h2 id="legalModalTitle" className="legal-doc-title">
              {currentDoc.title}
            </h2>
            <p className="legal-doc-subtitle">{currentDoc.subtitle}</p>
            <p className="legal-doc-date">Last Updated: {currentDoc.lastUpdated}</p>
          </div>

          <div className="legal-sections-list">
            {currentDoc.sections.map((sec, idx) => (
              <div key={idx} className="legal-section-block">
                <h3>{sec.title}</h3>
                {sec.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="legal-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="legal-modal-footer">
          <div className="legal-footer-info">
            <FileText className="icon-small" />
            <span>Governed under the Laws of the Republic of India</span>
          </div>
          <button
            type="button"
            className="cta-button legal-close-btn"
            onClick={onClose}
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
