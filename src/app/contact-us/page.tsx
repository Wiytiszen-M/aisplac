"use client";
import Image from "next/image";
import { useState } from "react";
import { submitContactForm } from "./actions/submitForm";
import { Button } from "@/components/ui/button";

const About = () => {
  const [form, setForm] = useState({ nombre: "", email: "", descripcion: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitContactForm(form);
      setMessage("Enviado correctamente");
      setForm({ nombre: "", email: "", descripcion: "" });
    } catch {
      setMessage("Error al enviar, intenta de nuevo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full pb-[180px]  overflow-hidden">
      <div className="relative w-full h-[597px] overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/contact/hero.png"
          fill
          priority
          alt="aisplac hero contact-us"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto px-5 my-24 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[800px]"
      >
        {/* Nombre */}
        <input
          name="nombre"
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className="border border-blue-500 bg-transparent px-4 py-2 rounded w-full"
        />

        {/* E-mail */}
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-blue-500 bg-transparent px-4 py-2 rounded w-full"
        />

        {/* Descripción (span 2 columnas) */}
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
          required
          className="col-span-full border border-blue-500 bg-transparent px-4 py-2 rounded w-full h-32 resize-none"
        />

        <div className="col-span-full flex justify-end">
          <Button variant="secondary" type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </div>

        {message && <p className="col-span-full text-sm mt-2">{message}</p>}
      </form>
    </section>
  );
};

export default About;
