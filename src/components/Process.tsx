import React from 'react';
import { Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/process';

export const Process: React.FC = () => {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="badge">Methodology</div>
          <h2 className="section-title">The Engagement Process</h2>
          <p>
            Designed for clarity and speed. We move from diagnosis to strategic execution
            in 90 days.
          </p>
        </div>

        <div className="timeline-horizontal fade-in">
          <div className="timeline-steps">
            <div className="timeline-connector"></div>

            {PROCESS_STEPS.map((step) => (
              <div key={step.stepNumber} className="timeline-step-horizontal">
                <div className="step-number-horizontal">{step.stepNumber}</div>
                <div className="step-content-horizontal">
                  <h3>{step.title}</h3>
                  <p style={{ color: 'var(--amber)', fontSize: '0.9rem' }}>
                    {step.timeline}
                  </p>
                  <p>{step.description}</p>
                  <ul>
                    {step.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <Check className="icon-small" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
