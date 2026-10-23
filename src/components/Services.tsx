import React from 'react';
import { BarChart3, Cpu, TrendingUp, Check } from 'lucide-react';
import { Card } from './Card';
import { SERVICES } from '../data/services';

const ICON_MAP = {
  BarChart3: BarChart3,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="badge">Our Expertise</div>
          <h2 className="section-title">Strategic CFO Services</h2>
          <p>
            End-to-end finance transformation for manufacturing and service businesses ready
            to <strong>scale intelligently</strong>.
          </p>
        </div>

        <div className="card-grid">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.iconName];
            return (
              <Card key={service.id} className="fade-in">
                <div className="card-icon-box">
                  <IconComponent className="icon-lg" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="card-list">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <Check className="icon-small" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
