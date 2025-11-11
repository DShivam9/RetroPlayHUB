import React from 'react'

// Small control button used in the Game Player controls
export default function ControlButton({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-slate-900/50 text-gray-300 hover:text-neon.cyan font-mono text-sm rounded border border-slate-700 hover:border-neon.cyan transition-all duration-300 flex items-center gap-2"
    >
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </button>
  )
}
