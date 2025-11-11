import React, { useState, useEffect } from 'react'
import { Save, Edit2, X, Trash2 } from 'lucide-react'

export default function ProfileSettings({ onProfileChange }) {
  const [name, setName] = useState('PLAYER_001')
  const [bio, setBio] = useState('Retro gaming enthusiast • Browser-based emulation')
  const [editing, setEditing] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    try {
      const storedName = localStorage.getItem('profileName')
      const storedBio = localStorage.getItem('profileBio')
      if (storedName) setName(storedName)
      if (storedBio) setBio(storedBio)
    } catch (err) {
      console.error('Failed to load profile data:', err)
    }
  }, [])

  const persist = () => {
    localStorage.setItem('profileName', name)
    localStorage.setItem('profileBio', bio)
    if (onProfileChange) onProfileChange({ name, bio })
    setEditing(false)
    setShowOptions(false)
  }

  const handleRemovePhoto = () => {
    localStorage.removeItem('profilePhoto')
    window.location.reload() // Reload to update state
  }

  const handleResetProfile = () => {
    if (confirm('Reset all profile settings?')) {
      localStorage.removeItem('profileName')
      localStorage.removeItem('profileBio')
      localStorage.removeItem('profilePhoto')
      window.location.reload()
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        {editing ? (
          <>
            <div className="flex-1 flex flex-col gap-2">
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                maxLength={20}
                placeholder="Profile Name"
                className="px-3 py-2 rounded bg-slate-800 border border-cyan-500/40 text-cyan-100 font-mono text-sm focus:outline-none focus:border-cyan-300"
              />
              <input
                value={bio}
                onChange={e => setBio(e.target.value)}
                maxLength={60}
                placeholder="Bio / Status"
                className="px-3 py-2 rounded bg-slate-800 border border-purple-500/40 text-gray-300 font-mono text-xs focus:outline-none focus:border-purple-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={persist}
                className="px-3 py-2 rounded bg-gradient-to-r from-cyan-600/40 to-purple-600/40 border border-cyan-500/40 text-sm font-mono flex items-center gap-1 hover:shadow-cyan-500/30 transition"
                aria-label="Save changes"
              >
                <Save className="w-4 h-4" />
                SAVE
              </button>
              <button
                onClick={() => setEditing(false)}
                className="px-3 py-2 rounded bg-slate-800/60 border border-slate-600 text-sm font-mono flex items-center gap-1 hover:border-red-500/40 transition"
                aria-label="Cancel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex-1">
              <span className="font-press text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 text-xl md:text-3xl">
                {name}
              </span>
            </div>
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="p-2 rounded bg-slate-800/60 border border-slate-600 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-200 transition group"
              aria-label="Edit profile"
            >
              <Edit2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
          </>
        )}
      </div>

      {/* Customization Options Dropdown */}
      {showOptions && !editing && (
        <div className="absolute top-full right-0 mt-2 w-64 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-50 overflow-hidden">
          <div className="p-4">
            <h3 className="text-sm font-press text-cyan-300 mb-3">PROFILE OPTIONS</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setEditing(true)
                  setShowOptions(false)
                }}
                className="w-full px-4 py-2 rounded-lg font-mono text-sm bg-gradient-to-r from-cyan-600/30 to-purple-600/30 border border-cyan-500/40 text-cyan-100 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
              >
                <Edit2 className="w-4 h-4" />
                Edit Name & Bio
              </button>
              <button
                onClick={handleRemovePhoto}
                className="w-full px-4 py-2 rounded-lg font-mono text-sm bg-slate-800/70 border border-slate-600 text-slate-300 hover:border-orange-500/40 hover:text-orange-200 transition-all flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Remove Photo
              </button>
              <button
                onClick={handleResetProfile}
                className="w-full px-4 py-2 rounded-lg font-mono text-sm bg-red-900/20 border border-red-500/40 text-red-300 hover:bg-red-900/30 hover:border-red-500/60 transition-all flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Reset Profile
              </button>
              <button
                onClick={() => setShowOptions(false)}
                className="w-full px-4 py-2 rounded-lg font-mono text-sm bg-slate-800 border border-slate-600 text-slate-400 hover:text-slate-300 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
