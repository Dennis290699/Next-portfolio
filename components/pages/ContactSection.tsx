'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, SendIcon, PhoneIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const socialLinks = [
    { icon: FacebookIcon, href: '#', color: 'text-blue-600 hover:text-blue-700' },
    { icon: InstagramIcon, href: '#', color: 'text-pink-600 hover:text-pink-700' },
    { icon: LinkedinIcon, href: '#', color: 'text-blue-700 hover:text-blue-800' },
    { icon: TwitterIcon, href: '#', color: 'text-blue-400 hover:text-blue-500' },
  ]

  const contactInfo = [
    { icon: PhoneIcon, text: '+1 (555) 123-4567', color: 'text-green-600' },
    { icon: MapPinIcon, text: '123 Dental St, City, Country', color: 'text-red-600' },
    { icon: ClockIcon, text: 'Lun - Vie: 9am - 5pm', color: 'text-purple-600' },
  ]

  const formFields = [
    { name: 'name', placeholder: 'Tu nombre', type: 'text' },
    { name: 'email', placeholder: 'Tu email', type: 'email' },
    { name: 'phone', placeholder: 'Tu teléfono', type: 'tel' },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contáctame
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600">
                <CardTitle className="text-white">Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <AnimatePresence>
                    {formFields.map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Input 
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Textarea 
                        placeholder="Tu mensaje" 
                        required
                        className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                  >
                    {isSubmitted ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center"
                      >
                        <CheckCircleIcon className="mr-2 h-5 w-5" />
                        Enviado!
                      </motion.span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <SendIcon className="mr-2 h-5 w-5" />
                        Enviar mensaje
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="mb-6 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600">
                <CardTitle className="text-white">Escanea mi código QR</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center p-6">
                <motion.div 
                  className="w-48 h-48 bg-white border-2 border-blue-500 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Reemplaza esto con tu código QR real */}
                  <span className="text-blue-500 font-semibold">Tu código QR aquí</span>
                </motion.div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600">
                <CardTitle className="text-white">Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <info.icon className={`h-5 w-5 ${info.color}`} />
                      <span className="text-gray-700">{info.text}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Sígueme en redes sociales</h4>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        className={`${link.color} transition-colors duration-300`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <link.icon className="h-6 w-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}