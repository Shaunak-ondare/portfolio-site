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
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      backgroundColor: scrolled ? 'rgba(3,3,3,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      zIndex: 100
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
        <a href="#hero" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>SHAUN.</a>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Works</a>
          <a href="#skills" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Skills</a>
        </div>
      </div>
    </nav>
  );
};
