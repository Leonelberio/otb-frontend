import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Des tarifs transparents et accessibles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pas de frais cachés, pas de surprise. Nos tarifs sont clairs et
            adaptés à tous les budgets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Pourquoi nos tarifs sont avantageux ?
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5" style={{ color: "#8ABF37" }} />
                <span className="text-gray-700">
                  Pas de frais d&apos;installation
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5" style={{ color: "#8ABF37" }} />
                <span className="text-gray-700">
                  Résiliation gratuite à tout moment
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5" style={{ color: "#8ABF37" }} />
                <span className="text-gray-700">
                  Facturation mensuelle simple
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5" style={{ color: "#8ABF37" }} />
                <span className="text-gray-700">
                  Réduction pour engagement annuel
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Tarifs indicatifs :
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Domiciliation Simple</span>
                <span className="font-bold">25.000 FCFA/mois</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Domiciliation Premium</span>
                <span className="font-bold">45.000 FCFA/mois</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Domiciliation Business</span>
                <span className="font-bold">75.000 FCFA/mois</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Offre spéciale :</strong> -20% sur le premier mois pour
                toute nouvelle inscription !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
