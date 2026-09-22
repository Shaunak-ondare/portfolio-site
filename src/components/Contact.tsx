import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socials = [
  {
    id: 'contact-github',
    label: 'GitHub',
    icon: <Github size={16} />,
    href: 'https://github.com/Shaunak-ondare',
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    icon: <Linkedin size={16} />,
    href: 'https://www.linkedin.com/in/shaunak-ondare20/',
  },
  {
    id: 'contact-twitter',
    label: 'X / Twitter',
    icon: <Twitter size={16} />,
    href: 'https://x.com/vibeinloop',
  },
  {
    id: 'contact-instagram',
    label: 'Instagram',
    icon: <Instagram size={16} />,
    href: 'https://www.instagram.com/shaunak.ondare/',
  },
];

export const Contact = () => {
  return (
    <section id="contact" aria-label="Contact">
      {/* Section Header */}
      <div className="section-label animate-slide-up" id="contact-section-label">
        GET IN TOUCH
      </div>

      <div className="contact-block">
        {/* Page Icon */}
        <span
          style={{ fontSize: '3rem', lineHeight: 1, display: 'block' }}
          role="img"
          aria-label="Mailbox"
          className="animate-slide-up delay-1"
        >
          📬
        </span>

        {/* Heading */}
        <h2
          className="contact-heading animate-slide-up delay-1"
          id="contact-heading"
        >
          Let's Build Something Together
        </h2>

        {/* Description */}
        <p
          className="contact-desc animate-slide-up delay-2"
          id="contact-description"
        >
          I'm open to freelance projects, full-time roles, and interesting
          collaborations. Drop me an email — I read everything.
        </p>

        {/* Primary CTA */}
        <a
          id="contact-email-btn"
          href="mailto:shaunakondare999@gmail.com"
          className="brutalist-btn animate-slide-up delay-2"
          style={{ fontSize: '0.82rem', padding: '0.9rem 1.75rem' }}
        >
          <Mail size={15} />
          shaunakondare999@gmail.com
          <span className="btn-icon-arrow">→</span>
        </a>

        {/* Social Row */}
        <div
          className="contact-social-row animate-slide-up delay-3"
          id="contact-socials"
        >
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
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <hr className="section-divider" style={{ marginTop: '3rem' }} />
    </section>
  );
};
