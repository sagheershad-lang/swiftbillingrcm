'use client'
import { useState } from 'react'

/* ─────────────────────────────────────────────────────────────────────────────
   TrustStrip — EHR/EMR platform logo marquee
   Primary:  Official logo from each company's own CDN
   Fallback: Coloured initial-letter badge if image fails to load
   "Experienced with" framing + disclaimer = nominative fair use
───────────────────────────────────────────────────────────────────────────── */

type Platform = {
  name: string
  logoUrl: string   /* empty string → skip straight to badge */
  color: string     /* brand colour for fallback badge */
  /** Explicit rendered height in px for the img (default 32).
   *  Drives optical balance — adjust per logo aspect ratio. */
  logoH?: number
  /** Extra scale on top of logoH for fine optical nudging (default 1). */
  scale?: number
  /** Intrinsic file size — lets the browser reserve the width before load (no layout shift). */
  w: number
  h: number
}

const platforms: Platform[] = [
  { name: 'Epic',           logoUrl: '/logos/site-logo.png',              color: '#CC1230', logoH: 40, w: 106, h: 41 },
  { name: 'athenahealth',   logoUrl: '/logos/athenahealth-logo.png',      color: '#00A0B0', logoH: 52, w: 300, h: 300 },
  { name: 'Tebra',          logoUrl: '/logos/tebra-logo.png',             color: '#FF6B00', logoH: 68, w: 300, h: 300 },
  { name: 'eClinicalWorks', logoUrl: '/logos/eclinicalworks-logo.png',    color: '#00A650', logoH: 68, w: 300, h: 300 },
  { name: 'AdvancedMD',     logoUrl: '/logos/advance%20md.png',           color: '#003087', logoH: 62, w: 269, h: 188 },
  { name: 'drchrono',       logoUrl: '/logos/dr%20chrono%20logo.png',     color: '#2563EB', logoH: 44, w: 300, h: 90 },
  { name: 'NextGen',        logoUrl: '/logos/next%20gen%20logo.png',      color: '#00A850', logoH: 52, w: 300, h: 225 },
  { name: 'Availity',       logoUrl: '/logos/availity%20logo.png',        color: '#612583', logoH: 48, w: 300, h: 167 },
  { name: 'Office Ally',    logoUrl: '/logos/office%20ally%20logo.png',   color: '#005EB8', logoH: 52, w: 256, h: 256 },
  { name: 'Waystar',        logoUrl: '/logos/waystar%20logo.png',         color: '#1A1A5E', logoH: 44, w: 300, h: 127 },
  { name: 'CAQH',           logoUrl: '/logos/caqh%20logo.png',            color: '#005DAA', logoH: 46, w: 300, h: 157 },
]

/* ── Individual logo (no card, no label) ─────────────────────────────── */
function PlatformCard({ p }: { p: Platform }) {
  const [failed, setFailed] = useState(!p.logoUrl)
  const h  = p.logoH ?? 44
  const sc = p.scale ?? 1

  return (
    <div className="group flex items-center justify-center px-6 py-2">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={p.logoUrl}
          alt={`${p.name} logo`}
          width={p.w}
          height={p.h}
          loading="lazy"
          draggable={false}
          style={{
            display: 'block',
            height: `${h}px`,
            width: 'auto',
            maxWidth: '150px',
            transform: sc !== 1 ? `scale(${sc})` : undefined,
            transformOrigin: 'center center',
          }}
          className="grayscale opacity-60
            group-hover:grayscale-0 group-hover:opacity-100
            transition-all duration-300"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            background: `linear-gradient(135deg, ${p.color}cc, ${p.color})`,
          }}
          className="grayscale opacity-60
            group-hover:grayscale-0 group-hover:opacity-100
            transition-all duration-300"
        >
          <span className="text-[20px] font-extrabold text-white leading-none select-none">
            {p.name.charAt(0).toUpperCase()}
          </span>
        </div>
      )}
    </div>
  )
}

