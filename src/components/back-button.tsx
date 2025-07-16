"use client";

import { ChevronsLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type BackButtonProps = {
  text?: string;
  url?: string;
};

export function BackButton({ text = "Volver", url }: BackButtonProps) {
  const router = useRouter();
  return (
    <Button
      variant="link"
      className="mb-4 px-0 text-white hover:text-gray-100"
      onClick={() => (url ? router.push(url) : router.back())}
    >
      <ChevronsLeft className="w-8 h-8" />
      {text}
    </Button>
  );
}
