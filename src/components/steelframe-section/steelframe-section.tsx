import Image from "next/image";
import React from "react";
import { FowardButton } from "../foward-button";

const SteelframeSection = () => {
  return (
    <section className="bg-[url('/steelframe-bg.webp')] relative flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat">
      <h2 className="md:absolute right-[10%] bottom-[45%] z-20 text-white w-full max-w-[503px] font-bold text-left px-4">
        MATERIALES DE CONSTRUCCIÓN EN SECO
      </h2>

      <Image
        src="/steelframe.webp"
        width={956}
        height={796}
        alt="steelframe"
        className="relative md:left-[-150px] w-full md:w-[60%] lg:w-auto mx-auto px-4 md:px-0"
      />

      <div className=" md:mb-[120px] z-20 flex flex-col md:flex-row w-full px-4 gap-10 justify-around">
        <div className="w-full max-w-[790px] flex flex-col gap-12 justify-start text-left">
          <p>
            Ofrecemos la línea más completa de materiales para la construcción
            en seco. Innovación, calidad y un equipo que respalda cada paso de
            tu proyecto.
          </p>
        </div>
        <FowardButton text="Ver Productos" url="/steelframe" />
      </div>
    </section>
  );
};

export default SteelframeSection;
