import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TripleArrow } from "../icons";

type steelframeProps = {
  className?: string;
};

const SteelframeSection = ({ className }: steelframeProps) => {
  return (
    <section
      className={`relative flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: "url('/steelframe-bg.webp')",
      }}
    >
      <h2 className="md:absolute right-[10%] bottom-[45%] z-20 text-white w-full max-w-[503px] font-bold text-left px-4">
        MATERIALES DE CONSTRUCCIÓN EN SECO
      </h2>

      {/* Imagen */}
      <div>
        <Image
          src="/steelframe.webp"
          width={956}
          height={796}
          alt="steelframe"
          className=" w-full md:w-[60%] lg:w-auto mx-auto"
        />
      </div>

      <div className=" mb-[120px] z-20 flex flex-col md:flex-row w-full px-6 sm:px-20 gap-10 justify-around">
        <div className="w-full max-w-[790px] flex flex-col gap-12 justify-start text-left">
          <p>
            Ofrecemos la línea más completa de materiales para la construcción
            en seco. Innovación, calidad y un equipo que respalda cada paso de
            tu proyecto.
          </p>
        </div>
        <div className="flex items-center uppercase">
          <Link
            href="/steelframe"
            className="flex items-center gap-4 se sm:text-lg lg: font-bold text-white"
          >
            Ver Productos{" "}
            <TripleArrow className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SteelframeSection;
