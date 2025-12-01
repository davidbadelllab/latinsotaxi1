'use client'

import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const [imageError, setImageError] = useState(false)
  return (
    <footer className="bg-gray-900 text-white hidden md:block">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative">
                {!imageError ? (
                  <Image
                    src="/img/logo.png"
                    alt="LatinosTaxi1 Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-black-900 font-bold text-xl">LT</span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold">LatinosTaxi1</h3>
                <p className="text-gray-400">Servicio Profesional</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Servicio de taxi confiable y profesional en Lutz, Florida. 
              Transporte seguro las 24 horas del día con conductores certificados 
              y vehículos modernos.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+16562377425"
                className="w-10 h-10 bg-black-900 hover:bg-black-800 rounded-full flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/16562377425"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-300">+1 (656) 237-7425</p>
                  <p className="text-xs text-gray-400">Llamada directa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-gray-300">WhatsApp</p>
                  <p className="text-xs text-gray-400">Mensaje directo</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-300">15202 N 13th St</p>
                  <p className="text-xs text-gray-400">Lutz, FL 33549</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-300">24/7 Disponible</p>
                  <p className="text-xs text-gray-400">Todos los días</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 LatinosTaxi1. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="tel:+16562377425" className="text-gray-400 hover:text-white transition-colors">
                Llamar Ahora
              </a>
              <a 
                href="https://wa.me/16562377425" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
