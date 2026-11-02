import type { Metadata } from 'next';
import { site, experiences } from '@/data/site';

export const metadata: Metadata = {
  title: 'About & Engineering Dossier',
  description: `Biography, technical capabilities, certifications, and background of ${site.fullName}, AI Engineer.`,
};

export default function AboutPage() {
  return (
    <article className="about-page">
      <header className="about-hero">
        <p className="hero__eyebrow" data-reveal="fade" data-intro suppressHydrationWarning>
          ENGINEERING PROFILE · AI ENGINEER
        </p>
        <h1 className="hero__title" data-split="lines" data-intro suppressHydrationWarning>
          ABOUT &amp; DOSSIER
        </h1>
      </header>

      <section className="about-content" aria-label="About Biography and Method">
        <div className="about-text-col">
          <blockquote className="philosophy__quote" data-split="lines" suppressHydrationWarning>
            &ldquo;Engineering AI systems requires connecting intelligent model capabilities with
            clean architecture, robust data pipelines, and dependable software execution.&rdquo;
          </blockquote>

          {site.bio.map((para, i) => (
            <p key={i} className="philosophy__text" data-reveal="up" data-delay={`${i * 0.1}`} suppressHydrationWarning>
              {para}
            </p>
          ))}

          <div className="about-certifications-block" data-reveal="up" data-delay="0.2" suppressHydrationWarning>
            <h2 className="about-block__title">CERTIFICATIONS</h2>
            <div className="about-cert-grid">
              {site.certifications.map((cert) => (
                <div key={cert.title} className="about-cert-card">
                  <span className="cert-badge">VERIFIED</span>
                  <strong className="about-cert-name">{cert.title}</strong>
                  <span className="about-cert-issuer">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-education-block" data-reveal="up" data-delay="0.25" suppressHydrationWarning>
            <h2 className="about-block__title">EDUCATION</h2>
            <div className="about-edu-card">
              <strong className="about-edu-name">{site.education.institution}</strong>
              <div className="about-edu-degree">{site.education.degree}</div>
              <div className="about-edu-meta">
                <span>{site.education.period}</span> · <span>{site.education.gpa}</span>
              </div>
              <div className="about-edu-coursework">
                <strong>Relevant Coursework:</strong> {site.education.coursework.join(', ')}
              </div>
            </div>
          </div>
        </div>

        <div className="about-side-col">
          <div className="about-block" data-reveal="up" suppressHydrationWarning>
            <h2 className="about-block__title">CORE SPECIALIZATIONS</h2>
            <ul className="about-block__list">
              {site.capabilities.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}</strong>: {c.desc}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-block" data-reveal="up" data-delay="0.1" suppressHydrationWarning>
            <h2 className="about-block__title">TECHNICAL SKILLS</h2>
            <div className="about-skills-breakdown">
              {site.skills.map((cat) => (
                <div key={cat.category} className="about-skill-group">
                  <span className="about-skill-label">{cat.category}:</span>
                  <span className="about-skill-items">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-block" data-reveal="up" data-delay="0.2" suppressHydrationWarning>
            <h2 className="about-block__title">COMMUNICATIONS &amp; CHANNELS</h2>
            <ul className="about-block__list">
              <li>
                <strong>Direct Phone:</strong>{' '}
                <a href={`tel:${site.phoneCall}`} className="social-link">
                  {site.phone}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${site.email}`} className="social-link">
                  {site.email}
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/codefixxx" target="_blank" rel="noopener noreferrer" className="social-link">
                  github.com/codefixxx
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a href="https://www.linkedin.com/in/ayush-mishra-2072961a3/" target="_blank" rel="noopener noreferrer" className="social-link">
                  linkedin.com/in/ayush-mishra
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience Ledger */}
      <section className="about-experience" aria-label="Appointments & Experience">
        <div className="section-header">
          <h2 className="section-label" data-reveal="up" suppressHydrationWarning>
            EXPERIENCE &amp; PRODUCTION APPOINTMENTS
          </h2>
          <span className="section-meta" data-reveal="up" data-delay="0.1" suppressHydrationWarning>
            {experiences.length} ROLES · PROVEN PRODUCTION DELIVERABLES
          </span>
        </div>

        <div className="experience-ledger">
          {experiences.map((exp, idx) => (
            <div key={`${exp.organization}-${exp.role}`} className="experience-row" data-reveal="up" data-delay={`${idx * 0.08}`} suppressHydrationWarning>
              <div className="exp-col exp-col--period">
                <span className="exp-period">{exp.period}</span>
                <span className="exp-location">{exp.location}</span>
              </div>

              <div className="exp-col exp-col--main">
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-org">{exp.organization}</p>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="exp-bullet-item">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exp-col exp-col--tech">
                <span className="exp-focus-label">DOMAIN</span>
                <span className="exp-focus">{exp.focus}</span>
                <div className="exp-tags">
                  {exp.technologies.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
