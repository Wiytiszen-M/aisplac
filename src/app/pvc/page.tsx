"use client";
import { CategoriasPVCGrid } from "@/components/categorias-pvc-grid";
import { CategoriasSkeleton } from "@/components/categorias-skeleton";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface Props {
  className?: string;
}

const PVCPage = ({ className = "" }: Props) => {
  return (
    <section
      className={`relative pb-36  flex flex-col gap-12 w-full h-full ${className}`}
    >
      <div className="md:hidden relative flex justify-center md:justify-end">
        <Image
          src="/pvc/pvc-tables-full.png"
          alt="bg-logo"
          width={375}
          height={308}
          className="absolute right-0 bottom-[-50px] max-[450px]:object-contain z-50"
        />
        <div
          className="relative md:pl-28 md:pt-32 pt-20 w-full md:w-[95%] overflow-hidden rounded-bl-[80px] md:rounded-bl-[218px] container-main"
          style={{ background: "#018EA0" }}
        >
          <div className="relative w-full aspect-[16/9] md:aspect-[16/7]  h-[70vh]">
            <div className="absolute right-0 left-0 top-20 flex justify-center ">
              <div className="relative flex items-center justify-center p-4 container-relative">
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
                  className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 image-main"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-end">
        <div
          className="relative  md:pl-28 md:pt-32 pt-20 w-full md:w-[95%] overflow-hidden rounded-bl-[80px] md:rounded-bl-[218px]"
          style={{ background: "#018EA0" }}
        >
          <div className="relative w-full aspect-[16/9] md:aspect-[16/7]">
            <Image
              src="/pvc-header.png"
              alt="pvc-header"
              fill
              className="absolute right-0 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full p-4 gap-6 flex-col md:flex-row justify-around md:my-[153px]">
        <FadeIn className="w-full max-w-[630px]">
          <p className="text-center md:text-left pt-20 md:pt-5 md:p-0 w-full max-w-[630px]">
            Con amplia experiencia en la industria plástica, nos dedicamos a la
            fabricación de paneles de PVC y accesorios. Ofrecemos soluciones
            integrales para cielorrasos y terminaciones, atendiendo las
            necesidades de la industria, el comercio y el hogar.
          </p>
        </FadeIn>

        <Link href="/calculadora" className=" flex justify-center items-center">
          <Button className="w-full md:w-[400px]" size="lg">
            CALCULADORA DE PVC
          </Button>
        </Link>
      </div>

      <div className="max-w-7xl w-full mx-auto p-4 md:pt-36">
        <Suspense fallback={<CategoriasSkeleton />}>
          <CategoriasPVCGrid />
        </Suspense>
      </div>
      <div className="relative flex justify-center  md:py-[181px]">
        <FadeIn className="w-[1230px]">
          <p className="p-5 md:p-0 w-[1230px] text-center">
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
          className="absolute md:right-0 top-0 h-[491px] w-[611px]"
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
      <div className="flex w-full justify-around items-center  md:py-[181px] ">
        <Image
          src="/pvc-logo.png"
          width={611}
          height={491}
          className="absolute -z-10 lg:relative h-[491px] w-[611px]"
          alt="pvc-logo"
        />
        <FadeIn className="w-[630px]">
          <p className="p-5 md:p-0 text-center md:text-left w-[630px]">
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
