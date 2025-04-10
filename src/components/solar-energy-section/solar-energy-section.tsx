import ArrowRight from "@/app/assets/icons/arrow-right";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SolarEnergyProps = {
  className?: string;
};

const SolarEnergySection = ({ className }: SolarEnergyProps) => {
  return (
    <section
      className={`relative flex flex-col items-center gap-12 w-full h-screen ${className} overflow-hidden`}
    >
      <div
        className="absolute w-[90%] right-0 h-full rounded-tl-[218px] flex flex-col"
        style={{
          background: "linear-gradient(0deg, transparent 20%, #1B434C 40%);",
        }}
      />
      <div className="z-10 mt-10 ">
        <Image
          src="/solar-house.webp"
          width={1277}
          height={454}
          alt="solar-house-bg"
          className="absolute bottom-0 z-0"
        />
        <div className="relative z-20 flex flex-col justify-center items-center md:w-[971px]">
          <Image
            src="/solar-icon.svg"
            width={140}
            height={140}
            alt="solar-energy"
          />
          <h2 className="text-3xl font-bold  mt-14  mb-20">
            ENERGÍA{" "}
            <span className="text-3xl font-normal text-[#42BA7D]">SOLAR</span>
          </h2>
          <p className="text-3xl">
            Cada instalación es personalizada para maximizar el rendimiento,
            adaptándose a las necesidades específicas de tu proyecto.
          </p>
          <p className="text-3xl mt-10 md:w-[500px]">
            ¡Acercate y te armamos el proyecto ideal para tu empresa o vivienda!
          </p>
          <div className="flex items-center uppercase ">
            <Link
              href="/solar-energy"
              className="flex items-center gap-4 text-2xl font-bold mt-10 "
            >
              Ver Productos <ArrowRight className="w-12 h-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarEnergySection;
