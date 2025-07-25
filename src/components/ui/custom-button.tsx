'use client';

import type React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  skeleton?: boolean;
  className?: string;
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
};

export function CustomButton({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  skeleton = false,
  className = '',
  children,
  href,
  type = 'button',
  onClick,
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 text-center uppercase';

  // Estilos de tamaño
  const sizeStyles = {
    sm: 'text-xs py-1.5 px-3',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-2.5 px-5',
  };

  const variantStyles = {
    primary:
      'bg-[#1D6191] text-white hover:bg-[#1a5580] focus:ring-2 focus:ring-[#1D6191] focus:ring-opacity-50 focus:outline-none',
    secondary:
      'bg-[#A9B0C3] text-[#1c1936] hover:bg-[#98a0b5] focus:ring-2 focus:ring-[#A9B0C3] focus:ring-opacity-50 focus:outline-none',
  };

  // Estilos para el estado deshabilitado
  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none';

  // Estilos para ancho completo
  const fullWidthStyles = fullWidth ? 'w-full' : '';

  // Si está en estado skeleton, mostrar un placeholder
  if (skeleton) {
    return (
      <div
        className={cn(
          baseStyles,
          sizeStyles[size],
          'animate-pulse bg-gray-300 text-transparent dark:bg-gray-700',
          fullWidthStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  // Combinar todos los estilos
  const buttonStyles = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    (disabled || loading) && disabledStyles,
    fullWidthStyles,
    className
  );

  // Si hay un href, renderizar como Link
  if (href && !disabled && !loading) {
    return (
      <Link href={href} className={buttonStyles} {...props}>
        {children}
      </Link>
    );
  }

  // De lo contrario, renderizar como botón
  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
