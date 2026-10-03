import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import PricingFAQ from '@/components/PricingFAQ'
import { coreServices } from '@/lib/services-data'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Medical Billing Pricing and Rates | SwiftBilling RCM',
  description: 'SwiftBilling RCM pricing: typically 4 to 9% of collections, with no setup fee and no long-term contracts. See what affects your rate and what is included.',
  path: '/pricing',
})

const pricingFaqs = [
  {
    q: 'What percentage of collections do you charge?',
    a: 'Most practices pay between 4 and 9% of collections. Your exact rate depends on your specialty, monthly claim volume, the services you choose and the size of any AR backlog, and it is set in your written service agreement.',
  },
  {
    q: 'Is there a setup fee or a long-term contract?',
    a: 'No. There is no setup fee and no long-term contract, so you are never locked in. You only pay when we collect for you.',
  },
  {
    q: 'What if my practice has an AR backlog?',
    a: 'Tell us about it when you request your free audit. We look at the size and age of your unpaid claims, explain how we would work them, and take the backlog into account in your rate before you decide anything.',
  },
  {
    q: 'How do I get an exact rate for my practice?',
    a: 'Request a free revenue audit. We reply within 24 hours and discuss a clear rate for your practice, with no obligation.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pricingFaqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const howItWorks = [
  { title: 'Typically 4 to 9%', desc: 'Your fee is a percentage of the collections we bring in for your practice, typically 4 to 9%.' },
  { title: 'Only When You Get Paid', desc: 'You only pay when we collect for you, so our incentives match yours.' },
  { title: 'One Clear Rate', desc: 'Your rate is set in your written service agreement before we start, so there are no surprises.' },
]

const rateFactors = [
  { title: 'Specialty', desc: 'Some specialties have more complex coding and payer rules than others.' },
  { title: 'Monthly Claim Volume', desc: 'How many claims your practice sends to payers each month.' },
  { title: 'Services Included', desc: 'Which services you choose, from core billing to extended services.' },
  { title: 'AR Backlog', desc: 'The size and age of any unpaid claims you want us to take over.' },
]

function SectionHeader({ eyebrow, title, accent, desc }: { eyebrow: string; title: string; accent: string; desc: ReactNode }) {
  return (
    <FadeIn className="mb-10 sm:mb-12">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-3">{eyebrow}</p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
            {title}{' '}
            <span style={{
              background: 'linear-gradient(90deg, #0B3C5D 0%, #2EC4B6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {accent}
            </span>
          </h2>
        </div>
        <p className="text-[15px] text-[#64748B] leading-relaxed max-w-[380px] lg:text-right lg:pb-1">{desc}</p>
      </div>
      <div className="mt-7 h-px" style={{ background: 'linear-gradient(90deg, #2EC4B6, rgba(46,196,182,0.15), transparent)' }} />
    </FadeIn>
  )
}

function Check() {
  return (
    <span className="w-6 h-6 rounded-full bg-[#EBF9F8] border border-[#BAE8E4] flex items-center justify-center shrink-0">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 6l3 3 5-5" stroke="#0a756c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

const lightCard = 'group relative bg-white border border-[#E4EDF5] rounded-2xl p-6 overflow-hidden shadow-[0_1px_14px_rgba(11,60,93,0.06)] hover:-translate-y-[5px] hover:border-[#2EC4B6]/35 hover:shadow-[0_18px_44px_rgba(11,60,93,0.11)] transition-all duration-300'
const cardLine = <div className="absolute top-0 left-6 h-[2px] w-0 rounded-full bg-[#2EC4B6] group-hover:w-14 transition-all duration-500 ease-out" />

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav />

      <PageHero crumb="Pricing" badge="Simple, Transparent Pricing" titleTop="Medical Billing" titleAccent="Pricing">
        A percentage of collections, typically 4 to 9%. No setup fee, no long-term contracts, and you only pay when you get paid.
      </PageHero>

      {/* ── How our pricing works ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="How Our Pricing Works"
            title="A Percentage of"
            accent="Collections"
            desc="Your fee follows your results: you pay a share of what we collect for you."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {howItWorks.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.07} className="h-full">
                <div className={`${lightCard} h-full`}>
                  {cardLine}
                  <h3 className="text-[17px] font-extrabold text-[#0F172A] mb-2 leading-tight">{c.title}</h3>
                  <p className="text-[15px] md:text-[13.5px] text-[#64748B] leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── What affects your rate ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="Your Rate"
            title="What Affects"
            accent="Your Rate"
            desc="Every practice is different. These four things decide where you fall in the 4 to 9% range."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rateFactors.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.07} className="h-full">
                <div className={`${lightCard} h-full`}>
                  {cardLine}
                  <span className="text-[11px] font-black tracking-[0.1em] text-[#2EC4B6]">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[16px] font-extrabold text-[#0F172A] mt-2 mb-2 leading-tight">{c.title}</h3>
                  <p className="text-[15px] md:text-[13.5px] text-[#64748B] leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is included ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="What Is Included"
            title="Core Billing"
            accent="Services"
            desc={<>Every core service below is part of our billing work. <Link href="/services" className="font-bold text-[#0B3C5D] hover:text-[#0a756c] underline underline-offset-2 max-md:inline-flex max-md:min-h-[44px] max-md:items-center">See all services</Link>.</>}
          />
          <FadeIn>
            <ul className="grid sm:grid-cols-2 gap-3">
              {coreServices.map(s => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-start gap-3 bg-white border border-[#E4EDF5] rounded-2xl p-4 shadow-[0_1px_10px_rgba(11,60,93,0.05)] hover:border-[#2EC4B6]/35 transition-colors duration-300 h-full"
                  >
                    <Check />
                    <span>
                      <span className="block text-[15px] font-extrabold text-[#0F172A] group-hover:text-[#0a756c] transition-colors duration-200">{s.name}</span>
                      <span className="block text-[15px] md:text-[13px] text-[#64748B] leading-relaxed mt-0.5">{s.shortDescription}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── No setup fee, no long-term contracts ──────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'No Setup Fee', desc: 'You pay nothing to get started.' },
                { title: 'No Long-Term Contracts', desc: 'You are never locked in.' },
              ].map(c => (
                <div key={c.title} className="flex items-start gap-4 bg-white border border-[#E4EDF5] rounded-2xl p-6 shadow-[0_1px_14px_rgba(11,60,93,0.06)]">
                  <span
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-[#BAE8E4]"
                    style={{ background: 'linear-gradient(135deg, #EBF9F8 0%, #DFF6F4 100%)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10.5l4 4 8-9" stroke="#0a756c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-[#0F172A] leading-tight mb-1">{c.title}</h3>
                    <p className="text-[15px] md:text-[14px] text-[#64748B]">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="Pricing Questions"
            title="Pricing"
            accent="FAQ"
            desc="Straight answers about how we charge."
          />
          <div className="max-w-[860px]">
            <PricingFAQ faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(115deg, #061d2e 0%, #0B3C5D 55%, #0e4f73 100%)' }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='14' cy='14' r='1.1' fill='rgba(255%2C255%2C255%2C0.04)'/%3E%3C/svg%3E")`,
                  backgroundSize: '28px 28px',
                }}
              />
              <div
                className="absolute right-0 top-0 w-[300px] h-[150px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(46,196,182,0.20) 0%, transparent 65%)' }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
                style={{ background: 'linear-gradient(90deg, #2EC4B6 0%, rgba(46,196,182,0.2) 60%, transparent 100%)' }}
              />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-8 sm:px-10 sm:py-10">
                <div className="text-center md:text-left">
                  <h2 className="text-[clamp(22px,2.6vw,30px)] font-extrabold text-white leading-tight mb-2">Get a clear rate for your practice</h2>
                  <p className="text-[15px] text-white/60">Start with a free revenue audit. We reply within 24 hours, with no obligation.</p>
                </div>
                <Link
                  href="/#audit"
                  className="inline-flex items-center justify-center gap-2 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[15px]
                    px-7 py-4 rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5 transition-all duration-200
                    w-full md:w-auto shrink-0"
                  style={{ boxShadow: '0 0 24px rgba(46,196,182,0.35)' }}
                >
                  Get Your Free Audit
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
