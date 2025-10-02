"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/constants";
import { FileText, Menu, X } from "lucide-react";
import { useCotizacionStore } from "@/stores/cotizacion-store";
import { SmartLink } from "../smart-link";

const Header = () => {
  const { items } = useCotizacionStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

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
    <header className="absolute z-50 w-full">
      <div className="grid grid-cols-3 items-center px-4 py-4 md:px-12 lg:px-40">
        {!isHomePage ? (
          <div className="flex justify-start">
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-10 w-10 text-white hover:text-blue-300" />
            </button>
          </div>
        ) : (
          <div className="flex justify-start md:invisible">
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-12 w-12 text-white hover:text-blue-300" />
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
        <div className="flex items-end justify-end gap-4">
          <Link href="/cotizacion" className="relative">
            <div className="relative">
              {cantidadTotal > 0 && (
                <>
                  <FileText className="h-8 w-8 hover:text-blue-300" />
                  <div className="absolute right-0 top-0 h-3 w-3 rounded-full bg-red-500 text-white" />
                </>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed left-0 top-0 z-40 flex h-screen w-full max-w-[300px] flex-col items-center justify-center gap-8 bg-[#252147] bg-opacity-95 p-4 text-center text-white transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none -translate-x-full opacity-0"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <button
          className="absolute right-6 top-6 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-8 w-8" />
        </button>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <SmartLink
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
            </SmartLink>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
