"use client";
import Image from "next/image";
import React from "react";
import { Buy, ShoppingCart, User } from "../assets/icons";
import Link from "next/link";
import AISButton from "@/components/AISButton/AISButton";
import Header from "@/components/header/header";

type SolarEnergyProps = {
  className?: string;
};

const SolarEnergy = ({ className }: SolarEnergyProps) => {
  return (
    <section
      className={`relative flex flex-col items-center gap-12 w-full h-full ${className}`}
      style={{
        background: "linear-gradient(0deg, transparent 20%, #00232B 100%);",
      }}
    >
      <Header />
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
        <AISButton
          text="CONTACTANOS"
          color="secondary"
          className="w-[300px] h-[80px]"
          onClick={() => {}}
        />
      </div>
      <Image
        src="/solar-panel-1.png"
        width={1654}
        height={514}
        alt="solar-energy-bg"
        className="mt-40 mb-28"
      />
      <p className="w-[1233px] text-center text-3xl  leading-[50px]">
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
      <p className="w-[760px] mb-36 text-center  font-bold text-4xl  leading-[50px]">
        Tus proyectos pueden ser amigables con el medio ambiente, contactanos y
        te ayudamos a hacerlo realidad. 
      </p>
      <AISButton
        text="CONTACTANOS"
        color="secondary"
        className="w-[300px] h-[80px] mb-[239px]"
        onClick={() => {}}
      />
    </section>
  );
};

export default SolarEnergy;
