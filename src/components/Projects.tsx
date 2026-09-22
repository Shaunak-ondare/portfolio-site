import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    year: '2026',
    type: 'Cloud Architecture',
    badgeClass: 'badge--cloud',
    title: 'IAM Engine',
    description:
      'Serverless Lambda function written in Python that assumes IAM roles across multiple AWS accounts to systematically delete inactive user access keys, login profiles, and users safely.',
    tags: ['AWS Lambda', 'Python', 'IAM', 'Multi-Account'],
    link: 'https://github.com/Shaunak-ondare/git-cicd-otp-auth-repo',
  },
  {
    year: '2026',
    type: 'DevSecOps',
    badgeClass: 'badge--devsec',
    title: 'Pipeline Sec',
    description:
      'Developed GitHub Actions workflows integrating OWASP Dependency Check. Resolved Java Runtime incompatibilities for Maven plugins to enforce strict security gates before deployment.',
    tags: ['GitHub Actions', 'OWASP', 'Maven', 'Security'],
    link: 'https://github.com/Shaunak-ondare/devsecops-pipeline',
  },
  {
    year: '2026',
    type: 'Infrastructure',
    badgeClass: 'badge--infra',
    title: 'Infra Auto',
    description:
      'Declarative infrastructure-as-code modules to provision consistent environments across dev, staging, and production using custom Terraform modules and EKS clusters.',
    tags: ['Terraform', 'EKS', 'Kubernetes', 'IaC'],
    link: 'https://github.com/Shaunak-ondare/terraform-eks-repo',
  },
];

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} aria-label="Projects">
      {/* Section Header */}
      <div className="section-label animate-slide-up" id="projects-section-label">
        DEPLOYMENTS
      </div>
      <h2 className="section-heading animate-slide-up delay-1" id="projects-heading">
        Selected Projects
      </h2>
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          marginBottom: '2rem',
          lineHeight: 1.6,
        }}
        className="animate-slide-up delay-2"
      >
        Things I've built · shipped · automated
      </p>

      {/* Cards Grid */}
      <div className="projects-grid" id="projects-grid">
        {projects.map((project, index) => (
          /* Outer: animation only — display:contents makes it invisible to grid layout */
          <div
            key={project.title}
            className={`animate-slide-up delay-${index + 1}`}
            style={{ opacity: isVisible ? 1 : 0, display: 'contents' }}
          >
            {/* Inner: hover interaction only — no animation running here */}
            <div
              id={`project-card-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="project-card"
            >
              {/* Card Header */}
              <div className="project-card__header">
                <div className="project-card__type-row">
                  <span className={`badge ${project.badgeClass}`}>
                    {project.type}
                  </span>
                  <span className="project-card__year">{project.year}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>

                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>

                <div className="project-card__footer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    id={`project-link-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View on GitHub
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="section-divider" style={{ marginTop: '3rem' }} />
    </section>
  );
};
