import { Download } from 'lucide-react';
import { useMemo, useState, useEffect } from 'react';

export const Hero = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = [
    "Hi", "Hello", "Namaste", "Hola", "Bonjour", 
    "Ciao", "Konnichiwa", "Salaam", "Hej", "Privet"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [greetings.length]);

  const mapClusters = [
    { className: 'hero-map__cluster hero-map__cluster--north', dots: 54 },
    { className: 'hero-map__cluster hero-map__cluster--west', dots: 42 },
    { className: 'hero-map__cluster hero-map__cluster--center', dots: 158 },
    { className: 'hero-map__cluster hero-map__cluster--south', dots: 46 },
    { className: 'hero-map__cluster hero-map__cluster--east', dots: 52 },
  ];

  // Generate stable random indices for blinking dots
  const blinkingDots = useMemo(() => {
    return mapClusters.map(cluster => {
      const indices = new Set<number>();
      const count = Math.floor(cluster.dots * 0.25); // 25% of dots will blink
      while(indices.size < count) {
        indices.add(Math.floor(Math.random() * cluster.dots));
      }
      return Array.from(indices);
    });
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-shell">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="hero-eyebrow animate-fade-in">DevOps & Cloud Infrastructure Engineer</p>

            <h1 className="hero-title delay-1 animate-fade-in">
              <span 
                key={greetingIndex}
                className="animate-word-swap"
                style={{ 
                  display: 'inline-block', 
                  minWidth: '140px',
                  color: 'var(--color-hero-dot-accent)'
                }}
              >
                {greetings[greetingIndex]},
              </span>
              <br />
              I am Shaunak, a DevOps Engineer from Gadchiroli, Maharashtra.
            </h1>

            <p className="hero-description delay-2 animate-fade-in">
              I build resilient AWS infrastructure, streamlined container workflows, and automated CI/CD pipelines that help teams ship reliably at scale.
            </p>

            <div className="hero-actions delay-3 animate-fade-in">
              <a href="#projects" className="hero-button hero-button--primary">
                Explore Projects
              </a>

              <a href="/Shaunak_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-button hero-button--secondary">
                <Download size={18} />
                View Resume
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-map">
              <div className="hero-map__halo hero-map__halo--one" />
              <div className="hero-map__halo hero-map__halo--two" />

              {mapClusters.map((cluster, clusterIndex) => (
                <div key={cluster.className} className={cluster.className}>
                  {Array.from({ length: cluster.dots }).map((_, index) => {
                    const isBlinking = blinkingDots[clusterIndex].includes(index);
                    const blinkDuration = isBlinking ? `${(1.8 + Math.random() * 3).toFixed(2)}s` : undefined;
                    const blinkDelay = isBlinking ? `${(Math.random() * 4).toFixed(2)}s` : undefined;
                    
                    return (
                      <span
                        key={`${cluster.className}-${index}`}
                        className={`hero-map__dot ${isBlinking ? 'hero-map__dot--accent' : ''}`}
                        style={isBlinking ? {
                          '--blink-duration': blinkDuration,
                          '--blink-delay': blinkDelay,
                        } as React.CSSProperties : undefined}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
