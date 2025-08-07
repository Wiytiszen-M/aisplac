"use client";
import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import InfiniteBrandBanner from "@/components/infinite-brand-banner";
import Link from "next/link";

const brands = [
  {
    src: "/logo-longi.png",
    alt: "logo-longi.png",
    name: "logo-longi.png",
  },
  {
    src: "/logo-sungrow.png",
    alt: "logo-sungrow",
    name: "logo-sungrow",
  },
];

const SolarEnergy = () => {
  return (
    <section
      className="relative overflow-hidden flex  w-full flex-col items-center pb-[140px]  md:pb-[340px] md:pt-0"
      style={{
        background:
          "linear-gradient(2deg, rgba(2, 69, 80, 0) 0%, rgba(2, 69, 80, 1) 100%)",
      }}
    >
      <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden">
        <div className="absolute right-0 flex h-full w-[95%] flex-col rounded-bl-[218px] bg-[#1B434C]" />
        <div className="flex  justify-center z-10 md:mt-5">
          <Image
            src="/solar-house.png"
            width={1277}
            height={454}
            alt="solar-house-bg"
            className="absolute bottom-0 right-0 z-0"
          />
          <div className="relative min-h-[80vh] z-20 flex flex-col md:flex-row items-center justify-center md:w-[971px] md:pl-10 md:pr-6">
            <Image
              src="/solar-icon.svg"
              width={216}
              height={216}
              className="object-contain max-w-[216px] max-h-[216px] md:max-w-[430px]"
              alt="solar-energy"
            />
            <h2 className="flex flex-col text-6xl md:text-[80px]  md:ml-12 font-bold">
              ENERGÍA <span className="font-normal text-[#42BA7D]">SOLAR</span>
            </h2>
          </div>
        </div>
      </div>
      <FadeIn className="lg:w-[1088px]">
        <div className="mt-20 flex flex-col items-center gap-8 px-4 text-center lg:w-[1088px]">
          <p>
            La energía del futuro llegó a Aisplac. Con la incorporación de
            energía renovable podes optimizar tus espacios y reducir el impacto
            ambiental al mismo tiempo.
          </p>
          <p className="mb-[60px] mt-8 font-bold">
            ¡Consultanos y descubrí cómo integrar
            <br /> la energía solar en tus proyectos!
          </p>
          <Link href="/contact-us">
            <Button
              variant="secundary"
              size="lg"
              className="w-[220px] lg:w-[300px]"
            >
              CONTACTANOS
            </Button>
          </Link>
        </div>
      </FadeIn>
      <Image
        src="/solar-panel-1.png"
        width={1654}
        height={514}
        alt="solar-energy-bg"
        className="my-14 md:mb-28 md:mt-40"
      />
      <FadeIn className="lg:w-[1233px]">
        <p className="px-4 text-center lg:w-[1233px]">
          La energía solar representa la vanguardia en soluciones energéticas
          sustentables, aprovechando la tecnología más avanzada para transformar
          la energía del sol en electricidad limpia y eficiente. Cada
          instalación es personalizada para maximizar el rendimiento,
          adaptándose a las necesidades específicas de tu proyecto. Este
          servicio es desarrollado por profesionales en la energía renovable,
          con amplia trayectoria y experiencia en el exterior del país.
        </p>
      </FadeIn>

      <Image
        src="/solar-panel-2.png"
        width={1654}
        height={514}
        alt="solar-energy-bg"
        className="mb-28 mt-40"
      />
      <div className="mb-36 px-4">
        <InfiniteBrandBanner brands={brands} />
      </div>
      <FadeIn className="lg:w-[1260px]">
        <h2 className="mb-36 px-4 text-center font-bold lg:w-[1260px]">
          Tus proyectos pueden ser amigables con el medio ambiente, contactanos
          y te ayudamos a hacerlo realidad.
        </h2>{" "}
      </FadeIn>
      <Link href="/contact-us">
        <Button variant="secundary" className="w-[220px] lg:w-[300px]">
          CONTACTANOS
        </Button>
      </Link>
    </section>
  );
};

export default SolarEnergy;
