"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { XIcon } from 'lucide-react';

// Importación de las imágenes
import coverCase1 from '../../assets/cover_cases/1.jpg';
import coverCase2 from '../../assets/cover_cases/2.jpg';
import galleryImg1 from '../../assets/images/gallery/caso1.jpg';
import galleryImg2 from '../../assets/images/gallery/caso2.jpg';
import galleryImg3 from '../../assets/images/gallery/caso3.jpg';
import galleryImg4 from '../../assets/images/gallery/caso4.jpg';
import galleryImg5 from '../../assets/images/gallery/caso5.jpg';
import galleryImg6 from '../../assets/images/gallery/caso6.jpg';

export default function ProjectsSection() {
  const [selectedCase, setSelectedCase] = useState("1");

  const cases = [
    {
      id: "1",
      title: "Caso Clínico 1",
      diagnosis: "Descripción del diagnóstico inicial del paciente y los problemas dentales identificados para el caso 1.",
      treatment: "Detalle del plan de tratamiento propuesto y los procedimientos realizados para el caso 1.",
      result: "Descripción de los resultados obtenidos y la satisfacción del paciente para el caso 1.",
      techniques: ["Técnica 1A", "Técnica 1B", "Técnica 1C"],
      coverImage: coverCase1.src, // Imagen importada
      images: [galleryImg1.src, galleryImg2.src, galleryImg3.src] // Imágenes importadas
    },
    {
      id: "2",
      title: "Caso Clínico 2",
      diagnosis: "Descripción del diagnóstico inicial del paciente y los problemas dentales identificados para el caso 2.",
      treatment: "Detalle del plan de tratamiento propuesto y los procedimientos realizados para el caso 2.",
      result: "Descripción de los resultados obtenidos y la satisfacción del paciente para el caso 2.",
      techniques: ["Técnica 2A", "Técnica 2B", "Técnica 2C"],
      coverImage: coverCase2.src, // Imagen importada
      images: [galleryImg4.src, galleryImg5.src, galleryImg6.src] // Imágenes importadas
    },
    // Otros casos clínicos
  ];

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 text-gray-800">Casos Clínicos</h2>
        <div className="mb-6">
          <Select onValueChange={setSelectedCase} defaultValue={selectedCase}>
            <SelectTrigger className="w-full md:w-[300px]">
              <SelectValue placeholder="Selecciona un caso clínico" />
            </SelectTrigger>
            <SelectContent>
              {cases.map((caseItem) => (
                <SelectItem key={caseItem.id} value={caseItem.id}>
                  {caseItem.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {cases.map((caseItem) => (
          <Card key={caseItem.id} className={selectedCase === caseItem.id ? 'block' : 'hidden'}>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <img
                    src={caseItem.coverImage}
                    alt={`Portada del Caso clínico ${caseItem.id}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">{caseItem.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium mb-2">Diagnóstico</h4>
                      <p className="text-gray-600">{caseItem.diagnosis}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Tratamiento</h4>
                      <p className="text-gray-600">{caseItem.treatment}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Resultado</h4>
                      <p className="text-gray-600">{caseItem.result}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Técnicas utilizadas:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {caseItem.techniques.map((technique, index) => (
                          <li key={index}>{technique}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Galería de imágenes:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {caseItem.images.map((image, index) => (
                          <Dialog key={index}>
                            <DialogTrigger>
                              <img
                                src={image}
                                alt={`Imagen ${index + 1} del caso ${caseItem.id}`}
                                className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                              />
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <VisuallyHidden>
                                <DialogTitle>Imagen del caso clínico {caseItem.id}</DialogTitle>
                                <DialogDescription>
                                  Visualización de la imagen {index + 1} del caso clínico {caseItem.id}.
                                </DialogDescription>
                              </VisuallyHidden>
                              <div className="relative">
                                <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-70">
                                  <XIcon className="h-6 w-6" />
                                </Button>
                                <img
                                  src={image}
                                  alt={`Imagen ${index + 1} del caso ${caseItem.id}`}
                                  className="w-full h-auto rounded-lg"
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
