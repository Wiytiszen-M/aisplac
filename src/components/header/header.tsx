"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute w-full z-50">
      <div className="px-4 md:px-12 lg:px-40 py-4 grid grid-cols-3 items-center">
        {!isHomePage ? (
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
        ) : (
          <div className="hidden md:flex"></div>
        )}

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
        <div className="hidden lg:flex justify-end items-center gap-4"></div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={menuRef} // Asignar la referencia aquí
          className="fixed p-4 text-center top-0 left-0 w-full max-w-[300px] h-full bg-[#252147] bg-opacity-95 z-40 flex flex-col items-center justify-center gap-8 text-white"
        >
          <button
            className="absolute top-6 right-6 text-white "
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-2 py-1 ${
                  isActive
                    ? "border-b-2 border-white"
                    : "border-b-2 border-transparent"
                } hover:border-white`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
