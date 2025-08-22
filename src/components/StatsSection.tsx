import { Building2, Calendar, Star } from "lucide-react";
import Image from "next/image";

export default function StatsSection() {
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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="mb-4 p-3 rounded-full bg-green-100">
              <Building2 className="w-8 h-8" style={{ color: "#8BBE3D" }} />
            </div>
            <div
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2"
              style={{ color: "#8BBE3D" }}
            >
              25+
            </div>
            <div className="text-gray-600 text-sm md:text-lg">espaces</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 p-3 rounded-full bg-green-100">
              <Calendar className="w-8 h-8" style={{ color: "#8BBE3D" }} />
            </div>
            <div
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2"
              style={{ color: "#8BBE3D" }}
            >
              850+
            </div>
            <div className="text-gray-600 text-sm md:text-lg">locations</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-xl p-3 md:p-6 lg:p-8 shadow-sm w-full">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-4 text-center">
                EXCELLENT
              </h3>

              {/* Stars */}
              <div className="flex justify-center mb-2 md:mb-4">
                {renderStars(5)}
              </div>

              <p className="text-gray-600 mb-3 md:mb-6 text-center text-xs md:text-base">
                Basée sur 6 avis
              </p>

              {/* Google Logo */}
              <div className="flex justify-center">
                <Image
                  src="/googlelogo.png"
                  alt="Google"
                  width={120}
                  height={36}
                  className="h-4 md:h-6 lg:h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
