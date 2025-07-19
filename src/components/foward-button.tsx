"use client";

import { ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type FowardButtonProps = {
  text?: string;
  url?: string;
  className?: string;
};

export function FowardButton({
  text = "Volver",
  url,
  className = "",
}: FowardButtonProps) {
  return (
    <Link href={url || "#"}>
      <Button
        variant="link"
        className={`px-0 text-white hover:text-gray-100 overflow-hidden ${className}`}
      >
        {text}
        <ChevronsRight className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 xl:w-14 xl:h-14" />
      </Button>
    </Link>
  );
}
