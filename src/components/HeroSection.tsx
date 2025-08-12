"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HeroSlide {
  title: string;
  subtitle: string;
  cta: string;
  backgroundImage: string;
}

const heroSlides: HeroSlide[] = [
  {
    title:
      "Open The Box – Le N°1 de la location d'espaces professionnels au Togo",
    subtitle:
      "Bureaux, salles de conférence ou espaces de réception à louer facilement à Lomé.",
    cta: "Réserver un espace",
    backgroundImage: "/reunion-d-affaires.jpg",
  },
  {
    title: "Des espaces professionnels pour tous vos besoins",
    subtitle:
      "De la réunion d'équipe à l'événement d'entreprise, trouvez l'espace idéal.",
    cta: "Réserver un espace",
    backgroundImage: "/reunion-d-affaires.jpg",
  },
  {
    title: "Flexibilité et professionnalisme au service de votre réussite",
    subtitle: "Location à l'heure, à la journée ou au mois selon vos besoins.",
    cta: "Réserver un espace",
    backgroundImage: "/reunion-d-affaires.jpg",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
              <div className="relative">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <Button
                      size="lg"
                      className="text-lg px-8 py-4 hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#8ABF37" }}
                    >
                      {slide.cta}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-full min-h-[600px]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src={slide.backgroundImage}
                        alt="Espace professionnel"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-4">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
