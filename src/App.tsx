import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Starfield } from './components/Starfield';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('retro-dark-mode');
    return stored === 'true';
  });

  // Sync dark class + expose setter via custom event
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Listen for toggle events from Navbar
  useEffect(() => {
    const handler = (e: Event) => {
      const next = (e as CustomEvent<boolean>).detail;
      setIsDark(next);
    };
    window.addEventListener('dark-mode-change', handler);
    return () => window.removeEventListener('dark-mode-change', handler);
  }, []);

  return (
    <>
      {/* ── Moving Star Particle Background (covers full viewport) ── */}
      <Starfield isDark={isDark} />

      {/* ── Page layout sits above starfield ── */}
      <div className="app-shell">
        {/* Top Navbar */}
        <Navbar onDarkToggle={setIsDark} isDark={isDark} />

        {/* Mac OS Classic Window Frame */}
        <div className="mac-window animate-slide-up">
          {/* Title Bar */}
          <div className="mac-titlebar">
            <button
              className="mac-titlebar__close"
              aria-label="Close window"
            >
              ×
            </button>
            <span className="mac-titlebar__title">SHAUNAK.EXE — PORTFOLIO v2.0</span>
          </div>

          {/* Window Content */}
          <div className="mac-window__content">
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
