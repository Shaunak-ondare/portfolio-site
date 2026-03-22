import { Terminal, Code, Cloud, RefreshCw, Shield, Server, Edit3 } from 'lucide-react';

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
  return (
    <section id="skills" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--color-card-bg)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <h2 className="section-title">Core Skills &amp; Expertise</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem', marginTop: '2rem' }}>
          {skillCategories.map(category => (
            <div key={category.title} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '2.5rem 2rem',
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: '2px',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                {category.icon}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: "'Playfair Display', serif", letterSpacing: '0.02em', margin: 0 }}>
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
