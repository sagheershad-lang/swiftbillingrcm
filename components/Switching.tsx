'use client'
import { m } from 'framer-motion'
import Link from 'next/link'
import FadeIn from './FadeIn'

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
    <section id="switching" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">

      {/* Ambient top-right glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[400px] opacity-40"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(46,196,182,0.10) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* ── Section header ─────────────────────────────────────────── */}
        <FadeIn className="mb-10 sm:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-3">
                Changing Billing Partners
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
                Switching Billing{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #0B3C5D 0%, #2EC4B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Companies?
                </span>
              </h2>
            </div>
            <p className="text-[15px] text-[#64748B] leading-relaxed max-w-[360px] lg:text-right lg:pb-1">
              Moving your billing should not interrupt your cash flow. Here is how we keep the switch smooth.
            </p>
          </div>
          <div
            className="mt-7 h-px"
            style={{ background: 'linear-gradient(90deg, #2EC4B6, rgba(46,196,182,0.15), transparent)' }}
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
              className="group relative bg-white border border-[#E4EDF5] rounded-2xl p-6 overflow-hidden
                shadow-[0_1px_14px_rgba(11,60,93,0.06)]
                hover:border-[#2EC4B6]/35 hover:shadow-[0_18px_44px_rgba(11,60,93,0.11)]
                transition-[border-color,box-shadow] duration-300"
            >
              {/* Top edge line that grows on hover */}
              <div className="absolute top-0 left-6 h-[2px] w-0 rounded-full bg-[#2EC4B6] group-hover:w-14 transition-all duration-500 ease-out" />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-[#BAE8E4] text-[#0a756c]"
                style={{ background: 'linear-gradient(135deg, #EBF9F8 0%, #DFF6F4 100%)' }}
              >
                {p.icon}
              </div>
              <h3 className="text-[16px] font-extrabold text-[#0F172A] mb-2 leading-tight">{p.title}</h3>
              <p className="text-[15px] md:text-[13.5px] text-[#64748B] leading-relaxed">{p.desc}</p>
            </m.div>
          ))}
        </div>

        {/* ── CTA strip ──────────────────────────────────────────────── */}
        <FadeIn delay={0.3}>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(115deg, #061d2e 0%, #0B3C5D 55%, #0e4f73 100%)' }}
          >
            {/* Dot texture */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='14' cy='14' r='1.1' fill='rgba(255%2C255%2C255%2C0.04)'/%3E%3C/svg%3E")`,
                backgroundSize: '28px 28px',
              }}
            />
            {/* Teal glow */}
            <div
              className="absolute right-0 top-0 w-[300px] h-[150px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(46,196,182,0.20) 0%, transparent 65%)' }}
            />
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
              style={{ background: 'linear-gradient(90deg, #2EC4B6 0%, rgba(46,196,182,0.2) 60%, transparent 100%)' }}
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 px-5 py-5 sm:px-8 sm:py-6">
              <p className="text-[15px] sm:text-[15.5px] font-semibold text-white/80 text-center sm:text-left">
                Thinking about switching? Start with a free audit of your current billing.
              </p>
              <Link
                href="/#audit"
                className="inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[14px]
                  px-6 py-3 rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5 transition-all duration-200
                  w-full sm:w-auto shrink-0"
                style={{ boxShadow: '0 0 24px rgba(46,196,182,0.40)' }}
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
