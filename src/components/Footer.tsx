import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socials = [
  {
    id: 'footer-github',
    label: 'GitHub',
    icon: <Github size={14} />,
    href: 'https://github.com/Shaunak-ondare',
  },
  {
    id: 'footer-linkedin',
    label: 'LinkedIn',
    icon: <Linkedin size={14} />,
    href: 'https://www.linkedin.com/in/shaunak-ondare20/',
  },
  {
    id: 'footer-twitter',
    label: 'X / Twitter',
    icon: <Twitter size={14} />,
    href: 'https://x.com/vibeinloop',
  },
  {
    id: 'footer-instagram',
    label: 'Instagram',
    icon: <Instagram size={14} />,
    href: 'https://www.instagram.com/shaunak.ondare/',
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="retro-footer" id="site-footer" role="contentinfo">
      {/* Status Bar */}
      <div className="retro-footer__status" id="footer-status">
        <span className="retro-footer__status-dot" aria-hidden="true" />
        ▓▒░ SHAUNAK.EXE — READY ░▒▓
      </div>

      {/* Social Icons */}
      <div className="retro-footer__social" id="footer-socials">
        {socials.map(({ id, label, icon, href }) => (
          <a
            key={id}
            id={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label={label}
            title={label}
            style={{ width: 32, height: 32 }}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="retro-footer__copy" id="footer-copy">
        © {year} · shaunak ondare
      </div>
    </footer>
  );
};
