"use client";

import { useState } from "react";
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

const reviews: Review[] = [
  {
    id: "1",
    author: "DARK-SOUL",
    avatar: "KALI",
    rating: 5,
    date: "25 Mai 2024",
    text: "Un tres bon cadre",
    verified: true,
  },
  {
    id: "2",
    author: "Koffi KONDO",
    avatar: "KK",
    rating: 4,
    date: "15 Avril 2024",
    text: "It's a pleasure to use Open The Box conference's room for our training in Project Management.",
    verified: true,
  },
  {
    id: "3",
    author: "likem dobou",
    avatar: "ID",
    rating: 4,
    date: "9 Avril 2024",
    text: "Un cadre événementiel efficace",
    verified: true,
  },
  {
    id: "4",
    author: "Sarah M.",
    avatar: "SM",
    rating: 5,
    date: "3 Mai 2024",
    text: "Excellent service et espaces très bien équipés. Je recommande !",
    verified: true,
  },
  {
    id: "5",
    author: "Thomas B.",
    avatar: "TB",
    rating: 5,
    date: "20 Avril 2024",
    text: "Parfait pour nos réunions d'équipe. Personnel très accueillant.",
    verified: true,
  },
];

export default function GoogleReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ce que les professionnels pensent de nos espaces
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Left Side - Overall Rating */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                EXCELLENT
              </h3>

              {/* Stars */}
              <div className="flex justify-center lg:justify-start mb-4">
                {renderStars(Math.round(averageRating))}
              </div>

              <p className="text-gray-600 mb-6">
                Basée sur {reviews.length} avis
              </p>

              {/* Google Logo */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/googlelogo.png"
                  alt="Google"
                  width={120}
                  height={36}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Reviews Carousel */}
          <div className="lg:col-span-3 relative">
            <div className="overflow-hidden">
              <div className="flex space-x-6 transition-transform duration-500 ease-in-out">
                {getCurrentReviews().map((review, index) => (
                  <div
                    key={`${review.id}-${currentSlide}-${index}`}
                    className="flex-shrink-0 w-full md:w-80 bg-white rounded-xl p-6 shadow-sm"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${getAvatarColor(
                            review.author
                          )}`}
                        >
                          {review.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {review.author}
                          </h4>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>

                      {/* Google Icon */}
                      <div className="flex items-center space-x-1">
                        <Image
                          src="/google-favicon.png"
                          alt="Google"
                          width={16}
                          height={16}
                          className="w-4 h-4"
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
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          <span className="text-xs text-blue-500">Vérifié</span>
                        </div>
                      )}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:bg-gray-50 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
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
            className="border-2 hover:bg-gray-50 transition-all duration-200"
            style={{ borderColor: "#8ABF37", color: "#8ABF37" }}
            onClick={() => {
              // This would link to your actual Google Reviews page
              window.open(
                "https://www.google.com/search?q=Open+The+Box+Lomé+reviews",
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
