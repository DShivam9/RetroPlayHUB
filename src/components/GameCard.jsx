import React, { memo } from 'react'
import { Heart, Play } from 'lucide-react'

// GameCard: reusable card for games used on Home and Library pages.
// Memoized to prevent unnecessary re-renders
const GameCard = memo(function GameCard({ game, navigate, isFavorite, toggleFavorite, onPlay }) {
  return (
    <div className="game-card-wrapper group relative flex flex-col h-full p-[3px]">
      {/* RGB animated border on hover - using pseudo-element for proper masking */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none overflow-hidden">
        <div className="absolute inset-0 rgb-border-wrapper"></div>
      </div>
      
      <div className="game-card relative rounded-xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-slate-800/80 to-slate-900/80 shadow-lg shadow-neon.purple/20 flex flex-col h-full">
        {/* Brighter glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon.cyan/20 via-neon.purple/25 to-neon.cyan/20 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Favorite button */}
      <button
        onClick={(e) => { e.stopPropagation(); toggleFavorite && toggleFavorite(game.id); }}
        className={`absolute top-3 right-3 z-20 p-2.5 backdrop-blur-sm rounded-lg transition-all duration-300 transform hover:scale-110 ${
          isFavorite 
            ? 'bg-gradient-to-br from-pink-500/30 to-red-500/30 border-2 border-pink-400 shadow-lg shadow-pink-500/50' 
            : 'bg-black/60 border border-slate-700 hover:border-pink-400/50'
        }`}
        aria-label="favorite"
      >
        <Heart className={`w-5 h-5 transition-all duration-300 ${
          isFavorite 
            ? 'fill-pink-400 text-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.8)] animate-pulse' 
            : 'text-slate-400 hover:text-pink-400'
        }`} />
      </button>

      {/* Game thumbnail section */}
      <div className="relative aspect-video bg-gradient-to-br from-slate-600/50 to-slate-700/50 flex items-center justify-center overflow-hidden">
        {/* Subtle scanlines */}
        <div className="absolute inset-0 opacity-15 pointer-events-none z-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.8) 2px, rgba(6,182,212,0.8) 4px)' }} />
        
        {/* Game thumbnail - image or emoji fallback */}
        {game.thumbnailImage ? (
          <>
            <img 
              src={game.thumbnailImage} 
              alt={game.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                console.error('Failed to load image:', game.thumbnailImage);
                // Fallback to emoji if image fails to load
                e.target.style.display = 'none';
              }}
            />
            <span 
              className="text-6xl select-none relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(6,182,212,0.7)] hidden"
            >
              {game.thumbnail}
            </span>
          </>
        ) : (
          <span 
            className="text-6xl select-none relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(6,182,212,0.7)]"
          >
            {game.thumbnail}
          </span>
        )}
        
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-neon.cyan/35 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-[5]" />
      </div>

      {/* Info section */}
      <div className="p-4 relative flex-1 flex flex-col">
        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-press font-bold text-neon.cyan text-base leading-tight group-hover:text-white transition-colors drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
              {game.title}
            </h4>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-gray-300 mb-3">
            <span className="px-2 py-1 bg-neon.cyan/20 text-neon.cyan rounded border-2 border-neon.cyan/50 font-bold">
              {game.console}
            </span>
            <span className="text-neon.purple font-bold drop-shadow-[0_0_6px_rgba(123,97,255,0.6)]">{game.year}</span>
          </div>

          <button
            onClick={() => (onPlay ? onPlay(game) : navigate('player'))}
            className="arcade-play-button w-full py-3 relative overflow-hidden font-mono font-bold text-sm rounded flex items-center justify-center gap-2 group/btn mt-auto"
          >
            <div className="arcade-button-shine"></div>
            <Play className="w-4 h-4 relative z-10" />
            <span className="relative z-10 caret-text">PRESS START<span className="caret" aria-hidden="true"></span></span>
          </button>
        </div>
      </div>
      </div>
    </div>
  )
})

export default GameCard
