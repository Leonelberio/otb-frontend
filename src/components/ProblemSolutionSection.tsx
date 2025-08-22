import { Button } from "@/components/ui/button";

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl md:text-5xl text-gray-900 mb-6"
          style={{
            fontWeight: 600,
            lineHeight: "40px",
            letterSpacing: "-3px",
          }}
        >
          Arrêter de souffrir pour trouver un espace !
        </h2>

        <h3
          className="text-xl md:text-2xl text-gray-700 mb-8"
          style={{
            lineHeight: "30px",
            letterSpacing: "-1px",
          }}
        >
          Vous organisez une réunion, une formation, un événement ?<br />
          Vous cherchez un bureau calme pour travailler ?
        </h3>

        <p
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          style={{
            lineHeight: "30px",
            letterSpacing: "-1px",
          }}
        >
          Open The Box (OTB) vous montre toutes les options d&apos;espaces
          disponibles, vous permet de réserver en 3 clics et vous accueille dans
          les meilleures conditions.
        </p>

        <Button
          className="text-white hover:opacity-90"
          style={{ 
            backgroundColor: "#8BBE3D",
            fontSize: "16px",
            padding: "16px 32px"
          }}
        >
          Réserver un espace
        </Button>
      </div>
    </section>
  );
}
