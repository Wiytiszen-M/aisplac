'use client';

import { ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type FowardButtonProps = {
  text?: string;
  url?: string;
  className?: string;
};

export function FowardButton({
  text = 'Volver',
  url,
  className = '',
}: FowardButtonProps) {
  return (
    <Link href={url || '#'}>
      <Button
        variant="link"
        className={`overflow-hidden px-0 text-white hover:text-gray-100 ${className}`}
      >
        {text}
        <ChevronsRight className="h-10 w-10 sm:h-12 sm:w-12 lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
      </Button>
    </Link>
  );
}
