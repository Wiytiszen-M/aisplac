import type { Producto } from "@/types";

const NIK_TOKEN = process.env.NEXT_PUBLIC_NIK_TOKEN;
export async function getPVCProducts(): Promise<Map<string, Producto>> {
  const productMap = new Map<string, Producto>();

  try {
    console.log("🔍 Cargando productos PVC desde endpoint específico...");
    const startTime = Date.now();

    const url = `https://aisplacsrl.gestionnik.com/aisplacsrl/NominaProductosJson/0/0/${NIK_TOKEN}/PVC`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "Aisplac-App/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const responseText = await response.text();

    if (!responseText || responseText.trim() === "") {
      console.warn("⚠️ Respuesta vacía del endpoint PVC");
      return productMap;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any;
    try {
      const cleanedJson = responseText
        .replace(/,(\s*[}\]])/g, "$1")
        .replace(/,,+/g, ",")
        .replace(/\s+/g, " ")
        .trim();
      data = JSON.parse(cleanedJson);
    } catch (parseError) {
      console.error("❌ Error al parsear JSON de productos PVC:", parseError);
      return productMap;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let productosData: any[] = [];

    if (Array.isArray(data)) {
      productosData = data;
    } else if (data && data.productos && Array.isArray(data.productos)) {
      productosData = data.productos;
    } else if (data && typeof data === "object") {
      const arrayKeys = Object.keys(data).filter((key) =>
        Array.isArray(data[key])
      );
      if (arrayKeys.length > 0) {
        productosData = data[arrayKeys[0]];
      }
    }

    const loadTime = Date.now() - startTime;
    console.log(
      `✅ ${productosData.length} productos PVC cargados en ${loadTime}ms`
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    productosData.forEach((prod: any) => {
      const imagenes: string[] = [];

      // Procesar imágenes
      if (prod.urlimg && prod.urlimg.trim() !== "") {
        imagenes.push(prod.urlimg.trim());
      }

      const producto: Producto = {
        codigo: String(prod.codigo),
        personal: prod.personal || "",
        descripcion: prod.descripcion || "",
        unmedida: prod.unmedida || "UN",
        precio: Number(prod.precio) || 0,
        codcategoria: String(prod.codcategoria),
        pesogramos: Number(prod.pesogramos) || 0,
        codsubcategoria: String(prod.codsubcategoria),
        uxb: Number(prod.uxb) || 0,
        stock: Number(prod.stock) || 0,
        activo: Boolean(prod.activo),
        timestamp: prod.timestamp || "",
        uxf: prod.uxf || "",
        urlimg: imagenes[0] || "",
        Fotos: [],
        ProdRelacionados: [],
      };

      productMap.set(producto.codigo, producto);
    });

    console.log(`📦 Productos PVC mapeados: ${productMap.size}`);
    return productMap;
  } catch (error) {
    console.error("❌ Error cargando productos PVC:", error);
    return productMap;
  }
}
