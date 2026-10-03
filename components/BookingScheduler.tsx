'use client'
import { useEffect, useRef, useState } from 'react'

export const MEETINGS_URL = 'https://meetings-na2.hubspot.com/michael219'
const EMBED_SCRIPT_ID = 'hs-meetings-embed'
const EMBED_SCRIPT_SRC = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'

declare global {
  interface Window { hbspt?: { meetings?: { create?: (selector: string) => void } } }
}

/** HubSpot's official meetings embed. The script only loads on the page that renders this component.
 *  It turns .meetings-iframe-container into an iframe and skips containers that already have one,
 *  so calling it again after client side navigation is safe. */
export default function BookingScheduler() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Hide the loading placeholder once HubSpot's iframe has loaded its content
    const watchIframe = (iframe: HTMLIFrameElement) => iframe.addEventListener('load', () => setReady(true), { once: true })
    const observer = new MutationObserver(() => {
      const iframe = container.querySelector('iframe')
      if (iframe) { observer.disconnect(); watchIframe(iframe) }
    })
    observer.observe(container, { childList: true })

    if (window.hbspt?.meetings?.create) {
      // Script already loaded (e.g. returning to this page): build the iframe for the new container
      window.hbspt.meetings.create('.meetings-iframe-container')
    } else if (!document.getElementById(EMBED_SCRIPT_ID)) {
      const s = document.createElement('script')
      s.id = EMBED_SCRIPT_ID
      s.src = EMBED_SCRIPT_SRC
      s.async = true
      s.onerror = () => setFailed(true)
      document.body.appendChild(s)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-[615px]">
      {/* HubSpot appends its iframe here; React renders no children inside it */}
      <div
        ref={containerRef}
        className="meetings-iframe-container"
        data-src={`${MEETINGS_URL}?embed=true`}
        data-title="Book a free billing consultation with SwiftBilling RCM"
      />

      {/* Loading state, and a direct link if the scheduler cannot load (for example if a blocker stops it) */}
      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white text-center px-6" role="status">
          {!failed && <span className="w-8 h-8 rounded-full border-2 border-[#BAE8E4] border-t-[#2EC4B6] animate-spin motion-reduce:animate-none" aria-hidden="true" />}
          <p className="text-[15px] md:text-[14px] text-[#64748B]">
            {failed ? 'The scheduler could not load here.' : 'Loading available times...'}
          </p>
          <a
            href={MEETINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] md:text-[14px] font-semibold text-[#0B3C5D] hover:text-[#0a756c] underline underline-offset-2 max-md:min-h-[44px] max-md:inline-flex max-md:items-center"
          >
            Open the calendar in a new tab
          </a>
        </div>
      )}
    </div>
  )
}
