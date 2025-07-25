// Este archivo centraliza las variables de entorno de Sanity
// para que sean consistentes en toda la aplicación.

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-07-22"

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mehr72rv"

// Usa CDN en producción para un rendimiento más rápido.
// En desarrollo o previsualización, obtén siempre los datos más recientes.
export const useCdn = process.env.NODE_ENV === "production"
