import BlurredCarousel from "@/components/carousel-blur/carousel-blur";
import Image from "next/image";

const Modular = () => {
  return (
    <section className="flex flex-col items-center  h-[2647px] mx-auto ">
      <div
        className="relative flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          background: "linear-gradient(0deg,transparent 0%, #5959A4 100%);",
        }}
      >
        {/* <div
          className="absolute bottom-0 w-full h-full bg-no-repeat bg-contain"
          style={{
            opacity: 0.1,
            backgroundImage: "url('/module-vector.png')",
          }}
        /> */}

        <div className="relative w-full max-w-[1728px] h-[852px]">
          <Image
            className="absolute bottom-[30%] lg:left-[151px] z-10"
            src="/modular/modular-title.svg"
            alt="modular title"
            width={539}
            height={248}
          />

          <Image
            className="absolute lg:-right-32 lg:-bottom-40 "
            src="/modular/modular-building.png"
            width={1376}
            height={1022}
            alt="modular building"
          />
        </div>
      </div>
      <div className="flex flex-col text-center items-center gap-8  w-[1088px] mt-[167px]">
        <p>
          La arquitectura del futuro por la rapidez de ejecución, eficiencia de
          montaje y sostenibilidad.
        </p>

        <p>
          En la búsqueda de soluciones constructivas innovadoras y sustentables
          se comienza a realizar obras con proyectos de arquitectura modular,
          dan infinitas posibilidades de adaptar un proyecto a la idea del
          usuario.
        </p>

        <button className="bg-[#A9B0C3] text-[#3E3E5E] rounded mt-[91px] px-[56px] py-4">
          CONTACTANOS
        </button>
      </div>
      <Image
        className="lg:mt-[145px]"
        src="/modular/modular-house.png"
        width={1682}
        height={514}
        alt="modular house"
      />
      <div>
        <BlurredCarousel />
      </div>
    </section>
  );
};

export default Modular;
