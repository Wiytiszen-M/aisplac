import { Skeleton } from '@/components/ui/skeleton';

export function ProductSkeleton() {
  return (
    <div className="h-full overflow-hidden rounded-lg border">
      {/* Image skeleton */}
      <Skeleton className="h-64 w-full" />

      {/* Content skeleton */}
      <div className="p-4">
        {/* Title skeleton */}
        <Skeleton className="mb-2 h-6 w-3/4" />

        {/* Metadata skeleton */}
        <Skeleton className="mb-1 h-4 w-1/3" />
        <Skeleton className="mb-3 h-4 w-1/4" />

        {/* Price skeleton */}
        <Skeleton className="h-5 w-1/3" />
      </div>
    </div>
  );
}
