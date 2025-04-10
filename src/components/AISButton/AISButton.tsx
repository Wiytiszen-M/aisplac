import React, { SyntheticEvent } from "react";

interface AISButtonProps {
  text: string;
  onClick: (e?: SyntheticEvent) => void;
  color?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
}

const AISButton: React.FC<AISButtonProps> = ({
  text,
  onClick,
  color = "primary",
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "px-4 py-4 rounded font-bold transition-all duration-200 focus:outline-none";
  const colorStyles = {
    primary: "bg-[#1D6191] text-white hover:bg-[#144566]",
    secondary: "bg-[#ABB0C4] text-[#3E3E5E] hover:bg-[#8d94af]",
  };
  const disabledStyles = "bg-gray-400 cursor-not-allowed";

  const buttonClass = `${baseStyles} ${colorStyles[color]} ${
    disabled ? disabledStyles : ""
  } ${className}`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default AISButton;
