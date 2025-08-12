import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SafeText from "@/components/ui/SafeText";

export default function BlogHeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: "#1F1F1F" }}
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full" style={{ backgroundColor: "#1F1F1F" }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Blog Open The Box
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                <SafeText as="span">
                  Découvrez nos articles, conseils et actualités sur la location
                  d&apos;espaces professionnels, la domiciliation
                  d&apos;entreprise et le coworking au Togo.
                </SafeText>
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-4 hover:opacity-90 transition-opacity w-fit"
                style={{ backgroundColor: "#8ABF37" }}
              >
                Découvrir nos articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-full min-h-[600px]">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/reunion-d-affaires.jpg"
                    alt="Blog Open The Box"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
