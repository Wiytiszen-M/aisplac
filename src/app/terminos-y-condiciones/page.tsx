import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/back-button";

export const metadata = {
  title: "Términos y Condiciones | AISPLAC",
  description: "Términos y condiciones de uso de los servicios de Aisplac SRL.",
};

export default function TerminosYCondicionesPage() {
  return (
    <div className=" max-w-7xl mx-auto  min-h-screen py-36 text-gray-100">
      <div className="container px-4 py-8">
        {/* Botón volver arriba */}
        <div className="mb-8">
          <BackButton url="/" text="Volver al Inicio" />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-gray-100 uppercase">
              Términos y Condiciones de Uso
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Términos y condiciones de uso de los servicios de Aisplac SRL
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Última actualización: Agosto 2025
          </p>
        </div>

        {/* Contenido */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* 1. Información de la empresa */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100 flex items-center gap-3">
                1. Información de la empresa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p className="text-base">
                Este sitio web pertenece a <strong>AISPLAC S.R.L.</strong>, CUIT
                30-70723634-1, con domicilio legal en Calle Viscardis 345,
                General Pico, La Pampa, Argentina.
              </p>
            </CardContent>
          </Card>

          {/* 2. Productos y servicios */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100 flex items-center gap-3">
                2. Productos y servicios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p className="text-base">
                AISPLAC S.R.L. comercializa módulos habitables, paneles solares;
                paneles de PVC y otros materiales de construcción en seco.
                Dentro de los productos ofrecidos en la web; los precios y la
                disponibilidad están sujetos a modificaciones sin previo aviso.
              </p>
            </CardContent>
          </Card>

          {/* 3. Pagos */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100 flex items-center gap-3">
                3. Pagos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p className="text-base">
                Este sitio web no constituye un e-commerce. Los pedidos y las
                condiciones de pago se gestionan directamente entre AISPLAC
                S.R.L. y el cliente, según corresponda.
              </p>
            </CardContent>
          </Card>

          {/* 4. Envíos y entregas */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100 flex items-center gap-3">
                4. Envíos y entregas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p className="text-base">
                AISPLAC S.R.L. no realiza envíos de forma directa. El cliente
                deberá retirar la mercadería en el local comercial o, en caso de
                requerir transporte, podrá convenirlo directamente con el asesor
                comercial que lo contacte.
              </p>
            </CardContent>
          </Card>

          {/* 5. Devoluciones y garantías */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100 flex items-center gap-3">
                5. Devoluciones y garantías
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p className="text-base">
                <strong>Público en general:</strong> Una vez retirada la
                mercadería del local comercial, la empresa no se hace
                responsable por cambios, devoluciones o reclamos.
              </p>
              <p className="text-base">
                <strong>Distribuidores:</strong> Las condiciones de cambios,
                devoluciones o garantías serán acordadas directamente con su
                asesor comercial asignado.
              </p>
            </CardContent>
          </Card>

          {/* 6. Usuarios del sitio */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100 flex items-center gap-3">
                6. Usuarios del sitio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300 ">
              <p className="text-base">
                El acceso y uso de la plataforma de AISPLAC S.R.L. se regula de
                la siguiente forma:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  La plataforma de pedidos para el público general está abierta
                  a todo usuario, sin necesidad de registro previo.
                </li>
                <li>
                  La plataforma exclusiva de distribuidores está destinada
                  únicamente a clientes registrados y habilitados por AISPLAC
                  S.R.L., quienes contarán con un acceso otorgado por la
                  empresa.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 7. Propiedad intelectual */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                7. Propiedad intelectual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p className="text-base">
                Todos los contenidos de este sitio (textos, imágenes, logotipos,
                diseños, etc.) son propiedad de AISPLAC S.R.L. o se utilizan con
                autorización de sus titulares, quedando prohibida su
                reproducción o uso sin autorización expresa.
              </p>
            </CardContent>
          </Card>

          {/* 8. Limitación de responsabilidad */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                8. Limitación de responsabilidad
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p className="text-base">
                AISPLAC S.R.L. no se responsabiliza por errores de carga de
                datos realizados por los usuarios, ni por demoras o
                inconvenientes ajenos a su control.
              </p>
            </CardContent>
          </Card>

          {/* 9. Ley aplicable y jurisdicción */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100 flex items-center gap-3">
                9. Ley aplicable y jurisdicción
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300">
              <p className="text-base">
                Estos Términos y Condiciones se rigen por las leyes de la
                República Argentina. En caso de controversia, serán competentes
                los Tribunales Ordinarios de la Ciudad de General Pico, La
                Pampa.
              </p>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-gray-100">
                Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-300">
              <p className="text-base">
                <strong>Razón Social:</strong> AISPLAC S.R.L.
              </p>
              <p className="text-base">
                <strong>CUIT:</strong> 30-70723634-1
              </p>
              <p className="text-base">
                <strong>Domicilio:</strong> Calle Viscardis 345, General Pico,
                La Pampa, Argentina
              </p>
              <p className="text-base">
                <strong>Actividad:</strong> Comercialización de materiales de
                construcción
              </p>
              <p className="text-blue-300 mt-4 text-base">
                Para consultas sobre estos términos y condiciones, puede
                contactarnos a través de nuestros canales oficiales de
                comunicación.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Botón volver abajo */}
        <div className="mt-12 text-center">
          <Link href="/">
            <Button>Volver al Inicio</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
