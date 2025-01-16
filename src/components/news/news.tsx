import NewsCarousel from "../carousel/carousel";

const News = () => {
  return (
    <section className="w-full">
      <h2 className="text-center text-6xl font-bold justify-start uppercase py-20">
        Novedades
      </h2>
      <div className="flex">
        <NewsCarousel />
      </div>
    </section>
  );
};

export default News;
