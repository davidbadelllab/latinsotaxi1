'use client'

import { motion } from 'framer-motion'
import { Car, Plane, Building, Heart, Users, Clock } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Car,
      title: 'Transporte Local',
      description: 'Viajes dentro de Lutz y áreas cercanas con tarifas competitivas.',
      features: ['Tarifas fijas', 'Rutas optimizadas', 'Conductores locales']
    },
    {
      icon: Plane,
      title: 'Aeropuerto',
      description: 'Servicio confiable hacia y desde el aeropuerto de Tampa.',
      features: ['Reservas anticipadas', 'Seguimiento de vuelos', 'Equipaje incluido']
    },
    {
      icon: Building,
      title: 'Servicios Corporativos',
      description: 'Transporte para empresas y eventos especiales.',
      features: ['Facturación corporativa', 'Flota profesional', 'Servicio programado']
    },
    {
      icon: Heart,
      title: 'Servicios Médicos',
      description: 'Transporte seguro para citas médicas y emergencias.',
      features: ['Conductores capacitados', 'Vehículos adaptados', 'Prioridad médica']
    },
    {
      icon: Users,
      title: 'Grupos y Eventos',
      description: 'Transporte para grupos grandes y eventos especiales.',
      features: ['Vehículos amplios', 'Coordinación de grupos', 'Eventos especiales']
    },
    {
      icon: Clock,
      title: 'Servicio Express',
      description: 'Transporte rápido para urgencias y citas importantes.',
      features: ['Respuesta inmediata', 'Rutas directas', 'Prioridad alta']
    }
  ]

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
    <section id="servicios" className="section-padding bg-black-900">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ofrecemos una amplia gama de servicios de transporte para satisfacer todas tus necesidades
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="bg-black-800 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-gray-300 mb-6">
              Contáctanos para discutir tus necesidades específicas de transporte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18134460879"
                className="btn-primary"
              >
                Llamar Ahora
              </a>
              <a
                href="https://wa.me/18134460879"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
