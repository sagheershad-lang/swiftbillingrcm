'use client'
import { useEffect } from 'react'

const HUBSPOT_SRC = 'https://js-na2.hs-scripts.com/246275410.js'
const EVENTS = ['scroll', 'pointerdown', 'touchstart', 'keydown'] as const
const FALLBACK_MS = 8000

declare global {
  interface Window { _hsp?: unknown[][] }
}

/** Adds the HubSpot script once. Safe to call any number of times. */
export function loadHubSpot() {
  if (document.getElementById('hs-script-loader')) return
  const s = document.createElement('script')
  s.id = 'hs-script-loader'
  s.src = HUBSPOT_SRC
  s.async = true
  s.defer = true
  document.body.appendChild(s)
}

/** Reopens the HubSpot cookie consent banner, loading HubSpot first if needed.
 *  HubSpot reads the _hsp queue when it loads, so the command also works before the script is ready. */
export function showHubSpotCookieBanner() {
  loadHubSpot()
  window._hsp = window._hsp || []
  window._hsp.push(['showBanner'])
}

// HubSpot (tracking + chat) costs 1 to 3s of mobile main-thread time, so it loads on the visitor's
// first scroll, click, touch or keypress, or after 8s with no interaction. Tracking and chat
// still run once loaded; only the moment it loads changes.
export default function HubSpotLoader() {
  useEffect(() => {
    let done = false
    const load = () => {
      if (done) return
      done = true
      cleanup()
      loadHubSpot()
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
