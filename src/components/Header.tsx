'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/data/site';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Projects', href: '/#work' },
    { label: 'Experience', href: '/#experience' },
    { label: 'About', href: '/about' },
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="header" role="banner">
        <div className="header__inner">
          <Link href="/" className="header__brand" data-magnetic="0.25">
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-name">{site.fullName}</span>
            <span className="brand-role sr-only">{site.role}</span>
          </Link>

          <div className="header__telemetry" aria-hidden="true">
            <span className="telemetry-badge">
              <span className="pulse-dot" />
              AI ENGINEER · OPEN FOR ROLES
            </span>
            <span className="telemetry-coord">{site.location}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navItems.map((item) => {
                const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`nav-link ${active ? 'is-active' : ''}`}
                      aria-current={active ? 'page' : undefined}
                      data-magnetic="0.2"
                    >
                      <span className="nav-link__text">{item.label}</span>
                      <span className="nav-link__bracket" aria-hidden="true">[ ]</span>
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="nav-link nav-link--contact"
                  data-magnetic="0.2"
                  data-cursor="Email"
                >
                  <span className="nav-link__text">Contact</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`header__menu-btn ${menuOpen ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="menu-btn__text">{menuOpen ? 'CLOSE' : 'MENU'}</span>
            <span className="menu-btn__icon" aria-hidden="true">
              <span className="menu-btn__bar" />
              <span className="menu-btn__bar" />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer__backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mobile-drawer__content">
          <div className="mobile-drawer__header">
            <span className="mobile-drawer__dossier">SYSTEM // NAVIGATION</span>
            <span className="mobile-drawer__status">
              <span className="pulse-dot" />
              AVAILABLE
            </span>
          </div>

          <nav className="mobile-drawer__nav" aria-label="Mobile Menu Links">
            <ul className="mobile-nav-list">
              {navItems.map((item, idx) => (
                <li key={item.href} className="mobile-nav-item">
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mobile-nav-num">0{idx + 1}</span>
                    <span className="mobile-nav-label">{item.label}</span>
                    <span className="mobile-nav-arrow" aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
              <li className="mobile-nav-item">
                <a
                  href={`mailto:${site.email}`}
                  className="mobile-nav-link mobile-nav-link--accent"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mobile-nav-num">04</span>
                  <span className="mobile-nav-label">Initiate Contact</span>
                  <span className="mobile-nav-arrow" aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile-drawer__footer">
            <div className="mobile-drawer__profiles">
              <span className="mobile-drawer__footer-label">CHANNELS</span>
              <div className="mobile-drawer__links">
                <a
                  href="https://github.com/codefixxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-drawer__external"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-mishra-2072961a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-drawer__external"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="mobile-drawer__external"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="mobile-drawer__coords">
              <span>{site.fullName}</span>
              <span>{site.role}</span>
              <span>{site.location}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
