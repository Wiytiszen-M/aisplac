"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

interface CardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  metaText?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

// Datos para cada tipo de proyecto
const projectData = {
  oficina: {
    description: `Oficina modular de 28,8 m² hecha con contenedor de 40 pies HC. Estructura de acero resistente, aislación térmica y acústica, instalación eléctrica completa e iluminación LED. Lista para usar, rápida de instalar y personalizable. Ideal para oficinas, obras o coworking.`,
    title: "Oficina Modular",
    images: [
      "/modular/oficina/1.jpg",
      "/modular/oficina/2.jpg",
      "/modular/oficina/3.jpg",
    ],
  },
  comercial: {
    description: `ZOCO es un centro comercial modular en General Pico, La Pampa, construido con 12 contenedores por Aisplac SRL. Con 331,2 m² en dos plantas, destaca por su diseño sustentable, terrazas verdes y arquitectura eficiente. Ofrece cafeterías, cervecerías, locales gastronómicos y estudios de diseño, siendo un referente de innovación urbana en la región.`,
    title: "Complejo Comercial",
    images: [
      "/modular/complejo/1.png",
      "/modular/complejo/2.png",
      "/modular/complejo/3.jpg",
      "/modular/complejo/4.jpeg",
      "/modular/complejo/5.jpeg",
    ],
  },
  rural: {
    description: `Vivienda rural de 57,6 m² hecha con dos contenedores de 40 pies. Estructura de acero, aislación térmica y acústica, espacios integrados (estar, cocina, dormitorios y baño), instalaciones completas y diseño personalizable. Lista para habitar, de rápida instalación y bajo impacto ambiental.`,
    title: "Vivienda Rural",
    images: [
      "/modular/rural/1.jpg",
      "/modular/rural/2.jpg",
      "/modular/rural/3.jpg",
      "/modular/rural/4.jpg",
      "/modular/rural/5.jpg",
      "/modular/rural/6.jpg",
      "/modular/rural/7.jpg",
      "/modular/rural/8.jpg",
    ],
  },
};

export default function ResponsiveCards() {
  const [selectedCard, setSelectedCard] = useState("oficina");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCardClick = (cardType: string) => {
    if (cardType === selectedCard) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCard(cardType);
      setIsTransitioning(false);
    }, 300); // Duración de la transición
  };

  const cards: (CardProps & { type: string })[] = [
    {
      title: "Oficina",
      imageUrl: "/modular/oficina.jpg",
      type: "oficina",
    },
    {
      title: "Complejo Comercial",
      imageUrl: "/modular/complejo-comercial.png",
      type: "comercial",
    },
    {
      title: "Vivienda Rural",
      imageUrl: "/modular/vivienda-rural.jpg",
      type: "rural",
    },
  ];

  const currentProject = projectData[selectedCard as keyof typeof projectData];

  return (
    <div className="w-full py-12 px-4">
      <h3 className="text-base md:text-3xl font-bold  text-center duration-1000 my-9">
        Tenemos más de 50 proyectos construidos en arquitectura modular.
      </h3>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`transition-opacity duration-300 ${
                selectedCard === card.type ? "opacity-100" : "opacity-40"
              } hover:opacity-100`}
              tabIndex={0}
              onFocus={() => handleCardClick(card.type)}
            >
              <Card
                key={index}
                {...card}
                onClick={() => handleCardClick(card.type)}
                isSelected={selectedCard === card.type}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex justify-center items-center mt-12">
        <Link href="/contact">
          <Button variant="secundary" size="lg">
            SOLICITAR COTIZACIONES
          </Button>
        </Link>
      </div>
      <div className={` relative flex  flex-col mt-20 md:gap-6 gap-3`}>
        <Image
          alt="modular exibition"
          src={"/modular/zoco-1.png"}
          width={1752}
          height={1068}
          className="w-full h-auto"
        />
        <div
          className={` flex flex-col mt-7 md:gap-6 gap-3 transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="md:w-[600px] absolute p-4 md:top-28 md:left-20">
            {currentProject.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full justify-center">
            <Suspense fallback={<div>Loading...</div>}>
              {currentProject.images.map((image, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    alt={`${currentProject.title}-${index + 1}`}
                    src={image}
                    width={400}
                    height={300}
                    className="rounded-md object-cover w-full h-full"
                  />
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  subtitle,
  imageUrl,
  metaText,
  onClick,
  isSelected,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative w-full max-w-[462px] h-[462px] md:h-[518px] overflow-hidden rounded-md">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered || isSelected ? "scale-105 brightness-110" : "scale-100"
          }`}
        />
      </div>
      <div className="text-center mt-4 pb-2 relative">
        {subtitle && <p className="text-lg text-gray-300 mb-1">{subtitle}</p>}
        <h3 className="text-xl font-medium">{title}</h3>
        {metaText && <p className="text-sm text-gray-400 mt-2">{metaText}</p>}
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
            isHovered || isSelected ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  );
}
