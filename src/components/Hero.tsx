import { ParticleBackground } from './ParticleBackground';
import { Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" style={{ 
      position: 'relative', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      overflow: 'hidden',
      padding: '0 2rem'
    }}>
      <ParticleBackground />
      
      <div className="container animate-fade-in" style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
          fontWeight: 600, 
          marginBottom: '0.5rem', 
          letterSpacing: '-0.01em',
          lineHeight: 1.2
        }}>
          Hi, I am Shaunak.
        </h1>
        
        <h2 className="delay-1 animate-fade-in" style={{ 
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
          fontWeight: 300, 
          color: 'var(--color-text-muted)', 
          marginBottom: '2rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase'
        }}>
          DevOps Engineer
        </h2>
        
        <p className="delay-2 animate-fade-in" style={{ 
          maxWidth: '500px', 
          margin: '0 auto 3.5rem auto', 
          color: 'var(--color-text-muted)', 
          fontSize: '0.95rem',
          lineHeight: 1.8,
          fontWeight: 300
        }}>
          I design and deploy containerized applications with Docker and AWS, and build automated CI/CD pipelines for reliable, scalable systems.
        </p>

        <div className="delay-3 animate-fade-in" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              border: '1px solid rgba(0, 240, 255, 0.3)', 
              padding: '0.8rem 1.8rem', 
              borderRadius: '12px',
              backgroundColor: 'rgba(0, 240, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 30px rgba(0, 240, 255, 0.15)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              color: '#ffffff',
              textShadow: '0 0 8px rgba(0, 240, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 240, 255, 0.4), inset 0 0 15px rgba(0, 240, 255, 0.2)';
              e.currentTarget.style.textShadow = '0 0 12px rgba(255, 255, 255, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 240, 255, 0.15)';
              e.currentTarget.style.textShadow = '0 0 8px rgba(0, 240, 255, 0.3)';
            }}
            >
            View My Work
          </a>

          <a href="/Shaunak_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              border: '1px solid rgba(0, 240, 255, 0.3)', 
              padding: '0.8rem 1.8rem', 
              borderRadius: '12px',
              backgroundColor: 'rgba(0, 240, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 30px rgba(0, 240, 255, 0.15)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              color: '#ffffff',
              textShadow: '0 0 8px rgba(0, 240, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 240, 255, 0.4), inset 0 0 15px rgba(0, 240, 255, 0.2)';
              e.currentTarget.style.textShadow = '0 0 12px rgba(255, 255, 255, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 240, 255, 0.15)';
              e.currentTarget.style.textShadow = '0 0 8px rgba(0, 240, 255, 0.3)';
            }}
            >
            <Download size={16} />
            View Resume
          </a>
        </div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        opacity: 0.5,
        animation: 'fadeIn 2s ease-out forwards 1.5s'
      }}>
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, var(--color-text) 0%, transparent 100%)',
          margin: '0 auto'
        }} />
      </div>
    </section>
  );
};
