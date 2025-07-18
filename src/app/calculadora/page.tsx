import { BackButton } from "@/components/back-button";
import { PVCCeilingCalculator } from "@/components/pvc-ceiling-calculator";

export const metadata = {
  title: "Calculadora de Cielorrasos PVC | AISPLAC",
  description:
    "Calcula los materiales necesarios para estructuras de soporte de cielorrasos PVC.",
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto py-36">
      <BackButton url="/pvc" text="Volver a PVC" />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Calculadora de Cielorrasos PVC
            </h1>
            <p className="text-gray-300 text-lg">
              Calcula fácilmente los materiales necesarios para estructuras de
              soporte de cielorrasos PVC
            </p>
          </div>

          <PVCCeilingCalculator />
        </div>
      </div>
    </div>
  );
}
