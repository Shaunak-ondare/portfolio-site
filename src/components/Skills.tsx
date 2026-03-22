

const skills = [
  "AWS (IAM, Lambda, EC2, S3)", "Python & Boto3", "Docker & Kubernetes", 
  "CI/CD (GitHub Actions, Jenkins)", "Terraform", "Linux / Bash Scripting", 
  "Maven", "DevSecOps (OWASP)"
];

export const Skills = () => {
  return (
    <section id="skills" style={{ padding: 'var(--section-padding)', backgroundColor: 'var(--color-card-bg)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 className="section-title">Core Skills</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              I specialize in bridging the gap between development and operations. My expertise lies in automating repetitive tasks, securing deployment pipelines, and writing robust scripts to manage multi-account cloud environments safely and efficiently.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {skills.map(skill => (
              <div key={skill} style={{
                padding: '1rem 1.5rem',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
                fontSize: '0.95rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'border-color 0.2s ease, transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-text)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
