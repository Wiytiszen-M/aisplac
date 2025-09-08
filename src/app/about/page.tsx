import { FadeIn } from "@/components/fade-in";
import ValoresSwiper from "@/components/valores-swiper/valores-swiper";
import Image from "next/image";

const valores = [
  { nombre: "INNOVACIÓN", icono: "/about/construccion.svg" },
  { nombre: "SUSTENTABILIDAD", icono: "/about/sustentabilidad.svg" },
  { nombre: "CONFIANZA", icono: "/about/confianza.svg" },
  { nombre: "COMPROMISO", icono: "/about/compromiso.svg" },
  { nombre: "APRENDIZAJE", icono: "/about/aprendizaje.svg" },
  { nombre: "SOLIDARIDAD", icono: "/about/holding-heart.svg" },
  { nombre: "UNIÓN", icono: "/about/union.svg" },
  { nombre: "CALIDAD", icono: "/about/dignificar.svg" },
];

const About = () => {
  function calcularAniosDesde2000(): number {
    const anioActual = new Date().getFullYear();
    return anioActual - 2000;
  }
  return (
    <section className="w-full overflow-hidden pb-[180px]">
      <div className="relative h-[50vh] md:h-[800px] w-full overflow-hidden">
        <video
          className="absolute left-0 top-24 md:top-0 h-auto w-full object-cover"
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="p-4 md:p-0">
        <FadeIn className="mx-auto text-center md:w-[1040px]">
          <p className="mx-auto my-16 md:my-32 text-center md:w-[1040px]">
            Somos una empresa familiar Pampeana fundada en el año 2000. Nuestra
            misión, desde nuestros inicios, es proporcionar soluciones
            integrales para la construcción en seco, con un enfoque en la
            eficiencia y la sostenibilidad.
            <br />
            <br /> Ofrecemos productos de la más alta calidad, adaptados a las
            necesidades específicas de cada proyecto.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="my-16 md:my-32 flex flex-col items-center justify-center gap-4">
            <h3 className="text-4xl font-bold text-center">
              ¿Querés trabajar con nosotros?
            </h3>
            <p className="text-center">
              Formá parte de nuestro equipo enviando tu CV acá
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd219IGKGx2ChcC8UBgzOWQYZ2wPCg5mA-qmTQA_7-YZQzicQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700 transition"
            >
              Enviar CV
            </a>
          </div>
        </FadeIn>
        <Image
          alt="equipo institucional"
          width={1472}
          height={595}
          src="/about/institucional.webp"
          className="mx-auto rounded-lg"
        />
        <FadeIn>
          <h2 className="mx-auto mb-9 md:mb-[75px] mt-16 md:mt-[157px] text-center text-3xl md:w-[1059px]">
            La tecnología, el ingenio y la confianza
            <br /> nos permitió
            <span className="font-bold">
              {" "}
              llegar a diferentes partes de Argentina.
            </span>
          </h2>
        </FadeIn>
        <FadeIn className="mx-auto mb-[75px] flex w-full max-w">
          <div className="mx-auto grid w-full max-w-[973px] grid-cols-2 gap-6 p-4 sm:grid-cols-4">
            {valores.map(({ nombre, icono }) => (
              <div
                key={nombre}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={icono}
                  alt={nombre}
                  width={186}
                  height={186}
                  className="mb-2 md:h-[186px] md:w-[186px] h-[80px] w-[80px]"
                />
                <span className="text-sm font-bold">{nombre}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mt-16 flex flex-col gap-6 md:mt-[132px] md:flex-row">
            <div className="relative aspect-[806/755] w-full md:w-[50%]">
              <Image
                src="/about/trayectoria.png"
                alt="aisplac trayectoria"
                fill
                className="object-contain"
              />
            </div>
            <div className="p-5 md:w-1/2">
              <p className="md:text-left text-center">
                {`Tenemos una trayectoria de más de ${calcularAniosDesde2000()} años en la comercialización
                de materiales para la Construcción en Seco, realización de
                módulos habitables con contenedores y destacamos nuestro
                crecimiento de la mano de nuestro producto más comercializado y
                que fábricamos: Paneles de PVC.`}
                 
              </p>
              <br />
              <p className="md:text-left text-center">
                Contamos con un equipo de profesionales en constante
                capacitación. Acompañamos a los profesionales y clientes que nos
                eligieron en nuestros inicios y nos siguen eligiendo, como
                quienes son nuevos y quieren formar parte de nuestra red. El
                equipo que forma Aisplac es una gran familia en pos de innovar,
                mejorar y evolucionar los productos que ofrece.
              </p>
            </div>
          </div>
        </FadeIn>
        <div className="relative mt-16 md:mt-32">
          <div
            className="absolute top-0 z-10 h-10 w-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(28,25,54,0.8) 10%, rgba(28,25,54,0) 100%)",
            }}
          />
          <ValoresSwiper />
          <div
            className="absolute bottom-0 z-10 h-5 w-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(28,25,54,0.8) 0%, rgba(28,25,54,0) 100%)",
            }}
          />{" "}
        </div>
      </div>
    </section>
  );
};

export default About;
