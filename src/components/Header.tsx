'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/data/site';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Projects', href: '/#work' },
    { label: 'Experience', href: '/#experience' },
    { label: 'About', href: '/about' },
  ];

  return (
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
      </div>
    </header>
  );
}
