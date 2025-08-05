import { FileText, CheckCircle, Building2, Mail } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "1. Demande en ligne",
    description: "Remplissez notre formulaire simple en 5 minutes",
  },
  {
    icon: CheckCircle,
    title: "2. Validation",
    description: "Notre équipe valide votre dossier sous 24h",
  },
  {
    icon: Building2,
    title: "3. Mise en place",
    description: "Votre adresse professionnelle est activée",
  },
  {
    icon: Mail,
    title: "4. Accompagnement",
    description: "Nous vous accompagnons dans vos démarches",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En 4 étapes simples, obtenez votre adresse professionnelle et
            démarrez votre activité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "#8ABF37" }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
