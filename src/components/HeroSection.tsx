import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] flex items-center"
      style={{
        background: "linear-gradient(to bottom right, #8ABF37, #6BA02E)",
      }}
    >
      {/* Background Image */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20">
        <div
          className="w-full h-full bg-white/10 rounded-tl-3xl"
          style={{
            backgroundImage: `url('/reunion-d-affaires.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Open The Box – Le N°1 de la location d&apos;espaces professionnels
              au Togo
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Bureaux, salles de conférence ou espaces de réception à louer
              facilement à Lomé.
            </p>

            <Button
              className="text-white px-8 py-4 text-lg hover:opacity-90"
              style={{ backgroundColor: "#8ABF37" }}
            >
              Réserver un espace
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
