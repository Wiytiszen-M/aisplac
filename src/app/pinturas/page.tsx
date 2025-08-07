import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";

export default function PinturasPage() {
  const productos = [
    {
      id: 1,
      titulo: "Quimtex Atenas Fino",
      descripcion:
        "Revestimiento plástico contenedor de mica en su fórmula, dando brillo en su terminación.",
      usos: "Diseñado para paredes exteriores o interiores por su resistencia y acabado decorativo.",
      rendimiento: "2 kg por m2 según tipo de superficie.",
      imagen: "/pinturas/1-2.png",
    },
    {
      id: 2,
      titulo: "Quimtex Atenas Grueso",
      descripcion:
        "Revestimiento plástico contenedor de mica en su fórmula, dando brillo en su terminación.",
      usos: "Diseñado para paredes exteriores o interiores por su resistencia y acabado decorativo.",
      rendimiento: "3 kg por m2 según tipo de superficie.",
      imagen: "/pinturas/1-2.png",
    },
    {
      id: 3,
      titulo: "Quimtex Base",
      descripcion:
        "Revestimiento con cuarzos naturales y polímeros. Forma una membrana protectora impermeable y con gran resistencia.",
      usos: "Exterior e interior.",
      rendimiento: "7 m2 por litro, según tipo de superficie.",
      imagen: "/pinturas/3-4.png",
    },
    {
      id: 4,
      titulo: "Quimtex Cuarzo Base",
      descripcion:
        "Revestimiento con cuarzos naturales y polímeros. Forma una membrana protectora impermeable y con gran resistencia.",
      usos: "Exterior e interior.",
      rendimiento: "7 m2 por litro, según tipo de superficie.",
      imagen: "/pinturas/3-4.png",
    },
    {
      id: 5,
      titulo: "Quimtex Nivelador",
      descripcion:
        "Diseñado para nivelar superficies irregulares para rellenar grietas, fisuras, nivelar, uniones de muros, etc. y luego revestir.",
      usos: "Exterior e interior.",
      rendimiento: "1 Kg. por m2 x mm. de espesor.",
      imagen: "/pinturas/5.png",
    },
    {
      id: 6,
      titulo: "Quimtex Pisos",
      descripcion:
        "Revestimiento doble componente para la ejecución de pisos de microcemento con color.",
      usos: "Se puede colocar sobre cerámicos, baldosas de mosaico, pisos de mármol desgastados, carpetas cementicias, pisos de hormigón.",
      rendimiento: "1 kg por m2, según tipo de superficie.",
      imagen: "/pinturas/6.png",
    },
    {
      id: 7,
      titulo: "Quimtex Proyectable",
      descripcion:
        "Revestimiento contínuo de base acrílica y cargas minerales, formulado para cubrir y proteger superficies.",
      usos: "Interior y exterior.",
      rendimiento: "Entre 0.8 y 1.5kg/m2.",
      imagen: "/pinturas/7.png",
    },
    {
      id: 8,
      titulo: "Quimtex Revive",
      descripcion:
        "Producto ideado para la restauración o repintado de revestimientos que han sufrido desgaste.",
      usos: "Interior y exterior.",
      rendimiento:
        "Según absorción de superficie, entre 8 y 10 m2 por litro en cada mano. Diluir hasta un máximo de 10%.",
      imagen: "/pinturas/8.png",
    },
    {
      id: 9,
      titulo: "Quimtex Revoque Plástico",
      descripcion:
        "Se utiliza como revestimiento en muros y paredes donde la terminación de albañilería no ha sido óptima.",
      usos: "Interior y exterior.",
      rendimiento:
        "Entre 0.8 y 1.5kg/m2 según la aplicación y la textura deseada.",
      imagen: "/pinturas/9.png",
    },
    {
      id: 10,
      titulo: "Quimtex Romano Fino",
      descripcion:
        "Revestimiento plástico continuo de alta resistencia al interperismo y a todo tipo de agresiones atmosféricas. Gran resistencia, excelente adherencia. Previamente hay que agregar base para homogeneizar la absorción y el color de la superficie aparte de mejorar el anclaje, rendimiento y performance del revestimiento aplicado.",
      usos: "Interiores y exteriores.",
      rendimiento: "Entre 1.8 a 2kg/m2.",
      imagen: "/pinturas/10.png",
    },
    {
      id: 11,
      titulo: "Quimtex Romano Grueso",
      descripcion:
        "Revestimiento plástico continuo de alta resistencia al interperismo y a todo tipo de agresiones atmosféricas. Gran resistencia, excelente adherencia. Previamente hay que agregar base para homogeneizar la absorción y el color de la superficie aparte de mejorar el anclaje, rendimiento y performance del revestimiento aplicado.",
      usos: "Interiores y exteriores.",
      rendimiento: "Entre 2.6 a 3kg/m2.",
      imagen: "/pinturas/11.png",
    },
    {
      id: 12,
      titulo: "Quimtex Romano Mix",
      descripcion:
        "Revestimiento plástico continuo de alta resistencia al interperismo y a todo tipo de agresiones atmosféricas. Gran resistencia, excelente adherencia. Previamente hay que agregar base para homogeneizar la absorción y el color de la superficie aparte de mejorar el anclaje, rendimiento y performance del revestimiento aplicado.",
      usos: "Interiores y exteriores.",
      rendimiento: "Entre 2 a 2.5kg/m2.",
      imagen: "/pinturas/12.png",
    },
    {
      id: 13,
      titulo: "Quimtex Texturado",
      descripcion:
        "Revestimiento plástico ideal para corregir problema de revoques, pequeñas fisuras, diferencias de color, espesor y terminaciones desparejas o ahuecadas.",
      usos: "Interior y exterior.",
      rendimiento: "2 a 3kg/m2.",
      imagen: "/pinturas/13.png",
    },
    {
      id: 14,
      titulo: "Quimtex Vallarta",
      descripcion:
        "Revestimiento para cubrir y proteger superficies lisas, rugosas, con diferentes texturas. Se logra realzar los revoques existentes, otorgando resistencia a la intemperie.",
      usos: "Interior y exterior. Se aplica con rodillo o soplete.",
      rendimiento: "Fino: 0.8 a 1 Kg. / m2.",
      imagen: "/pinturas/14.png",
    },
    {
      id: 15,
      titulo: "Quimtex Veneciano",
      descripcion:
        "Revestimiento de granulado fino ideal para acabado de paredes y muros. Su formula contiene fungicidas que impiden el desarrollo de hongos.",
      usos: "Interior y exterior.",
      rendimiento: "0,5 kg/m2.",
      imagen: "/pinturas/15.png",
    },
  ];

  const imagenesProduccion = [
    {
      id: 16,
      titulo: "Proceso de Fabricación 1",
      imagen: "/pinturas/16.webp",
    },
    {
      id: 17,
      titulo: "Proceso de Fabricación 2",
      imagen: "/pinturas/17.webp",
    },
    {
      id: 18,
      titulo: "Proceso de Fabricación 3",
      imagen: "/pinturas/18.webp",
    },
  ];

  const imagenesColores = [
    {
      id: 19,
      titulo: "Carta de Colores 1",
      imagen: "/pinturas/19.webp",
    },
    {
      id: 20,
      titulo: "Carta de Colores 2",
      imagen: "/pinturas/20.webp",
    },
  ];

  const imagenesObras = [
    {
      id: 21,
      titulo: "Obra Realizada 1",
      imagen: "/pinturas/21.webp",
    },
    {
      id: 22,
      titulo: "Obra Realizada 2",
      imagen: "/pinturas/22.webp",
    },
    {
      id: 23,
      titulo: "Obra Realizada 3",
      imagen: "/pinturas/23.webp",
    },
  ];

  return (
    <div className="container max-w-7xl  p-4 md:mx-auto py-36 space-y-8">
      <BackButton text="Volver a Categorías" url="/steelframe" />
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex items-center  justify-center gap-3">
          <div>
            <h2 className="font-bold">Pinturas y Revestimientos</h2>
          </div>
        </div>
      </div>

      {/* Descripción principal */}
      <div className=" p-6 mb-8">
        <p className="text-gray-200 leading-relaxed mb-4">
          Revestimientos plásticos diseñados para frentes, fachadas e
          interiores, de alto rendimiento y múltiples usos en viviendas, locales
          comerciales y más. Trabajamos de la mano de la marca líder{" "}
          <strong>Productora Química Llana</strong>. Para mayor información,
          consultar en{" "}
          <a
            href="https://www.pqllana.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            www.pqllana.com.ar
          </a>
        </p>
        <p className="text-sm text-gray-400 italic">
          <strong>Productos a pedido, fuera de stock.</strong> Por favor
          comunicarse al teléfono de su vendedor para solicitarlo.
        </p>
      </div>

      {/* Grid de productos Quimtex */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {productos.map((producto) => (
          <Card
            key={producto.id}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-800 border-gray-700 overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={producto.imagen || "/logo.png"}
                alt={producto.titulo}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-bold ">{producto.titulo}</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-300">
                    Descripción:
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {producto.descripcion}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-gray-300">Usos:</span>
                  <p className="text-sm text-gray-400">{producto.usos}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-300">
                    Rendimiento:
                  </span>
                  <p className="text-sm text-gray-400">
                    {producto.rendimiento}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sección de fabricación */}
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {imagenesProduccion.map((imagen) => (
            <Card
              key={imagen.id}
              className="bg-gray-800 border-gray-700 overflow-hidden"
            >
              <div className="relative  aspect-[16/9]">
                <Image
                  src={imagen.imagen || "/logo.png"}
                  alt={imagen.titulo}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          ))}
        </div>

        <div className="p-6 text-center">
          <p className="font-bold  mb-2">
            En Aisplac fabricamos la tonalidad que desees a base de nuestra
            carta de colores.
          </p>
          <p className="">
            Contamos con más de <strong>750 colores</strong>, consultanos.
          </p>
        </div>
      </div>

      {/* Sección de carta de colores */}
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {imagenesColores.map((imagen) => (
            <Card
              key={imagen.id}
              className="bg-gray-800 border-gray-700 overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={imagen.imagen || "/logo.png"}
                  alt={imagen.titulo}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Sección de obras */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">
          <strong>Obras</strong> que utilizan pinturas de Aisplac SRL:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {imagenesObras.map((imagen) => (
            <Card key={imagen.id} className=" overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src={imagen.imagen || "/logo.png"}
                  alt={imagen.titulo}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* Fuentes */}
      <div className="mt-12 p-">
        <h3 className="text-sm font-semibold text-gray-300 mb-2">
          Fuentes solicitadas:
        </h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="https://www.pqllana.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline flex items-center gap-1"
          >
            www.pqllana.com.ar
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://www.quimtex1.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline flex items-center gap-1"
          >
            www.quimtex1.com.ar
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://www.quimtexexpress.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline flex items-center gap-1"
          >
            www.quimtexexpress.com.ar
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
