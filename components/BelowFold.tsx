'use client'
import dynamic from 'next/dynamic'

// Heavy framer-motion components — loaded only after page is interactive,
// not included in the initial JS bundle.
const Process      = dynamic(() => import('./Process'),      { ssr: false })
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false })
const FAQ          = dynamic(() => import('./FAQ'),          { ssr: false })
const Audit        = dynamic(() => import('./Audit'),        { ssr: false })
const Contact      = dynamic(() => import('./Contact'),      { ssr: false })

export default function BelowFold() {
  return (
    <>
      <Process />
      <Testimonials />
      <FAQ />
      <Audit />
      <Contact />
    </>
  )
}
