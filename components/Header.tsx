'use client'

import { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-black-900 shadow-lg sticky top-0 z-50 hidden md:block border-b border-gray-700">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image
                src="/img/logo.svg"
                alt="LatinosTaxi1 Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">LatinosTaxi1</h1>
              <p className="text-sm text-gray-300">Servicio Profesional</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
              Servicios
            </a>
            <a href="#nosotros" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
              Contacto
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (656) 237-7425</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Lutz, FL</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="text-gray-300 hover:text-primary-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-gray-300 hover:text-primary-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="text-gray-300 hover:text-primary-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="text-gray-300 hover:text-primary-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-gray-300 mb-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (656) 237-7425</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">15202 N 13th St, Lutz, FL 33549</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
