/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#06b6d4',
          magenta: '#ff2dd4',
          purple: '#7c3aed',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        press: ['"Press Start 2P"', 'monospace'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      boxShadow: {
        'crt-glow': '0 6px 30px rgba(124,58,237,0.12), inset 0 0 60px rgba(6,182,212,0.04)'
      }
    }
  },
  plugins: [],
}
