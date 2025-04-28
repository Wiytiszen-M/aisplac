import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

const MapSection = ({ className }: Props) => {
  return (
    <section
      className={`pt-10 pb-36 relative flex flex-col justify-center items-center md:min-h-screen w-full bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: "url(/map-bg.webp)",
      }}
    >
      <h2 className="md:w-[456px] pb-4 md:pb-0 md:absolute bottom-36 left-40  md: font-bold  uppercase ">
        MAPA DE ARGENTINA CLIENTES MAYORISTAS
      </h2>
      <Image src="/map.webp" alt="Map Marker" width={1196} height={762} />
    </section>
  );
};

export default MapSection;
