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

export default function Home() {
  return (
    <main>
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
