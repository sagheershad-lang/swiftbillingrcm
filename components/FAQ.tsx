'use client'
import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const faqs = [
  {
    q: 'How do you ensure HIPAA compliance?',
    a: 'We operate under a signed Business Associate Agreement (BAA) with every client. All patient data is handled through HIPAA-compliant systems with 256-bit encryption, strict access controls, and audit logging. Our entire team is trained on HIPAA requirements and we conduct regular security reviews to maintain full certification.',
  },
  {
    q: 'Do you work with my specialty?',
    a: 'Yes. We work with over 20 medical specialties including internal medicine, family practice, cardiology, orthopedics, psychiatry, OB-GYN, pediatrics, urgent care, nephrology, and more. Our certified coders are trained in the specific CPT and ICD-10 codes relevant to your specialty so claims are always coded accurately for maximum reimbursement.',
  },
  {
    q: 'How quickly can I see results?',
    a: 'Most clients begin seeing measurable improvements within the first 30–60 days. Clients have reported up to 35% increases in collections and 40% reductions in AR days within 90 days — individual results vary by practice size and starting point. Onboarding takes 5–7 business days, after which we begin submitting claims immediately with clear KPI benchmarks set from day one.',
  },
  {
    q: 'How do you handle denied claims?',
    a: 'Denial management is one of our core strengths. Every denied claim is reviewed, corrected, and resubmitted with a documented appeal. We also track denial patterns by payer to fix root causes — not just individual incidents. Clients who come to us with high denial rates typically see significant reductions within the first 60–90 days.',
  },
  {
    q: 'How do you charge for your services?',
    a: 'We charge a percentage of collections — typically 4–9% depending on your specialty, volume, and scope. There are no upfront fees, no hidden charges, and no long-term lock-in contracts. You only pay when we collect for you, which means our incentives are fully aligned with yours. Exact pricing is discussed during your free audit.',
  },
  {
    q: 'Can you handle multi-provider or multi-location practices?',
    a: 'Absolutely. We specialize in managing billing across multiple providers and locations. Each provider gets their own credentialing setup, and we consolidate reporting into a single dashboard so you have one clear view of your entire practice\'s financial performance — whether you have 2 providers or 20.',
  },
]

/* ── Single accordion item (also used for service page FAQs) ── */
export function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
  idPrefix = 'faq-answer',
}: {
  faq: { q: string; a: string }
  index: number
  isOpen: boolean
  onToggle: () => void
  idPrefix?: string
}) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300
        ${isOpen
          ? 'border border-[#2EC4B6]/35 shadow-[0_8px_32px_rgba(11,60,93,0.09),0_0_0_1px_rgba(46,196,182,0.12)]'
          : 'border border-[#E4EDF5] shadow-[0_1px_10px_rgba(11,60,93,0.05)] hover:border-[#CBD5E1] hover:shadow-[0_4px_20px_rgba(11,60,93,0.08)]'
        }`}
    >
      {/* Teal left-edge accent when open */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-300"
        style={{ background: isOpen ? '#2EC4B6' : 'transparent' }}
      />

      {/* Question row */}
      <button
        className="w-full flex items-start gap-4 text-left px-6 py-5 pl-8"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${idPrefix}-${index}`}
      >
        {/* Question number */}
        <span
          className={`text-[11px] font-black tracking-[0.1em] mt-[3px] shrink-0 transition-colors duration-200 ${
            isOpen ? 'text-[#2EC4B6]' : 'text-[#CBD5E1]'
          }`}
        >
          {num}
        </span>

        {/* Question text */}
        <span
          className={`flex-1 text-[15px] font-bold leading-snug transition-colors duration-200 ${
            isOpen ? 'text-[#0B3C5D]' : 'text-[#0F172A]'
          }`}
        >
          {faq.q}
        </span>

        {/* Toggle button */}
        <m.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className={`w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center shrink-0 mt-[1px] transition-all duration-200 ${
            isOpen
              ? 'bg-[#2EC4B6] border-[#2EC4B6]'
              : 'bg-white border-[#D1D9E4] hover:border-[#2EC4B6]/50'
          }`}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 2v8M2 6h8"
              stroke={isOpen ? '#0B3C5D' : '#94A3B8'}
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </m.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key="answer"
            id={`${idPrefix}-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pl-8 sm:pl-[52px] pb-5 sm:pb-6 border-t border-[#EEF2F7]">
              <p className="pt-4 text-[14px] text-[#64748B] leading-[1.8]">{faq.a}</p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">

      {/* Ambient glow top-right */}
      <div
        className="pointer-events-none absolute -top-16 right-0 w-[500px] h-[360px] opacity-40"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(46,196,182,0.09) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_1.55fr] gap-10 lg:gap-14 xl:gap-20 items-start">

          {/* ── Left: sticky header ──────────────────────────────────── */}
          <FadeIn className="lg:sticky lg:top-[100px]">
            <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-3">
              Common Questions
            </p>
            <h2 className="text-[clamp(26px,3vw,40px)] font-extrabold text-[#0F172A] leading-[1.1] tracking-tight mb-4">
              Everything You{' '}
              <span style={{
                background: 'linear-gradient(90deg, #0B3C5D 0%, #2EC4B6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Need to Know
              </span>
            </h2>
            <p className="text-[15px] text-[#64748B] leading-relaxed mb-8">
              Common questions from practices considering SwiftBilling RCM — answered clearly, no fluff.
            </p>

            {/* Trust pills */}
            <div className="flex flex-col gap-2.5 mb-8">
              {[
                { icon: '🔒', text: 'HIPAA compliant — BAA signed with every client' },
                { icon: '📋', text: 'No contracts, no upfront fees' },
                { icon: '⚡', text: 'Onboarding in 5–7 business days' },
                { icon: '📞', text: 'Dedicated account manager for every practice' },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#EBF9F8] border border-[#BAE8E4] flex items-center justify-center shrink-0">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5 4-4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[13px] text-[#475569] font-medium">{t.text}</span>
                </div>
              ))}
            </div>

            {/* Hairline */}
            <div className="h-px mb-7" style={{ background: 'linear-gradient(90deg, rgba(46,196,182,0.4), transparent)' }} />

            {/* CTA */}
            <p className="text-[13px] text-[#64748B] mb-3">Still have questions? We&apos;re happy to help.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#0B3C5D] text-white font-bold text-[14px]
                px-6 py-3 rounded-xl hover:bg-[#082d46] hover:-translate-y-0.5
                transition-all duration-200 shadow-[0_4px_20px_rgba(11,60,93,0.22)]"
            >
              Book Free Consultation
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </FadeIn>

          {/* ── Right: accordion ─────────────────────────────────────── */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
