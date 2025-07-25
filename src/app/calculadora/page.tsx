import { BackButton } from '@/components/back-button';
import { PVCCeilingCalculator } from '@/components/pvc-ceiling-calculator';

export const metadata = {
  title: 'Calculadora de Cielorrasos PVC | AISPLAC',
  description:
    'Calcula los materiales necesarios para estructuras de soporte de cielorrasos PVC.',
};

export default function CalculatorPage() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl py-36">
      <BackButton url="/pvc" text="Volver a PVC" />
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold">
              Calculadora de Cielorrasos PVC
            </h1>
            <p className="text-lg text-gray-300">
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
