import ArrowRight from "@/app/assets/icons/arrow-right";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      {/* Título */}
      <h2 className="absolute right-[10%] bottom-[45%] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold z-20 text-white w-full max-w-[503px] text-left px-4">
        MATERIALES DE CONSTRUCCIÓN EN SECO
      </h2>

      {/* Imagen */}
      <div>
        <Image
          src="/steelframe.webp"
          width={956}
          height={796}
          alt="steelframe"
          className=" sm:w-[70%] md:w-[60%] lg:w-auto mx-auto"
        />
      </div>

      {/* Contenido inferior */}
      <div className=" mb-[120px] z-20 flex w-full px-6 sm:px-20 gap-10 justify-around">
        <div className="w-full max-w-[790px] flex flex-col gap-12 justify-start text-left">
          <p className="text-base sm:text-xl lg:text-3xl text-white">
            Ofrecemos la línea más completa de materiales para la construcción
            en seco. Innovación, calidad y un equipo que respalda cada paso de
            tu proyecto.
          </p>
        </div>
        <div className="flex items-center uppercase">
          <Link
            href="/steelframe"
            className="flex items-center gap-4 text-base sm:text-lg lg:text-2xl font-bold text-white"
          >
            Ver Productos{" "}
            <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SteelframeSection;
