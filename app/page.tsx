import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Rocket, Lock, Monitor, Users, Bot, Fingerprint, FolderTree, FileText } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categories = [
  {
    icon: Rocket,
    title: 'Getting Started',
    description: 'New to AuthNull? Start here with our introduction and installation guide.',
    href: '/docs/introduction',
    tags: ['guide'],
    count: '2 guides',
  },
  {
    icon: Lock,
    title: 'Privileged Access Management',
    description: 'Control and monitor access to critical infrastructure with PAM APIs.',
    href: '/docs/pam',
    tags: ['guide'],
    count: 'Overview',
  },
  {
    icon: Monitor,
    title: 'Endpoint Management',
    description: 'Manage endpoints, assign users and groups, and configure auth types.',
    href: '/docs/endpoint-management',
    tags: ['post', 'put'],
    count: '5 endpoints',
  },
  {
    icon: Users,
    title: 'User Management',
    description: 'Create and manage endpoint users, credentials, wallets, and password policies.',
    href: '/docs/endpoint-user-management',
    tags: ['post', 'put'],
    count: '13 endpoints',
  },
  {
    icon: Bot,
    title: 'Agents',
    description: 'Deploy Authnull Agent, AD Agent, and CSV Agent to sync users and groups.',
    href: '/docs/authnull-agent',
    tags: ['post'],
    count: '12 endpoints',
  },
  {
    icon: Fingerprint,
    title: 'Decentralized Identities',
    description: 'Issue and manage DIDs, verifiable credentials, and wallet-based auth.',
    href: '/docs/decentralized-identities',
    tags: ['post'],
    count: '10 endpoints',
  },
  {
    icon: FolderTree,
    title: 'Active Directory',
    description: 'Import users, sync LDAP groups, and reconfigure directory settings.',
    href: '/docs/active-directory',
    tags: ['post'],
    count: '3 endpoints',
  },
  {
    icon: FileText,
    title: 'API Reference',
    description: 'Complete error codes, HTTP status meanings, and API conventions.',
    href: '/docs/errors',
    tags: ['ref'],
    count: '11 status codes',
  },
]

const SANS = "var(--font-sans, 'Segoe UI', -apple-system, sans-serif)"
const MONO = "var(--font-mono, 'JetBrains Mono', monospace)"

interface FlowNodeProps {
  delay: string
  borderColor: string
  bg: string
  statusClass: string
  iconBg: string
  iconColor: string
  icon: React.ReactNode
  title: string
  sub: string
  glowClass?: string
  nodeStyle?: React.CSSProperties
}

// ── Flow Circuit: L-path layout (900 × 220 coordinate space) ──
const FC_W=900, FC_H=220, FC_NW=165, FC_NH=95, FC_R=14
const FC_yLow=132, FC_yHigh=70   // node vertical centers (60%, 32% of FC_H)

const FC_n1={ x:30,                         y:FC_yLow -Math.floor(FC_NH/2) }  // {30,  84}
const FC_n2={ x:Math.round((FC_W-FC_NW)/2), y:FC_yHigh-Math.floor(FC_NH/2) }  // {368, 22}
const FC_n3={ x:FC_W-30-FC_NW,              y:FC_yLow -Math.floor(FC_NH/2) }  // {705, 84}

// Connection points — center of each node's left/right edge
const FC_p1rx=FC_n1.x+FC_NW, FC_p1ry=FC_yLow    // [195, 132]
const FC_p2lx=FC_n2.x,       FC_p2ly=FC_yHigh   // [368, 70]
const FC_p2rx=FC_n2.x+FC_NW, FC_p2ry=FC_yHigh   // [533, 70]
const FC_p3lx=FC_n3.x,       FC_p3ly=FC_yLow    // [705, 132]

// Corner x-midpoints
const FC_cx1=Math.round((FC_p1rx+FC_p2lx)/2)  // 282
const FC_cx2=Math.round((FC_p2rx+FC_p3lx)/2)  // 619

// L-shaped paths: horizontal → rounded corner → vertical → rounded corner → horizontal
const FC_d1=[
  `M ${FC_p1rx},${FC_p1ry}`,
  `H ${FC_cx1-FC_R}`,
  `Q ${FC_cx1},${FC_p1ry} ${FC_cx1},${FC_p1ry-FC_R}`,
  `V ${FC_p2ly+FC_R}`,
  `Q ${FC_cx1},${FC_p2ly} ${FC_cx1+FC_R},${FC_p2ly}`,
  `H ${FC_p2lx}`,
].join(' ')

