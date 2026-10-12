import Link from 'next/link'
import type { ReactNode } from 'react'
import ParticleNetwork from './ParticleNetwork'

/** Dark hero in the services hub style, for simple pages (Book a Call, Pricing).
 *  Server rendered; the entrance uses the CSS hero-fade-up animation, so it runs before JS. */
export default function PageHero({ crumb, badge, titleTop, titleAccent, children }: {
  crumb: string
  badge: string
  titleTop: string
  titleAccent: string
  children: ReactNode
}) {
  return (
    <section id="main-content" className="relative overflow-hidden bg-sb-dark">
      <ParticleNetwork />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-[96px] pb-12 lg:pb-14">
        <div className="max-w-[720px] py-8 lg:py-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="hero-fade-up flex items-center gap-2 text-[12px] text-white/80 mb-7" style={{ animationDelay: '0.1s' }}>
            <Link href="/" className="sb-link-dark max-md:min-h-[44px] max-md:inline-flex max-md:items-center">Home</Link>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-70" aria-hidden="true">
              <path d="M3.5 2L6.5 5 3.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <span className="text-white/90">{crumb}</span>
          </nav>

          {/* Badge */}
          <div
            className="hero-fade-up inline-flex items-center gap-2 rounded-full px-3 py-[5px] mb-5"
            style={{ background: 'rgba(7,42,66,0.3)', border: '1px solid rgba(127,245,234,0.45)', animationDelay: '0.2s' }}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-[#5EF2E3] animate-pulse shrink-0" />
            <span className="text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-[#5EF2E3]">{badge}</span>
          </div>

          <h1
            className="hero-fade-up font-extrabold leading-[1.06] tracking-[-0.028em] mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)', animationDelay: '0.3s' }}
          >
            <span className="text-white">{titleTop}</span>
            <br />
            <span className="text-sb-grad-dark">{titleAccent}</span>
          </h1>

          <p className="hero-fade-up text-[15px] md:text-[15.5px] leading-[1.75] text-white/90 max-w-[480px]" style={{ animationDelay: '0.4s' }}>
            {children}
          </p>
        </div>
      </div>
    </section>
  )
}
