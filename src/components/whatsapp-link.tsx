"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppLink() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=%2B5492302582071&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="flex items-center gap-3"
    >
      <FaWhatsapp className="h-10 w-10 shrink-0" />
      <p className=" text-foreground">
        Escribinos por WhatsApp al +54 9 230 261 9183
      </p>
    </a>
  );
}
