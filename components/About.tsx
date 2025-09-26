'use client'

import { motion } from 'framer-motion'
import { Shield, Star, Award, Users } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Clientes Satisfechos' },
    { icon: Star, value: '4.9/5', label: 'Calificación Promedio' },
    { icon: Award, value: '5+', label: 'Años de Experiencia' },
    { icon: Shield, value: '100%', label: 'Seguro y Confiable' }
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
    <section id="nosotros" className="section-padding bg-black-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              ¿Por qué elegir
              <span className="block text-primary-400">LatinosTaxi1?</span>
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-300 mb-6"
            >
              Somos una empresa familiar con más de 5 años de experiencia brindando 
              servicios de transporte confiables y profesionales en Lutz, Florida.
            </motion.p>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-300 mb-8"
            >
              Nuestro compromiso es ofrecer un servicio seguro, puntual y accesible 
              para toda la comunidad hispana y local de la zona.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Conductores profesionales y certificados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Vehículos modernos y bien mantenidos</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Tarifas justas y transparentes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-300">Servicio disponible 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card text-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="bg-black-900 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nuestra Ubicación
            </h3>
            <p className="text-gray-300 mb-6">
              15202 N 13th St, Lutz, FL 33549, EE. UU.
            </p>
            <p className="text-gray-300 mb-6">
              Servimos a toda la comunidad de Lutz y áreas circundantes con 
              profesionalismo y dedicación.
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
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
