import Image from "next/image";
import React from "react";
import { FowardButton } from "../foward-button";

const ModularSection = () => {
  return (
    <section className="p-4 md:p-0 relative flex flex-col justify-center items-center gap-4 md:gap-0 min-h-screen w-full bg-cover bg-center bg-no-repeat">
      <div
        className="absolute -z-20 flex flex-col justify-center items-center h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/module-bg.png')",
        }}
      />
      <div
        className="absolute bottom-5 w-[95%] h-[95%] bg-no-repeat bg-contain -z-10"
        style={{
          opacity: 0.1,
          backgroundImage: "url('/module-vector.png')",
        }}
      />

      <div className="flex flex-col items-center md:flex-row relative overflow-x-hidden">
        <Image
          className="md:absolute bottom-[45%] w-full md:w-[460px]"
          src="/module-logo.png"
          alt="module architecture"
          height={120}
          width={460}
        />
        <Image
          className="md:ml-16"
          src="/module-arch.webp"
          width={1405}
          height={699}
          alt="module architecture"
        />
      </div>

      <div className="flex flex-col w-full gap-8 md:gap-0 md:flex-row md:pb-20 md:pt-0 lg:px-44 pt-0 justify-between">
        <p className="md:text-left w-full md:w-[630px] flex lg:w-1/2 ">
          La construcción modular es la arquitectura del futuro por la rapidez
          de ejecución, eficiencia de montaje y sostenibilidad.
        </p>
        <div className="z-30 flex items-center  lg:w-1/2 justify-center">
          <FowardButton url="/modular" text="Ver Productos" />
        </div>
      </div>
    </section>
  );
};

export default ModularSection;
