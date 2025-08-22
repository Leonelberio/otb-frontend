import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function VisitSection() {
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
                letterSpacing: "-3px"
              }}
            >
              Visite gratuite, sur rendez-vous 7j/7
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez notre espace de coworking et rencontrez notre
              communauté. Nous vous accueillons tous les jours pour une visite
              personnalisée.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-3">
                <Calendar
                  className="w-6 h-6 mt-1"
                  style={{ color: "#8BBE3D" }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Visites sur rendez-vous
                  </h4>
                  <p className="text-gray-600">
                    Selon vos disponibilités, 7j/7
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 mt-1" style={{ color: "#8BBE3D" }} />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Horaires flexibles
                  </h4>
                  <p className="text-gray-600">De 8h à 20h, même le week-end</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 mt-1" style={{ color: "#8BBE3D" }} />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Rencontre avec la communauté
                  </h4>
                  <p className="text-gray-600">
                    Découvrez l&apos;ambiance et les membres
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-200"
              style={{ backgroundColor: "#8BBE3D" }}
            >
              Profiter de l&apos;offre
            </Button>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Image de visite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
