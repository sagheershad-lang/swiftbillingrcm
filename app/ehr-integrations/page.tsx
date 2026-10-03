import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import { SectionHeader, LightCard, IconTile, CtaBand } from '@/components/PageSections'
import { platforms, PLATFORM_DISCLAIMER } from '@/lib/platforms'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'EHR Integrations: Works With Your EHR | SwiftBilling RCM',
  description: 'SwiftBilling RCM works inside your existing EHR and clearinghouse, including Epic, athenahealth, eClinicalWorks, Tebra and AdvancedMD. Nothing new to install.',
  path: '/ehr-integrations',
})

const steps = [
  {
    title: 'Inside Your EHR',
    desc: 'We work directly in the EHR and practice management system you already use, not a parallel one.',
    icon: <path d="M4 5h16v11H4zM9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: 'Your Clearinghouse',
    desc: 'We work with the clearinghouse you already use, with no migration required.',
    icon: <path d="M4 8h13M13 4l4 4-4 4M20 16H7M11 12l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: 'Access You Control',
    desc: 'We connect through secure remote access, using credentials your practice controls and can revoke at any time.',
    icon: <path d="M5 11h14v10H5zM8 11V7a4 4 0 018 0v4M12 15v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
]

const Icon = ({ children }: { children: ReactNode }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">{children}</svg>
)

export default function EhrIntegrations() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Nav />

      <PageHero crumb="EHR Integrations" badge="Nothing New to Install" titleTop="Works With" titleAccent="Your EHR">
        We work inside the EHR and clearinghouse your practice already uses, so there is no new software for your team to learn.
      </PageHero>

      {/* ── How we work with your systems ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="How We Work"
            title="Inside the Systems"
            accent="You Already Use"
            desc={<>No migration and no new software. <Link href="/security" className="font-bold text-[#0B3C5D] hover:text-[#0a756c] underline underline-offset-2 max-md:inline-flex max-md:min-h-[44px] max-md:items-center">How we keep access secure</Link>.</>}
          />
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.07} className="h-full">
                <LightCard className="h-full">
                  <IconTile><Icon>{c.icon}</Icon></IconTile>
                  <h3 className="text-[16px] font-extrabold text-[#0F172A] mb-2 leading-tight">{c.title}</h3>
                  <p className="text-[15px] md:text-[13.5px] text-[#64748B] leading-relaxed">{c.desc}</p>
                </LightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platforms ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="Compatible With"
            title="Platforms We"
            accent="Work With"
            desc="EHR, practice management, clearinghouse and credentialing platforms our team works in."
          />
          <FadeIn>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {platforms.map(p => (
                <li key={p.name} className="bg-white border border-[#E4EDF5] rounded-2xl p-5 flex flex-col items-center text-center shadow-[0_1px_10px_rgba(11,60,93,0.05)]">
                  <div className="h-[72px] w-full flex items-center justify-center mb-3">
                    {/* Local logo files, sized like the homepage TrustStrip */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.logoUrl}
                      alt={`${p.name} logo`}
                      width={p.w}
                      height={p.h}
                      loading="lazy"
                      style={{ height: `${Math.min(p.logoH ?? 44, 64)}px`, width: 'auto', maxWidth: '100%' }}
                    />
                  </div>
                  <span className="text-[15px] font-extrabold text-[#0F172A] leading-tight">{p.name}</span>
                  <span className="mt-1.5 text-[11px] font-bold text-[#0a756c] bg-[#EBF9F8] border border-[#BAE8E4] rounded-full px-2.5 py-[3px]">{p.kind}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <p className="mt-6 text-[15px] md:text-[13.5px] text-[#64748B] text-center">
            Don&apos;t see your system? Most EHRs work with our process. Ask us about yours.
          </p>
          <p className="mt-3 text-[12px] text-[#94A3B8] text-center leading-relaxed">{PLATFORM_DISCLAIMER}</p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <CtaBand
            title="Check that we work with your system"
            text="Book a free 30 minute call and tell us which EHR and clearinghouse your practice uses."
            href="/book-a-call"
            label="Book a Call"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
