import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/place.png"
          alt="Place background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Obtenir un devis pour un espace de coworking
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Remplissez le formulaire pour recevoir un devis personnalisé pour
          votre espace de coworking à Lomé.
        </p>
        <Button
          className="text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-200"
          style={{ backgroundColor: "#8ABF37" }}
        >
          Demander un devis
        </Button>
      </div>
    </section>
  );
}
