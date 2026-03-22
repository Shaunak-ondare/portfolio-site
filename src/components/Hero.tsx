
import { ParticleBackground } from './ParticleBackground';
import { ChevronDown } from 'lucide-react';

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
          fontSize: 'clamp(3rem, 8vw, 5rem)', 
          fontWeight: 800, 
          marginBottom: '1rem', 
          letterSpacing: '-0.04em',
          lineHeight: 1.1
        }}>
          Hi, I am <span className="text-gradient">Shaun</span>.
        </h1>
        
        <h2 className="delay-1 animate-fade-in" style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
          fontWeight: 400, 
          color: 'var(--color-text-muted)', 
          marginBottom: '1.5rem' 
        }}>
          DevOps Engineer
        </h2>
        
        <p className="delay-2 animate-fade-in" style={{ 
          maxWidth: '600px', 
          margin: '0 auto 3rem auto', 
          color: 'var(--color-text-muted)', 
          fontSize: '1.2rem',
          lineHeight: 1.8
        }}>
          I build scalable infrastructure, automate release pipelines, and optimize multi-account cloud environments.
        </p>

        <a href="#projects" className="delay-3 animate-fade-in" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            border: '1px solid var(--color-border)', 
            padding: '1rem 2rem', 
            borderRadius: '2px',
            backgroundColor: 'rgba(5,5,5,0.8)',
            backdropFilter: 'blur(8px)',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-text)';
            e.currentTarget.style.color = 'var(--color-bg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(5,5,5,0.8)';
            e.currentTarget.style.color = 'var(--color-text)';
          }}
          >
          View My Work <ChevronDown size={18} />
        </a>
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
