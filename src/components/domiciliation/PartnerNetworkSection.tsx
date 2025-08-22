import { Button } from "@/components/ui/button";
import { Handshake, Building2, CreditCard, Target } from "lucide-react";
import { H2 } from "../ui/typography";

export default function PartnerNetworkSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <H2>Des avantages chez un réseau de partenaires</H2>
            <p className="text-lg text-gray-600 mb-8">
              Open The Box vous donne accès à un réseau de partenaires
              sélectionnés pour vous accompagner à chaque étape : création
              d&apos;entreprise, ouverture de compte bancaire, paiements en
              ligne, marketing et communication, ou autres besoins clés.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Avec la domiciliation d&apos;entreprise, bénéficiez
              d&apos;avantages exclusifs négociés, activables selon vos besoins.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-3">
                <Building2
                  className="w-6 h-6 mt-1"
                  style={{ color: "#8BBE3D" }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Création d&apos;entreprise
                  </h4>
                  <p className="text-gray-600">Accompagnement complet</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CreditCard
                  className="w-6 h-6 mt-1"
                  style={{ color: "#8BBE3D" }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Ouverture de compte bancaire
                  </h4>
                  <p className="text-gray-600">Paiements en ligne</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="w-6 h-6 mt-1" style={{ color: "#8BBE3D" }} />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Marketing et communication
                  </h4>
                  <p className="text-gray-600">Autres besoins clés</p>
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
              <Handshake className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Image de réseau de partenaires</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
