import NewsCarousel from "../carousel/carousel";

const News = () => {
  return (
    <section className="flex flex-col items-center w-full">
      <h2 className="text-center text-6xl font-bold justify-start uppercase py-20">
        Novedades
      </h2>
      <div>
        <NewsCarousel />
      </div>
    </section>
  );
};

export default News;
