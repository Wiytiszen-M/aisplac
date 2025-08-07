import Image from "next/image";
import React from "react";
import { FowardButton } from "../foward-button";

const ModularSection = () => {
  return (
    <section className="mt-5 relative flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-cover bg-center bg-no-repeat p-4 md:gap-0 md:p-0">
      <div
        className="absolute -z-20 flex h-full w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/module-bg.png')",
        }}
      />
      <div
        className="absolute bottom-5 -z-10 h-[95%] w-[95%] bg-contain bg-no-repeat"
        style={{
          opacity: 0.1,
          backgroundImage: "url('/module-vector.png')",
        }}
      />

      <div className="relative flex flex-col items-center overflow-x-hidden md:flex-row">
        <Image
          className="bottom-[45%] w-full md:absolute md:w-[460px]"
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

      <div className="flex w-full flex-col justify-between gap-8 pt-0 md:flex-row md:gap-0 md:pb-20 md:pt-0 lg:px-44">
        <p className="flex w-full md:w-[630px] md:text-left lg:w-1/2">
          La construcción modular es la arquitectura del futuro por la rapidez
          de ejecución, eficiencia de montaje y sostenibilidad.
        </p>
        <div className="z-30 flex items-center justify-center lg:w-1/2">
          <FowardButton url="/modular" text="Ver Productos" />
        </div>
      </div>
    </section>
  );
};

export default ModularSection;
