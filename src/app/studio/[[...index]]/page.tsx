'use client';

import config from '@/sanity/config';
import { NextStudio } from 'next-sanity/studio';

// Esta página renderizará Sanity Studio en la ruta /studio de tu aplicación.
export default function StudioPage() {
  return <NextStudio config={config} />;
}
