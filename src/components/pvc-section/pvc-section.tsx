import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ChevronsRight } from 'lucide-react';

const PVCSection = () => {
  return (
    <section className="relative mb-10 flex min-h-screen w-full flex-col gap-12 md:mb-20 lg:overflow-hidden">
      <div className="mt-28 flex max-h-[755px] w-[95%] flex-1 justify-end rounded-tr-[218px] bg-[#1B434C]">
        <div className="z-10 flex flex-col justify-center lg:ml-[55%]">
          <div className="flex max-w-[635px] flex-col px-4 sm:px-8 lg:items-start">
            <div className="mb-4 w-24 sm:w-28 md:w-32 lg:w-36 xl:w-[140px]">
              <Image
                src="/pvc-title.png"
                width={140}
                height={140}
                alt="pvc panels"
              />
            </div>

            <p className="text-left text-white">
              Con amplia experiencia en la industria plástica, nos dedicamos a
              la fabricación de paneles de PVC y accesorios. Ofrecemos
              soluciones integrales para cielorrasos y terminaciones, atendiendo
              las necesidades de la industria, el comercio y el hogar.
            </p>

            <div className="mt-6 flex items-center uppercase sm:mt-8">
              <Link href="/pvc" className="flex items-center gap-4 font-bold">
                Ver Productos{' '}
                <ChevronsRight className="h-10 w-10 sm:h-12 sm:w-12 lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/pvc-table.png"
        alt="pvc-tables-bg"
        width={932}
        height={523}
        className="absolute bottom-[15%] top-14 z-0 h-[150px] w-[200px] md:bottom-0 md:h-full md:w-full md:max-w-[932px]"
      />
    </section>
  );
};

export default PVCSection;
