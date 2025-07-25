"use client";
import Image from "next/image";

interface Props {
  brands: {
    src: string;
    alt: string;
    name: string;
  }[];
}

const InfiniteBrandBanner = ({ brands }: Props) => {
  // Calcular cuántas repeticiones necesitamos para llenar la pantalla
  // Asumiendo que cada marca ocupa aproximadamente 200px (160px + márgenes)
  const brandWidth = 200;
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
  const minRepetitions = Math.ceil(
    (screenWidth * 2) / (brands.length * brandWidth)
  );

  // Crear array con suficientes repeticiones para evitar espacios vacíos
  const repeatedBrands = Array(Math.max(minRepetitions, 6)).fill(brands).flat();

  return (
    <div className="w-full overflow-hidden py-8 shadow-sm">
      <div className="relative">
        {/* Gradientes para efecto fade en los bordes */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#1c1936] to-transparent"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#1c1936] to-transparent"></div>

        {/* Contenedor del scroll infinito */}
        <div className="flex animate-scroll-seamless">
          {/* Primera serie de marcas repetidas */}
          {repeatedBrands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <Image
                src={brand.src || "/placeholder.svg"}
                alt={brand.alt}
                width={160}
                height={80}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}

          {/* Segunda serie de marcas repetidas (para el loop infinito) */}
          {repeatedBrands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <Image
                src={brand.src || "/placeholder.svg"}
                alt={brand.alt}
                width={160}
                height={80}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteBrandBanner;
