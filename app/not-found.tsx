import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | SwiftBilling RCM' },
  robots: { index: false },
}

export default function NotFound() {
  return (
    <main>
      <Nav />

      <section
        className="relative overflow-hidden pt-[140px] pb-24 md:pt-[180px] md:pb-32"
        style={{ background: 'linear-gradient(115deg, #061d2e 0%, #0B3C5D 55%, #0e4f73 100%)' }}
      >
        {/* Dot texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='14' cy='14' r='1.1' fill='rgba(255%2C255%2C255%2C0.04)'/%3E%3C/svg%3E")`,
            backgroundSize: '28px 28px',
          }}
        />
        {/* Teal glow */}
        <div
          className="absolute right-0 top-0 w-[420px] h-[260px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(46,196,182,0.16) 0%, transparent 65%)' }}
        />

        <div className="relative z-10 max-w-[620px] mx-auto px-6 text-center">
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-3">
            Error 404
          </p>
          <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold text-white leading-[1.08] tracking-tight mb-4">
            Page not found
          </h1>
          <div
            className="mx-auto mb-6 h-px w-24"
            style={{ background: 'linear-gradient(90deg, transparent, #2EC4B6, transparent)' }}
          />
          <p className="text-[15.5px] leading-relaxed mb-9" style={{ color: 'rgba(255,255,255,0.6)' }}>
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[15px]
                px-7 py-3.5 rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5 transition-all duration-200"
              style={{ boxShadow: '0 0 24px rgba(46,196,182,0.35)' }}
            >
              Back to Home
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-[14.5px] px-7 py-3.5 rounded-xl
                text-white hover:bg-white/10 transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.13)' }}
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
