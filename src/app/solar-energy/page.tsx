import Image from "next/image";
import React from "react";
import { Buy, ShoppingCart, User } from "../assets/icons";
import Link from "next/link";

type SolarEnergyProps = {
  className?: string;
};

const SolarEnergy = ({ className }: SolarEnergyProps) => {
  return (
    <section
      className={`relative flex flex-col items-center gap-12 w-full h-[2647px] ${className}`}
      style={{
        background: "linear-gradient(0deg, transparent 20%, #00232B 100%);",
      }}
    >
      <div className="absolute top-16 flex w-full justify-between z-10">
        <div className="flex items-center ml-[160px]">
          <button className="p-2">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <Link href="/">
          <Image src="/logo.svg" width={112} height={64} alt="logo" />
        </Link>
        <div className="flex gap-3 mr-[160px]">
          <ShoppingCart className="w-12 h-12" />
          <Buy className="w-12 h-12" />
          <User className="w-12 h-12" />
        </div>
      </div>
      <div className="h-[900px]">
        <div
          className="absolute w-[95%] right-0 h-[900px] rounded-bl-[218px] flex flex-col"
          style={{
            background: "#1B434C",
          }}
        >
          <Image
            src="/solar-house.webp"
            width={1277}
            height={454}
            alt="solar-house-bg"
            className="absolute right-0 bottom-[-65px] z-0"
          />
        </div>
        <div className="z-10 mt-[33%]">
          <div className="relative z-20 flex  justify-center items-center w-[635px]">
            <Image
              src="/solar-icon.svg"
              width={430}
              height={364}
              alt="solar-energy"
            />
            <h2 className="flex flex-col justify-center items-start gap-0 text-[75px] font-bold mt-14 mb-20 leading-[70px]">
              ENERGÍA{" "}
              <span className="text-[75px] font-normal text-[#42BA7D]">
                SOLAR
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center items-center gap-8 text-3xl w-[1088px] mt-[167px]">
        <p>
          La energía solar representa la vanguardia en soluciones energéticas
          sustentables, aprovechando la tecnología más avanzada para transformar
          la energía del sol en electricidad limpia y eficiente.{" "}
        </p>

        <p>
          Cada instalación es personalizada para maximizar el rendimiento,
          adaptándose a las necesidades específicas de tu proyecto.
        </p>
        <p className="mt-16 font-bold mb-[91px]">
          ¡Acercate y te armamos el proyecto
          <br /> ideal para tu empresa o vivienda!
        </p>
        <button className="bg-[#A9B0C3] text-[#3E3E5E] rounded  px-[56px] py-4">
          CONTACTANOS
        </button>
      </div>
    </section>
  );
};

export default SolarEnergy;
