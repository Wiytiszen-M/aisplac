import { Skeleton } from "@/components/ui/skeleton";

export function ProductFilterSkeleton() {
  return (
    <div className="p-4 rounded-lg border mb-6">
      <div className="relative">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
}
