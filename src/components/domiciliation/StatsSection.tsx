import { Building2, Users, Star, FileText } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#8ABF37" }}
              >
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
            <p className="text-gray-600">Entreprises domiciliées</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#8ABF37" }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
            <p className="text-gray-600">Taux de satisfaction</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#8ABF37" }}
              >
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">4,8/5</h3>
            <p className="text-gray-600">Note moyenne clients</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#8ABF37" }}
              >
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">24h</h3>
            <p className="text-gray-600">Délai de traitement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
