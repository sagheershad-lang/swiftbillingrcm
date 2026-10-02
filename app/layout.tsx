import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import MotionProvider from '@/components/MotionProvider'
import HubSpotLoader from '@/components/HubSpotLoader'
import './globals.css'

// ─── Paste your Google Analytics Measurement ID here (format: G-XXXXXXXXXX) ───
const GA_ID = 'G-PHYRLHP00K'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

// ── iOS / PWA viewport ──────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: '#071e2e',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',          // lets content go edge-to-edge behind notch
}

export const metadata: Metadata = {
  title: {
    default: 'SwiftBilling RCM | Medical Billing & Revenue Cycle',
    template: '%s | SwiftBilling RCM',
  },
  description:
    'Expert medical billing and revenue cycle management for US healthcare practices. Reduce denials, increase collections, get paid faster. Free 24-hour audit.',
  keywords: 'medical billing, revenue cycle management, RCM, healthcare billing, medical coding, HIPAA compliant billing, denial management, AR follow-up, credentialing, medical billing company USA, medical billing Austin Texas, outsource medical billing, physician billing services, EHR billing, insurance claim submission, clean claim rate, medical billing specialists',
  metadataBase: new URL('https://www.swiftbillingrcm.com'),
  alternates: {
    canonical: 'https://www.swiftbillingrcm.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.swiftbillingrcm.com',
    title: 'SwiftBilling RCM | Medical Billing & Revenue Cycle Management',
    description:
      'Expert medical billing and RCM for US healthcare practices. Reduce denials, increase collections, get paid faster. Free 24-hour audit.',
    siteName: 'SwiftBilling RCM',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'SwiftBilling RCM — Medical Billing Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwiftBilling RCM | Medical Billing & Revenue Cycle Management',
    description:
      'Expert medical billing and RCM for US healthcare practices. Free 24-hour revenue audit.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'MedicalBusiness'],
      '@id': 'https://www.swiftbillingrcm.com/#business',
      name: 'SwiftBilling RCM',
      url: 'https://www.swiftbillingrcm.com',
      logo: 'https://www.swiftbillingrcm.com/og-image.png',
      description: 'Expert medical billing and revenue cycle management for US healthcare practices. HIPAA compliant. 98% clean claim rate. Free 24-hour audit.',
      telephone: '+1-512-737-7488',
      email: 'info@swiftbillingrcm.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5900 Balcones Dr #7192',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78731',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      serviceType: 'Medical Billing & Revenue Cycle Management',
      priceRange: '4%–9% of collections',
      openingHours: 'Mo-Fr 08:00-18:00',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Medical Billing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Charge Entry' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AR Follow-Up' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Denial Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Payment Posting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Credentialing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reporting & Analytics' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.swiftbillingrcm.com/#website',
      url: 'https://www.swiftbillingrcm.com',
      name: 'SwiftBilling RCM',
      publisher: { '@id': 'https://www.swiftbillingrcm.com/#business' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* iOS appearance */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SwiftBilling RCM" />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        {/* HubSpot Tracking — loads on first interaction or after 8s (see HubSpotLoader) */}
        <HubSpotLoader />
      </body>
    </html>
  )
}
