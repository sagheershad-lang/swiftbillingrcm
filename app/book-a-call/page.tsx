import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingScheduler from '@/components/BookingScheduler'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Book a Free Billing Consultation | SwiftBilling RCM',
  description: 'Book a free 30 minute medical billing consultation with SwiftBilling RCM. Pick a time that works for you on Google Meet, shown in your own time zone.',
  path: '/book-a-call',
})

export default function BookACall() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Nav />

      {/* ── Hero (same look as the services hub hero) ───────────────── */}
      <section id="main-content" className="relative overflow-hidden" style={{ background: '#0d2137' }}>
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
            style={{ background: 'linear-gradient(90deg, transparent 0%, #2EC4B6 30%, rgba(46,196,182,0.25) 70%, transparent 100%)' }}
          />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 pt-[96px] pb-12 lg:pb-14">
          <div className="max-w-[720px] py-8 lg:py-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="hero-fade-up flex items-center gap-2 text-[12px] text-white/32 mb-7" style={{ animationDelay: '0.1s' }}>
              <Link href="/" className="hover:text-[#2EC4B6] transition-colors duration-200 max-md:min-h-[44px] max-md:inline-flex max-md:items-center">Home</Link>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-35" aria-hidden="true">
                <path d="M3.5 2L6.5 5 3.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <span className="text-white/55">Book a Call</span>
            </nav>

            {/* Badge */}
            <div
              className="hero-fade-up inline-flex items-center gap-2 rounded-full px-3 py-[5px] mb-5"
              style={{ background: 'rgba(46,196,182,0.10)', border: '1px solid rgba(46,196,182,0.26)', animationDelay: '0.2s' }}
            >
              <span className="w-[6px] h-[6px] rounded-full bg-[#2EC4B6] animate-pulse shrink-0" />
              <span className="text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-[#2EC4B6]">Free · No Obligation</span>
            </div>

            <h1
              className="hero-fade-up font-extrabold leading-[1.06] tracking-[-0.028em] mb-5"
              style={{ fontSize: 'clamp(34px, 5vw, 56px)', animationDelay: '0.3s' }}
            >
              <span className="text-white">Book a Free Billing</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(92deg, #2EC4B6 0%, #80ece5 55%, #2EC4B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Consultation
              </span>
            </h1>

            <p className="hero-fade-up text-[15px] md:text-[15.5px] leading-[1.75] text-white/60 max-w-[480px]" style={{ animationDelay: '0.4s' }}>
              Pick a time that works for you. 30 minutes on Google Meet, all times shown in your own time zone.
            </p>
          </div>
        </div>
      </section>

      {/* ── Scheduler ─────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#E4EDF5] rounded-2xl shadow-[0_1px_14px_rgba(11,60,93,0.06)] p-3 sm:p-6 overflow-hidden">
            <BookingScheduler />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="flex items-center gap-2 text-[15px] md:text-[13.5px] text-[#64748B]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden="true">
                <rect x="2.5" y="6" width="9" height="6.5" rx="1.5" stroke="#64748B" strokeWidth="1.3"/>
                <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              Please do not share patient information when booking.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-[15px] md:text-[14px] font-bold text-[#0B3C5D] hover:text-[#0a756c] transition-colors duration-200 max-md:min-h-[44px]"
            >
              Prefer email? Send us a message
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
