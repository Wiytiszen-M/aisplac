"use client";

import { useState } from "react";
import Image from "next/image";
import { CustomButton } from "./custom-button";
import Link from "next/link";

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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s",
    images: {
      main: "/modular/modular-ex.png",
      secondary: "/modular/zoco.png",
      left: "/modular/windows.png",
      right: "/modular/zoco-front.png",
    },
  },
  comercial: {
    description:
      "Los complejos comerciales modulares ofrecen espacios versátiles y adaptables para negocios de todo tipo, con diseños modernos y funcionales.",
    images: {
      main: "/modular/comercial-1.png",
      secondary: "/modular/comercial-2.png",
      left: "/modular/comercial-3.png",
      right: "/modular/comercial-4.png",
    },
  },
  rural: {
    description:
      "Nuestras viviendas rurales modulares combinan la comodidad moderna con la integración al entorno natural, perfectas para el campo.",
    images: {
      main: "/modular/rural-1.png",
      secondary: "/modular/rural-2.png",
      left: "/modular/rural-3.png",
      right: "/modular/rural-4.png",
    },
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
      imageUrl: "/complejo-comercial.png",
      type: "oficina",
    },
    {
      title: "Complejo Comercial",
      imageUrl: "/complejo-comercial.png",
      type: "comercial",
    },
    {
      title: "Vivienda Rural",
      imageUrl: "/complejo-comercial.png",
      type: "rural",
    },
  ];

  const currentProject = projectData[selectedCard as keyof typeof projectData];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              {...card}
              onClick={() => handleCardClick(card.type)}
              isSelected={selectedCard === card.type}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto flex justify-center items-center mt-12">
        <Link href="/contact">
          <CustomButton variant="secondary">SOLICITAR MÁS INFO</CustomButton>
        </Link>
      </div>
      <div
        className={`relative flex flex-col mt-20 md:gap-6 gap-3 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="md:w-[550px] absolute p-4 md:top-20 md:left-20">
          {currentProject.description}
        </p>
        <Image
          alt="modular exibition"
          src={currentProject.images.main || "/placeholder.svg"}
          width={1752}
          height={1068}
        />

        <Image
          alt="modular exibition"
          src={currentProject.images.secondary || "/placeholder.svg"}
          width={1752}
          height={543}
        />
        <div className="flex md:gap-6 gap-3 w-full h-fit overflow-x-hidden ">
          <Image
            alt="modular windows"
            src={currentProject.images.left || "/placeholder.svg"}
            width={1180}
            height={543}
            className="w-8/12"
          />
          <Image
            alt="modular zoco front"
            src={currentProject.images.right || "/placeholder.svg"}
            width={522}
            height={543}
            className="w-4/12"
          />
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
