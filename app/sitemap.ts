import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

// Fixed date so lastModified only changes when content does (update it after real content edits)
const LAST_MODIFIED = new Date('2026-10-03')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.swiftbillingrcm.com',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/medical-billing',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/ar-follow-up',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/denial-management',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/payment-posting',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/credentialing',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/reporting-analytics',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/prior-authorization',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/eligibility-verification',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/patient-calling',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/patient-scheduling',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.swiftbillingrcm.com/services/patient-acquisition',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://www.swiftbillingrcm.com/book-a-call',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.swiftbillingrcm.com/privacy-policy',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.swiftbillingrcm.com/terms',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
