'use client'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Heavy framer-motion components — loaded only after page is interactive,
// not included in the initial JS bundle.
const Process      = dynamic(() => import('./Process'),      { ssr: false })
const Testimonials = dynamic(() => import('./Testimonials'), { ssr: false })
const FAQ          = dynamic(() => import('./FAQ'),          { ssr: false })
const Audit        = dynamic(() => import('./Audit'),        { ssr: false })
const Contact      = dynamic(() => import('./Contact'),      { ssr: false })

const LATE_SECTION_IDS = ['process', 'testimonials', 'faq', 'audit', 'contact']

// These sections aren't in the server HTML, so a link like /#faq from another
// page has nothing to scroll to on load. Once they have all mounted (so nothing
// above the target shifts afterwards), jump to the hash target like the browser would.
function useScrollToLateHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!LATE_SECTION_IDS.includes(id)) return

    const tryScroll = () => {
      if (!LATE_SECTION_IDS.every(s => document.getElementById(s))) return false
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
      return true
    }
    if (tryScroll()) return
    const observer = new MutationObserver(() => {
      if (tryScroll()) stop()
    })
    const timer = setTimeout(() => stop(), 10000)
    const stop = () => { observer.disconnect(); clearTimeout(timer) }
    observer.observe(document.body, { childList: true, subtree: true })
    return stop
  }, [])
}

export default function BelowFold() {
  useScrollToLateHash()
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
