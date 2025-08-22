import { Newspaper, Briefcase, Building2 } from "lucide-react";
import { H1, P } from "../ui/typography";

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
            <H1>Blog Open The Box</H1>
            <P className="text-white/90 mb-8">
              Actualités, conseils et tendances sur les espaces professionnels
              au Togo
            </P>
            <div className="flex items-center justify-center space-x-4 text-white/80">
              <span className="flex items-center space-x-2">
                <Newspaper className="w-5 h-5" />
                <span>Actualités</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span>Conseils business</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-2">
                <Building2 className="w-5 h-5" />
                <span>Immobilier</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
