import { ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" style={{ paddingTop: '8rem', paddingBottom: '12rem', position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        


        {/* Top Metadata Row */}
        <div style={{ 
          gridColumn: '1 / 9', 
          padding: '0 2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          opacity: 0.7,
          marginBottom: '8rem'
        }}>
          <div>.say hello</div>
        </div>

        {/* Giant Typography */}
        <div style={{ 
          gridColumn: '1 / 9', 
          padding: '0 2rem',
          marginBottom: '6rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            fontWeight: 500,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            color: 'var(--color-text)',
            maxWidth: '100%',
            margin: 0
          }}>
            i'm open for freelance projects, feel free to email me to see how can we collaborate
          </h2>
        </div>

        {/* Contact Button */}
        <div style={{ 
          gridColumn: '6 / 9',
          paddingRight: '2rem',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <a 
            href="mailto:shaunakondare999@gmail.com" 
            className="contact-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '1.25rem 2rem',
              border: '1px solid var(--color-border)',
              backgroundColor: 'transparent',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--color-text)',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
              width: '100%',
              maxWidth: '300px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            contact me 
            <div className="contact-arrow" style={{ transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }}>
              <ArrowRight size={16} />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
