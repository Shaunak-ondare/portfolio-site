

export const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0', backgroundColor: 'var(--color-hero-bg)', borderTop: '1px solid rgba(19, 32, 55, 0.12)', textAlign: 'center' }}>
      <div className="container">
        <p style={{ color: 'var(--color-hero-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Shaunak. Designed with love by Shaunak 🤎
        </p>
      </div>
    </footer>
  );
};
