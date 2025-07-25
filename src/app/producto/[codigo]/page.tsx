import { Package } from 'lucide-react';

import { getProducto } from '@/lib/api';
// import { AgregarCotizacionButton } from "@/components/agregar-cotizacion-button";
import { BackButton } from '@/components/back-button';
import ProductDetail from '@/components/product-detail';
import { Suspense } from 'react';
import ProductDetailSkeleton from '@/components/product-detail-skeleton';

export default async function ProductoPage({
  params,
  searchParams,
}: {
  params: { codigo: string };
  searchParams: { categoria?: string };
}) {
  const categoria = searchParams.categoria || '';
  const { data: producto, error } = await getProducto(categoria, params.codigo);

  if (error) {
    throw new Error(error); // Esto activará error.tsx
  }

  if (!producto) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-36 sm:px-6 lg:px-8">
        <div className="py-12 text-center">
          <Package className="mx-auto mb-4 h-16 w-16 text-gray-500" />
          <h3 className="mb-2 text-lg font-medium text-gray-100">
            Producto no encontrado
          </h3>
          <p className="text-gray-400">El producto solicitado no existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-36 sm:px-6 lg:px-8">
      <div className="mb-8">
        <BackButton text="Volver a productos" />
        <Suspense fallback={<ProductDetailSkeleton />}>
          <ProductDetail producto={producto} />
        </Suspense>
      </div>
    </div>
  );
}
