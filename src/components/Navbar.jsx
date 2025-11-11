import React from 'react'
import { Gamepad2, Monitor, Heart, User } from 'lucide-react'
import './navigation.css'
import './navbar-overrides.css'
import './navbar-title.css'
import './navbar-buttons.css'

// Navbar: top navigation bar with logo and links.
export default function Navbar({ currentPage, navigate }) {

  const navItems = [
    { id: 'home', label: 'HOME', icon: Gamepad2 },
    { id: 'library', label: 'CONSOLES', icon: Monitor },
    { id: 'favorites', label: 'FAVORITES', icon: Heart },
    { id: 'profile', label: 'PROFILE', icon: User }
  ]

  return (
    <nav className="arcade-nav sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b-2 border-neon-cyan/30 navbar-enter">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('home')} 
            className="navbar-brand flex items-center gap-3 group navbar-logo-enter"
          >
            <div className="logo-container w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              <Gamepad2 className="logo-icon w-6 h-6 text-cyan-400 group-hover:text-white transition-all duration-300 group-hover:scale-110" />
            </div>
            
            <h1 className="text-xl md:text-2xl font-bold font-press">
              <div className="text-neon.cyan navbar-title-hover">
                {"RETROPLAY HUB".split("").map((char, index) => (
                  <span
                    key={index}
                    className="title-char inline-block transition-all duration-300 ease-out"
                    style={{
                      transitionDelay: `${index * 20}ms`
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            </h1>
          </button>

          <div className="flex gap-3">
            {navItems.map(({ id, label, icon }, index) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                aria-label={label}
                className={`nav-button nav-button-enter relative px-4 py-2 rounded-md font-mono text-sm tracking-wider overflow-hidden
                  border border-transparent transition-colors duration-300
                  ${currentPage === id 
                    ? 'text-white bg-gradient-to-r from-neon.cyan/20 to-neon.purple/20 border-neon.cyan/50' 
                    : 'text-gray-400 hover:text-white hover:border-neon.cyan/30'
                  }`}
                style={{
                  animationDelay: `${0.8 + index * 0.1}s`
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {React.createElement(icon, { className: 'w-4 h-4' })}
                  <span className="nav-text">
                    {label}
                  </span>
                </span>
                {/* Gradient background that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon.cyan/10 to-neon.purple/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                {/* Animated border */}
                <div className="absolute inset-0 nav-border"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
