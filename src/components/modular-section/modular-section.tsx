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
      className={`relative flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
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

      <div className="flex relative ">
        <Image
          className="absolute bottom-[45%] h-[120px] w-[460px]"
          src="/module-logo.png"
          alt="module architecture"
          height={120}
          width={460}
        />
        <Image
          className="ml-16"
          src="/module-arch.webp"
          width={1405}
          height={699}
          alt="module architecture"
        />
      </div>
      <div className="flex w-full mx-20 p-44 pt-16 justify-between">
        <div className="w-[514px] flex flex-col gap-12 justify-start text-left">
          <p className="w-[630px] text-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>
        </div>
        <div className="relative z-30 flex items-center uppercase ">
          <Link
            href="/modular"
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
