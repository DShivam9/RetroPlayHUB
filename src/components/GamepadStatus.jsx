import React, { useEffect, useState } from 'react'
import { Gamepad2 } from 'lucide-react'

export default function GamepadStatus() {
  const [connected, setConnected] = useState(false)
  const [id, setId] = useState('')
  const [buttonsPressed, setButtonsPressed] = useState(0)

  useEffect(() => {
    const handleConnect = e => {
      setConnected(true)
      setId(e.gamepad.id)
    }
    const handleDisconnect = () => {
      setConnected(false)
      setId('')
      setButtonsPressed(0)
    }
    window.addEventListener('gamepadconnected', handleConnect)
    window.addEventListener('gamepaddisconnected', handleDisconnect)

    let raf
    const poll = () => {
      if (connected) {
        const pads = navigator.getGamepads()
        const gp = pads[0]
        if (gp) {
          const pressed = gp.buttons.filter(b => b.pressed).length
          setButtonsPressed(pressed)
        }
      }
      raf = requestAnimationFrame(poll)
    }
    poll()
    return () => {
      window.removeEventListener('gamepadconnected', handleConnect)
      window.removeEventListener('gamepaddisconnected', handleDisconnect)
      cancelAnimationFrame(raf)
    }
  }, [connected])

  return (
    <div className="relative rounded-xl p-5 bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-purple-500/30">
      <h3 className="font-press text-xs tracking-wider text-purple-300 mb-4 flex items-center gap-2">
        <Gamepad2 className="w-4 h-4" /> GAMEPAD
      </h3>
      {connected ? (
        <div className="font-mono text-xs text-gray-300 space-y-1">
          <div className="text-white truncate" title={id}>{id}</div>
          <div className="text-cyan-300">Buttons pressed: {buttonsPressed}</div>
        </div>
      ) : (
        <div className="font-mono text-xs text-gray-500">
          No gamepad connected. Press any button to detect.
        </div>
      )}
    </div>
  )
}
