import { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDark: () => void;
}

export const Navbar = ({ darkMode, onToggleDark }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      backgroundColor: darkMode
        ? scrolled ? 'rgba(10, 10, 10, 0.92)' : 'transparent'
        : scrolled ? 'rgba(232, 231, 228, 0.82)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
      borderBottom: 'none',
      boxShadow: 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 100,
      color: darkMode ? '#ffffff' : 'var(--color-hero-ink)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
        <a href="#hero" className="hover-gradient" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.05em' }}>Shaunak.</a>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Works</a>
          <a href="#skills" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Skills</a>

          {/* Dark Mode Toggle */}
          <button
            id="dark-mode-toggle"
            onClick={onToggleDark}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 1rem',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: darkMode
                ? '1px solid rgba(255,255,255,0.15)'
                : '1px solid rgba(19,32,55,0.18)',
              background: darkMode
                ? 'rgba(255,255,255,0.08)'
                : 'rgba(255,255,255,0.45)',
              color: darkMode ? '#e0e0e0' : 'var(--color-hero-ink)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: darkMode
                ? '0 2px 12px rgba(0,0,0,0.35)'
                : '0 2px 10px rgba(19,32,55,0.08)',
            }}
          >
            <span style={{ fontSize: '1rem', lineHeight: 1 }}>
              {darkMode ? '☀️' : '🌙'}
            </span>
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};
