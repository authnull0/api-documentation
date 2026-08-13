'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const SANS = "var(--font-sans, 'Segoe UI', -apple-system, sans-serif)"

// Matches the `max-w-5xl` container the home page's content sections use,
// so the nav lines up with them there. Docs pages stay edge-to-edge to
// match the sidebar + main content layout.
const HOME_CONTENT_WIDTH = 1098

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <nav className="site-pad" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 60,
      background: 'rgba(255,255,255,0.88)',
      backdropFilter: 'saturate(180%) blur(9px)',
      WebkitBackdropFilter: 'saturate(180%) blur(9px)',
      borderBottom: '1px solid #E5E7EB',
      fontFamily: SANS,
    }}>
      <div style={{
        height: '100%', display: 'flex', alignItems: 'center', gap: 26,
        maxWidth: isHome ? HOME_CONTENT_WIDTH : undefined,
        margin: isHome ? '0 auto' : undefined,
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', flexShrink: 0, minWidth: 0 }}>
          <Image src="/authnull-logo.png" alt="AuthNull" width={120} height={36} priority style={{ objectFit: "contain", maxWidth: '100%', height: 'auto' }} />
        </Link>

        <div style={{ flex: 1 }} />

        <Link
          href="https://authnull-website-v3.pages.dev/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
          style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#4f46e5', color: '#ffffff',
            fontSize: 14, fontWeight: 600,
            padding: '8px 18px', borderRadius: 8,
            textDecoration: 'none',
            transition: 'background 0.15s',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Get in Touch
        </Link>
      </div>
      <style>{`
        .navbar-cta:hover { background: #4338ca !important; }
        @media (max-width: 360px) {
          .navbar-cta { padding: 8px 12px !important; font-size: 13px !important; }
        }
      `}</style>
    </nav>
  )
}
