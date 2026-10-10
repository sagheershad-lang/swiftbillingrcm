import type { Metadata } from 'next'
import type { ReactElement } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ServicesHero from '@/components/ServicesHero'
import { coreServices, extendedServices } from '@/lib/services-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Medical Billing & Revenue Cycle Services | SwiftBilling RCM',
  description: 'Comprehensive RCM services: medical billing, AR follow-up, denial management, credentialing, prior authorization, eligibility verification and more. Free audit.',
  path: '/services',
})

const serviceIcons: Record<string, ReactElement> = {
  'medical-billing': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  'ar-follow-up': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  'denial-management': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
  ),
  'payment-posting': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M1 10h22" stroke="currentColor" strokeWidth="1.7"/></svg>
  ),
  'credentialing': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  'reporting-analytics': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M9 17V7M12 17v-5M15 17v-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
  ),
  'prior-authorization': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  'eligibility-verification': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.7"/><path d="M21 21l-4.35-4.35M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  'patient-calling': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012.77 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  'patient-scheduling': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
  ),
  'patient-acquisition': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.7"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>
  ),
}

function ServiceCard({ slug, name, shortDescription, isNew }: { slug: string; name: string; shortDescription: string; isNew: boolean }) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative p-6 flex flex-col gap-4 transition-all duration-300 border border-[rgba(255,255,255,0.08)] hover:border-[rgba(46,196,182,0.3)] hover:shadow-[0_8px_32px_rgba(46,196,182,0.08)] h-full"
      style={{ borderRadius: '16px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
    >
      {isNew && (
        <span className="absolute top-4 right-4 text-[9px] font-extrabold uppercase tracking-[0.14em] rounded-full px-2.5 py-1" style={{ color: '#2EC4B6', background: 'rgba(46,196,182,0.1)', border: '1px solid rgba(46,196,182,0.2)' }}>New</span>
      )}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[rgba(46,196,182,0.2)]"
        style={{ background: 'rgba(46,196,182,0.1)', color: '#2EC4B6' }}
      >
        {serviceIcons[slug]}
      </div>
      <div className="flex-1">
        <h3 className="text-[16px] font-extrabold text-white mb-2">{name}</h3>
        <p className="text-[15px] md:text-[13.5px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.55)' }}>{shortDescription}</p>
      </div>
      <div className="flex items-center gap-1.5 text-[13px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: '#2EC4B6' }}>
        Learn More
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
    </Link>
  )
}


export default function ServicesHub() {
  return (
    <div className="min-h-screen">
      <Nav />
      <ServicesHero />

      {/* Core Services */}
      <section className="pt-[60px] pb-[40px]" style={{ background: '#0d2137' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10">
            <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] mb-2" style={{ color: '#2EC4B6' }}>Foundation</p>
            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold text-white tracking-tight">Core Billing Services</h2>
            <p className="text-[15px] mt-2 max-w-[500px]" style={{ color: 'rgba(255,255,255,0.5)' }}>The complete billing cycle, from the moment care is delivered to the moment payment is posted.</p>
          </div>
          <div className="flex flex-col gap-5">
            {/* Row 1 — 4 cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreServices.slice(0, 4).map(s => (
                <ServiceCard key={s.slug} slug={s.slug} name={s.name} shortDescription={s.shortDescription} isNew={s.isNew} />
              ))}
            </div>
            {/* Row 2 — 3 cards centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreServices.slice(4).map(s => (
                <ServiceCard key={s.slug} slug={s.slug} name={s.name} shortDescription={s.shortDescription} isNew={s.isNew} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extended Services */}
      <section className="pt-[40px] pb-[60px]" style={{ background: '#0a1e33' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-3" style={{ background: 'rgba(46,196,182,0.1)', border: '1px solid rgba(46,196,182,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#2EC4B6' }} />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em]" style={{ color: '#2EC4B6' }}>Newly Added</span>
            </div>
            <h2 className="text-[clamp(22px,3vw,32px)] font-extrabold text-white tracking-tight">Extended Services</h2>
            <p className="text-[15px] mt-2 max-w-[560px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Beyond billing: the front-end and patient-facing services most billing companies don&apos;t offer but every practice needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {extendedServices.map(s => (
              <ServiceCard key={s.slug} slug={s.slug} name={s.name} shortDescription={s.shortDescription} isNew={s.isNew} />
            ))}
          </div>
        </div>
      </section>

      {/* Why SwiftBilling */}
      <section className="py-[60px]" style={{ background: '#0d2137', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] mb-3" style={{ color: '#2EC4B6' }}>One Partner. Full Revenue Cycle.</p>
              <h2 className="text-[clamp(22px,3vw,34px)] font-extrabold text-white tracking-tight mb-3">
                Stop managing multiple vendors for what one team can do.
              </h2>
              <p className="text-[15px] leading-relaxed max-w-[600px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Most practices use one company for billing, another for credentialing, and a third for patient calling.
                SwiftBilling RCM handles your entire revenue cycle under one roof, with one contact, one dashboard, and one monthly report.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link href="/#contact-form"
                className="inline-flex items-center justify-center gap-2 text-white font-extrabold text-[14px] px-7 py-4 rounded-xl hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: '#2EC4B6', color: '#0a1e33', boxShadow: '0 4px 20px rgba(46,196,182,0.3)' }}>
                Get Free Audit
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="tel:+15127377488"
                className="inline-flex items-center justify-center gap-2 text-[14px] font-semibold transition-colors py-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 2h2.8l1.2 3-1.8 1.1a8 8 0 003.2 3.2L9 7.5l3 1.2V11a1 1 0 01-1 1A10.5 10.5 0 011.5 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                +1 (512) 737-7488
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
