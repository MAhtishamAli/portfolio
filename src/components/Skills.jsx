import { useState } from 'react';
import './Skills.css';

const categories = [
  {
    id: 'languages',
    label: 'Languages',
    emoji: '💬',
    skills: [
      { name: 'JavaScript', level: 90, color: '#f7df1e' },
      { name: 'TypeScript', level: 78, color: '#3178c6' },
      { name: 'Dart', level: 85, color: '#0175c2' },
      { name: 'Python', level: 65, color: '#3572a5' },
      { name: 'Java', level: 70, color: '#b07219' },
      { name: 'C++', level: 60, color: '#f34b7d' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    emoji: '⚡',
    skills: [
      { name: 'React.js', level: 88, color: '#61dafb' },
      { name: 'Node.js', level: 85, color: '#68a063' },
      { name: 'Express.js', level: 82, color: '#ffffff' },
      { name: 'Flutter', level: 87, color: '#54c5f8' },
      { name: 'NestJS', level: 70, color: '#e0234e' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    emoji: '🛠️',
    skills: [
      { name: 'MongoDB', level: 82, color: '#47a248' },
      { name: 'Git / GitHub', level: 88, color: '#f05032' },
      { name: 'Electron.js', level: 72, color: '#47848f' },
      { name: 'Swift', level: 65, color: '#f05138' },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const activeCategory = categories.find((c) => c.id === activeTab);

  return (
    <section className="section skills-section" id="skills">
      <div className="skills-bg-glow" />
      <div className="container">
        <div className="skills-header">
          <div className="section-tag">✦ Tech Stack</div>
          <h2 className="section-title">
            Skills &amp; <span>Technologies</span>
          </h2>
          <p className="section-subtitle">
            A curated set of tools and technologies I've mastered and use daily to craft
            production-ready applications.
          </p>
        </div>

        {/* Tabs */}
        <div className="skills-tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`skills-tab ${activeTab === cat.id ? 'skills-tab--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              id={`skills-tab-${cat.id}`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid" key={activeTab}>
          {activeCategory.skills.map((skill, i) => (
            <div
              className="skill-card card"
              key={skill.name}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="skill-card-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                    '--bar-color': skill.color,
                  }}
                />
              </div>
              <div className="skill-color-dot" style={{ background: skill.color }} />
            </div>
          ))}
        </div>

        {/* Stack Overview */}
        <div className="skills-overview">
          <div className="skills-overview-card card">
            <div className="skills-overview-icon">📱</div>
            <h3>Mobile Development</h3>
            <p>Cross-platform apps with Flutter & Dart, matching native performance on both iOS and Android.</p>
            <div className="skills-overview-tags">
              {['Flutter', 'Dart', 'Swift', 'Mobile UI', 'State Mgmt'].map(t => (
                <span key={t} className="skills-overview-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="skills-overview-card card">
            <div className="skills-overview-icon">🌐</div>
            <h3>Full-Stack Web</h3>
            <p>End-to-end web solutions with the MERN stack — from React UIs to scalable Node.js APIs.</p>
            <div className="skills-overview-tags">
              {['React', 'Node.js', 'MongoDB', 'Express', 'REST API'].map(t => (
                <span key={t} className="skills-overview-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="skills-overview-card card">
            <div className="skills-overview-icon">🖥️</div>
            <h3>Desktop Apps</h3>
            <p>Native macOS apps with Swift and cross-platform desktop solutions using Electron.js.</p>
            <div className="skills-overview-tags">
              {['Swift', 'Electron.js', 'macOS', 'Git'].map(t => (
                <span key={t} className="skills-overview-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
