import ArrowRight from "@/app/assets/icons/arrow-right";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type steelframeProps = {
  className?: string;
};

const ModularSection = ({ className }: steelframeProps) => {
  return (
    <section
      className={` relative flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
    >
      <div className=" flex w-full relative">
        <Image
          src="/module.webp"
          width={1220}
          height={600}
          alt="module architecture"
        />
        <h2 className="flex flex-col text-6xl  absolute right-[8%] bottom-[55%] font-bold">
          <span className="text-[#3A69B0]">ARQUITECTURA</span> MODULAR
        </h2>
      </div>
      <div className=" absolute bottom-20 mt-10 z-20 flex w-full mx-20 px-44 justify-between">
        <div className="w-[514px] flex flex-col gap-12 justify-start text-left">
          <p className="w-[630px] text-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>
        </div>
        <div className="flex items-center uppercase ">
          <Link
            href="#"
            className="flex items-center gap-4 text-2xl font-bold "
          >
            Ver Productos <ArrowRight className="w-12 h-12" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModularSection;
