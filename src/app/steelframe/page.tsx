import { LogoBanner } from "@/components/logo-banner";
import { PartnerLogo } from "@/components/partner-logo";
import { CATEGORIAS_URL } from "@/constants";
import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";

const SteelframePage = async () => {
  const res = await fetch(CATEGORIAS_URL, { cache: "no-store" });
  console.log(res);

  const data = (await res.json()) as { categorias: Category[] };
  const categories: Category[] = data.categorias;

  return (
    <section className="pb-[150px] overflow-hidden">
      <div
        className="relative flex flex-col-reverse md:flex-row md:justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat pt-[100px]"
        style={{
          backgroundImage: "url('/steelframe-bg.webp')",
        }}
      >
        <div
          className="absolute bottom-0 w-full h-full z-10"
          style={{
            background: "linear-gradient(transparent 50%, #1c1936 88%)",
          }}
        />
        <Image
          src="/steelframe.webp"
          width={1080}
          height={900}
          alt="steelframe"
          className="mx-auto md:absolute top-0"
          priority
        />
        <div className="md:absolute top-28 z-20 flex w-full mx-20 px-44">
          <div className="md:w-[514px] flex text-left">
            <h2 className="font-bold ">MATERIALES DE CONSTRUCCIÓN EN SECO</h2>
          </div>
        </div>
        <div className="absolute flex overflow-hidden gap-x-8 z-30 bottom-0">
          <LogoBanner>
            <PartnerLogo src="/alfavinil-logo.png" alt="alfavinil-logo" />
            <PartnerLogo src="/barbieri-logo.png" alt="barbieri-logo" />
            <PartnerLogo
              src="/grupo-estisol-logo.png"
              alt="grupo-estisol-logo"
            />
            <PartnerLogo src="/isover-logo.png" alt="isover-logo" />
          </LogoBanner>
        </div>
      </div>
      <div className="w-full min-h-screen p-4 pt-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
            {categories.map((category) => (
              <Link
                href={`/steelframe/${category.codigo}`}
                key={category.codigo}
              >
                <div
                  key={category.codigo}
                  className="hover:bg-[#4a4949] rounded-xl items-center bg-[#6D6D6D] transition-colors cursor-pointer h-[394px] flex flex-col justify-center"
                >
                  <h3 className=" font-bold w-[400px] p-6 text-center">
                    {category.descripcion}
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
