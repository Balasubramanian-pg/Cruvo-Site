import React from 'react';
import { STATS } from '../data/stats';

export const Stats: React.FC = () => {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-grid fade-in">
          {STATS.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-number">{stat.value}*</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        <p className="stats-footnote">
          *Illustrative historical client outcomes. Individual performance depends upon baseline financial health,
          operational discipline, and market dynamics. Not an assurance of future returns.
        </p>
      </div>
    </section>
  );
};
