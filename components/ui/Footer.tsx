"use client";

import { motion } from 'framer-motion'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FacebookIcon, href: '#', label: 'Facebook' },
    { icon: InstagramIcon, href: '#', label: 'Instagram' },
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { icon: TwitterIcon, href: '#', label: 'Twitter' },
  ]

  const contactInfo = [
    { icon: PhoneIcon, text: '+1 (555) 123-4567' },
    { icon: MailIcon, text: 'dr.nombre@ejemplo.com' },
    { icon: MapPinIcon, text: '123 Calle Dental, Ciudad, País' },
  ]

  const footerLinks = [
    { text: 'Inicio', href: '#home' },
    { text: 'Sobre Mí', href: '#about' },
    { text: 'Servicios', href: '#skills-and-services' },
    { text: 'Casos Clínicos', href: '#projects' },
    { text: 'Contacto', href: '#contact' },
  ]

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Dr. Jair Trujillo V.</h3>
            <p className="text-blue-200 mb-4">Transformando sonrisas, cambiando vidas.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-blue-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-blue-300 hover:text-white transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <info.icon className="h-5 w-5 text-blue-300" />
                  <span className="text-blue-200">{info.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>&copy; {currentYear} Dr. Jair Trujillo V. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}