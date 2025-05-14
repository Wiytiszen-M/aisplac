import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronsRight } from "lucide-react";

type SolarEnergyProps = {
  className?: string;
};

const SolarEnergySection = ({ className }: SolarEnergyProps) => {
  return (
    <section
      className={`relative flex flex-col items-center  w-full ${className} overflow-hidden`}
    >
      <div className="absolute w-[90%] right-0 h-full rounded-bl-[218px] bg-[#1B434C] flex flex-col" />
      <div className="z-10 mt-10 ">
        <Image
          src="/solar-house.png"
          width={1277}
          height={454}
          alt="solar-house-bg"
          className="absolute bottom-0 right-0 z-0"
        />
        <div className="relative z-20 flex flex-col justify-center items-center md:w-[971px] mb-52 md:mb-[370px] pr-6 pl-10  sm:px-20 md:gap-10">
          <Image
            src="/solar-icon.svg"
            width={140}
            height={140}
            alt="solar-energy"
          />
          <h2 className=" font-bold mt-4 mb-10 md:mt-14  md:mb-20">
            ENERGÍA <span className=" font-normal text-[#42BA7D]">SOLAR</span>
          </h2>
          <p>
            Cada instalación es personalizada para maximizar el rendimiento,
            adaptándose a las necesidades específicas de tu proyecto.
          </p>
          <p className=" mt-10 md:w-[500px]">
            ¡Acercate y te armamos el proyecto ideal para tu empresa o vivienda!
          </p>
          <div className="flex items-center uppercase ">
            <Link
              href="/solar-energy"
              className="flex items-center gap-4  font-bold mt-10 "
            >
              Ver Productos{" "}
              <ChevronsRight className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarEnergySection;
