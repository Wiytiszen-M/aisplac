import { FadeIn } from "@/components/fade-in";
import ModularFeatures from "@/components/modular-features/modular-features";
import { Button } from "@/components/ui/button";
import ResponsiveCards from "@/components/ui/responsive-cards";
import Image from "next/image";
import Link from "next/link";

const Modular = () => {
  return (
    <section className="mx-auto flex flex-col items-center pb-36 md:py-36  min-h-screen overflow-x-hidden">
      <div className="relative flex w-full flex-col items-center justify-center ">
        <div className="md:relative h-[85vh] w-full max-w-[1728px] overflow-hidden pt-[100px] md:h-[852px] md:pt-0">
          <Image
            className="mx-auto relative top-20  md:absolute z-10 w-[322px]  md:bottom-[30%] md:w-auto  lg:left-[151px]"
            src="/modular/modular-title.svg"
            alt="modular title"
            width={539}
            height={248}
          />

          <Image
            className="absolute -bottom-12 lg:-bottom-40 w-[420px] md:w-full max-w-none -right-10 lg:-right-32"
            src="/modular/modular-building.png"
            width={1376}
            height={1022}
            alt="modular building"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col items-center gap-8 text-center mt-12 md:mt-[167px] md:w-[1088px]">
        <p>
          El diseño modular representa una solución innovadora para abordar las
          necesidades de infraestructura del presente y futuro. Combinando
          tecnología, sostenibilidad y funcionalidad, se posiciona como una
          alternativa competitiva y de alto impacto en el mercado.
        </p>
        <Link
          href="/contact-us"
          className="text-base font-bold transition-all duration-1000 hover:underline md:text-3xl"
        >
          ¡Contactanos para planificar tu espacio modular!
        </Link>
      </div>
      <Image
        className="mt-16 lg:mt-[145px]"
        src="/modular/modular-house.png"
        width={1682}
        height={514}
        alt="modular house"
      />
      <FadeIn>
        <ModularFeatures />
      </FadeIn>
      <ResponsiveCards />
      <FadeIn className="lmd:w-[792px] flex flex-col items-center text-center md:my-[75px]">
        <h2 className="p-8 md:my-[75px] md:w-[792px] md:p-0">
          Contactanos y te ayudamos a hacerlo realidad. 
        </h2>
        <Link href="/contact-us">
          <Button variant="secundary" size="lg">
            SOLICITAR MÁS INFO
          </Button>
        </Link>
      </FadeIn>
    </section>
  );
};

export default Modular;
