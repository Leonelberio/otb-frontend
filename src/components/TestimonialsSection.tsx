export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Témoignages de nos clients
        </h2>

        <div className="mb-12">
          <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
            &ldquo;Excellente expérience avec Open The Box ! J&apos;ai trouvé
            l&apos;espace parfait pour mes réunions d&apos;affaires. Réservation
            facile, espaces bien équipés et tarifs transparents. Je recommande
            vivement !&rdquo;
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#8ABF37" }}
            >
              <span className="text-white text-2xl">👨</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Koffi Mensah</div>
              <div className="text-gray-600 text-sm">Entrepreneur</div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#8ABF37" }}
          ></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
