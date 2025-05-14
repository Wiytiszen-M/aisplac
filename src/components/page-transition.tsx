"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { LoadingSpinner } from "@/components/loading-spinner";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(children);

  // Update content when children change
  useEffect(() => {
    setContent(children);
  }, [children]);

  // Show loading state when pathname or search params change
  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      // Scroll to top on page change
      window.scrollTo(0, 0);
    };

    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Short delay to ensure smooth transition
    };

    // If pathname or searchParams change, trigger loading
    handleStart();
    handleComplete();

    return () => {
      // Cleanup
    };
  }, [pathname, searchParams]);

  return (
    <div className="relative min-h-screen">
      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center transition-opacity duration-300">
          <LoadingSpinner size={60} className="text-black mb-2" />
        </div>
      )}

      {/* Page content with fade-in effect */}
      <div
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
