"use client";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import ArrowRight from "@/app/assets/icons/arrow-right";
import ArrowLeft from "@/app/assets/icons/arrow-left";
import Image from "next/image";

interface CarouselItemProps {
  title: string;
  description: string;
  iconPath: string;
}

export default function BlurredCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(1); // Start with middle item selected

  const items: CarouselItemProps[] = [
    {
      title: "Sostenibilidad",
      description:
        "Construcción con materiales ecológicos y sostenibles. Reducimos el impacto ambiental en nuestros proyectos y viviendas. Los materiales son reciclables y eco-amigables.",
      iconPath: "/modular/handheart.svg",
    },
    {
      title: "Construcción Modular",
      description:
        "Construcción en plazos ajustados mediante módulos prefabricados, recientemente innovadores, de obra. Servicios de reformas integrales. Soluciones constructivas eficientes.",
      iconPath: "/modular/home.svg",
    },
    {
      title: "Automatización",
      description:
        "Implementación de sistemas de automatización y control electrónico en construcción. Soluciones inteligentes para el hogar.",
      iconPath: "/modular/fileedit.svg",
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Initialize with center item
    emblaApi.scrollTo(1);

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div
                  className={`rounded-lg transition-all duration-300 ${
                    selectedIndex === index
                      ? "opacity-100 scale-105"
                      : "opacity-50 blur-[2px] scale-95"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center p-6 text-center text-white">
                    <div className="mb-4 flex justify-center">
                      <div className="relative w-10 h-10">
                        <Image
                          src={item.iconPath || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-contain opacity-80"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-80">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative  flex mt-4">
          <Button
            variant="link"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white border-white/30 hover:bg-white/10"
            onClick={scrollNext}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Siguiente</span>
          </Button>
          <Button
            variant="link"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Anterior</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
