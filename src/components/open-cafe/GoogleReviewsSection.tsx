import { Star } from "lucide-react";
import Image from "next/image";
import { H2 } from "../ui/typography";

const reviews = [
  {
    id: 1,
    name: "Sarah K.",
    rating: 5,
    text: "Excellent espace de coworking ! L'ambiance est parfaite pour travailler et le wifi est ultra-rapide.",
    date: "Il y a 2 semaines",
  },
  {
    id: 2,
    name: "Marc D.",
    rating: 5,
    text: "Très bon accueil et équipements de qualité. La communauté est dynamique et professionnelle.",
    date: "Il y a 1 mois",
  },
  {
    id: 3,
    name: "Fatou L.",
    rating: 5,
    text: "Parfait pour mon activité freelance. Les salles de réunion sont bien équipées.",
    date: "Il y a 3 semaines",
  },
  {
    id: 4,
    name: "Thomas B.",
    rating: 5,
    text: "Espace moderne avec tout le confort nécessaire. Le café est excellent !",
    date: "Il y a 2 mois",
  },
  {
    id: 5,
    name: "Aïcha M.",
    rating: 5,
    text: "Idéal pour développer mon réseau professionnel. Événements intéressants.",
    date: "Il y a 1 semaine",
  },
  {
    id: 6,
    name: "Pierre R.",
    rating: 5,
    text: "Service client impeccable et tarifs transparents. Je recommande vivement !",
    date: "Il y a 1 mois",
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/googlelogo.png"
              alt="Google"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <H2>Ce que les coworkers pensent de l&apos;Open Café</H2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-2xl font-bold text-gray-900 ml-2">4.8</span>
            <span className="text-gray-600">sur 5</span>
          </div>
          <p className="text-lg text-gray-600">
            Basé sur {reviews.length} avis Google
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/google-favicon.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                  {review.name}
                </span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
          >
            Voir tous les avis Google
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
