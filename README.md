# Cruvo Consulting — Strategic CFO & Finance Advisory

A modern, responsive web application for **Cruvo Consulting**, providing fractional CFO and strategic finance services tailored for manufacturing and service SMEs across India.

Re-architected from a single-file prototype into a modular, production-ready **React 19 + TypeScript** application powered by **Vite**.

---

## 🚀 Features

- **⚡ Blazing Fast Architecture**: Powered by Vite and React 19 with instant HMR and lightweight bundle sizes.
- **✨ Spotlight Hover Effects**: Dynamic cursor-following radial gradient glow on cards (`--mouse-x`, `--mouse-y`).
- **📱 Fully Responsive**: Optimized layouts across mobile, tablet, and desktop viewports with a slide-out mobile drawer.
- **🔄 Interactive Blindspots Carousel**: Tab-accessible carousel with auto-advance, hover pause, prev/next navigation, and dot pagination.
- **⏱️ Responsive Methodology Timeline**: Horizontal timeline on desktop transitioning to an intuitive vertical progress layout on mobile devices.
- **🛡️ Modern Form Validation**: Conforms to modern web standards using CSS `:user-invalid` / `:user-valid` to avoid premature typing errors.
- **🔍 SEO & Social Metadata**: Rich Open Graph tags, Twitter card support, and structured JSON-LD organization schema.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Modern CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism, Backdrop Filters)
- **Typography**: [Afacad](https://fonts.google.com/specimen/Afacad) (Google Fonts)

---

## 📁 Project Structure

```text
Cruvo-Site/
├── public/
│   └── favicon.svg           # Custom vector favicon
├── src/
│   ├── assets/               # Static assets
│   ├── components/           # Modular React components
│   │   ├── About.tsx         # Founder profile and value proposition
│   │   ├── Blindspots.tsx    # Interactive carousel for unspoken financial issues
│   │   ├── Card.tsx          # Reusable card with spotlight mouse glow effect
│   │   ├── Contact.tsx       # Modern contact form with validation & status
│   │   ├── Footer.tsx        # Footer navigation and contact info
│   │   ├── Hero.tsx          # Value proposition hero banner with CTAs
│   │   ├── Navbar.tsx        # Sticky glass navigation bar with mobile toggle
│   │   ├── Process.tsx       # 4-stage engagement methodology timeline
│   │   ├── Results.tsx       # Featured turnaround case study & quick wins
│   │   └── Stats.tsx         # High-impact performance metrics
│   ├── data/                 # Separated data content files
│   │   ├── blindspots.ts     # Blindspots data
│   │   ├── process.ts        # Engagement process stages
│   │   ├── results.ts        # Case study metrics & outcomes
│   │   ├── services.ts       # Service descriptions & key highlights
│   │   └── stats.ts          # Core KPI stats
│   ├── hooks/                # Custom React hooks
│   │   ├── useCardGlow.ts    # Mouse-tracking spotlight hook
│   │   └── useIntersectionObserver.ts # Smooth scroll reveal hook
│   ├── App.tsx               # Main application container
│   ├── index.css             # Design tokens, variables & responsive styling
│   └── main.tsx              # Application entry point
├── index.html                # HTML entry point with SEO & JSON-LD
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

---

## 🚦 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Balasubramanian-pg/Cruvo-Site.git
   cd Cruvo-Site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Production Build

To build the static production bundle:

```bash
npm run build
```

To locally preview the production build:

```bash
npm run preview
```

---

## 📄 License

© Cruvo Consulting. All rights reserved.
