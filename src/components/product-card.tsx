import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, HelpCircle } from "lucide-react";
import type { ProductCardProps } from "@/types";

export function ProductCard({ producto, codigoCategoria }: ProductCardProps) {
  const imagenUrl = producto.urlimg || "";

  return (
    <Link
      href={`/producto/${producto.codigo}?categoria=${codigoCategoria}`}
      className="block"
    >
      <Card className="h-full hover:shadow-lg transition-all duration-200 group relative bg-gray-800 border-gray-700 flex flex-col">
        <CardHeader className="pb-4 flex-shrink-0">
          <div className="aspect-square relative mb-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden border border-gray-600 cursor-pointer">
            {imagenUrl && imagenUrl.trim() !== "" ? (
              <Image
                src={imagenUrl || "/placeholder.svg"}
                alt={producto.descripcion}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-200"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Package className="h-16 w-16 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
            )}
          </div>

          <CardTitle className="text-center text-sm md:text-lg leading-tight group-hover:text-blue-400 transition-colors text-gray-100 cursor-pointer min-h-[3.5rem] flex items-center justify-center">
            {producto.descripcion}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col flex-grow">
          <div className="flex-grow space-y-3">
            {/* Mostrar precio o consultar precio */}
            <div className="text-center">
              {producto.precio && producto.precio > 0 ? (
                <>
                  <span className="text-lg font-semibold text-green-400">
                    ${Number(producto.precio).toLocaleString("es-AR")}
                  </span>
                  {producto.unmedida && (
                    <p className="text-xs text-gray-500">
                      por {producto.unmedida}
                    </p>
                  )}
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center gap-1 text-orange-400">
                    <HelpCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      Consultar precio
                    </span>
                  </div>
                  {producto.unmedida && (
                    <p className="text-xs text-gray-500">
                      por {producto.unmedida}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
