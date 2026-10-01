import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import TrustBar from '@/components/TrustBar'
import Results from '@/components/Results'
import Services from '@/components/Services'
import Specialties from '@/components/Specialties'
import About from '@/components/About'
import Footer from '@/components/Footer'
import BelowFold from '@/components/BelowFold'

// Homepage-only FAQPage JSON-LD (service pages output their own in ServicePageLayout)
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you ensure HIPAA compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We operate under a signed Business Associate Agreement (BAA) with every client. All patient data is handled through HIPAA-compliant systems with 256-bit encryption, strict access controls, and audit logging.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients see measurable improvement within 30–60 days. Clean claim rates typically improve within the first billing cycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle denied claims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We identify, appeal, and resubmit every denied claim with documented reasons and track denial trends by payer to fix root causes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you charge for your services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We charge 4–9% of monthly collections — no flat fees, no hidden costs. You only pay when you get paid.',
      },
    },
  ],
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <Hero />
      <TrustStrip />
      <TrustBar />
      <Results />
      <Services />
      <Specialties />
      <About />
      <BelowFold />
      <Footer />
    </main>
  )
}
