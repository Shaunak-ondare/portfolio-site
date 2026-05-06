import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="container" style={{ padding: 0 }}>
        {/* Logo spanning 2 columns */}
        <div style={{ gridColumn: '1 / 3', paddingLeft: '2rem' }}>
          <a href="#hero" style={{ 
            fontSize: '1.25rem', 
            fontWeight: 500, 
            letterSpacing: '-0.02em',
            textDecoration: 'none'
          }}>
            .shaunak
          </a>
        </div>

        {/* Links aligned to the right grid columns */}
        <div style={{ 
          gridColumn: '5 / 9', 
          display: 'flex', 
          gap: '3rem', 
          alignItems: 'center',
          paddingLeft: '1rem'
        }}>
          <a href="#projects" className="nav-link">projects</a>
          <a href="#about" className="nav-link">about</a>
          <a href="#skills" className="nav-link">skills</a>
          <a href="#contact" className="nav-link">contact</a>
          <a href="/Shaunak_Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: '#10b981' }}>get resume</a>
        </div>
      </div>
    </nav>
  );
};
