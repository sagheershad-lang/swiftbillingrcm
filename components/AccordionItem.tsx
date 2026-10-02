'use client'
import { m, AnimatePresence } from 'framer-motion'

/* ── Single FAQ accordion item — used by the homepage FAQ and service page FAQs ── */
export default function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
  idPrefix = 'faq-answer',
}: {
  faq: { q: string; a: string }
  index: number
  isOpen: boolean
  onToggle: () => void
  idPrefix?: string
}) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300
        ${isOpen
          ? 'border border-[#2EC4B6]/35 shadow-[0_8px_32px_rgba(11,60,93,0.09),0_0_0_1px_rgba(46,196,182,0.12)]'
          : 'border border-[#E4EDF5] shadow-[0_1px_10px_rgba(11,60,93,0.05)] hover:border-[#CBD5E1] hover:shadow-[0_4px_20px_rgba(11,60,93,0.08)]'
        }`}
    >
      {/* Teal left-edge accent when open */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-300"
        style={{ background: isOpen ? '#2EC4B6' : 'transparent' }}
      />

      {/* Question row */}
      <button
        className="w-full flex items-start gap-4 text-left px-6 py-5 pl-8"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${idPrefix}-${index}`}
      >
        {/* Question number */}
        <span
          className={`text-[11px] font-black tracking-[0.1em] mt-[3px] shrink-0 transition-colors duration-200 ${
            isOpen ? 'text-[#2EC4B6]' : 'text-[#CBD5E1]'
          }`}
        >
          {num}
        </span>

        {/* Question text */}
        <span
          className={`flex-1 text-[15px] font-bold leading-snug transition-colors duration-200 ${
            isOpen ? 'text-[#0B3C5D]' : 'text-[#0F172A]'
          }`}
        >
          {faq.q}
        </span>

        {/* Toggle button */}
        <m.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className={`w-7 h-7 rounded-full border-[1.5px] flex items-center justify-center shrink-0 mt-[1px] transition-all duration-200 ${
            isOpen
              ? 'bg-[#2EC4B6] border-[#2EC4B6]'
              : 'bg-white border-[#D1D9E4] hover:border-[#2EC4B6]/50'
          }`}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 2v8M2 6h8"
              stroke={isOpen ? '#0B3C5D' : '#94A3B8'}
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </m.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key="answer"
            id={`${idPrefix}-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pl-8 sm:pl-[52px] pb-5 sm:pb-6 border-t border-[#EEF2F7]">
              <p className="pt-4 text-[15px] md:text-[14px] text-[#64748B] leading-[1.8]">{faq.a}</p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  )
}
