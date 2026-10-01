import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePageLayout from '@/components/ServicePageLayout'
import { getService } from '@/lib/services-data'

const SLUG = 'denial-management'

export async function generateMetadata(): Promise<Metadata> {
  const s = getService(SLUG)
  if (!s) return {}
  return { title: { absolute: s.metaTitle }, description: s.metaDescription }
}

export default function ServicePage() {
  const s = getService(SLUG)
  if (!s) notFound()
  return (
    <ServicePageLayout
      service={s}
      heroImage="/Denial Managemen.png"
      heroObjectPosition="center top"
      heroTopFade="15%"
      heroBottomFade="25%"
      heroFilter="brightness(1.05) saturate(1.1)"
    />
  )
}
