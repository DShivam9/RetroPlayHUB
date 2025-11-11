import React from 'react'
import { Heart, Github, Twitter, MessageCircle, Gamepad2, Info, Book, Shield, Mail } from 'lucide-react'

// Footer: site footer with informative sections and links.
export default function Footer() {
  return (
    <footer className="relative mt-0 py-12 bg-gradient-to-b from-transparent to-black/50">
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="group">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-press text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors">ABOUT</h3>
            </div>
            <p className="text-gray-400 text-sm font-mono leading-relaxed mb-3 group-hover:text-gray-300 transition-colors">
              RetroPlay Hub brings classic games to your browser. Play instantly without downloads or emulators.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 group-hover:text-gray-400 transition-colors">
              <Heart className="w-3 h-3 text-red-500 fill-red-500 group-hover:scale-125 transition-transform" />
              <span>Made for retro gaming fans</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <div className="flex items-center gap-2 mb-4">
              <Book className="w-5 h-5 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-press text-sm text-purple-400 group-hover:text-purple-300 transition-colors">QUICK LINKS</h3>
            </div>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1">
                  <span className="group-hover:scale-110 transition-transform">→</span>
                  <span>Browse Library</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1">
                  <span className="group-hover:scale-110 transition-transform">→</span>
                  <span>How to Play</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1">
                  <span className="group-hover:scale-110 transition-transform">→</span>
                  <span>Save Games Guide</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1">
                  <span className="group-hover:scale-110 transition-transform">→</span>
                  <span>Keyboard Controls</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="group">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-press text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors">LEGAL</h3>
            </div>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1">
                  <span className="group-hover:scale-110 transition-transform">→</span>
                  <span>Terms of Service</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1">
                  <span className="group-hover:scale-110 transition-transform">→</span>
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1">
                  <span className="group-hover:scale-110 transition-transform">→</span>
                  <span>DMCA Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1">
                  <span className="group-hover:scale-110 transition-transform">→</span>
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="group">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-press text-sm text-purple-400 group-hover:text-purple-300 transition-colors">CONNECT</h3>
            </div>
            <p className="text-gray-400 text-sm font-mono mb-4 group-hover:text-gray-300 transition-colors">
              Join our community and stay updated!
            </p>
            <div className="space-y-2">
              <a 
                href="#" 
                className="group flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1"
              >
                <Twitter className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <span>Twitter</span>
              </a>
              <a 
                href="#" 
                className="group flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-purple-400 transition-all duration-200 hover:translate-x-1"
              >
                <Github className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <span>GitHub</span>
              </a>
              <a 
                href="#" 
                className="group flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 font-mono text-xs">
            © {new Date().getFullYear()} RetroPlay Hub. All rights reserved. Game content belongs to their respective owners.
          </p>
          <p className="text-gray-600 font-mono text-xs">
            Browser-based emulation • No downloads required • Save states supported
          </p>
        </div>
      </div>
    </footer>
  )
}
