import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePageLayout from '@/components/ServicePageLayout'
import { getService } from '@/lib/services-data'
import { pageMetadata } from '@/lib/seo'

const SLUG = 'medical-billing'

export async function generateMetadata(): Promise<Metadata> {
  const s = getService(SLUG)
  if (!s) return {}
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${SLUG}` })
}

export default function ServicePage() {
  const s = getService(SLUG)
  if (!s) notFound()
  return (
    <ServicePageLayout
      service={s}
      heroImageDesktop="/Medical Billing-DESKTOP.png"
      heroImageTablet="/Medical Billing-TAB.png"
      heroImageMobile="/Medical Billing-MOBILE.png"
      heroObjectPosition="center top"
      heroTopFade="12%"
      heroBottomFade="18%"
      heroFilter="brightness(1.2) saturate(1.15) contrast(1.05)"
    />
  )
}
