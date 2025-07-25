import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { ProductosServer } from '@/components/productos-server';
import { getCategoria } from '@/lib/api';
import { BackButton } from '@/components/back-button';

export default async function CategoriaPage({
  params,
}: {
  params: { categoria: string };
}) {
  const { data: categoria, error } = await getCategoria(params.categoria);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-36 pt-32 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/steelframe">
          <BackButton text=" Volver a Categorías" />
        </Link>

        {error ? (
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-red-800 bg-red-900/20 p-3">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <span className="text-red-300">Error: {error}</span>
          </div>
        ) : (
          <>
            <h1 className="mb-4 text-3xl font-bold text-gray-100">
              {categoria
                ? categoria.descripcion
                : `Categoría ${params.categoria}`}
            </h1>
            <p className="text-lg text-gray-400">
              Productos disponibles en esta categoría
            </p>
          </>
        )}
      </div>

      <ProductosServer codigoCategoria={params.categoria} />
    </div>
  );
}
