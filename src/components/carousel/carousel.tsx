"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    id: 1,
    title: "Naturaleza Salvaje",
    description: "Explora la belleza natural del mundo",
    image: "/image-2.png",
  },
  {
    id: 2,
    title: "Vida Urbana",
    description: "Descubre la energía de la ciudad",
    image: "/image-2.png",
  },
  {
    id: 3,
    title: "Tecnología",
    description: "El futuro está aquí",
    image: "/image-2.png",
  },
  {
    id: 4,
    title: "Arquitectura",
    description: "Diseños que inspiran",
    image: "/image-2.png",
  },
  {
    id: 5,
    title: "Gastronomía",
    description: "Sabores del mundo",
    image: "/image-2.png",
  },
  {
    id: 6,
    title: "Arte",
    description: "Expresiones creativas",
    image: "/image-2.png",
  },
];

export default function NewsCarousele() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    dragFree: true,
  });

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-7xl">
        <Carousel>
          <CarouselContent
            ref={emblaRef}
            className="-ml-4 flex items-center h-[750px]"
          >
            {slides.map((slide) => (
              <CarouselItem
                key={slide.id}
                className="pl-4 basis-full md:basis-1/3 "
              >
                <div className="bg-white w-80 h-[359px]">
                  <div className=" flex flex-col items-center justify-center">
                    <div className="bg-slate-500 relative h-[200px] w-full overflow-hidden ">
                      <Image
                        src={slide.image || "/image-2.png"}
                        alt={slide.title}
                        fill
                        className="object-cover "
                        priority
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-semibold">{slide.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-4 mr-8" /> {/* Ajustado el margen */}
          <CarouselNext className="mr-4" /> {/* Ajustado el margen */}
        </Carousel>
      </div>
    </div>
  );
}
