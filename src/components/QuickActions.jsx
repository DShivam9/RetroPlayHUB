import React from 'react'
import { Play, Library, Upload } from 'lucide-react'

export default function QuickActions({ navigate, lastPlayed, onPlayGame }) {
  return (
    <div className="relative rounded-xl p-5 bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
      <h3 className="font-press text-xs tracking-wider text-cyan-300 mb-4">QUICK ACTIONS</h3>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => {
            if (lastPlayed && onPlayGame) {
              // Use the central play handler so App sets currentGame and navigates properly
              onPlayGame(lastPlayed)
            } else {
              navigate('library')
            }
          }}
          className="group relative px-4 py-3 rounded-lg font-mono text-sm bg-gradient-to-r from-cyan-600/30 to-purple-600/30 border border-cyan-500/40 text-cyan-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2 overflow-hidden"
        >
          {/* Animated background on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Play className="w-4 h-4 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          <span className="relative z-10">{lastPlayed ? 'Resume Last Game' : 'Start Playing'}</span>
        </button>
        <button
          onClick={() => navigate('library')}
          className="group relative px-4 py-3 rounded-lg font-mono text-sm bg-slate-800/70 border border-slate-600 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-200 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Library className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
          <span className="relative z-10">Open Library</span>
        </button>
        <button
          disabled
          className="relative px-4 py-3 rounded-lg font-mono text-sm bg-slate-800/50 border border-slate-700 text-slate-500 cursor-not-allowed flex items-center gap-2 opacity-50"
          title="ROM Import coming soon"
        >
          <Upload className="w-4 h-4" />
          Import ROM (Soon)
        </button>
      </div>
    </div>
  )
}
