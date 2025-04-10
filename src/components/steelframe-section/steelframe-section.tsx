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
      className={`relative flex justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: "url('/steelframe-bg.webp')",
      }}
    >
      <div
        className="absolute bottom-0 w-full h-full z-10"
        style={{
          background: "linear-gradient(transparent 60%, #1c1936 78%)",
        }}
      />
      <h2 className="text-left absolute right-[10%] bottom-[45%] h-[120px] w-[503px] text-6xl font-bold z-20 ">
        MATERIALES DE CONSTRUCCIÓN EN SECO
      </h2>
      <Image
        src="/steelframe.webp"
        width={956}
        height={796}
        alt="steelframe"
        className="mx-auto absolute left-[15%] top-0"
      />
      <div className="absolute bottom-0  z-20 flex w-full mx-20 px-44 justify-between">
        <div className="w-[514px] flex flex-col gap-12 justify-start text-left">
          <p className="w-[630px] text-3xl">
            Ofrecemos la línea más completa de materiales para la construcción
            en seco. Innovación, calidad y un equipo que respalda cada paso de
            tu proyecto.
          </p>
        </div>
        <div className="flex items-center uppercase ">
          <Link
            href="/steelframe"
            className="flex items-center gap-4 text-2xl font-bold "
          >
            Ver Productos <ArrowRight className="w-12 h-12" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SteelframeSection;
