"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type {
  MaterialsResult,
  ProjectType,
} from "@/components/materials-calculator/calculator-form";
import { FileText, Download, ArrowLeft } from "lucide-react";
import { useQuote } from "@/context/quote-context";
import { toast } from "sonner";
import { generatePDF } from "@/lib/pdf-generator";

type CalculatorResultsProps = {
  results: MaterialsResult[];
  projectType: ProjectType;
  onReset: () => void;
};

export function CalculatorResults({
  results,
  projectType,
  onReset,
}: CalculatorResultsProps) {
  const { addItem } = useQuote();
  const [isAddingToQuote, setIsAddingToQuote] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const projectTypeNames = {
    ceiling: "Cielorraso",
    partition: "Tabique",
    cladding: "Revestimiento",
    facade: "Fachada",
    "raised-floor": "Piso Técnico",
    "thermal-insulation": "Aislamiento Térmico",
    roofing: "Cubierta",
  };

  const totalCost = results.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleAddToQuote = () => {
    setIsAddingToQuote(true);

    // Simulate API call
    setTimeout(() => {
      results.forEach((item) => {
        addItem({
          id: item.referencia,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: "/placeholder.svg?height=400&width=400",
        });
      });

      setIsAddingToQuote(false);
      toast.success("Materiales agregados a la cotización", {
        style: {
          background: "#2a2845",
          color: "white",
          border: "1px solid #3d3a5a",
        },
      });
    }, 1000);
  };

  const handleDownloadPDF = () => {
    setIsGeneratingPDF(true);

    // Simulate PDF generation
    setTimeout(() => {
      generatePDF(results, projectTypeNames[projectType], totalCost);
      setIsGeneratingPDF(false);
      toast.success("PDF generado correctamente", {
        style: {
          background: "#2a2845",
          color: "white",
          border: "1px solid #3d3a5a",
        },
      });
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">
          Resultados para {projectTypeNames[projectType]}
        </h3>
        <button
          onClick={onReset}
          className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a calcular
        </button>
      </div>

      <div className="border border-gray-600 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-[#252142]">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Material
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Cantidad
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Precio Unitario
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#2a2845] divide-y divide-gray-700">
            {results.map((item, index) => (
              <tr key={index} className="hover:bg-[#322f52] transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    Ref: {item.referencia}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">
                    {item.quantity} {item.unit}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">
                    ${item.price.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">
                    ${(item.quantity * item.price).toLocaleString()}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-[#252142]">
            <tr>
              <td
                colSpan={3}
                className="px-6 py-4 text-right font-medium text-white"
              >
                Total Estimado:
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-bold text-white">
                ${totalCost.toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="bg-[#252142] p-4 rounded-md border border-[#3d3a5a]">
        <p className="text-sm text-gray-300">
          <strong>Nota:</strong> Esta es una estimación aproximada. Los precios
          y cantidades pueden variar según las condiciones específicas del
          proyecto. Consulta con un especialista para un presupuesto detallado.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={handleAddToQuote}
          isLoading={isAddingToQuote}
          loadingText="Agregando..."
          leftIcon={<FileText className="h-5 w-5" />}
          className="flex-1 bg-[#1D6191] hover:bg-[#1a5580] text-white focus:ring-2 focus:ring-[#1D6191] focus:ring-opacity-50 focus:outline-none"
        >
          Agregar a Cotización
        </Button>

        <Button
          onClick={handleDownloadPDF}
          variant="outline"
          isLoading={isGeneratingPDF}
          loadingText="Generando PDF..."
          leftIcon={<Download className="h-5 w-5" />}
          className="flex-1 border-gray-600 text-white hover:bg-[#252142] hover:border-gray-500 focus:ring-2 focus:ring-[#1D6191] focus:ring-opacity-50 focus:outline-none"
        >
          Descargar PDF
        </Button>
      </div>

      <div className="border-t border-gray-700 pt-6">
        <h4 className="font-medium mb-3">¿Necesitas ayuda con tu proyecto?</h4>
        <p className="text-sm text-gray-300 mb-4">
          Nuestros especialistas pueden asesorarte sobre los materiales más
          adecuados para tu proyecto. Completa el formulario y te contactaremos
          a la brevedad.
        </p>

        <ContactForm projectType={projectType} materials={results} />
      </div>
    </div>
  );
}

type ContactFormProps = {
  projectType: ProjectType;
  materials: MaterialsResult[];
};

function ContactForm({ projectType, materials }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Solicitud enviada correctamente", {
        style: {
          background: "#2a2845",
          color: "white",
          border: "1px solid #3d3a5a",
        },
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Teléfono *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensaje o consulta adicional
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 border border-gray-600 rounded-md bg-[#2a2845] text-white focus:outline-none focus:ring-2 focus:ring-[#1D6191] focus:border-[#1D6191] transition-colors"
          placeholder="Detalles adicionales sobre tu proyecto..."
        />
      </div>

      <Button
        type="submit"
        isLoading={isSubmitting}
        loadingText="Enviando..."
        className="bg-[#A9B0C3] hover:bg-[#98a0b5] text-[#1c1936] focus:ring-2 focus:ring-[#A9B0C3] focus:ring-opacity-50 focus:outline-none"
      >
        Solicitar Asesoramiento
      </Button>
    </form>
  );
}
