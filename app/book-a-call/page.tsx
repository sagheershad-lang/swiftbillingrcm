import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingScheduler from '@/components/BookingScheduler'
import PageHero from '@/components/PageHero'
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

      <PageHero crumb="Book a Call" badge="Free · No Obligation" titleTop="Book a Free Billing" titleAccent="Consultation">
        Pick a time that works for you. 30 minutes on Google Meet, all times shown in your own time zone.
      </PageHero>

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
