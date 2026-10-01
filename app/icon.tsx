import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '7px',
        }}
      >
        <span
          style={{
            color: '#2EC4B6',
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: '-0.5px',
          }}
        >
          SB
        </span>
      </div>
    ),
    { ...size }
  )
}
