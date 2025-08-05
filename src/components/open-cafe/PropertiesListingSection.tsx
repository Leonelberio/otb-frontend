"use client";

import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const coworkingSpaces = [
  {
    id: 1,
    name: "Espace Open",
    description: "Zone de coworking principale avec bureaux partagés",
    image: "/reunion-d-affaires.jpg",
    category: "Coworking",
  },
  {
    id: 2,
    name: "Salle Meeting",
    description: "Salle de réunion équipée pour vos présentations",
    image: "/reunion-d-affaires.jpg",
    category: "Réunion",
  },
  {
    id: 3,
    name: "Café Lounge",
    description: "Espace détente avec café et networking",
    image: "/reunion-d-affaires.jpg",
    category: "Détente",
  },
  {
    id: 4,
    name: "Bureau Privé",
    description: "Bureau individuel pour un travail concentré",
    image: "/reunion-d-affaires.jpg",
    category: "Privé",
  },
  {
    id: 5,
    name: "Espace Event",
    description: "Salle événementielle pour vos conférences",
    image: "/reunion-d-affaires.jpg",
    category: "Événement",
  },
  {
    id: 6,
    name: "Terrasse",
    description: "Terrasse extérieure pour travailler au soleil",
    image: "/reunion-d-affaires.jpg",
    category: "Extérieur",
  },
];

export default function PropertiesListingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Découvrez nos espaces de coworking
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des espaces adaptés à tous les styles de travail, du coworking
            dynamique aux bureaux privés.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12 py-8"
        >
          {coworkingSpaces.map((space) => (
            <SwiperSlide key={space.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {space.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {space.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{space.description}</p>
                  <Button
                    className="w-full text-white hover:opacity-90 transition-all duration-200"
                    style={{ backgroundColor: "#8ABF37" }}
                  >
                    Réserver
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <Button
            className="text-white px-8 py-4 text-lg hover:opacity-90 transition-all duration-200"
            style={{ backgroundColor: "#8ABF37" }}
          >
            Profiter de l&apos;offre
          </Button>
        </div>
      </div>
    </section>
  );
}
