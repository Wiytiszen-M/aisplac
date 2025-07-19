"use client";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { Categoria } from "@/types";

interface CategoryCardProps {
  categoria: Categoria;
}

export function CategoryCard({ categoria }: CategoryCardProps) {
  return (
    <Card className="h-full transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-1 border-2 group-hover:border-blue-500 bg-gray-800 border-gray-700 ">
      <CardHeader className="p-0">
        <div className="aspect-square relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden border border-gray-600">
          {categoria.urlimg ? (
            <Image
              src={categoria.urlimg || "/logo.svg"}
              alt={categoria.descripcion}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div
              className="flex items-center justify-center h-full p-4 lg:w-full bg-cover bg-center bg-repeat"
              style={{
                backgroundImage: "url('/steelframe-bg.webp')",
              }}
            >
              <h2 className="text-white font-bold text-base md:text-3xl text-center">
                {categoria.descripcion}
              </h2>
            </div>
          )}
        </div>
      </CardHeader>
    </Card>
  );
}
