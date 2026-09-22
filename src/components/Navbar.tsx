import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  );

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('retro-dark-mode', String(next));
  };

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="retro-navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a href="#hero" className="retro-navbar__logo" id="nav-logo">
        <span className="retro-navbar__logo-dot" />
        .shaunak
      </a>

      {/* Desktop Links */}
      <div className="retro-navbar__links" id="nav-desktop-links">
        {['#projects', '#skills', '#contact'].map((href) => (
          <a
            key={href}
            href={href}
            className="retro-navbar__link"
            onClick={(e) => { e.preventDefault(); handleNav(href); }}
          >
            {href.replace('#', '')}
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="retro-navbar__right">
        {/* Dark Mode Toggle */}
        <button
          id="dark-mode-toggle"
          className="dark-toggle"
          onClick={toggleDark}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Light mode' : 'Dark mode'}
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        {/* Resume CTA */}
        <a
          id="nav-resume-btn"
          href="/Shaunak_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="brutalist-btn-success"
          style={{ padding: '0.5rem 1rem', fontSize: '0.7rem' }}
        >
          <span className="btn-icon-arrow">↓</span>
          Resume
        </a>

        {/* Mobile Hamburger */}
        <button
          className="nav-mobile-toggle"
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          id="mobile-nav-drawer"
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: 240,
            height: '100vh',
            background: 'var(--surface)',
            border: 'var(--border-width) solid var(--border-color)',
            boxShadow: '-4px 0px 0px var(--border-color)',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            gap: '1.5rem',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '1.2rem',
            color: 'var(--text-faint)',
            borderBottom: '1.5px solid var(--border-color)',
            paddingBottom: '0.75rem',
            marginBottom: '0.5rem',
          }}>
            NAVIGATE
          </div>
          {[
            { href: '#hero', label: 'Home' },
            { href: '#projects', label: 'Projects' },
            { href: '#skills', label: 'Skills' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="retro-navbar__link"
              style={{ fontSize: '0.85rem' }}
              onClick={(e) => { e.preventDefault(); handleNav(href); }}
            >
              ▶ {label}
            </a>
          ))}
          <a
            href="/Shaunak_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="brutalist-btn-success"
            style={{ marginTop: 'auto', justifyContent: 'center' }}
            onClick={() => setMenuOpen(false)}
          >
            ↓ Resume
          </a>
        </div>
      )}

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 199,
            background: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(2px)',
          }}
        />
      )}
    </nav>
  );
};
