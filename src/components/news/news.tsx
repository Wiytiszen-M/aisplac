import { getAllArticles } from "@/sanity/lib/sanity.api";
import NewsSlider from "./news-slider";

const News = async () => {
  const articles = await getAllArticles();
  console.log("Articles fetched for News component:", articles);

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-bold mb-4">Últimas Novedades</h2>
        </div>

        {articles.length > 0 ? (
          <NewsSlider articles={articles} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay artículos disponibles en este momento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
