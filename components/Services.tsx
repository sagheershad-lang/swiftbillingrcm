'use client'
import { m } from 'framer-motion'
import Link from 'next/link'
import FadeIn from './FadeIn'

const services = [
  {
    title: 'Medical Billing',
    slug: 'medical-billing',
    linkLabel: 'Medical Billing',
    desc: 'Accurate and timely entry of patient charges and procedures. Every service is captured correctly so no revenue slips through the cracks.',
    tag: 'Zero Revenue Leakage',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="#2EC4B6" strokeWidth="1.6"/>
        <path d="M8 9h8M8 12h5M8 15h3" stroke="#2EC4B6" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M3 8h18" stroke="#2EC4B6" strokeWidth="1.3" strokeLinecap="round" opacity=".35"/>
      </svg>
    ),
  },
  {
    title: 'AR Follow-Up',
    slug: 'ar-follow-up',
    linkLabel: 'AR Follow-Up',
    desc: 'Our dedicated AR specialists systematically work every unpaid claim in the 30, 60, and 90+ day buckets until you are fully reimbursed.',
    tag: 'No Claim Left Behind',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M20 12a8 8 0 11-4.85-7.34" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M16 4h4v4" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2.5" fill="#2EC4B6"/>
      </svg>
    ),
  },
  {
    title: 'Denial Management',
    slug: 'denial-management',
    linkLabel: 'Denial Management',
    desc: 'We identify, appeal, and resubmit every denied claim with documented reasons, and track denial trends by payer to fix root causes fast.',
    tag: 'Appeal · Resubmit · Track',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7v6c0 4.97 3.58 9.63 8 10.93C16.42 22.63 20 17.97 20 13V7L12 3z"
          stroke="#2EC4B6" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#2EC4B6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Payment Posting',
    slug: 'payment-posting',
    linkLabel: 'Payment Posting',
    desc: 'Accurate posting of EOBs, ERAs, and patient payments with daily reconciliation to keep your books current and discrepancies caught immediately.',
    tag: 'Daily Reconciliation',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#2EC4B6" strokeWidth="1.6"/>
        <path d="M12 7v2M12 15v2M9.5 9.5A2 2 0 0112 8h1a2 2 0 010 4h-2a2 2 0 000 4h1a2 2 0 002-2"
          stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Provider Credentialing',
    slug: 'credentialing',
    linkLabel: 'Provider Credentialing',
    desc: 'Complete provider enrollment with all major commercial payers and Medicare/Medicaid. We handle all the paperwork so you can start billing sooner.',
    tag: 'All Major Payers',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2.5" stroke="#2EC4B6" strokeWidth="1.6"/>
        <circle cx="9" cy="12" r="2" fill="#2EC4B6"/>
        <path d="M13 11h4M13 14h3" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 9.5h18" stroke="#2EC4B6" strokeWidth="1.3" strokeLinecap="round" opacity=".35"/>
      </svg>
    ),
  },
  {
    title: 'Reporting & Analytics',
    slug: 'reporting-analytics',
    linkLabel: 'Reporting & Analytics',
    desc: 'Monthly dashboards on every KPI: days in AR, denial rates, collection rate, and net revenue per visit, with full transparency.',
    tag: 'Full Transparency',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M4 18V10M8 18V6M12 18v-5M16 18V9M20 18v-7"
          stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 10l4-4 4 3 4-5 4 3"
          stroke="#2EC4B6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">

      {/* Subtle top-right ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 right-0 w-[600px] h-[400px] opacity-[0.35]"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(46,196,182,0.12) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* ── Section header ─────────────────────────────────────────── */}
        <FadeIn className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-3">
                What We Offer
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
                Complete Revenue Cycle{' '}
                <br className="hidden sm:block" />
                <span style={{
                  background: 'linear-gradient(90deg, #0B3C5D 0%, #2EC4B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Management Services
                </span>
              </h2>
            </div>
            <p className="text-[15px] text-[#64748B] leading-relaxed max-w-[360px] lg:text-right lg:pb-1 text-balance">
              We manage every step from patient registration to final payment, so your team can focus entirely on patient care.
            </p>
          </div>
          {/* Hairline */}
          <div
            className="mt-7 h-px"
            style={{ background: 'linear-gradient(90deg, #2EC4B6, rgba(46,196,182,0.15), transparent)' }}
          />
        </FadeIn>

        {/* ── Service card grid ───────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 sm:mb-12">
          {services.map((s, i) => (
            <m.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative bg-white border border-[#E4EDF5] rounded-2xl p-6 flex flex-col cursor-default overflow-hidden
                shadow-[0_1px_14px_rgba(11,60,93,0.06)]
                hover:border-[#2EC4B6]/35
                hover:shadow-[0_18px_44px_rgba(11,60,93,0.11),0_0_0_1px_rgba(46,196,182,0.16)]
                transition-all duration-300"
            >
              {/* Top accent reveal on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full bg-[#2EC4B6]
                group-hover:w-16 transition-all duration-500 ease-out" />

              {/* Left border accent on hover */}
              <div className="absolute top-6 left-0 w-[3px] h-0 rounded-r-full bg-[#2EC4B6]
                group-hover:h-[calc(100%-48px)] transition-all duration-500 ease-out" />

              {/* Icon container */}
              <div
                className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center mb-5 shrink-0
                  border border-[#C8EFEC]
                  group-hover:shadow-[0_0_0_6px_rgba(46,196,182,0.07)]
                  transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #EBF9F8 0%, #DFF6F4 100%)' }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-[16.5px] font-extrabold text-[#0F172A] mb-2.5 leading-tight
                group-hover:text-[#0B3C5D] transition-colors duration-300">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] md:text-[13.5px] text-[#64748B] leading-relaxed flex-1 mb-5">
                {s.desc}
              </p>

              {/* Tag pill */}
              <div className="inline-flex items-center gap-1.5 w-fit
                text-[11px] font-bold tracking-wide uppercase
                text-[#0a756c] bg-[#EBF9F8] border border-[#BAE8E4]
                rounded-full px-3.5 py-[5px]">
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5.5l2 2 4-4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {s.tag}
              </div>

              {/* Descriptive link text — visible to Google and screen readers */}
              <Link
                href={`/services/${s.slug}`}
                style={{
                  color: '#2EC4B6',
                  fontSize: '13px',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'gap 0.2s ease',
                }}
                className="hover:underline mt-3 max-md:mt-0 max-md:min-h-[44px]"
              >
                Explore {s.linkLabel} →
              </Link>
            </m.div>
          ))}
        </div>

        {/* ── Bottom CTA strip ───────────────────────────────────────── */}
        <FadeIn delay={0.25}>
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
              className="absolute right-0 top-0 w-[320px] h-[160px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(46,196,182,0.20) 0%, transparent 65%)' }}
            />
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
              style={{ background: 'linear-gradient(90deg, #2EC4B6 0%, rgba(46,196,182,0.2) 60%, transparent 100%)' }}
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 px-5 py-5 sm:px-8 sm:py-6">
              {/* Left */}
              <div>
                <p className="text-[17px] font-extrabold text-white leading-tight mb-1">
                  Not sure where your revenue is leaking?
                </p>
                <p className="text-[15px] md:text-[13px] text-white/55">
                  Get a free audit in 24 hours and we&apos;ll show you exactly where your revenue is going.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[14px]
                    px-6 py-3 rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5 transition-all duration-200"
                  style={{ boxShadow: '0 0 24px rgba(46,196,182,0.40)' }}
                >
                  Free Audit in 24 Hours
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center justify-center gap-2 bg-white/[0.10] text-white font-bold text-[14px]
                    px-5 py-3 rounded-xl border border-white/20
                    hover:bg-white/[0.16] hover:border-white/35 hover:-translate-y-0.5
                    transition-all duration-200"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
