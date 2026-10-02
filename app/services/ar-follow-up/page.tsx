import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePageLayout from '@/components/ServicePageLayout'
import { getService } from '@/lib/services-data'
import { pageMetadata } from '@/lib/seo'

const SLUG = 'ar-follow-up'

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
      heroImage="/AR Follow-Up.png"
      heroObjectPosition="center center"
      heroTopFade="15%"
      heroBottomFade="25%"
      heroFilter="brightness(1.05) saturate(1.1)"
      heroImageStyleDesktop={{
        left: 'max(0px, calc((100% - 1240px) / 2))',
        top: '-92px',
        right: 'max(0px, calc((100% - 1240px) / 2))',
        bottom: '0',
        objectPosition: 'center top',
      }}
    />
  )
}
