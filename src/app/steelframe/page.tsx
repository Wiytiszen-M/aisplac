import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header/header";

const categories = [
  { id: 1, name: "ACCESORIOS PARA CIELORRASO PVC" },
  { id: 2, name: "ACCESORIOS STEEL FRAME" },
  { id: 3, name: "AISLANTES TERMICOS" },
  { id: 4, name: "CIELORRASO DE PVC" },
  { id: 5, name: "CINTAS Y MALLAS" },
  { id: 6, name: "FIBROCEMENTO" },
  { id: 7, name: "MASILLAS" },
  { id: 8, name: "MOLDURAS DE TEROGOL" },
  { id: 9, name: "PERFILERIA DRYWALL PLUS" },
  { id: 10, name: "OSB" },
  { id: 11, name: "PERFILERIA STEEL FRAME" },
  { id: 12, name: "CINTAS Y MALLAS" },
  { id: 13, name: "PERFILERIA DRYWALL PLUS" },
  { id: 14, name: "MASILLAS" },
  { id: 15, name: "FIBROCEMENTO" },
  { id: 16, name: "TORNILLOS" },
  { id: 17, name: "PERFILERIA PARA CIELORRASO DESMONTABLE" },
  { id: 18, name: "PLACA PARA CIELORRASO DESMONTABLE" },
  { id: 19, name: "PLACAS DE YESO" },
  { id: 20, name: "PLACAS ANTIHUMEDAD" },
  { id: 21, name: "REVESTIMIENTO MARMOL" },
  { id: 22, name: "FIBROCEMENTO" },
  { id: 23, name: "YESO" },
  { id: 24, name: "SIKA" },
];

const SteelframePage = () => {
  return (
    <section className="py-16 overflow-hidden">
      <Header />
      <div
        className="relative flex justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/steelframe-bg.webp')",
        }}
      >
        <div
          className="absolute bottom-0 w-full h-full z-10"
          style={{
            background: "linear-gradient(transparent 60%, #1c1936 78%)",
          }}
        />
        <Image
          src="/steelframe.webp"
          width={1080}
          height={900}
          alt="steelframe"
          className="mx-auto absolute top-0"
        />
        <div className="absolute top-28 z-20 flex w-full mx-20 px-44 justify-between">
          <div className="w-[514px] flex flex-col gap-12 justify-start text-left">
            <h2 className="text-6xl font-bold ">
              MATERIALES DE CONSTRUCCIÓN EN SECO
            </h2>
          </div>
        </div>
        <div className="absolute flex overflow-hidden gap-x-8 z-30 bottom-20">
          {Array.from({ length: 15 }).map((_, index) => (
            <>
              {" "}
              <Image
                src="/alfavinil-logo.png"
                key={index}
                height={80}
                width={140}
                alt="logo"
              />
              <Image
                src="/barbieri-logo.png"
                key={index}
                height={80}
                width={140}
                alt="logo"
              />
              <Image
                src="/grupo-estisol-logo.png"
                key={index}
                height={80}
                width={140}
                alt="logo"
              />
              <Image
                src="/isover-logo.png"
                key={index}
                height={80}
                width={140}
                alt="logo"
              />
            </>
          ))}
        </div>
      </div>
      <div className="w-full min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 auto-rows-fr gap-4">
            {categories.map((category) => (
              <Link href={`/steelframe/${category.id}`} key={category.id}>
                <div
                  key={category.id}
                  className="hover:bg-[#4a4949] rounded-xl items-center bg-[#6D6D6D] transition-colors cursor-pointer h-[394px] flex flex-col justify-center"
                >
                  <h3 className="text-3xl font-bold w-[400px] p-6 text-center">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteelframePage;
