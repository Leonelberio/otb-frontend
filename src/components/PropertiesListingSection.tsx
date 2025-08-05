"use client";

import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const dummyProperties = [
  {
    id: "1",
    title: "Salle de Réunion Executive",
    type: "Salle de conférence premium",
    price: "15 000 F/h",
    capacity: "12 pers",
    location: "Rue de la Paix, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Salle de conférence",
  },
  {
    id: "2",
    title: "Bureau Privé Moderne",
    type: "Espace de travail individuel",
    price: "8 000 F/j",
    capacity: "2 pers",
    location: "Avenue de la Libération, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Bureaux",
  },
  {
    id: "3",
    title: "Salle de Formation",
    type: "Espace formation et workshop",
    price: "25 000 F/j",
    capacity: "25 pers",
    location: "Boulevard du 13 Janvier, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Salle de formation",
  },
  {
    id: "4",
    title: "Open Space Collaboratif",
    type: "Espace de coworking ouvert",
    price: "3 000 F/j",
    capacity: "1 pers",
    location: "Quartier Adidogomé, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Bureaux",
  },
  {
    id: "5",
    title: "Salle de Réception VIP",
    type: "Espace événementiel haut de gamme",
    price: "45 000 F/j",
    capacity: "50 pers",
    location: "Centre-ville, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Salle de réception",
  },
  {
    id: "6",
    title: "Bureau d'Équipe",
    type: "Espace privé pour équipe",
    price: "20 000 F/j",
    capacity: "6 pers",
    location: "Kodjoviakopé, Lomé",
    image: "/reunion-d-affaires.jpg",
    category: "Bureaux",
  },
];

export default function PropertiesListingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Découvrez nos salles et bureaux en images
          </h2>
        </div>

        {/* Properties Carousel */}
        <div className="mb-12">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="properties-swiper"
          >
            {dummyProperties.map((property) => (
              <SwiperSlide key={property.id}>
                <PropertyCard {...property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            className="text-white px-8 py-4 text-lg hover:opacity-90"
            style={{ backgroundColor: "#8ABF37" }}
          >
            Réserver un espace
          </Button>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .properties-swiper .swiper-pagination-bullet-active {
          background-color: #8abf37;
        }
      `}</style>
    </section>
  );
}
