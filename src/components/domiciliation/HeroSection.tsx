"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Open The Box – Le N°1 de la domiciliation d'entreprise au Togo",
    subtitle:
      "La solution pour obtenir une adresse professionnelle à Lomé et faciliter le lancement de votre entreprise.",
    cta: "Profiter de l'offre",
    image: "/reunion-d-affaires.jpg",
  },
  {
    id: 2,
    title: "Une adresse professionnelle pour votre entreprise",
    subtitle:
      "Bénéficiez d'une adresse de siège social reconnue et d'un service de réception de courrier professionnel.",
    cta: "Découvrir nos services",
    image: "/reunion-d-affaires.jpg",
  },
  {
    id: 3,
    title: "Simplifiez votre création d'entreprise",
    subtitle:
      "Open The Box vous accompagne dans toutes les démarches administratives pour créer votre entreprise en toute sérénité.",
    cta: "Commencer maintenant",
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
                  <h1
                    className="text-4xl md:text-6xl text-white mb-6"
                    style={{
                      fontWeight: 600,
                      lineHeight: "62px",
                      letterSpacing: "-3.1px",
                    }}
                  >
                    {slide.id === 1 && (
                      <>
                        Open The <span style={{ color: "#8ABF37" }}>Box</span> –
                        Le N°1 de la domiciliation d&apos;entreprise au Togo
                      </>
                    )}
                    {slide.id === 2 && (
                      <>
                        Une adresse{" "}
                        <span style={{ color: "#8ABF37" }}>
                          professionnelle
                        </span>{" "}
                        pour votre entreprise
                      </>
                    )}
                    {slide.id === 3 && (
                      <>
                        <span style={{ color: "#8ABF37" }}>Simplifiez</span>{" "}
                        votre création d&apos;entreprise
                      </>
                    )}
                  </h1>
                  <p
                    className="text-xl md:text-2xl text-white/90 mb-8"
                    style={{
                      lineHeight: "30px",
                      letterSpacing: "-1px",
                    }}
                  >
                    {slide.subtitle}
                  </p>
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
