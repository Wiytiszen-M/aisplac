import { Producto } from '@/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Producto;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="h-full overflow-hidden rounded-lg border-gray-200 bg-white transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-64">
        <Image
          src={product.urlimg || '/placeholder.svg'}
          alt={product.descripcion || 'Producto'}
          fill
          className="object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-col p-4">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="text-lg font-bold text-black">
            {product.descripcion}
          </h3>
        </div>
      </div>
    </div>
  );
}
