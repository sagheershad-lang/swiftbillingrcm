'use client'
import { m } from 'framer-motion'
import FadeIn from './FadeIn'

const steps = [
  {
    time: 'Same Day',
    title: 'Submit Data',
    desc: 'Securely share patient encounter data and charge sheets through your EHR or a secure method we agree on with you. We integrate with all major systems, so there is no disruption to your workflow.',
    outcome: 'HIPAA-Secure Transfer',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 15V5M8 9l4-4 4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 17v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="white" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    time: '24 to 48 Hours',
    title: 'Process Claims',
    desc: 'Our certified coders review, scrub, and electronically submit clean claims within 24 to 48 hours for maximum first-pass acceptance.',
    outcome: '98% First-Pass Rate',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.7" opacity=".85"/>
        <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    time: 'Ongoing',
    title: 'Follow-Up & Denials',
    desc: 'We track every claim, aggressively follow up on unpaid balances at every AR bucket, and appeal every denial with documented evidence.',
    outcome: 'No Claim Left Behind',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M20 12a8 8 0 11-5-7.4" stroke="white" strokeWidth="1.7" strokeLinecap="round" opacity=".5"/>
        <path d="M16 4h4v4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8v4l3 3" stroke="white" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    time: '< 30 Days',
    title: 'Get Paid',
    desc: 'Payments posted accurately, patient balances resolved, and a clear monthly KPI report delivered so you have complete financial visibility.',
    outcome: 'Full Revenue Visibility',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.7" opacity=".85"/>
        <path d="M12 7v2M12 15v2M9.5 9.5A2 2 0 0112 8h1a2 2 0 010 4h-2a2 2 0 000 4h1a2 2 0 002-2"
          stroke="white" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">

      {/* Ambient bottom-left glow */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-[500px] h-[400px] opacity-40"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(46,196,182,0.10) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* ── Section header ─────────────────────────────────────────── */}
        <FadeIn className="mb-10 sm:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-3">
                How It Works
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
                From Data to{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #0B3C5D 0%, #2EC4B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Dollars in 4 Steps
                </span>
              </h2>
            </div>
            <p className="text-[15px] text-[#64748B] leading-relaxed max-w-[360px] lg:text-right lg:pb-1 text-balance">
              A streamlined, transparent process that keeps you informed and keeps your revenue flowing.
            </p>
          </div>
          <div
            className="mt-7 h-px"
            style={{ background: 'linear-gradient(90deg, #2EC4B6, rgba(46,196,182,0.15), transparent)' }}
          />
        </FadeIn>

        {/* ── Steps ──────────────────────────────────────────────────── */}
        <div className="relative mb-12">

          {/* ── Desktop connector (behind icons) ──
              Same 4 column grid and gap as the steps below, so each segment belongs to its own gap:
              it runs from the right edge of one 64px icon to the left edge of the next
              (50% + 32px of the column, width = column + 20px gap - 64px), and its arrow sits at
              the segment's midpoint. Stays centred at every desktop width; hidden below lg. */}
          <div className="hidden lg:grid grid-cols-4 gap-5 absolute inset-x-0 top-[31px] z-0 pointer-events-none" aria-hidden="true">
            {[
              'linear-gradient(90deg, #2EC4B6 0%, rgba(46,196,182,0.6) 100%)',
              'rgba(46,196,182,0.6)',
              'linear-gradient(90deg, rgba(46,196,182,0.6) 0%, #2EC4B6 100%)',
            ].map((bg, i) => (
              <div key={i} className="relative h-[2px]">
                <div
                  className="absolute top-0 h-[2px] rounded-full"
                  style={{ left: 'calc(50% + 32px)', width: 'calc(100% + 20px - 64px)', background: bg }}
                >
                  <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="block">
                      <path d="M4 2.5l4 3.5-4 3.5" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <m.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Icon badge */}
                <m.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="w-[64px] h-[64px] rounded-2xl mb-4 flex items-center justify-center shrink-0 relative"
                  style={{
                    background: 'linear-gradient(135deg, #0B3C5D 0%, #1a5c87 100%)',
                    boxShadow: '0 8px 28px rgba(11,60,93,0.28), 0 0 0 3px rgba(46,196,182,0.20)',
                  }}
                >
                  {s.icon}
                  {/* Teal inner glow on top-right */}
                  <div
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(46,196,182,0.55) 0%, transparent 70%)' }}
                  />
                </m.div>

                {/* Card */}
                <m.div
                  whileHover={{ y: -4, boxShadow: '0 18px 44px rgba(11,60,93,0.11), 0 0 0 1px rgba(46,196,182,0.16)' }}
                  transition={{ duration: 0.25 }}
                  className="group w-full flex-1 bg-white border border-[#E4EDF5] rounded-2xl px-5 pt-5 pb-5 flex flex-col
                    shadow-[0_1px_14px_rgba(11,60,93,0.06)]
                    hover:border-[#2EC4B6]/35
                    transition-colors duration-300 overflow-hidden relative"
                >
                  {/* Top accent reveal */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full bg-[#2EC4B6]
                    group-hover:w-12 transition-all duration-500 ease-out" />

                  {/* Time badge */}
                  <div className="inline-flex items-center gap-1 self-center mb-3
                    bg-[#EBF9F8] border border-[#BAE8E4] rounded-full px-2.5 py-[3px]">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <circle cx="5" cy="5" r="4" stroke="#2EC4B6" strokeWidth="1.2"/>
                      <path d="M5 3v2l1.2 1.2" stroke="#2EC4B6" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-[10.5px] font-bold text-[#0a756c] tracking-wide">{s.time}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[15.5px] font-extrabold text-[#0F172A] mb-2 leading-tight
                    group-hover:text-[#0B3C5D] transition-colors duration-300">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] md:text-[12.5px] text-[#64748B] leading-relaxed flex-1 mb-4 relative z-10">
                    {s.desc}
                  </p>

                  {/* Outcome pill */}
                  <div className="inline-flex items-center gap-1.5 self-center
                    text-[11px] font-bold text-[#0B3C5D] bg-[#F1F5F9]
                    border border-[#E2E8F0] rounded-full px-3 py-[4px]">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5 4-4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {s.outcome}
                  </div>
                </m.div>
              </m.div>
            ))}
          </div>
        </div>

        {/* ── CTA strip ──────────────────────────────────────────────── */}
        <FadeIn delay={0.3}>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(110deg, #051926 0%, #0B3C5D 55%, #0e4f73 100%)' }}
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
              {/* Left: 4-step summary chips — hidden on mobile */}
              <div className="hidden sm:flex flex-wrap items-center gap-2">
                {steps.map((s, i) => (
                  <div key={s.title} className="flex items-center gap-1.5">
                    <span className="text-[12px] font-semibold text-white/60">{s.title}</span>
                    {i < steps.length - 1 && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 opacity-30">
                        <path d="M3 2l4 3-4 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#audit"
                className="inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[14px]
                  px-6 py-3 rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5 transition-all duration-200
                  w-full sm:w-auto shrink-0"
                style={{ boxShadow: '0 0 24px rgba(46,196,182,0.40)' }}
              >
                Start Your Free Audit
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
