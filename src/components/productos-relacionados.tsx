import { ShoppingBag } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { ProductoRelacionado } from "@/types";

interface Props {
  productos: ProductoRelacionado[];
  codigoCategoria: string;
  codigoProductoActual: string;
}
export async function ProductosRelacionados({
  productos,
  codigoCategoria,
}: Props) {
  if (!productos || productos.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-2">
          Productos Relacionados
        </h2>
        <p className="text-gray-400">
          Otros productos de la misma categoría que podrían interesarte
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <ProductCard
            key={producto.codigo}
            producto={producto}
            codigoCategoria={codigoCategoria}
          />
        ))}
      </div>

      {productos.length && (
        <div className="text-center mt-8">
          <a
            href={`/steelframe/${codigoCategoria}`}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            Ver todos los productos de esta categoría productos)
          </a>
        </div>
      )}
    </div>
  );
}
