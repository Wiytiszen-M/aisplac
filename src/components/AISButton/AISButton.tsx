import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

export interface AISButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Texto o elementos internos */
  children: ReactNode;
  /** Variante de color */
  variant?: Variant;
  /** Tamaño del botón */
  size?: Size;
  /** Estado de carga */
  loading?: boolean;
  /** Ícono a la izquierda */
  iconLeft?: ReactNode;
  /** Ícono a la derecha */
  iconRight?: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-[#1D6191] text-white hover:bg-[#144566]",
  secondary: "bg-[#ABB0C4] text-[#3E3E5E] hover:bg-[#8d94af]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-6 py-4 text-lg",
};

export const AISButton = forwardRef<HTMLButtonElement, AISButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      iconLeft,
      iconRight,
      className = "",
      onClick,
      ...rest
    },
    ref
  ) => {
    const base =
      "rounded font-bold flex items-center justify-center transition-all duration-200 focus:outline-none";
    const disabledStyles = "opacity-50 cursor-not-allowed";
    const classes = [
      base,
      variantStyles[variant],
      sizeStyles[size],
      disabled || loading ? disabledStyles : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!loading && !disabled && onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        className={classes}
        onClick={handleClick}
        disabled={disabled || loading}
        {...rest}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : (
          <>
            {iconLeft && <span className="mr-2">{iconLeft}</span>}
            {children}
            {iconRight && <span className="ml-2">{iconRight}</span>}
          </>
        )}
      </button>
    );
  }
);

AISButton.displayName = "AISButton";
export default AISButton;
