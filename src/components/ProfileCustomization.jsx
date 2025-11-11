import React, { useRef } from 'react'
import { Camera } from 'lucide-react'

export default function ProfileCustomization({ onPhotoChange }) {
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const dataUrl = reader.result
        // Save to localStorage
        localStorage.setItem('profilePhoto', dataUrl)
        if (onPhotoChange) {
          onPhotoChange(dataUrl)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <button
        onClick={() => fileInputRef.current?.click()}
        className="flex flex-col items-center gap-1 text-white hover:scale-110 transition-transform duration-300"
      >
        <Camera className="w-8 h-8" />
        <span className="text-xs font-mono">Change Photo</span>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </>
  )
}
