import { useState, useRef } from 'react';
import {
  FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub,
  FiSend, FiCheckCircle, FiAlertCircle
} from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'muhammadahtishamali786@gmail.com',
    href: 'mailto:muhammadahtishamali786@gmail.com',
    color: '#6366f1',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+92 300 6474292',
    href: 'tel:+923006474292',
    color: '#06b6d4',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Lahore, Punjab, Pakistan',
    color: '#f59e0b',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahtishamali786',
    href: 'https://www.linkedin.com/in/ahtishamali786/',
    color: '#0077b5',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/MAhtishamAli',
    href: 'https://github.com/MAhtishamAli',
    color: '#e2e8f0',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission (replace with your EmailJS integration)
    setTimeout(() => {
      // You can integrate EmailJS here: 
      // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY')
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-bg" />
      <div className="container">
        <div className="contact-header">
          <div className="section-tag">✦ Contact</div>
          <h2 className="section-title">
            Let's <span>Work Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it. Send me a message and let's
            build something amazing together.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Info */}
          <div className="contact-info">
            <div className="contact-info-header">
              <h3>Get in Touch</h3>
              <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of amazing teams.</p>
            </div>

            <div className="contact-info-list">
              {contactInfo.map((info) => (
                <div key={info.label} className="contact-info-item">
                  <div
                    className="contact-info-icon"
                    style={{ background: `${info.color}15`, color: info.color, border: `1px solid ${info.color}25` }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="contact-info-label">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="contact-info-value contact-info-link" target="_blank" rel="noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Banner */}
            <div className="contact-availability">
              <span className="glow-dot" />
              <div>
                <p className="contact-avail-title">Currently Available</p>
                <p className="contact-avail-sub">Open for freelance projects & full-time opportunities</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap card">
            {status === 'success' ? (
              <div className="contact-success">
                <FiCheckCircle className="contact-success-icon" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form" id="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and how I can help..."
                    rows={6}
                    required
                    className="form-input form-textarea"
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error">
                    <FiAlertCircle /> Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary contact-submit-btn"
                  disabled={status === 'sending'}
                  id="contact-submit-btn"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="btn-spinner" /> Sending...
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
