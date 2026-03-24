import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowDown, FiCode, FiSmartphone } from 'react-icons/fi';
import { SiFlutter, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';
import './Hero.css';

const techBadges = [
  { icon: <SiReact />, label: 'React.js', color: '#61dafb' },
  { icon: <SiNodedotjs />, label: 'Node.js', color: '#68a063' },
  { icon: <SiFlutter />, label: 'Flutter', color: '#54c5f8' },
  { icon: <SiMongodb />, label: 'MongoDB', color: '#47a248' },
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();

        particles.forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-glow hero-glow--purple" />
      <div className="hero-glow hero-glow--cyan" />

      <div className="container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status">
            <span className="glow-dot" />
            <span>Available for opportunities</span>
          </div>

          {/* Greeting */}
          <p className="hero-greeting">
            <span className="hero-greeting-icon">👋</span> Hello, I'm
          </p>

          {/* Name */}
          <h1 className="hero-name">
            Ahtisham<br />
            <span className="gradient-text">Ali</span>
          </h1>

          {/* Role */}
          <div className="hero-role">
            <FiCode className="hero-role-icon" />
            <span>Associate Software Engineer</span>
            <span className="hero-role-sep">@</span>
            <span className="hero-role-company">DevFamz LTD</span>
          </div>

          {/* Description */}
          <p className="hero-description">
            Crafting scalable, high-performance applications with the <strong>MERN Stack</strong> and
            cross-platform mobile experiences with <strong>Flutter</strong>. Turning complex problems
            into elegant digital solutions.
          </p>

          {/* Tech Badges */}
          <div className="hero-badges">
            {techBadges.map((badge) => (
              <div key={badge.label} className="hero-badge">
                <span style={{ color: badge.color }}>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-ctas">
            <Link
              to="projects"
              smooth
              duration={600}
              offset={-80}
              className="btn btn-primary"
              id="hero-view-work-btn"
            >
              View My Work
              <FiArrowDown />
            </Link>
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="btn btn-outline"
              id="hero-contact-btn"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href="https://github.com/MAhtishamAli"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
              id="hero-github-link"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ahtishamali786/"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
              id="hero-linkedin-link"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:muhammadahtishamali786@gmail.com"
              className="hero-social-link"
              aria-label="Email"
              id="hero-email-link"
            >
              <FiMail />
            </a>
            <a
              href="tel:+923006474292"
              className="hero-social-link"
              aria-label="Phone"
              id="hero-phone-link"
            >
              <FiPhone />
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="hero-avatar-ring hero-avatar-ring--outer">
            <div className="hero-orbit-icon" style={{ '--angle': '0deg' }}>
              <SiReact style={{ color: '#61dafb' }} />
            </div>
            <div className="hero-orbit-icon" style={{ '--angle': '90deg' }}>
              <SiNodedotjs style={{ color: '#68a063' }} />
            </div>
            <div className="hero-orbit-icon" style={{ '--angle': '180deg' }}>
              <SiFlutter style={{ color: '#54c5f8' }} />
            </div>
            <div className="hero-orbit-icon" style={{ '--angle': '270deg' }}>
              <SiMongodb style={{ color: '#47a248' }} />
            </div>
          </div>
          <div className="hero-avatar-ring hero-avatar-ring--inner" />
          <div className="hero-avatar">
            <img
              src="/profile.png"
              alt="Ahtisham Ali - Software Engineer"
              className="hero-avatar-photo"
            />
          </div>
          <div className="hero-card hero-card--top">
            <span className="hero-card-icon">🚀</span>
            <div>
              <p className="hero-card-title">1+ Years</p>
              <p className="hero-card-sub">Experience</p>
            </div>
          </div>
          <div className="hero-card hero-card--bottom">
            <span className="hero-card-icon">💼</span>
            <div>
              <p className="hero-card-title">7+ Projects</p>
              <p className="hero-card-sub">Delivered</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <div className="hero-scroll-arrow">
          <FiArrowDown />
        </div>
      </div>
    </section>
  );
}
