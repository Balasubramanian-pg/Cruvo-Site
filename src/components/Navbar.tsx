import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsIndicator } from './ui/tabs';

interface NavItem {
  value: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { value: 'home', label: 'Home', href: '#home' },
  { value: 'services', label: 'Services', href: '#services' },
  { value: 'results', label: 'Results', href: '#results' },
  { value: 'process', label: 'Process', href: '#process' },
  { value: 'about', label: 'About', href: '#about' },
  { value: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('home');
  const isClickingRef = useRef(false);

  // Scroll detection for navbar background blur & active section ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Don't override active tab during programmatic smooth scroll
      if (isClickingRef.current) return;

      const scrollPosition = window.scrollY + 140;

      // Find the current active section
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const element = document.getElementById(item.value);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveTab(item.value);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on initial load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabChange = (value: string | number | null) => {
    if (!value || typeof value !== 'string') return;
    setActiveTab(value);
    isClickingRef.current = true;

    const element = document.getElementById(value);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }

    // Allow scroll spy to resume after smooth scroll animation completes
    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);

    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container nav-container">
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              handleTabChange('home');
            }}
          >
            Cruvo<span>.</span>
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            className="mobile-menu-toggle"
            id="mobileMenuToggle"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="icon-lg" />
            ) : (
              <Menu className="icon-lg" />
            )}
          </button>

          {/* Desktop Navigation Tabs */}
          <div className="desktop-nav-tabs">
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="nav-tabs"
            >
              <TabsList variant="line" className="nav-tabs-list">
                <TabsIndicator className="nav-tabs-indicator" />
                {NAV_ITEMS.map((item) => (
                  <TabsTrigger
                    key={item.value}
                    value={item.value}
                    className="nav-tabs-trigger"
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Mobile Navigation Drawer */}
          <div className={`nav-menu mobile-nav-drawer ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              orientation="vertical"
              className="mobile-nav-tabs"
            >
              <TabsList className="mobile-tabs-list">
                {NAV_ITEMS.map((item) => (
                  <TabsTrigger
                    key={item.value}
                    value={item.value}
                    className="mobile-tabs-trigger"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </nav>
    </header>
  );
};
