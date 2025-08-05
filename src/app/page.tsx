import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import PropertiesListingSection from "@/components/PropertiesListingSection";
import PricingSection from "@/components/PricingSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import AdaptedSpacesSection from "@/components/AdaptedSpacesSection";
import VisitSection from "@/components/VisitSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProblemSolutionSection />
      <PropertiesListingSection />
      <PricingSection />
      <FacilitiesSection />
      <AdaptedSpacesSection />
      <VisitSection />
      <TestimonialsSection />
    </main>
  );
}
