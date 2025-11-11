import React, { useMemo } from 'react'

const rules = [
  {
    id: 'first-session',
    label: 'First Session',
    test: ({ sessions }) => sessions >= 1,
    color: 'from-cyan-500/30 to-cyan-700/30'
  },
  {
    id: 'five-favorites',
    label: '5 Favorites',
    test: ({ favorites }) => favorites >= 5,
    color: 'from-pink-500/30 to-red-600/30'
  },
  {
    id: 'ten-sessions',
    label: '10 Sessions',
    test: ({ sessions }) => sessions >= 10,
    color: 'from-purple-500/30 to-indigo-600/30'
  },
  {
    id: 'library-explorer',
    label: 'Library Explorer',
    test: ({ sessions }) => sessions >= 20,
    color: 'from-amber-500/30 to-orange-600/30'
  }
]

export default function Achievements({ favoritesCount, sessions }) {
  const data = useMemo(
    () =>
      rules.map(r => ({
        ...r,
        unlocked: r.test({ favorites: favoritesCount, sessions })
      })),
    [favoritesCount, sessions]
  )

  return (
    <div className="relative mt-10">
      <h3 className="text-xl font-press text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 mb-4">
        ACHIEVEMENTS
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.map(a => (
          <div
            key={a.id}
            className={`relative rounded-lg p-4 border ${
              a.unlocked
                ? 'border-cyan-400/40 shadow-lg shadow-cyan-500/10'
                : 'border-slate-600/50 opacity-60'
            } bg-gradient-to-br ${a.color} backdrop-blur-sm transition`}
          >
            <div className="font-mono text-xs tracking-wider mb-1 text-gray-300">
              {a.unlocked ? '✓ UNLOCKED' : '🔒 LOCKED'}
            </div>
            <div className="font-press text-sm text-white">{a.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
