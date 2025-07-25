import { client } from "./sanity.client"
import { articlesQuery, articleBySlugQuery } from "./queries"
import type { Article, ArticlePreview } from "@/types"

/**
 * Obtiene un único artículo publicado por su slug.
 * @param slug - El slug del artículo a obtener.
 * @returns El artículo encontrado o null si no existe.
 */
export async function getArticle(slug: string): Promise<Article | null> {
  return await client.fetch<Article | null>(articleBySlugQuery, { slug })
}

/**
 * Obtiene todos los artículos publicados.
 * @returns Un array con todos los artículos.
 */
export async function getAllArticles(): Promise<ArticlePreview[]> {
  return await client.fetch<ArticlePreview[]>(articlesQuery)
}
