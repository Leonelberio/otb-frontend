import { Button } from "@/components/ui/button";
import { Newspaper, TrendingUp, Calendar, FileText } from "lucide-react";

export default function BusinessIntelligenceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Newspaper className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Image de veille business</p>
            </div>
          </div>

          <div>
            <h2 
              className="text-4xl md:text-5xl text-gray-900 mb-6"
              style={{
                fontWeight: 600,
                lineHeight: "40px",
                letterSpacing: "-3px"
              }}
            >
              Veille et newsletter sur le business au Togo
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Grâce à la domiciliation, recevez nos newsletters pour rester
              informé des évolutions du business au Togo.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-3">
                <TrendingUp
                  className="w-6 h-6 mt-1"
                  style={{ color: "#8BBE3D" }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Évolutions réglementaires
                  </h4>
                  <p className="text-gray-600">
                    Création, fiscalité, CNSS, etc.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar
                  className="w-6 h-6 mt-1"
                  style={{ color: "#8BBE3D" }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Rappels des dates importantes
                  </h4>
                  <p className="text-gray-600">
                    Événements, échéances, déclarations, etc.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText
                  className="w-6 h-6 mt-1"
                  style={{ color: "#8BBE3D" }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Appels d&apos;offres
                  </h4>
                  <p className="text-gray-600">
                    Publics et privés à ne pas manquer
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
        </div>
      </div>
    </section>
  );
}
