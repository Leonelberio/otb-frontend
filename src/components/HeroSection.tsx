"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title:
      "Open The Box – Le N°1 de la location d'espaces professionnels au Togo",
    subtitle:
      "Bureaux, salles de conférence ou espaces de réception à louer facilement à Lomé.",
    cta: "Réserver un espace",
    backgroundImage: "/reunion-d-affaires.jpg",
    gradient: "linear-gradient(to bottom right, #8ABF37, #6BA02E)",
  },
  {
    id: 2,
    title: "Des espaces équipés et 100% opérationnels",
    subtitle:
      "Concentrez-vous sur votre réunion, Open The Box s'occupe du reste. Chaque espace est prêt à l'emploi.",
    cta: "Découvrir nos espaces",
    backgroundImage: "/reunion-d-affaires.jpg",
    gradient: "linear-gradient(to bottom right, #8ABF37, #6BA02E)",
  },
  {
    id: 3,
    title: "Visite gratuite, sur rendez-vous 7j/7",
    subtitle:
      "Open The Box vous accueille tous les jours, y compris le week-end, sur simple demande.",
    cta: "Prendre rendez-vous",
    backgroundImage: "/reunion-d-affaires.jpg",
    gradient: "linear-gradient(to bottom right, #8ABF37, #6BA02E)",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: slide.gradient,
          }}
        >
          {/* Background Image */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20">
            <div
              className="w-full h-full bg-white/10 rounded-tl-3xl"
              style={{
                backgroundImage: `url('${slide.backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>

                <Button
                  className="text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-200"
                  style={{ backgroundColor: "#8ABF37" }}
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        onClick={prevSlide}
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-200 z-20"
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        onClick={nextSlide}
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-200 z-20"
        disabled={isTransitioning}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-500 ease-linear"
          style={{
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}
