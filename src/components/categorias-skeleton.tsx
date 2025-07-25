import { Package } from 'lucide-react';

export function CategoriasSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-lg border border-gray-700 bg-gray-800 p-6"
        >
          <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-gray-700">
            <Package className="h-16 w-16 text-gray-600" />
          </div>
          <div className="mb-2 h-6 rounded bg-gray-700"></div>
          <div className="mx-auto h-4 w-16 rounded bg-gray-700"></div>
        </div>
      ))}
    </div>
  );
}
