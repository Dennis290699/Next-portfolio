"use client";

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SparklesIcon } from 'lucide-react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula el tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // Ajusta este tiempo según tus necesidades

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600"
        >
          <div className="text-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
              className="inline-block"
            >
              <SparklesIcon className="w-20 h-20 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-3xl font-bold text-white"
            >
              Dr. Jair Trujillo V.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-2 text-xl text-blue-100"
            >
              Cargando sonrisas perfectas...
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="mt-4 h-1 bg-white rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
