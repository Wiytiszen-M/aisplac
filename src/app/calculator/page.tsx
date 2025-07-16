export const metadata = {
  title: "Calculadora de Materiales | AISPLAC",
  description:
    "Calcula los materiales necesarios para tu proyecto de construcción en seco. Cielorrasos, tabiques y revestimientos.",
};

export default function CalculatorPage() {
  return (
    <div className="bg-[#1c1936] min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">
              Calculadora de Materiales
            </h1>
            <p className="text-gray-300">
              Calcula fácilmente los materiales necesarios para tu proyecto de
              construcción en seco
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
