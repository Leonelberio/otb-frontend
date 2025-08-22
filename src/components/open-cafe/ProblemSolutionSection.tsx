import { Button } from "@/components/ui/button";
import { H2 } from "../ui/typography";

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <H2>Arrêter de travailler seul !</H2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{
              lineHeight: "30px",
              letterSpacing: "-1px",
            }}
          >
            Vous êtes entrepreneur, freelance ou télétravailleur ? Rejoignez
            notre communauté de professionnels dynamiques dans un espace de
            coworking moderne et convivial. Travaillez, collaborez et développez
            votre réseau dans un environnement stimulant.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Pourquoi choisir l&apos;Open Café ?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Espace de travail flexible
                  </h4>
                  <p className="text-gray-600">
                    Bureaux partagés, salles de réunion et espaces de détente
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Communauté dynamique
                  </h4>
                  <p className="text-gray-600">
                    Réseautage et collaboration avec d&apos;autres
                    professionnels
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Services inclus
                  </h4>
                  <p className="text-gray-600">
                    Wifi haut débit, café, impressions et événements
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1"
                  style={{ backgroundColor: "#8BBE3D" }}
                >
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Horaires flexibles
                  </h4>
                  <p className="text-gray-600">
                    Accès 7j/7 avec des forfaits adaptés à vos besoins
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                className="text-white px-8 py-3 text-lg hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: "#8BBE3D" }}
              >
                Profiter de l&apos;offre
              </Button>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Ce que vous obtenez :
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8BBE3D" }}
                ></span>
                <span>Espace de travail dédié</span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8BBE3D" }}
                ></span>
                <span>Wifi fibre optique 1Gbps</span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8BBE3D" }}
                ></span>
                <span>Café et snacks inclus</span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8BBE3D" }}
                ></span>
                <span>Salles de réunion</span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8BBE3D" }}
                ></span>
                <span>Événements de networking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
