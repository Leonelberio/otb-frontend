"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { H1, P } from "@/components/ui/typography";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Le cadre idéal pour entreprendre et développer un business",
    subtitle:
      "Un espace de coworking moderne et convivial où entrepreneurs, freelances et équipes peuvent travailler, collaborer et réseauter dans un environnement stimulant.",
    cta: "Profiter de l'offre",
    image: "/reunion-d-affaires.jpg",
  },
  {
    id: 2,
    title: "Un espace de travail flexible et moderne",
    subtitle:
      "Bureaux privés, espaces de coworking, salles de réunion et zones de détente pour répondre à tous vos besoins professionnels.",
    cta: "Découvrir nos espaces",
    image: "/reunion-d-affaires.jpg",
  },
  {
    id: 3,
    title: "Rejoignez une communauté d'entrepreneurs",
    subtitle:
      "Connectez-vous avec d'autres professionnels, participez à des événements networking et développez votre réseau business.",
    cta: "Rejoindre la communauté",
    image: "/reunion-d-affaires.jpg",
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
            backgroundColor: "#1f1f1f",
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <div className="relative z-10 w-full h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="max-w-2xl">
                  <H1>
                    {slide.id === 1 && (
                      <>
                        Le cadre <span style={{ color: "#8ABF37" }}>idéal</span>{" "}
                        pour entreprendre et développer un business
                      </>
                    )}
                    {slide.id === 2 && (
                      <>
                        Un espace de travail{" "}
                        <span style={{ color: "#8ABF37" }}>flexible</span> et
                        moderne
                      </>
                    )}
                    {slide.id === 3 && (
                      <>
                        Rejoignez une{" "}
                        <span style={{ color: "#8ABF37" }}>communauté</span>{" "}
                        d&apos;entrepreneurs
                      </>
                    )}
                  </H1>
                  <P className="text-xl md:text-2xl text-white/90 mb-8">
                    {slide.subtitle}
                  </P>
                  <Button
                    className="text-white transition-all duration-200"
                    style={{
                      backgroundColor: "#8BBE3D",
                      fontSize: "16px",
                      padding: "16px 32px",
                      border: "2px solid #8BBE3D",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#8BBE3D";
                      e.currentTarget.style.borderColor = "#8BBE3D";
                    }}
                  >
                    {slide.cta}
                  </Button>
                </div>

                {/* Right Side - Image */}
                <div className="hidden md:block">
                  <div className="relative h-96 w-full">
                    <div
                      className="w-full h-full rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: `url('${slide.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>
                </div>
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
