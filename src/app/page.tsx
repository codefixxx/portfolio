import Link from 'next/link';
import { site, projects, experiences } from '@/data/site';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* ================= HERO ================= */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__meta-top" data-reveal="fade" data-intro suppressHydrationWarning>
          <span>ENGINEERING DOSSIER // 2026</span>
          <span>AI ENGINEER · INTELLIGENT SYSTEMS &amp; SOFTWARE</span>
          <span>{site.coordinates}</span>
        </div>

        <div className="hero__center">
          <p className="hero__eyebrow" data-reveal="up" data-intro suppressHydrationWarning>
            <span className="brand-dot" aria-hidden="true" />
            <span>AI ENGINEER · GENERATIVE AI &amp; FULL-STACK</span>
          </p>

          <h1 id="hero-title" className="hero__title" data-split="lines" data-intro suppressHydrationWarning>
            AYUSH MISHRA
          </h1>

          <p className="hero__subtitle" data-reveal="up" data-delay="0.2" data-intro suppressHydrationWarning>
            {site.description}
          </p>

          <div className="hero__socials" data-reveal="up" data-delay="0.25" data-intro suppressHydrationWarning>
            <a
              href="https://github.com/codefixxx"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              data-cursor="GitHub"
            >
              <span>GitHub ↗</span>
            </a>
            <span className="hero__social-sep" aria-hidden="true">·</span>
            <a
              href="https://www.linkedin.com/in/ayush-mishra-2072961a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              data-cursor="LinkedIn"
            >
              <span>LinkedIn ↗</span>
            </a>
            <span className="hero__social-sep" aria-hidden="true">·</span>
            <a
              href={`mailto:${site.email}`}
              className="hero__social-link"
              data-cursor="Email"
            >
              <span>Email ↗</span>
            </a>
          </div>
        </div>

        <div className="hero__footer" data-reveal="fade" data-delay="0.3" data-intro suppressHydrationWarning>
          <div className="hero__stat">
            <span className="hero__stat-val">APPLIED AI &amp; MULTI-AGENT</span>
            <span>Building LLM applications, autonomous agent workflows, and practical ML solutions.</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-val">FULL-STACK &amp; INFRASTRUCTURE</span>
            <span>Scalable APIs, asynchronous pipelines, real-time sync, and production cloud systems.</span>
          </div>
          <div className="hero__scroll">
            <span>TRAVERSE SYSTEMS</span>
            <span aria-hidden="true">↓</span>
          </div>
        </div>
      </section>

      {/* ================= SELECTED PROJECTS ================= */}
      <section id="work" className="works-section" aria-labelledby="works-heading">
        <div className="section-header">
          <h2 id="works-heading" className="section-label" data-reveal="up" suppressHydrationWarning>
            02 // FEATURED PROJECTS
          </h2>
          <span className="section-meta" data-reveal="up" data-delay="0.1" suppressHydrationWarning>
            {projects.length} CORE SYSTEMS · LIVE DEMOS &amp; REPOSITORIES
          </span>
        </div>

        <div className="works-grid">
          {projects.map((project, idx) => (
            <article key={project.slug} className="project-card" data-reveal="up" data-delay={`${idx * 0.1}`} suppressHydrationWarning>
              <Link
                href={`/work/${project.slug}`}
                className="project-card__frame-link"
                data-cursor="Inspect"
              >
                <div
                  className="project-card__frame"
                  data-gl="procedural"
                  data-seed={project.cover.seed}
                  data-colors={project.cover.colors.join(',')}
                >
                  <div
                    className="gl-fallback"
                    role="img"
                    aria-label={project.cover.alt}
                  />
                </div>
              </Link>

              <div className="project-card__info">
                <div className="project-card__top">
                  <h3 className="project-card__title">
                    <Link href={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <span className="project-card__year">&lsquo;{project.year.toString().slice(-2)}</span>
                </div>

                <p className="project-card__summary">
                  {project.summary}
                </p>

                {/* Bullets directly from resume */}
                <ul className="project-card__bullets" aria-label="Key Engineering Deliverables">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="project-card__bullet-item">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="project-card__roles">
                  {project.roles.map((role) => (
                    <span key={role} className="role-tag">
                      {role}
                    </span>
                  ))}
                </div>

                {/* Embedded Live Demo and Code Links */}
                <div className="project-card__actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn project-action-btn--live"
                      data-cursor="Live"
                    >
                      <span className="live-indicator" aria-hidden="true" />
                      Live Demo ↗
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-btn project-action-btn--code"
                      data-cursor="Code"
                    >
                      Code ↗
                    </a>
                  )}
                  <Link
                    href={`/work/${project.slug}`}
                    className="project-action-btn project-action-btn--details"
                  >
                    System Specs →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= WORK EXPERIENCE ================= */}
      <section id="experience" className="experience-section" aria-labelledby="experience-heading">
        <div className="section-header">
          <h2 id="experience-heading" className="section-label" data-reveal="up" suppressHydrationWarning>
            03 // WORK EXPERIENCE
          </h2>
          <span className="section-meta" data-reveal="up" data-delay="0.1" suppressHydrationWarning>
            {experiences.length} APPOINTMENTS · PRODUCTION IMPACT
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
                
                <ul className="exp-bullets" aria-label={`Deliverables for ${exp.role} at ${exp.organization}`}>
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="exp-bullet-item">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exp-col exp-col--tech">
                <span className="exp-focus-label">FOCUS DOMAIN</span>
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

      {/* ================= TECHNICAL SKILLS & EDUCATION ================= */}
      <section className="philosophy-section" aria-labelledby="skills-heading">
        <div className="philosophy__left">
          <h2 id="skills-heading" className="section-label" data-reveal="up" suppressHydrationWarning>
            04 // TECHNICAL SKILLS &amp; CERTS
          </h2>
        </div>

        <div className="philosophy__right">
          <blockquote className="philosophy__quote" data-split="lines" suppressHydrationWarning>
            &ldquo;Building impactful AI software means bridging advanced model capabilities with
            reliable, scalable, and resilient full-stack systems.&rdquo;
          </blockquote>

          <div data-reveal="up" data-delay="0.15" suppressHydrationWarning>
            {site.bio.map((paragraph, i) => (
              <p key={i} className="philosophy__text">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Technical Skills Stack Breakdown */}
          <div className="skills-stack-grid" data-reveal="up" data-delay="0.2" suppressHydrationWarning>
            {site.skills.map((cat) => (
              <div key={cat.category} className="skill-category-card">
                <h3 className="skill-category-title">{cat.category}</h3>
                <div className="skill-pills">
                  {cat.skills.map((s) => (
                    <span key={s} className="skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Education Bar */}
          <div className="credentials-row" data-reveal="up" data-delay="0.25" suppressHydrationWarning>
            <div className="credential-card">
              <span className="credential-label">CERTIFICATIONS</span>
              <div className="credential-items">
                {site.certifications.map((cert) => (
                  <div key={cert.title} className="cert-item">
                    <span className="cert-badge">VERIFIED</span>
                    <strong className="cert-title">{cert.title}</strong>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="credential-card">
              <span className="credential-label">EDUCATION</span>
              <div className="edu-item">
                <strong className="edu-inst">{site.education.institution}</strong>
                <span className="edu-deg">{site.education.degree}</span>
                <span className="edu-meta">{site.education.period} · {site.education.gpa}</span>
                <div className="edu-coursework">
                  <span className="edu-coursework-label">Coursework:</span>
                  {site.education.coursework.join(' · ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
