import React, { useState } from 'react'

export default function StatCard({ label, value, hint, accent = 'cyan' }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 10
    const y = (e.clientY - rect.top - rect.height / 2) / 10
    setTilt({ x: -y, y: x })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const accentMap = {
    cyan: {
      ring: 'ring-cyan-500/30',
      border: 'border-cyan-500/30',
      from: 'from-cyan-500/20',
      to: 'to-cyan-600/10',
      text: 'text-cyan-300',
      glow: 'shadow-cyan-500/50'
    },
    purple: {
      ring: 'ring-purple-500/30',
      border: 'border-purple-500/30',
      from: 'from-purple-500/20',
      to: 'to-purple-600/10',
      text: 'text-purple-300',
      glow: 'shadow-purple-500/50'
    },
    amber: {
      ring: 'ring-amber-500/30',
      border: 'border-amber-500/30',
      from: 'from-amber-500/20',
      to: 'to-amber-600/10',
      text: 'text-amber-300',
      glow: 'shadow-amber-500/50'
    }
  }
  const c = accentMap[accent] || accentMap.cyan

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl p-5 bg-gradient-to-br ${c.from} ${c.to} border ${c.border} ring-1 ${c.ring} transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:${c.glow} cursor-pointer`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>
      
      {/* Glow effect on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${c.from} ${c.to} rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
      
      <div className="relative">
        <div className="text-gray-400 font-mono text-xs tracking-wider uppercase mb-1 group-hover:text-gray-300 transition-colors">{label}</div>
        <div className={`font-press text-2xl ${c.text} group-hover:scale-110 transition-transform duration-300 inline-block`}>{value}</div>
        {hint && <div className="text-gray-500 font-mono text-xs mt-1 group-hover:text-gray-400 transition-colors">{hint}</div>}
      </div>
    </div>
  )
}
