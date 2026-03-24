import './About.css';
import { FiMapPin, FiMail, FiPhone, FiDownload, FiBriefcase, FiBook, FiAward } from 'react-icons/fi';

const stats = [
  { value: '1+', label: 'Years Experience', icon: <FiBriefcase /> },
  { value: '7+', label: 'Projects Built', icon: <FiBook /> },
  { value: '3.07', label: 'CGPA', icon: <FiAward /> },
  { value: '2', label: 'Core Stacks', icon: <FiBriefcase /> },
];

const quickFacts = [
  { icon: <FiMapPin />, label: 'Location', value: 'Lahore, Punjab, Pakistan' },
  { icon: <FiMail />, label: 'Email', value: 'muhammadahtishamali786@gmail.com', href: 'mailto:muhammadahtishamali786@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+92 300 6474292', href: 'tel:+923006474292' },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-bg-glow" />
      <div className="container">
        <div className="about-grid">
          {/* Left: Info */}
          <div className="about-info">
            <div className="section-tag">✦ About Me</div>
            <h2 className="section-title">
              Building <span>Digital</span><br /> Experiences
            </h2>
            <p className="about-bio">
              I'm Ahtisham Ali, an <strong>Associate Software Engineer</strong> at <em>DevFamz LTD</em>,
              where I specialize in cross-platform mobile development using <strong>Flutter</strong> and
              full-stack web development with the <strong>MERN stack</strong>.
            </p>
            <p className="about-bio" style={{ marginTop: 12 }}>
              With over a year of hands-on experience, I'm passionate about writing clean,
              maintainable code and delivering scalable solutions. My engineering background from
              the <strong>University of Central Punjab</strong> built a solid foundation that I apply
              to every project.
            </p>

            {/* Quick Facts */}
            <div className="about-quick-facts">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="about-fact">
                  <span className="about-fact-icon">{fact.icon}</span>
                  <div>
                    <p className="about-fact-label">{fact.label}</p>
                    {fact.href ? (
                      <a href={fact.href} className="about-fact-value about-fact-link">{fact.value}</a>
                    ) : (
                      <p className="about-fact-value">{fact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              className="btn btn-primary"
              download
              id="about-resume-btn"
              style={{ width: 'fit-content' }}
            >
              <FiDownload /> Download Resume
            </a>
          </div>

          {/* Right: Stats + Certification */}
          <div className="about-right">
            {/* Stats Grid */}
            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat card">
                  <div className="about-stat-icon">{stat.icon}</div>
                  <p className="about-stat-value">{stat.value}</p>
                  <p className="about-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div className="about-edu card">
              <div className="about-edu-header">
                <div className="about-edu-badge">
                  <FiBook />
                </div>
                <div>
                  <p className="about-edu-title">BS Software Engineering</p>
                  <p className="about-edu-uni">University of Central Punjab</p>
                </div>
              </div>
              <div className="about-edu-details">
                <span className="about-edu-year">2021 – 2025</span>
                <span className="about-edu-cgpa">CGPA: 3.07</span>
              </div>
            </div>

            {/* IBM Certificate */}
            <div className="about-cert card">
              <div className="about-cert-badge">🏆</div>
              <div>
                <p className="about-cert-title">Introduction to Software Engineering</p>
                <p className="about-cert-issuer">IBM Certified · March 2026</p>
                <p className="about-cert-id">Credential ID: Z9AH9XSC33BQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
