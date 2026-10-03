'use client'
import Link from 'next/link'

const quickLinks = [
  { label: 'Services',       href: '/services' },
  { label: 'Why Choose Us',  href: '/#why-us' },
  { label: 'How It Works',   href: '/#process' },
  { label: 'Specialties',    href: '/#specialties' },
  { label: 'Testimonials',   href: '/#testimonials' },
  { label: 'Free Audit',     href: '/#audit' },
]

const legalLinks = [
  { label: 'Privacy Policy',    href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

const services = [
  { label: 'Medical Billing',        href: '/services/medical-billing' },
  { label: 'AR Follow-Up',          href: '/services/ar-follow-up' },
  { label: 'Denial Management',     href: '/services/denial-management' },
  { label: 'Payment Posting',       href: '/services/payment-posting' },
  { label: 'Credentialing',         href: '/services/credentialing' },
  { label: 'Reporting & Analytics', href: '/services/reporting-analytics' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07]"
      style={{ background: 'linear-gradient(135deg, #061d2e 0%, #0B3C5D 55%, #082d46 100%)' }}
    >
      {/* Subtle dot texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ccircle cx='16' cy='16' r='1' fill='rgba(255%2C255%2C255%2C0.03)'/%3E%3C/svg%3E")`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Teal top glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px]"
        style={{ background: 'radial-gradient(ellipse at top, rgba(46,196,182,0.10) 0%, transparent 65%)' }}
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #2EC4B6 30%, #0B3C5D 70%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-10 sm:pt-16 pb-6 sm:pb-8">

        {/* ── Pre-footer CTA band ─────────────────────────────────────── */}
        <div
          className="relative rounded-2xl overflow-hidden mb-10 sm:mb-14"
          style={{ background: 'rgba(46,196,182,0.07)', border: '1px solid rgba(46,196,182,0.15)' }}
        >
          <div
            className="absolute right-0 top-0 w-[300px] h-[120px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(46,196,182,0.14) 0%, transparent 65%)' }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
            <div>
              <p className="text-[17px] font-extrabold text-white leading-tight mb-0.5">
                Ready to recover lost revenue?
              </p>
              <p className="text-[15px] md:text-[13px] text-white/50">
                Join practices across the US who trust SwiftBilling RCM.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[14px]
                px-6 py-3 rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5 transition-all duration-200
                w-full sm:w-auto sm:shrink-0"
              style={{ boxShadow: '0 0 22px rgba(46,196,182,0.35)' }}
            >
              Talk to a Billing Expert
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Main footer grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_0.8fr_1fr_1.4fr] gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group max-md:min-h-[44px]">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10
                  group-hover:border-[#2EC4B6]/40 transition-colors duration-300"
                style={{ background: 'rgba(46,196,182,0.10)' }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 14L7.5 8.5L11 11.5L17 4.5" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 4.5H17V7.5" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-extrabold text-[18px] text-white tracking-[-0.02em] leading-none">
                SwiftBilling<span className="text-[#2EC4B6]"> RCM</span>
              </span>
            </Link>

            <p className="text-[15px] md:text-[13.5px] text-white/45 leading-relaxed max-w-[260px] mb-6">
              Expert medical billing and revenue cycle management for independent US healthcare practices. HIPAA compliant. Results-driven.
            </p>

            {/* Trust badge pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['HIPAA Compliant', 'CPC Certified', 'BAA Signed'].map(b => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-[#2EC4B6]
                    bg-[#2EC4B6]/[0.10] border border-[#2EC4B6]/20 rounded-full px-3 py-[4px] uppercase tracking-[0.08em]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2EC4B6]" />
                  {b}
                </span>
              ))}
            </div>

            {/* Contact quick-access */}
            <div className="flex flex-col gap-2 max-md:gap-0 mb-5">
              <a href="mailto:info@swiftbillingrcm.com"
                className="text-[15px] md:text-[13px] text-white/40 hover:text-[#2EC4B6] transition-colors duration-200 font-medium flex items-center gap-2 max-md:min-h-[44px]">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M1 5l6 3.5L13 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                info@swiftbillingrcm.com
              </a>
              <a href="tel:+15127377488"
                className="text-[15px] md:text-[13px] text-white/40 hover:text-[#2EC4B6] transition-colors duration-200 font-medium flex items-center gap-2 max-md:min-h-[44px]">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 2.5h2.5l1 2.5-1.5 1a7 7 0 003.5 3.5l1-1.5 2.5 1v2.5A1 1 0 0110 12.5 8.5 8.5 0 011.5 4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +1 (512) 737-7488
              </a>
            </div>

            {/* Social links */}
            {/* Each link is a 44px tap area on mobile around the same 32px tile */}
            <div className="flex items-center gap-2 max-md:gap-0 max-md:-ml-1.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/swiftbilling-rcm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SwiftBilling RCM on LinkedIn"
                className="group w-8 h-8 max-md:w-11 max-md:h-11 flex items-center justify-center rounded-lg"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-[#0A66C2]/60 group-hover:bg-[#0A66C2]/20 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                </span>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/swiftbilling"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SwiftBilling RCM on Facebook"
                className="group w-8 h-8 max-md:w-11 max-md:h-11 flex items-center justify-center rounded-lg"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-[#1877F2]/60 group-hover:bg-[#1877F2]/20 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                </span>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/swiftbillingrcm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SwiftBilling RCM on Instagram"
                className="group w-8 h-8 max-md:w-11 max-md:h-11 flex items-center justify-center rounded-lg"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-[#E1306C]/60 group-hover:bg-[#E1306C]/20 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="url(#ig-grad)">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFDC80"/>
                      <stop offset="25%" stopColor="#FCAF45"/>
                      <stop offset="50%" stopColor="#F77737"/>
                      <stop offset="75%" stopColor="#C13584"/>
                      <stop offset="100%" stopColor="#833AB4"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/70 mb-5">Quick Links</p>
            <div className="flex flex-col gap-2.5 max-md:gap-0">
              {quickLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[15px] md:text-[13.5px] text-white/45 hover:text-[#2EC4B6] transition-colors duration-200 font-medium max-md:min-h-[44px]
                    flex items-center gap-1.5 group"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                    <path d="M1.5 4h5M4 1.5L6.5 4 4 6.5" stroke="#2EC4B6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/70 mb-5">Legal</p>
            <div className="flex flex-col gap-2.5 max-md:gap-0">
              {legalLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[15px] md:text-[13.5px] text-white/45 hover:text-[#2EC4B6] transition-colors duration-200 font-medium max-md:min-h-[44px]
                    flex items-center gap-1.5 group"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                    <path d="M1.5 4h5M4 1.5L6.5 4 4 6.5" stroke="#2EC4B6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/70 mb-5">Services</p>
            <div className="flex flex-col gap-2.5 max-md:gap-0">
              {services.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-[15px] md:text-[13.5px] text-white/45 hover:text-[#2EC4B6] transition-colors duration-200 font-medium max-md:min-h-[44px]
                    flex items-center gap-1.5 group"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                    <path d="M1.5 4h5M4 1.5L6.5 4 4 6.5" stroke="#2EC4B6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-white/70 mb-5">Contact Us</p>
            <div className="flex flex-col gap-4">

              {[
                {
                  href: 'mailto:info@swiftbillingrcm.com',
                  label: 'Email',
                  value: 'info@swiftbillingrcm.com',
                  icon: <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 3h10a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#2EC4B6" strokeWidth="1.2"/><path d="M1 4l6 4 6-4" stroke="#2EC4B6" strokeWidth="1.2" strokeLinecap="round"/></svg>,
                },
                {
                  href: 'tel:+15127377488',
                  label: 'Phone',
                  value: '+1 (512) 737-7488',
                  icon: <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 2.5h2.5l1 2.5-1.5 1a7 7 0 003.5 3.5l1-1.5 2.5 1v2.5A1 1 0 0110 12.5 8.5 8.5 0 011.5 4a1 1 0 011-1z" stroke="#2EC4B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
              ].map(({ href, label, value, icon }) => (
                <a key={label} href={href} className="flex items-start gap-3 group max-md:min-h-[44px]">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.10] flex items-center justify-center shrink-0 mt-0.5
                    group-hover:border-[#2EC4B6]/40 group-hover:bg-[#2EC4B6]/[0.08] transition-all duration-200">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[11px] text-white/30 font-medium mb-0.5">{label}</p>
                    <p className="text-[15px] md:text-[13px] text-white/60 font-medium group-hover:text-[#2EC4B6] transition-colors duration-200">{value}</p>
                  </div>
                </a>
              ))}

              {/* Hours + Coverage (non-link) */}
              {[
                { label: 'Hours',    value: 'Mon–Fri · 8am–6pm CST' },
                { label: 'Coverage', value: 'All 50 US States' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.10] flex items-center justify-center shrink-0 mt-0.5">
                    {label === 'Hours'
                      ? <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#2EC4B6" strokeWidth="1.2"/><path d="M7 4.5V7l2 2" stroke="#2EC4B6" strokeWidth="1.2" strokeLinecap="round"/></svg>
                      : <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#2EC4B6" strokeWidth="1.2"/><path d="M1.5 7h11M7 1.5c-1.5 1.8-2 3.5-2 5.5s.5 3.7 2 5.5M7 1.5c1.5 1.8 2 3.5 2 5.5s-.5 3.7-2 5.5" stroke="#2EC4B6" strokeWidth="1" strokeLinecap="round"/></svg>
                    }
                  </div>
                  <div>
                    <p className="text-[11px] text-white/30 font-medium mb-0.5">{label}</p>
                    <p className="text-[15px] md:text-[13px] text-white/60 font-medium">{value}</p>
                  </div>
                </div>
              ))}

              <Link
                href="/#contact"
                className="mt-1 w-full inline-flex items-center justify-center gap-2
                  bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[13.5px]
                  px-5 py-2.5 max-md:min-h-[44px] rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5
                  transition-all duration-200"
                style={{ boxShadow: '0 0 20px rgba(46,196,182,0.25)' }}
              >
                Book Free Consultation
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────────── */}
        <div className="border-t border-white/[0.07] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <p className="text-[15px] md:text-[12.5px] text-white/30 font-medium">
            © {new Date().getFullYear()} SwiftBilling RCM. All rights reserved. · Austin, TX
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 max-md:gap-y-0">
            <a href="/privacy-policy" className="text-[15px] md:text-[12px] text-white/30 hover:text-[#2EC4B6] font-medium transition-colors duration-200 max-md:min-h-[44px] max-md:inline-flex max-md:items-center">Privacy Policy</a>
            <a href="/terms" className="text-[15px] md:text-[12px] text-white/30 hover:text-[#2EC4B6] font-medium transition-colors duration-200 max-md:min-h-[44px] max-md:inline-flex max-md:items-center">Terms &amp; Conditions</a>
            <span className="text-[15px] md:text-[12px] text-white/25 font-medium">HIPAA Compliant</span>
            <span className="text-[15px] md:text-[12px] text-white/25 font-medium">BAA Signed With Every Client</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
