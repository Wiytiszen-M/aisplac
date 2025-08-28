import Image from "next/image";

export default function ModularFeatures() {
  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-stretch justify-center gap-6 md:flex-row">
          <div className="w-full md:w-1/3">
            <div className="flex min-h-full flex-col items-center justify-start p-6 text-center text-white">
              <div className="mb-4 flex h-16 items-center justify-center">
                <div className="relative h-12 w-12">
                  <Image
                    src="/modular/handheart.svg"
                    alt="Sustentabilidad"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
              <div className="mb-2 flex h-14 items-center">
                <h3 className="text-xl font-semibold">Sostenibilidad</h3>
              </div>
              <p className="text-sm opacity-80">
                Reutilizamos módulos y contenedores para darles una vida útil,
                sin necesidad de fabricar con nuevos materiales. Los reciclamos
                creando espacios integrados a partir de lo que ya existe.
              </p>
            </div>
          </div>

          <div className="w-full md:z-10 md:w-1/3 md:scale-105">
            <div className="flex min-h-full flex-col items-center justify-start p-6 text-center text-white">
              <div className="mb-4 flex h-16 items-center justify-center">
                <div className="relative h-12 w-12">
                  <Image
                    src="/modular/home.svg"
                    alt="Construcción Modular"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
              <div className="mb-2 flex h-14 items-center">
                <h3 className="text-xl font-semibold">Construcción Modular</h3>
              </div>
              <p className="text-sm opacity-80">
                Construimos módulos funcionales que cumplan con altos estándares
                de calidad, permitiendo un montaje rápido y escalable. Los
                módulos están diseñados para ser versátiles, sostenibles y
                eficientes.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex min-h-full flex-col items-center justify-start p-6 text-center text-white">
              <div className="mb-4 flex h-16 items-center justify-center">
                <div className="relative h-12 w-12">
                  <Image
                    src="/modular/fileedit.svg"
                    alt="Automatización"
                    fill
                    className="object-contain opacity-80"
                  />
                </div>
              </div>
              <div className="mb-2 flex h-14 items-center">
                <h3 className="text-xl font-semibold">
                  Diseños personalizados
                </h3>
              </div>
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
