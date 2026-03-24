import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top-line" />
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">AA</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Associate Software Engineer · MERN Stack · Flutter
            </p>
            <p className="footer-location">📍 Lahore, Pakistan</p>
          </div>

          <div className="footer-nav">
            <p className="footer-nav-title">Navigation</p>
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((id) => (
              <Link
                key={id}
                to={id}
                smooth
                duration={600}
                offset={-80}
                className="footer-nav-link"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </div>

          <div className="footer-contact">
            <p className="footer-nav-title">Connect</p>
            <a href="mailto:muhammadahtishamali786@gmail.com" className="footer-contact-link">
              <FiMail /> muhammadahtishamali786@gmail.com
            </a>
            <a href="tel:+923006474292" className="footer-contact-link">
              📱 +92 300 6474292
            </a>
            <div className="footer-socials">
              <a
                href="https://github.com/MAhtishamAli"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ahtishamali786/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:muhammadahtishamali786@gmail.com"
                className="footer-social-btn"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Ahtisham Ali. Built with{' '}
            <FiHeart style={{ color: '#ef4444', verticalAlign: 'middle' }} />{' '}
            using React & Vite
          </p>
          <Link to="home" smooth duration={800} className="footer-back-top" id="footer-back-top-btn">
            <FiArrowUp /> Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
