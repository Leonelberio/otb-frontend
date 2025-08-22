"use client";

import { Button } from "@/components/ui/button";
import { H2, H3, P } from "@/components/ui/typography";

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <H2>Arrêter de souffrir pour trouver un espace !</H2>

        <H3 className="text-gray-700 mb-8">
          Vous organisez une réunion, une formation, un événement ?<br />
          Vous cherchez un bureau calme pour travailler ?
        </H3>

        <P className="md:text-xl mb-10 max-w-3xl mx-auto">
          Open The Box (OTB) vous montre toutes les options d&apos;espaces
          disponibles, vous permet de réserver en 3 clics et vous accueille dans
          les meilleures conditions.
        </P>

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
    </section>
  );
}
