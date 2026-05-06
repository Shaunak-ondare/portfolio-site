

import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Logo/Name */}
        <div style={{ gridColumn: '1 / 3', paddingLeft: '2rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-main)', fontSize: '1rem', opacity: 0.6 }}>
            .shaunak
          </span>
        </div>

        {/* Middle Links */}
        <div style={{ 
          gridColumn: '4 / 7', 
          display: 'flex', 
          gap: '2rem', 
          alignItems: 'center',
          fontFamily: 'var(--font-main)',
          fontSize: '0.9rem',
          opacity: 0.6
        }}>
          <a href="#projects" className="nav-link">projects</a>
          <a href="#about" className="nav-link">about</a>
          <a href="#skills" className="nav-link">skills</a>
          <a href="#contact" className="nav-link">contact</a>
        </div>

        {/* Social Icons */}
        <div style={{ 
          gridColumn: '7 / 9', 
          display: 'flex', 
          justifyContent: 'flex-end',
          gap: '1.5rem',
          paddingRight: '2rem',
          alignItems: 'center',
          opacity: 0.6
        }}>
          <a href="#" className="nav-link"><Github size={18} /></a>
          <a href="#" className="nav-link"><Twitter size={18} /></a>
          <a href="#" className="nav-link"><Instagram size={18} /></a>
          <a href="#" className="nav-link"><Linkedin size={18} /></a>
        </div>

      </div>
    </footer>
  );
};
