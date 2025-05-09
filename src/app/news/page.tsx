"use client";
import { TripleArrow } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Noticia = {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  imagen: string;
};

const Novedades = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    fetch("/fakedata/fakeNovedades.json")
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((err) => console.error("Error cargando novedades:", err));
  }, []);

  if (!noticias.length) return null;

  const noticiaDestacada = noticias[0];
  const restantes = noticias.slice(1);

  return (
    <section className="py-[150px]">
      <h2 className="text-center font-bold mb-12">NOVEDADES</h2>
      {/* destacada */}
      <div className=" flex md:flex-row flex-col w-full md:h-[800px] bg-[#D9D9D9]">
        <div className="md:w-1/2 flex flex-col justify-center items-center p-5">
          <img className="w-[800px] h-[600px] bg-slate-400" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center p-5">
          <div className="text-[#121037] flex flex-col gap-4 w-full max-w-[600px]">
            <p className="text-sm font-bold">{noticiaDestacada.fecha}</p>
            <Link href={`/novedades/${noticiaDestacada.id}`}>
              <p className=" text font-bold flex gap-4 ">
                {noticiaDestacada.titulo} <TripleArrow className="w-5" />{" "}
              </p>
            </Link>
            <p className="">{noticiaDestacada.descripcion}</p>
          </div>
        </div>
      </div>
      {/* restantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 px-4 md:px-12">
        {restantes.map((slide) => (
          <>
            <div
              className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col"
              style={{ height: "853px", maxWidth: "554px", width: "100%" }}
            >
              <div className="relative w-full" style={{ height: "554px" }}>
                <Image
                  src={slide.imagen}
                  alt={slide.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-[#121037] flex flex-col justify-center flex-1">
                <p className="mb-2">{slide.fecha}</p>
                <Link href={`/novedades/${slide.id}`} className="flex gap-4">
                  <p className=" font-bold mb-2">{slide.titulo}</p>{" "}
                  <TripleArrow className="w-5" />
                </Link>
                <p>{slide.descripcion}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Novedades;
