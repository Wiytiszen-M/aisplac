export const revalidate = 600;

import { CategoriasGrid } from "@/components/categorias-grid";
import { CategoriasSkeleton } from "@/components/categorias-skeleton";
import InfiniteBrandBanner from "@/components/infinite-brand-banner";

import { getCategorias } from "@/lib/api";
import { Layers } from "lucide-react";

import Image from "next/image";
import { Suspense } from "react";

const partnerLogos = [
  {
    src: "/partner-logos/alfavinil-logo.png",
    alt: "alfavinil-logo",
    name: "Alfavinil",
  },
  {
    src: "/partner-logos/barbieri-logo.png",
    alt: "barbieri-logo",
    name: "Barbieri",
  },
  {
    src: "/partner-logos/grupo-estisol-logo.png",
    alt: "grupo-estisol-logo",
    name: "Grupo Estisol",
  },
  {
    src: "/partner-logos/isover-logo.png",
    alt: "isover-logo",
    name: "Isover",
  },
  {
    src: "/partner-logos/Acerolatina.webp",
    alt: "acerolatina-logo",
    name: "Acerolatina",
  },
  {
    src: "/partner-logos/Eternit.png",
    alt: "eternit-logo",
    name: "Eternit",
  },
  {
    src: "/partner-logos/Extraplack.png",
    alt: "extraplack-logo",
    name: "Extraplack",
  },
  {
    src: "/partner-logos/Knauf.png",
    alt: "knauf-logo",
    name: "Knauf",
  },
  {
    src: "/partner-logos/Llana.png",
    alt: "llana-logo",
    name: "Llana",
  },
  {
    src: "/partner-logos/LP.png",
    alt: "lp-logo",
    name: "LP",
  },
  {
    src: "/partner-logos/LTN.png",
    alt: "ltn-logo",
    name: "LTN",
  },
  {
    src: "/partner-logos/RCDistribuciones.png",
    alt: "rcdistribuciones-logo",
    name: "RC Distribuciones",
  },
  {
    src: "/partner-logos/Sika.png",
    alt: "sika-logo",
    name: "Sika",
  },
];

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
      <div className="relative  overflow-hidden flex w-full flex-col items-center">
        <div
          className="flex flex-col-reverse items-center bg-cover bg-center bg-no-repeat h-[80vh] md:min-h-screen md:flex-row md:justify-center md:pt-[100px] lg:w-full"
          style={{
            backgroundImage: "url('/steelframe-bg.webp')",
          }}
        >
          <div
            className="absolute bottom-0 z-10 h-full w-full md:bottom-0"
            style={{
              background: "linear-gradient(transparent 50%, #1c1936 88%)",
            }}
          />
          <Image
            src="/steelframe.webp"
            fill
            alt="steelframe-obra"
            className="md:mx-auto mt-10 w-full md:max-w-[1270] md:absolute top-0 object-contain"
            priority
          />
          <div className="absolute top-0 z-20 mx-20 flex w-full px-12 md:top-28 md:px-44">
            <div className="flex text-left md:w-[514px]">
              <h2 className="font-bold">MATERIALES DE CONSTRUCCIÓN EN SECO</h2>
            </div>
          </div>
          <div className=" absolute z-30 flex gap-x-8 overflow-hidden bottom-0">
            <InfiniteBrandBanner brands={partnerLogos} />
          </div>
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
