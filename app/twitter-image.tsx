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
          background: '#080B14',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Amber glow blobs */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,58,138,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Top amber accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(245,158,11,0.1)',
            border: '1px solid rgba(245,158,11,0.25)',
            color: '#fbbf24',
            fontSize: 13,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 3,
            padding: '6px 18px',
            borderRadius: 9999,
            marginBottom: 28,
            width: 'fit-content',
          }}
        >
          CA Licensed & Bonded · License #1132988
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginBottom: 20,
          }}
        >
          <div
            style={{
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
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -2,
              color: '#f59e0b',
            }}
          >
            Services
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.2,
              marginTop: 6,
            }}
          >
            in the South Bay
          </div>
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: 20,
            color: 'rgba(203,213,225,0.9)',
            lineHeight: 1.5,
            maxWidth: 650,
            marginBottom: 32,
          }}
        >
          Panel upgrades · EV charger installation · Residential & commercial
          electrical work in Hermosa Beach and the South Bay.
        </div>

        {/* Bottom stats bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
          }}
        >
          <StatBadge value="24/7" label="Emergency Service" />
          <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.1)' }} />
          <StatBadge value="92 Score" label="BuildZoom Rating" />
          <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.1)' }} />
          <StatBadge value="(862) 202-7122" label="Call Today" />
        </div>

        {/* Bottom amber accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, transparent, #f59e0b, transparent)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ fontSize: 18, fontWeight: 800, color: '#fbbf24' }}>{value}</div>
      <div style={{ fontSize: 12, color: 'rgba(148,163,184,0.8)', letterSpacing: 1 }}>{label}</div>
    </div>
  )
}
