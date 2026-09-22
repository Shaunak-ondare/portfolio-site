import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  // Initialize dark mode from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('retro-dark-mode');
    if (stored === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="app-shell">
      {/* Top Navbar (outside the window frame) */}
      <Navbar />

      {/* Mac OS Classic Window Frame */}
      <div className="mac-window animate-slide-up">
        {/* Title Bar */}
        <div className="mac-titlebar">
          <button
            className="mac-titlebar__close"
            aria-label="Close window"
            title="×"
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

      {/* Footer (outside window frame) */}
      <Footer />
    </div>
  );
}

export default App;
