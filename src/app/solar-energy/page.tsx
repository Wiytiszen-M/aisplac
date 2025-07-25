'use client';
import Image from 'next/image';
import React from 'react';
import { LogoBanner } from '@/components/logo-banner';
import { PartnerLogo } from '@/components/partner-logo';
import { CustomButton } from '@/components/ui/custom-button';

const SolarEnergy = () => {
  return (
    <section
      className="relative flex w-full  h-full flex-col items-center pb-[140px] pt-14 md:pb-[340px] md:pt-0"
      style={{
        background: 'linear-gradient(0deg, transparent 0%, #024550 10%);',
      }}
    >
      <div className="flex w-full justify-end">
        <Image
          src="/solar/solar-hero.png"
          alt="Energía solar"
          width={1664}
          height={1037}
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="/solar-hero-blur.jpg"
        />
      </div>
      <div className="mt-20 flex flex-col items-center gap-8 px-4 text-center lg:w-[1088px]">
        <p>
          La energía del futuro llegó a Aisplac. Con la incorporación de energía
          renovable podes optimizar tus espacios y reducir el impacto ambiental
          al mismo tiempo.
        </p>
        <p className="mb-[60px] mt-8 font-bold">
          ¡Consultanos y descubrí cómo integrar
          <br /> la energía solar en tus proyectos!
        </p>

        <CustomButton variant="secondary" className="w-[220px] lg:w-[300px]">
          CONTACTANOS
        </CustomButton>
      </div>
      <Image
        src="/solar-panel-1.png"
        width={1654}
        height={514}
        alt="solar-energy-bg"
        className="mb-28 mt-40"
      />
      <p className="px-4 text-center lg:w-[1233px]">
        La energía solar representa la vanguardia en soluciones energéticas
        sustentables, aprovechando la tecnología más avanzada para transformar
        la energía del sol en electricidad limpia y eficiente. Cada instalación
        es personalizada para maximizar el rendimiento, adaptándose a las
        necesidades específicas de tu proyecto. Este servicio es desarrollado
        por profesionales en la energía renovable, con amplia trayectoria y
        experiencia en el exterior del país.
      </p>

      <Image
        src="/solar-panel-2.png"
        width={1654}
        height={514}
        alt="solar-energy-bg"
        className="mb-28 mt-40"
      />
      <div className="mb-36 px-4">
        <div className="flex-nowrapwrap flex w-full justify-center gap-6 lg:gap-x-8">
          <LogoBanner>
            <PartnerLogo src="/logo-longi.png" alt="logo longi" />
            <PartnerLogo src="/logo-sungrow.png" alt="logo sungrow" />
          </LogoBanner>
        </div>
      </div>

      <h2 className="mb-36 px-4 text-center font-bold lg:w-[1260px]">
        Tus proyectos pueden ser amigables con el medio ambiente, contactanos y
        te ayudamos a hacerlo realidad.
      </h2>
      <CustomButton variant="secondary" className="w-[220px] lg:w-[300px]">
        CONTACTANOS
      </CustomButton>
    </section>
  );
};

export default SolarEnergy;
