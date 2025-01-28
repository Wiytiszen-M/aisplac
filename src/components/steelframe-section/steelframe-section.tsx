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
      <Image
        src="/steelframe.webp"
        width={1080}
        height={900}
        alt="steelframe"
        className="mx-auto absolute top-0"
      />
      <div className="absolute bottom-0  z-20 flex w-full mx-20 px-44 justify-between">
        <div className="w-[514px] flex flex-col gap-12 justify-start text-left">
          <h2 className="text-6xl font-bold ">
            MATERIALES DE CONSTRUCCIÓN EN SECO
          </h2>
          <p className="w-[630px] text-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
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
