export const revalidate = 600;

import Image from "next/image";
import { Suspense } from "react";
import InfiniteBrandBanner from "@/components/infinite-brand-banner";
import { CategoriasSkeleton } from "@/components/categorias-skeleton";
import { CategoriasGrid } from "@/components/categorias-grid";

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
  { src: "/partner-logos/isover-logo.png", alt: "isover-logo", name: "Isover" },
  {
    src: "/partner-logos/Acerolatina.webp",
    alt: "acerolatina-logo",
    name: "Acerolatina",
  },
  { src: "/partner-logos/Eternit.png", alt: "eternit-logo", name: "Eternit" },
  {
    src: "/partner-logos/Extraplack.png",
    alt: "extraplack-logo",
    name: "Extraplack",
  },
  { src: "/partner-logos/Knauf.png", alt: "knauf-logo", name: "Knauf" },
  { src: "/partner-logos/Llana.png", alt: "llana-logo", name: "Llana" },
  { src: "/partner-logos/LP.png", alt: "lp-logo", name: "LP" },
  { src: "/partner-logos/LTN.png", alt: "ltn-logo", name: "LTN" },
  {
    src: "/partner-logos/RCDistribuciones.png",
    alt: "rcdistribuciones-logo",
    name: "RC Distribuciones",
  },
  { src: "/partner-logos/Sika.png", alt: "sika-logo", name: "Sika" },
];

export default async function SteelframePage() {
  return (
    <section className="overflow-hidden pb-[150px] pt-36">
      <div className="relative flex w-full flex-col items-center overflow-hidden">
        <div
          className="flex h-[80vh] w-full flex-col-reverse items-center bg-cover bg-center bg-no-repeat md:min-h-screen md:flex-row md:justify-center md:pt-[100px]"
          style={{ backgroundImage: "url('/steelframe-bg.webp')" }}
        >
          <div
            className="absolute bottom-0 z-10 h-full w-full"
            style={{
              background: "linear-gradient(transparent 50%, #1c1936 88%)",
            }}
          />
          <Image
            src="/steelframe.webp"
            fill
            alt="steelframe-obra"
            className="mt-10 w-full object-contain md:absolute md:top-0 md:mx-auto md:max-w-[1270px]"
            priority
          />
          <div className="absolute top-0 z-20 mx-20 flex w-full px-12 md:top-28 md:px-44">
            <div className="flex text-left md:w-[514px]">
              <h2 className="font-bold">MATERIALES DE CONSTRUCCIÓN EN SECO</h2>
            </div>
          </div>
          <div className="absolute bottom-0 z-30 flex gap-x-8 overflow-hidden">
            <InfiniteBrandBanner brands={partnerLogos} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl p-4 pt-36 min-h-screen">
        <Suspense fallback={<CategoriasSkeleton />}>
          <CategoriasGrid />
        </Suspense>
      </div>
    </section>
  );
}
