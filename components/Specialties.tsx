'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const featured = [
  {
    name: 'Family Practice',
    desc: 'Comprehensive billing support for primary care providers.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="4" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M6 24v-2a8 8 0 0116 0v2" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M11 13.5c0 1.657 1.343 3 3 3s3-1.343 3-3" stroke="#2EC4B6" strokeWidth="1.4" strokeLinecap="round" opacity=".45"/>
      </svg>
    ),
  },
  {
    name: 'Cardiology',
    desc: 'Specialized cardiac billing, procedures, and diagnostics.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 22s-9-6-9-12a5 5 0 0110 0 5 5 0 0110 0c0 6-11 12-11 12z" stroke="#2EC4B6" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M8.5 14h3l2-3.5 2 7 2-3.5H19.5" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Psychiatry',
    desc: 'Expertise in behavioral health and mental health billing.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M6 13a8 8 0 1114.9 4L14 24l-6.9-7A7.97 7.97 0 016 13z" stroke="#2EC4B6" strokeWidth="1.7" strokeLinejoin="round"/>
        <circle cx="10.5" cy="12" r="1.2" fill="#2EC4B6"/>
        <circle cx="17.5" cy="12" r="1.2" fill="#2EC4B6"/>
        <path d="M10.5 16.5c1 1.3 2.5 1.8 3.5 1.8s2.5-.5 3.5-1.8" stroke="#2EC4B6" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Internal Medicine',
    desc: 'Accurate coding for complex internal medicine cases.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="8.5" r="3.5" stroke="#2EC4B6" strokeWidth="1.7"/>
        <path d="M7 24v-3a7 7 0 0114 0v3" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M11.5 14.5l-2.5 3 2.5 1.5" stroke="#2EC4B6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".6"/>
        <path d="M16.5 14.5l2.5 3-2.5 1.5" stroke="#2EC4B6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity=".6"/>
      </svg>
    ),
  },
  {
    name: 'Orthopedics',
    desc: 'Streamlined billing for surgeries, joint care, and rehab.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M10 5c-1.5 0-2.5 1-2.5 2.5S9 10 9.5 11.5 10 15 9 17c-.7 1.3-2.5 2-2.5 2" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M18 5c1.5 0 2.5 1 2.5 2.5S19 10 18.5 11.5 18 15 19 17c.7 1.3 2.5 2 2.5 2" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M10 5c.8-.5 2-.8 4-.8s3.2.3 4 .8" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M6.5 19c1 .8 3 1.2 7.5 1.2s6.5-.4 7.5-1.2" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <rect x="11.5" y="12" width="5" height="3" rx="1.5" fill="#2EC4B6" opacity=".35"/>
      </svg>
    ),
  },
  {
    name: 'Urgent Care',
    desc: 'Fast, efficient billing for urgent care and walk-in clinics.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="5" stroke="#2EC4B6" strokeWidth="1.7"/>
        <path d="M14 8.5v11M8.5 14h11" stroke="#2EC4B6" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Pediatrics',
    desc: "Dedicated billing support for children's healthcare services.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M5 18c0-5 2.5-8 5.5-9.5" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M23 18c0-5-2.5-8-5.5-9.5" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M5 18c1 2 3.5 4 9 4s8-2 9-4" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="14" cy="15.5" r="2.5" stroke="#2EC4B6" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Nephrology',
    desc: 'Specialized kidney care billing and chronic disease management.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M10 5C7 5 5 7.5 5 10.5c0 4 3 7.5 5.5 9.5L14 22l3.5-2c2.5-2 5.5-5.5 5.5-9.5C23 7.5 21 5 18 5c-2 0-3.2 1.2-4 2.5C13.2 6.2 12 5 10 5z" stroke="#2EC4B6" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M8 10.5c.5-2 1.8-3 3.5-3" stroke="#2EC4B6" strokeWidth="1.4" strokeLinecap="round" opacity=".7"/>
      </svg>
    ),
  },
]

