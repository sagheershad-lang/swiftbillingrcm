import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import PageFAQ from '@/components/PageFAQ'
import { SectionHeader, HeaderLink, LightCard, IconTile, CtaBand, faqJsonLd } from '@/components/PageSections'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Security and HIPAA Compliance for Billing | SwiftBilling RCM',
  description: 'How SwiftBilling RCM protects patient data: HIPAA compliant workflows, a signed BAA with every client, secure access you control, and limited staff access.',
  path: '/security',
})

// Every statement below is one the site already makes (homepage FAQ, Why Practices Choose Us,
// Privacy Policy) or one the owner approved for this page. No SOC 2, HITRUST or other certification claims.
const securityFaqs = [
  {
    q: 'Do you sign a Business Associate Agreement?',
    a: 'Yes. We sign a Business Associate Agreement (BAA) with every client before we access or process any protected health information.',
  },
  {
    q: 'How do you access our EHR and clearinghouse?',
    a: 'Through secure remote access, using credentials your practice controls. You can revoke our access at any time, and there is nothing new to install.',
  },
  {
    q: 'Who on your team can see our patient data?',
    a: 'Only the billing staff assigned to your account.',
  },
  {
    q: 'How is patient data protected?',
    a: 'Patient data is handled through HIPAA-compliant systems with encrypted connections, access limited to the billing staff assigned to your account, and access you can revoke at any time. Our entire team is trained on HIPAA requirements.',
  },
]

const workflows = [
  {
    title: 'Protected Systems',
    desc: 'Patient data is handled through HIPAA-compliant systems with encrypted connections, access limited to the billing staff assigned to your account, and access you can revoke at any time.',
    icon: <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: 'A Trained Team',
    desc: 'Our entire team is trained on HIPAA requirements.',
    icon: <path d="M8 11a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 2.7-5 6-5s6 2 6 5M16 11a3 3 0 100-6M18 15c2.2.4 4 2.2 4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>,
  },
  {
    title: 'Strict HIPAA Standards',
    desc: 'Every process, system and team member operates under strict HIPAA standards.',
    icon: <path d="M10 17a7 7 0 100-14 7 7 0 000 14zM21 21l-6-6M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
]

const access = [
  {
    title: 'Secure Remote Access',
    desc: 'We connect to your systems through secure remote access, using credentials your practice controls.',
    icon: <path d="M5 11h14v10H5zM8 11V7a4 4 0 018 0v4M12 15v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: 'You Stay in Control',
    desc: 'The credentials belong to your practice, and you can revoke our access at any time.',
    icon: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
  {
    title: 'Nothing New to Install',
    desc: 'We work inside the EHR and clearinghouse you already use, with no migration required.',
    icon: <path d="M4 5h16v11H4zM9 20h6M12 16v4M8 10l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>,
  },
]

const neverEmail = [
  'Patient names together with diagnoses, dates of service or treatment details',
  'Insurance ID numbers, dates of birth or Social Security numbers',
  'Copies of claims, EOBs or medical records',
  'Login passwords for your EHR, clearinghouse or payer portals',
]

const Icon = ({ children }: { children: ReactNode }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">{children}</svg>
)

/** Neutral cross for the "never send by email" list (a green check would read as "do this") */
const CrossBadge = () => (
  <span className="w-6 h-6 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0">
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3 3l6 6M9 3l-6 6" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  </span>
)

export default function Security() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(securityFaqs)) }} />
      <Nav />

      <PageHero crumb="Security" badge="HIPAA Compliant · BAA With Every Client" titleTop="Security and" titleAccent="HIPAA Compliance">
        How we protect your patients&apos; information and your practice&apos;s systems while we manage your billing.
      </PageHero>

      {/* ── HIPAA compliant workflows ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="HIPAA Compliant Workflows"
            title="Built Around"
            accent="HIPAA"
            desc="How we keep patient information protected at every step of your billing."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {workflows.map((c, i) => (
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

      {/* ── Business Associate Agreement ──────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="relative bg-white border border-[#E4EDF5] rounded-2xl p-6 sm:p-10 shadow-[0_1px_14px_rgba(11,60,93,0.06)] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, #2EC4B6 0%, rgba(46,196,182,0.3) 60%, transparent 100%)' }} />
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-[#BAE8E4] text-[#0a756c]"
                  style={{ background: 'linear-gradient(135deg, #EBF9F8 0%, #DFF6F4 100%)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9zM14 3v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-2">Business Associate Agreement</p>
                  <h2 className="text-[clamp(22px,2.6vw,30px)] font-extrabold text-[#0F172A] leading-tight mb-3">A Signed BAA With Every Client</h2>
                  <p className="text-[15px] md:text-[14.5px] text-[#64748B] leading-relaxed max-w-[720px]">
                    Before we access or process any protected health information (PHI), we sign a Business Associate
                    Agreement with your practice, as HIPAA requires. Every client engagement includes one, without exception.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── How we access your systems ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="System Access"
            title="How We Access"
            accent="Your Systems"
            desc={<>We work inside the systems you already use. <HeaderLink href="/ehr-integrations">See the platforms we work with</HeaderLink></>}
          />
          <div className="grid md:grid-cols-3 gap-5">
            {access.map((c, i) => (
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

      {/* ── Who can see your data + what not to email ─────────────────── */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="Your Data"
            title="Who Can See"
            accent="Your Data"
            desc="Access is limited to the people who need it to do your billing."
          />
          <div className="grid lg:grid-cols-2 gap-5">
            <FadeIn className="h-full">
              <LightCard className="h-full">
                <IconTile>
                  <Icon><path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></Icon>
                </IconTile>
                <h3 className="text-[18px] font-extrabold text-[#0F172A] mb-2 leading-tight">Only Your Assigned Billing Staff</h3>
                <p className="text-[15px] md:text-[14px] text-[#64748B] leading-relaxed">
                  Only the billing staff assigned to your account can see your practice&apos;s data. Your dedicated
                  account manager is your single point of contact.
                </p>
              </LightCard>
            </FadeIn>

            <FadeIn delay={0.07} className="h-full">
              <LightCard className="h-full">
                <IconTile>
                  <Icon><path d="M4 6h16v12H4zM4 7l8 6 8-6M3 3l18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></Icon>
                </IconTile>
                <h3 className="text-[18px] font-extrabold text-[#0F172A] mb-3 leading-tight">Please Never Send Us by Email</h3>
                <ul className="flex flex-col gap-2.5">
                  {neverEmail.map(item => (
                    <li key={item} className="flex items-start gap-3 text-[15px] md:text-[14px] text-[#64748B] leading-relaxed">
                      <CrossBadge />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] md:text-[13.5px] text-[#64748B] leading-relaxed mt-4">
                  Instead, share patient documents through your EHR or a secure method we agree on with you, and we will set
                  up system access with you directly. The website form, chat and booking page are for business questions only.
                </p>
              </LightCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            eyebrow="Security Questions"
            title="Security"
            accent="FAQ"
            desc="Straight answers about how we protect your practice."
          />
          <div className="max-w-[860px]">
            <PageFAQ faqs={securityFaqs} idPrefix="security-faq-answer" />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <CtaBand
            title="Questions about security?"
            text="Book a free 30 minute call and we will walk you through how we protect your practice."
            href="/book-a-call"
            label="Book a Call"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
