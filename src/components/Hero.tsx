import { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const roles = [
  'BUILDING RESILIENT INFRA',
  'BUILDING DEVSECOPS PIPELINES',
  'DEPLOYING APPS SECURELY',
  'AUTOMATING CLOUD WORKLOADS',
];

const tags = [
  '#DevOps',
  '#CloudArchitecture',
  '#DevSecOps',
  '#Terraform',
  '#OpenToWork',
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsFading(false);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" aria-label="Introduction">
      {/* ── Notion Breadcrumb ── */}
      <div className="notion-breadcrumb animate-slide-up" id="hero-breadcrumb">
        <span className="notion-breadcrumb__item">📄 Workspace</span>
        <span className="notion-breadcrumb__sep">/</span>
        <span className="notion-breadcrumb__item">Portfolio</span>
        <span className="notion-breadcrumb__sep">/</span>
        <span className="notion-breadcrumb__item" style={{ color: 'var(--text-primary)' }}>
          Shaunak Ondare
        </span>
      </div>

      {/* ── Page Icon ── */}
      <span
        className="notion-page-icon animate-slide-up delay-1"
        role="img"
        aria-label="Developer"
        id="hero-page-icon"
      >
        👨‍💻
      </span>

      {/* ── H1 Title ── */}
      <h1
        className="notion-title animate-slide-up delay-2"
        id="hero-title"
      >
        Shaunak Ondare
      </h1>

      {/* ── VT323 Role Ticker ── */}
      <div
        className="notion-subtitle animate-slide-up delay-2"
        id="hero-role-ticker"
        style={{
          opacity: isFading ? 0 : 1,
          transform: isFading ? 'translateY(6px)' : 'translateY(0)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        {'> '}{roles[roleIndex]}
        <span style={{ animation: 'pixelBlink 0.9s steps(1) infinite' }}>_</span>
      </div>

      {/* ── Description ── */}
      <p className="notion-description animate-slide-up delay-3" id="hero-description">
        A DevOps engineer who builds resilient cloud infrastructure, automates
        delivery pipelines, and enforces security gates — so teams ship faster
        without breaking things.
      </p>

      {/* ── Tag Badges ── */}
      <div className="notion-tags animate-slide-up delay-3" id="hero-tags">
        {tags.map((tag) => (
          <span key={tag} className="notion-tag">{tag}</span>
        ))}
      </div>

      {/* ── CTA Buttons ── */}
      <div className="hero-actions animate-slide-up delay-4" id="hero-cta-buttons">
        <a
          id="hero-view-projects-btn"
          href="#projects"
          className="brutalist-btn"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Sparkles size={14} className="btn-icon-sparkle" />
          View Projects
          <ArrowRight size={14} className="btn-icon-arrow" />
        </a>

        <a
          id="hero-resume-btn"
          href="/Shaunak_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="brutalist-btn-outline"
        >
          <Download size={14} className="btn-icon-arrow" />
          Get Resume
        </a>
      </div>

      {/* ── Section divider ── */}
      <hr className="section-divider" style={{ marginTop: '3rem' }} />
    </section>
  );
};
