'use client';

import { useState, useRef, useEffect } from 'react';
import { Share2, Copy, X } from 'lucide-react';
import Image from 'next/image';

type ShareDropdownProps = {
  title: string;
  url: string;
};

export function ShareDropdown({ title, url }: ShareDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Reset copied state after 2 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${title} - ${url}`
    )}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setIsOpen(false), 1000);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-600 hover:text-black"
        aria-label="Compartir producto"
      >
        <Share2 className="h-4 w-4" />
        <span className="text-sm">Compartir</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 overflow-hidden rounded-md border bg-white shadow-lg">
          <div className="py-1">
            <button
              onClick={shareToWhatsApp}
              className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-100"
            >
              <div className="relative h-4 w-4">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="WhatsApp"
                  width={16}
                  height={16}
                  className="text-green-500"
                />
              </div>
              WhatsApp
            </button>
            <button
              onClick={copyToClipboard}
              className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-100"
            >
              {copied ? (
                <>
                  <X className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copiar enlace
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
