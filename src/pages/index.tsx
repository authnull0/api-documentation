import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {BookOpen, Shield, Database, Globe, FileText, KeyRound} from 'lucide-react';

const modes = [
  {
    icon: BookOpen,
    title: 'Getting started',
    methods: ['guide'],
    count: 6,
    noun: 'guides',
    description: 'Authenticate requests, scope them to your org and tenant, and learn the conventions every endpoint follows.',
    paths: ['Authentication', 'Tenant scope', 'Pagination'],
    href: '/docs/intro',
  },
  {
    icon: Shield,
    title: 'AD Mode',
    methods: ['post', 'put'],
    count: 41,
    noun: 'endpoints',
    description: 'Onboard domains, manage users and groups, enforce authentication policies, and read sign-in and lockout logs.',
    paths: ['/ad/GetAllDomains', '/api/v1/policyService/ListPolicy', '/users/onboardUser'],
    href: '/docs/ad-domains',
  },
  {
    icon: Database,
    title: 'Database Mode',
    methods: ['post'],
    count: 13,
    noun: 'endpoints',
    description: 'Discover databases and their schemas, manage database users, and broker connections through Authnull agents.',
    paths: ['/api/v1/databaseService/listDatabase', '/connections/createConnections'],
    href: '/docs/db-databases',
  },
  {
    icon: Globe,
    title: 'Radius Mode',
    methods: ['post'],
    count: 2,
    noun: 'endpoints',
    description: 'Onboard Radius devices behind Microsoft NPS, Cisco ISE or Aruba ClearPass, and manage the device inventory.',
    paths: ['/network_device/ListDevices', '/network_device/DeleteDevice'],
    href: '/docs/rad-onboarding',
  },
  {
    icon: FileText,
    title: 'API conventions',
    methods: ['ref'],
    count: 4,
    noun: 'references',
    description: 'Request and response formats, HTTP status codes, and troubleshooting for common integration failures.',
    paths: ['Request format', 'Status codes', 'Troubleshooting'],
    href: '/docs/conv-request',
  },
];

const totalEndpoints = modes.filter((m) => m.noun === 'endpoints').reduce((sum, m) => sum + m.count, 0);

const facts = [
  {k: 'Base URL', v: 'api.authnull.com'},
  {k: 'Auth header', v: 'X-Authorization'},
  {k: 'Format', v: 'application/json'},
];

const steps = [
  {n: '1', title: 'Set your token', desc: 'Keep the token in the environment, never in client code.', code: 'export AUTHNULL_TOKEN="..."'},
  {n: '2', title: 'Send the header', desc: 'Authnull reads X-Authorization, not the standard Authorization header.', code: 'X-Authorization: $AUTHNULL_TOKEN'},
  {n: '3', title: 'Scope the body', desc: 'Every call carries the organization and tenant it acts within.', code: '{ "orgId": 105, "tenantId": 1 }'},
];

const SANS = "var(--font-sans, 'Segoe UI', -apple-system, sans-serif)";
const MONO = "var(--font-mono, 'IBM Plex Mono', monospace)";

interface FlowNodeProps {
  delay: string;
  borderColor: string;
  bg: string;
  statusClass: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  glowClass?: string;
  nodeStyle?: React.CSSProperties;
}

// ── Flow Circuit: L-path layout (900 × 220 coordinate space) ──
// Currently unused (not rendered below) — ported as-is from the Next.js
// homepage in case the diagram is re-enabled later.
const FC_W = 900, FC_H = 220, FC_NW = 165, FC_NH = 95, FC_R = 14;
const FC_yLow = 132, FC_yHigh = 70; // node vertical centers (60%, 32% of FC_H)

const FC_n1 = {x: 30, y: FC_yLow - Math.floor(FC_NH / 2)}; // {30,  84}
const FC_n2 = {x: Math.round((FC_W - FC_NW) / 2), y: FC_yHigh - Math.floor(FC_NH / 2)}; // {368, 22}
const FC_n3 = {x: FC_W - 30 - FC_NW, y: FC_yLow - Math.floor(FC_NH / 2)}; // {705, 84}

