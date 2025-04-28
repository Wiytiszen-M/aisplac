"use client";
import AISButton from "@/components/AISButton/AISButton";
import Header from "@/components/header/header";
import ProductCard from "@/components/product-card/product-card";
import Image from "next/image";

interface Props {
  className?: string;
}

const PVCPage = ({ className }: Props) => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <section
      className={`relative flex flex-col items-center gap-12 w-full h-full ${className}`}
    >
      <Header />
      <div className="h-[1070px]">
        <div
          className="absolute w-[95%] right-0 h-[1070px] rounded-bl-[218px] flex flex-col"
          style={{
            background: "#018EA0",
          }}
        >
          <Image
            src="/pvc-header.png"
            width={1593}
            height={941}
            alt="pvc-header"
            className="absolute bottom-0 right-0 md:h-[941px] md:w-[1593px]"
          />
        </div>
      </div>
      <div className="flex w-full justify-around md:my-[153px]">
        <p className="se text-left w-[630px]">
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
      <article className="flex flex-nowrap justify-center w-full gap-3">
        <ProductCard
          name="BARBIERI"
          description="Montante 89 Rigidiza x9 52 (1.90x12.5cm)"
          sku="000000"
          imageUrl="/fake-pvc-img.png"
          onAddToCart={() => null}
        />
        <ProductCard
          name="BARBIERI"
          description="Montante 89 Rigidiza x9 52 (1.90x12.5cm)"
          sku="000000"
          imageUrl="/fake-pvc-img.png"
          onAddToCart={() => null}
        />
        <ProductCard
          name="BARBIERI"
          description="Montante 89 Rigidiza x9 52 (1.90x12.5cm)"
          sku="000000"
          imageUrl="/fake-pvc-img.png"
          onAddToCart={() => null}
        />
        <ProductCard
          name="BARBIERI"
          description="Montante 89 Rigidiza x9 52 (1.90x12.5cm)"
          sku="000000"
          imageUrl="/fake-pvc-img.png"
          onAddToCart={() => null}
        />
      </article>

      <div className="relative flex justify-center  md:py-[181px]">
        <p className="w-[1230px] text-center">
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
          className="absolute -right-10 top-0 h-[491px] w-[611px]"
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
          className="h-[491px] w-[611px]"
          alt="pvc-logo"
        />
        <p className=" text-left w-[630px]">
          Perfiles plásticos para cielorrasos, con una línea de colores y
          accesorios variada. Solución integral en revestimientos para la
          industria, el comercio y el hogar.
        </p>
      </div>
    </section>
  );
};

export default PVCPage;
