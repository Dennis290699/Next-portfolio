"use client";

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { DownloadIcon, Send, Sparkles } from "lucide-react"
import DentistProfile from "@/assets/images/profile/profile_HD.png"
import LogoUniversidad from "@/assets/icons/UCE.png"
import LogoFacultad from "@/assets/icons/Odontologia.png"
import LogoBrodents from "@/assets/icons/Brodents.png"

export default function Home() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const particlesVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }

  const particleVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0
    },
    visible: { 
      opacity: [0, 1, 0],
      y: [-20, 0, 20],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  }

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50 py-20 md:py-0 flex items-center">
      {/* Animated background particles */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={particlesVariants}
        initial="hidden"
        animate={controls}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 md:px-2 lg:px-40 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 relative inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Dr. Jair Trujillo V.
              <motion.span
                className="absolute -top-6 -right-6 text-blue-500"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8" />
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-light mb-6 text-gray-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Transformando sonrisas, cambiando vidas
            </motion.p>
            <motion.p 
              className="text-lg mb-8 text-gray-700 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Especialista en odontología estética y cuidado integral, comprometido con la innovación y la excelencia en cada tratamiento.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/tunumerodewhatsapp', '_blank')}
              >
                <Send className="w-5 h-5 mr-2" />
                Contáctame
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105" 
                onClick={() => window.open('/ruta-a-tu-cv.pdf', '_blank')}
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Descargar CV
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-blue-200 rounded-full opacity-30 blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 0]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.img 
                src={DentistProfile.src} 
                alt="Dr. Jair Trujillo" 
                className="rounded-full border-4 border-white shadow-2xl w-64 h-64 md:w-96 md:h-96 object-cover relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white rounded-full p-2 shadow-lg z-20"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
              >
                <img 
                  src={LogoFacultad.src} 
                  alt="Logo de la Universidad" 
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </motion.div>
              <motion.div 
                className="absolute -top-4 -left-4 bg-white rounded-full p-2 shadow-lg z-20"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
              >
                <img 
                  src={LogoUniversidad.src}
                  alt="Logo de la Facultad" 
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 border-4 border-blue-300 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-16 h-16 border-4 border-blue-300 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  )
}