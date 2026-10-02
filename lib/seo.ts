import type { Metadata } from 'next'

export const SITE_URL = 'https://www.swiftbillingrcm.com'

const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'SwiftBilling RCM — Medical Billing & Revenue Cycle Management',
}

/** Per-page metadata: full title, description, own canonical URL, Open Graph and Twitter tags */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'SwiftBilling RCM',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
