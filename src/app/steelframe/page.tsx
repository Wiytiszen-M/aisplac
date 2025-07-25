import { CategoriasGrid } from '@/components/categorias-grid';
import { CategoriasSkeleton } from '@/components/categorias-skeleton';
import { LogoBanner } from '@/components/logo-banner';
import { PartnerLogo } from '@/components/partner-logo';
import { getCategorias } from '@/lib/api';
import { Layers } from 'lucide-react';

import Image from 'next/image';
import { Suspense } from 'react';

const SteelframePage = async () => {
  const { data: categorias, error } = await getCategorias();

  if (error) {
    throw new Error(error); // Esto activará error.tsx
  }

  if (!categorias || categorias.length === 0) {
    return (
      <div className="py-36 text-center">
        <Layers className="mx-auto mb-4 h-16 w-16 text-gray-500" />
        <h3 className="mb-2 text-lg font-medium text-gray-100">
          No se encontraron categorías
        </h3>
        <p className="text-gray-400">
          No hay categorías disponibles en este momento.
        </p>
      </div>
    );
  }

  return (
    <section className="overflow-hidden pb-[150px] pt-36">
      <div
        className="relative flex flex-col-reverse items-center bg-cover bg-center bg-no-repeat md:min-h-screen md:flex-row md:justify-center md:pt-[100px] lg:w-full"
        style={{
          backgroundImage: "url('/steelframe-bg.webp')",
        }}
      >
        <div
          className="absolute bottom-[-80px] z-10 h-full w-full md:bottom-0"
          style={{
            background: 'linear-gradient(transparent 50%, #1c1936 88%)',
          }}
        />
        <Image
          src="/steelframe.webp"
          width={1080}
          height={900}
          alt="steelframe"
          className="mx-auto mt-10 w-[90%] md:absolute md:top-0 md:w-auto"
          priority
        />
        <div className="absolute top-0 z-20 mx-20 flex w-full px-12 md:top-28 md:px-44">
          <div className="flex text-left md:w-[514px]">
            <h2 className="font-bold">MATERIALES DE CONSTRUCCIÓN EN SECO</h2>
          </div>
        </div>
        <div className="absolute bottom-[-102px] z-30 flex gap-x-8 overflow-hidden md:bottom-0">
          <LogoBanner>
            <PartnerLogo src="/alfavinil-logo.png" alt="alfavinil-logo" />
            <PartnerLogo src="/barbieri-logo.png" alt="barbieri-logo" />
            <PartnerLogo
              src="/grupo-estisol-logo.png"
              alt="grupo-estisol-logo"
            />
            <PartnerLogo src="/isover-logo.png" alt="isover-logo" />
          </LogoBanner>
        </div>
      </div>
      <div className="mx-auto min-h-screen max-w-7xl p-4 pt-36">
        <Suspense fallback={<CategoriasSkeleton />}>
          <CategoriasGrid />
        </Suspense>
      </div>
    </section>
  );
};

export default SteelframePage;
