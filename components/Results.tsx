'use client'
import { useEffect, useRef, useState } from 'react'
import { m, useInView, useReducedMotion } from 'framer-motion'
import FadeIn from './FadeIn'

function AnimatedNumber({
  target,
  prefix = '',
  suffix = '',
  duration = 1.8,
}: {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  // Start at target so SSR & initial client render show the real number (no 0 flash)
  const [n, setN] = useState(target)
  const hasRun = useRef(false)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    // Reduced motion: keep showing the final number, no count-up
    if (!inView || hasRun.current || reduceMotion) return
    hasRun.current = true
    let start: number | null = null
    const total = duration * 1000

    // First frame has progress 0, so it resets the number to 0 before counting up
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / total, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setN(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration, reduceMotion])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{n}{suffix}
    </span>
  )
}

const heroStats = [
  {
    prefix: '+',
    value: 35,
    suffix: '%',
    label: 'Increase in Collections',
    desc: 'Revenue increase our team has delivered within 90 days. Individual results vary by practice.',
  },
  {
    prefix: '−',
    value: 40,
    suffix: '%',
    label: 'Reduction in AR Days',
    desc: 'Reduction in AR days our dedicated AR team has delivered. Results vary by starting AR age.',
  },
  {
    prefix: '<',
    value: 30,
    suffix: ' Days',
    label: 'Average Reimbursement',
    desc: 'Most claims our team handles are paid within 30 days, some in as few as 14 business days.',
  },
]

const supportingStats = [
  {
    value: '98%',
    label: 'Clean Claim Accuracy',
    desc: 'Industry-leading first-pass acceptance rate, reducing costly denials.',
  },
  {
    value: '4–9%',
    label: 'Cost to Collect',
    desc: 'Versus 14–18% in-house. You keep far more of every dollar collected.',
  },
  {
    value: '20+',
    label: 'Specialties Supported',
    desc: 'From internal medicine to surgery — specialty-specific billing expertise for every claim.',
  },
  {
    value: 'CAQH',
    label: 'Credentialing Ready',
    desc: 'Full CAQH credentialing, Medicare/Medicaid enrollment, and multi-state provider setup.',
  },
]

export default function Results() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(150deg, #07294a 0%, #0B3C5D 50%, #0d4470 100%)' }}>
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      {/* Top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] opacity-20" style={{ background: 'radial-gradient(ellipse, rgba(46,196,182,0.45) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <FadeIn className="text-center mb-10 sm:mb-16">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2EC4B6] mb-3">Proven Client Results</p>
          <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold text-white leading-tight tracking-tight mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-[16px] text-white/50 max-w-[480px] mx-auto leading-relaxed">
            Based on our billing team&apos;s results across multiple practices — measurable improvements from the very first month.
          </p>
        </FadeIn>

        {/* HERO STATS — 3 large animated number cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
          {heroStats.map((s, i) => (
            <m.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative bg-white/[0.06] border border-white/[0.1] rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden cursor-default group hover:bg-white/[0.1] hover:border-[#2EC4B6]/50 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #2EC4B6, transparent)' }} />
              {/* Corner glow on hover */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle, rgba(46,196,182,0.18) 0%, transparent 70%)' }} />

              {/* Animated number */}
              <div
                className="text-[clamp(44px,9vw,96px)] font-extrabold leading-none tracking-tight mb-3 sm:mb-4"
                style={{ color: '#2EC4B6', textShadow: '0 0 80px rgba(46,196,182,0.3)' }}
              >
                <AnimatedNumber target={s.value} prefix={s.prefix} suffix={s.suffix} duration={1.6} />
              </div>

              <h3 className="text-[16px] sm:text-[18px] font-extrabold text-white mb-2 leading-tight">{s.label}</h3>
              <p className="text-[15px] md:text-[13px] text-white/50 leading-relaxed">{s.desc}</p>
            </m.div>
          ))}
        </div>

        {/* SUPPORTING STATS — 4 smaller cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 sm:mb-14">
          {supportingStats.map((s, i) => (
            <m.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/[0.05] border border-white/[0.08] rounded-2xl p-6 cursor-default hover:bg-white/[0.09] hover:border-[#2EC4B6]/30 transition-all duration-300"
            >
              <div className="text-[28px] sm:text-[38px] font-extrabold text-[#2EC4B6] leading-none tracking-tight mb-2">{s.value}</div>
              <h3 className="text-[13px] font-bold text-white mb-1.5">{s.label}</h3>
              <p className="text-[15px] md:text-[12px] text-white/40 leading-relaxed">{s.desc}</p>
            </m.div>
          ))}
        </div>

        {/* Trust line */}
        <FadeIn delay={0.2} className="flex items-center justify-center gap-2 mb-10">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="#2EC4B6" strokeWidth="1.3"/>
            <path d="M2 7h10M7 2c-1.3 1.8-2 3.5-2 5s.7 3.2 2 5M7 2c1.3 1.8 2 3.5 2 5s-.7 3.2-2 5" stroke="#2EC4B6" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <span className="text-[13px] font-semibold text-white/40 tracking-wide">Serving clinics across the United States · All 50 states · All major specialties</span>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.35} className="text-center">
          <p className="text-[15px] text-white/50 mb-5">Ready to see these results in your own practice?</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-sm sm:max-w-none mx-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[15px] sm:text-[16px] px-7 sm:px-9 py-4 sm:py-[18px] rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5 transition-all duration-200 shadow-[0_0_50px_rgba(46,196,182,0.45)]"
            >
              See Results in Your Practice
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M3 8.5h11M9.5 4l4.5 4.5L9.5 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="tel:+15127377488"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold text-[14px] sm:text-[15px] px-7 sm:px-8 py-4 sm:py-[18px] rounded-xl border border-white/20 hover:bg-white/16 hover:border-white/35 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
            >
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2.5 2h2.8l1.2 3-1.8 1.1a8 8 0 003.2 3.2L9 7.5l3 1.2V11a1 1 0 01-1 1A10.5 10.5 0 011.5 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Call Us Now
            </a>
          </div>
          <p className="text-[12px] text-white/30 mt-4 font-medium">No contracts · No upfront fees · Response within 24 hours</p>
        </FadeIn>
      </div>
    </section>
  )
}
