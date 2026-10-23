import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-section-container">
          <div className="fade-in">
            <div className="badge">Leadership</div>
            <h2 className="section-title">Meet the Founder</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-highlight)' }}>
              Anika Nair, Chartered Accountant
            </p>
            <p>
              With deep experience in MNCs and startup consulting, Anika specializes in{' '}
              <strong>SME performance improvement</strong>. She bridges the gap between complex
              financial theory and the practical, gritty reality of running a manufacturing or
              service business in India.
            </p>
            <p>
              Her philosophy is simple:{' '}
              <strong>Numbers are useless if they don't lead to decisions.</strong> Cruvo goes
              beyond bookkeeping to provide the strategic &ldquo;Why&rdquo; and &ldquo;How&rdquo; behind the data.
            </p>

            <h3 style={{ marginTop: '2rem' }}>Why Cruvo?</h3>
            <ul className="card-list" style={{ border: 'none', padding: 0, margin: 0 }}>
              <li>
                <CheckCircle2 className="icon-small" style={{ color: 'var(--amber)' }} />
                <span>
                  <strong>Implementation over advice:</strong> We build the systems, we don't
                  just recommend them.
                </span>
              </li>
              <li>
                <CheckCircle2 className="icon-small" style={{ color: 'var(--amber)' }} />
                <span>
                  <strong>Indian Context:</strong> Solutions designed for local regulatory and
                  operational realities.
                </span>
              </li>
            </ul>
          </div>

          <div className="about-image-container fade-in">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Cruvo Founder & Strategic Finance Advisor Anika Nair"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
