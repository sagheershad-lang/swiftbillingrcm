'use client'
import { useEffect, useRef, useState } from 'react'
import { m, useInView, useReducedMotion } from 'framer-motion'
import FadeIn from './FadeIn'

const stats = [
  {
    value: 0,
    suffix: '',
    label: 'CAQH Credentialing',
    desc: 'Multi-state provider enrollment & insurance panel setup',
    staticVal: '✓',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v6c0 4.97 3.58 9.63 8 10.93C15.42 21.63 19 16.97 19 12V6L11 2z" fill="#0B3C5D" opacity=".12" stroke="#0B3C5D" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7.5 11l2.5 2.5 5-5" stroke="#2EC4B6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: 98,
    suffix: '%',
    label: 'Clean Claim Rate',
    desc: 'Industry-leading first-pass accuracy',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" fill="#0B3C5D" opacity=".1" stroke="#0B3C5D" strokeWidth="1.5"/>
        <path d="M7 11l3 3 5-5" stroke="#2EC4B6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: 0,
    suffix: '',
    label: 'HIPAA Compliant',
    desc: 'Fully certified & secure workflows',
    staticVal: '100%',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="5" y="10" width="12" height="9" rx="2" fill="#0B3C5D" opacity=".1" stroke="#0B3C5D" strokeWidth="1.5"/>
        <path d="M8 10V7a3 3 0 016 0v3" stroke="#0B3C5D" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="14.5" r="1.5" fill="#2EC4B6"/>
      </svg>
    ),
  },
  {
    value: 0,
    suffix: '',
    label: 'Specialties Supported',
    desc: 'Multi-specialty billing across all major medical practices nationwide',
    staticVal: '20+',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="2" fill="#0B3C5D" opacity=".12" stroke="#0B3C5D" strokeWidth="1.5"/>
        <rect x="12" y="3" width="7" height="7" rx="2" fill="#0B3C5D" opacity=".12" stroke="#0B3C5D" strokeWidth="1.5"/>
        <rect x="3" y="12" width="7" height="7" rx="2" fill="#2EC4B6" opacity=".2" stroke="#2EC4B6" strokeWidth="1.5"/>
        <rect x="12" y="12" width="7" height="7" rx="2" fill="#0B3C5D" opacity=".12" stroke="#0B3C5D" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

function Counter({ target, suffix, staticVal }: { target: number; suffix: string; staticVal?: string }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!inView || staticVal || reduceMotion) return
    let frame = 0
    const total = 55
    const id = setInterval(() => {
      frame++
      const t = 1 - Math.pow(1 - frame / total, 3)
      setN(Math.round(t * target))
      if (frame >= total) clearInterval(id)
    }, 20)
    return () => clearInterval(id)
  }, [inView, target, staticVal, reduceMotion])

  if (staticVal) return <span ref={ref}>{staticVal}</span>
  // Reduced motion: show the final number straight away
  return <span ref={ref} className="tabular-nums">{reduceMotion ? target : n}{suffix}</span>
}

export default function TrustBar() {
  return (
    <section id="stats" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="text-center mb-8 sm:mb-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2EC4B6] mb-3">Measurable RCM Results</p>
          <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold text-[#0F172A] leading-tight tracking-tight">
            Revenue Cycle{' '}
            <span style={{
              background: 'linear-gradient(90deg, #0B3C5D 0%, #2EC4B6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Excellence
            </span>
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <m.div
                whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(11,60,93,0.13)' }}
                transition={{ duration: 0.2 }}
                className="group bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-2xl p-5 sm:p-7 text-center cursor-default hover:border-[#2EC4B6]/40 transition-colors duration-300"
              >
                <div className="w-[52px] h-[52px] rounded-2xl bg-white shadow-sm border border-[#E2E8F0] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:border-[#2EC4B6]/30 transition-all duration-300">
                  {s.icon}
                </div>
                <div className="text-[34px] sm:text-[44px] font-extrabold text-[#0B3C5D] leading-none mb-2 tracking-tight">
                  <Counter target={s.value} suffix={s.suffix} staticVal={s.staticVal} />
                </div>
                <p className="text-[15px] font-bold text-[#0F172A] mb-1">{s.label}</p>
                <p className="text-[13px] text-[#64748B] leading-snug">{s.desc}</p>
              </m.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
