"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Ticket, Clock } from "lucide-react";
import { H2 } from "./ui/typography";

export default function VisitSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
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

          {/* Right Content */}
          <div>
            <H2>Visite gratuite, sur rendez-vous 7j/7</H2>

            <p
              className="text-lg text-gray-600 mb-8"
              style={{
                lineHeight: "30px",
                letterSpacing: "-1px",
              }}
            >
              Open The Box vous accueille tous les jours, y compris le week-end,
              sur simple demande.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start space-x-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <p
                  className="text-gray-700"
                  style={{
                    lineHeight: "30px",
                    letterSpacing: "-1px",
                  }}
                >
                  Visites sur rendez-vous, selon vos disponibilités
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <Ticket className="w-5 h-5 text-white" />
                </div>
                <p
                  className="text-gray-700"
                  style={{
                    lineHeight: "30px",
                    letterSpacing: "-1px",
                  }}
                >
                  Aucun frais de visite
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <p
                  className="text-gray-700"
                  style={{
                    lineHeight: "30px",
                    letterSpacing: "-1px",
                  }}
                >
                  Ouverture étendue, pour s&apos;adapter à vos contraintes
                  horaires
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
        </div>
      </div>
    </section>
  );
}
