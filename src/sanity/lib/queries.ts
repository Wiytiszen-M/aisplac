import { groq } from 'next-sanity';

// Query para obtener todos los artículos (para la página de listado)
export const articlesQuery = groq`*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  subtitle,
  "slug": slug.current,
  mainImage,
  publishedAt,
}`;

// Query para obtener un artículo específico por su slug
export const articleBySlugQuery = groq`*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  subtitle,
  author,
  mainImage,
  "slug": slug.current,
  content,
  gallery,
  publishedAt,
  featured,
}`;

// Query para obtener solo los slugs de todos los artículos (para generateStaticParams)
export const articleSlugsQuery = groq`*[_type == "article" && defined(slug.current)][].slug.current`;
