import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

const MapSection = ({ className }: Props) => {
  return (
    <section
      className={`relative flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: "url(/map-bg.webp)",
      }}
    >
      <h2 className="w-[456px] absolute bottom-28 left-40 text-3xl font-bold  uppercase ">
        MAPA DE ARGENTINA CLIENTES MAYORISTAS
      </h2>
      <Image src="/map.webp" alt="Map Marker" width={1196} height={762} />
    </section>
  );
};

export default MapSection;