const extra = [
  {
    name: 'Dermatology',
    desc: 'Accurate billing for skin procedures, biopsies, and cosmetic treatments.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="14" rx="9" ry="11" stroke="#2EC4B6" strokeWidth="1.7"/>
        <path d="M9.5 10c1.5-1.2 3.5-1.5 5-1" stroke="#2EC4B6" strokeWidth="1.4" strokeLinecap="round" opacity=".6"/>
        <path d="M10 14c1-.8 2.5-1.2 4-.8" stroke="#2EC4B6" strokeWidth="1.4" strokeLinecap="round" opacity=".6"/>
        <path d="M10.5 18c1-.6 2-.6 3-.3" stroke="#2EC4B6" strokeWidth="1.4" strokeLinecap="round" opacity=".6"/>
      </svg>
    ),
  },
  {
    name: 'Neurology',
    desc: 'Expert billing for neurological procedures, EEGs, and chronic conditions.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 6c-4 0-7 3-7 6 0 1.5.5 2.8 1.4 3.8C7.5 16.8 7 18 7 19.5c0 1.5 1 2.5 2 2.5h10c1 0 2-1 2-2.5 0-1.5-.5-2.7-1.4-3.7C20.5 14.8 21 13.5 21 12c0-3-3-6-7-6z" stroke="#2EC4B6" strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M14 6v3M10 11c1.2.8 2.2 2.5 2.5 4M18 11c-1.2.8-2.2 2.5-2.5 4" stroke="#2EC4B6" strokeWidth="1.3" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
  },
  {
    name: 'Gastroenterology',
    desc: 'Comprehensive billing for GI procedures, colonoscopies, and endoscopies.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M10 5c-2.5 0-4 2-4 4.5 0 3 2.5 4.5 4 6.5 1.5 2 2 4.5 4 6 2-1.5 2.5-4 4-6 1.5-2 4-3.5 4-6.5C22 7 20.5 5 18 5c-1.5 0-2.5.8-3 2-.5-1.2-1.5-2-3-2h-2z" stroke="#2EC4B6" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Pain Management',
    desc: 'Precise billing for interventional pain procedures and chronic pain treatment.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#2EC4B6" strokeWidth="1.7"/>
        <circle cx="14" cy="14" r="4.5" stroke="#2EC4B6" strokeWidth="1.2" opacity=".4"/>
        <path d="M15.5 9l-3 5.5h4.5L13.5 20" stroke="#2EC4B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Radiology',
    desc: 'Specialized billing for imaging, X-rays, MRIs, and diagnostic radiology.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="#2EC4B6" strokeWidth="1.7"/>
        <circle cx="14" cy="14" r="4" stroke="#2EC4B6" strokeWidth="1.5"/>
        <path d="M4 10h5M19 10h5M4 18h5M19 18h5M10 4v5M10 19v5M18 4v5M18 19v5" stroke="#2EC4B6" strokeWidth="1.1" strokeLinecap="round" opacity=".4"/>
      </svg>
    ),
  },
  {
    name: 'Oncology',
    desc: 'Accurate billing for chemotherapy, radiation, and oncology care management.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 4c-3.5 0-6 3-6 6.5 0 2.5 1.5 4.8 3.5 5.8L14 24l2.5-7.7C18.5 15.3 20 13 20 10.5 20 7 17.5 4 14 4z" stroke="#2EC4B6" strokeWidth="1.7" strokeLinejoin="round"/>
        <circle cx="14" cy="10" r="2.5" stroke="#2EC4B6" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    name: 'Pulmonology',
    desc: 'Specialized billing for respiratory procedures and chronic lung conditions.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 5v7" stroke="#2EC4B6" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 10C11 10 7 12 7 16c0 2.5 1 4 2.5 5S13 22.5 14 22" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M14 10c3 0 7 2 7 6 0 2.5-1 4-2.5 5S15 22.5 14 22" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M9.5 17c0 1.5.5 2.8 1.5 3.5M18.5 17c0 1.5-.5 2.8-1.5 3.5" stroke="#2EC4B6" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
  },
  {
    name: 'OB/GYN',
    desc: 'Complete billing for obstetrics, gynecology, and maternal care services.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="11" r="5" stroke="#2EC4B6" strokeWidth="1.7"/>
        <path d="M14 16v7M11 20h6" stroke="#2EC4B6" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 8.5C12 6.5 14 6 14 6s2 .5 3 2.5" stroke="#2EC4B6" strokeWidth="1.3" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
  },
  {
    name: 'Endocrinology',
    desc: 'Expert billing for diabetes management, thyroid, and hormonal conditions.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" stroke="#2EC4B6" strokeWidth="1.7"/>
        <circle cx="7" cy="10" r="2.5" stroke="#2EC4B6" strokeWidth="1.4"/>
        <circle cx="21" cy="10" r="2.5" stroke="#2EC4B6" strokeWidth="1.4"/>
        <circle cx="14" cy="22" r="2.5" stroke="#2EC4B6" strokeWidth="1.4"/>
        <path d="M9.5 11.5L11 12.5M18.5 11.5L17 12.5M14 18v-1.5" stroke="#2EC4B6" strokeWidth="1.2" strokeLinecap="round" opacity=".6"/>
      </svg>
    ),
  },
  {
    name: 'Physical Therapy',
    desc: 'Streamlined billing for PT evaluations, modalities, and rehab sessions.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="6" r="2.5" stroke="#2EC4B6" strokeWidth="1.6"/>
        <path d="M14 8.5v6.5" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M7.5 12l6.5 3 6.5-3" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M10 15l-2.5 7M18 15l2.5 7" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Occupational Therapy',
    desc: 'Accurate billing for OT assessments, adaptive techniques, and daily-living programs.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M7 18V10.5a2 2 0 014 0V14" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M11 14v-3a2 2 0 014 0v3" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M15 14.5V13a2 2 0 014 0v1.5" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M7 18c0 2 1.5 5 7 5s7-3 7-5v-3.5" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'General Surgery',
    desc: 'Comprehensive billing for surgical procedures, pre-op, and post-op care.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M7 22L21 7" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M21 7l-4.5 1-1 4.5" stroke="#2EC4B6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9.5" cy="20" r="2.2" stroke="#2EC4B6" strokeWidth="1.4"/>
        <path d="M8 14.5l3.5-3.5" stroke="#2EC4B6" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
  },
]

