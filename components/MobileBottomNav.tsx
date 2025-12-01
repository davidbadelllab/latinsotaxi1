'use client'

import { useState } from 'react'
import { Home, Car, Users, Phone, MessageCircle } from 'lucide-react'

export default function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    {
      id: 'home',
      icon: Home,
      label: 'Inicio',
      href: '#inicio'
    },
    {
      id: 'services',
      icon: Car,
      label: 'Servicios',
      href: '#servicios'
    },
    {
      id: 'about',
      icon: Users,
      label: 'Nosotros',
      href: '#nosotros'
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Llamar',
      href: 'tel:+16562377425'
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/16562377425'
    }
  ]

  const handleNavClick = (item: any) => {
    setActiveTab(item.id)
    if (item.href.startsWith('tel:') || item.href.startsWith('https://wa.me')) {
      window.open(item.href, item.href.startsWith('tel:') ? '_self' : '_blank')
    } else {
      // Smooth scroll to section
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Background blur */}
      <div className="absolute inset-0 bg-black-900/90 backdrop-blur-md border-t border-gray-700"></div>
      
      {/* Navigation items */}
      <div className="relative flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-primary-400 bg-primary-500/20' 
                  : 'text-gray-300 hover:text-primary-400'
              }`}
            >
              <div className={`p-2 rounded-full transition-colors ${
                isActive ? 'bg-primary-500/30' : 'hover:bg-gray-700'
              }`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary-400' : 'text-gray-300'}`} />
              </div>
              <span className={`text-xs font-medium ${isActive ? 'text-primary-400' : 'text-gray-300'}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
      
      {/* Safe area for devices with home indicator */}
      <div className="h-1 bg-gray-700"></div>
    </div>
  )
}
