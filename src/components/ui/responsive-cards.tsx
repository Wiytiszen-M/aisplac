"use client";

import { useState } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  metaText?: string;
}

export default function ResponsiveCards() {
  const cards: CardProps[] = [
    {
      title: "Oficina",
      imageUrl: "/complejo-comercial.png",
    },
    {
      title: "Complejo Comercial",
      imageUrl: "/complejo-comercial.png",
    },
    {
      title: "Vivienda Rural",
      imageUrl: "/complejo-comercial.png",
    },
  ];

  return (
    <div className="w-full bg-[#1a1a2e] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, subtitle, imageUrl, metaText }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-[462px] h-[462px] md:h-[518px] overflow-hidden rounded-md">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-105 brightness-110" : "scale-100"
          }`}
        />
      </div>
      <div className="text-center mt-4 pb-2 relative">
        {subtitle && <p className="text-lg text-gray-300 mb-1">{subtitle}</p>}
        <h3 className="text-xl font-medium">{title}</h3>
        {metaText && <p className="text-sm text-gray-400 mt-2">{metaText}</p>}
        <div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
            isHovered ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  );
}
