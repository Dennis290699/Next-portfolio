'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {  SparklesIcon, SmileIcon, BrainIcon, HeartPulseIcon, ShieldIcon } from 'lucide-react'

export default function SkillsSection() {
  const services = [
    {
      icon: SparklesIcon,
      title: "Odontología General",
      description: "Cuidado dental integral para toda la familia, incluyendo limpiezas, empastes y tratamientos de conducto.",
      skills: ["Limpiezas dentales", "Empastes", "Tratamientos de conducto"]
    },
    {
      icon: SparklesIcon,
      title: "Estética Dental",
      description: "Transforme su sonrisa con nuestros tratamientos estéticos avanzados.",
      skills: ["Blanqueamiento dental", "Carillas", "Diseño de sonrisa"]
    },
    {
      icon: SmileIcon,
      title: "Ortodoncia",
      description: "Corrección de la alineación dental para una sonrisa perfecta y una mordida saludable.",
      skills: ["Brackets tradicionales", "Ortodoncia invisible", "Alineadores transparentes"]
    },
    {
      icon: BrainIcon,
      title: "Cirugía Oral",
      description: "Procedimientos quirúrgicos especializados para problemas dentales complejos.",
      skills: ["Extracciones de muelas del juicio", "Implantes dentales", "Cirugía de encías"]
    },
    {
      icon: HeartPulseIcon,
      title: "Odontopediatría",
      description: "Cuidado dental especializado y amigable para nuestros pacientes más jóvenes.",
      skills: ["Tratamientos preventivos", "Selladores dentales", "Educación en higiene oral"]
    },
    {
      icon: ShieldIcon,
      title: "Odontología Preventiva",
      description: "Enfoque en la prevención de problemas dentales antes de que ocurran.",
      skills: ["Evaluaciones de riesgo", "Fluorización", "Consejos de higiene personalizada"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="skills-and-services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mis Habilidades y Servicios
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <div className="p-3 bg-blue-100 rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}