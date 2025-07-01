import Image from "next/image";

export default function ModularFeatures() {
  return (
    <div className="w-full bg-[#1a1333] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="w-full md:w-1/3 ">
            <div className="flex flex-col items-center justify-center p-6 text-center text-white">
              <div className="mb-4 flex justify-center">
                <div className="relative w-12 h-12">
                  <Image
                    src="/modular/handheart.svg"
                    alt="Sustentabilidad"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustentables</h3>
              <p className="text-sm opacity-80">
                Construimos módulos funcionales que cumplan con altos estándares
                de calidad, permitiendo un montaje rápido y escalable. Los
                módulos están diseñados para ser versátiles, sostenibles y
                eficientes.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 md:scale-105 md:z-10">
            <div className="flex flex-col items-center justify-center p-6 text-center text-white">
              <div className="mb-4 flex justify-center">
                <div className="relative w-12 h-12">
                  <Image
                    src="/modular/home.svg"
                    alt="Construcción Modular"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Construcción Modular
              </h3>
              <p className="text-sm opacity-80">
                Construcción en fábrica cuidando todos los detalles  y evitas
                los recurrentes inconvenientes de obra. Selección de materiales
                duraderos, livianos y de fácil transporte. 
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex flex-col items-center justify-center p-6 text-center text-white">
              <div className="mb-4 flex justify-center">
                <div className="relative w-12 h-12">
                  <Image
                    src="/modular/fileedit.svg"
                    alt="Automatización"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Diseños personalizados
              </h3>
              <p className="text-sm opacity-80">
                Creación de modelos digitales para validar funcionalidad,
                estética y optimización de espacios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
