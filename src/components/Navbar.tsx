import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="site-navbar" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '1.5rem 0' : '2rem 0',
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
      transition: 'all 0.3s ease',
      zIndex: 100,
    }}>
      <div className="container" style={{ padding: 0, position: 'relative' }}>
        {/* Logo */}
        <div className="nav-logo">
          <a href="#hero">
            .shaunak
          </a>
        </div>

        {/* Hamburger Toggle (Mobile) */}
        <button 
          className="nav-mobile-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>projects</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>about</a>
          <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>skills</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>contact</a>
          <a href="/Shaunak_Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link get-resume-btn" onClick={() => setMenuOpen(false)}>get resume</a>
        </div>
      </div>
    </nav>
  );
};
