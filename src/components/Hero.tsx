import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';

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

  return (
    <section id="hero" className="hero-section">
      <div className="hero-shell">
        <div className="container hero-layout">
          <div className="hero-copy">
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
        </div>
      </div>
    </section>
  );
};
