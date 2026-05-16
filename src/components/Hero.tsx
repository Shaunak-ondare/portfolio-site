import { useState, useEffect } from 'react';

const roles = [
  "building resilient\ninfrastructure",
  "building devsecops\npipelines",
  "deploying apps\nin a secure way",
  "automating cloud\nworkloads"
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsFading(false);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container" style={{ minHeight: '100vh', paddingTop: '10rem', position: 'relative' }}>
        
        {/* Top Metadata Row */}
        <div style={{ 
          gridColumn: '1 / 9', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 2rem',
          opacity: 0.7,
          marginBottom: '8rem'
        }} className="mono-text">
          <div className="tech-marker" style={{ textTransform: 'none' }}>// INITIATE_SESSION: SHAUNAK</div>
          <div className="tech-marker" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 1, textTransform: 'none' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00f0ff', boxShadow: '0 0 8px #00f0ff' }}></div>
            [SYS.READY: NEW_PROJECTS]
          </div>
        </div>

        {/* Huge Headline */}
        <div style={{ 
          gridColumn: '1 / 9', 
          padding: '0 2rem'
        }}>
          <h1 className="hero-title animate-fade-in glitch-hover" style={{
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            fontWeight: 500,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: 'var(--color-text)',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <span>a devops engineer</span>
            <span style={{ 
              opacity: isFading ? 0 : 1, 
              transform: isFading ? 'translateY(10px)' : 'translateY(0)',
              filter: isFading ? 'blur(4px)' : 'blur(0)',
              transition: 'opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease',
              whiteSpace: 'pre-line' 
            }}>
              {roles[roleIndex]}
            </span>
          </h1>
        </div>

      </div>
    </section>
  );
};
