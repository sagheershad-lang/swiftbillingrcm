import Link from 'next/link'
import type { ReactNode } from 'react'
import FadeIn from './FadeIn'
import ParticleNetwork from './ParticleNetwork'

/* Shared building blocks for the simple content pages (Pricing, Security, EHR Integrations),
   following the design system in PROJECT_CONTEXT.md section 6. */

/** Inline link at the end of a SectionHeader description: never breaks mid link, and sits on its own
 *  line on desktop (right aligned), e.g. desc={<>Sentence. <HeaderLink href="/x">See more</HeaderLink></>} */
export function HeaderLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <span className="whitespace-nowrap lg:block">
      <Link href={href} className="sb-link font-bold text-[#0B3C5D] underline underline-offset-2 max-md:inline-flex max-md:min-h-[44px] max-md:items-center">
        {children}
      </Link>.
    </span>
  )
}

/** Section header: teal eyebrow, H2 with a navy to teal gradient span, description on the right, teal hairline.
 *  The description uses text-balance so no line ends with a single word left alone. */
export function SectionHeader({ eyebrow, title, accent, desc }: { eyebrow: string; title: string; accent: string; desc: ReactNode }) {
  return (
    <FadeIn className="mb-10 sm:mb-12">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#07655E] mb-3">{eyebrow}</p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
            {title}{' '}
            <span className="text-sb-grad">{accent}</span>
          </h2>
        </div>
        <p className="text-[15px] text-[#475569] leading-relaxed max-w-[380px] lg:text-right lg:pb-1 text-balance">{desc}</p>
      </div>
      <div className="mt-7 h-px" style={{ background: 'linear-gradient(90deg, #2EC4B6, rgba(56,189,248,0.3), transparent)' }} />
    </FadeIn>
  )
}

/** Small teal check in a tinted circle */
export function CheckBadge() {
  return (
    <span className="w-6 h-6 rounded-full bg-[#EBF9F8] border border-[#BAE8E4] flex items-center justify-center shrink-0">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 6l3 3 5-5" stroke="#0a756c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

/** Light card: white, card border, resting shadow; on hover lifts, teal border, teal top line grows */
export function LightCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`group relative bg-white/[0.82] backdrop-blur-[6px] border border-[#38BDF8]/[0.18] rounded-2xl p-6 overflow-hidden shadow-[0_1px_14px_rgba(11,60,93,0.06)] hover:-translate-y-[5px] hover:border-[#2EC4B6]/35 hover:shadow-[0_18px_44px_rgba(11,60,93,0.11)] transition-all duration-300 ${className}`}>
      <div className="absolute top-0 left-6 h-[2px] w-0 rounded-full bg-sb-accent group-hover:w-14 transition-all duration-500 ease-out" />
      {children}
    </div>
  )
}

/** Teal tinted icon tile used at the top of light cards */
export function IconTile({ children }: { children: ReactNode }) {
  return (
    <div
      className="sb-icon-badge w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[#0a756c]"
    >
      {children}
    </div>
  )
}

/** Dark CTA strip: dark gradient, dot texture, teal glow, 2px teal top accent line.
 *  Optional secondary button (outline style) next to the primary one. */
export function CtaBand({ title, text, href, label, secondary }: {
  title: string
  text: string
  href: string
  label: string
  secondary?: { href: string; label: string }
}) {
  return (
    <FadeIn>
      <div
        className="relative rounded-2xl overflow-hidden bg-sb-dark"
      >
        <ParticleNetwork />
        <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none bg-sb-accent" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8 sm:px-10 sm:py-10">
          <div className="text-center md:text-left">
            <h2 className="text-[clamp(22px,2.6vw,30px)] font-extrabold text-white leading-tight mb-2">{title}</h2>
            <p className="text-[15px] text-white/90">{text}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href={href}
              className="sb-btn-primary inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[15px]
                px-7 py-4 rounded-xl"
            >
              {label}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="sb-btn-glass inline-flex items-center justify-center gap-2 font-bold text-[15px]
                  px-7 py-4 rounded-xl"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

/** FAQPage JSON-LD for a list of questions (keep it built from the same array as the visible FAQ) */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}
