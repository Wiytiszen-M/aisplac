'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type LogoBannerProps = {
  children: ReactNode;
};

export function LogoBanner({ children }: LogoBannerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    // Duplicamos los elementos para crear el efecto infinito
    const scrollerContent = Array.from(scrollerInnerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerInnerRef.current) {
        scrollerInnerRef.current.appendChild(duplicatedItem);
      }
    });

    // Detectamos si la animación debe pausarse (reducción de movimiento)
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      scrollerInnerRef.current.style.animationPlayState = 'paused';
    }
  }, []);

  return (
    <div className="relative overflow-hidden py-6">
      {/* Contenedor principal con animación */}
      <div
        ref={scrollerRef}
        className="infinite-scroll relative max-w-full overflow-hidden"
      >
        <div
          ref={scrollerInnerRef}
          className="scroller__inner animate-scroll flex items-center space-x-8"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
