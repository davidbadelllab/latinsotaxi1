'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function MobileHeader() {
  const [imageError, setImageError] = useState(false)
  return (
    <header className="bg-black-900 shadow-lg sticky top-0 z-40 md:hidden border-b border-gray-700">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/img/logo.svg"
                alt="LatinosTaxi1 Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">LatinosTaxi1</h1>
              <p className="text-xs text-gray-300">Servicio Profesional</p>
            </div>
          </div>

          {/* Contact buttons */}
          <div className="flex items-center space-x-2">
            <a
              href="tel:+16562377425"
              className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
            >
              <span className="text-black-900 text-xs font-bold">📞</span>
            </a>
            <a
              href="https://wa.me/16562377425"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs font-bold">💬</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
