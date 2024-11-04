import Image from "next/image";
import React from "react";
import Carousel from "../carousel/carousel";

const News = () => {
  return (
    <section className="w-full">
      <h2 className="text-center text-6xl font-bold justify-start uppercase py-20">
        Novedades
      </h2>
      <div className="flex">
        <article className="bg-[#EAEEEB] rounded w-[838px] h-[917px] overflow-hidden ">
          <Image src="/news-1.png" alt="news" width={839} height={630} />
          <div className="flex gap-4 flex-col text-secondary py-7 ml-[139px] text-left">
            <div>
              <span className="text-base ">12 DE SEPTIEMBRE 2024</span>
              <h3 className="font-bold text-3xl">PRIMERA NOTICIA</h3>
            </div>
            <p className=" w-[215px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry...
            </p>
          </div>
        </article>
        <Carousel />
      </div>
    </section>
  );
};

export default News;
