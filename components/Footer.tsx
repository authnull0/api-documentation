'use client'

import Link from 'next/link'
import Image from 'next/image'

const SANS = "var(--font-sans, 'Segoe UI', -apple-system, sans-serif)"

const DEVELOPERS = [
  { label: 'Documentation', href: 'https://help.authnull.com/', external: true },
  { label: 'API Reference', href: '/docs/introduction',         external: false },
]

const PRODUCT = [
  { label: 'Platform', href: 'https://authnull-website-v3.pages.dev/',         external: true },
  { label: 'Pricing',  href: 'https://authnull-website-v3.pages.dev/pricing',  external: true },
]

const COMPANY = [
  { label: 'About',   href: 'https://authnull-website-v3.pages.dev/about',   external: true },
  { label: 'Blog',    href: 'https://authnull-website-v3.pages.dev/blog',    external: true },
  { label: 'Contact', href: 'https://authnull-website-v3.pages.dev/contact', external: true },
]

function FooterColumn({ title, links }: { title: string; links: typeof DEVELOPERS }) {
  return (
    <div>
      <p style={{ fontFamily: SANS, fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', color: '#111827', marginBottom: 16, textTransform: 'uppercase' }}>
        {title}
      </p>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(link => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              style={{ fontFamily: SANS, fontSize: 14, color: '#6B7280', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #E5E7EB',
      background: '#ffffff',
      padding: '48px 2.5rem 32px',
      fontFamily: SANS,
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2.5rem', marginBottom: 40 }}
          className="footer-grid">
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Image src="/authnull_logo.png" alt="AuthNull" width={28} height={28} style={{ borderRadius: 6 }} />
              <span style={{ fontSize: 17, fontWeight: 700, color: '#111827' }}>AuthNull</span>
            </div>
            <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, marginBottom: 20, maxWidth: 240 }}>
              Identity-based MFA and access control for the infrastructure you already own.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              <a
                href="https://www.linkedin.com/company/authnull/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 34, height: 34, border: '1px solid #D1D5DB', borderRadius: 6,
                  color: '#374151', fontSize: 13, fontWeight: 600, textDecoration: 'none',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#6B7280'; e.currentTarget.style.color = '#6B7280' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.color = '#374151' }}
              >
                in
              </a>
              <a
                href="https://www.facebook.com/people/AuthNull/61577963862771/?rdid=N11yi2u72IoAvo4P&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F192ebyJvNp%2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 34, height: 34, border: '1px solid #D1D5DB', borderRadius: 6,
                  color: '#374151', fontSize: 13, fontWeight: 600, textDecoration: 'none',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#6B7280'; e.currentTarget.style.color = '#6B7280' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.color = '#374151' }}
              >
                f
              </a>
            </div>
          </div>

          <FooterColumn title="Product"    links={PRODUCT} />
          <FooterColumn title="Developers" links={DEVELOPERS} />
          <FooterColumn title="Company"    links={COMPANY} />
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 20, fontSize: 12, color: '#9CA3AF' }}>
          © {new Date().getFullYear()} AuthNull. All rights reserved.
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
