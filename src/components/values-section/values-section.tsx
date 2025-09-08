import React from "react";
import { FadeIn } from "../fade-in";

type Props = {
  className?: string;
};

const ValuesSection = ({ className }: Props) => {
  return (
    <section
      className={`mb-[77px] flex flex-col gap-20 md:gap-44 ${className}`}
    >
      <div className="relative flex w-full flex-col items-center gap-3">
        <FadeIn delay={100} className="w-[300px] xl:w-[487px]">
          <div className="top-36 aspect-square w-[300px] overflow-hidden rounded-2xl lg:relative lg:rotate-45 xl:w-[487px]">
            <div
              className="h-full w-full scale-150 transform transition-transform duration-300 lg:-rotate-45"
              style={{
                backgroundImage: "url('/sustentabilidad.webp')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex h-full w-full items-center justify-center duration-300 md:bg-black/40 md:hover:bg-black/0">
                <p className="se lg: xl: text-center text-white sm:text-lg md:text-xl">
                  SUSTENTABILIDAD
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-[45px] flex w-full flex-col items-center justify-center gap-10 md:gap-[132px] lg:flex-row xl:mt-0 xl:gap-[220px]">
          <FadeIn delay={150} className="w-[300px] xl:w-[487px]">
            <div className="aspect-square w-[300px] overflow-hidden rounded-2xl lg:rotate-45 xl:w-[487px]">
              <div
                style={{
                  backgroundImage: "url('/confianza.webp')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="h-full w-full scale-150 transform transition-transform duration-300 lg:-rotate-45"
              >
                <div className="flex h-full w-full items-center justify-center duration-300 md:bg-black/40 md:hover:bg-black/0">
                  <p className="se lg: xl: text-center text-white sm:text-lg md:text-xl">
                    CONFIANZA
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={150} className="w-[300px] xl:w-[487px]">
            <div className="aspect-square w-[300px] overflow-hidden rounded-2xl lg:rotate-45 xl:w-[487px]">
              <div
                style={{
                  backgroundImage: "url('/union.webp')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="h-full w-full scale-150 transform transition-transform duration-300 lg:-rotate-45"
              >
                <div className="flex h-full w-full items-center justify-center duration-300 md:bg-black/40 md:hover:bg-black/0">
                  <p className="se lg: xl: text-center text-white sm:text-lg md:text-xl">
                    UNION
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <p className="px-4 text-center font-light uppercase lg:mt-20 xl:mt-0">
        Brindamos el mejor servicio de la construcción en
        <br />
        seco, <span className="font-bold">construir futuro</span>, con la
        confianza de siempre
      </p>
    </section>
  );
};

export default ValuesSection;
