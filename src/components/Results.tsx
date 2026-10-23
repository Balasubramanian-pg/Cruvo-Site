import React from 'react';
import { FileText, Target } from 'lucide-react';
import { Card } from './Card';
import { FEATURED_CASE_STUDY, QUICK_WINS } from '../data/results';

export const Results: React.FC = () => {
  return (
    <section id="results" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="badge">Proven Impact</div>
          <h2 className="section-title">Client Success</h2>
          <p>
            We don't just report numbers; we change them. Here is how we delivered measurable
            improvements.
          </p>
        </div>

        <div className="card-grid">
          {/* Featured Case Study */}
          <Card className="featured-case-study fade-in">
            <div className="case-study-content">
              <div
                className="badge"
                style={{ background: 'var(--amber)', color: '#050505', border: 'none' }}
              >
                Featured Case Study
              </div>
              <h3 style={{ marginTop: '1rem' }}>{FEATURED_CASE_STUDY.title}</h3>
              <p>
                <strong>The Challenge:</strong> {FEATURED_CASE_STUDY.challenge}
              </p>
              <p>
                <strong>Our Intervention:</strong> {FEATURED_CASE_STUDY.intervention}
              </p>
              <div className="case-metrics-grid">
                {FEATURED_CASE_STUDY.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-box">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Quick Win 1 */}
          <Card className="fade-in">
            <div
              className="card-icon-box"
              style={{
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                border: 'none',
                background: 'var(--amber-dim)',
              }}
            >
              <FileText className="icon-small" style={{ color: 'var(--amber)' }} />
            </div>
            <h3>{QUICK_WINS[0].title}</h3>
            <p>{QUICK_WINS[0].description}</p>
            <p style={{ color: 'var(--text-highlight)', marginTop: '1rem' }}>
              Result: {QUICK_WINS[0].result}
            </p>
          </Card>

          {/* Quick Win 2 */}
          <Card className="fade-in">
            <div
              className="card-icon-box"
              style={{
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                border: 'none',
                background: 'var(--amber-dim)',
              }}
            >
              <Target className="icon-small" style={{ color: 'var(--amber)' }} />
            </div>
            <h3>{QUICK_WINS[1].title}</h3>
            <p>{QUICK_WINS[1].description}</p>
            <p style={{ color: 'var(--text-highlight)', marginTop: '1rem' }}>
              Result: {QUICK_WINS[1].result}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
