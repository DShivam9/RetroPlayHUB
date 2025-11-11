import React, { useMemo } from 'react'

// PokemonSpirits: abstract, non-copyrighted "auras" representing iconic presence.
// User can later replace placeholders with actual images placed in /public/spirits/*.png
// Each spirit renders a softly animated gradient ring + minimal glyph.

const SPIRIT_DEFS = {
  'Pokemon FireRed': {
    label: 'MEWTWO', // iconic legendary for Kanto
    glyph: 'Ｍ',
    colors: ['rgba(236,72,153,0.35)', 'rgba(168,85,247,0.15)'],
    orbit: 28
  },
  'Pokemon Ruby': {
    label: 'GROUDON',
    glyph: 'Ｇ',
    colors: ['rgba(220,38,38,0.40)', 'rgba(234,88,12,0.18)'],
    orbit: 32
  },
  'Pokemon Sapphire': {
    label: 'KYOGRE',
    glyph: 'Ｋ',
    colors: ['rgba(59,130,246,0.40)', 'rgba(6,182,212,0.18)'],
    orbit: 34
  },
  'Pokemon Emerald': {
    label: 'RAYQUAZA',
    glyph: 'Ｒ',
    colors: ['rgba(16,185,129,0.45)', 'rgba(34,197,94,0.20)'],
    orbit: 36
  }
}

export default function PokemonSpirits({ game }) {
  const def = useMemo(() => SPIRIT_DEFS[game?.title] || null, [game?.title])
  if (!def) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden spirit-layer">
      {/* Primary rotating aura */}
      <div
        className="absolute spirit-aura animate-spirit-rotate"
        style={{
          top: '10%',
          left: '8%',
          width: '520px',
          height: '520px',
          background: `radial-gradient(circle at 50% 50%, ${def.colors[0]} 0%, ${def.colors[1]} 60%, transparent 75%)`,
          mixBlendMode: 'screen',
          filter: 'blur(40px) brightness(1.2)'
        }}
      />

      {/* Slow drifting secondary ring */}
      <div
        className="absolute animate-spirit-drift"
        style={{
          bottom: '5%',
          right: '8%',
          width: '400px',
          height: '400px',
          background: `radial-gradient(circle at 50% 50%, ${def.colors[1]} 10%, transparent 70%)`,
          mixBlendMode: 'screen',
          filter: 'blur(30px)'
        }}
      />

      {/* Orbiting minimal glyph representing the legendary (abstracted) */}
      <div className="absolute animate-spirit-orbit" style={{ width: '100%', height: '100%', top: 0, left: 0 }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(0deg)`,
            animation: `spirit-orbit ${def.orbit}s linear infinite`,
            transformOrigin: '0 0'
          }}
        >
          <div
            style={{
              transform: 'translate(240px, -60px)',
              fontSize: '64px',
              fontWeight: 700,
              letterSpacing: '4px',
              color: 'rgba(255,255,255,0.85)',
              textShadow: `0 0 12px ${def.colors[0]}`,
              filter: 'brightness(1.3) saturate(1.1)',
              opacity: 0.25
            }}
          >
            {def.glyph}
          </div>
        </div>
      </div>

      {/* Label fade (optional subtle) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs tracking-[0.3em] text-cyan-200/40 animate-spirit-label">
        {def.label}
      </div>
    </div>
  )
}
