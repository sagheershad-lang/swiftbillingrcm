'use client'
import { useState, useEffect, useRef } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// mobileOnly: shown in the mobile menu only (the desktop bar has no room for it at 1280px)
const links = [
  { href: '/services',       label: 'Services' },
  { href: '/#specialties',   label: 'Specialties' },
  { href: '/#process',       label: 'Process' },
  { href: '/#why-us',        label: 'Why Us' },
  { href: '/#testimonials',  label: 'Our Approach', mobileOnly: true },
  { href: '/pricing',        label: 'Pricing',      mobileOnly: true },
  { href: '/#faq',           label: 'FAQ' },
]

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group shrink-0">
      <div className="w-8 h-8 rounded-lg bg-[#0B3C5D] flex items-center justify-center shadow-md group-hover:shadow-[0_0_16px_rgba(46,196,182,0.4)] transition-shadow duration-300">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M3 14L7.5 8.5L11 11.5L17 4.5" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4.5H17V7.5" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span className={`font-extrabold text-[17px] tracking-[-0.02em] leading-none transition-colors duration-300 ${scrolled ? 'text-[#0B3C5D] group-hover:text-[#0a756c]' : 'text-white group-hover:text-[#2EC4B6]'}`}>
        SwiftBilling<span className="text-[#2EC4B6]"> RCM</span>
      </span>
    </Link>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lock page scroll behind the open mobile menu (html is the scroller because of its overflow-x rule)
  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    html.style.overflow = 'hidden'
    return () => { html.style.overflow = '' }
  }, [open])

  // Escape closes the mobile menu and returns focus to the menu button
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/97 backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_1px_12px_rgba(11,60,93,0.06)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center gap-8">

        <Logo scrolled={scrolled} />

        {/* Nav links */}
        <ul className="hidden lg:flex items-center gap-9 list-none flex-1">
          {links.filter(l => !l.mobileOnly).map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-[14.5px] font-semibold whitespace-nowrap transition-colors duration-200 group/link ${scrolled ? 'text-[#475569] hover:text-[#0a756c]' : 'text-white/80 hover:text-[#2EC4B6]'}`}
              >
                {l.label}
                {/* Animated underline */}
                <span className="absolute -bottom-[3px] left-0 h-[2px] w-0 rounded-full bg-[#2EC4B6] group-hover/link:w-full transition-all duration-300 ease-out" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">

          {/* Contact — inline, no labels, no boxes */}
          <div className={`flex items-center gap-4 text-[13px] pr-5 border-r ${scrolled ? 'border-[#E2E8F0]' : 'border-white/15'}`}>
            {/* Email — hidden on smaller lg screens, visible on xl+ */}
            <a
              href="mailto:info@swiftbillingrcm.com"
              className={`hidden xl:flex items-center gap-1.5 font-medium transition-all duration-200 hover:bg-[#2EC4B6]/10 rounded-lg px-2 py-1 -mx-2 -my-1 ${scrolled ? 'text-[#64748B] hover:text-[#0a756c]' : 'text-white/65 hover:text-[#2EC4B6]'}`}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M1 5l6 3.5L13 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              info@swiftbillingrcm.com
            </a>

            <span className={`hidden xl:inline select-none ${scrolled ? 'text-[#CBD5E1]' : 'text-white/20'}`}>·</span>

            <a
              href="tel:+15127377488"
              className={`flex items-center gap-1.5 font-semibold transition-all duration-200 hover:bg-[#2EC4B6]/10 rounded-lg px-2 py-1 -mx-2 -my-1 ${scrolled ? 'text-[#0B3C5D] hover:text-[#0a756c]' : 'text-white/90 hover:text-[#2EC4B6]'}`}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 2h2.8l1.2 3-1.8 1.1a8 8 0 003.2 3.2L9 7.5l3 1.2V11a1 1 0 01-1 1A10.5 10.5 0 011.5 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +1 (512) 737-7488
            </a>
          </div>

          {/* Primary CTA */}
          <Link
            href="/#audit"
            className="inline-flex items-center gap-1.5 bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[14px] px-5 py-[10px] rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_14px_rgba(46,196,182,0.35)] whitespace-nowrap"
          >
            Get Started
            <svg width="12" height="12" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7.5 3L11 6.5 7.5 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>

        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ml-auto -mr-1 w-11 h-11 flex flex-col justify-center items-center gap-[5px] rounded-lg hover:bg-[#2EC4B6]/12 transition-colors duration-200 ${scrolled ? 'text-[#0B3C5D]' : 'text-white'}`}
          ref={toggleRef}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block h-[1.5px] w-5 bg-current rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block h-[1.5px] w-5 bg-current rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-5 bg-current rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#E2E8F0]"
          >
            <div className="px-6 py-4 flex flex-col gap-0.5">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 text-[15px] font-semibold text-[#475569] hover:text-[#0B3C5D] hover:bg-[#F1F5F9] py-3 px-3 -mx-3 rounded-xl transition-all duration-200 border-b border-[#F8FAFC] last:border-0 group/mlink"
                >
                  <span className="w-0 h-[14px] bg-[#2EC4B6] rounded-full group-hover/mlink:w-[3px] transition-all duration-200 shrink-0" />
                  {l.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="tel:+15127377488"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-[14px] font-semibold text-[#0B3C5D] hover:text-[#0a756c] transition-colors duration-200 min-h-[44px]"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 2h2.8l1.2 3-1.8 1.1a8 8 0 003.2 3.2L9 7.5l3 1.2V11a1 1 0 01-1 1A10.5 10.5 0 011.5 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  +1 (512) 737-7488
                </a>
                <Link
                  href="/#audit"
                  onClick={() => setOpen(false)}
                  className="text-center bg-[#2EC4B6] text-[#0B3C5D] font-bold text-[14px] px-5 py-3.5 rounded-xl shadow-[0_4px_14px_rgba(46,196,182,0.3)] hover:bg-[#3dd9cb] hover:shadow-[0_6px_20px_rgba(46,196,182,0.45)] active:scale-[0.98] transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
