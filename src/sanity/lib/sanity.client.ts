import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId } from "../env"

// Exportamos una única instancia del cliente, ya no necesitamos la función getClient.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  perspective: "published",
})
