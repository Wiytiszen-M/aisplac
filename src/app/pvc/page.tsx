export const revalidate = 600;

import { CategoriasPVCGrid } from "@/components/categorias-pvc-grid";
import { CategoriasSkeleton } from "@/components/categorias-skeleton";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const PVCPage = () => {
  return (
    <section className="relative flex h-full w-full flex-col gap-12 pb-36">
      <div className="relative flex justify-center md:hidden md:justify-end">
        <Image
          src="/pvc/pvc-tables-full.png"
          alt="bg-logo"
          width={375}
          height={308}
          className="absolute bottom-[-50px] right-0 z-40 max-[450px]:object-contain"
        />
        <div
          className="container-main relative w-full overflow-hidden rounded-bl-[80px] pt-20 md:w-[95%] md:rounded-bl-[218px] md:pl-28 md:pt-32"
          style={{ background: "#018EA0" }}
        >
          <div className="relative aspect-[16/9] h-[70vh] w-full md:aspect-[16/7]">
            <div className="absolute left-0 right-0 top-20 flex justify-center">
              <div className="container-relative relative flex items-center justify-center p-4">
                <Image
                  src="/pvc/pvc-logo.png"
                  alt="bg-logo"
                  width={250}
                  height={250}
                  className="object-contain"
                />
                {/* Imagen principal centrada encima */}
                <Image
                  src="/pvc/bg-logo.png"
                  alt="pvc-logo"
                  width={300}
                  height={300}
                  className="image-main absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden justify-end md:flex">
        <div
          className="relative w-full overflow-hidden rounded-bl-[80px] pt-20 md:w-[95%] md:rounded-bl-[218px] md:pl-28 md:pt-32"
          style={{ background: "#018EA0" }}
        >
          <div className="relative aspect-[16/9] w-full md:aspect-[16/7]">
            <Image
              src="/pvc-header.png"
              alt="pvc-header"
              fill
              className="absolute right-0 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-around gap-6 p-4 md:my-[153px] md:flex-row">
        <FadeIn className="w-full max-w-[630px] px-4">
          <p className="w-full pt-20 text-center md:p-0 md:pt-5 md:text-left">
            Con amplia experiencia en la industria plástica, nos dedicamos a la
            fabricación de paneles de PVC y accesorios. Ofrecemos soluciones
            integrales para cielorrasos y terminaciones, atendiendo las
            necesidades de la industria, el comercio y el hogar.
          </p>
        </FadeIn>

        <Link href="/calculadora" className="flex items-center justify-center">
          <Button className="w-full md:w-[400px]" size="lg">
            CALCULADORA DE PVC
          </Button>
        </Link>
      </div>

      <div className="mx-auto w-full max-w-7xl p-4 md:pt-36">
        <Suspense fallback={<CategoriasSkeleton />}>
          <CategoriasPVCGrid />
        </Suspense>
      </div>
      <div className="relative flex justify-center md:py-[181px]">
        <FadeIn className="w-full max-w-[1230px] px-4">
          <p className="w-full p-5 text-center md:p-0">
            Material fabricado a partir de la extrusión de PVC, con maquinaria
            de calidad, solidez y precisión.  Respondiendo a las normativas
            constructivas, certificado aptitud técnica y aprobado por el SENASA
            para su uso en establecimientos que requieren condiciones de sanidad
            y por su excelente comportamiento a temperaturas extremas.
          </p>
        </FadeIn>
        <Image
          src="/pvc-logo.png"
          width={611}
          height={491}
          className="absolute top-0 h-[250px] w-[250px] md:h-[491px] md:w-[611px] md:right-0"
          alt="pvc-logo"
        />
      </div>
      <Image
        src="/pvc-fabric.png"
        height={723}
        width={1784}
        alt="pvc-fabric"
        className="w-full"
      />
      <div className="flex w-full items-center justify-around md:py-[181px]">
        <Image
          src="/pvc-logo.png"
          width={611}
          height={491}
          className="absolute -z-10 h-[200px] w-[200px] md:h-[491px] md:w-[611px] lg:relative"
          alt="pvc-logo"
        />
        <FadeIn className="w-full max-w-[630px]">
          <p className="w-full p-5 text-center md:p-0 md:text-left">
            Perfiles plásticos para cielorrasos, con una línea de colores y
            accesorios variada. Solución integral en revestimientos para la
            industria, el comercio y el hogar.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default PVCPage;
