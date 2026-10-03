'use client'
import { useState } from 'react'
import AccordionItem from './AccordionItem'

/** FAQ accordion for content pages (Pricing, Security): same accordion as the homepage and service pages.
 *  idPrefix keeps the answer ids unique per page. */
export default function PageFAQ({ faqs, idPrefix }: { faqs: { q: string; a: string }[]; idPrefix: string }) {
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
          idPrefix={idPrefix}
        />
      ))}
    </div>
  )
}
