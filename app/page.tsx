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
import { homeFaqs } from '@/lib/home-faqs'
import { SITE_URL } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
}

// Homepage-only FAQPage JSON-LD, built from the same data as the visible FAQ (service pages output their own)
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
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
