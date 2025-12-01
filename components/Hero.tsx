'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="inicio" className="bg-gradient-to-br from-black-900 to-black-800 text-white section-padding">
      <div className="container-custom">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Servicio de Taxi
            <span className="block text-primary-400">Profesional</span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
          >
            Transporte confiable y seguro en Lutz, Florida
            <br />
            Disponible las 24 horas del día
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="tel:+16562377425"
              className="btn-secondary flex items-center justify-center space-x-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Llamar Ahora</span>
            </a>
            <a
              href="https://wa.me/16562377425"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-black-900 flex items-center justify-center space-x-2 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="card bg-white/10 backdrop-blur-sm border border-white/20">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary-400" />
              <h3 className="font-semibold mb-2">24/7 Disponible</h3>
              <p className="text-sm text-gray-300">
                Servicio disponible todos los días del año
              </p>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm border border-white/20">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-primary-400" />
              <h3 className="font-semibold mb-2">Cobertura Local</h3>
              <p className="text-sm text-gray-300">
                Servicio en Lutz y áreas circundantes
              </p>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm border border-white/20">
              <Phone className="w-8 h-8 mx-auto mb-3 text-primary-400" />
              <h3 className="font-semibold mb-2">Respuesta Rápida</h3>
              <p className="text-sm text-gray-300">
                Llegamos rápido a tu ubicación
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
