'use client';
import Image from 'next/image';
import { useState } from 'react';
import { submitContactForm } from './actions/submitForm';
import { CustomButton } from '@/components/ui/custom-button';

const About = () => {
  const [form, setForm] = useState({ nombre: '', email: '', descripcion: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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
      setMessage('Enviado correctamente');
      setForm({ nombre: '', email: '', descripcion: '' });
    } catch {
      setMessage('Error al enviar, intenta de nuevo');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full overflow-hidden pb-[180px]">
      <div className="relative h-[597px] w-full overflow-hidden">
        <Image
          className="absolute left-0 top-0 h-full w-full object-cover"
          src="/contact/hero.png"
          fill
          priority
          alt="aisplac hero contact-us"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-24 grid w-full max-w-[800px] grid-cols-1 gap-4 px-5 md:grid-cols-2"
      >
        {/* Nombre */}
        <input
          name="nombre"
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className="w-full rounded border border-blue-500 bg-transparent px-4 py-2"
        />

        {/* E-mail */}
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded border border-blue-500 bg-transparent px-4 py-2"
        />

        {/* Descripción (span 2 columnas) */}
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
          required
          className="col-span-full h-32 w-full resize-none rounded border border-blue-500 bg-transparent px-4 py-2"
        />

        <div className="col-span-full flex justify-end">
          <CustomButton variant="secondary" type="submit" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </CustomButton>
        </div>

        {message && <p className="col-span-full mt-2 text-sm">{message}</p>}
      </form>
    </section>
  );
};

export default About;
