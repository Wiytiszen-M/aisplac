import { ShoppingBag } from "lucide-react";
import { getProductos } from "@/lib/api";
import { ProductosClient } from "@/components/productos-client";

interface ProductosServerProps {
  codigoCategoria: string;
  type?: string;
}

export async function ProductosServer({
  codigoCategoria,
  type = "MPC",
}: ProductosServerProps) {
  const { data: productos, error } = await getProductos(codigoCategoria, type);

  if (error) {
    throw new Error(error);
  }

  if (!productos || productos.length === 0) {
    return (
      <div className="py-12 text-center">
        <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-gray-500" />
        <h3 className="mb-2 text-lg font-medium text-gray-100">
          No hay productos disponibles
        </h3>
        <p className="text-gray-400">
          Esta categoría no tiene productos en este momento.
        </p>
      </div>
    );
  }

  return (
    <ProductosClient productos={productos} codigoCategoria={codigoCategoria} />
  );
}
