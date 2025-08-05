import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/reunion-d-affaires.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Open The Box – Le N°1 de la domiciliation d&apos;entreprise au Togo
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            La solution pour obtenir une adresse professionnelle à Lomé et
            faciliter le lancement de votre entreprise.
          </p>
          <Button
            className="text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-200"
            style={{ backgroundColor: "#8ABF37" }}
          >
            Profiter de l&apos;offre
          </Button>
        </div>
      </div>
    </section>
  );
}
