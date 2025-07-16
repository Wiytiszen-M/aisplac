import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import { PortableTextBlock } from "sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-05-03',
};

export const publicClient = createClient({
  ...config,
  useCdn: false,
});

export const serverClient = createClient({
  ...config,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Helper function for generating image URLs with only the asset reference
const builder = imageUrlBuilder(publicClient);
// Modificar la función urlFor para manejar mejor los casos donde source es undefined o null
export function urlFor(source: { asset?: { _ref: string } } | undefined) {
  if (!source || !source.asset || !source.asset._ref) {
    return {
      width: () => ({
        height: () => ({
          url: () => null,
        }),
      }),
      url: () => null,
    }
  }
  return builder.image(source)
}

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  image?: {
    asset: {
      _ref: string
    }
  }
  body?: PortableTextBlock[]
}



export async function getPosts(): Promise<Post[]> {
  return publicClient.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...10] {
      _id,
      title,
      slug,
      publishedAt,
      image,
      body
    }`
  )
}


export async function getPost(slug: string): Promise<Post> {
  return publicClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      image,
      body
    }`,
    { slug },
  )
}
