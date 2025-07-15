"use client";

import { ChevronsLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type BackButtonProps = {
  text?: string;
};

export function BackButton({ text = "Volver" }: BackButtonProps) {
  return (
    <Button
      variant="link"
      className="mb-4 px-0 text-white hover:text-gray-100"
      onClick={() => window.history.back()}
    >
      <ChevronsLeft className="w-8 h-8" />
      {text}
    </Button>
  );
}
