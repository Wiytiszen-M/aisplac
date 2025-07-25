import Link from 'next/link';
import { ProductCard } from '../product-card/product-card';

interface Product {
  id: string;
  title: string;
  description: string;
  sku: string;
  imageUrl: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (productId: string) => void;
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}
