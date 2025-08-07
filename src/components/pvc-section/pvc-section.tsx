import Image from "next/image";
import React from "react";
import { FowardButton } from "../foward-button";

const PVCSection = () => {
  return (
    <section className="relative mb-10 flex min-h-screen w-full flex-col gap-12 md:mb-20 lg:overflow-hidden">
      <div className="mt-28 flex max-h-[755px] w-[95%] flex-1 justify-end rounded-tr-[218px] bg-[#1B434C]">
        <div className="z-10 flex flex-col justify-center lg:ml-[55%]">
          <div className="flex max-w-[635px] flex-col px-4 sm:px-8 lg:items-start">
            <div className="mb-4 w-24 sm:w-28 md:w-32 lg:w-36 xl:w-[140px]">
              <Image
                src="/pvc-title.png"
                width={140}
                height={140}
                alt="pvc panels"
              />
            </div>

            <p className="text-left text-white">
              Con amplia experiencia en la industria plástica, nos dedicamos a
              la fabricación de paneles de PVC y accesorios. Ofrecemos
              soluciones integrales para cielorrasos y terminaciones, atendiendo
              las necesidades de la industria, el comercio y el hogar.
            </p>

            <div className="mt-6 flex items-center uppercase sm:mt-8">
              <FowardButton text="Ver Productos" url="/pvc" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:static bottom-[10%] top-14  h-[200px] w-[250px] md:h-full md:w-full md:max-w-[932px]">
        <Image
          src="/pvc-table.png"
          alt="pvc-tables-bg"
          fill
          className="absolute  z-0  md:bottom-0 md:h-full md:w-full md:max-w-[932px]"
        />
      </div>
    </section>
  );
};

export default PVCSection;
