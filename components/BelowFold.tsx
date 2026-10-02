'use client'
import dynamic from 'next/dynamic'

// Server-rendered (content is in the initial HTML for SEO and native #anchor links),
// but each section's JS stays in its own chunk instead of the main bundle.
const Process      = dynamic(() => import('./Process'))
const Testimonials = dynamic(() => import('./Testimonials'))
const FAQ          = dynamic(() => import('./FAQ'))
const Audit        = dynamic(() => import('./Audit'))
const Contact      = dynamic(() => import('./Contact'))

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