// Connection points — center of each node's left/right edge
const FC_p1rx = FC_n1.x + FC_NW, FC_p1ry = FC_yLow; // [195, 132]
const FC_p2lx = FC_n2.x, FC_p2ly = FC_yHigh; // [368, 70]
const FC_p2rx = FC_n2.x + FC_NW, FC_p2ry = FC_yHigh; // [533, 70]
const FC_p3lx = FC_n3.x, FC_p3ly = FC_yLow; // [705, 132]

// Corner x-midpoints
const FC_cx1 = Math.round((FC_p1rx + FC_p2lx) / 2); // 282
const FC_cx2 = Math.round((FC_p2rx + FC_p3lx) / 2); // 619

// L-shaped paths: horizontal → rounded corner → vertical → rounded corner → horizontal
const FC_d1 = [
  `M ${FC_p1rx},${FC_p1ry}`,
  `H ${FC_cx1 - FC_R}`,
  `Q ${FC_cx1},${FC_p1ry} ${FC_cx1},${FC_p1ry - FC_R}`,
  `V ${FC_p2ly + FC_R}`,
  `Q ${FC_cx1},${FC_p2ly} ${FC_cx1 + FC_R},${FC_p2ly}`,
  `H ${FC_p2lx}`,
].join(' ');

const FC_d2 = [
  `M ${FC_p2rx},${FC_p2ry}`,
  `H ${FC_cx2 - FC_R}`,
  `Q ${FC_cx2},${FC_p2ry} ${FC_cx2},${FC_p2ry + FC_R}`,
  `V ${FC_p3ly - FC_R}`,
  `Q ${FC_cx2},${FC_p3ly} ${FC_cx2 + FC_R},${FC_p3ly}`,
  `H ${FC_p3lx}`,
].join(' ');

function FlowCircuit() {
  const tL = `M -50,${FC_yLow} H ${FC_n1.x}`;
  const tR = `M ${FC_n3.x + FC_NW},${FC_yLow} H ${FC_W + 50}`;
  const junctions = [[FC_p1rx, FC_p1ry], [FC_p2lx, FC_p2ly], [FC_p2rx, FC_p2ry], [FC_p3lx, FC_p3ly]];

  return (
    <div style={{position: 'relative', width: FC_W, height: FC_H, margin: '0 auto', borderRadius: 14, overflow: 'hidden'}}>
      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* SVG: tail lines + L-paths + junction dots */}
      <svg style={{position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible'}} aria-hidden="true">
        <defs>
          {/* Same teal pulse for both legs — looks like one continuous light */}
          <linearGradient id="fcG1" gradientUnits="userSpaceOnUse" x1={FC_p1rx} y1={FC_p1ry} x2={FC_p2lx} y2={FC_p2ly}>
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="55%" stopColor="#00d4aa" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="fcG2" gradientUnits="userSpaceOnUse" x1={FC_p2rx} y1={FC_p2ry} x2={FC_p3lx} y2={FC_p3ly}>
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="55%" stopColor="#00d4aa" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
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
        {junctions.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill="#080f1a" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
        ))}
      </svg>

      {/* Ambient bloom behind MFA node */}
      <div className="mfa-bloom" style={{left: FC_n2.x - 18, top: FC_n2.y - 18, width: FC_NW + 36, height: FC_NH + 36}} />

      {/* Client App */}
      <FlowNode delay="0.1s" borderColor="rgba(59,145,255,0.5)" bg="#0a1628"
        statusClass="hero-status-ok" iconBg="rgba(59,145,255,0.15)" iconColor="#5ba8ff"
        icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>}
        title="Client App" sub="POST /auth/token"
        glowClass="hero-node-glow-client"
        nodeStyle={{position: 'absolute', left: FC_n1.x, top: FC_n1.y, width: FC_NW}} />

      {/* MFA Verify (center, elevated) */}
      <FlowNode delay="0.2s" borderColor="rgba(255,145,40,0.65)" bg="#0a1628"
        statusClass="hero-status-active" iconBg="rgba(255,145,40,0.15)" iconColor="#ffaa50"
        icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
        title="MFA Verify" sub="TOTP / FIDO2"
        glowClass="hero-node-glow-mfa"
        nodeStyle={{position: 'absolute', left: FC_n2.x, top: FC_n2.y, width: FC_NW, zIndex: 1}} />

      {/* Access Granted */}
      <FlowNode delay="0.3s" borderColor="rgba(160,100,255,0.5)" bg="#0a1628"
        statusClass="hero-status-ok" iconBg="rgba(160,100,255,0.15)" iconColor="#b87aff"
        icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}
        title="Access Granted" sub="JWT + Session"
        glowClass="hero-node-glow-access"
        nodeStyle={{position: 'absolute', left: FC_n3.x, top: FC_n3.y, width: FC_NW}} />
    </div>
  );
}

