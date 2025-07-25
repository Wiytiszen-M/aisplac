import { Package } from 'lucide-react';

import Link from 'next/link';
import { BackButton } from '@/components/back-button';

export default function ProductoLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-36 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href={'/'} className="mb-8">
          <BackButton text="Volver a Productos" />
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Skeleton imagen */}
          <div className="flex aspect-square animate-pulse items-center justify-center rounded-lg bg-gray-700">
            <Package className="h-32 w-32 text-gray-600" />
          </div>

          {/* Skeleton información */}
          <div className="animate-pulse space-y-6">
            <div>
              <div className="mb-2 h-8 rounded bg-gray-700"></div>
              <div className="flex gap-2">
                <div className="h-6 w-24 rounded bg-gray-700"></div>
                <div className="h-6 w-20 rounded bg-gray-700"></div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-800 p-4">
              <div className="mb-2 h-6 rounded bg-gray-700"></div>
              <div className="h-8 w-32 rounded bg-gray-700"></div>
            </div>

            <div className="h-12 rounded bg-gray-700"></div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-800 p-4">
                <div className="mb-2 h-4 rounded bg-gray-700"></div>
                <div className="h-6 w-16 rounded bg-gray-700"></div>
              </div>
              <div className="rounded-lg bg-gray-800 p-4">
                <div className="mb-2 h-4 rounded bg-gray-700"></div>
                <div className="h-6 w-20 rounded bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
