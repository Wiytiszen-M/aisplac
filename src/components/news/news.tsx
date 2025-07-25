import { getAllArticles } from '@/sanity/lib/sanity.api';
import NewsSlider from './news-slider';

const News = async () => {
  const articles = await getAllArticles();
  console.log('Articles fetched for News component:', articles);

  return (
    <section className="min-h-screen px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-bold">Últimas Novedades</h2>
        </div>

        {articles.length > 0 ? (
          <NewsSlider articles={articles} />
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">
              No hay artículos disponibles en este momento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
