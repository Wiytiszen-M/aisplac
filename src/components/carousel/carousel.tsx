import Image from "next/image";
import React from "react";

type Props = {};

const Carousel = (props: Props) => {
  return (
    <div className="flex gap-5 mx-5">
      <article className="bg-[#EAEEEB] rounded h-[795px] w-[445px] ">
        <Image
          src="/news-1.png"
          alt="news"
          width={445}
          height={519}
          className="h-[519px]"
        />
        <div className="flex gap-4 flex-col text-secondary py-7 px-4 text-left">
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
    </div>
  );
};

export default Carousel;
