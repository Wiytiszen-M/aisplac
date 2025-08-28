import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";

export const metadata = {
  title: "Preguntas Frecuentes | AISPLAC",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.",
};

const faqs = [
  {
    id: 1,
    question: "¿Cómo puedo solicitar una cotización?",
    answer:
      "Puedes solicitar una cotización de varias maneras: navegando por nuestro catálogo y agregando productos a tu cotización, usando nuestra calculadora PVC para cielorrasos, o contactándonos directamente. Una vez que tengas productos en tu cotización, completa tus datos y envíala. Nos comunicaremos contigo a la brevedad.",
  },
  {
    id: 2,
    question: "¿Los precios mostrados incluyen IVA?",
    answer:
      "Los precios mostrados en nuestro catálogo pueden variar según el tipo de cliente y la forma de pago. Para obtener precios exactos con IVA incluido, te recomendamos solicitar una cotización formal donde se detallarán todos los impuestos aplicables.",
  },
  {
    id: 3,
    question: "¿Realizan entregas a domicilio?",
    answer:
      "No se realizan envíos de forma directa. La entrega se coordina con el asesor comercial al momento de realizar la compra.",
  },
  {
    id: 6,
    question: "¿Ofrecen asesoramiento técnico?",
    answer:
      "Sí, nuestro equipo cuenta con experiencia en construcción en seco y puede asesorarte sobre la elección de materiales, cantidades necesarias y técnicas de instalación. No dudes en consultarnos para obtener el mejor resultado en tu proyecto.",
  },
  {
    id: 7,
    question: "¿Cómo funciona la calculadora de cielorrasos PVC?",
    answer:
      "Nuestra calculadora PVC te permite ingresar las dimensiones de tus ambientes y automáticamente calcula todos los materiales necesarios: paneles PVC, perfilería, tornillos y accesorios. Puedes elegir diferentes colores y agregar múltiples ambientes. El resultado incluye cantidades exactas y precios estimados.",
  },
  {
    id: 9,
    question: "¿Puedo retirar los productos en su local?",
    answer:
      "Sí, puedes retirar tus productos directamente en nuestro local en General Pico. Te recomendamos coordinar previamente el retiro, especialmente para productos de gran volumen, para asegurar que esté todo preparado.",
  },
  {
    id: 10,
    question: "¿Trabajan con constructores y profesionales?",
    answer:
      "Absolutamente. Trabajamos con constructores, arquitectos, y profesionales de la construcción ofreciendo precios especiales por volumen, asesoramiento técnico especializado y condiciones de pago preferenciales. Contáctanos para conocer nuestros programas para profesionales.",
  },
];

export default function PreguntasFrecuentesPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto py-36 text-gray-100">
      <div className="container  px-4 py-8">
        {/* Botón volver arriba */}
        <div className="mb-8">
          <BackButton url="/" text="Volver al Home" />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-gray-100">
              Preguntas Frecuentes
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            productos, servicios y procesos.
          </p>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={faq.id} className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-gray-100 flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white text-sm rounded-full flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="ml-9">
                  <p className="text-gray-300 leading-relaxed text-base ">
                    {faq.answer}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Si tienes alguna pregunta específica que no está en esta lista, no
              dudes en contactarnos. Nuestro equipo estará encantado de
              ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5492302582071"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-[220px] lg:w-[300px]">
                  Tengo más preguntas
                </Button>
              </a>
              <Link href="/steelframe">
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-300 hover:bg-blue-900/20 bg-transparent"
                >
                  Ver Catálogo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Botón volver abajo */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button>Volver al Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
