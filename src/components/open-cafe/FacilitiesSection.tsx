"use client";

import { Button } from "@/components/ui/button";
import { Wifi, Coffee, Printer, Users } from "lucide-react";

export default function FacilitiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-4xl md:text-5xl text-gray-900 mb-6"
              style={{
                fontWeight: 600,
                lineHeight: "40px",
                letterSpacing: "-3px",
              }}
            >
              Des équipements modernes et 100 % opérationnels
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Concentrez-vous sur votre travail, nous nous occupons du reste.
              Tous nos équipements sont prêts à l&apos;emploi et régulièrement
              maintenus.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-3">
                <Wifi className="w-6 h-6 mt-1" style={{ color: "#8BBE3D" }} />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Wifi fibre optique 1Gbps
                  </h4>
                  <p className="text-gray-600">
                    Connexion ultra-rapide pour tous vos besoins
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Coffee className="w-6 h-6 mt-1" style={{ color: "#8BBE3D" }} />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Café et snacks inclus
                  </h4>
                  <p className="text-gray-600">
                    Machine à café professionnelle et collations
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Printer
                  className="w-6 h-6 mt-1"
                  style={{ color: "#8BBE3D" }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Impressions et scan
                  </h4>
                  <p className="text-gray-600">
                    Imprimante couleur et scanner à disposition
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="text-white px-8 py-4 text-lg transition-all duration-200"
              style={{
                backgroundColor: "#8BBE3D",
                border: "2px solid #8BBE3D",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
                e.currentTarget.style.borderColor = "#000000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#8BBE3D";
                e.currentTarget.style.borderColor = "#8BBE3D";
              }}
            >
              Profiter de l&apos;offre
            </Button>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Users className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Image des équipements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
