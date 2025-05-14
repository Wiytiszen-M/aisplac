"use client";

import { ProductDetail } from "@/components/product-detail/product-detail";
import { ProductDetailSkeleton } from "@/components/product-detail/product-detail-skeleton";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Mock product data - in a real app, you would fetch this from an API
const mockProducts = [
  {
    id: "1223",
    name: "ANCLAJE DIRECTO",
    description:
      "Anclaje directo para aplicaciones de aislamiento térmico. Ideal para instalaciones profesionales.",
    price: 1299,
    image: "/steelframe/item.png",
    features: [
      "Resistencia óptima",
      "Fácil instalación",
      "Compatible con sistemas de aislamiento térmico",
      "Unidad de medida: BAL",
      "Aplicación: ACCESORIOS AISLANTES TERMICOS",
    ],
    referencia: "1223",
    sap: "77279",
  },
  {
    id: "1285",
    name: "ANCLAJE PIVOT",
    description:
      "Anclaje pivot para aplicaciones de construcción. Proporciona una sujeción segura y duradera.",
    price: 899,
    image: "/steelframe/item.png",
    features: [
      "Alta resistencia",
      "Diseño pivotante",
      "Instalación rápida",
      "Unidad de medida: UND",
      "Aplicación: ACCESORIOS",
    ],
    referencia: "1285",
    sap: "425986",
  },
  {
    id: "268",
    name: "CABALLETE F-47",
    description:
      "Caballete F-47 para perfilería Steel Frame. Componente esencial para estructuras metálicas.",
    price: 1499,
    image: "/steelframe/item.png",
    features: [
      "Compatible con perfiles F-47",
      "Acero galvanizado",
      "Alta durabilidad",
      "Unidad de medida: UND",
      "Aplicación: ACCESORIOS PERFILERIA STEEL FRAME",
    ],
    referencia: "268",
    sap: "69783",
  },
  {
    id: "1597",
    name: "CARROCERIA SINTETICO CARTUCHO 310 ML",
    description:
      "Sellador sintético para carrocería en formato cartucho. Ideal para sellado y reparaciones.",
    price: 799,
    image: "/steelframe/item.png",
    features: [
      "Contenido: 310 ml",
      "Secado rápido",
      "Resistente a la intemperie",
      "Unidad de medida: UND",
    ],
    referencia: "1597",
    sap: "01327",
  },
  {
    id: "171",
    name: "EMPALME F-47",
    description:
      "Empalme para perfiles F-47. Permite unir perfiles de manera segura y resistente.",
    price: 599,
    image: "/steelframe/item.png",
    features: [
      "Compatible con perfiles F-47",
      "Fácil instalación",
      "Acero galvanizado",
      "Unidad de medida: UND",
      "Aplicación: ACCESORIOS",
    ],
    referencia: "171",
    sap: "69777",
  },
  {
    id: "1541",
    name: "ESPUMA POLIURETANO 750 ML (SILOC)",
    description:
      "Espuma de poliuretano expansiva para sellado y aislamiento. Marca SILOC.",
    price: 1899,
    image: "/steelframe/item.png",
    features: [
      "Contenido: 750 ml",
      "Alta expansión",
      "Aislamiento térmico y acústico",
      "Unidad de medida: UND",
    ],
    referencia: "1541",
    sap: "01983",
  },
  {
    id: "1220",
    name: "PIVOT",
    description:
      "Pivot para sistemas de construcción en seco. Proporciona soporte y flexibilidad.",
    price: 699,
    image: "/steelframe/item.png",
    features: [
      "Diseño pivotante",
      "Alta resistencia",
      "Fácil instalación",
      "Unidad de medida: UND",
      "Aplicación: ACCESORIOS",
    ],
    referencia: "1220",
    sap: "69791",
  },
  {
    id: "1221",
    name: "VARILLA GALVANIZADA ROSCADA 500 MM",
    description:
      "Varilla roscada galvanizada de 500 mm. Ideal para sistemas de suspensión y fijación.",
    price: 899,
    image: "/steelframe/item.png",
    features: [
      "Longitud: 500 mm",
      "Acero galvanizado",
      "Roscada en toda su longitud",
      "Unidad de medida: UND",
      "Aplicación: ACCESORIOS",
    ],
    referencia: "1221",
    sap: "97758",
  },
  {
    id: "1222",
    name: "VARILLA GALVANIZADA ROSCADA 1000MM",
    description:
      "Varilla roscada galvanizada de 1000 mm. Ideal para sistemas de suspensión y fijación.",
    price: 1299,
    image: "/steelframe/item.png",
    features: [
      "Longitud: 1000 mm",
      "Acero galvanizado",
      "Roscada en toda su longitud",
      "Unidad de medida: UND",
      "Aplicación: ACCESORIOS",
    ],
    referencia: "1222",
    sap: "97759",
  },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<(typeof mockProducts)[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchProduct = async () => {
      setLoading(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Find product by ID from our mock data
      const foundProduct = mockProducts.find((p) => p.id === params.id);
      setProduct(foundProduct || null);
      setLoading(false);
    };

    fetchProduct();
  }, [params.id]);

  return (
    <div className="container mx-auto px-4 py-8 pt-40 pb-[200px] min-h-screen relative">
      {/* Back link - Always visible */}
      <Link
        href="/steelframe"
        className="inline-flex items-center gap-2 mb-20 hover:underline transition-all duration-300"
      >
        <p className="flex font-bold gap-4">
          <ChevronsLeft className="h-8 w-8" />
          Volver a Categorias
        </p>
      </Link>

      {loading ? (
        <ProductDetailSkeleton />
      ) : !product ? (
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <p>Lo sentimos, el producto que buscas no existe.</p>
        </div>
      ) : (
        <>
          <ProductDetail product={product} />

          {/* Related Products Section */}
          {/* <RelatedProducts products={} /> */}
        </>
      )}
    </div>
  );
}
