import {
  Email,
  Fabric,
  LocalComertial,
  Location,
  Phone,
} from "@/app/assets/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative flex flex-col md:flex-row w-full justify-center items-center md:h-[472px] bg-[#100E1F]">
        <div className="w-[45%] flex items-center justify-center">
          <Image src="/logo.svg" width={421} height={240} alt="aisplac" />
        </div>
        <div className="w-full p-2 md:p-0 md:w-[55%] flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-[800px]">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Location className="w-10 h-10 shrink-0" />
                <div className="text-left">
                  <p className="font-bold">GENERAL PICO, LA PAMPA</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <LocalComertial className="w-10 h-10 shrink-0" />
                <div className="text-left">
                  <p className="font-medium">Local Comercial</p>
                  <p className="">José Viscardis 345 - Parque Industrial</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Fabric className="w-10 h-10 shrink-0" />
                <div className="text-left">
                  <p className="font-medium">Fábrica de Paneles de PVC</p>
                  <p className="">Av. José Viscardis 1050 - Zona Franca</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Phone className="w-10 h-10 shrink-0" />
                <div className="text-left">
                  <p>(2302) 435814 430191</p>
                  <p>(+54 9 2302) 457911</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Email className="w-10 h-10 shrink-0" />
                <Link
                  href="mailto:ventas@aisplac.com.ar"
                  className="hover:underline"
                >
                  ventas@aisplac.com.ar
                </Link>
              </div>

              <div className="flex md:flex-col items-start gap-3 pl-14">
                <Link href="#" className="hover:underline">
                  Términos y condiciones
                </Link>
                <Link href="#" className="hover:underline">
                  Preguntas Frecuentes
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/footer.svg"
          width={200}
          height={200}
          className="hidden md:block absolute w-[220] top-0 right-0"
          alt="aisplac"
        />
        <Image
          src="/footer.svg"
          width={200}
          height={200}
          className="hidden md:block rotate-90 absolute w-[220] -bottom-[118px] left-14"
          alt="aisplac"
        />
      </footer>
    </>
  );
};

export default Footer;
