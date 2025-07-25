import type { Categoria, Producto, ApiResponse } from '@/types';

// Función para limpiar JSON malformado
function cleanJsonString(jsonString: string): string {
  let cleaned = jsonString.replace(/,(\s*[}\]])/g, '$1');
  cleaned = cleaned.replace(/,,+/g, ',');
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  return cleaned;
}

// Función base para hacer fetch con retry y timeout
async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retries = 2
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Aisplac-App/1.0',
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    clearTimeout(timeoutId);

    if (
      retries > 0 &&
      error instanceof Error &&
      !error.name.includes('AbortError')
    ) {
      console.warn(
        `🔄 Reintentando fetch (${retries} intentos restantes):`,
        error.message
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return fetchWithRetry(url, options, retries - 1);
    }

    throw error;
  }
}

// Obtener categorías PVC
export async function getCategoriasPVC(): Promise<ApiResponse<Categoria[]>> {
  try {
    console.log('📦 Obteniendo categorías...');
    const startTime = Date.now();

    const response = await fetchWithRetry(
      'https://aisplacsrl.gestionnik.com/aisplacsrl/NominaCategoriasJson/PVC/12345EIDOS2K21IO23LASO'
    );

    const responseText = await response.text();
    const cleanedJson = cleanJsonString(responseText);
    const data = JSON.parse(cleanedJson);

    const loadTime = Date.now() - startTime;
    console.log(`✅ Categorías cargadas en ${loadTime}ms`);

    if (
      data &&
      data.categorias &&
      Array.isArray(data.categorias) &&
      data.categorias.length > 0
    ) {
      const categoriasNormalizadas = data.categorias.map((cat: Categoria) => ({
        codigo: String(cat.codigo),
        descripcion: cat.descripcion,
        urlimg: cat.urlimg || '',
      }));

      return {
        data: categoriasNormalizadas,
        error: null,
      };
    } else {
      return { data: [], error: 'No se encontraron categorías' };
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Error desconocido';
    console.error('❌ Error al obtener categorías:', errorMessage);
    return { data: null, error: errorMessage };
  }
}

// Obtener categorías
export async function getCategorias(): Promise<ApiResponse<Categoria[]>> {
  try {
    console.log('📦 Obteniendo categorías...');
    const startTime = Date.now();

    const response = await fetchWithRetry(
      'https://aisplacsrl.gestionnik.com/aisplacsrl/NominaCategoriasJson/MPC/12345EIDOS2K21IO23LASO'
    );

    const responseText = await response.text();
    const cleanedJson = cleanJsonString(responseText);
    const data = JSON.parse(cleanedJson);

    const loadTime = Date.now() - startTime;
    console.log(`✅ Categorías cargadas en ${loadTime}ms`);

    if (
      data &&
      data.categorias &&
      Array.isArray(data.categorias) &&
      data.categorias.length > 0
    ) {
      const categoriasNormalizadas = data.categorias.map((cat: Categoria) => ({
        codigo: String(cat.codigo),
        descripcion: cat.descripcion,
        urlimg: cat.urlimg || '',
      }));

      return {
        data: categoriasNormalizadas,
        error: null,
      };
    } else {
      return { data: [], error: 'No se encontraron categorías' };
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Error desconocido';
    console.error('❌ Error al obtener categorías:', errorMessage);
    return { data: null, error: errorMessage };
  }
}

// Obtener información de una categoría específica
export async function getCategoria(
  codigoCategoria: string,
  isPvc = false
): Promise<ApiResponse<Categoria>> {
  try {
    const { data: categorias, error } = isPvc
      ? await getCategoriasPVC()
      : await getCategorias();
    if (error || !categorias) {
      return { data: null, error: error || 'Error al obtener categorías' };
    }

    const foundCategoria = categorias.find(
      (cat) => cat.codigo === codigoCategoria
    );

    if (foundCategoria) {
      return { data: foundCategoria, error: null };
    } else {
      return {
        data: null,
        error: `Categoría con código ${codigoCategoria} no encontrada`,
      };
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Error desconocido';
    return { data: null, error: errorMessage };
  }
}

// Obtener productos de una categoría
export async function getProductos(
  codigoCategoria: string
): Promise<ApiResponse<Producto[]>> {
  try {
    console.log(`📦 Obteniendo productos para categoría ${codigoCategoria}...`);
    const startTime = Date.now();

    const url = `https://aisplacsrl.gestionnik.com/aisplacsrl/NominaProductosJson/${codigoCategoria}/0/12345EIDOS2K21IO23LASO`;

    const response = await fetchWithRetry(url);

    const responseText = await response.text();
    const loadTime = Date.now() - startTime;

    if (!responseText || responseText.trim() === '') {
      return { data: [], error: 'La API devolvió una respuesta vacía' };
    }

    const cleanedJson = cleanJsonString(responseText);
    let data;

    try {
      data = JSON.parse(cleanedJson);
    } catch (error) {
      return { data: null, error: `Respuesta no es JSON válido: ${error}` };
    }

    // Intentar diferentes estructuras de respuesta
    let productosData: Producto[] = [];

    if (Array.isArray(data)) {
      productosData = data;
    } else if (data && data.productos && Array.isArray(data.productos)) {
      productosData = data.productos;
    } else if (data && typeof data === 'object') {
      const arrayKeys = Object.keys(data).filter((key) =>
        Array.isArray(data[key])
      );
      if (arrayKeys.length > 0) {
        productosData = data[arrayKeys[0]];
      }
    }

    console.log(
      `✅ ${productosData.length} productos cargados en ${loadTime}ms`
    );

    if (productosData.length > 0) {
      const productosNormalizados = productosData.map((prod: Producto) => {
        return {
          codigo: String(prod.codigo),
          personal: prod.personal || '',
          descripcion: prod.descripcion || '',
          unmedida: prod.unmedida || 'UN',
          precio: Number(prod.precio) || 0,
          codcategoria: String(prod.codcategoria),
          pesogramos: Number(prod.pesogramos) || 0,
          codsubcategoria: String(prod.codsubcategoria),
          uxb: Number(prod.uxb) || 0,
          stock: Number(prod.stock) || 0,
          activo: Boolean(prod.activo),
          timestamp: prod.timestamp || '',
          uxf: prod.uxf || '',
          urlimg: prod.urlimg || '',
        };
      });

      return {
        data: productosNormalizados,
        error: null,
      };
    } else {
      return {
        data: [],
        error: 'No se encontraron productos en esta categoría',
      };
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Error desconocido';
    console.error(
      `❌ Error al obtener productos de ${codigoCategoria}:`,
      errorMessage
    );
    return { data: null, error: errorMessage };
  }
}

// Obtener un producto específico
export async function getProducto(
  codigoCategoria: string,
  codigoProducto: string
): Promise<ApiResponse<Producto>> {
  try {
    const { data: productos, error } = await getProductos(codigoCategoria);

    if (error || !productos) {
      return { data: null, error: error || 'Error al obtener productos' };
    }

    const producto = productos.find((p) => p.codigo === codigoProducto);

    if (producto) {
      return { data: producto, error: null };
    } else {
      return {
        data: null,
        error: `Producto con código ${codigoProducto} no encontrado`,
      };
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'Error desconocido';
    return { data: null, error: errorMessage };
  }
}
