"use client";

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserIcon, GraduationCapIcon, AwardIcon, BookOpenIcon } from "lucide-react"

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('personal')

  const tabs = [
    { id: 'personal', icon: UserIcon, title: 'Personal' },
    { id: 'professional', icon: GraduationCapIcon, title: 'Profesional' },
    { id: 'education', icon: BookOpenIcon, title: 'Educación' },
    { id: 'awards', icon: AwardIcon, title: 'Reconocimientos' }
  ]

  const content = {
    personal: {
      title: 'Información Personal',
      content: (
        <>
          <p className="text-gray-600 mb-4">
            Soy un apasionado odontólogo con un enfoque en la estética dental y el cuidado integral del paciente. Mi objetivo es combinar la ciencia y el arte para crear sonrisas hermosas y saludables.
          </p>
          <div>
            <h4 className="font-semibold mb-2">Intereses:</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>Odontología estética</Badge>
              <Badge>Tecnología dental</Badge>
              <Badge>Fotografía dental</Badge>
              <Badge>Educación continua</Badge>
            </div>
          </div>
        </>
      )
    },
    professional: {
      title: 'Experiencia Profesional',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Odontólogo Residente</h4>
            <p className="text-sm text-gray-500">Hospital Universitario, 2021 - Presente</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Atención integral de pacientes en diversas especialidades odontológicas</li>
              <li>Participación en programas de prevención y educación en salud bucal</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Práctica Privada</h4>
            <p className="text-sm text-gray-500">Clínica Dental Sonrisas, 2020 - Presente</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Especialización en tratamientos de estética dental</li>
              <li>Implementación de tecnologías digitales en diagnóstico y tratamiento</li>
            </ul>
          </div>
        </div>
      )
    },
    education: {
      title: 'Educación y Formación',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Doctorado en Odontología</h4>
            <p className="text-sm text-gray-500">Universidad Nacional de Odontología, 2016 - 2021</p>
          </div>
          <div>
            <h4 className="font-semibold">Cursos y Especializaciones</h4>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Certificación en Diseño de Sonrisa Digital, Academia Internacional de Estética Dental, 2022</li>
              <li>Curso Avanzado en Implantología, Instituto de Implantología Oral, 2023</li>
              <li>Diplomado en Ortodoncia Invisible, Centro de Estudios Ortodónticos, 2022</li>
            </ul>
          </div>
        </div>
      )
    },
    awards: {
      title: 'Reconocimientos Académicos',
      content: (
        <ul className="space-y-4">
          <li>
            <h4 className="font-semibold">Premio a la Excelencia Académica</h4>
            <p className="text-sm text-gray-500">Universidad Nacional de Odontología, 2021</p>
          </li>
          <li>
            <h4 className="font-semibold">Mejor Caso Clínico en Estética Dental</h4>
            <p className="text-sm text-gray-500">Congreso Nacional de Odontología Estética, 2022</p>
          </li>
          <li>
            <h4 className="font-semibold">Beca de Investigación en Biomateriales Dentales</h4>
            <p className="text-sm text-gray-500">Fundación para el Avance de la Odontología, 2020</p>
          </li>
        </ul>
      )
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="md:w-1/3">
            <div className="sticky top-24 space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="md:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardTitle>{content[activeTab].title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {content[activeTab].content}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}