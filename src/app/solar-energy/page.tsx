"use client";
import Image from "next/image";
import React from "react";
import AISButton from "@/components/AISButton/AISButton";

type SolarEnergyProps = {
  className?: string;
};

const SolarEnergy = ({ className }: SolarEnergyProps) => {
  return (
    <section
      className={`relative flex flex-col items-center  w-full h-full ${className}`}
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
        <p className="se md:text-xl lg: leading-relaxed">
          La energía solar representa la vanguardia en soluciones energéticas
          sustentables, aprovechando la tecnología más avanzada para transformar
          la energía del sol en electricidad limpia y eficiente.
        </p>

        <p className="se md:text-xl lg: leading-relaxed">
          Cada instalación es personalizada para maximizar el rendimiento,
          adaptándose a las necesidades específicas de tu proyecto.
        </p>

        <p className="mt-16 font-bold text-lg md: lg: mb-24">
          ¡Acercate y te armamos el proyecto
          <br />
          ideal para tu empresa o vivienda!
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
      <p className="text-center se md:text-xl lg: leading-relaxed lg:leading-[50px] px-4 lg:w-[1233px]">
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
      <div className="flex flex-nowrapwrap justify-center gap-6 lg:gap-x-8 mb-36 px-4 overflow-hidden">
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

      <p className="text-center font-bold text-lg md: lg:text-4xl leading-relaxed lg:leading-[50px] mb-36 px-4 lg:w-[760px]">
        Tus proyectos pueden ser amigables con el medio ambiente, contactanos y
        te ayudamos a hacerlo realidad.
      </p>
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
