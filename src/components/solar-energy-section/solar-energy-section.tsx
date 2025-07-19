import Image from "next/image";
import React from "react";
import { FowardButton } from "../foward-button";

const SolarEnergySection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center  w-full overflow-hidden">
      <div className="absolute w-[95%] right-0 h-full rounded-bl-[218px] bg-[#1B434C] flex flex-col" />
      <div className="z-10 md:mt-5 ">
        <Image
          src="/solar-house.png"
          width={1277}
          height={454}
          alt="solar-house-bg"
          className="absolute bottom-0 right-0 z-0"
        />
        <div className="relative z-20 flex flex-col justify-center items-center md:w-[971px] mb-32 md:mb-52  md:pr-6  ml-6 md:pl-10">
          <Image
            src="/solar-icon.svg"
            width={140}
            height={140}
            alt="solar-energy"
          />
          <h2 className=" font-bold mb-10 ">
            ENERGÍA <span className=" font-normal text-[#42BA7D]">SOLAR</span>
          </h2>
          <p>
            Cada instalación es personalizada para maximizar el rendimiento,
            adaptándose a las necesidades específicas de tu proyecto.
          </p>
          <p className="md:w-[500px] mt-3">
            ¡Acercate y te armamos el proyecto ideal para tu empresa o vivienda!
          </p>
          <FowardButton
            text="Ver Productos"
            url="/solar-energy"
            className="mt-6 md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default SolarEnergySection;
