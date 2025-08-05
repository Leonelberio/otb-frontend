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
            Le cadre idéal pour entreprendre et développer un business
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Un espace de coworking moderne et convivial où entrepreneurs,
            freelances et équipes peuvent travailler, collaborer et réseauter
            dans un environnement stimulant.
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
