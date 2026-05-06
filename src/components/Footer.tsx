

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p style={{ color: 'var(--color-hero-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Shaunak. Designed with love by Shaunak 🤎
        </p>
      </div>
    </footer>
  );
};
