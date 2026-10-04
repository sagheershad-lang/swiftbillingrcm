import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import PageFAQ from '@/components/PageFAQ'
import { SectionHeader, HeaderLink, CheckBadge, LightCard, CtaBand, faqJsonLd } from '@/components/PageSections'
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

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(pricingFaqs)) }} />
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
                <LightCard className="h-full">
                  <h3 className="text-[17px] font-extrabold text-[#0F172A] mb-2 leading-tight">{c.title}</h3>
                  <p className="text-[15px] md:text-[13.5px] text-[#64748B] leading-relaxed">{c.desc}</p>
                </LightCard>
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
                <LightCard className="h-full">
                  <span className="text-[11px] font-black tracking-[0.1em] text-[#2EC4B6]">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[16px] font-extrabold text-[#0F172A] mt-2 mb-2 leading-tight">{c.title}</h3>
                  <p className="text-[15px] md:text-[13.5px] text-[#64748B] leading-relaxed">{c.desc}</p>
                </LightCard>
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
            desc={<>Every core service below is part of our billing work. <HeaderLink href="/services">See all services</HeaderLink></>}
          />
          <FadeIn>
            <ul className="grid sm:grid-cols-2 gap-3">
              {coreServices.map(s => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-start gap-3 bg-white border border-[#E4EDF5] rounded-2xl p-4 shadow-[0_1px_10px_rgba(11,60,93,0.05)] hover:border-[#2EC4B6]/35 transition-colors duration-300 h-full"
                  >
                    <CheckBadge />
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
            <PageFAQ faqs={pricingFaqs} idPrefix="pricing-faq-answer" />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <CtaBand
            title="Get a clear rate for your practice"
            text="Start with a free revenue audit. We reply within 24 hours, with no obligation."
            href="/#audit"
            label="Get Your Free Audit"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
