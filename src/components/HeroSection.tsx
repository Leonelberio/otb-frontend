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
    backgroundColor: "#000000",
  },
  {
    id: 2,
    title: "Des espaces équipés et 100% opérationnels",
    subtitle:
      "Concentrez-vous sur votre réunion, Open The Box s'occupe du reste. Chaque espace est prêt à l'emploi.",
    cta: "Découvrir nos espaces",
    backgroundImage: "/reunion-d-affaires.jpg",
    backgroundColor: "#000000",
  },
  {
    id: 3,
    title: "Visite gratuite, sur rendez-vous 7j/7",
    subtitle:
      "Open The Box vous accueille tous les jours, y compris le week-end, sur simple demande.",
    cta: "Prendre rendez-vous",
    backgroundImage: "/reunion-d-affaires.jpg",
    backgroundColor: "#000000",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (slideIndex: number) => {
    setIsTransitioning(true);
    setCurrentSlide(slideIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out`}
          style={{
            backgroundColor: slide.backgroundColor,
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          {/* Background Image - Full width on all devices */}
          <div className="absolute inset-0 h-full opacity-20">
            <div
              className="w-full h-full bg-white/10"
              style={{
                backgroundImage: `url('${slide.backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
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
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40 transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        onClick={nextSlide}
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/40 transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
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
