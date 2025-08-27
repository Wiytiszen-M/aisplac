"use client";

import { Suspense, useState } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  metaText?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

// Datos de proyectos
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

  // Modal con navegación
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleCardClick = (cardType: string) => {
    if (cardType === selectedCard) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCard(cardType);
      setIsTransitioning(false);
    }, 300);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = (imagesLength: number) => {
    setCurrentIndex((prev) => (prev + 1) % imagesLength);
  };

  const prevImage = (imagesLength: number) => {
    setCurrentIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
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
    <div className="w-full px-4 md:py-12">
      <h3 className="my-9 text-center text-base font-bold duration-1000 md:text-3xl">
        Tenemos más de 50 proyectos construidos en arquitectura modular.
      </h3>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 gap-2 md:gap-6 md:grid-cols-3">
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

      <div className={`relative mt-20 flex flex-col gap-3 md:gap-6`}>
        <Image
          alt="modular exibition"
          src={"/modular/zoco-1.png"}
          width={1752}
          height={1068}
          className="h-auto w-full opacity-70 md:opacity-100"
        />
        <div
          className={`mt-7 flex flex-col gap-3 transition-opacity duration-300 md:gap-6 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="absolute top-0 p-4 md:left-20 md:top-28 md:w-[600px]">
            {currentProject.description}
          </p>

          <div className="grid w-full grid-cols-2 justify-center gap-4 md:grid-cols-4">
            <Suspense fallback={<div>Loading...</div>}>
              {currentProject.images.map((image, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <Image
                    alt={`${currentProject.title}-${index + 1}`}
                    src={image}
                    width={400}
                    height={300}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
              ))}
            </Suspense>
          </div>
        </div>
      </div>

      {/* MODAL con navegación */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer click en el contenido
          >
            <Image
              src={currentProject.images[currentIndex]}
              alt="modal-img"
              width={1000}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            {/* Cerrar */}
            <button
              className="absolute top-6 right-6 text-white text-2xl"
              onClick={closeModal}
            >
              ✕
            </button>
            {/* Anterior */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl"
              onClick={() => prevImage(currentProject.images.length)}
            >
              <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
            </button>
            {/* Siguiente */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl"
              onClick={() => nextImage(currentProject.images.length)}
            >
              <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
            </button>
          </div>
        </div>
      )}
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
      className="flex cursor-pointer flex-col items-center transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-[202px] w-full max-w-[462px] overflow-hidden rounded-md md:h-[518px]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered || isSelected ? "scale-105 brightness-110" : "scale-100"
          }`}
        />
      </div>
      <div className="relative mt-4 pb-2 text-center">
        {subtitle && <p className="mb-1 text-lg text-gray-300">{subtitle}</p>}
        <h3 className="text-xl font-medium">{title}</h3>
        {metaText && <p className="mt-2 text-sm text-gray-400">{metaText}</p>}
        <div
          className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 transform bg-white transition-all duration-300 ${
            isHovered || isSelected ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  );
}
