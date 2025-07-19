import { getPosts } from "@/sanity/client";
import NewsSlider from "./news-slider";
import { Suspense } from "react";

const News = async () => {
  const posts = await getPosts();
  return (
    <div className="min-h-screen mt-12 md:mt-[116px] w-full py-8">
      <h2 className="text-center font-bold mb-8 md:mb-20">NOVEDADES</h2>
      <Suspense fallback={<p>Cargando novedades...</p>}>
        <NewsSlider posts={posts} />
      </Suspense>
    </div>
  );
};

export default News;
