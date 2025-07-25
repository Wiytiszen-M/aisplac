import ModularFeatures from '@/components/modular-features/modular-features';
import { Button } from '@/components/ui/button';
import ResponsiveCards from '@/components/ui/responsive-cards';
import Image from 'next/image';
import Link from 'next/link';

const Modular = () => {
  return (
    <section className="mx-auto flex flex-col items-center pb-[150px] md:min-h-screen">
      <div className="relative flex w-full flex-col items-center justify-center md:min-h-screen">
        <div className="relative h-[452px] w-full max-w-[1728px] overflow-hidden pt-[100px] md:h-[852px] md:pt-0">
          <Image
            className="absolute z-10 w-[80%] md:bottom-[30%] md:w-auto lg:left-[151px]"
            src="/modular/modular-title.svg"
            alt="modular title"
            width={539}
            height={248}
          />

          <Image
            className="absolute bottom-0 lg:-bottom-40 lg:-right-32"
            src="/modular/modular-building.png"
            width={1376}
            height={1022}
            alt="modular building"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 text-center md:mt-[167px] md:w-[1088px]">
        <p>
          El diseño modular representa una solución innovadora para abordar las
          necesidades de infraestructura del presente y futuro. Combinando
          tecnología, sostenibilidad y funcionalidad, se posiciona como una
          alternativa competitiva y de alto impacto en el mercado.
        </p>
        <Link
          href="/contact"
          className="text-base font-bold transition-all duration-1000 hover:underline md:text-3xl"
        >
          ¡Contactanos para planificar tu espacio modular!
        </Link>
      </div>
      <Image
        className="lg:mt-[145px]"
        src="/modular/modular-house.png"
        width={1682}
        height={514}
        alt="modular house"
      />
      <ModularFeatures />
      <ResponsiveCards />

      <h2 className="p-8 md:my-[75px] md:w-[792px] md:p-0">
        Contactanos y te ayudamos a hacerlo realidad. 
      </h2>
      <Link href="/contact">
        <Button variant="secundary" size="lg">
          SOLICITAR MÁS INFO
        </Button>
      </Link>
    </section>
  );
};

export default Modular;
