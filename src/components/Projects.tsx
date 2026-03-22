
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Automated IAM Deletion Engine',
    description: 'Serverless Lambda function written in Python that assumes IAM roles across multiple AWS accounts to systematically delete inactive user access keys, login profiles, and users safely.',
    tags: ['AWS Lambda', 'Python', 'IAM', 'Boto3'],
    links: { github: '#', live: '#' }
  },
  {
    title: 'CI/CD Pipeline Security Integration',
    description: 'Developed and debugged GitHub Actions workflows integrating OWASP Dependency Check. Resolved Java Runtime incompatibilities for maven plugins to enforce strict security gates before deployment.',
    tags: ['CI/CD', 'GitHub Actions', 'Maven', 'OWASP'],
    links: { github: '#' }
  },
  {
    title: 'Multi-Environment Infrastructure Automation',
    description: 'Designed declarative infrastructure as code modules to provision consistent environments across dev, staging, and production using custom modules.',
    tags: ['Terraform', 'AWS', 'Docker', 'Bash'],
    links: { live: '#' }
  }
];

export const Projects = () => {
  return (
    <section id="projects" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <h2 className="section-title">Selected Works</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: 'var(--color-card-bg)',
              border: '1px solid var(--color-border)',
              padding: '2.5rem 2rem',
              borderRadius: '2px',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'var(--color-text-muted)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--color-border)';
            }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                {project.title}
              </h3>
              
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.7 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '100px',
                    color: 'var(--color-text-muted)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                {project.links.github && (
                  <a href={project.links.github} aria-label="GitHub" style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', opacity: 0.7, transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
                  >
                    <Github size={18} /> Code
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} aria-label="Live Demo" style={{ color: 'var(--color-text)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', opacity: 0.7, transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
                  >
                    <ExternalLink size={18} /> Visit
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
