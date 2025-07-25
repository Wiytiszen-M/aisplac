const BASE = process.env.API_BASE_URL;
const TOKEN = process.env.API_KEY;

if (!BASE || !TOKEN) {
  throw new Error('Faltan variables de entorno para construir la URL');
}

export const CATEGORIAS_URL =
  'https://aisplacsrl.gestionnik.com/aisplacsrl/NominaCategoriasJson/12345EIDOS2K21IO23LASO';
// export const CATEGORIAS_URL = `${BASE}/NominaCategoriasJson/${TOKEN}`;
export const SUBCATEGORIAS_URL = (categoria: string) =>
  `${BASE}/NominaSubCategoriasJson/${categoria}/${TOKEN}`;
export const PRODUCTOS_URL = (categoria: string, subcategoria: string) =>
  `${BASE}/NominaProductosJson/${categoria}/${subcategoria}/${TOKEN}`;
