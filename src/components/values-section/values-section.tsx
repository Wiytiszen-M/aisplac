import React from "react";

type Props = {
  className?: string;
};

const ValuesSection = ({ className }: Props) => {
  return (
    <section className={`flex flex-col gap-44 mb-[77px] ${className}`}>
      <div className="relative flex flex-col items-center gap-3 w-full">
        <div className="lg:relative w-[300px] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[487px] aspect-square rounded-2xl lg:rotate-45 top-36 overflow-hidden">
          <div
            className="w-full h-full lg:-rotate-45 transform transition-transform duration-300 scale-150"
            style={{
              backgroundImage: "url('/sustentabilidad.webp')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex justify-center items-center bg-black/40 hover:bg-black/0 duration-300 w-full h-full">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-center">
                SUSTENTABILIDAD
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-[220px] lg:mt-0">
          <div className="w-[300px] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[487px] aspect-square rounded-2xl lg:rotate-45 overflow-hidden">
            <div
              style={{
                backgroundImage: "url('/confianza.webp')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-full h-full lg:-rotate-45 transform transition-transform duration-300 scale-150"
            >
              <div className="flex justify-center items-center bg-black/40 hover:bg-black/0 duration-300 w-full h-full">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-center">
                  CONFIANZA
                </p>
              </div>
            </div>
          </div>

          <div className="w-[300px] sm:w-[360px] md:w-[420px] lg:w-[460px] xl:w-[487px] aspect-square rounded-2xl lg:rotate-45 overflow-hidden">
            <div
              style={{
                backgroundImage: "url('/union.webp')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-full h-full lg:-rotate-45 transform transition-transform duration-300 scale-150"
            >
              <div className="flex justify-center items-center bg-black/40 hover:bg-black/0 duration-300 w-full h-full">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-center">
                  UNION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="xl:mt-0 lg:mt-20 text-3xl text-center uppercase font-light px-4">
        Brindamos el mejor servicio de la construcción en
        <br />
        seco, <span className="font-bold">construir futuro</span>, con la
        confianza de siempre
      </p>
    </section>
  );
};

export default ValuesSection;
