import { useState } from 'react';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'AlmmaGPT',
    description:
      'An AI-powered conversational assistant built at DevFamz LTD. AlmmaGPT delivers intelligent, context-aware responses with a sleek chat interface and enterprise-grade backend.',
    long: 'Developed as a flagship AI product at DevFamz LTD, AlmmaGPT integrates large language model APIs with a full-stack MERN architecture. Features include real-time streaming responses, conversation history, multi-user sessions, and a polished, responsive chat UI.',
    techs: ['React.js', 'Node.js', 'MongoDB', 'LLM API', 'REST API'],
    category: 'web',
    icon: '🤖',
    color: '#6366f1',
    featured: true,
    company: 'DevFamz LTD',
  },
  {
    id: 2,
    title: 'Halo Aviso',
    description:
      'A cross-platform desktop notification and advisory app built at DevFamz LTD using Swift (macOS) and Electron.js (Windows/Linux). Delivers smart alerts and reminders.',
    long: 'Halo Aviso is a multi-platform desktop application developed at DevFamz LTD. The macOS version is built with Swift for native performance, while the Windows/Linux version leverages Electron.js. It delivers real-time push notifications, smart scheduling, and a unified advisory dashboard for enterprise users.',
    techs: ['Swift', 'Electron.js', 'JavaScript', 'macOS', 'Desktop'],
    category: 'desktop',
    icon: '🔔',
    color: '#f59e0b',
    featured: true,
    company: 'DevFamz LTD',
  },
  {
    id: 4,
    title: 'Devfamz',
    description:
      'A full-featured technology company website for DevFamz LTD. Showcases services, team, and portfolio with modern UI/UX and interactive elements.',
    long: 'Built with React and deployed on Vercel, this project demonstrates advanced frontend architecture with dynamic content, smooth animations, and a fully responsive design tailored for a multinational tech company.',
    techs: ['JavaScript', 'React', 'CSS3', 'Vercel'],
    category: 'web',
    demo: 'https://devfamz-gules.vercel.app',
    github: 'https://github.com/MAhtishamAli/Devfamz',
    icon: '🌐',
    color: '#06b6d4',
    featured: false,
    company: 'DevFamz LTD',
  },
  {
    id: 5,
    title: 'SnapVault',
    description:
      'A secure and fast image storage and management web application. Users can upload, organize, and manage images securely in the cloud.',
    long: 'Implements secure authentication, real-time uploads, and cloud storage sync using JavaScript and modern web technologies.',
    techs: ['JavaScript', 'Node.js', 'Cloud Storage', 'REST API'],
    category: 'web',
    demo: 'https://snapvault-pi.vercel.app',
    github: 'https://github.com/MAhtishamAli/snapvault',
    icon: '📸',
    color: '#06b6d4',
    featured: true,
  },
  {
    id: 6,
    title: 'OccasionEase',
    description:
      'A Flutter-based event booking and management application. Helps users discover, book, and manage events with an intuitive mobile interface.',
    long: 'Cross-platform mobile app built with Flutter/Dart, featuring event discovery, booking workflows, real-time updates, and a clean, modern UI across both iOS and Android.',
    techs: ['Flutter', 'Dart', 'Mobile UI', 'State Mgmt'],
    category: 'mobile',
    github: 'https://github.com/MAhtishamAli/occasioneaseuser',
    icon: '📅',
    color: '#54c5f8',
    featured: true,
  },
  {
    id: 7,
    title: 'Online Hotel Management System',
    description:
      'A comprehensive Java-based hotel management system with booking, room, and guest management features.',
    long: 'Implements object-oriented principles in Java to build a robust system for managing hotel operations including reservations, billing, and reporting.',
    techs: ['Java', 'OOP', 'JDBC', 'MySQL'],
    category: 'backend',
    github: 'https://github.com/MAhtishamAli/OnlineHotel-ManagementSystem',
    icon: '🏨',
    color: '#f59e0b',
    featured: false,
  },
  {
    id: 8,
    title: 'Task Tracker',
    description:
      'A clean and functional task management application to organize, prioritize, and track tasks with real-time updates.',
    long: 'A productivity-focused web app built with JavaScript featuring CRUD operations, local storage persistence, drag & drop reordering, and clean UI.',
    techs: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    category: 'web',
    github: 'https://github.com/MAhtishamAli/task-tracker-test',
    icon: '✅',
    color: '#10b981',
    featured: false,
  },
  {
    id: 9,
    title: 'Quiz Application System',
    description:
      'An interactive quiz application system with multiple categories, scoring, and timer functionality built in C++.',
    long: 'Demonstrates C++ fundamentals and OOP concepts through an engaging quiz system with file handling for data persistence.',
    techs: ['C++', 'OOP', 'File I/O'],
    category: 'backend',
    github: 'https://github.com/MAhtishamAli/Quiz-Application-System',
    icon: '🧠',
    color: '#e0234e',
    featured: false,
  },
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'backend', label: 'Backend' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expanded, setExpanded] = useState(null);

  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="section projects-section" id="projects">
      <div className="projects-bg" />
      <div className="container">
        <div className="projects-header">
          <div className="section-tag">✦ Portfolio</div>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of my best work — from web platforms to mobile apps and backend systems.
          </p>
        </div>

        {/* Filters */}
        <div className="projects-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`projects-filter-btn ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
              id={`filter-btn-${f.id}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`project-card card ${project.featured ? 'project-card--featured' : ''}`}
              style={{ animationDelay: `${i * 0.1}s`, '--accent': project.color }}
            >
              {/* Card Header */}
              <div className="project-card-top">
                <div
                  className="project-icon-wrap"
                  style={{ background: `${project.color}18`, border: `1px solid ${project.color}30` }}
                >
                  <span className="project-icon">{project.icon}</span>
                </div>
                <div className="project-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                      aria-label="Live Demo"
                      id={`project-demo-${project.id}`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                      aria-label="GitHub"
                      id={`project-github-${project.id}`}
                    >
                      <FiGithub />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-badges-row">
                {project.featured && (
                  <div className="project-featured-badge" style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}>
                    ⭐ Featured
                  </div>
                )}
                {project.company && (
                  <div className="project-company-badge">
                    🏢 {project.company}
                  </div>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">
                {expanded === project.id ? project.long : project.description}
              </p>

              <button
                className="project-read-more"
                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                id={`project-expand-${project.id}`}
              >
                {expanded === project.id ? 'Show less ↑' : 'Read more ↓'}
              </button>

              <div className="project-techs">
                {project.techs.map((t) => (
                  <span key={t} className="project-tech">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/MAhtishamAli"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            id="view-all-github-btn"
          >
            <FiGithub /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
