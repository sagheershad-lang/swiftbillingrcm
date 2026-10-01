import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B3C5D',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
        }}
      >
        <span
          style={{
            color: '#2EC4B6',
            fontSize: 80,
            fontWeight: 800,
            letterSpacing: '-2px',
          }}
        >
          SB
        </span>
      </div>
    ),
    { ...size }
  )
}
