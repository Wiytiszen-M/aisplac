'use client';

import Image from 'next/image';
import {
  PortableText as BasePortableText,
  type PortableTextComponents,
  type PortableTextProps,
} from '@portabletext/react';
import type {
  ContentImageBlock,
  SeparatorBlock,
  VideoEmbedBlock,
} from '@/types';
import { urlForImage } from '@/sanity/lib/sanity.image';

const components: PortableTextComponents = {
  block: {
    // Párrafos normales
    normal: ({ children }) => (
      <p className="mb-6 text-base font-normal leading-7 text-gray-300">
        {children}
      </p>
    ),
    // Encabezados
    h1: ({ children }) => (
      <h1 className="mb-8 mt-12 text-4xl font-bold leading-tight text-white md:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-6 mt-10 text-3xl font-bold leading-tight text-white md:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-5 mt-8 text-2xl font-semibold leading-tight text-white md:text-3xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-4 mt-6 text-xl font-semibold leading-tight text-white md:text-2xl">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="mb-3 mt-5 text-lg font-semibold leading-tight text-white md:text-xl">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="mb-3 mt-4 text-base font-semibold leading-tight text-white md:text-lg">
        {children}
      </h6>
    ),
    // Citas
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-lg border-l-4 border-blue-400 bg-white/5 py-4 pl-6 text-lg italic text-gray-300 backdrop-blur-sm">
        {children}
      </blockquote>
    ),
  },
  marks: {
    // Texto en negrita
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    // Texto en cursiva
    em: ({ children }) => <em className="italic text-gray-300">{children}</em>,
    // Texto subrayado
    underline: ({ children }) => (
      <span className="text-gray-300 underline decoration-2 underline-offset-2">
        {children}
      </span>
    ),
    // Texto tachado
    'strike-through': ({ children }) => (
      <span className="text-gray-500 line-through">{children}</span>
    ),
    // Enlaces
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="font-medium text-blue-400 underline decoration-2 underline-offset-2 transition-colors duration-200 hover:text-blue-300 hover:decoration-blue-300"
      >
        {children}
      </a>
    ),
    // Código inline
    code: ({ children }) => (
      <code className="rounded border border-gray-700 bg-gray-800 px-2 py-1 font-mono text-sm text-gray-200">
        {children}
      </code>
    ),
  },
  list: {
    // Listas con viñetas
    bullet: ({ children }) => (
      <ul className="mb-6 list-inside list-disc space-y-2 text-gray-300 marker:text-gray-500">
        {children}
      </ul>
    ),
    // Listas numeradas
    number: ({ children }) => (
      <ol className="mb-6 list-inside list-decimal space-y-2 text-gray-300 marker:text-gray-500">
        {children}
      </ol>
    ),
  },
  listItem: {
    // Elementos de lista con viñetas
    bullet: ({ children }) => (
      <li className="pl-2 text-base leading-6 text-gray-300">{children}</li>
    ),
    // Elementos de lista numerada
    number: ({ children }) => (
      <li className="pl-2 text-base leading-6 text-gray-300">{children}</li>
    ),
  },
  types: {
    image: ({ value }: { value: ContentImageBlock }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      const { alt, caption, size = 'large', alignment = 'center' } = value;
      const imageUrlBuilder = urlForImage(value);
      const imageUrl = imageUrlBuilder
        ? imageUrlBuilder.width(1200).url()
        : null;

      if (!imageUrl) {
        return (
          <div className="my-8 rounded-lg border-2 border-dashed border-gray-600 bg-gray-800/50 p-8 text-center text-gray-400">
            <svg
              className="mx-auto mb-2 h-12 w-12"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm font-medium">Imagen no disponible</p>
          </div>
        );
      }

      const sizeClasses = {
        small: 'max-w-sm',
        medium: 'max-w-md',
        large: 'max-w-3xl',
        full: 'max-w-full',
      };
      const alignClasses = {
        left: 'mr-auto',
        center: 'mx-auto',
        right: 'ml-auto',
      };

      return (
        <figure
          className={`my-10 ${sizeClasses[size]} ${alignClasses[alignment]}`}
        >
          <div className="relative h-auto w-full overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={imageUrl || '/placeholder.svg'}
              alt={alt || 'Imagen del contenido'}
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
          {caption && (
            <figcaption className="mt-3 text-center text-sm font-medium italic text-gray-400">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },
    videoEmbed: ({ value }: { value: VideoEmbedBlock }) => {
      const { url, caption, aspectRatio = '16:9' } = value;
      if (!url) return null;

      const ratioClasses = {
        '16:9': 'aspect-video',
        '9:16': 'aspect-[9/16]',
        '1:1': 'aspect-square',
      };

      return (
        <figure className="my-10">
          <div
            className={`w-full ${ratioClasses[aspectRatio]} overflow-hidden rounded-lg bg-gray-800 shadow-2xl`}
          >
            <iframe
              src={url}
              width="100%"
              height="100%"
              allowFullScreen
              className="h-full w-full border-0"
              title={caption || 'Video embebido'}
            />
          </div>
          {caption && (
            <figcaption className="mt-3 text-center text-sm font-medium italic text-gray-400">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    },
    separator: ({ value }: { value: SeparatorBlock }) => {
      const { style = 'line' } = value;

      const styleClasses = {
        line: 'border-t border-gray-600',
        thick: 'border-t-4 border-gray-500',
        dots: 'border-t-2 border-dashed border-gray-500',
      };

      return (
        <div className="my-12 flex justify-center">
          <hr className={`w-24 ${styleClasses[style]}`} />
        </div>
      );
    },
    // Bloque de código
    code: ({ value }) => (
      <div className="my-8">
        <pre className="overflow-x-auto rounded-lg border border-gray-700 bg-gray-900 p-6 text-sm leading-6 text-gray-100 shadow-2xl">
          <code className="font-mono">{value.code}</code>
        </pre>
        {value.filename && (
          <p className="mt-2 font-mono text-xs text-gray-500">
            {value.filename}
          </p>
        )}
      </div>
    ),
  },
};

// Contenedor principal con estilos específicos para el contenido
export default function PortableText(props: PortableTextProps) {
  return (
    <div className="portable-text-content max-w-none">
      <BasePortableText {...props} components={components} />

      {/* Estilos CSS específicos para elementos que podrían no estar cubiertos */}
      <style jsx>{`
        .portable-text-content {
          line-height: inherit;
          color: inherit;
        }

        /* Estilos para tablas si las usas */
        .portable-text-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 0.875rem;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .portable-text-content th,
        .portable-text-content td {
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.75rem;
          text-align: left;
        }

        .portable-text-content th {
          background-color: rgba(255, 255, 255, 0.1);
          font-weight: 600;
          color: #ffffff;
        }

        .portable-text-content td {
          color: #d1d5db;
        }

        /* Espaciado específico para elementos consecutivos */
        .portable-text-content > * + * {
          margin-top: 0;
        }

        /* Asegurar que los párrafos después de encabezados tengan el espaciado correcto */
        .portable-text-content h1 + p,
        .portable-text-content h2 + p,
        .portable-text-content h3 + p,
        .portable-text-content h4 + p,
        .portable-text-content h5 + p,
        .portable-text-content h6 + p {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
