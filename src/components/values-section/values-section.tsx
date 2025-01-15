import React from "react";

type Props = {
  className?: string;
};

const ValuesSection = ({ className }: Props) => {
  return (
    <section className={`flex flex-col gap-44  mb-[77px] ${className}`}>
      <div className="relative flex flex-col  items-center gap-3 w-full">
        <div className="1 relative  w-[487px] h-[487px] rounded-2xl rotate-45 top-36 overflow-hidden">
          <div
            className="3 w-[487px] h-[487px] -rotate-45 transform transition-transform duration-300 scale-150"
            style={{
              backgroundImage: "url('/sustentabilidad.webp')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex justify-center items-center bg-black/40 hover:bg-black/0  duration-300 w-full h-full ">
              <p className="text-3xl">SUSTENTABILIDAD</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-[220px]">
          <div className="2  w-[487px] h-[487px] rounded-2xl rotate-45 overflow-hidden  ">
            <div
              style={{
                backgroundImage: "url('/confianza.webp')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="w-[487px] h-[487px] -rotate-45 transform transition-transform duration-300 scale-150"
            >
              <div className="flex justify-center items-center bg-black/40 hover:bg-black/0  duration-300 w-full h-full ">
                <p className="text-3xl">CONFIANZA</p>
              </div>
            </div>
          </div>
          <div className="3 bg-white w-[487px] h-[487px]  rounded-2xl rotate-45 overflow-hidden">
            <div
              style={{
                backgroundImage: "url('/union.webp')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="w-[487px] h-[487px] -rotate-45 transform transition-transform duration-300 scale-150"
            >
              <div className="flex justify-center items-center bg-black/40 hover:bg-black/0  duration-300 w-full h-full ">
                <p className="text-3xl">UNION</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-20 text-3xl uppercase font-light">
        Brindamos el mejor servicio de la construcción en
        <br /> seco,
        <span className="font-bold">construir futuro</span>, con la confianza de
        siempre
      </p>
    </section>
  );
};

export default ValuesSection;
