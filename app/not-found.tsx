import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ParticleNetwork from '@/components/ParticleNetwork'

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | SwiftBilling RCM' },
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main>
      <Nav />

      <section
        id="main-content"
        className="relative overflow-hidden pt-[140px] pb-24 md:pt-[180px] md:pb-32 bg-sb-dark"
      >
        <ParticleNetwork />

        <div className="relative z-10 max-w-[620px] mx-auto px-6 text-center">
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#5EF2E3] mb-3">
            Error 404
          </p>
          <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-4">
            Page not found
          </h1>
          <div
            className="mx-auto mb-6 h-px w-24"
            style={{ background: 'linear-gradient(90deg, transparent, #5EF2E3, #38BDF8, transparent)' }}
          />
          <p className="text-[15.5px] leading-relaxed mb-9" style={{ color: 'rgba(255,255,255,0.9)' }}>
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="sb-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[15px]
                px-7 py-3.5 rounded-xl"
            >
              Back to Home
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/services"
              className="sb-btn-glass w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-[14.5px] px-7 py-3.5 rounded-xl"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
