"use client";

import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  BriefcaseBusiness,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactData() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Contacto</h1>
          <p className="text-lg">
            Comunicate con nuestro equipo en General Pico, La Pampa. Estamos
            disponibles para responder tus consultas y ayudarte en lo que
            necesites.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Teléfonos */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                Teléfono
              </h3>
              <p className="text-base text-white">
                2302-582071 <strong>Venta Web</strong>
              </p>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                WhatsApp
              </h3>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white w-full"
                onClick={() =>
                  window.open("https://wa.me/5492302619183", "_blank")
                }
              >
                Chatear en WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Email</h3>
              <a
                href="mailto:ventas@aisplac.com.ar"
                className="text-base text-blue-400 hover:underline"
              >
                ventas@aisplac.com.ar
              </a>
            </CardContent>
          </Card>
          {/* Trabaja con nosotros */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <BriefcaseBusiness className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                Trabajá con nosotros
              </h3>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSd219IGKGx2ChcC8UBgzOWQYZ2wPCg5mA-qmTQA_7-YZQzicQ/viewform",
                    "_blank"
                  )
                }
              >
                Ingresá acá
              </Button>
            </CardContent>
          </Card>

          {/* Oficina */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                Oficinas AISPLAC SRL
              </h3>
              <a
                href="https://maps.app.goo.gl/u3cEEHNonN3GuoAY7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-blue-400 hover:underline block"
              >
                José Viscardis 345, Gral. Pico
              </a>
              <p className="text-sm text-white mt-2">
                Lunes a Viernes: 8:00 - 17:00
              </p>
            </CardContent>
          </Card>

          {/* Fábrica */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                Fábrica AISPLAC SRL
              </h3>
              <a
                href="https://maps.app.goo.gl/z2nFgnnmjQ7y3i92A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-blue-400 hover:underline block"
              >
                José Viscardis 1050, Gral. Pico
              </a>
              <p className="text-sm text-white mt-2">
                Lunes a Viernes: 7:00 - 17:00
              </p>
            </CardContent>
          </Card>

          {/* Modular Solar */}
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                Arquitectura Modular - Energía Solar
              </h3>
              <a
                href="https://www.google.com.ar/maps/place/Aisplac+SRL.+Arquitectura+Modular+-+Solar/@-35.6816556,-63.7820771,441m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-blue-400 hover:underline block"
              >
                Sampayo 90, Parque Industrial, Gral. Pico
              </a>
              <p className="text-sm text-white mt-2">
                Lunes a Viernes: 8:00 - 17:00
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
