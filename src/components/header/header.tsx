"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/constants";
import { FileText, Menu, X } from "lucide-react";
import { useCotizacionStore } from "@/stores/cotizacion-store";

const Header = () => {
  const { items } = useCotizacionStore();
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
  const cantidadTotal = items.length;

  return (
    <header className="absolute w-full z-50">
      <div className="px-4 md:px-12 lg:px-40 py-4 grid grid-cols-3 items-center">
        {!isHomePage ? (
          <div className="flex justify-start">
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-10 h-10 text-white hover:text-blue-300" />
            </button>
          </div>
        ) : (
          <div className="flex md:invisible justify-start">
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-12 h-12 text-white hover:text-blue-300" />
            </button>
          </div>
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
        <div className="flex justify-end items-end gap-4">
          <Link href="/cotizacion" className="relative">
            <div className="relative">
              {cantidadTotal > 0 && (
                <>
                  <FileText className=" w-6 h-6 hover:text-blue-300" />
                  <div className="absolute w-3 h-3 rounded-full top-0 right-0 bg-red-500 text-white" />
                </>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed p-4 text-center top-0 left-0 w-full max-w-[300px] h-full bg-[#252147] bg-opacity-95 z-40 flex flex-col items-center justify-center gap-8 text-white transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <button
          className="absolute top-6 right-6 text-white "
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="w-8 h-8" />
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
    </header>
  );
};

export default Header;
