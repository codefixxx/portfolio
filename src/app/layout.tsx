import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Motion } from '@/components/Motion';
import { site } from '@/data/site';
import { display, text } from './fonts';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#090a0d',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | ${site.role}`,
    template: `%s | ${site.fullName}`,
  },
  description: site.description,
  alternates: { canonical: './' },
  openGraph: {
    type: 'website',
    siteName: site.fullName,
    title: `${site.fullName} | ${site.role}`,
    description: site.description,
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.fullName} | ${site.role}`,
    description: site.description,
  },
};

const flags = `document.documentElement.classList.add('js');if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.fullName,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: flags }} />
      </head>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div id="gl" aria-hidden="true" />
        <div id="curtain" aria-hidden="true">
          <div className="curtain__panel" />
        </div>
        <div id="cursor" aria-hidden="true">
          <span data-cursor-label />
        </div>
        <div id="loader" role="status" aria-label="Loading">
          <div className="loader__inner">
            <span className="loader__name" data-loader-out>
              {site.name}
            </span>
            <span className="loader__count" data-loader-out data-loader-count>
              000
            </span>
          </div>
          <div className="loader__bar" data-loader-bar />
        </div>
        <Header />
        <main id="main" tabIndex={-1} suppressHydrationWarning>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <Motion />
      </body>
    </html>
  );
}
