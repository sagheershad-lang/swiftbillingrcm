'use client'
import { m } from 'framer-motion'
import FadeIn from './FadeIn'
import ParticleNetwork from './ParticleNetwork'
import AmbientGlows from './AmbientGlows'

const trustCards = [
  {
    title: 'Transparent Monthly Reporting',
    desc: 'Clear KPI dashboards every month covering collections, denial rates, AR aging, and claim status, so you always know exactly where your revenue stands.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="12" width="4" height="8" rx="1" stroke="#2EC4B6" strokeWidth="1.5"/>
        <rect x="9" y="7" width="4" height="13" rx="1" stroke="#2EC4B6" strokeWidth="1.5"/>
        <rect x="16" y="2" width="4" height="18" rx="1" stroke="#2EC4B6" strokeWidth="1.5"/>
        <path d="M2 17l5-5 4 3 5-6 4-3" stroke="#2EC4B6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity=".45"/>
      </svg>
    ),
  },
  {
    title: 'Dedicated Account Management',
    desc: 'A single named account manager who knows your practice, your payers, and your billing patterns. One contact with full accountability at every step.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="7" r="4" stroke="#2EC4B6" strokeWidth="1.5"/>
        <path d="M3 19c0-3.31 3.58-6 8-6s8 2.69 8 6" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17.5" cy="5.5" r="3" fill="#2EC4B6" fillOpacity=".15" stroke="#2EC4B6" strokeWidth="1.3"/>
        <path d="M16 5.5l1 1 2-2" stroke="#2EC4B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Faster Claim Resolution',
    desc: 'Systematic AR follow-up and proactive denial management keep claims moving through the cycle, so revenue reaches your account faster instead of months later.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="#2EC4B6" strokeWidth="1.5"/>
        <path d="M11 6v5l3 3" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.5 2.5l3 2-1.5 3" stroke="#2EC4B6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity=".5"/>
      </svg>
    ),
  },
  {
    title: 'Specialty-Specific Expertise',
    desc: 'Certified coders trained in your specialty\'s exact CPT and ICD-10 code sets. Accurate coding up front means fewer rejections and maximum reimbursement.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L4 5.5v5c0 4.42 3.13 8.56 7 9.5 3.87-.94 7-5.08 7-9.5v-5L11 2z" stroke="#2EC4B6" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8.5 11h5M11 8.5v5" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'HIPAA-Compliant Workflows',
    desc: 'Every process, system, and team member operates under strict HIPAA standards. A signed BAA is provided with every client engagement, without exception.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="5" y="9" width="12" height="10" rx="2" stroke="#2EC4B6" strokeWidth="1.5"/>
        <path d="M8 9V6.5a3 3 0 016 0V9" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="14" r="1.5" fill="#2EC4B6"/>
        <path d="M11 14v2" stroke="#2EC4B6" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Denial Reduction Focus',
    desc: 'Every denied claim is reviewed, corrected, and resubmitted with a documented appeal. We also track root causes to stop the same denial from recurring.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M6 3h7l4 4v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#2EC4B6" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M13 3v4h4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinejoin="round" opacity=".5"/>
        <path d="M8 13l2 2 4-4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const pillars = [
  { n: '98%', label: 'Clean Claim Rate' },
  { n: '< 30', label: 'Days to First Payment' },
  { n: '20+', label: 'Specialties Served' },
  { n: '5 to 7', label: 'Business Days to Onboard' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-sb-light border-b border-[#E2E8F0] relative overflow-hidden">
      <AmbientGlows variant="b" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* ── Section header ─────────────────────────────────────────── */}
        <FadeIn className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#07655E] mb-3">
                Why Practices Choose Us
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
                Built Around{' '}
                <span className="text-sb-grad">
                  Transparency &amp; Performance
                </span>
              </h2>
            </div>
            <p className="text-[15px] text-[#475569] leading-relaxed max-w-[380px] lg:text-right lg:pb-1 text-balance">
              Focused on long-term provider relationships, operational clarity, and reliable billing workflows, not just short-term metrics.
            </p>
          </div>
          <div className="mt-7 h-px" style={{ background: 'linear-gradient(90deg, #2EC4B6, rgba(56,189,248,0.3), transparent)' }} />
        </FadeIn>

        {/* ── Trust cards 3×2 grid ───────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {trustCards.map((c, i) => (
            <m.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/[0.82] backdrop-blur-[6px] border border-[#38BDF8]/[0.18] rounded-2xl p-6 flex flex-col cursor-default
                shadow-[0_1px_12px_rgba(11,60,93,0.05)]
                hover:border-[#2EC4B6]/35
                hover:shadow-[0_16px_40px_rgba(11,60,93,0.10),0_0_0_1px_rgba(46,196,182,0.13)]
                transition-all duration-300 overflow-hidden"
            >
              {/* Top teal reveal */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full bg-sb-accent
                group-hover:w-14 transition-all duration-500 ease-out" />

              {/* Icon badge */}
              <div
                className="sb-icon-badge w-[50px] h-[50px] rounded-xl flex items-center justify-center mb-4 shrink-0 transition-all duration-300
                  group-hover:shadow-[0_0_0_5px_rgba(46,196,182,0.07)]"
              >
                {c.icon}
              </div>

              {/* Text */}
              <h3 className="text-[15px] font-extrabold text-[#0F172A] leading-snug mb-2.5 relative z-10">
                {c.title}
              </h3>
              <p className="text-[15px] md:text-[13.5px] text-[#475569] leading-[1.75] flex-1 relative z-10">
                {c.desc}
              </p>
            </m.div>
          ))}
        </div>

        {/* ── Philosophy strip ───────────────────────────────────────── */}
        <FadeIn delay={0.1} className="mb-7 sm:mb-10">
          <div
            className="relative rounded-2xl overflow-hidden bg-sb-dark"
          >
            <ParticleNetwork />
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] bg-sb-accent"
            />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] items-center gap-6 sm:gap-8 px-5 py-5 sm:px-8 sm:py-7">

              {/* Left: philosophy quote */}
              <div className="flex items-start gap-4">
                <div
                  className="w-[42px] h-[42px] rounded-xl flex items-center justify-center shrink-0 border border-[#5EF2E3]/40"
                  style={{ background: 'rgba(7,42,66,0.3)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9.5C3 6.46 5.46 4 8.5 4H9v2h-.5C6.57 6 5 7.57 5 9.5V10h3v4H3v-4.5zM10 9.5C10 6.46 12.46 4 15.5 4H16v2h-.5C13.57 6 12 7.57 12 9.5V10h3v4h-5v-4.5z" fill="#5EF2E3" opacity=".85"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-medium text-white/85 leading-[1.70] max-w-[600px]">
                    We don&apos;t measure success by how many clients we sign. We measure it by how consistently we improve their collections, reduce their administrative burden, and earn their long-term trust.
                  </p>
                  <p className="text-[11.5px] text-[#7FF5EA] font-bold mt-2.5 uppercase tracking-[0.10em]">
                    Sam S., Founder · SwiftBilling RCM
                  </p>
                </div>
              </div>

              {/* Right: 4 stat pills */}
              <div className="grid grid-cols-2 gap-2.5 shrink-0">
                {pillars.map(p => (
                  <div
                    key={p.label}
                    className="bg-[#072A42]/40 border border-white/[0.14] rounded-xl px-4 py-3 text-center
                      hover:bg-[#072A42]/40 transition-colors duration-200"
                  >
                    <p className="text-[18px] font-extrabold text-[#5EF2E3] leading-none mb-1">{p.n}</p>
                    <p className="text-[10.5px] text-white/85 font-medium uppercase tracking-wide">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Bottom trust bar ───────────────────────────────────────── */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E4EDF5]">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#2EC4B6]/15 border border-[#BAE8E4] flex items-center justify-center shrink-0">
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5 4-4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[15px] md:text-[13px] text-[#475569] font-medium">
                Serving internal medicine, cardiology, family medicine, urgent care, psychiatry, and 15+ other specialties.
              </p>
            </div>
            <a
              href="#contact"
              className="sb-link inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0B3C5D] max-md:min-h-[44px]"
            >
              See if we&apos;re right for your practice
              <svg className="sb-arrow" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
