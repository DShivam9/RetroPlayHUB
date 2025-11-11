import React from 'react'

// Small info card used in player/profile pages
export default function InfoCard({ title, value }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
      <p className="text-gray-500 font-mono text-xs tracking-wider mb-1">{title}</p>
      <p className="text-neon.cyan font-mono font-bold text-lg">{value}</p>
    </div>
  )
}
