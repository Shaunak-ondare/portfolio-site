

import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Logo/Name */}
        <div className="footer-logo">
          <span style={{ fontFamily: 'var(--font-main)', fontSize: '1rem', opacity: 0.6 }}>
            .shaunak
          </span>
        </div>

        {/* Middle Links */}
        <div className="footer-links">
          <a href="#projects" className="nav-link">projects</a>
          <a href="#about" className="nav-link">about</a>
          <a href="#skills" className="nav-link">skills</a>
          <a href="#contact" className="nav-link">contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://github.com/Shaunak-ondare" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://x.com/vibeinloop" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="Twitter"><Twitter size={18} /></a>
          <a href="https://instagram.com/shaunakondare" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="https://www.linkedin.com/in/shaunak-ondare20/" target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
        </div>

      </div>
    </footer>
  );
};
