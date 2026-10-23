import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <div className="badge">Strategic Finance for Indian SMEs</div>
          <h1>
            Finance that Fuels Growth.
            <br />
            Strategy that Shapes the Future.
          </h1>
          <p className="hero-subtitle">
            Partnering with founders to <strong>unlock clarity</strong>, maximize{' '}
            <strong>enterprise value</strong>, and transition from chaotic growth to{' '}
            <strong>sustainable profitability</strong>.
          </p>
          <div className="cta-group">
            <a href="#contact" className="cta-button">
              Book Strategic Call
              <ArrowRight className="icon" style={{ marginLeft: '4px' }} />
            </a>
            <a href="#contact" className="cta-button cta-secondary">
              Take Financial Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
