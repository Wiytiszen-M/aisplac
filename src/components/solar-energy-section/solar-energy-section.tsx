import Image from 'next/image';
import React from 'react';
import { FowardButton } from '../foward-button';

const SolarEnergySection = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center overflow-hidden">
      <div className="absolute right-0 flex h-full w-[95%] flex-col rounded-bl-[218px] bg-[#1B434C]" />
      <div className="z-10 md:mt-5">
        <Image
          src="/solar-house.png"
          width={1277}
          height={454}
          alt="solar-house-bg"
          className="absolute bottom-0 right-0 z-0"
        />
        <div className="relative z-20 mb-32 ml-6 flex flex-col items-center justify-center md:mb-52 md:w-[971px] md:pl-10 md:pr-6">
          <Image
            src="/solar-icon.svg"
            width={140}
            height={140}
            alt="solar-energy"
          />
          <h2 className="mb-10 font-bold">
            ENERGÍA <span className="font-normal text-[#42BA7D]">SOLAR</span>
          </h2>
          <p>
            Cada instalación es personalizada para maximizar el rendimiento,
            adaptándose a las necesidades específicas de tu proyecto.
          </p>
          <p className="mt-3 md:w-[500px]">
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
