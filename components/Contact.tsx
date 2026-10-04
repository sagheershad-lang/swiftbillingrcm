'use client'
import { useState, FormEvent, useRef } from 'react'
import FadeIn from './FadeIn'
import { m } from 'framer-motion'
import { MONTHLY_COLLECTIONS, US_STATES } from '@/lib/form-options'

const contactDetails = [
  {
    title: 'Email Us',
    value: 'info@swiftbillingrcm.com',
    sub: 'We typically reply within 2 to 4 business hours',
    href: 'mailto:info@swiftbillingrcm.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#2EC4B6" strokeWidth="1.5"/>
        <path d="M2 7l8 5 8-5" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Call Us',
    value: '+1 (512) 737-7488',
    // Non-breaking spaces so narrow cards only wrap after the "·", never inside "Central Time"
    sub: 'Mon to Fri · 8am to 6pm Central Time',
    href: 'tel:+15127377488',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 3h4l1.5 4-2.5 1.5a11 11 0 005.5 5.5L14 11.5 18 13v4a1.5 1.5 0 01-1.5 1.5A16 16 0 012.5 4.5 1.5 1.5 0 014 3z" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Our Address',
    value: '5900 Balcones Dr #7192',
    sub: 'Austin, TX 78731, USA',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" stroke="#2EC4B6" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="10" cy="7" r="2" stroke="#2EC4B6" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Coverage',
    value: 'All 50 US States',
    sub: 'All major specialties nationwide',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#2EC4B6" strokeWidth="1.5"/>
        <path d="M2 10h16M10 2c-2 2.67-3 5.33-3 8s1 5.33 3 8M10 2c2 2.67 3 5.33 3 8s-1 5.33-3 8" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const guarantees = [
  'HIPAA Compliant',
  'No Long-Term Contracts',
  'Free 24-Hour Audit',
  'Dedicated Account Manager',
  'Transparent Reporting',
  'US-Based Support',
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  // Fields flagged with aria-invalid (and pointed at the error message) after a failed submit
  const [invalidFields, setInvalidFields] = useState<string[]>([])
  const formRef = useRef<HTMLFormElement>(null)
  // Set synchronously so a fast double click can't send twice before the button re-renders as disabled
  const sendingRef = useRef(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (sendingRef.current) return
    const form = e.currentTarget
    const field = (n: string) => form.elements.namedItem(n) as HTMLInputElement
    const flag = (names: string[]) => {
      setInvalidFields(names)
      field(names[0])?.focus()
    }
    const empty = ['name', 'practice_name', 'email', 'phone'].filter(n => !field(n).value.trim())
    if (empty.length) {
      setErrorMsg('Please fill in your name, practice name, email and phone number.')
      setStatus('error')
      flag(empty)
      return
    }
    setInvalidFields([])
    // Honeypot check — bots fill hidden fields, humans don't
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement)?.value
    if (honeypot) {
      setStatus('success')
      formRef.current?.reset()
      return
    }
    sendingRef.current = true
    setStatus('submitting')
    setErrorMsg('')
    const data = {
      name:          (form.elements.namedItem('name')          as HTMLInputElement).value,
      email:         (form.elements.namedItem('email')         as HTMLInputElement).value,
      phone:         (form.elements.namedItem('phone')         as HTMLInputElement).value,
      practice_name: (form.elements.namedItem('practice_name') as HTMLInputElement).value,
      specialty:     (form.elements.namedItem('specialty')     as HTMLInputElement).value,
      state:         (form.elements.namedItem('state')         as HTMLSelectElement).value,
      monthly_collections: (form.elements.namedItem('monthly_collections') as HTMLSelectElement).value,
      message:       (form.elements.namedItem('message')       as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        const json = await res.json().catch(() => ({}))
        const msg: string = json?.error || 'Something went wrong. Please try again or email us directly.'
        setErrorMsg(msg)
        setStatus('error')
        if (/valid email/i.test(msg)) flag(['email'])
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    } finally {
      sendingRef.current = false
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden">

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-40"
        style={{ background: 'radial-gradient(ellipse at top, rgba(46,196,182,0.09) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* ── Section header ─────────────────────────────────────────── */}
        <FadeIn className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-3">
                Get in Touch
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
                Let&apos;s Talk About{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #0B3C5D 0%, #2EC4B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Your Practice Revenue
                </span>
              </h2>
            </div>
            <p className="text-[15px] text-[#64748B] leading-relaxed max-w-[360px] lg:text-right lg:pb-1 text-balance">
              Free revenue audit within 24 hours. No obligation and no sales pressure, just a clear look at where your revenue stands.
            </p>
          </div>
          <div className="mt-7 h-px" style={{ background: 'linear-gradient(90deg, #2EC4B6, rgba(46,196,182,0.15), transparent)' }} />
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 sm:gap-10 items-start">

          {/* ── Left: contact info + guarantees ──────────────────────── */}
          <FadeIn direction="left">

            {/* Contact detail cards */}
            <div className="flex flex-col gap-3 mb-4">
              {contactDetails.map((c) => (
                <m.div
                  key={c.title}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-4 bg-white border border-[#E4EDF5] rounded-2xl p-4
                    shadow-[0_1px_10px_rgba(11,60,93,0.05)]
                    hover:border-[#2EC4B6]/35
                    hover:shadow-[0_8px_28px_rgba(11,60,93,0.09)]
                    transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-[#BAE8E4]"
                    style={{ background: 'linear-gradient(135deg, #EBF9F8 0%, #DFF6F4 100%)' }}
                  >
                    {c.icon}
                  </div>

                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.11em] text-[#94A3B8] mb-0.5">{c.title}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        rel="noopener noreferrer"
                        className="relative text-[14.5px] font-bold text-[#0B3C5D] hover:text-[#0a756c] transition-colors block leading-tight max-md:py-[13px] max-md:-my-[13px]"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-[14.5px] font-bold text-[#0F172A] leading-tight">{c.value}</p>
                    )}
                    <p className="text-[15px] md:text-[12.5px] text-[#64748B] mt-0.5">{c.sub}</p>
                  </div>
                </m.div>
              ))}
            </div>

            {/* Guarantees */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(115deg, #061d2e 0%, #0B3C5D 60%, #0e4f73 100%)' }}
            >
              {/* Dot texture */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='1' fill='rgba(255%2C255%2C255%2C0.045)'/%3E%3C/svg%3E")`,
                  backgroundSize: '24px 24px',
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, #2EC4B6, rgba(46,196,182,0.2), transparent)' }}
              />

              <div className="relative z-10 px-6 py-5">
                <p className="text-[10.5px] font-black uppercase tracking-[0.14em] text-[#2EC4B6] mb-4">
                  Our Guarantees
                </p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-2.5">
                  {guarantees.map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#2EC4B6]/15 border border-[#2EC4B6]/30
                        flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5 4-4" stroke="#2EC4B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[15px] md:text-[12.5px] font-medium text-white/65">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Right: form ──────────────────────────────────────────── */}
          <FadeIn direction="right" delay={0.1}>
            <div
              className="bg-white border border-[#E4EDF5] rounded-2xl p-5 sm:p-8
                shadow-[0_4px_32px_rgba(11,60,93,0.08)]"
            >
              {/* Top accent */}
              <div
                className="h-[3px] -mx-5 -mt-5 sm:-mx-8 sm:-mt-8 mb-6 sm:mb-7 rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, #2EC4B6 0%, rgba(46,196,182,0.3) 60%, transparent 100%)' }}
              />

              {status === 'success' ? (
                <div className="text-center py-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'linear-gradient(135deg, #EBF9F8, #DFF6F4)', border: '1px solid #BAE8E4' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M5 14l7 7 11-11" stroke="#2EC4B6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[22px] font-extrabold text-[#0F172A] mb-3">Thank You!</h3>
                  <p className="text-[15px] md:text-[14.5px] text-[#64748B] leading-relaxed max-w-[320px] mx-auto">
                    We&apos;ll review your information and reach out within 24 hours with your free revenue audit findings.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-[20px] font-extrabold text-[#0F172A] mb-1 leading-tight">
                    Get Your Free Audit
                  </h3>
                  <p className="text-[15px] md:text-[13.5px] text-[#64748B] mb-5 sm:mb-7">
                    Fill out the form and we&apos;ll get back to you within 24 hours with a free revenue audit.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Honeypot — hidden from real users, traps bots */}
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <CField label="Your Name *"     name="name"          type="text"  placeholder="Dr. Jane Smith"         maxLength={100} required invalid={invalidFields.includes('name')} />
                      <CField label="Practice Name *" name="practice_name" type="text"  placeholder="Smith Medical Group"    maxLength={150} required invalid={invalidFields.includes('practice_name')} />
                      <CField label="Work Email *"    name="email"         type="email" placeholder="jane@practice.com"      maxLength={254} required invalid={invalidFields.includes('email')} />
                      <CField label="Phone Number *"  name="phone"         type="tel"   placeholder="+1 (512) 000-0000"      maxLength={30}  required invalid={invalidFields.includes('phone')} />
                      <CField label="Specialty"       name="specialty"     type="text"  placeholder="e.g. Internal Medicine" maxLength={100} />
                      <CSelect label="State" name="state" placeholder="Select a state" options={US_STATES} />
                      <div className="sm:col-span-2">
                        <CSelect label="Monthly Collections" name="monthly_collections" placeholder="Select a range" options={MONTHLY_COLLECTIONS} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[11.5px] font-bold text-[#0F172A] uppercase tracking-[0.08em]">
                        Tell Us Your Biggest Challenge
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        maxLength={2000}
                        placeholder="e.g. High denial rates, slow reimbursements, AR backlog..."
                        className="bg-[#F8FAFC] border border-[#D1DBE8] rounded-xl px-4 py-3
                          text-[16px] sm:text-[14px] text-[#0F172A] placeholder:text-[#94A3B8]
                          outline-none focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/10
                          transition-all duration-200 resize-none w-full font-medium"
                      />
                    </div>

                    {status === 'error' && (
                      <p id="contact-form-error" role="alert" className="text-[13px] text-red-600 font-medium bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        {errorMsg}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#2EC4B6] text-[#0B3C5D] font-extrabold text-[16px]
                        py-4 rounded-xl hover:bg-[#3dd9cb] hover:-translate-y-0.5
                        transition-all duration-200 mt-1
                        disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                      style={{ boxShadow: '0 0 30px rgba(46,196,182,0.30)' }}
                    >
                      {status === 'submitting' ? 'Sending…' : (
                        <span className="inline-flex items-center justify-center gap-2">
                          Get My Free Audit
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      )}
                    </button>

                    <p className="text-[12px] text-[#94A3B8] text-center font-medium">
                      🔒 HIPAA Compliant · No spam · No obligation whatsoever
                    </p>
                  </form>

                  <p className="mt-4 pt-4 border-t border-[#E4EDF5] text-center text-[15px] md:text-[13.5px] text-[#64748B]">
                    Prefer to talk?{' '}
                    <a
                      href="/book-a-call"
                      className="font-bold text-[#0B3C5D] hover:text-[#0a756c] underline underline-offset-2 transition-colors duration-200 max-md:inline-flex max-md:min-h-[44px] max-md:items-center"
                    >
                      Book a 30 minute call
                    </a>
                  </p>
                </>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}

/* ── Optional select (same look as CField; the API accepts only these options) ── */
function CSelect({ label, name, placeholder, options }: {
  label: string
  name: string
  placeholder: string
  options: readonly string[]
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[11.5px] font-bold text-[#0F172A] uppercase tracking-[0.08em]">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          defaultValue=""
          className="w-full appearance-none bg-[#F8FAFC] border border-[#D1DBE8] rounded-xl pl-4 pr-10 py-3
            text-[16px] sm:text-[14px] text-[#0F172A]
            outline-none focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/10
            transition-all duration-200 font-medium cursor-pointer"
        >
          <option value="">{placeholder}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <path d="M3 4.5l3 3 3-3" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

/* ── Reusable field ─────────────────────────────────────────────── */
function CField({ label, name, type, placeholder, maxLength, required, invalid }: {
  label: string
  name: string
  type: string
  placeholder: string
  maxLength: number
  required?: boolean
  invalid?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[11.5px] font-bold text-[#0F172A] uppercase tracking-[0.08em]">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? 'contact-form-error' : undefined}
        className="bg-[#F8FAFC] border border-[#D1DBE8] rounded-xl px-4 py-3
          text-[16px] sm:text-[14px] text-[#0F172A] placeholder:text-[#94A3B8]
          outline-none focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/10
          transition-all duration-200 font-medium"
      />
    </div>
  )
}
