import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    year: '2023',
    type: 'Cloud Architecture',
    title: 'iam engine',
    description: 'Serverless Lambda function written in Python that assumes IAM roles across multiple AWS accounts to systematically delete inactive user access keys, login profiles, and users safely.',
    color: '#FF5C00', // vibrant orange
    textColor: '#000000', // pure black text
    link: '#',
  },
  {
    year: '2023',
    type: 'DevSecOps',
    title: 'pipeline sec',
    description: 'Developed and debugged GitHub Actions workflows integrating OWASP Dependency Check. Resolved Java Runtime incompatibilities for maven plugins to enforce strict security gates before deployment.',
    color: '#fde047', // vibrant yellow
    textColor: '#000000', // black text for yellow bg
    link: 'https://github.com/Shaunak-ondare/devsecops-pipeline',
  },
  {
    year: '2022',
    type: 'Infrastructure',
    title: 'infra auto',
    description: 'Designed declarative infrastructure as code modules to provision consistent environments across dev, staging, and production using custom modules.',
    color: '#333333', // dark grey
    link: '#',
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} style={{ position: 'relative', zIndex: 1, paddingBottom: '8rem' }}>
      <div className="container" style={{ display: 'block' }}>
        {projects.map((project, index) => (
          <div 
            key={project.title}
            style={{ 
              backgroundColor: project.color,
              color: project.textColor || '#ffffff',
              padding: '2rem 2rem 6rem',
              marginBottom: '1rem',
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.8s ease ${index * 0.1}s`,
              display: 'flex',
              flexDirection: 'column',
              position: 'sticky',
              top: `calc(5rem + ${index * 1.5}rem)`,
              overflow: 'hidden',
              boxShadow: '0 -10px 30px rgba(0,0,0,0.5)',
              borderRadius: '24px'
            }}
          >
            {/* Top Bar Metadata */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              borderBottom: `1px solid ${project.textColor ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)'}`,
              paddingBottom: '1rem',
              marginBottom: '3rem',
              opacity: 0.8
            }}>
              <span>{project.year}</span>
              <span>{project.type}</span>
            </div>

            {/* Title & Arrow */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h3 style={{ 
                fontSize: 'clamp(3rem, 7vw, 6rem)', 
                fontWeight: 500, 
                letterSpacing: '-0.04em',
                lineHeight: 1,
                margin: 0
              }}>
                {project.title}
              </h3>
              
              <a href={project.link} target="_blank" rel="noreferrer" style={{ 
                color: 'inherit',
                opacity: 0.8,
                transition: 'opacity 0.2s',
                marginTop: '1rem'
              }}>
                <ArrowRight size={56} strokeWidth={2.5} />
              </a>
            </div>

            {/* Description placeholder for where the image would go */}
            <div style={{
              marginTop: '4rem',
              maxWidth: '600px',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              opacity: 0.8,
              lineHeight: 1.6
            }}>
              {project.description}
            </div>
            
            {/* Mockup Placeholder */}
            <div style={{
              marginTop: '4rem',
              width: '100%',
              height: '400px',
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderRadius: '1rem 1rem 0 0',
              border: `1px solid ${project.textColor ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'}`,
              borderBottom: 'none'
            }}></div>
          </div>
        ))}
      </div>
    </section>
  );
};
