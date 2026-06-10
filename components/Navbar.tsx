import Link from 'next/link'
import Image from 'next/image'

const SANS = "'Booton', 'Segoe UI', BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif"

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center',
      padding: '0 2.5rem', height: 60,
      background: '#ffffff',
      borderBottom: '1px solid #E5E7EB',
      fontFamily: SANS,
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 20, color: '#111827', textDecoration: 'none' }}>
        <Image src="/authnull_logo.png" alt="AuthNull" width={26} height={26} style={{ borderRadius: 6, display: 'block' }} />
        <span style={{ lineHeight: 1, display: 'block' }}>AuthNull</span>
      </Link>
    </nav>
  )
}
