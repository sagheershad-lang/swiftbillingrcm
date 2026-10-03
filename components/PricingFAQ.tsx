'use client'
import { useState } from 'react'
import AccordionItem from './AccordionItem'

/** Pricing page FAQ: same accordion as the homepage and service pages */
export default function PricingFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <AccordionItem
          key={faq.q}
          faq={faq}
          index={i}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
          idPrefix="pricing-faq-answer"
        />
      ))}
    </div>
  )
}
