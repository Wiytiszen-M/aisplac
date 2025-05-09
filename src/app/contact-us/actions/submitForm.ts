'use server';

export async function submitContactForm(data: { nombre: string; email: string; descripcion: string }) {

  const { nombre, email, descripcion } = data;

  if (!nombre || !email || !descripcion) {
    throw new Error('Faltan datos.');
  }


  console.log(`Nuevo contacto:
    Nombre: ${nombre}
    Email: ${email}
    Descripción: ${descripcion}
  `);

  return { message: 'Formulario enviado con éxito' };
}