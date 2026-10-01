'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import FadeIn from './FadeIn'

const bullets = [
  { title: 'CAQH Credentialing',    desc: 'Multi-state provider enrollment & insurance panel setup across all major payers.' },
  { title: 'Transparent Reporting', desc: 'Monthly KPI dashboards with full visibility into claims, payments, and AR — delivered every month.' },
  { title: 'Dedicated Manager',     desc: 'A single point of contact who knows your practice, your payers, and your goals.' },
  { title: 'Proven Track Record',   desc: '98% clean claim rate and measurable revenue improvements from the first month.' },
  { title: 'Fast Onboarding',       desc: 'Actively billing within 5 business days of sign-up. Credentialing handled in parallel from day one.' },
]

function CountUp({ target, prefix = '', suffix = '', isStatic = false, staticVal = '' }: {
  target: number; prefix?: string; suffix?: string; isStatic?: boolean; staticVal?: string
}) {
  // Start at target so SSR & initial client render show the real number (no 0 flash)
  const [n, setN] = useState(target)
  const hasRun = useRef(false)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true })

  useEffect(() => {
    if (!inView || isStatic || hasRun.current) return
    hasRun.current = true
    let start: number | null = null
    const duration = 1800
    // First frame has progress 0, so it resets the number to 0 before counting up
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setN(Math.round(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, isStatic])

  return (
    <span ref={ref} className="tabular-nums">
      {isStatic ? staticVal : `${prefix}${n}${suffix}`}
    </span>
  )
}

const highlights = [
  { target: 0,  prefix: '', suffix: '',  label: 'Credentialing',   isStatic: true,  staticVal: 'CAQH' },
  { target: 98, prefix: '', suffix: '%', label: 'Clean Claim Rate', isStatic: false, staticVal: '' },
  { target: 0,  prefix: '', suffix: '',  label: 'Specialties',      isStatic: true,  staticVal: '20+' },
]

export default function About() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">

      {/* Ambient glow — top left */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-[500px] h-[400px] opacity-40"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(46,196,182,0.09) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-stretch">

          {/* ── Left: content ──────────────────────────────────────── */}
          <FadeIn direction="left">

            {/* Header */}
            <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-3">
              Our Experience
            </p>
            <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight mb-5">
              Experienced Billing{' '}
              <span style={{
                background: 'linear-gradient(90deg, #0B3C5D 0%, #2EC4B6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Professionals You Can Trust
              </span>
            </h2>

            {/* Hairline */}
            <div
              className="mb-6 h-px w-24"
              style={{ background: 'linear-gradient(90deg, #2EC4B6, transparent)' }}
            />

            <p className="text-[15.5px] text-[#64748B] leading-[1.8] mb-4">
              Our certified billing team specializes in CAQH credentialing, multi-state provider enrollment, and insurance panel setup — helping practices get contracted and start billing faster across all major payers.
            </p>
            <p className="text-[15.5px] text-[#64748B] leading-[1.8] mb-9">
              We&apos;re committed to one goal: maximizing your revenue. Every client gets a dedicated account manager, transparent monthly reporting, and a billing team that treats your practice like their own.
            </p>

            {/* Bullets */}
            <div className="flex flex-col gap-3.5 mb-10">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3.5 group"
                >
                  {/* Icon */}
                  <div
                    className="w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 mt-[2px]
                      border border-[#BAE8E4] transition-all duration-300
                      group-hover:shadow-[0_0_0_4px_rgba(46,196,182,0.08)]"
                    style={{ background: 'linear-gradient(135deg, #EBF9F8, #DFF6F4)' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5l2 2 4-4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Text */}
                  <div>
                    <span className="text-[14.5px] font-bold text-[#0F172A]">{b.title}</span>
                    <span className="text-[14.5px] text-[#64748B] font-normal"> — {b.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[15px]
                  px-7 py-3.5 rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5
                  transition-all duration-200"
                style={{ boxShadow: '0 0 32px rgba(46,196,182,0.35)' }}
              >
                Get Free Revenue Audit
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-[#0B3C5D] font-bold text-[15px]
                  px-7 py-3.5 rounded-xl border border-[#D1DBE8]
                  hover:border-[#0B3C5D]/30 hover:bg-[#F8FAFC] hover:-translate-y-0.5
                  transition-all duration-200"
              >
                View Our Services
              </a>
            </div>
          </FadeIn>

          {/* ── Right: photo + overlays ─────────────────────────────── */}
          <FadeIn direction="right" delay={0.15} className="h-full">
            <div className="relative h-full">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0B3C5D]/8 to-[#2EC4B6]/8 rounded-3xl blur-2xl pointer-events-none" />

              {/* Photo wrapper */}
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[280px] sm:min-h-[420px] lg:min-h-[580px]">
                <Image
                  src="/about-photo.png"
                  alt="SwiftBilling RCM experienced medical billing professionals"
                  fill
                  priority={false}
                  loading="lazy"
                  sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                  quality={85}
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/60 via-transparent to-transparent" />
                <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white/60 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-white/60 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/50 to-transparent" />

                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {highlights.map(h => (
                      <div key={h.label} className="text-center bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl py-2.5 sm:py-3.5 border border-white/20
                        hover:bg-white/15 transition-colors duration-300">
                        <p className="text-[16px] sm:text-[22px] font-extrabold text-[#2EC4B6] leading-none mb-0.5 sm:mb-1">
                          <CountUp target={h.target} prefix={h.prefix} suffix={h.suffix} isStatic={h.isStatic} staticVal={h.staticVal} />
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-white/75 font-semibold uppercase tracking-wide">{h.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* HIPAA floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-3 sm:-top-4 right-2 sm:-right-4"
              >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] px-4 py-3 flex items-center gap-2.5"
                style={{ boxShadow: '0 12px 40px rgba(11,60,93,0.16)' }}
              >
                <div className="w-8 h-8 rounded-xl bg-[#2EC4B6]/15 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5L2 4v4c0 3.31 2.69 6 6 6s6-2.69 6-6V4L8 1.5z" fill="#2EC4B6" opacity=".2" stroke="#2EC4B6" strokeWidth="1.4" strokeLinejoin="round"/>
                    <path d="M5.5 8l2 2 3-3" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-extrabold text-[#0F172A] leading-tight">HIPAA Certified</p>
                  <p className="text-[10px] text-[#64748B] font-medium">100% Compliant</p>
                </div>
              </motion.div>
              </motion.div>

              {/* CPC badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="absolute -bottom-3 sm:-bottom-4 left-2 sm:-left-4"
              >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] px-4 py-3 flex items-center gap-2.5"
                style={{ boxShadow: '0 12px 40px rgba(11,60,93,0.16)' }}
              >
                <div className="w-8 h-8 rounded-xl bg-[#0B3C5D]/10 flex items-center justify-center shrink-0">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <circle cx="7.5" cy="7.5" r="6" stroke="#0B3C5D" strokeWidth="1.4"/>
                    <path d="M4.5 7.5l2 2 4-4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-extrabold text-[#0F172A] leading-tight">CPC Certified</p>
                  <p className="text-[10px] text-[#64748B] font-medium">ICD-10 · CPT Coders</p>
                </div>
              </motion.div>
              </motion.div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