const FC_d2=[
  `M ${FC_p2rx},${FC_p2ry}`,
  `H ${FC_cx2-FC_R}`,
  `Q ${FC_cx2},${FC_p2ry} ${FC_cx2},${FC_p2ry+FC_R}`,
  `V ${FC_p3ly-FC_R}`,
  `Q ${FC_cx2},${FC_p3ly} ${FC_cx2+FC_R},${FC_p3ly}`,
  `H ${FC_p3lx}`,
].join(' ')

function FlowCircuit() {
  const tL=`M -50,${FC_yLow} H ${FC_n1.x}`
  const tR=`M ${FC_n3.x+FC_NW},${FC_yLow} H ${FC_W+50}`
  const junctions=[[FC_p1rx,FC_p1ry],[FC_p2lx,FC_p2ly],[FC_p2rx,FC_p2ry],[FC_p3lx,FC_p3ly]]

  return (
    <div style={{ position:'relative', width:FC_W, height:FC_H, margin:'0 auto', borderRadius:14, overflow:'hidden' }}>
      {/* Subtle dot grid */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize:'28px 28px' }} />

      {/* SVG: tail lines + L-paths + junction dots */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', overflow:'visible' }} aria-hidden="true">
        <defs>
          {/* Same teal pulse for both legs — looks like one continuous light */}
          <linearGradient id="fcG1" gradientUnits="userSpaceOnUse"
            x1={FC_p1rx} y1={FC_p1ry} x2={FC_p2lx} y2={FC_p2ly}>
            <stop offset="0%"   stopColor="transparent" stopOpacity="0" />
            <stop offset="55%"  stopColor="#00d4aa"     stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff"     stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="fcG2" gradientUnits="userSpaceOnUse"
            x1={FC_p2rx} y1={FC_p2ry} x2={FC_p3lx} y2={FC_p3ly}>
            <stop offset="0%"   stopColor="transparent" stopOpacity="0" />
            <stop offset="55%"  stopColor="#00d4aa"     stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff"     stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Tail lines (clipped by container overflow:hidden) */}
        <path d={tL} stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />
        <path d={tR} stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />

        {/* Dim static tracks */}
        <path d={FC_d1} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />
        <path d={FC_d2} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />

        {/* Sequential gradient pulses (pathLength="1" normalises dasharray/offset) */}
        <path d={FC_d1} stroke="url(#fcG1)" strokeWidth="2" fill="none"
          pathLength="1" strokeDasharray="0.15 2.85" strokeLinecap="round"
          className="fc-pulse fc-pulse-1" />
        <path d={FC_d2} stroke="url(#fcG2)" strokeWidth="2" fill="none"
          pathLength="1" strokeDasharray="0.15 2.85" strokeLinecap="round"
          className="fc-pulse fc-pulse-2" />

        {/* Junction dots at every connection port */}
        {junctions.map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="3.5"
            fill="#080f1a" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
        ))}
      </svg>

      {/* Ambient bloom behind MFA node */}
      <div className="mfa-bloom" style={{ left:FC_n2.x-18, top:FC_n2.y-18, width:FC_NW+36, height:FC_NH+36 }} />

      {/* Client App */}
      <FlowNode delay="0.1s" borderColor="rgba(59,145,255,0.5)" bg="#0a1628"
        statusClass="hero-status-ok" iconBg="rgba(59,145,255,0.15)" iconColor="#5ba8ff"
        icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>}
        title="Client App" sub="POST /auth/token"
        glowClass="hero-node-glow-client"
        nodeStyle={{ position:'absolute', left:FC_n1.x, top:FC_n1.y, width:FC_NW }} />

      {/* MFA Verify (center, elevated) */}
      <FlowNode delay="0.2s" borderColor="rgba(255,145,40,0.65)" bg="#0a1628"
        statusClass="hero-status-active" iconBg="rgba(255,145,40,0.15)" iconColor="#ffaa50"
        icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
        title="MFA Verify" sub="TOTP / FIDO2"
        glowClass="hero-node-glow-mfa"
        nodeStyle={{ position:'absolute', left:FC_n2.x, top:FC_n2.y, width:FC_NW, zIndex:1 }} />

      {/* Access Granted */}
      <FlowNode delay="0.3s" borderColor="rgba(160,100,255,0.5)" bg="#0a1628"
        statusClass="hero-status-ok" iconBg="rgba(160,100,255,0.15)" iconColor="#b87aff"
        icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}
        title="Access Granted" sub="JWT + Session"
        glowClass="hero-node-glow-access"
        nodeStyle={{ position:'absolute', left:FC_n3.x, top:FC_n3.y, width:FC_NW }} />
    </div>
  )
}

