import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    date: '01',
    title: 'Cloud & Infrastructure',
    description: 'AWS, Docker, Kubernetes, Terraform'
  },
  {
    date: '02',
    title: 'CI/CD Pipelines',
    description: 'GitHub Actions, Jenkins, Gitlab CI'
  },
  {
    date: '03',
    title: 'Programming',
    description: 'Python, JavaScript, Bash, Go'
  },
  {
    date: '04',
    title: 'Security & Monitoring',
    description: 'SonarQube, IAM, Datadog, Prometheus'
  }
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
    <section id="skills" ref={sectionRef} style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Top Metadata Row */}
        <div style={{ 
          gridColumn: '1 / 9', 
          display: 'flex', 
          alignItems: 'flex-start',
          padding: '0 2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          opacity: 0.7,
          marginBottom: '6rem'
        }}>
          <div>.core competencies</div>
        </div>

        {/* Content Wrapper */}
        <div style={{
          gridColumn: '1 / 9',
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          padding: '0 2rem'
        }}>
          
          {/* Left Column (Skills List) */}
          <div style={{ gridColumn: '1 / 6', paddingRight: '4rem' }}>
            {skills.map((skill, index) => (
              <div 
                key={skill.title} 
                className={`animate-fade-in delay-${(index % 3) + 1}`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  marginBottom: '5rem'
                }}
              >
                <h3 style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                  color: 'var(--color-text)'
                }}>
                  {skill.title}
                </h3>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  opacity: 0.6,
                  display: 'flex',
                  gap: '1rem'
                }}>
                  <span>{skill.date}</span>
                  <span>{skill.description}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Image Placeholder) */}
          <div style={{ gridColumn: '6 / 9' }}>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-border)',
              position: 'sticky',
              top: '8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.3)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem'
            }}>
<img 
                src="/portrait.jpg" 
                alt="Shaunak Portrait" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(20%) contrast(110%)',
                  transition: 'filter 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%) contrast(100%)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(20%) contrast(110%)'}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
