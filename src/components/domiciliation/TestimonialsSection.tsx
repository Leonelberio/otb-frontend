import { Star } from "lucide-react";

const testimonials = [
  {
    name: "A. Kossi",
    text: "Service rapide et fiable pour la domiciliation de mon entreprise. Je recommande !",
    rating: 5,
  },
  {
    name: "M. Yao",
    text: "L&apos;équipe m&apos;a accompagné dans toutes les démarches. Très satisfait !",
    rating: 5,
  },
  {
    name: "S. Amivi",
    text: "Adresse professionnelle obtenue en 24h, parfait pour lancer mon activité.",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
              className="text-4xl md:text-5xl text-gray-900 mb-6"
              style={{
                fontWeight: 600,
                lineHeight: "40px",
                letterSpacing: "-3px"
              }}
            >
            Ils nous font confiance
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-8 shadow-sm text-left"
            >
              <div className="flex items-center mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="font-semibold text-green-700">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
