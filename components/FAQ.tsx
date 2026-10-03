'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import AccordionItem from './AccordionItem'
import { homeFaqs as faqs } from '@/lib/home-faqs'

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
              Common questions from practices considering SwiftBilling RCM, answered clearly and without fluff.
            </p>

            {/* Trust pills */}
            <div className="flex flex-col gap-2.5 mb-8">
              {[
                { icon: '🔒', text: 'HIPAA compliant, with a BAA signed for every client' },
                { icon: '📋', text: 'No long-term contracts, no upfront fees' },
                { icon: '⚡', text: 'Onboarding in 5 to 7 business days' },
                { icon: '📞', text: 'Dedicated account manager for every practice' },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#EBF9F8] border border-[#BAE8E4] flex items-center justify-center shrink-0">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5 4-4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[15px] md:text-[13px] text-[#475569] font-medium">{t.text}</span>
                </div>
              ))}
            </div>

            {/* Hairline */}
            <div className="h-px mb-7" style={{ background: 'linear-gradient(90deg, rgba(46,196,182,0.4), transparent)' }} />

            {/* CTA */}
            <p className="text-[15px] md:text-[13px] text-[#64748B] mb-3">Still have questions? We&apos;re happy to help.</p>
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
