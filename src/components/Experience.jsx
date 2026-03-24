import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Associate Software Engineer',
    company: 'DevFamz LTD',
    location: 'Lahore, Pakistan',
    period: 'Jan 2026 – Present',
    type: 'Full-time',
    current: true,
    description:
      'Developing cross-platform mobile applications using Flutter and full-stack web solutions using the MERN stack. Collaborating with multinational teams and maintaining high code quality standards.',
    highlights: [
      'Building cross-platform mobile apps with Flutter & Dart',
      'Developing full-stack web solutions with MERN stack',
      'Associated with Devicoon for mobile app development projects',
      'Implementing CI/CD pipelines and AWS cloud deployments',
      'Working in agile teams with international clients',
    ],
    techs: ['Flutter', 'React.js', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    color: '#6366f1',
  },
];

const timeline = [
  { year: '2021', label: 'Started BS Software Engineering at UCP' },
  { year: '2023', label: 'First internship & real-world project delivery' },
  { year: '2024', label: 'Mastered MERN Stack & Flutter development' },
  { year: '2025', label: 'Graduated with CGPA 3.07 · IBM Certified' },
  { year: '2026', label: 'Joined DevFamz LTD as Associate Software Engineer' },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="experience-bg" />
      <div className="container">
        <div className="experience-header">
          <div className="section-tag">✦ Experience</div>
          <h2 className="section-title">
            My <span>Journey</span>
          </h2>
          <p className="section-subtitle">
            Where I've worked and the impact I've made along the way.
          </p>
        </div>

        <div className="experience-layout">
          {/* Work Cards */}
          <div className="experience-cards">
            {experiences.map((exp) => (
              <div key={exp.id} className="exp-card card">
                <div className="exp-card-header">
                  <div className="exp-company-logo" style={{ background: `${exp.color}20`, borderColor: `${exp.color}40` }}>
                    <span style={{ color: exp.color, fontWeight: 900, fontSize: 22, fontFamily: 'Fira Code, monospace' }}>
                      DF
                    </span>
                  </div>
                  <div className="exp-card-meta">
                    <div className="exp-role-row">
                      <h3 className="exp-role">{exp.role}</h3>
                      {exp.current && <span className="exp-current-badge">Current</span>}
                    </div>
                    <p className="exp-company">{exp.company}</p>
                    <div className="exp-details">
                      <span>📍 {exp.location}</span>
                      <span>📅 {exp.period}</span>
                      <span>💼 {exp.type}</span>
                    </div>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                <ul className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="exp-bullet" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="exp-techs">
                  {exp.techs.map((t) => (
                    <span key={t} className="exp-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="experience-timeline">
            <h3 className="timeline-title">Career Timeline</h3>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className={`timeline-item ${i === timeline.length - 1 ? 'timeline-item--active' : ''}`}>
                  <div className="timeline-dot">
                    {i === timeline.length - 1 && <span className="glow-dot" />}
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <p className="timeline-label">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
