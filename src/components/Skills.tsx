import { Terminal, Code, Cloud, RefreshCw, Shield, Server, Edit3, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: "Programming & Development",
    subtitle: "Web & Code",
    icon: <Code size={22} />,
    count: 6,
    unit: "Skills",
    gradient: { from: '#0f8cff', mid: '#6366f1', to: '#a855f7' },
    glowColor: 'rgba(99,102,241,0.45)',
    skills: ["JavaScript", "HTML5", "CSS3", "Responsive Web Design", "UI/UX Basics", "Debugging & Troubleshooting"]
  },
  {
    title: "DevOps & Cloud",
    subtitle: "Infrastructure",
    icon: <Cloud size={22} />,
    count: 9,
    unit: "Skills",
    gradient: { from: '#06b6d4', mid: '#0ea5e9', to: '#3b82f6' },
    glowColor: 'rgba(14,165,233,0.45)',
    skills: ["Docker", "Docker Compose", "Containerization", "AWS EC2", "AWS IAM", "AWS Lambda", "AWS Organizations", "Boto3 (Python)", "Nginx"]
  },
  {
    title: "CI/CD & Automation",
    subtitle: "Pipeline",
    icon: <RefreshCw size={22} />,
    count: 4,
    unit: "Skills",
    gradient: { from: '#f59e0b', mid: '#f97316', to: '#ef4444' },
    glowColor: 'rgba(249,115,22,0.45)',
    skills: ["GitHub Actions", "Self-hosted Runners", "CI/CD Pipeline Design", "Jenkins"]
  },
  {
    title: "Code Quality & Security",
    subtitle: "Analysis",
    icon: <Shield size={22} />,
    count: 2,
    unit: "Skills",
    gradient: { from: '#10b981', mid: '#059669', to: '#047857' },
    glowColor: 'rgba(16,185,129,0.45)',
    skills: ["SonarQube", "Static Code Analysis"]
  },
  {
    title: "System & Deployment",
    subtitle: "Server Ops",
    icon: <Server size={22} />,
    count: 4,
    unit: "Skills",
    gradient: { from: '#8b5cf6', mid: '#7c3aed', to: '#6d28d9' },
    glowColor: 'rgba(139,92,246,0.45)',
    skills: ["Docker Deployment", "Linux Server Setup", "Environment Config", "Port & Service Management"]
  },
  {
    title: "Operating Systems & Tools",
    subtitle: "CLI & VCS",
    icon: <Terminal size={22} />,
    count: 3,
    unit: "Skills",
    gradient: { from: '#64748b', mid: '#475569', to: '#334155' },
    glowColor: 'rgba(100,116,139,0.45)',
    skills: ["Linux (CLI)", "Windows", "Git & GitHub"]
  },
  {
    title: "Creative & Design",
    subtitle: "Visual Arts",
    icon: <Edit3 size={22} />,
    count: 3,
    unit: "Skills",
    gradient: { from: '#ec4899', mid: '#f43f5e', to: '#e11d48' },
    glowColor: 'rgba(236,72,153,0.45)',
    skills: ["Photography", "Videography", "Graphic Design Basics"]
  }
];

type Category = typeof skillCategories[number];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<Category | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCard(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeCard ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeCard]);

  return (
    <>
      <section id="skills" ref={sectionRef} className="skills-section">
        <div className="container">
          <h2 className={`section-title ${isVisible ? 'animate-fade-in' : ''}`} style={{ opacity: isVisible ? undefined : 0 }}>
            Core Skills &amp; Expertise
          </h2>

          <div className="skills-grid">
            {skillCategories.map((cat, index) => (
              <button
                key={cat.title}
                className={`folder-card ${isVisible ? `animate-fade-in delay-${(index % 3) + 1}` : ''}`}
                style={{
                  opacity: isVisible ? undefined : 0,
                  '--card-from': cat.gradient.from,
                  '--card-mid': cat.gradient.mid,
                  '--card-to': cat.gradient.to,
                  '--card-glow': cat.glowColor,
                } as React.CSSProperties}
                onClick={() => setActiveCard(cat)}
                aria-label={`Open ${cat.title} skills`}
              >
                {/* ── Banner ── */}
                <div className="folder-card__banner">
                  <div className="folder-card__banner-orb folder-card__banner-orb--a" />
                  <div className="folder-card__banner-orb folder-card__banner-orb--b" />
                  <span className="folder-card__banner-label">{cat.subtitle}</span>
                </div>

                {/* ── Body ── */}
                <div className="folder-card__body">
                  <div className="folder-card__title-row">
                    <span className="folder-card__icon">{cat.icon}</span>
                    <span className="folder-card__title">{cat.title}</span>
                  </div>
                  <div className="folder-card__meta">
                    <span className="folder-card__count">
                      <strong>{String(cat.count).padStart(2, '0')}</strong>
                      <em>{cat.unit}</em>
                    </span>
                    <span className="folder-card__hint">Click to explore →</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {activeCard && (
        <div
          className="skill-modal-backdrop"
          onClick={() => setActiveCard(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeCard.title} skills`}
        >
          <div
            className="skill-modal"
            style={{
              '--modal-from': activeCard.gradient.from,
              '--modal-mid': activeCard.gradient.mid,
              '--modal-to': activeCard.gradient.to,
              '--modal-glow': activeCard.glowColor,
            } as React.CSSProperties}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal banner */}
            <div className="skill-modal__banner">
              <div className="skill-modal__banner-orb skill-modal__banner-orb--a" />
              <div className="skill-modal__banner-orb skill-modal__banner-orb--b" />
              <div className="skill-modal__banner-content">
                <span className="skill-modal__icon">{activeCard.icon}</span>
                <div>
                  <p className="skill-modal__subtitle">{activeCard.subtitle}</p>
                  <h3 className="skill-modal__title">{activeCard.title}</h3>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              className="skill-modal__close"
              onClick={() => setActiveCard(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Skill list */}
            <div className="skill-modal__body">
              <p className="skill-modal__count-label">
                <strong>{String(activeCard.count).padStart(2, '0')}</strong> {activeCard.unit}
              </p>
              <ul className="skill-modal__list">
                {activeCard.skills.map((skill, i) => (
                  <li
                    key={skill}
                    className="skill-modal__item"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="skill-modal__dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
