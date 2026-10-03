import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import { SectionHeader, LightCard, IconTile, CtaBand } from '@/components/PageSections'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'About Our Medical Billing Company | SwiftBilling RCM',
  description: 'SwiftBilling RCM is a medical billing company operated by Clink Nexus LLC in Austin, Texas, serving independent practices in all 50 states and 20+ specialties.',
  path: '/about',
})

// Facts only from PROJECT_CONTEXT.md section 1 and copy the site already uses. No names, no team photos.
const facts = [
  { label: 'Operated by', value: 'Clink Nexus LLC' },
  { label: 'Based in', value: 'Austin, Texas' },
  { label: 'Coverage', value: 'All 50 States' },
  { label: 'Specialties', value: '20+' },
]

const howWeWork = [
  {
    title: 'Dedicated Account Manager',
    desc: 'A single point of contact who knows your practice, your payers, and your goals.',
    icon: <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>,
  },
  {
    title: 'Monthly Reporting',
    desc: 'KPI dashboards delivered every month, with full visibility into claims, payments, and AR.',
    icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>,
  },
  {
    title: 'No Long-Term Contracts',
    desc: 'No long-term contracts, so you are never locked in.',
    icon: <path d="M5 11h14v10H5zM8 11V7a4 4 0 017.5-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
]

const values = [
  {
    title: 'Transparency',
    desc: 'Clear monthly reporting, so you always know exactly where your revenue stands.',
    icon: <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: 'Honest Pricing',
    desc: 'A published price range, typically 4 to 9% of collections, with no setup fee. You only pay when you get paid.',
    icon: <path d="M12 2v20M17 6H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: 'Honest Results',
    desc: 'We only share results from our billing team’s own work across multiple practices, and we never use invented reviews or client names.',
    icon: <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3zM9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
]

const Icon = ({ children }: { children: ReactNode }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">{children}</svg>
)

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Nav />

      <PageHero crumb="About" badge="Austin, Texas · All 50 States" titleTop="About" titleAccent="SwiftBilling RCM">
        Medical billing and revenue cycle management for independent US healthcare practices, so you can focus on patients, not paperwork.
      </PageHero>

      {/* ── Our story ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="Who We Are"
            title="Billing Built for"
            accent="Independent Practices"
            desc="One partner for your revenue cycle, from charge entry to payment posting."
          />
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
            <FadeIn>
              <div className="flex flex-col gap-4 text-[15px] md:text-[15.5px] text-[#475569] leading-[1.8]">
                <p>
                  SwiftBilling RCM is a medical billing and revenue cycle management company operated by Clink Nexus LLC,
                  a Texas limited liability company based in Austin, Texas.
                </p>
                <p>
                  We work with independent practices in all 50 states across 20+ specialties. We manage the full revenue
                  cycle, from charge entry and claim submission to denials, AR follow-up and payment posting, so your team
                  can focus entirely on patient care.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <dl className="grid grid-cols-2 gap-3">
                {facts.map(f => (
                  <div key={f.label} className="bg-[#F8FAFC] border border-[#E4EDF5] rounded-2xl p-5">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.11em] text-[#94A3B8] mb-1">{f.label}</dt>
                    <dd className="text-[17px] font-extrabold text-[#0B3C5D] leading-tight">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── How we work ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="How We Work"
            title="Simple, Accountable"
            accent="Billing"
            desc="One contact, clear reporting and no lock-in."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {howWeWork.map((c, i) => (
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

      {/* ── Our values ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="Our Values"
            title="What We"
            accent="Stand For"
            desc="How we run our business and how we talk about it."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((c, i) => (
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

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <CtaBand
            title="Let's talk about your practice"
            text="Book a free 30 minute call, or start with a free revenue audit."
            href="/book-a-call"
            label="Book a Call"
            secondary={{ href: '/#audit', label: 'Get Your Free Audit' }}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
