import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    num: '01',
    title: 'Cloud & Infrastructure',
    tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'EKS'],
  },
  {
    num: '02',
    title: 'CI/CD Pipelines',
    tools: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD'],
  },
  {
    num: '03',
    title: 'Programming',
    tools: ['Python', 'JavaScript', 'Bash', 'Go'],
  },
  {
    num: '04',
    title: 'Security & Monitoring',
    tools: ['SonarQube', 'IAM', 'Datadog', 'Prometheus', 'OWASP'],
  },
];

export const Skills = () => {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} aria-label="Skills">
      {/* Section Header */}
      <div className="section-label animate-slide-up" id="skills-section-label">
        SKILL MATRIX
      </div>
      <h2 className="section-heading animate-slide-up delay-1" id="skills-heading">
        Tech Stack
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
        Tools I reach for · technologies I trust
      </p>

      {/* Two-column layout */}
      <div style={{ width: '100%' }}>
        {/* Notion-style Table */}
        <div
          className="skills-table animate-slide-up delay-2"
          id="skills-table"
          style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease' }}
        >
          {/* Table Header */}
          <div className="skills-table__header">
            <span>#</span>
            <span>Category</span>
            <span>Technologies</span>
          </div>

          {/* Rows */}
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              id={`skill-row-${skill.num}`}
              className={`skills-row animate-slide-up delay-${index + 2}`}
              style={{ opacity: isVisible ? 1 : 0 }}
            >
              <span className="skills-row__num">{skill.num}</span>
              <span className="skills-row__title">{skill.title}</span>
              <div className="skills-row__tools">
                {skill.tools.map((tool) => (
                  <span key={tool} className="skill-tool-pill">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="section-divider" style={{ marginTop: '3rem' }} />
    </section>
  );
};
