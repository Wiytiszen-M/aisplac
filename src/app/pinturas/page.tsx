import Link from "next/link";
import Image from "next/image";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";

export default function PinturasPage() {
  const pinturas = [
    {
      id: 1,
      imagen: "/placeholder.svg?height=300&width=400",
      titulo: "Pinturas Látex Interior",
      descripcion:
        "Pinturas de alta calidad para interiores, acabado mate y satinado",
    },
    {
      id: 2,
      imagen: "/placeholder.svg?height=300&width=400",
      titulo: "Esmaltes Sintéticos",
      descripcion:
        "Esmaltes de alta resistencia para madera y metal, múltiples colores",
    },
    {
      id: 3,
      imagen: "/placeholder.svg?height=300&width=400",
      titulo: "Pinturas Exteriores",
      descripcion:
        "Revestimientos impermeabilizantes para fachadas y exteriores",
    },
    {
      id: 4,
      imagen: "/placeholder.svg?height=300&width=400",
      titulo: "Antióxidos y Primers",
      descripcion:
        "Tratamientos anticorrosivos y fondos preparadores de superficie",
    },
    {
      id: 5,
      imagen: "/placeholder.svg?height=300&width=400",
      titulo: "Pinturas Especiales",
      descripcion:
        "Pinturas decorativas: pizarra, magnética, texturada y efectos",
    },
    {
      id: 6,
      imagen: "/placeholder.svg?height=300&width=400",
      titulo: "Accesorios de Pintura",
      descripcion: "Rodillos, pinceles, brochas y herramientas para aplicación",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
      {/* Header */}
      <BackButton text="Volver a Productos" />
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
            <Palette className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-100">
              Pinturas y Revestimientos
            </h1>
            <p className="text-gray-400">
              Descubre nuestra amplia gama de productos para pintura
            </p>
          </div>
        </div>
      </div>

      {/* Descripción */}
      <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-orange-300 mb-3">
          Soluciones Completas en Pintura
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Ofrecemos una línea completa de pinturas y revestimientos para todo
          tipo de proyectos. Desde pinturas para interiores y exteriores hasta
          productos especializados y accesorios profesionales. Todas nuestras
          pinturas cumplen con los más altos estándares de calidad y
          durabilidad.
        </p>
      </div>

      {/* Grid de Pinturas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pinturas.map((pintura) => (
          <Card
            key={pintura.id}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700 overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={pintura.imagen || "/placeholder.svg"}
                alt={pintura.titulo}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-3 group-hover:text-orange-300 transition-colors">
                {pintura.titulo}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {pintura.descripcion}
              </p>

              {/* Badge decorativo */}
              <div className="mt-4 inline-flex items-center gap-2 bg-orange-900/30 text-orange-300 px-3 py-1 rounded-full text-sm">
                <Palette className="h-3 w-3" />
                <span>Disponible</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-lg p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          ¿Necesitas asesoramiento?
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Nuestro equipo de expertos puede ayudarte a elegir la pintura perfecta
          para tu proyecto. Contáctanos para recibir asesoramiento personalizado
          y cotizaciones especiales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-orange-600 hover:bg-orange-700 text-white"
            size="lg"
          >
            <Link href="/cotizacion">
              <Palette className="h-4 w-4 mr-2" />
              Solicitar Cotización
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-300 hover:bg-orange-900/20 bg-transparent"
            size="lg"
          >
            <Link href="/materiales">Ver Otras Categorías</Link>
          </Button>
        </div>
      </div>

      {/* Información adicional */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="h-6 w-6 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-100 mb-2">
            Calidad Garantizada
          </h3>
          <p className="text-gray-400 text-sm">
            Productos de primeras marcas con garantía de fábrica
          </p>
        </div>

        <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-100 mb-2">Entrega Rápida</h3>
          <p className="text-gray-400 text-sm">
            Disponibilidad inmediata en la mayoría de productos
          </p>
        </div>

        <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg
              className="h-6 w-6 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-100 mb-2">Asesoramiento</h3>
          <p className="text-gray-400 text-sm">
            Consulta técnica especializada sin costo adicional
          </p>
        </div>
      </div>
    </section>
  );
}
