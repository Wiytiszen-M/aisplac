import NewsCarousel from "../carousel/carousel";

const News = () => {
  return (
    <section className="flex flex-col items-center w-full px-4 sm:px-8">
      {/* Título de la sección Novedades */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center py-12 sm:py-16 uppercase">
        Novedades
      </h2>

      {/* Carrusel de Noticias */}
      <div className="w-full flex justify-center items-center">
        <NewsCarousel />
      </div>
    </section>
  );
};

export default News;
