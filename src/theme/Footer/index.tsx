import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const SANS = "var(--font-sans, 'Segoe UI', -apple-system, sans-serif)";

type FooterLink = {label: string; href: string; external: boolean};

const RESOURCES: FooterLink[] = [
  {label: 'Blog', href: 'https://authnull-website-v3.pages.dev/blog', external: true},
  {label: 'Video', href: 'https://authnull.com/resources/videos', external: true},
];

const DOCUMENTATION: FooterLink[] = [
  {label: 'Getting Started', href: '/docs/introduction', external: false},
  {label: 'Installation Guide', href: '/docs/installation', external: false},
  {label: 'API Reference', href: '/docs/errors', external: false},
];

const COMPANY: FooterLink[] = [
  {label: 'Website', href: 'https://authnull-website-v3.pages.dev/', external: true},
  {label: 'About', href: 'https://authnull-website-v3.pages.dev/about', external: true},
  {label: 'Contact', href: 'https://authnull-website-v3.pages.dev/contact', external: true},
];

function FooterColumn({title, links}: {title: string; links: FooterLink[]}): ReactNode {
  return (
    <div>
      <p
        style={{
          fontFamily: SANS,
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: '0.08em',
          color: '#111827',
          marginBottom: 16,
          textTransform: 'uppercase',
        }}>
        {title}
      </p>
      <ul style={{listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10}}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              style={{fontFamily: SANS, fontSize: 14, color: '#6B7280', textDecoration: 'none'}}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer(): ReactNode {
  const logoSrc = useBaseUrl('/img/authnull-logo.png');

  return (
    <footer
      style={{
        borderTop: '1px solid #E5E7EB',
        background: '#f6f7f9',
        padding: '48px 2.5rem 32px',
        fontFamily: SANS,
      }}>
      <div style={{maxWidth: 1100, margin: '0 auto'}}>
        <div
          className="footer-grid"
          style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2.5rem', marginBottom: 40}}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: 2, marginBottom: 14}}>
              <Link href="/" style={{display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none'}}>
                <img src={logoSrc} alt="AuthNull" width={120} height={36} style={{objectFit: 'contain'}} />
              </Link>
            </div>
            <p style={{fontSize: 13, color: '#6B7280', lineHeight: 1.6, marginBottom: 20, maxWidth: 260}}>
              MFA for everything your IdP can&apos;t reach — Active Directory, RADIUS, Windows, and Linux.
            </p>
            <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
              <span style={{width: 7, height: 7, borderRadius: '50%', background: '#00d4aa', flexShrink: 0}} />
              <span style={{fontSize: 13, color: '#6B7280'}}>All systems operational</span>
            </div>
          </div>

          <FooterColumn title="Documentation" links={DOCUMENTATION} />
          <FooterColumn title="Resources" links={RESOURCES} />
          <FooterColumn title="Company" links={COMPANY} />
        </div>

        <div
          style={{
            borderTop: '1px solid #E5E7EB',
            paddingTop: 20,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
          }}>
          <span style={{fontSize: 12, color: '#000'}}>© {new Date().getFullYear()} AuthNull, Inc.</span>
          <div style={{display: 'flex', gap: 20}}>
            <Link
              href="https://authnull-website-v3.pages.dev/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{fontSize: 12, color: '#000', textDecoration: 'none'}}>
              Privacy
            </Link>
            <Link
              href="https://authnull-website-v3.pages.dev/terms"
              target="_blank"
              rel="noopener noreferrer"
              style={{fontSize: 12, color: '#000', textDecoration: 'none'}}>
              Terms
            </Link>
            <Link
              href="https://kloudone.safebase.us/"
              target="_blank"
              rel="noopener noreferrer"
              style={{fontSize: 12, color: '#000', textDecoration: 'none'}}>
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
