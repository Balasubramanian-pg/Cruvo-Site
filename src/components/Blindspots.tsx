import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BLINDSPOTS } from '../data/blindspots';

export const Blindspots: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % BLINDSPOTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + BLINDSPOTS.length) % BLINDSPOTS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section id="common-blindspots" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <div className="badge">Common Issues</div>
          <h2 className="section-title">Unspoken Financial Challenges</h2>
          <p>
            These issues often hide in plain sight, impacting profitability and growth. We help
            you uncover and solve them.
          </p>
        </div>

        <div
          className="blindspot-wrapper fade-in"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div id="blindspots-carousel" aria-live="polite">
            {BLINDSPOTS.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={slide.id}
                  className={`blindspot-slide ${isActive ? 'active' : ''}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${BLINDSPOTS.length}`}
                  aria-hidden={!isActive}
                >
                  <div className="blindspot-image-container">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      loading="lazy"
                    />
                  </div>
                  <div className="blindspot-text">
                    <p>
                      <strong>{slide.title}</strong>
                    </p>
                    <p>{slide.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="blindspot-controls">
            <button
              type="button"
              className="carousel-arrow prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="icon-small" />
            </button>

            <div className="blindspot-nav" role="tablist" aria-label="Slide selectors">
              {BLINDSPOTS.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`blindspot-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-arrow next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="icon-small" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
