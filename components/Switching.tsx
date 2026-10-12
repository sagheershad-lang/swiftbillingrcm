'use client'
import { m } from 'framer-motion'
import Link from 'next/link'
import FadeIn from './FadeIn'
import ParticleNetwork from './ParticleNetwork'
import AmbientGlows from './AmbientGlows'

const points = [
  {
    title: 'Your Existing AR Is Covered',
    desc: 'We take over your existing AR so older claims keep getting worked.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12a9 9 0 1015.5-6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M19 3v4h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'A Planned Handoff',
    desc: 'We plan the handoff with your current biller and EHR so claims keep moving.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 8h13M13 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 16H7M11 12l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: '5 to 7 Business Days',
    desc: 'Onboarding takes 5 to 7 business days with a clear checklist.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="17" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 2v4M15 2v4M8 12l2 2 4-4M8 17h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'No Long-Term Contracts',
    desc: 'No long-term contracts, so you are never locked in.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 11V7a4 4 0 017.5-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Switching() {
  return (
    <section id="switching" className="py-16 md:py-24 bg-sb-white border-b border-[#E2E8F0] relative overflow-hidden">
      <AmbientGlows />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* ── Section header ─────────────────────────────────────────── */}
        <FadeIn className="mb-10 sm:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#07655E] mb-3">
                Changing Billing Partners
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
                Switching Billing{' '}
                <span className="text-sb-grad">
                  Companies?
                </span>
              </h2>
            </div>
            <p className="text-[15px] text-[#475569] leading-relaxed max-w-[360px] lg:text-right lg:pb-1 text-balance">
              Moving your billing should not interrupt your cash flow. Here is how we keep the switch smooth.
            </p>
          </div>
          <div
            className="mt-7 h-px"
            style={{ background: 'linear-gradient(90deg, #2EC4B6, rgba(56,189,248,0.3), transparent)' }}
          />
        </FadeIn>

        {/* ── Cards ──────────────────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {points.map((p, i) => (
            <m.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/[0.82] backdrop-blur-[6px] border border-[#38BDF8]/[0.18] rounded-2xl p-6 overflow-hidden
                shadow-[0_1px_14px_rgba(11,60,93,0.06)]
                hover:border-[#2EC4B6]/35 hover:shadow-[0_18px_44px_rgba(11,60,93,0.11)]
                transition-[border-color,box-shadow] duration-300"
            >
              {/* Top edge line that grows on hover */}
              <div className="absolute top-0 left-6 h-[2px] w-0 rounded-full bg-sb-accent group-hover:w-14 transition-all duration-500 ease-out" />

              <div
                className="sb-icon-badge w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[#0a756c]"
              >
                {p.icon}
              </div>
              <h3 className="text-[16px] font-extrabold text-[#0F172A] mb-2 leading-tight">{p.title}</h3>
              <p className="text-[15px] md:text-[13.5px] text-[#475569] leading-relaxed">{p.desc}</p>
            </m.div>
          ))}
        </div>

        {/* ── CTA strip ──────────────────────────────────────────────── */}
        <FadeIn delay={0.3}>
          <div
            className="relative rounded-2xl overflow-hidden bg-sb-dark"
          >
            <ParticleNetwork />
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none bg-sb-accent"
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 px-5 py-5 sm:px-8 sm:py-6">
              <p className="text-[15px] sm:text-[15.5px] font-semibold text-white/80 text-center sm:text-left">
                Thinking about switching? Start with a free audit of your current billing.
              </p>
              <Link
                href="/#contact-form"
                className="sb-btn-primary inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[14px]
                  px-6 py-3 rounded-xl
                  w-full sm:w-auto shrink-0"
              >
                Get Your Free Audit
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
