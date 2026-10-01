import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'

// Report-only for now: violations are logged in the browser console, nothing is blocked.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://va.vercel-scripts.com https://*.hs-scripts.com https://*.hs-analytics.net https://*.hs-banner.com https://*.usemessages.com https://*.hsforms.net https://*.hscollectedforms.net`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://images.pexels.com https://*.google-analytics.com https://*.googletagmanager.com https://*.hubspot.com https://*.hsforms.com https://*.hubapi.com https://static.hsappstatic.net",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.hubspot.com https://*.hubapi.com https://*.hs-banner.com https://*.hscollectedforms.net https://*.hsforms.com wss://*.hubspot.com",
  'frame-src https://*.hubspot.com https://*.usemessages.com',
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy-Report-Only', value: contentSecurityPolicy },
  { key: 'X-DNS-Prefetch-Control',     value: 'on' },
  { key: 'X-Frame-Options',            value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options',     value: 'nosniff' },
  { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
]

const config: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  compress: true,
  poweredByHeader: false,
}

export default config