/* 4× duplication for seamless infinite loop */
const track = [...platforms, ...platforms, ...platforms, ...platforms]

/* ── Section ──────────────────────────────────────────────────────────── */
export default function TrustStrip() {
  return (
    <section
      className="relative overflow-hidden border-b border-[#D8E2EC]"
      style={{ background: 'linear-gradient(180deg, #EAF0F6 0%, #F2F6FA 55%, #EDF1F7 100%)' }}
    >

      {/* Ambient teal glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[220px] opacity-25"
        style={{ background: 'radial-gradient(ellipse at top, rgba(46,196,182,0.45) 0%, transparent 65%)' }}
      />

      {/* Top accent line */}
      <div
        className="h-[3px] w-full"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #2EC4B6 30%, #0B3C5D 70%, transparent 100%)' }}
      />

      {/* ── Premium heading ─────────────────────────────────────────── */}
      <div className="relative pt-9 pb-6 text-center px-6">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[520px] h-[160px] opacity-40"
          style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(46,196,182,0.18) 0%, transparent 70%)' }}
        />

        {/* Badge */}
        <div className="relative inline-flex items-center gap-[7px]
          bg-[#2EC4B6]/[0.10] border border-[#2EC4B6]/25
          rounded-full px-[14px] py-[6px] mb-5
          shadow-[0_0_0_4px_rgba(46,196,182,0.06)] backdrop-blur-sm">
          <span className="w-[7px] h-[7px] rounded-full bg-[#2EC4B6] animate-pulse shrink-0" />
          <span className="text-[10.5px] font-extrabold uppercase tracking-[0.22em] text-[#2EC4B6]">
            Platform Integrations
          </span>
        </div>

        {/* Headline */}
        <h2 className="relative text-[clamp(22px,3.2vw,34px)] font-extrabold tracking-[-0.025em] leading-[1.12] mb-3">
          <span className="text-[#0F172A]">Compatible With</span>
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #0B3C5D 10%, #2EC4B6 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Leading Healthcare Platforms
          </span>
        </h2>

        <p className="text-[15px] md:text-[13.5px] text-[#5A7A96] font-medium leading-relaxed max-w-[480px] mx-auto">
          We work seamlessly across all major EHR, EMR, and clearinghouse systems — no migration required.
        </p>

        <div
          className="mt-6 h-px max-w-[200px] mx-auto"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(46,196,182,0.45), transparent)' }}
        />
      </div>

      {/* ── Marquee ─────────────────────────────────────────────────── */}
      <div className="relative pb-6">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 md:w-32 z-10"
          style={{ background: 'linear-gradient(to right, #EAF0F6, transparent)' }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 md:w-32 z-10"
          style={{ background: 'linear-gradient(to left, #EAF0F6, transparent)' }}
        />

        <style>{`
          @keyframes plat-anim {
            from { transform: translateX(0); }
            to   { transform: translateX(-25%); }
          }
          .plat-track {
            display: flex;
            align-items: stretch;
            width: max-content;
            animation: plat-anim 60s linear infinite;
            will-change: transform;
          }
          .plat-outer:hover .plat-track { animation-play-state: paused; }
          .plat-cell {
            opacity: 1;
            transition: transform 0.28s cubic-bezier(0.22,1,0.36,1);
            cursor: default;
          }
          .plat-cell:hover { transform: translateY(-4px); }
        `}</style>

        <div className="plat-outer overflow-hidden">
          <div className="plat-track">
            {/* Only the first copy is announced; the 3 repeats exist for the seamless loop */}
            {track.map((p, i) => (
              <div key={i} className="plat-cell shrink-0" aria-hidden={i >= platforms.length ? 'true' : undefined}>
                <PlatformCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center pb-4 px-6">
        <p className="text-[10px] text-[#94ABBE] font-medium tracking-wide leading-relaxed">
          SwiftBilling RCM is an independent service provider and is not affiliated with or endorsed by any of the platforms listed above.
        </p>
      </div>

    </section>
  )
}
