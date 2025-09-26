'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import Image from 'next/image'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const message = "Hola, me interesa el servicio de taxi. ¿Podrían ayudarme?"
    const whatsappUrl = `https://wa.me/18134460879?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isVisible) return null

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-24 right-6 z-50 md:bottom-6">
        <div className="relative">
          {/* Chat Bubble */}
          {isOpen && (
            <div className="absolute bottom-16 right-0 mb-2 w-80 bg-black-800 rounded-2xl shadow-2xl border border-gray-700 p-4 animate-fade-in-up">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 relative">
                    {!imageError ? (
                      <Image
                        src="/img/logo.png"
                        alt="LatinosTaxi1 Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">LT</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LatinosTaxi1</h4>
                    <p className="text-xs text-green-400">En línea</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="bg-black-900 rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-300">
                  ¡Hola! 👋 ¿En qué podemos ayudarte hoy? 
                  Estamos disponibles 24/7 para tu transporte.
                </p>
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Iniciar Chat</span>
              </button>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-pulse-whatsapp"
          >
            <MessageCircle className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
