'use client'
import { useEffect } from 'react'

const HUBSPOT_SRC = 'https://js-na2.hs-scripts.com/246275410.js'
const EVENTS = ['scroll', 'pointerdown', 'touchstart', 'keydown'] as const
const FALLBACK_MS = 8000

// HubSpot (tracking + chat) costs 1–3s of mobile main-thread time, so it loads on the visitor's
// first scroll, click, touch or keypress, or after 8s with no interaction. Tracking and chat
// still run once loaded; only the moment it loads changes.
export default function HubSpotLoader() {
  useEffect(() => {
    let done = false
    const load = () => {
      if (done) return
      done = true
      cleanup()
      if (document.getElementById('hs-script-loader')) return
      const s = document.createElement('script')
      s.id = 'hs-script-loader'
      s.src = HUBSPOT_SRC
      s.async = true
      s.defer = true
      document.body.appendChild(s)
    }
    const timer = window.setTimeout(load, FALLBACK_MS)
    const cleanup = () => {
      window.clearTimeout(timer)
      EVENTS.forEach(e => window.removeEventListener(e, load))
    }
    EVENTS.forEach(e => window.addEventListener(e, load, { once: true, passive: true }))
    return cleanup
  }, [])

  return null
}
