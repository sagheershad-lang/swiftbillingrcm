// EHR, clearinghouse and credentialing platforms shown as "compatible with" on the site
// (homepage TrustStrip marquee and the /ehr-integrations page). Not partners: keep the disclaimer next to them.

export type Platform = {
  name: string
  kind: 'EHR and practice management' | 'Clearinghouse' | 'Credentialing'
  logoUrl: string   /* empty string → skip straight to badge */
  color: string     /* brand colour for fallback badge */
  /** Explicit rendered height in px for the img (default 32).
   *  Drives optical balance; adjust per logo aspect ratio. */
  logoH?: number
  /** Extra scale on top of logoH for fine optical nudging (default 1). */
  scale?: number
  /** Intrinsic file size: lets the browser reserve the width before load (no layout shift). */
  w: number
  h: number
}

export const platforms: Platform[] = [
  { name: 'Epic',           kind: 'EHR and practice management', logoUrl: '/logos/site-logo.png',            color: '#CC1230', logoH: 40, w: 106, h: 41 },
  { name: 'athenahealth',   kind: 'EHR and practice management', logoUrl: '/logos/athenahealth-logo.png',    color: '#00A0B0', logoH: 52, w: 300, h: 300 },
  { name: 'Tebra',          kind: 'EHR and practice management', logoUrl: '/logos/tebra-logo.png',           color: '#FF6B00', logoH: 68, w: 300, h: 300 },
  { name: 'eClinicalWorks', kind: 'EHR and practice management', logoUrl: '/logos/eclinicalworks-logo.png',  color: '#00A650', logoH: 68, w: 300, h: 300 },
  { name: 'AdvancedMD',     kind: 'EHR and practice management', logoUrl: '/logos/advance%20md.png',         color: '#003087', logoH: 62, w: 269, h: 188 },
  { name: 'DrChrono',       kind: 'EHR and practice management', logoUrl: '/logos/dr%20chrono%20logo.png',   color: '#2563EB', logoH: 44, w: 300, h: 90 },
  { name: 'NextGen',        kind: 'EHR and practice management', logoUrl: '/logos/next%20gen%20logo.png',    color: '#00A850', logoH: 52, w: 300, h: 225 },
  { name: 'Availity',       kind: 'Clearinghouse',               logoUrl: '/logos/availity%20logo.png',      color: '#612583', logoH: 48, w: 300, h: 167 },
  { name: 'Office Ally',    kind: 'Clearinghouse',               logoUrl: '/logos/office%20ally%20logo.png', color: '#005EB8', logoH: 52, w: 256, h: 256 },
  { name: 'Waystar',        kind: 'Clearinghouse',               logoUrl: '/logos/waystar%20logo.png',       color: '#1A1A5E', logoH: 44, w: 300, h: 127 },
  { name: 'CAQH',           kind: 'Credentialing',               logoUrl: '/logos/caqh%20logo.png',          color: '#005DAA', logoH: 46, w: 300, h: 157 },
]

export const PLATFORM_DISCLAIMER =
  'SwiftBilling RCM is an independent service provider and is not affiliated with or endorsed by any of the platforms listed above.'
