'use client'
import { motion } from 'framer-motion'
import BreakpointImage from './BreakpointImage'

const HERO_BLUR =
  'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQT/xAAjEAACAQMDBAMAAAAAAAAAAAABAgMABREEITEGE1GhIkFC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAABB/9oADAMBAAIRAxEAPwCi336d9BPcJpDiJHXskEqx859UeeodZk418wHjbb1R84xbIANg8yhsfr5S80c7sHYBjyfumh//2Q=='

const inlineStats = [
  { value: '98%+',  label: 'Clean Claim Rate'  },
  { value: '<24h',  label: 'Claim Submission'  },
  { value: '20+',   label: 'Specialties'       },
  { value: '4–9%',  label: 'Cost to Collect'   },
]

const specialties = [
  'Internal Medicine', 'Cardiology', 'Orthopedics',
  'Psychiatry', 'OB-GYN', 'Urgent Care', '+14 more',
]

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden" style={{ background: '#071e2e' }}>

      {/* ════════════════════════════════════════════════
          FULL-BLEED BACKGROUND IMAGE
      ════════════════════════════════════════════════ */}
      <div className="absolute inset-0">
        {/* Desktop / tablet image — only downloaded at md+ where it is shown */}
        <BreakpointImage
          media="(min-width: 768px)"
          src="/hero-home.png"
          alt="SwiftBilling RCM medical billing team"
          fill
          loading="eager"
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={HERO_BLUR}
          className="object-cover hero-image hidden md:block"
          sizes="100vw"
          style={{ filter: 'brightness(1.08) contrast(1.06) saturate(1.18)' }}
        />


        {/* Left-to-right overlay — solid on left (readable), fades out to reveal image on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #071e2e 0%, #071e2e 26%, rgba(11,60,93,0.94) 40%, rgba(11,60,93,0.65) 54%, rgba(11,60,93,0.22) 68%, rgba(11,60,93,0.04) 82%, transparent 94%)',
          }}
        />

        {/* Cool-blue wash — neutralises warm/brown tones in the gradient transition zone */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, transparent 25%, rgba(10,45,80,0.38) 42%, rgba(10,45,80,0.22) 60%, transparent 78%)',
          }}
        />

        {/* Bottom fade — merges into wave */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: '32%', background: 'linear-gradient(to top, #082d46 0%, transparent 100%)' }}
        />

        {/* Top vignette */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: '18%', background: 'linear-gradient(to bottom, rgba(7,30,46,0.55) 0%, transparent 100%)' }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />

        {/* Teal ambient glow — mid-left */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '20%', left: '0', width: '45%', height: '60%',
            background: 'radial-gradient(ellipse at 30% 50%, rgba(46,196,182,0.12) 0%, transparent 65%)',
          }}
        />

      </div>

      {/* ════════════════════════════════════════════════
          CONTENT LAYER
      ════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full min-h-screen flex flex-col max-w-[1200px] mx-auto px-6 sm:px-10 lg:pl-4 lg:pr-16 pt-[68px] pb-14">

        {/* ── Main content — vertically centered ── */}
        <div className="flex flex-col justify-center flex-1 py-6 sm:py-10">
          <div style={{ maxWidth: '580px' }}>

            {/* Badge */}
            <div
              className="hero-fade-up inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-bold tracking-[0.06em] uppercase text-[#2EC4B6] bg-[#2EC4B6]/10 border border-[#2EC4B6]/28 rounded-full px-4 py-2 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2EC4B6] animate-pulse shrink-0" />
              <span className="sm:hidden">HIPAA Compliant · US Billing Experts</span>
              <span className="hidden sm:inline">HIPAA Compliant · US Healthcare Billing Experts</span>
            </div>

            {/* ── Headline — bigger, bolder, LCP-safe ── */}
            <h1
              className="hero-slide-up text-white mb-6"
              style={{
                fontSize: 'clamp(36px, 4vw, 52px)',
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: '-0.025em',
                maxWidth: '560px',
              }}
            >
              Stop Losing Revenue<br />
              to Unpaid Claims —<br />
              <span
                style={{
                  background: 'linear-gradient(92deg, #2EC4B6 0%, #7eeee6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                We Recover It Fast.
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="hero-fade-up mb-8"
              style={{
                animationDelay: '0.2s',
                fontSize: 'clamp(15px, 1.55vw, 18px)',
                lineHeight: 1.75,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.70)',
                maxWidth: '520px',
              }}
            >
              From charge entry to payment posting — we manage your entire revenue cycle
              so you focus on patients, not paperwork.
            </p>

            {/* ── Stats row — more prominent ── */}
            <div
              className="hero-fade-up grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center mb-9"
              style={{ animationDelay: '0.32s', gap: '10px 0' }}
            >
              {inlineStats.map((s, i) => (
                <div key={s.label} className="flex items-center">
                  <div className="flex flex-col px-5 py-1 first:pl-0">
                    <span
                      className="font-extrabold leading-none tabular-nums"
                      style={{ fontSize: 'clamp(20px, 2.4vw, 28px)', color: '#2EC4B6' }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="mt-1 font-semibold uppercase tracking-[0.07em]"
                      style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.42)' }}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < inlineStats.length - 1 && (
                    <div
                      className="self-stretch shrink-0 hidden sm:block"
                      style={{ width: '1px', background: 'rgba(255,255,255,0.15)', margin: '6px 0' }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* ── CTAs ── */}
            <div className="hero-fade-up flex flex-col gap-3" style={{ animationDelay: '0.44s' }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#2EC4B6] text-[#071e2e] font-extrabold text-[15px] sm:text-[16px] px-7 py-[15px] rounded-xl transition-all duration-200 hover:bg-[#3dd9cb] hover:-translate-y-0.5 shadow-[0_0_48px_rgba(46,196,182,0.55)] hover:shadow-[0_0_80px_rgba(46,196,182,0.75)] w-full sm:w-auto"
                >
                  Get Free Audit in 24 Hours
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M3 8.5h11M9.5 4l4.5 4.5L9.5 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 font-bold text-[14px] sm:text-[15px] transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.22)',
                    color: 'rgba(255,255,255,0.88)',
                    padding: '15px 26px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  Book a Free Consultation
                </a>
              </div>
              <p className="text-[12px] text-white/32 font-medium pl-1 leading-relaxed">
                No contracts · No upfront fees · Response within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* ── Trust row — anchors the bottom ── */}
        <div className="hero-fade-up" style={{ animationDelay: '0.62s' }}>
          <div className="h-px mb-5" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.13) 0%, transparent 60%)' }} />
          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: 'rgba(255,255,255,0.28)' }}>
            Serving practices across all 50 states
          </p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((s) => (
              <span
                key={s}
                className="text-[11.5px] font-medium px-3 py-[5px] rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.52)',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          SINGLE FLOATING CARD — bottom-right, inside image
      ════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 1.1 }}
        className="absolute hidden lg:block rounded-2xl"
        style={{
          bottom: '80px',
          right: '6%',
          zIndex: 20,
          background: 'rgba(4,16,34,0.92)',
          border: '1px solid rgba(46,196,182,0.32)',
          backdropFilter: 'blur(22px)',
          boxShadow: '0 12px 36px rgba(0,0,0,0.55), 0 0 0 1px rgba(46,196,182,0.08)',
          padding: '16px 22px',
        }}
      >
        <div className="text-[24px] font-extrabold leading-none tabular-nums mb-1.5" style={{ color: '#2EC4B6' }}>
          &lt;30 Days
        </div>
        <div className="text-[11.5px] font-semibold" style={{ color: 'rgba(255,255,255,0.52)', letterSpacing: '0.04em' }}>
          Avg Reimbursement
        </div>
        <div className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>
          Top clients: 14 business days
        </div>
      </motion.div>

      {/* ── Bottom wave ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 0 480 60 720 40C960 20 1200 50 1440 30V60H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
  )
}
