"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { H2 } from "../ui/typography";

const pricingPlans = [
  {
    name: "Pass Journée",
    price: "5.000 FCFA",
    period: "par jour",
    features: [
      "Accès à l'espace de coworking",
      "Wifi fibre optique",
      "Café et snacks inclus",
      "Impressions (10 pages)",
      "Accès aux salles de réunion (1h)",
    ],
  },
  {
    name: "Pass Semaine",
    price: "25.000 FCFA",
    period: "par semaine",
    features: [
      "Accès illimité 7j/7",
      "Wifi fibre optique",
      "Café et snacks illimités",
      "Impressions (50 pages)",
      "Salles de réunion (5h)",
      "Événements de networking",
    ],
  },
  {
    name: "Pass Mensuel",
    price: "85.000 FCFA",
    period: "par mois",
    features: [
      "Accès illimité 24h/24",
      "Wifi fibre optique",
      "Café et snacks illimités",
      "Impressions illimitées",
      "Salles de réunion (20h)",
      "Événements de networking",
      "Casier personnel",
      "Adresse professionnelle",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <H2>Des tarifs accessibles et flexibles</H2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{
              lineHeight: "30px",
              letterSpacing: "-1px",
            }}
          >
            Choisissez le forfait qui correspond à vos besoins. Pas
            d&apos;engagement, liberté totale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg ${
                index === 1 ? "scale-105" : ""
              }`}
              style={{
                ...(index === 1 && {
                  boxShadow: "0 0 0 2px #8BBE3D",
                }),
              }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "#8BBE3D" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-600"> {plan.period}</span>
                </div>
                {index === 1 && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    <span
                      style={{ backgroundColor: "#D1FAE5", color: "#8BBE3D" }}
                    >
                      Populaire
                    </span>
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check
                      className="w-5 h-5 mt-0.5"
                      style={{ color: "#8BBE3D" }}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 text-lg hover:opacity-90 transition-all duration-200 ${
                  index === 1
                    ? "text-white"
                    : "bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white"
                }`}
                style={{
                  backgroundColor: index === 1 ? "#8BBE3D" : "white",
                  color: index === 1 ? "white" : "#8BBE3D",
                  borderColor: "#8BBE3D",
                }}
              >
                Choisir ce forfait
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Besoin d&apos;un forfait personnalisé ? Contactez-nous !
          </p>
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
      </div>
    </section>
  );
}
