import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Categoria } from "@/types";

interface CategoryCardProps {
  categoria: Categoria;
}

export function CategoryCard({ categoria }: CategoryCardProps) {
  return (
    <Card className="h-full transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-1 border-2 group-hover:border-blue-500 bg-gray-800 border-gray-700">
      <CardHeader className="pb-4">
        <div className="aspect-square relative mb-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden border border-gray-600">
          <Image
            src={categoria.img || "/logo.svg"}
            alt={categoria.descripcion}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        <CardTitle className="text-center text-lg leading-tight group-hover:text-blue-400 transition-colors text-gray-100">
          {categoria.descripcion}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