function FlowNode({ delay, borderColor, bg, statusClass, iconBg, iconColor, icon, title, sub, glowClass = '', nodeStyle }: FlowNodeProps) {
  return (
    <div
      className={`hero-flow-node ${glowClass}`}
      style={{ background: bg, border: `1px solid ${borderColor}`, borderRadius: 10, padding: '14px 18px', minWidth: 150, position: 'relative', animationDelay: delay, ...nodeStyle }}
    >
      <span className={`hero-status-dot ${statusClass}`} />
      <div style={{ width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', background: iconBg, color: iconColor, marginBottom: 8 }}>
        {icon}
      </div>
      <div style={{ fontSize: 12, fontWeight: 600, color: '#e8f0fe', marginBottom: 3 }}>{title}</div>
      <div style={{ fontSize: 11, color: '#6b8099', fontFamily: MONO }}>{sub}</div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="hero-bg-grid relative overflow-hidden"
        style={{ background: '#ffffff', fontFamily: SANS, color: '#111827' }}
      >
        {/* Hero content */}
        <div
          className="relative z-10 text-center mx-auto w-full site-pad"
          style={{ maxWidth: 760, paddingTop: 'calc(60px + 3rem)', paddingBottom: '3.5rem' }}
        >

          {/* Eyebrow + meta chips */}
          <div className="flex items-center justify-center gap-2 flex-wrap" style={{ marginBottom: 22 }}>
            <span className="eyebrow" style={{ color: '#4f46e5' }}>API Reference</span>
            <span className="metachip">v1 · stable</span>
            <span className="metachip">
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
              All APIs operational
            </span>
          </div>

          {/* Heading */}
          <h1 className="home-title text-gray-900" style={{ marginBottom: '1.5rem' }}>
            AuthNull <span style={{ color: '#4f46e5' }}>API</span><br />Reference
          </h1>

          {/* Subtitle */}
          <p className="mx-auto lead" style={{ fontWeight: 300, color: '#4b5563', maxWidth: 560, marginBottom: '2.5rem' }}>
            Integrate privileged access management, MFA, and decentralized identity into your infrastructure with our developer-first APIs.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/docs/introduction" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#4f46e5', color: '#ffffff', fontSize: 14, fontWeight: 600,
              padding: '11px 22px', borderRadius: 8, textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.15s',
            }}>
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/docs/installation" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#111827', fontSize: 14, fontWeight: 400,
              padding: '11px 22px', borderRadius: 8, textDecoration: 'none',
              border: '1px solid rgba(0,0,0,0.15)',
              transition: 'background 0.2s, border-color 0.2s',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              Installation Guide
            </Link>
          </div>
        </div>

        {/* PAM Auth Flow diagram — temporarily disabled, restore by uncommenting
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6" style={{ maxWidth: 1000, paddingBottom: '4rem' }}>
          <div className="eyebrow" style={{ textAlign: 'center', color: '#6b8099', marginBottom: '1.5rem' }}>
            PAM Authentication Flow
          </div>
          <div className="overflow-x-auto pb-2">
            <FlowCircuit />
          </div>
        </div>
        */}

      </section>

      {/* ── Explore section ── */}
      <section className="bg-white py-20 site-pad">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-indigo-700 section-title">Explore the Documentation</h2>
            <p className="mt-3 text-gray-500 text-base">
              Everything you need to integrate AuthNull into your application
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100">
                  <cat.icon size={20} strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-gray-900 text-base group-hover:text-indigo-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{cat.description}</p>
                <div className="flex items-center gap-1.5" style={{ marginTop: 16, paddingTop: 13, borderTop: '1px solid #f3f4f6' }}>
                  {cat.tags.map((tag) => (
                    <span key={tag} className={`mtag ${tag}`}>{tag.toUpperCase()}</span>
                  ))}
                  <span className="mono" style={{ marginLeft: 'auto', fontSize: 11, color: '#9ca3af' }}>{cat.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}
