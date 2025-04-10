import ArrowRight from "@/app/assets/icons/arrow-right";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PvcProps = {
  className?: string;
};

const PVCSection = ({ className }: PvcProps) => {
  return (
    <section
      className={`relative flex flex-col gap-12 w-full h-[615px] ${className} overflow-hidden`}
    >
      <div className="absolute w-[90%] left-0-0 h-full rounded-tr-[218px] bg-[#1B434C] flex">
        <div className="z-10 flex flex-col justify-center  ml-[55%]">
          <div className="relative z-20 flex flex-col  items-start w-[635px]">
            <Image
              src="/pvc-title.png"
              width={140}
              height={140}
              alt="pvc panels md:h-[88px] md:w-[183px]"
            />
            <p className="text-3xl text-left">
              Con amplia experiencia en la industria plástica, nos dedicamos a
              la fabricación de paneles de PVC y accesorios. Ofrecemos
              soluciones integrales para cielorrasos y terminaciones, atendiendo
              las necesidades de la industria, el comercio y el hogar.
            </p>
            <div className="flex items-center uppercase ">
              <Link
                href="/pvc"
                className="flex items-center gap-4 text-2xl font-bold mt-10 "
              >
                Ver Productos <ArrowRight className="w-12 h-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PVCSection;
