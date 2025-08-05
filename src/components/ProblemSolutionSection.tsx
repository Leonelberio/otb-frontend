import { Button } from "@/components/ui/button";

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Arrêter de souffrir pour trouver un espace !
        </h2>

        <h3 className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Vous organisez une réunion, une formation, un événement ?<br />
          Vous cherchez un bureau calme pour travailler ?
        </h3>

        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
          Open The Box (OTB) vous montre toutes les options d&apos;espaces
          disponibles, vous permet de réserver en 3 clics et vous accueille dans
          les meilleures conditions.
        </p>

        <Button
          className="text-white px-8 py-4 text-lg hover:opacity-90"
          style={{ backgroundColor: "#8ABF37" }}
        >
          Réserver un espace
        </Button>
      </div>
    </section>
  );
}
