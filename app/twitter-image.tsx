import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Quesada Electric | Licensed Electrician in Hermosa Beach, CA'
export const size = { width: 1200, height: 600 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          backgroundColor: '#080B14',
        }}
      >
        {/* Top amber accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 4,
            display: 'flex',
            background: 'linear-gradient(to right, #080B14, #f59e0b, #080B14)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 3,
            padding: '6px 18px',
            borderRadius: 9999,
            marginBottom: 28,
            color: '#fbbf24',
            border: '1px solid rgba(245,158,11,0.25)',
            backgroundColor: 'rgba(245,158,11,0.1)',
          }}
        >
          CA LICENSED & BONDED · LICENSE #1132988
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 900,
              color: 'white',
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            Expert Electrical
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -2,
              color: '#f59e0b',
              marginTop: 4,
            }}
          >
            Services
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.2,
              marginTop: 8,
            }}
          >
            in the South Bay
          </div>
        </div>

        {/* Subheadline */}
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            color: 'rgba(203,213,225,0.9)',
            lineHeight: 1.5,
            marginBottom: 32,
          }}
        >
          Panel upgrades · EV charger installation · Residential &
          commercial electrical work in Hermosa Beach and the South Bay.
        </div>

        {/* Bottom stats bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', fontSize: 18, fontWeight: 800, color: '#fbbf24' }}>24/7</div>
            <div style={{ display: 'flex', fontSize: 12, color: 'rgba(148,163,184,0.8)', letterSpacing: 1 }}>Emergency Service</div>
          </div>
          <div style={{ display: 'flex', width: 1, height: 36, backgroundColor: 'rgba(255,255,255,0.1)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', fontSize: 18, fontWeight: 800, color: '#fbbf24' }}>92 Score</div>
            <div style={{ display: 'flex', fontSize: 12, color: 'rgba(148,163,184,0.8)', letterSpacing: 1 }}>BuildZoom Rating</div>
          </div>
          <div style={{ display: 'flex', width: 1, height: 36, backgroundColor: 'rgba(255,255,255,0.1)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ display: 'flex', fontSize: 18, fontWeight: 800, color: '#fbbf24' }}>(862) 202-7122</div>
            <div style={{ display: 'flex', fontSize: 12, color: 'rgba(148,163,184,0.8)', letterSpacing: 1 }}>Call Today</div>
          </div>
        </div>

        {/* Bottom amber accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 4,
            display: 'flex',
            background: 'linear-gradient(to right, #080B14, #f59e0b, #080B14)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
