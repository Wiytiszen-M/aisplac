'use client';
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';
import { Categoria } from '@/types';

interface CategoryCardProps {
  categoria: Categoria;
}

export function CategoryCard({ categoria }: CategoryCardProps) {
  return (
    <Card className="h-full border-2 border-gray-700 bg-gray-800 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-blue-500 group-hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-600 bg-gradient-to-br from-gray-700 to-gray-800">
          {categoria.urlimg ? (
            <Image
              src={categoria.urlimg || '/logo.svg'}
              alt={categoria.descripcion}
              fill
              className="object-contain transition-transform duration-200 group-hover:scale-105"
            />
          ) : (
            <div
              className="flex h-full items-center justify-center bg-cover bg-center bg-repeat p-4 lg:w-full"
              style={{
                backgroundImage: "url('/steelframe-bg.webp')",
              }}
            >
              <h2 className="text-center text-base font-bold text-white md:text-3xl">
                {categoria.descripcion}
              </h2>
            </div>
          )}
        </div>
      </CardHeader>
    </Card>
  );
}
