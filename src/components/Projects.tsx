import type { CSSProperties, ReactNode } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    eyebrow: 'Featured Build',
    title: 'Automated IAM Deletion Engine',
    description:
      'Serverless Lambda function written in Python that assumes IAM roles across multiple AWS accounts to systematically delete inactive user access keys, login profiles, and users safely.',
    tags: ['AWS Lambda', 'Python', 'IAM', 'Boto3'],
    links: { github: '#', live: '#' },
    accent: {
      from: '#1ea7fd',
      mid: '#4f7cff',
      to: '#7b4dff',
      glow: 'rgba(70, 117, 255, 0.26)',
    },
  },
  {
    eyebrow: 'Workflow Hardening',
    title: 'CI/CD Pipeline Security Integration',
    description:
      'Developed and debugged GitHub Actions workflows integrating OWASP Dependency Check. Resolved Java Runtime incompatibilities for maven plugins to enforce strict security gates before deployment.',
    tags: ['CI/CD', 'GitHub Actions', 'Maven', 'OWASP'],
    links: { github: 'https://github.com/Shaunak-ondare/devsecops-pipeline' },
    accent: {
      from: '#00b5a6',
      mid: '#1ea7fd',
      to: '#4f7cff',
      glow: 'rgba(35, 143, 212, 0.22)',
    },
  },
  {
    eyebrow: 'Platform Ops',
    title: 'Multi-Environment Infrastructure Automation',
    description:
      'Designed declarative infrastructure as code modules to provision consistent environments across dev, staging, and production using custom modules.',
    tags: ['Terraform', 'AWS', 'Docker', 'Bash'],
    links: { live: '#' },
    accent: {
      from: '#ff9a3d',
      mid: '#ff6f91',
      to: '#ff5f6d',
      glow: 'rgba(255, 132, 93, 0.22)',
    },
  },
];

const renderAction = (
  href: string | undefined,
  label: string,
  icon: ReactNode,
  ariaLabel: string
) => {
  if (!href || href === '#') {
    return (
      <span className="project-card__link project-card__link--disabled" aria-disabled="true">
        {icon}
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="project-card__link"
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      {label}
    </a>
  );
};

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ padding: 'var(--section-padding)', position: 'relative', zIndex: 1 }}
    >
      <div className="container">
        <h2
          className={`section-title ${isVisible ? 'animate-fade-in' : ''}`}
          style={{ opacity: isVisible ? '' : 0 }}
        >
          Systems I&apos;ve Built
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const cardStyle = {
              opacity: isVisible ? undefined : 0,
              '--project-accent-from': project.accent.from,
              '--project-accent-mid': project.accent.mid,
              '--project-accent-to': project.accent.to,
              '--project-accent-glow': project.accent.glow,
            } as CSSProperties;

            return (
              <article
                key={project.title}
                className={`project-card ${isVisible ? `animate-fade-in delay-${(index % 3) + 1}` : ''}`}
                style={cardStyle}
              >
                <div className="project-card__banner">
                  <div className="project-card__atmosphere" aria-hidden="true" />
                  <span className="project-card__eyebrow">{project.eyebrow}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                </div>

                <div className="project-card__content">
                  <p className="project-card__description">{project.description}</p>

                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__actions">
                    {renderAction(project.links.github, 'Code', <Github size={18} />, 'GitHub')}
                    {renderAction(project.links.live, 'Visit', <ExternalLink size={18} />, 'Live Demo')}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
