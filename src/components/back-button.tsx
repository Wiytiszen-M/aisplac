'use client';

import { ChevronsLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type BackButtonProps = {
  text?: string;
  url?: string;
  className?: string;
};

export function BackButton({
  text = 'Volver',
  url,
  className = '',
}: BackButtonProps) {
  const router = useRouter();
  return (
    <Button
      variant="link"
      className={`mb-4 px-0 text-white hover:text-gray-100 ${className}`}
      onClick={() => (url ? router.push(url) : router.back())}
    >
      <ChevronsLeft className="h-8 w-8" />
      {text}
    </Button>
  );
}
