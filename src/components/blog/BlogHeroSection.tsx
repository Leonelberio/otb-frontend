export default function BlogHeroSection() {
  return (
    <section className="relative min-h-[400px] flex items-center bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/reunion-d-affaires.jpg')" }}
      ></div>
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Blog Open The Box
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Actualités, conseils et tendances sur les espaces professionnels
              au Togo
            </p>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <span>📰 Actualités</span>
              <span>•</span>
              <span>💼 Conseils business</span>
              <span>•</span>
              <span>🏢 Immobilier</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
