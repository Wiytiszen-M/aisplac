"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import Link from "next/link";
import { formatDate, getExcerpt } from "@/lib/utils";
import { Post, urlFor } from "@/sanity/client";

export default function NewsSlider({ posts }: { posts: Post[] }) {
  const recentPosts = posts.slice(0, 5);

  return (
    <Swiper
      modules={[Navigation, EffectCoverflow]}
      loop
      slidesPerView="auto"
      spaceBetween={50}
      effect="cards"
      coverflowEffect={{
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation
      className="px-8 w-[75%] "
    >
      {recentPosts.map((post, index) => (
        <SwiperSlide key={index} className="max-w-xs md:max-w-sm">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl relative h-[519px]">
            <Image
              src={
                urlFor(post.image).width(622).height(519).url() || "logo.png"
              }
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="text-left absolute bottom-0 min-h-[200px] bg-white w-full p-4 text-[#1C1936]">
              <p className="text-xs font-bold mb-2">
                {formatDate(post.publishedAt)}
              </p>
              <h3 className="text-lg font-bold mb-2 uppercase">{post.title}</h3>
              {post.body && (
                <p className="text-sm text-gray-500">
                  {getExcerpt(post.body, 50)}
                </p>
              )}
              <Link
                href={`/novedades/${post.slug.current}`}
                className="absolute bottom-5 right-5  text-blue-400 text-sm font-medium text-primary hover:underline"
              >
                Leer más
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
