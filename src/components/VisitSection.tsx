import { Button } from "@/components/ui/button";
import { Calendar, Ticket, Clock } from "lucide-react";

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
                backgroundImage: `url('/reunion-d-affaires-de-rendu-3d-et-salle-de-travail-sur-un-immeuble-de-bureaux (1).jpg')`,
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Visite gratuite, sur rendez-vous 7j/7
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Open The Box vous accueille tous les jours, y compris le week-end,
              sur simple demande.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start space-x-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#8ABF37" }}
                >
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Visites sur rendez-vous, selon vos disponibilités
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#8ABF37" }}
                >
                  <Ticket className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Aucun frais de visite
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#8ABF37" }}
                >
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ouverture étendue, pour s&apos;adapter à vos contraintes
                  horaires
                </p>
              </div>
            </div>

            <Button
              className="text-white px-8 py-4 text-lg hover:opacity-90"
              style={{ backgroundColor: "#8ABF37" }}
            >
              Réserver un espace
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
