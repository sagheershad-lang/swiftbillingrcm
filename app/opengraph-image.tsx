import { ImageResponse } from 'next/og'

export const alt = 'SwiftBilling RCM: Medical Billing & Revenue Cycle Management'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #082d46 0%, #0B3C5D 100%)',
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Teal accent bar top-left */}
        <div style={{ width: '72px', height: '4px', background: '#2EC4B6', borderRadius: '2px', marginBottom: '44px' }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '14px',
              background: 'rgba(46,196,182,0.12)',
              border: '1.5px solid rgba(46,196,182,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
              <path d="M3 14L7.5 8.5L11 11.5L17 4.5" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 4.5H17V7.5" stroke="#2EC4B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ display: 'flex', fontSize: '34px', fontWeight: '800', letterSpacing: '-0.02em' }}>
            <span style={{ color: 'white' }}>Swift</span>
            <span style={{ color: '#2EC4B6' }}>Billings</span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '60px',
            fontWeight: '800',
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            maxWidth: '820px',
            marginBottom: '22px',
          }}
        >
          Medical Billing &amp; Revenue Cycle Management
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: '22px',
            color: 'rgba(255,255,255,0.55)',
            marginBottom: '52px',
            maxWidth: '620px',
            lineHeight: 1.5,
          }}
        >
          Expert RCM for US Healthcare Practices · HIPAA Compliant · Results-Driven
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '52px' }}>
          {[
            { value: '98%', label: 'Clean Claim Rate' },
            { value: '< 30d', label: 'Avg. Reimbursement' },
            { value: '20+', label: 'Specialties Served' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '38px', fontWeight: '800', color: '#2EC4B6', letterSpacing: '-0.02em' }}>
                {stat.value}
              </span>
              <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', fontWeight: '500' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* HIPAA badge */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '80px',
            background: 'rgba(46,196,182,0.1)',
            border: '1px solid rgba(46,196,182,0.25)',
            borderRadius: '100px',
            padding: '10px 20px',
            fontSize: '13px',
            fontWeight: '700',
            color: '#2EC4B6',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          HIPAA Compliant
        </div>

        {/* Free audit badge */}
        <div
          style={{
            position: 'absolute',
            top: '130px',
            right: '80px',
            background: 'rgba(46,196,182,0.1)',
            border: '1px solid rgba(46,196,182,0.25)',
            borderRadius: '100px',
            padding: '10px 20px',
            fontSize: '13px',
            fontWeight: '700',
            color: '#2EC4B6',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Free 24-Hour Audit
        </div>

        {/* URL bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '52px',
            right: '80px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.3)',
            fontWeight: '500',
          }}
        >
          swiftbillingrcm.com
        </div>

        {/* Bottom teal line */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #2EC4B6 0%, transparent 70%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
