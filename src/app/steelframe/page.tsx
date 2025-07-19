import { CategoriasGrid } from "@/components/categorias-grid";
import { CategoriasSkeleton } from "@/components/categorias-skeleton";
import { LogoBanner } from "@/components/logo-banner";
import { PartnerLogo } from "@/components/partner-logo";
import { getCategorias } from "@/lib/api";
import { Layers } from "lucide-react";

import Image from "next/image";
import { Suspense } from "react";

const SteelframePage = async () => {
  const { data: categorias, error } = await getCategorias();

  if (error) {
    throw new Error(error); // Esto activará error.tsx
  }

  if (!categorias || categorias.length === 0) {
    return (
      <div className="text-center py-36">
        <Layers className="h-16 w-16 text-gray-500 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-100 mb-2">
          No se encontraron categorías
        </h3>
        <p className="text-gray-400">
          No hay categorías disponibles en este momento.
        </p>
      </div>
    );
  }

  return (
    <section className="pb-[150px] overflow-hidden pt-36">
      <div
        className="relative flex flex-col-reverse md:flex-row md:justify-center items-center md:min-h-screen lg:w-full bg-cover bg-center bg-no-repeat md:pt-[100px]"
        style={{
          backgroundImage: "url('/steelframe-bg.webp')",
        }}
      >
        <div
          className="absolute w-full h-full z-10 bottom-[-80px] md:bottom-0"
          style={{
            background: "linear-gradient(transparent 50%, #1c1936 88%)",
          }}
        />
        <Image
          src="/steelframe.webp"
          width={1080}
          height={900}
          alt="steelframe"
          className="mx-auto w-[90%] md:w-auto md:absolute mt-10 md:top-0"
          priority
        />
        <div className="absolute top-0 md:top-28 z-20 flex w-full mx-20 md:px-44 px-12">
          <div className="md:w-[514px] flex text-left">
            <h2 className="font-bold ">MATERIALES DE CONSTRUCCIÓN EN SECO</h2>
          </div>
        </div>
        <div className="absolute flex overflow-hidden gap-x-8 z-30 bottom-[-102px] md:bottom-0">
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
      <div className="max-w-7xl mx-auto min-h-screen p-4 pt-36">
        <Suspense fallback={<CategoriasSkeleton />}>
          <CategoriasGrid />
        </Suspense>
      </div>
    </section>
  );
};

export default SteelframePage;
