import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site, projects } from '@/data/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${site.fullName}`,
      description: project.summary,
      images: ['/og.png'],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="case-page">
      <header className="case-hero">
        <div className="case-hero__meta" data-reveal="fade" data-intro>
          <span>SYSTEM // {String(projectIndex + 1).padStart(2, '0')} OF {String(projects.length).padStart(2, '0')}</span>
          <span>DOMAIN: {project.client.toUpperCase()}</span>
          <span>CYCLE: {project.year}</span>
        </div>

        <h1 className="case-hero__title" data-split="lines" data-intro>
          {project.title}
        </h1>

        <div className="case-tech-tags" data-reveal="fade" data-delay="0.05" data-intro>
          {project.roles.map((tag) => (
            <span key={tag} className="role-tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="case-hero__summary" data-reveal="up" data-delay="0.1" data-intro>
          {project.summary}
        </p>

        {/* Embedded Live Demo and Code Links */}
        <div className="case-action-bar" data-reveal="up" data-delay="0.15" data-intro>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
              data-cursor="Live"
              data-magnetic="0.2"
            >
              <span className="live-indicator" aria-hidden="true" />
              <span className="cta-button__text">Launch Live Demo ↗</span>
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button--outline"
              data-cursor="Code"
              data-magnetic="0.2"
            >
              <span className="cta-button__text">Inspect Source Code ↗</span>
            </a>
          )}
        </div>

        <div className="case-metrics" data-reveal="up" data-delay="0.2" data-intro>
          {project.metrics.map((m) => (
            <div key={m.label} className="metric-item">
              <span className="metric-label">{m.label}</span>
              <span className="metric-value">{m.value}</span>
            </div>
          ))}
        </div>

        <div
          className="case-hero__media"
          data-gl="procedural"
          data-gl-instant
          data-seed={project.cover.seed}
          data-colors={project.cover.colors.join(',')}
        >
          <div
            className="gl-fallback"
            role="img"
            aria-label={project.cover.alt}
          />
        </div>
      </header>

      {/* Resume Deliverables Checklist */}
      <section className="case-bullets-section" aria-label="Resume Deliverables">
        <div className="case-bullets-container">
          <h2 className="case-section__heading" data-reveal="up">
            Core Implementation &amp; Deliverables
          </h2>
          <ul className="case-bullets-list" data-reveal="up" data-delay="0.1">
            {project.bullets.map((b, i) => (
              <li key={i} className="case-bullet-item">
                <span className="case-bullet-marker">0{i + 1}</span>
                <span className="case-bullet-text">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="case-body" aria-label="Project Engineering Architecture">
        {project.body.map((section, idx) => (
          <div key={section.heading} className="case-section" data-reveal="up" data-delay={`${idx * 0.1}`}>
            <h2 className="case-section__heading">{section.heading}</h2>
            <p className="case-section__text">{section.text}</p>
          </div>
        ))}
      </section>

      <nav className="case-next" aria-label="Next Case Study">
        <span className="case-next__label">CONTINUE SEQUENCE →</span>
        <Link
          href={`/work/${nextProject.slug}`}
          className="case-next__title"
          data-cursor="Next"
          data-magnetic="0.25"
        >
          {nextProject.title} →
        </Link>
      </nav>
    </article>
  );
}
