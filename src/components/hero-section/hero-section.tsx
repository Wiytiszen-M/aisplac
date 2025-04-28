import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      {/* Background full width */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Layout con contenido centrado */}
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center text-center px-4">
        <Image
          src="/logo.svg"
          width={486}
          height={277}
          alt="logo"
          className="mt-[430px] z-30"
          style={{ width: "486px", height: "277px" }}
        />
        <div className="flex flex-col justify-center items-center gap-12 mt-[530px] mb-44 w-full max-w-[876px]">
          <p className="">
            Somos una empresa familiar Pampeana fundada en el año 2000. Nuestra
            misión, desde nuestros inicios, es proporcionar soluciones
            integrales para la construcción en seco, con un enfoque en la
            eficiencia y la sostenibilidad.
          </p>
          <button className="font-bold bg-[#A9B0C3] py-4 rounded-lg w-[232px] text-[#3E3E5E]">
            LEER MÁS
          </button>
        </div>
      </div>

      {/* Gradiente para terminar el fondo */}
      <div
        className="absolute bottom-0 w-full h-full -z-10"
        style={{
          background: "linear-gradient(transparent 82%, #1c1936 91%)",
        }}
      />
    </div>
  );
}
