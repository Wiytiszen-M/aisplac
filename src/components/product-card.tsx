import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, HelpCircle } from "lucide-react";
import type { Producto, ProductoRelacionado } from "@/types";

export interface ProductCardProps {
  producto: Producto | ProductoRelacionado;
  codigoCategoria?: string;
}

export function ProductCard({ producto, codigoCategoria }: ProductCardProps) {
  const imagenUrl = producto?.Fotos?.[0]?.urlimg || producto.urlimg;

  return (
    <Link
      href={`/producto/${producto.codigo}?categoria=${codigoCategoria}`}
      className="block"
    >
      <Card className="group relative flex h-full flex-col border-gray-700 bg-gray-800 transition-all duration-200 hover:shadow-lg">
        <CardHeader className="flex-shrink-0 pb-4">
          <div className="relative mb-4 aspect-square cursor-pointer overflow-hidden rounded-lg border border-gray-600 bg-gradient-to-br from-gray-700 to-gray-800">
            {imagenUrl && imagenUrl.trim() !== "" ? (
              <Image
                src={imagenUrl || "/placeholder.svg"}
                alt={producto.descripcion}
                fill
                className="object-contain transition-transform duration-200 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Package className="h-16 w-16 text-gray-500 transition-colors group-hover:text-blue-400" />
              </div>
            )}
          </div>

          <CardTitle className="flex min-h-[3.5rem] cursor-pointer items-center justify-center text-center text-sm leading-tight text-gray-100 transition-colors group-hover:text-blue-400 md:text-lg">
            {producto.descripcion}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-grow flex-col pt-0">
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
