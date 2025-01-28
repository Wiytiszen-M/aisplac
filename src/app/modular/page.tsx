import Image from "next/image";
import { Buy, ShoppingCart, User } from "../assets/icons";
import Link from "next/link";

const Modular = () => {
  return (
    <section
      className="flex flex-col items-center h-[2647px]"
      style={{
        background: "linear-gradient(0deg,transparent 20%, #5959A4 40%);",
      }}
    >
      <div className="absolute top-16 flex w-full justify-between z-10">
        <div className="flex items-center ml-[160px]">
          <button className="p-2">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <Link href="/">
          <Image src="/logo.svg" width={112} height={64} alt="logo" />
        </Link>
        <div className="flex gap-3 mr-[160px]">
          <ShoppingCart className="w-12 h-12" />
          <Buy className="w-12 h-12" />
          <User className="w-12 h-12" />
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat">
        <div
          className="absolute bottom-0 w-full h-full bg-no-repeat bg-contain"
          style={{
            opacity: 0.1,
            backgroundImage: "url('/module-vector.png')",
          }}
        />

        <div className="flex relative ">
          <Image
            className="absolute bottom-[45%] h-[120px] w-[460px]"
            src="/module-logo.png"
            alt="module architecture"
            height={120}
            width={460}
          />
          <Image
            className="ml-16"
            src="/module-arch.webp"
            width={1405}
            height={699}
            alt="module architecture"
          />
        </div>
      </div>
      <div className="flex flex-col text-center items-center gap-8 text-3xl w-[1088px] mt-[167px]">
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
    </section>
  );
};

export default Modular;
