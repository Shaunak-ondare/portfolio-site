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
      backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.4)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 100
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
        <a href="#hero" className="hover-gradient" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '0.05em' }}>Shaunak.</a>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Works</a>
          <a href="#skills" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Skills</a>
        </div>
      </div>
    </nav>
  );
};
