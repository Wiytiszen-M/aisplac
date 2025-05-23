import AISButton from "@/components/AISButton/AISButton";
import BlurredCarousel from "@/components/carousel-blur/carousel-blur";
import ModularFeatures from "@/components/modular-features/modular-features";
import { Button } from "@/components/ui/button";
import ResponsiveCards from "@/components/ui/responsive-cards";
import Image from "next/image";
import Link from "next/link";

const Modular = () => {
  return (
    <section className="flex flex-col items-center md:min-h-screen pb-[150px] mx-auto ">
      <div
        className="relative flex flex-col justify-center items-center md:min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          background: "linear-gradient(0deg,transparent 0%, #5959A4 100%);",
        }}
      >
        <div className="relative pt-[100px] md:pt-0 w-full max-w-[1728px] h-[452px] md:h-[852px] overflow-hidden">
          <Image
            className="absolute w-[80%] md:w-auto md:bottom-[30%] lg:left-[151px] z-10"
            src="/modular/modular-title.svg"
            alt="modular title"
            width={539}
            height={248}
          />

          <Image
            className="absolute lg:-right-32 lg:-bottom-40 bottom-0 "
            src="/modular/modular-building.png"
            width={1376}
            height={1022}
            alt="modular building"
          />
        </div>
      </div>
      <div className="flex flex-col text-center items-center gap-8  md:w-[1088px] md:mt-[167px]">
        <p>
          El diseño modular representa una solución innovadora para abordar las
          necesidades de infraestructura del presente y futuro. Combinando
          tecnología, sostenibilidad y funcionalidad, se posiciona como una
          alternativa competitiva y de alto impacto en el mercado.
        </p>
        <Link href="/contact" className="text-base md:text-3xl font-bold">
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
      <Button variant="default">SOLICITAR COTIZACIONES</Button>
      <div className="relative flex flex-col mt-20 md:gap-6 gap-3">
        <p className="md:w-[550px] absolute  p-4 md:top-20 md:left-20">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <Image
          alt="modular exibition"
          src="/modular/modular-ex.png"
          width={1752}
          height={1068}
        />

        <Image
          alt="modular exibition"
          src="/modular/zoco.png"
          width={1752}
          height={543}
        />
        <div className="flex md:gap-6 gap-3 w-full h-fit overflow-x-hidden ">
          <Image
            alt="modular windows"
            src="/modular/windows.png"
            width={1180}
            height={543}
            className="w-8/12"
          />
          <Image
            alt="modular zoco front"
            src="/modular/zoco-front.png"
            width={522}
            height={543}
            className="w-4/12"
          />
        </div>
      </div>
      <h2 className="md:w-[792px] p-8 md:p-0 md:my-[75px]">
        Contactanos y te ayudamos a hacerlo realidad. 
      </h2>
    </section>
  );
};

export default Modular;
