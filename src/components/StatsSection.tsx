import { Building2, Calendar, Star } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="mb-4 p-3 rounded-full bg-green-100">
              <Building2 className="w-8 h-8" style={{ color: "#8ABF37" }} />
            </div>
            <div
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: "#8ABF37" }}
            >
              25+
            </div>
            <div className="text-gray-600 text-lg">espaces</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 p-3 rounded-full bg-green-100">
              <Calendar className="w-8 h-8" style={{ color: "#8ABF37" }} />
            </div>
            <div
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: "#8ABF37" }}
            >
              850+
            </div>
            <div className="text-gray-600 text-lg">locations</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mb-4 p-3 rounded-full bg-green-100">
              <Star className="w-8 h-8" style={{ color: "#8ABF37" }} />
            </div>
            <div
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: "#8ABF37" }}
            >
              4,6 sur 5
            </div>
            <div className="text-gray-600 text-lg">avis sur Google</div>
          </div>
        </div>
      </div>
    </section>
  );
}
