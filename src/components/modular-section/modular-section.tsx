import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TripleArrow } from "../icons";

type steelframeProps = {
  className?: string;
};

const ModularSection = ({ className }: steelframeProps) => {
  return (
    <section
      className={`p-5 md:p-0 relative flex flex-col justify-center items-center gap-4 md:gap-0 min-h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
    >
      <div
        className="absolute -z-20 flex flex-col justify-center items-center h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/module-bg.png')",
        }}
      />
      <div
        className="absolute bottom-0 w-full h-full bg-no-repeat bg-contain -z-10"
        style={{
          opacity: 0.1,
          backgroundImage: "url('/module-vector.png')",
        }}
      />

      <div className="flex flex-col items-center md:flex-row relative overflow-x-hidden">
        <Image
          className="md:absolute bottom-[45%] w-[65%] md:w-[460px]"
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
      <div className="flex flex-col w-full gap-8 md:gap-0 md:flex-row md:p-20 lg:p-44 pt-0 justify-between">
        <p className="text-left w-full md:w-[630px] se md:">
          La construcción modular es la arquitectura del futuro por la rapidez
          de ejecución, eficiencia de montaje y sostenibilidad.
        </p>
        <div className="relative z-30 flex items-center uppercase ">
          <Link href="/modular" className="flex items-center gap-4 font-bold ">
            Ver Productos <TripleArrow className="flex  justify-center" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModularSection;
