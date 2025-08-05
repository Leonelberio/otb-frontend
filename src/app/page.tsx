import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import PropertiesListingSection from "@/components/PropertiesListingSection";
import PricingSection from "@/components/PricingSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import AdaptedSpacesSection from "@/components/AdaptedSpacesSection";
import VisitSection from "@/components/VisitSection";
import QuoteSection from "@/components/QuoteSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ContactFAQSection from "@/components/ContactFAQSection";
import ProgressBar from "@/components/ProgressBar";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main>
      <ProgressBar />
      <HeroSection />
      <StatsSection />
      <ProblemSolutionSection />
      <PropertiesListingSection />
      <PricingSection />
      <FacilitiesSection />
      <AdaptedSpacesSection />
      <VisitSection />
      <QuoteSection />
      <GoogleReviewsSection />
      <ContactFAQSection />
      <BackToTop />
    </main>
  );
}
