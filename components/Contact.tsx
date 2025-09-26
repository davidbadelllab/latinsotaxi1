'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Hola, soy ${formData.name}. ${formData.message}. Mi teléfono es ${formData.phone}${formData.email ? ` y mi email es ${formData.email}` : ''}.`
    const whatsappUrl = `https://wa.me/18134460879?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+1 (813) 446-0879',
      action: 'tel:+18134460879',
      description: 'Llamada directa'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+1 (813) 446-0879',
      action: 'https://wa.me/18134460879',
      description: 'Mensaje directo'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      info: '15202 N 13th St',
      action: 'https://maps.google.com/?q=15202+N+13th+St,+Lutz,+FL+33549',
      description: 'Lutz, FL 33549'
    },
    {
      icon: Clock,
      title: 'Horario',
      info: '24/7 Disponible',
      action: null,
      description: 'Todos los días'
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
    <section id="contacto" className="section-padding bg-black-900">
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
            Contáctanos
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Estamos aquí para ayudarte. Contáctanos por teléfono, WhatsApp o completa el formulario
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold text-white mb-8"
            >
              Información de Contacto
            </motion.h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 mb-1">
                      {item.info}
                    </p>
                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>
                    {item.action && (
                      <a
                        href={item.action}
                        target={item.action.startsWith('http') ? '_blank' : undefined}
                        rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary-400 hover:text-primary-300 font-medium text-sm mt-2 inline-block"
                      >
                        {item.action.startsWith('tel:') ? 'Llamar' : 
                         item.action.startsWith('https://wa.me') ? 'Enviar WhatsApp' :
                         item.action.startsWith('https://maps') ? 'Ver en Maps' : 'Contactar'}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-black-800 rounded-xl border border-gray-700"
            >
              <h4 className="font-semibold text-white mb-3">
                Respuesta Rápida
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Para una respuesta más rápida, te recomendamos llamar directamente 
                o enviar un mensaje por WhatsApp.
              </p>
              <div className="flex space-x-3">
                <a
                  href="tel:+18134460879"
                  className="btn-primary text-sm py-2 px-4"
                >
                  Llamar Ahora
                </a>
                <a
                  href="https://wa.me/18134460879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 px-4"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold text-white mb-8"
            >
              Envíanos un Mensaje
            </motion.h3>
            
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="+1 (xxx) xxx-xxxx"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email (Opcional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none text-white placeholder-gray-400"
                  placeholder="Describe tu necesidad de transporte..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar por WhatsApp</span>
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
