import { clsx, type ClassValue } from 'clsx';
import { PortableTextBlock } from 'sanity';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getExcerpt(body: PortableTextBlock[], maxLength = 100): string {
  if (!body || !Array.isArray(body)) return '';

  const fullText = body
    .flatMap((block) =>
      block._type === 'block' && Array.isArray(block.children)
        ? block.children.map((child) => child.text).join('')
        : ''
    )
    .join(' ')
    .trim();

  return fullText.length > maxLength
    ? fullText.slice(0, maxLength).trim() + '…'
    : fullText;
}

export function scrollToTop({ smooth = true } = {}) {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  }
}
