'use client'
import { m } from 'framer-motion'
import FadeIn from './FadeIn'
import ParticleNetwork from './ParticleNetwork'

export default function Audit() {
  return (
    <section id="audit" className="py-16 md:py-24 relative overflow-hidden bg-sb-dark">
      <ParticleNetwork />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[12px] font-bold tracking-[0.06em] uppercase text-[#5EF2E3] bg-[#072A42]/30 border border-[#7FF5EA]/45 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-5 sm:mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5EF2E3] animate-pulse" />
            Free · No Obligation · Response Within 24 Hours
          </div>

          <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-[680px] mx-auto">
            Let Us Handle Your Billing While You{' '}
            <span className="text-sb-grad-dark">
              Focus on Patients
            </span>
          </h2>

          <p className="text-[17px] text-white font-light leading-relaxed max-w-[500px] mx-auto mb-10">
            Start with a free revenue audit. We&apos;ll show you exactly how much you&apos;re leaving on the table. No pitch, just clear data.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-10 sm:mb-14 max-w-sm sm:max-w-none mx-auto w-full sm:w-auto px-0">
            <m.a
              href="#contact-form"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="sb-btn-primary inline-flex items-center justify-center gap-2.5 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[15px] sm:text-[16px] px-7 sm:px-9 py-4 sm:py-[18px] rounded-xl"
            >
              Get Free Audit in 24 Hours
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9h11M9.5 4.5L14 9l-4.5 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </m.a>
            <m.a
              href="tel:+15127377488"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2 bg-[#072A42]/30 text-white font-bold text-[14px] sm:text-[15px] px-7 sm:px-8 py-4 sm:py-[18px] rounded-xl border border-white/30 hover:bg-[rgba(94,242,227,0.14)] hover:border-[#5EF2E3] transition-all duration-200 backdrop-blur-sm"
            >
              Call Us Now
            </m.a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-8 sm:pt-10 border-t border-white/20">
            {[
              { icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="6" width="10" height="7" rx="1.5" stroke="#5EF2E3" strokeWidth="1.3"/><path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="#5EF2E3" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'HIPAA Compliant' },
              { icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#5EF2E3" strokeWidth="1.3"/><path d="M7 4v3l2 2" stroke="#5EF2E3" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'Response Within 24 Hours' },
              { icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L1.5 3.5v4c0 3.04 2.23 5.88 5.5 6.62C10.27 13.38 12.5 10.54 12.5 7.5v-4L7 1z" stroke="#5EF2E3" strokeWidth="1.3" strokeLinejoin="round"/><path d="M5 7l1.5 1.5 3-3" stroke="#5EF2E3" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: '100% Free, No Obligation' },
              { icon: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#5EF2E3" strokeWidth="1.3"/><path d="M2 7h10M7 2c-1.5 2-2 3.5-2 5s.5 3 2 5M7 2c1.5 2 2 3.5 2 5s-.5 3-2 5" stroke="#5EF2E3" strokeWidth="1.1" strokeLinecap="round"/></svg>, text: 'Serving All US States' },
            ].map(t => (
              <div key={t.text} className="flex items-center gap-2 text-[13px] font-medium text-white">
                {t.icon}
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
