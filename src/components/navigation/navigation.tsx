import Link from "next/link";
import React from "react";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={`flex flex-col justify-end items-start ${className}`}>
      <Link
        href="/pvc"
        className="relative overflow-hidden group px-4 py-2  transition-colors duration-300 ease-in-out pl-[91px]"
      >
        <span className="relative z-10">PCV</span>
        <span className="absolute inset-0 bg-[#3E3E5E] rounded-r transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </Link>
      <Link
        href="/steelframe"
        className="relative overflow-hidden group px-4 py-2  transition-colors duration-300 ease-in-out pl-[91px]"
      >
        <span className="relative z-10">MATERIAL DE PRODUCCIÓN EN SECO</span>
        <span className="absolute inset-0 bg-[#3E3E5E] rounded-r transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </Link>
      <Link
        href="/solar-energy"
        className="relative overflow-hidden group px-4 py-2  transition-colors duration-300 ease-in-out pl-[91px]"
      >
        <span className="relative z-10">ENERGÍA SOLAR</span>
        <span className="absolute inset-0 bg-[#3E3E5E] rounded-r transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </Link>
      <Link
        href="/modular"
        className="relative overflow-hidden group px-4 py-2  transition-colors duration-300 ease-in-out pl-[91px]"
      >
        <span className="relative z-10">MODULOS HABITABLES</span>
        <span className="absolute inset-0 bg-[#3E3E5E] rounded-r transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </Link>
      <Link
        href="/aisplac"
        className="relative overflow-hidden group px-4 py-2  transition-colors duration-300 ease-in-out pl-[91px]"
      >
        <span className="relative z-10">AISPLAC</span>
        <span className="absolute inset-0 bg-[#3E3E5E] rounded-r transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </Link>
      <Link
        href="/novedades"
        className="relative overflow-hidden group px-4 py-2  transition-colors duration-300 ease-in-out pl-[91px]"
      >
        <span className="relative z-10">NOVEDADES</span>
        <span className="absolute inset-0 bg-[#3E3E5E] rounded-r transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </Link>
      <Link
        href="/contact-us"
        className="relative overflow-hidden group px-4 py-2  transition-colors duration-300 ease-in-out pl-[91px]"
      >
        <span className="relative z-10">CONTACT US</span>
        <span className="absolute inset-0 bg-[#3E3E5E] rounded-r transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </Link>
    </nav>
  );
};

export default Navigation;