function FlowNode({delay, borderColor, bg, statusClass, iconBg, iconColor, icon, title, sub, glowClass = '', nodeStyle}: FlowNodeProps) {
  return (
    <div
      className={`hero-flow-node ${glowClass}`}
      style={{background: bg, border: `1px solid ${borderColor}`, borderRadius: 10, padding: '14px 18px', minWidth: 150, position: 'relative', animationDelay: delay, ...nodeStyle}}
    >
      <span className={`hero-status-dot ${statusClass}`} />
      <div style={{width: 28, height: 28, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', background: iconBg, color: iconColor, marginBottom: 8}}>
        {icon}
      </div>
      <div style={{fontSize: 12, fontWeight: 600, color: '#e8f0fe', marginBottom: 3}}>{title}</div>
      <div style={{fontSize: 11, color: '#6b8099', fontFamily: MONO}}>{sub}</div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="AuthNull API Documentation" description="AuthNull API Documentation">
      {/* ── Hero ── */}
      <section
        className="hero-bg-grid site-pad"
        style={{position: 'relative', overflow: 'hidden', background: '#ffffff', fontFamily: SANS, color: '#111827'}}
      >
        {/* Hero content */}
        <div
          className="site-pad"
          style={{
            position: 'relative', zIndex: 10, textAlign: 'center', margin: '0 auto', width: '100%',
            maxWidth: 760, paddingTop: 'calc(60px + 3rem)', paddingBottom: '3.5rem',
          }}
        >

          {/* Eyebrow + meta chips */}
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 22}}>
            <span className="eyebrow" style={{color: '#4f46e5'}}>API Reference</span>
            <span className="metachip">v1 · stable</span>
            <span className="metachip">
              <span style={{width: 7, height: 7, borderRadius: '50%', background: '#22c55e'}} />
              All APIs operational
            </span>
          </div>

          {/* Heading */}
          <h1 className="home-title" style={{color: '#111827', marginBottom: '1.25rem'}}>
            Passwordless access, <span style={{color: 'var(--ifm-color-primary)'}}>three modes</span>, one API.
          </h1>

          {/* Subtitle */}
          <p className="lead" style={{margin: '0 auto', fontWeight: 300, color: '#4b5563', maxWidth: 560, marginBottom: '2.5rem'}}>
            Authnull secures Active Directory, databases and Radius network devices through a single JSON interface. Every screen in the console maps to an endpoint documented here.
          </p>

          {/* CTA buttons */}
          <div className="hero-cta-row" style={{marginBottom: '2.5rem'}}>
            <Link to="/docs/intro" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#4f46e5', color: '#ffffff', fontSize: 14, fontWeight: 600,
              padding: '11px 22px', borderRadius: 8, textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.15s',
            }}>
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/docs/auth" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#111827', fontSize: 14, fontWeight: 400,
              padding: '11px 22px', borderRadius: 8, textDecoration: 'none',
              border: '1px solid rgba(0,0,0,0.15)',
              transition: 'background 0.2s, border-color 0.2s',
            }}>
              <KeyRound size={14} strokeWidth={2} />
              Authentication
            </Link>
          </div>

          {/* Base URL / auth header / format facts */}
          <div className="facts-grid">
            {facts.map((f) => (
              <div key={f.k} className="fact-item">
                <div className="fact-key">{f.k}</div>
                <div className="fact-val">{f.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PAM Auth Flow diagram — temporarily disabled, restore by uncommenting
        <div style={{position:'relative', zIndex:10, width:'100%', margin:'0 auto', maxWidth:1000, paddingBottom:'4rem'}}>
          <div className="eyebrow" style={{ textAlign: 'center', color: '#6b8099', marginBottom: '1.5rem' }}>
            PAM Authentication Flow
          </div>
          <div style={{overflowX:'auto', paddingBottom:'0.5rem'}}>
            <FlowCircuit />
          </div>
        </div>
        */}

      </section>

      {/* ── Quickstart ── */}
      <section className="site-pad" style={{background: '#fcfcfd', borderTop: '1px solid #e7e9ed', borderBottom: '1px solid #e7e9ed', paddingTop: '2.75rem', paddingBottom: '2.75rem'}}>
        <div style={{maxWidth: '64rem', margin: '0 auto'}}>
          <h2 className="eyebrow" style={{color: '#8b929e', marginBottom: '1.375rem'}}>Three calls to your first response</h2>
          <ol className="steps-grid">
            {steps.map((s) => (
              <li key={s.n} className="step-card">
                <div style={{display: 'flex', alignItems: 'center', gap: 9, marginBottom: 9}}>
                  <span className="step-num">{s.n}</span>
                  <span className="step-title">{s.title}</span>
                </div>
                <p className="step-desc">{s.desc}</p>
                <code className="step-code">{s.code}</code>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Endpoint index ── */}
      <section className="site-pad" style={{background: '#ffffff', paddingTop: '4.5rem', paddingBottom: '3rem'}}>
        <div style={{maxWidth: '64rem', margin: '0 auto'}}>
          <div style={{display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 8}}>
            <h2 style={{fontSize: 'clamp(26px, 2.8vw, 34px)', fontWeight: 600, letterSpacing: '-0.024em', color: '#111827'}}>Endpoint index</h2>
            <span className="mono" style={{fontSize: 12.5, color: '#8b929e'}}>{totalEndpoints} endpoints across 3 modes</span>
          </div>
          <p style={{fontSize: 16, color: '#4b5462', maxWidth: '58ch', marginBottom: '1.75rem'}}>
            Pick the mode your integration targets. Each row links into the full reference.
          </p>

          <div className="endpoint-list">
            {modes.map((m) => (
              <Link key={m.href} to={m.href} className="endpoint-row">
                <span className="endpoint-icon">
                  <m.icon size={17} strokeWidth={1.7} />
                </span>
                <div style={{minWidth: 0}}>
                  <div className="endpoint-title-row">
                    <span className="endpoint-title">{m.title}</span>
                    {m.methods.map((tag) => (
                      <span key={tag} className={`idx-tag ${tag}`}>{tag.toUpperCase()}</span>
                    ))}
                  </div>
                  <p className="endpoint-desc">{m.description}</p>
                  <div className="endpoint-paths">
                    {m.paths.map((p) => (
                      <code key={p} className="endpoint-path">{p}</code>
                    ))}
                  </div>
                </div>
                <div className="endpoint-meta">
                  <div className="endpoint-count">{m.count}</div>
                  <div className="endpoint-noun">{m.noun}</div>
                </div>
                <span className="endpoint-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
