import { Skeleton } from '@/components/ui/skeleton';

export function ProductFilterSkeleton() {
  return (
    <div className="mb-6 rounded-lg border p-4">
      <div className="relative">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
}
