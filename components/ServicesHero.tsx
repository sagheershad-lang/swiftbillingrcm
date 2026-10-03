'use client'
import { m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { value: '98%+', label: 'Clean Claim Rate' },
  { value: '24 to 48h', label: 'Submission Speed' },
  { value: '11',   label: 'Services' },
  { value: '50+',  label: 'Payer Networks' },
]

/* ── Text reveal variants (staggered bouncy slide-up) ─────────── */
const textContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
}
const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 320,
      damping: 18,
      mass: 0.7,
    },
  },
}

export default function ServicesHero() {
  return (
    <section id="main-content" className="relative overflow-hidden" style={{ background: '#0d2137' }}>
      {/* ── Background effects ─────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(46,196,182,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(46,196,182,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute -top-40 -right-40 w-[900px] h-[900px]"
          style={{ background: 'radial-gradient(circle, rgba(46,196,182,0.12) 0%, transparent 60%)' }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #2EC4B6 30%, rgba(46,196,182,0.25) 70%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 70% at 0% 50%, rgba(0,210,150,0.04) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Desktop full-bleed hero image — covers right half ───── */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.15 }}
        className="hidden lg:block absolute inset-0 z-[1] pointer-events-none"
      >
        <Image
          src="/Service.png"
          alt="Healthcare professional managing medical billing with SwiftBilling RCM"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{ objectPosition: 'center center', filter: 'brightness(1.05) saturate(1.1)' }}
        />
        {/* Left → right gradient: dark on left so text is readable, fades to reveal image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #0d2137 0%, #0d2137 30%, rgba(13,33,55,0.94) 45%, rgba(13,33,55,0.55) 60%, rgba(13,33,55,0.15) 78%, transparent 92%)',
            zIndex: 2,
          }}
        />
        {/* Top vignette */}
        <div className="absolute inset-x-0 top-0" style={{ height: '15%', background: 'linear-gradient(to bottom, #0d2137 0%, transparent 100%)', zIndex: 2 }} />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0" style={{ height: '25%', background: 'linear-gradient(to top, #0d2137 0%, transparent 100%)', zIndex: 2 }} />
      </m.div>

      {/* ── Main grid ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-stretch gap-10 xl:gap-14 pt-[96px] pb-10">

          {/* ════ LEFT — text ════════════════════════════════════ */}
          <m.div
            className="flex flex-col justify-center py-10 lg:py-14 min-w-0"
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >

            {/* Breadcrumb */}
            <m.div
              variants={textItem}
              className="flex items-center gap-2 text-[12px] text-white/32 mb-7"
            >
              <Link href="/" className="hover:text-[#2EC4B6] transition-colors duration-200">Home</Link>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-35">
                <path d="M3.5 2L6.5 5 3.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <span className="text-white/55">Services</span>
            </m.div>

            {/* Badge */}
            <m.div
              variants={textItem}
              className="inline-flex self-start items-center gap-2 rounded-full px-3 py-[5px] mb-5"
              style={{
                background: 'rgba(46,196,182,0.10)',
                border: '1px solid rgba(46,196,182,0.26)',
              }}
            >
              <span className="w-[6px] h-[6px] rounded-full bg-[#2EC4B6] animate-pulse shrink-0" />
              <span className="text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-[#2EC4B6]">
                Full-Service Revenue Cycle Management
              </span>
            </m.div>

            {/* H1 */}
            <m.h1
              variants={textItem}
              className="font-extrabold leading-[1.04] tracking-[-0.028em] mb-5"
              style={{ fontSize: 'clamp(36px, 5.5vw, 62px)' }}
            >
              <span className="text-white">End-to-End Billing,</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(92deg, #2EC4B6 0%, #80ece5 55%, #2EC4B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Expertly Managed.
              </span>
            </m.h1>

            {/* Subtext */}
            <m.p
              variants={textItem}
              className="text-[15px] md:text-[14.5px] leading-[1.75] text-white/52 max-w-[360px] mb-10"
            >
              One partner for your complete revenue cycle, from charge entry to
              practice growth, so you can focus entirely on care.
            </m.p>

            {/* Feature checklist */}
            <m.div
              variants={textItem}
              className="flex flex-col gap-3"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div
                    className="shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(46,196,182,0.15)', border: '1px solid rgba(46,196,182,0.35)' }}
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#2EC4B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
                    <span className="font-extrabold text-white">{s.value}</span>
                    {' '}{s.label}
                  </span>
                </div>
              ))}
            </m.div>
          </m.div>

          {/* Right column — empty spacer; image is full-bleed behind */}
          <div className="hidden lg:block" />
        </div>

        {/* Mobile image — outside the grid so it fills full width cleanly */}
        <div className="lg:hidden relative w-full h-[300px] overflow-hidden mt-4 mb-2">
          <Image
            src="/Service.png"
            alt="Healthcare professional managing medical billing"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: 'center center', filter: 'brightness(1.05) saturate(1.1)' }}
          />
          {/* Top fade */}
          <div className="absolute pointer-events-none" style={{ top: 0, left: 0, right: 0, height: '15%', background: 'linear-gradient(to bottom, #0d2137 0%, transparent 100%)' }} />
          {/* Bottom fade */}
          <div className="absolute pointer-events-none" style={{ bottom: 0, left: 0, right: 0, height: '25%', background: 'linear-gradient(to top, #0d2137 0%, transparent 100%)' }} />
        </div>
      </div>
    </section>
  )
}
