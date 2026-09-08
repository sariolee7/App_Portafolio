import '../Styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner section-container">
        <p className="footer-name">Eliza Muñoz</p>
        <div className="footer-links">
          <a href="https://www.behance.net/tu-usuario" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M22 7.15h-6.32V5.6H22v1.55zM9.5 12.5c.9-.46 1.4-1.24 1.4-2.4 0-2.13-1.6-3.1-3.9-3.1H0v14h7.3c2.5 0 4.5-1.1 4.5-3.6 0-1.5-.7-2.5-2.3-2.9zM3.1 9h3.4c1 0 1.9.3 1.9 1.4 0 1-.7 1.5-1.9 1.5H3.1V9zm3.8 8.9H3.1v-3.6h4c1.3 0 2 .6 2 1.8 0 1.2-.9 1.8-2.2 1.8zM18.7 9.3c-3 0-4.9 2.1-4.9 5.2 0 3.2 2 5.1 5 5.1 2.3 0 3.9-1 4.6-2.9h-2.5c-.3.7-1 1.1-2.1 1.1-1.4 0-2.3-.9-2.4-2.4h7.1c.1-3.4-1.4-6.1-4.8-6.1zm-2.3 4.2c.1-1.2 1-2.1 2.2-2.1 1.3 0 2.1.8 2.2 2.1h-4.4z" />
            </svg>
            <span>Behance</span>
          </a>
          <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}