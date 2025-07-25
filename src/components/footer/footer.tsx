import {
  Email,
  Fabric,
  LocalComertial,
  Location,
  Phone,
} from '@/app/assets/icons';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className="relative flex w-full flex-col items-center justify-center bg-[#100E1F] p-4 md:mt-0 md:h-[472px] md:flex-row md:p-0">
        <div className="mb-5 flex w-[45%] items-center justify-center">
          <Image src="/logo.svg" width={421} height={240} alt="aisplac" />
        </div>
        <div className="w-full flex-wrap p-2 md:w-[55%] md:p-0">
          <div className="grid max-w-[800px] grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Location className="h-10 w-10 shrink-0" />
                <div className="text-left">
                  <p className="font-bold">GENERAL PICO, LA PAMPA</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <LocalComertial className="h-10 w-10 shrink-0" />
                <div className="text-left">
                  <p className="font-medium">Local Comercial</p>
                  <p>José Viscardis 345 - Parque Industrial</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Fabric className="h-10 w-10 shrink-0" />
                <div className="text-left">
                  <p className="font-medium">Fábrica de Paneles de PVC</p>
                  <p>Av. José Viscardis 1050 - Zona Franca</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Phone className="h-10 w-10 shrink-0" />
                <div className="text-left">
                  <p>(2302) 435814 430191</p>
                  <p>(+54 9 2302) 457911</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Email className="h-10 w-10 shrink-0" />
                <Link
                  href="mailto:ventas@aisplac.com.ar"
                  className="hover:underline"
                >
                  ventas@aisplac.com.ar
                </Link>
              </div>

              <div className="flex gap-3 md:flex-col md:items-start md:pl-14">
                <Link href="#" className="text-center hover:underline">
                  Términos y condiciones
                </Link>
                <Link href="#" className="text-center hover:underline">
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
          className="absolute right-0 top-0 hidden w-[220] md:block"
          alt="aisplac"
        />
        <Image
          src="/footer.svg"
          width={200}
          height={200}
          className="absolute -bottom-[118px] left-14 hidden w-[220] rotate-90 md:block"
          alt="aisplac"
        />
      </footer>
    </>
  );
};

export default Footer;
