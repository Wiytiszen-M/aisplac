import Image from 'next/image';
import React from 'react';
import { FowardButton } from '../foward-button';

const SteelframeSection = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[url('/steelframe-bg.webp')] bg-cover bg-center bg-no-repeat">
      <h2 className="bottom-[45%] right-[10%] z-20 w-full max-w-[503px] px-4 text-left font-bold text-white md:absolute">
        MATERIALES DE CONSTRUCCIÓN EN SECO
      </h2>

      <Image
        src="/steelframe.webp"
        width={956}
        height={796}
        alt="steelframe"
        className="relative mx-auto w-full px-4 md:left-[-150px] md:w-[60%] md:px-0 lg:w-auto"
      />

      <div className="z-20 flex w-full flex-col justify-around gap-10 px-4 md:mb-[120px] md:flex-row">
        <div className="flex w-full max-w-[790px] flex-col justify-start gap-12 text-left">
          <p>
            Ofrecemos la línea más completa de materiales para la construcción
            en seco. Innovación, calidad y un equipo que respalda cada paso de
            tu proyecto.
          </p>
        </div>
        <FowardButton text="Ver Productos" url="/steelframe" />
      </div>
    </section>
  );
};

export default SteelframeSection;
