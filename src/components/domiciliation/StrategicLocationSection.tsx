import { Button } from "@/components/ui/button";
import { MapPin, Building, Users } from "lucide-react";

export default function StrategicLocationSection() {
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
              Un emplacement stratégique pour votre société à Lomé
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Open The Box est situé à Agbalépédogan, Lomé, à proximité des
              principales institutions publiques : Université de Lomé, OTR,
              CNSS, ministères, ambassades et autres institutions publiques.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Cette localisation idéale vous permet d&apos;améliorer
              l&apos;image de votre entreprise et de faciliter vos démarches
              administratives.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6" style={{ color: "#8BBE3D" }} />
                <span className="text-gray-700">
                  Proximité des institutions publiques
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Building className="w-6 h-6" style={{ color: "#8BBE3D" }} />
                <span className="text-gray-700">
                  Zone d&apos;affaires reconnue
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6" style={{ color: "#8BBE3D" }} />
                <span className="text-gray-700">Accès facile et sécurisé</span>
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
              <p className="text-lg">Image de localisation stratégique</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
