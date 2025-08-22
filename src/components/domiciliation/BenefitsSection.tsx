import { Shield, Clock, Users, Zap } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl text-gray-900 mb-6"
            style={
              {
                fontWeight: 600,
                lineHeight: "26px",
                letterSpacing: "-1.6px",
                "@media (min-width: 768px)": {
                  lineHeight: "40px",
                },
              } as React.CSSProperties
            }
          >
            Les avantages de la domiciliation Open The Box
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#8BBE3D" }}
            >
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Sécurité juridique
            </h3>
            <p className="text-gray-600">
              Adresse légale reconnue par toutes les autorités togolaises
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#8BBE3D" }}
            >
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Rapidité</h3>
            <p className="text-gray-600">
              Mise en place en 24h et traitement express de vos demandes
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#8BBE3D" }}
            >
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Accompagnement
            </h3>
            <p className="text-gray-600">
              Équipe dédiée pour vous guider dans vos démarches
            </p>
          </div>

          <div className="text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#8BBE3D" }}
            >
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Flexibilité
            </h3>
            <p className="text-gray-600">
              Contrats adaptés et résiliation possible à tout moment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
