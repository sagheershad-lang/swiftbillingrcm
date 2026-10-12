'use client'
import { m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ParticleNetwork from './ParticleNetwork'

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
    <section id="main-content" className="relative overflow-hidden bg-sb-dark">
      <ParticleNetwork />

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
          className="object-cover hero-image-mask"
          sizes="100vw"
          style={{ objectPosition: 'center center', filter: 'brightness(1.05) saturate(1.1)' }}
        />
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
              className="flex items-center gap-2 text-[12px] text-white mb-7"
            >
              <Link href="/" className="sb-link-dark">Home</Link>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-70">
                <path d="M3.5 2L6.5 5 3.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <span className="text-white">Services</span>
            </m.div>

            {/* Badge */}
            <m.div
              variants={textItem}
              className="inline-flex self-start items-center gap-2 rounded-full px-3 py-[5px] mb-5"
              style={{
                background: 'rgba(7,42,66,0.3)',
                border: '1px solid rgba(127,245,234,0.45)',
              }}
            >
              <span className="w-[6px] h-[6px] rounded-full bg-[#5EF2E3] animate-pulse shrink-0" />
              <span className="text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-[#5EF2E3]">
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
              <span className="text-sb-grad-dark">
                Expertly Managed.
              </span>
            </m.h1>

            {/* Subtext */}
            <m.p
              variants={textItem}
              className="text-[15px] md:text-[14.5px] leading-[1.75] text-white max-w-[360px] mb-10"
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
                    style={{ background: 'rgba(7,42,66,0.3)', border: '1px solid rgba(94,242,227,0.5)' }}
                  >
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#5EF2E3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '14px', color: '#FFFFFF' }}>
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
            className="object-cover hero-image-mask-mobile"
            sizes="100vw"
            style={{ objectPosition: 'center center', filter: 'brightness(1.05) saturate(1.1)' }}
          />
        </div>
      </div>
    </section>
  )
}
