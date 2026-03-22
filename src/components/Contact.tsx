import { Github, Linkedin, Twitter, Instagram, Download, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" style={{ padding: 'var(--section-padding)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="section-title">Get In Touch</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
          width: '100%',
          maxWidth: '800px'
        }}>
          <p style={{
            color: 'var(--color-text-muted)',
            textAlign: 'center',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            I am currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I'll definitely try my best to get back to you!
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/Shaunak_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              color: 'var(--color-text)',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
            }}>
              <Download size={20} />
              View / Download Resume
            </a>
            
            <a href="mailto:shaunakondare999@gmail.com" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              borderRadius: '12px',
              backgroundColor: 'var(--color-accent)',
              color: '#000',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 240, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 240, 255, 0.5)';
              e.currentTarget.style.backgroundColor = '#00f0ff'; // Brighten slightly on hover or keep same but scale
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 240, 255, 0.3)';
              e.currentTarget.style.backgroundColor = 'var(--color-accent)';
            }}>
              <Mail size={20} />
              Contact Me
            </a>
          </div>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            marginTop: '1rem'
          }}>
            {[
              { icon: <Twitter size={22} />, href: "https://x.com/vibeinloop", label: "X" },
              { icon: <Instagram size={22} />, href: "https://www.instagram.com/shaunak.ondare/", label: "Instagram" },
              { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/shaunak-ondare20/", label: "LinkedIn" },
              { icon: <Github size={22} />, href: "https://github.com/Shaunak-ondare", label: "GitHub" }
            ].map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: 'var(--color-text-muted)',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-accent)';
                e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 240, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-text-muted)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
              }}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
