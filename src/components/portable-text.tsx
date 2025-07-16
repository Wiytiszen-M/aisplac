import React from "react";
import {
  PortableText,
  type PortableTextReactComponents,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import type { PortableTextBlock } from "sanity";

interface PortableTextProps {
  value: PortableTextBlock[];
}

type LinkMark = {
  _type: "link";
  href: string;
};
const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className="mb-4 mt-8 text-3xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-8 text-2xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-4 mt-8 text-xl font-bold">{children}</h3>
    ),
    normal: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }: PortableTextMarkComponentProps<LinkMark>) => (
      <a
        href={value?.href ?? "#"}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export function PortableTextRenderer({ value }: PortableTextProps) {
  return <PortableText value={value} components={components} />;
}
