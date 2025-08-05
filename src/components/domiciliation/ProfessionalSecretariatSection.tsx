import { Button } from "@/components/ui/button";
import { Mail, Phone, Printer, Package } from "lucide-react";

export default function ProfessionalSecretariatSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Secrétariat professionnel inclus dans votre domiciliation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              En plus d&apos;une adresse professionnelle, bénéficiez de services
              pratiques pour la gestion quotidienne de votre entreprise.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-3">
                <Mail className="w-6 h-6 mt-1" style={{ color: "#8ABF37" }} />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Réception et gestion du courrier
                  </h4>
                  <p className="text-gray-600">
                    Courrier et colis avec notification
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 mt-1" style={{ color: "#8ABF37" }} />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Permanence téléphonique
                  </h4>
                  <p className="text-gray-600">
                    Prise de messages et comptes-rendus
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Printer
                  className="w-6 h-6 mt-1"
                  style={{ color: "#8ABF37" }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Forfait mensuel
                  </h4>
                  <p className="text-gray-600">Impressions et photocopies</p>
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

          <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Package className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Image de secrétariat professionnel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
