import { Terminal, Code, Cloud, RefreshCw, Shield, Server, Edit3 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: "Programming & Development",
    icon: <Code size={20} />,
    skills: ["JavaScript", "HTML5", "CSS3", "Responsive Web Design", "UI/UX Basics", "Debugging & Troubleshooting"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={20} />,
    skills: ["Docker", "Docker Compose", "Containerization", "AWS EC2", "AWS IAM", "AWS Lambda", "AWS Organizations", "Boto3 (Python)", "Nginx"]
  },
  {
    title: "CI/CD & Automation",
    icon: <RefreshCw size={20} />,
    skills: ["GitHub Actions", "Self-hosted Runners", "CI/CD Pipeline Design", "Jenkins"]
  },
  {
    title: "Code Quality & Security",
    icon: <Shield size={20} />,
    skills: ["SonarQube", "Static Code Analysis"]
  },
  {
    title: "System & Deployment",
    icon: <Server size={20} />,
    skills: ["Docker Deployment", "Linux Server Setup", "Environment Config", "Port & Service Management"]
  },
  {
    title: "Operating Systems & Tools",
    icon: <Terminal size={20} />,
    skills: ["Linux (CLI)", "Windows", "Git & GitHub"]
  },
  {
    title: "Creative & Design",
    icon: <Edit3 size={20} />,
    skills: ["Photography", "Videography", "Graphic Design Basics"]
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ padding: 'var(--section-padding)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : ''}`} style={{ opacity: isVisible ? '' : 0 }}>Core Skills &amp; Expertise</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem', marginTop: '2rem' }}>
          {skillCategories.map((category, index) => (
            <div key={category.title} 
             className={isVisible ? `animate-fade-in delay-${(index % 3) + 1}` : ''}
             style={{
              opacity: isVisible ? undefined : 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '2.5rem 2rem',
              backgroundColor: 'rgba(10, 10, 10, 0.4)',
              backdropFilter: 'blur(12px) saturate(180%)',
              WebkitBackdropFilter: 'blur(12px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '2px',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
             }}
             onMouseEnter={(e) => {
               e.currentTarget.style.transform = 'translateY(-5px)';
               e.currentTarget.style.borderColor = 'var(--color-accent)';
               e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.08)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.transform = 'translateY(0)';
               e.currentTarget.style.borderColor = 'var(--color-border)';
               e.currentTarget.style.boxShadow = 'none';
             }}
             >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                {category.icon}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.02em', margin: 0 }}>
                  {category.title}
                </h3>
              </div>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-muted)', margin: 0, paddingLeft: '0.5rem' }}>
                {category.skills.map(skill => (
                  <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', lineHeight: 1.4 }}>
                    <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-text-muted)', borderRadius: '50%', flexShrink: 0 }}></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
