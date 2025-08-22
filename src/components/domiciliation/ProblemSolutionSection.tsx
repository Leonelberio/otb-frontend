import { Button } from "@/components/ui/button";

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
              className="text-4xl md:text-5xl text-gray-900 mb-6"
              style={{
                fontWeight: 600,
                lineHeight: "40px",
                letterSpacing: "-3px"
              }}
            >
            Facilitez la création de votre entreprise au Togo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{
                lineHeight: "30px",
                letterSpacing: "-1px",
              }}>
            Domiciliez votre entreprise et obtenez une adresse professionnelle
            reconnue pour vos démarches de création (CFE, OTR, CNSS…) et
            l&apos;ouverture de votre compte bancaire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Pourquoi choisir la domiciliation Open The Box ?
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
                    Adresse professionnelle légale
                  </h4>
                  <p className="text-gray-600">
                    Une adresse reconnue par les autorités pour tous vos
                    documents officiels
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
                    Réception de courrier
                  </h4>
                  <p className="text-gray-600">
                    Nous recevons et vous transmettons tout votre courrier
                    professionnel
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
                    Accompagnement juridique
                  </h4>
                  <p className="text-gray-600">
                    Conseils et assistance pour vos démarches administratives
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
                    Flexibilité totale
                  </h4>
                  <p className="text-gray-600">
                    Contrats adaptés à vos besoins, sans engagement long terme
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                className="text-white px-8 py-3 text-lg hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: "#8BBE3D" }}
              >
                Démarrer
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
                <span>Adresse professionnelle légale</span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8BBE3D" }}
                ></span>
                <span>Réception et transmission du courrier</span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8BBE3D" }}
                ></span>
                <span>Support administratif</span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8BBE3D" }}
                ></span>
                <span>Accès à nos espaces de travail</span>
              </li>
              <li className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#8BBE3D" }}
                ></span>
                <span>Conseils juridiques de base</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
