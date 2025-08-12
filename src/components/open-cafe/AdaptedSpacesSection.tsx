import { Button } from "@/components/ui/button";
import { Users, Monitor, Calendar } from "lucide-react";

export default function AdaptedSpacesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Users className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Image des espaces adaptés</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Des espaces adaptés à chaque style de travail
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Que vous soyez entrepreneur solo, équipe en croissance ou
              freelance, nous avons l&apos;espace qu&apos;il vous faut pour
              optimiser votre productivité.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 mt-1" style={{ color: "#8ABF37" }} />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Coworking dynamique
                  </h4>
                  <p className="text-gray-600">
                    Espace ouvert pour la collaboration et le networking
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Monitor
                  className="w-6 h-6 mt-1"
                  style={{ color: "#8ABF37" }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Bureaux privés
                  </h4>
                  <p className="text-gray-600">
                    Espaces fermés pour un travail concentré
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar
                  className="w-6 h-6 mt-1"
                  style={{ color: "#8ABF37" }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Salles de réunion
                  </h4>
                  <p className="text-gray-600">
                    Équipées pour vos présentations et réunions
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-200"
              style={{ backgroundColor: "#8ABF37" }}
            >
              Profiter de l&apos;offre
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
