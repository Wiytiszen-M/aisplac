import Link from 'next/link';
import { ProductCard } from '../product-card/product-card';
import { Product } from '@/app/types';

interface RelatedProductsProps {
  relatedProducts: Product[];
}

export function RelatedProducts({ relatedProducts }: RelatedProductsProps) {
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="-mx-4 mt-12 px-4 py-12 text-white">
      <div className="container mx-auto">
        <h2 className="mb-8">PRODUCTOS RELACIONADOS</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {relatedProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="overflow-hidden rounded-lg bg-white">
                <ProductCard product={product} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
