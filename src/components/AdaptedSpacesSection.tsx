"use client";

import { Button } from "@/components/ui/button";
import { H2, P } from "@/components/ui/typography";
import { Building2, MessageCircle, Briefcase } from "lucide-react";

export default function AdaptedSpacesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <H2>Des espaces adaptés à chaque usage</H2>

            <P className="mb-8">
              Besoin d&apos;un bureau privé ou d&apos;une salle pour vos
              événements ? Open The Box (OTB) vous aide à trouver l&apos;espace
              parfait, selon votre activité, vos horaires et votre budget.
            </P>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start space-x-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <p
                  className="text-gray-700"
                  style={{
                    lineHeight: "30px",
                    letterSpacing: "-1px",
                  }}
                >
                  Bureaux privatifs
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <p
                  className="text-gray-700"
                  style={{
                    lineHeight: "30px",
                    letterSpacing: "-1px",
                  }}
                >
                  Salles de réunion et conférences
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <p
                  className="text-gray-700"
                  style={{
                    lineHeight: "30px",
                    letterSpacing: "-1px",
                  }}
                >
                  Espaces pour formations, ateliers ou RDV clients
                </p>
              </div>
            </div>

            <Button
              className="text-white transition-all duration-200"
              style={{
                backgroundColor: "#8BBE3D",
                fontSize: "16px",
                padding: "16px 32px",
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
              Réserver un espace
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <div
              className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
              style={{
                backgroundImage: `url('/reunion-d-affaires.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Optional overlay for better visual effect */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
