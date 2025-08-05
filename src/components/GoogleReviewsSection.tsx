"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

interface GoogleReviewsData {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export default function GoogleReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Google reviews on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/google-reviews");

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data: GoogleReviewsData = await response.json();

        setReviews(data.reviews);
        setAverageRating(data.averageRating);
        setTotalReviews(data.totalReviews);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        // Fallback to real reviews data
        setReviews([
          {
            id: "1",
            author: "Parfait Toke",
            avatar: "PT",
            rating: 5,
            date: "il y a 9 mois",
            text: "Emplacement idéal si vous voulez faire un évènement ou un meeting entre communautés. Personnellement je suis fier d'avoir organisé le Daytona Developers Club Tour à Open The box",
            verified: true,
          },
          {
            id: "2",
            author: "Kokou François AGBAGOU",
            avatar: "KF",
            rating: 5,
            date: "il y a 4 mois",
            text: "C'est un endroit très cool et sympa que je recommande vivement à toutes ces personnes qui aimes là découverte",
            verified: true,
          },
          {
            id: "3",
            author: "Tido BraxomAx ECHICAFA",
            avatar: "TB",
            rating: 5,
            date: "il y a 2 mois",
            text: "Cadre professionnel et calme bien situé pour les rencontres et formations.",
            verified: true,
          },
          {
            id: "4",
            author: "Gabriel Marlon",
            avatar: "GM",
            rating: 5,
            date: "il y a un an",
            text: "L'emplacement est stratégique ; c'est bien positionné ; accès facile. Pour toutes les fois ou j'ai été à une conférence a OTB ; j'étais dans un confort parfait ; le cadre est très conviviale. Félicitations",
            verified: true,
          },
          {
            id: "5",
            author: "Mélissa Akemakou",
            avatar: "MA",
            rating: 5,
            date: "il y a un an",
            text: "J'ai ouvert i l é Consulting, mon cabinet conseil en RSE depuis le 10 octobre 2023. J'ai le plaisir d'être herbergée dans les locaux Open the box ! En plus de pouvoir beneficier de tarifs preferentiels pour des bureaux et leurs salles de...",
            verified: true,
          },
          {
            id: "6",
            author: "fabrice kponsou",
            avatar: "FK",
            rating: 5,
            date: "il y a 2 ans",
            text: "La salle de conférence est nickel, gros clim de 1,5 M 😅, grande TV pour des présentations... franchement c'est nickel. Mais wallah le haut, 😍 j'adore. Très sympa. Je recommande fortement.",
            verified: true,
          },
        ]);
        setAverageRating(5.0);
        setTotalReviews(6);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const totalSlides = Math.ceil(reviews.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentReviews = () => {
    const startIndex = currentSlide * 3;
    const endIndex = startIndex + 3;
    const currentReviews = reviews.slice(startIndex, endIndex);

    // Fill with first reviews if we don't have enough for the last slide
    if (currentReviews.length < 3) {
      const remaining = 3 - currentReviews.length;
      currentReviews.push(...reviews.slice(0, remaining));
    }

    return currentReviews;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-indigo-500",
      "bg-pink-500",
      "bg-yellow-500",
      "bg-teal-500",
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des avis clients...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ce que les professionnels pensent de nos espaces
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Left Side - Overall Rating */}
          <div className="lg:col-span-1 text-center lg:text-left order-2 lg:order-1">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                EXCELLENT
              </h3>

              {/* Stars */}
              <div className="flex justify-center lg:justify-start mb-4">
                {renderStars(Math.round(averageRating))}
              </div>

              <p className="text-gray-600 mb-6">
                Basée sur {totalReviews} avis
              </p>

              {/* Google Logo */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/googlelogo.png"
                  alt="Google"
                  width={120}
                  height={36}
                  className="h-6 lg:h-8 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Reviews Carousel */}
          <div className="lg:col-span-3 relative order-1 lg:order-2">
            <div className="overflow-hidden">
              <div className="flex space-x-4 lg:space-x-6 transition-transform duration-500 ease-in-out">
                {getCurrentReviews().map((review, index) => (
                  <div
                    key={`${review.id}-${currentSlide}-${index}`}
                    className="flex-shrink-0 w-80 sm:w-96 lg:w-80 xl:w-96 bg-white rounded-xl p-4 lg:p-6 shadow-sm"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm lg:text-base ${getAvatarColor(
                            review.author
                          )}`}
                        >
                          {review.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm lg:text-base">
                            {review.author}
                          </h4>
                          <p className="text-xs lg:text-sm text-gray-500">
                            {review.date}
                          </p>
                        </div>
                      </div>

                      {/* Google Icon */}
                      <div className="flex items-center space-x-1">
                        <Image
                          src="/google-favicon.png"
                          alt="Google"
                          width={16}
                          height={16}
                          className="w-3 h-3 lg:w-4 lg:h-4"
                        />
                        <span className="text-xs text-gray-500">Google</span>
                      </div>
                    </div>

                    {/* Rating and Verification */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      {review.verified && (
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
                          <span className="text-xs text-blue-500">Vérifié</span>
                        </div>
                      )}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Mobile Navigation - Swipe indicators */}
            <div className="md:hidden flex justify-center mt-6 space-x-2">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Précédent
              </Button>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                Suivant
              </Button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 lg:mt-8 space-x-2">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === i
                      ? "bg-green-500 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 hover:bg-gray-50 transition-all duration-200 text-sm lg:text-base"
            style={{ borderColor: "#8ABF37", color: "#8ABF37" }}
            onClick={() => {
              // Link to actual Open The Box Google Maps listing
              window.open(
                "https://www.google.com/maps/place/Open+The+Box/@6.1864867,1.2010557,17z/data=!4m8!3m7!1s0x102159a93f0e5669:0xa2c4e2b70eb969d2!8m2!3d6.1864867!4d1.2010557!9m1!1b1!16s%2Fg%2F11tf1sf7m2?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D",
                "_blank"
              );
            }}
          >
            Voir tous les avis Google
          </Button>
        </div>
      </div>
    </section>
  );
}
