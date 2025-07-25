import { Skeleton } from '@/components/ui/skeleton';

export default function ProductDetailSkeleton() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Image Gallery Skeleton */}
          <div className="space-y-4">
            {/* Main Image Skeleton */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/10">
              <Skeleton className="h-full w-full bg-white/20" />
            </div>

            {/* Thumbnail Images Skeleton */}
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg bg-white/10"
                >
                  <Skeleton className="h-full w-full bg-white/20" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information Skeleton */}
          <div className="space-y-6 text-white">
            {/* Header Skeleton */}
            <div className="space-y-4">
              <Skeleton className="h-12 w-64 bg-white/20" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-24 bg-blue-200/20" />
                <Skeleton className="h-4 w-32 bg-blue-200/20" />
              </div>

              {/* Share Button Skeleton */}
              <Skeleton className="h-6 w-20 bg-blue-200/20" />
            </div>

            {/* Size Selection Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-12 bg-white/20" />
              <div className="flex gap-3">
                <Skeleton className="h-10 w-16 rounded-lg bg-blue-300/20" />
                <Skeleton className="h-10 w-16 rounded-lg bg-blue-300/20" />
              </div>
            </div>

            {/* Quantity and Add to Cart Skeleton */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* Quantity Selector Skeleton */}
                <div className="flex items-center overflow-hidden rounded-lg border-2 border-[#A7A7A7]">
                  <Skeleton className="h-12 w-12 bg-blue-400/20" />
                  <Skeleton className="h-12 w-16 bg-blue-300/20" />
                  <Skeleton className="h-12 w-12 bg-blue-400/20" />
                </div>

                {/* Add to Cart Button Skeleton */}
                <Skeleton className="h-12 flex-1 rounded-lg bg-blue-600/30" />
              </div>
            </div>

            {/* Characteristics Skeleton */}
            <div className="space-y-4 border-t border-blue-300/20 pt-6">
              <Skeleton className="h-6 w-48 bg-white/20" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-blue-100/20" />
                <Skeleton className="h-4 w-3/4 bg-blue-100/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
