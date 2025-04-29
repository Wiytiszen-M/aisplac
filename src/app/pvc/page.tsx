"use client";
import AISButton from "@/components/AISButton/AISButton";
import ProductGrid from "@/components/product-grid/product-grid";
import Image from "next/image";

interface Props {
  className?: string;
}

const PVCPage = ({ className }: Props) => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: `${i + 1}`,
    title: "BARBIERI",
    description: "Montante 69 Rigidiza e0.52 (40px122x2.6m)",
    sku: "000000",
    imageUrl: "/image-1.png",
  }));

  return (
    <section
      className={`relative pb-36  flex flex-col gap-12 w-full h-full ${className}`}
    >
      <div className="flex justify-end">
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
      <div className="flex w-full flex-col md:flex-row justify-around md:my-[153px]">
        <p className="text-left p-5 md:p-0 w-full max-w-[630px]">
          Con amplia experiencia en la industria plástica, nos dedicamos a la
          fabricación de paneles de PVC y accesorios. Ofrecemos soluciones
          integrales para cielorrasos y terminaciones, atendiendo las
          necesidades de la industria, el comercio y el hogar.
        </p>

        <div className=" flex justify-center items-center">
          <AISButton
            onClick={handleClick}
            color="primary"
            className="w-[400px]"
          >
            CALCULADORA DE PVC
          </AISButton>
        </div>
      </div>
      <ProductGrid products={products} />
      <div className="relative flex justify-center  md:py-[181px]">
        <p className="p-5 md:p-0 w-[1230px] text-center">
          Material fabricado a partir de la extrusión de PVC, con maquinaria de
          calidad, solidez y precisión.  Respondiendo a las normativas
          constructivas, certificado aptitud técnica y aprobado por el SENASA
          para su uso en establecimientos que requieren condiciones de sanidad y
          por su excelente comportamiento a temperaturas extremas.
        </p>
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
        <p className="p-5 md:p-0 text-left w-[630px]">
          Perfiles plásticos para cielorrasos, con una línea de colores y
          accesorios variada. Solución integral en revestimientos para la
          industria, el comercio y el hogar.
        </p>
      </div>
    </section>
  );
};

export default PVCPage;
