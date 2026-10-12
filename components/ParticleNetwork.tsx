'use client'
import { useEffect, useRef } from 'react'

/** Particle network for dark sections: dots joined by thin aqua lines (approved preview).
 *  One shared component. It only animates while its section is on screen (IntersectionObserver),
 *  pauses when the tab is hidden, waits until the page has loaded and the browser is idle, and draws
 *  nothing with prefers-reduced-motion. Phones get fewer dots, a lower canvas resolution and 30fps.
 *  The parent section needs `relative overflow-hidden` and its content `relative z-10`. */
export default function ParticleNetwork() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = ref.current
    const host = cv?.parentElement
    const c = cv?.getContext('2d')
    if (!cv || !host || !c) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const phone = window.matchMedia('(max-width: 767px)').matches
    const dpr = Math.min(phone ? 1.5 : 2, window.devicePixelRatio || 1)
    const frameMs = phone ? 33 : 0 // phones draw about 30 frames a second
    let last = 0
    let W = 0, H = 0, raf = 0, running = false, visible = false, loaded = document.readyState === 'complete'
    let pts: { x: number; y: number; vx: number; vy: number; r: number }[] = []

    const size = () => {
      const r = host.getBoundingClientRect()
      W = r.width; H = r.height
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr)
      c.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    size()
    // Same density as the preview on desktop (one dot per 22px of width, 18 to 48); phones use 10 to 16
    const n = Math.round(phone ? Math.min(16, Math.max(10, W / 26)) : Math.min(48, Math.max(18, W / 22)))
    for (let i = 0; i < n; i++) {
      pts.push({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0004, vy: (Math.random() - 0.5) * 0.0006, r: Math.random() * 1.5 + 0.7 })
    }

    const draw = (t: number) => {
      if (!visible || document.hidden) { running = false; return }
      raf = requestAnimationFrame(draw)
      if (t - last < frameMs) return
      last = t
      c.clearRect(0, 0, W, H)
      const link = Math.min(140, W * 0.14)
      c.lineWidth = 1
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
        const x = p.x * W, y = p.y * H
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j], dx = x - q.x * W, dy = y - q.y * H, d = Math.sqrt(dx * dx + dy * dy)
          if (d < link) {
            c.strokeStyle = `rgba(127,245,234,${0.2 * (1 - d / link)})`
            c.beginPath(); c.moveTo(x, y); c.lineTo(q.x * W, q.y * H); c.stroke()
          }
        }
        c.fillStyle = 'rgba(200,252,247,0.6)'
        c.beginPath(); c.arc(x, y, p.r, 0, 6.283); c.fill()
      }
    }
    const kick = () => {
      if (!running && visible && loaded && !document.hidden) { running = true; raf = requestAnimationFrame(draw) }
    }

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick() })
    io.observe(host)
    const ro = new ResizeObserver(size)
    ro.observe(host)
    const onVisibility = () => kick()
    document.addEventListener('visibilitychange', onVisibility)
    // Start on the first idle moment after load, so the animation never competes with page start up
    const idle = (fn: () => void) => (typeof window.requestIdleCallback === 'function' ? window.requestIdleCallback(fn, { timeout: 2000 }) : setTimeout(fn, 600))
    const onLoad = () => { idle(() => { loaded = true; kick() }) }
    if (loaded) { loaded = false; onLoad() } else window.addEventListener('load', onLoad, { once: true })

    return () => {
      visible = false // also stops a start that is still waiting for idle time
      cancelAnimationFrame(raf)
      io.disconnect(); ro.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('load', onLoad)
      pts = []
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" />
}
