import ArrowRight from "@/app/assets/icons/arrow-right";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PvcProps = {
  className?: string;
};

const PVCSection = ({ className = "" }: PvcProps) => {
  return (
    <section
      className={`relative flex flex-col gap-12 w-full h-[615px] ${className} lg:overflow-hidden`}
    >
      <div className="absolute w-[90%] left-0 h-full rounded-tr-[218px] bg-[#1B434C] flex justify-end">
        <div className="z-10 flex flex-col justify-center lg:ml-[55%]">
          <div className="relative z-20 flex flex-col lg:items-start max-w-[635px] px-4 sm:px-8">
            {/* Imagen Title responsive */}
            <div className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-[140px] mb-4">
              <Image
                src="/pvc-title.png"
                width={140}
                height={140}
                alt="pvc panels"
              />
            </div>

            {/* Texto responsivo */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-left text-white">
              Con amplia experiencia en la industria plástica, nos dedicamos a
              la fabricación de paneles de PVC y accesorios. Ofrecemos
              soluciones integrales para cielorrasos y terminaciones, atendiendo
              las necesidades de la industria, el comercio y el hogar.
            </p>

            {/* Botón responsivo */}
            <div className="flex items-center uppercase mt-6 sm:mt-8">
              <Link
                href="/pvc"
                className="flex items-center gap-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white"
              >
                Ver Productos{" "}
                <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PVCSection;