function SpecialtyCard({
  s,
  i,
  useViewport = true,
  expanded = false,
}: {
  s: { name: string; desc: string; icon: React.ReactNode }
  i: number
  useViewport?: boolean
  expanded?: boolean
}) {
  const viewportProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-30px' },
    transition: { duration: 0.45, delay: (i % 4) * 0.07, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  }
  const controlledProps = {
    initial: { opacity: 0, y: 18 },
    animate: expanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { duration: 0.38, delay: expanded ? i * 0.045 : 0, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] },
  }

  return (
    <motion.div
      {...(useViewport ? viewportProps : controlledProps)}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col items-center text-center
        bg-white border border-[#E4EDF5] rounded-2xl
        px-4 pt-5 pb-[18px]
        shadow-[0_1px_12px_rgba(11,60,93,0.07)]
        hover:border-[#2EC4B6]/35
        hover:shadow-[0_12px_32px_rgba(11,60,93,0.11),0_0_0_1px_rgba(46,196,182,0.18)]
        transition-all duration-300 ease-out cursor-default"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 rounded-full bg-[#2EC4B6]
        group-hover:w-12 transition-all duration-500 ease-out" />

      <div className="w-[54px] h-[54px] rounded-full bg-[#EBF9F8] border border-[#C8EFEC]
        flex items-center justify-center mb-3
        group-hover:bg-[#DFF6F4] group-hover:border-[#2EC4B6]/50
        group-hover:shadow-[0_0_0_5px_rgba(46,196,182,0.07)]
        transition-all duration-300">
        {s.icon}
      </div>

      <p className="text-[14px] font-extrabold text-[#0F172A] leading-tight mb-1.5
        group-hover:text-[#0B3C5D] transition-colors duration-300">
        {s.name}
      </p>
      <p className="text-[12px] text-[#64748B] leading-relaxed flex-1 mb-3.5 px-0.5">
        {s.desc}
      </p>

      <div className="w-7 h-7 rounded-full border-[1.5px] border-[#2EC4B6]/40 flex items-center justify-center
        group-hover:border-[#2EC4B6] group-hover:bg-[#2EC4B6]/[0.08] transition-all duration-300">
        <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
          <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.div>
  )
}

export default function Specialties() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="specialties" className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section header */}
        <FadeIn>
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-8 sm:mb-12">
            <div>
              <p className="text-[11.5px] font-extrabold uppercase tracking-[0.16em] text-[#2EC4B6] mb-3">
                Who We Serve
              </p>
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#0F172A] leading-[1.08] tracking-tight mb-4">
                Specialties We{' '}
                <span style={{
                  background: 'linear-gradient(90deg, #0B3C5D 0%, #2EC4B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Serve
                </span>
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-[3px] w-10 rounded-full bg-[#2EC4B6]" />
                <div className="h-[3px] w-4 rounded-full bg-[#2EC4B6]/30" />
              </div>
            </div>
            <p className="text-[15.5px] text-[#64748B] leading-[1.75]">
              We understand the unique billing requirements of each specialty and tailor our approach to maximize reimbursements, reduce denials, and improve revenue performance.
            </p>
          </div>
        </FadeIn>

        {/* Featured 8 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {featured.map((s, i) => (
            <SpecialtyCard key={s.name} s={s} i={i} useViewport />
          ))}
        </div>

        {/* Expandable extra specialties */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ overflow: 'hidden' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-1 pb-4">
            {extra.map((s, i) => (
              <SpecialtyCard key={s.name} s={s} i={i} useViewport={false} expanded={expanded} />
            ))}
          </div>
        </motion.div>

        {/* Dark banner */}
        <FadeIn delay={0.15}>
          <div
            className="relative rounded-2xl overflow-hidden mb-6"
            style={{ background: 'linear-gradient(115deg, #051926 0%, #093047 35%, #0B3C5D 65%, #0d4f72 100%)' }}
          >
            {/* Textures */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='52' height='52'%3E%3Cpath d='M22 6h8v16h16v8H30v16h-8V30H6v-8h16V6z' fill='rgba(255%2C255%2C255%2C0.028)'/%3E%3C/svg%3E")`, backgroundSize: '52px 52px' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='14' cy='14' r='1.2' fill='rgba(255%2C255%2C255%2C0.045)'/%3E%3C/svg%3E")`, backgroundSize: '28px 28px' }} />
            <div className="absolute inset-0 flex items-end pointer-events-none overflow-hidden">
              <svg viewBox="0 0 1200 64" preserveAspectRatio="none" className="w-full" style={{ height: '64px', opacity: 0.06 }}>
                <polyline points="0,32 100,32 135,6 158,58 181,6 204,58 227,32 420,32 460,4 482,60 504,4 526,60 548,32 780,32 810,10 828,54 846,10 864,54 882,32 1200,32" fill="none" stroke="#2EC4B6" strokeWidth="1.8" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute -top-8 -right-8 pointer-events-none opacity-[0.07]">
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
                <circle cx="90" cy="90" r="70" stroke="#2EC4B6" strokeWidth="1" strokeDasharray="4 8"/>
                <circle cx="90" cy="90" r="48" stroke="#2EC4B6" strokeWidth="0.8" strokeDasharray="3 6"/>
                <circle cx="90" cy="90" r="5" fill="#2EC4B6"/>
              </svg>
            </div>
            <div className="absolute right-[-30px] top-[-20px] w-[260px] h-[180px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(46,196,182,0.22) 0%, transparent 65%)' }} />

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 px-5 py-5 sm:px-7 sm:py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(46,196,182,0.12)', border: '1.5px solid rgba(46,196,182,0.40)', boxShadow: '0 0 18px rgba(46,196,182,0.15)' }}>
                  <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
                    <path d="M13 3l2.5 6.5H22l-5.5 4 2 6.5L13 16.5 7.5 20l2-6.5L4 9.5h6.5L13 3z" stroke="#2EC4B6" strokeWidth="1.6" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[17px] font-extrabold text-white leading-tight mb-0.5">
                    {expanded ? `All ${featured.length + extra.length} specialties shown.` : 'Many more specialties.'}
                  </p>
                  <p className="text-[13px] text-white/55">
                    {expanded ? 'Click below to collapse the list.' : 'We support a wide range of healthcare providers.'}
                  </p>
                </div>
              </div>

              {/* Toggle button */}
              <button
                onClick={() => setExpanded(v => !v)}
                className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0
                  border-[1.5px] border-[#2EC4B6] text-white font-bold text-[14px]
                  px-6 py-3 rounded-xl
                  hover:bg-[#2EC4B6]/15 hover:-translate-y-0.5
                  transition-all duration-200 cursor-pointer"
                style={{ boxShadow: '0 0 22px rgba(46,196,182,0.18)' }}
              >
                {expanded ? 'Show Less' : 'View All Specialties'}
                <motion.svg
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  width="15" height="15" viewBox="0 0 16 16" fill="none"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Bottom info line */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#2EC4B6]/15 flex items-center justify-center shrink-0">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[13px] text-[#475569] font-medium">
                Specialty-specific coding expertise for every claim
              </span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#64748B] font-medium
                hover:text-[#2EC4B6] transition-colors duration-200 whitespace-nowrap"
            >
              Not sure if we support your specialty?{' '}
              <span className="text-[#2EC4B6] font-semibold">Contact us</span>
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="#2EC4B6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
