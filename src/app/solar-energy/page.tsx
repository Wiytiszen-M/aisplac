"use client";
import Image from "next/image";
import React from "react";
import AISButton from "@/components/AISButton/AISButton";

const SolarEnergy = () => {
  return (
    <section
      className="pt-14 md:pt-0 relative flex flex-col items-center pb-[140px] w-full h-full"
      style={{
        background: "linear-gradient(0deg, transparent 0%, #024550 10%);",
      }}
    >
      <div className="w-full flex justify-end">
        <Image
          src="/solar/solar-hero.png"
          alt="Energía solar"
          width={1664}
          height={1037}
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="/solar-hero-blur.jpg"
        />
      </div>
      <div className="flex flex-col text-center items-center gap-8 px-4 lg:w-[1088px] mt-20">
        <p className="md:text-xl lg: leading-relaxed">
          La energía del futuro llegó a Aisplac. Con la incorporación de energía
          renovable podes optimizar tus espacios y reducir el impacto ambiental
          al mismo tiempo.
        </p>
        <p className="mt-8 font-bold text-lg lg: mb-[60px]">
          ¡Consultanos y descubrí cómo integrar
          <br /> la energía solar en tus proyectos!
        </p>

        <AISButton
          color="secondary"
          className="w-[220px] h-[64px] lg:w-[300px] lg:h-[80px]"
          onClick={() => {}}
        >
          CONTACTANOS
        </AISButton>
      </div>
      <Image
        src="/solar-panel-1.png"
        width={1654}
        height={514}
        alt="solar-energy-bg"
        className="mt-40 mb-28"
      />
      <p className="text-center px-4 lg:w-[1233px]">
        La energía solar representa la vanguardia en soluciones energéticas
        sustentables, aprovechando la tecnología más avanzada para transformar
        la energía del sol en electricidad limpia y eficiente. Cada instalación
        es personalizada para maximizar el rendimiento, adaptándose a las
        necesidades específicas de tu proyecto. Este servicio es desarrollado
        por profesionales en la energía renovable, con amplia trayectoria y
        experiencia en el exterior del país.
      </p>

      <Image
        src="/solar-panel-2.png"
        width={1654}
        height={514}
        alt="solar-energy-bg"
        className="mt-40 mb-28"
      />
      <div className="mb-36 px-4 overflow-hidden">
        <div className="flex flex-nowrapwrap justify-center gap-6 lg:gap-x-8 w-full">
          {Array.from({ length: 15 }).map((_, index) => (
            <React.Fragment key={index}>
              <Image
                src="/logo-longi.png"
                height={80}
                width={140}
                alt="logo longi"
              />
              <Image
                src="/logo-sungrow.png"
                height={80}
                width={140}
                alt="logo sungrow"
              />
            </React.Fragment>
          ))}
        </div>
      </div>

      <h2 className="text-center font-bold  mb-36 px-4 lg:w-[1260px]">
        Tus proyectos pueden ser amigables con el medio ambiente, contactanos y
        te ayudamos a hacerlo realidad.
      </h2>
      <AISButton
        color="secondary"
        className="w-[300px] h-[80px]"
        onClick={() => {}}
      >
        CONTACTANOS
      </AISButton>
    </section>
  );
};

export default SolarEnergy;
