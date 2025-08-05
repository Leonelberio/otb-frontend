export default function ImageSection() {
  const companies = [
    "Brookfield",
    "JLL",
    "PARK",
    "ProUi",
    "BERKLEY",
    "Westchester",
  ];

  return (
    <section className="py-20">
      {/* Building Image */}
      <div className="mb-16">
        <div
          className="h-96 rounded-lg mx-4 md:mx-8 relative overflow-hidden"
          style={{ background: "linear-gradient(to right, #8ABF37, #6BA02E)" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
          {/* Placeholder for building image */}
          <div className="w-full h-full flex items-center justify-center text-white/50">
            <div className="text-center">
              <div className="text-6xl mb-4">🏢</div>
              <div className="text-lg">Modern Building Architecture</div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Logos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="text-center">
              <div className="text-gray-400 font-medium text-sm tracking-wide">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
