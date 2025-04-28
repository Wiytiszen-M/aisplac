"use client";
import { useState } from "react";
import { Buy, ShoppingCart, User } from "@/app/assets/icons";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute w-full z-50 overflow-x-hidden">
      <div className="px-4 md:px-12 lg:px-40 py-4 grid grid-cols-3 items-center">
        <div className="flex justify-start">
          <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={112}
              height={64}
              alt="logo"
              priority
            />
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="hidden lg:flex justify-end items-center gap-4">
          <ShoppingCart className="w-8 h-8 xl:w-10 xl:h-10" />
          <Buy className="w-8 h-8 xl:w-10 xl:h-10" />
          <User className="w-8 h-8 xl:w-10 xl:h-10" />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full max-w-[300px] h-full bg-[#1C1936] bg-opacity-95 z-40 flex flex-col items-center justify-center gap-8 text-white ">
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <Link href="#valores" onClick={() => setIsMenuOpen(false)}>
            Valores
          </Link>
          <Link href="#pvc" onClick={() => setIsMenuOpen(false)}>
            PVC
          </Link>
          <Link href="#steelframe" onClick={() => setIsMenuOpen(false)}>
            Steel Frame
          </Link>
          <Link href="#modular" onClick={() => setIsMenuOpen(false)}>
            Modular
          </Link>
          <Link href="#solar" onClick={() => setIsMenuOpen(false)}>
            Energía Solar
          </Link>
          <Link href="#novedades" onClick={() => setIsMenuOpen(false)}>
            Novedades
          </Link>
          <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
