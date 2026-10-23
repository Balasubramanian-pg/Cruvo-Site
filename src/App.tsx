import React from 'react';
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
import { useScrollFadeIn } from './hooks/useIntersectionObserver';

export const App: React.FC = () => {
  useScrollFadeIn();

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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
