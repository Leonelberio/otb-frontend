import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { H2 } from "../ui/typography";

const services = [
  "Hébergement du siège social et/ou adresse commerciale de votre société",
  "Permanence téléphonique, prise de messages et comptes-rendus",
  "Réception, tri et mise à disposition de votre courrier en temps réel",
  "15% de réduction sur les espaces de location Open The Box",
  "Forfait mensuel d&apos;impressions et de photocopies",
  "Veille et newsletter sur le climat des affaires et les opportunités au Togo",
  "Accès à une base de données de CV (CVthèque)",
  "Avantages et réductions chez partenaires (avocat, comptable, banque etc.)",
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <H2>Nos services de domiciliation</H2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{
              lineHeight: "30px",
              letterSpacing: "-1px",
            }}
          >
            Une solution complète pour domicilier votre entreprise et bénéficier
            de tous nos services d&apos;accompagnement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Domiciliation d&apos;entreprise
              </h3>
              <p className="text-4xl font-bold" style={{ color: "#8BBE3D" }}>
                240.000 F CFA
              </p>
              <p className="text-lg text-gray-600">par an</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 flex-shrink-0"
                    style={{ backgroundColor: "#8BBE3D" }}
                  >
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                className="text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: "#8BBE3D" }}
              >
                Continuer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
