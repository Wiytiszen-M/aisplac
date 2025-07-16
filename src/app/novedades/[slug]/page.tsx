import { notFound } from "next/navigation";
import { getPost, urlFor } from "@/sanity/client";
import { formatDate } from "@/lib/utils";

import Image from "next/image";
import { ShareButtons } from "@/components/share-buttons";
import { BackButton } from "@/components/back-button";
import { PortableTextRenderer } from "@/components/portable-text";

export const revalidate = 60; // Revalidate this page every 60 seconds

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl py-36">
      <BackButton url="/novedades" text="Volver a novedades" />

      <article className="mt-5">
        <h1 className=" text-4xl font-bold">{post.title}</h1>
        <span className="mb-8 text-muted-foreground">
          {formatDate(post.publishedAt)}
        </span>

        {post.image ? (
          <div className="relative mb-8 w-full rounded-lg">
            <div className="aspect-video relative">
              <Image
                src={urlFor(post.image).width(1200).height(630).url() || ""}
                alt={post.title}
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        ) : (
          <div className="relative mb-8 w-full rounded-lg bg-muted">
            <div className="aspect-video flex items-center justify-center">
              <span className="text-muted-foreground">No image available</span>
            </div>
          </div>
        )}

        {post.body && <PortableTextRenderer value={post.body} />}

        <div className="mt-12 border-t pt-8">
          <ShareButtons slug={post.slug.current} title={post.title} />
        </div>
      </article>
    </div>
  );
}
