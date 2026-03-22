

export const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', backgroundColor: 'var(--color-bg)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
      <div className="container">
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Shaun. Designed in Black &amp; White.
        </p>
      </div>
    </footer>
  );
};
