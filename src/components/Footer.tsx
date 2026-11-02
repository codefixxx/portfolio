'use client';
import { site } from '@/data/site';
import { scrollToTarget } from '@/engine';

export function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToTarget(0);
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        {/* Left Column: Heading, CTA, and Direct Details */}
        <div className="footer__prompt">
          <p className="footer__eyebrow">05 // INITIATE COLLABORATION</p>
          <h2 className="footer__heading" data-reveal="up" suppressHydrationWarning>
            Building intelligent, resilient software systems.
          </h2>
          <div className="footer__actions" data-reveal="up" data-delay="0.1" suppressHydrationWarning>
            <a
              href={`mailto:${site.email}`}
              className="cta-button"
              data-magnetic="0.3"
              data-cursor="Connect"
            >
              <span className="cta-button__bg" />
              <span className="cta-button__text">Initiate Contact →</span>
            </a>
          </div>

          <div className="footer__direct-info" data-reveal="up" data-delay="0.15" suppressHydrationWarning>
            <div className="footer__info-row">
              <span className="footer__info-label">EMAIL</span>
              <a href={`mailto:${site.email}`} className="footer__info-value">
                {site.email}
              </a>
            </div>
            <div className="footer__info-row">
              <span className="footer__info-label">PHONE</span>
              <a href={`tel:${site.phoneCall}`} className="footer__info-value">
                {site.phone}
              </a>
            </div>
            <div className="footer__status-badge">
              <span className="pulse-dot" />
              <span>{site.status}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Structured Channels & Profiles Card */}
        <div className="footer__connect">
          <div className="footer__connect-box" data-reveal="up" data-delay="0.1" suppressHydrationWarning>
            <h3 className="footer__box-title">CHANNELS &amp; PROFILES</h3>
            <p className="footer__box-subtitle">
              Direct access to production repositories, career trajectory, and direct inbox.
            </p>

            <div className="footer__social-grid">
              <a
                href="https://github.com/codefixxx"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-card"
                data-magnetic="0.15"
                data-cursor="GitHub"
              >
                <div className="footer__social-info">
                  <span className="footer__social-tag">CODEBASE</span>
                  <strong className="footer__social-name">GitHub</strong>
                  <span className="footer__social-handle">@codefixxx</span>
                </div>
                <span className="footer__social-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ayush-mishra-2072961a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-card"
                data-magnetic="0.15"
                data-cursor="LinkedIn"
              >
                <div className="footer__social-info">
                  <span className="footer__social-tag">NETWORK</span>
                  <strong className="footer__social-name">LinkedIn</strong>
                  <span className="footer__social-handle">in/ayush-mishra</span>
                </div>
                <span className="footer__social-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="footer__social-card"
                data-magnetic="0.15"
                data-cursor="Email"
              >
                <div className="footer__social-info">
                  <span className="footer__social-tag">INBOX</span>
                  <strong className="footer__social-name">Email</strong>
                  <span className="footer__social-handle">{site.email}</span>
                </div>
                <span className="footer__social-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__colophon">
          <span>AI Engineer · Next.js · GSAP Ticker · Space Grotesk</span>
        </div>
        <div className="footer__copyright">
          <span>&copy; 2026 {site.fullName}. All rights reserved.</span>
        </div>
        <button
          type="button"
          onClick={handleScrollTop}
          className="footer__scroll-top"
          data-magnetic="0.2"
          aria-label="Return to summit"
        >
          <span>Return to Summit ↑</span>
        </button>
      </div>
    </footer>
  );
}
