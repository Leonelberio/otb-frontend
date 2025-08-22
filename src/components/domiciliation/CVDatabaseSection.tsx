import { Button } from "@/components/ui/button";
import { Users, GraduationCap, Briefcase, RefreshCw } from "lucide-react";
import { H2 } from "../ui/typography";

export default function CVDatabaseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Users className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Image de CVthèque</p>
            </div>
          </div>

          <div>
            <H2>CVthèque pour vous aider à recruter au Togo</H2>
            <p className="text-lg text-gray-600 mb-8">
              En domiciliant votre entreprise chez Open The Box, accédez à notre
              base de données de profils qualifiés : stagiaires, juniors ou
              seniors, classés par secteur d&apos;activité et niveau
              d&apos;expérience.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Notre CVthèque est régulièrement mise à jour pour vous aider à
              recruter rapidement, que ce soit pour des missions temporaires ou
              des postes permanents.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <GraduationCap
                  className="w-6 h-6"
                  style={{ color: "#8BBE3D" }}
                />
                <span className="text-gray-700">
                  Profils classés par secteur d&apos;activité
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="w-6 h-6" style={{ color: "#8BBE3D" }} />
                <span className="text-gray-700">
                  Différents niveaux d&apos;expérience
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-6 h-6" style={{ color: "#8BBE3D" }} />
                <span className="text-gray-700">
                  Base de données régulièrement mise à jour
                </span>
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
