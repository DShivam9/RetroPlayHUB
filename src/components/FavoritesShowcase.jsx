import React from 'react'

export default function FavoritesShowcase({ favorites, allGames, onPlayGame }) {
  // Map favorite IDs to actual game objects
  const favoriteGames = favorites
    .map(id => allGames.find(g => g.id === id))
    .filter(Boolean)
    .slice(0, 4) // Show first 4 favorites

  return (
    <div className="relative group/section">
      {/* Animated background glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-xl blur-xl opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative">
        <h3 className="text-xl font-press text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-6 group-hover/section:scale-105 transition-transform duration-300 inline-block">FAVORITES</h3>
        {favoriteGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {favoriteGames.map(g => (
              <div 
                key={g.id}
                onClick={() => onPlayGame(g)}
                className="group relative bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-lg p-4 border border-pink-500/20 hover:border-purple-500/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Animated shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Heart pulse effect */}
                <div className="absolute top-2 right-2 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block animate-pulse">❤️</span>
                </div>
                
                <div className="relative flex items-center gap-4">
                  <div className="text-4xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">{g.thumbnail}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-press text-sm text-pink-300 truncate group-hover:text-pink-200 transition-colors">{g.title}</h4>
                    <p className="font-mono text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{g.console} • {g.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 font-mono text-sm">You haven't favorited any games yet.</div>
        )}
      </div>
    </div>
  )
}
