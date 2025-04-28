import SingleCarrousel from "@/components/carousel/single-carousel";
import Image from "next/image";

const OutstandingProducts = () => {
  return (
    <>
      <h2 className="text-center font-bold ">PROYECTOS DESTACADOS</h2>
      <div className="flex gap-4 items-center justify-between">
        <Image
          src="/fakeoutstanding.png"
          alt="Outstanding Products"
          width={980}
          height={739}
        />
        <SingleCarrousel />
      </div>
    </>
  );
};

export default OutstandingProducts;
