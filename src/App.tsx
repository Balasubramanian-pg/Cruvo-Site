import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { Process } from './components/Process';
import { Blindspots } from './components/Blindspots';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal } from './components/legal/LegalModal';
import { CookieConsentBanner } from './components/legal/CookieConsentBanner';
import { useScrollFadeIn } from './hooks/useIntersectionObserver';

export const App: React.FC = () => {
  useScrollFadeIn();

  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalDoc, setLegalModalDoc] = useState<'privacy' | 'terms' | 'disclosures'>('privacy');

  const openLegalModal = (doc: 'privacy' | 'terms' | 'disclosures') => {
    setLegalModalDoc(doc);
    setLegalModalOpen(true);
  };

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Results />
        <Process />
        <Blindspots />
        <About />
        <Contact
          onOpenPrivacy={() => openLegalModal('privacy')}
          onOpenTerms={() => openLegalModal('terms')}
        />
      </main>
      <Footer
        onOpenPrivacy={() => openLegalModal('privacy')}
        onOpenTerms={() => openLegalModal('terms')}
        onOpenDisclosures={() => openLegalModal('disclosures')}
      />

      {/* DPDP Act 2023 Compliant Cookie Banner */}
      <CookieConsentBanner onOpenPrivacy={() => openLegalModal('privacy')} />

      {/* Legal Dialog Viewer */}
      <LegalModal
        isOpen={legalModalOpen}
        initialDoc={legalModalDoc}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
};

export default App;
