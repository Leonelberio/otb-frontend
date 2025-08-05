import HeroSection from "@/components/open-cafe/HeroSection";
import StatsSection from "@/components/open-cafe/StatsSection";
import ProblemSolutionSection from "@/components/open-cafe/ProblemSolutionSection";
import PropertiesListingSection from "@/components/open-cafe/PropertiesListingSection";
import PricingSection from "@/components/open-cafe/PricingSection";
import FacilitiesSection from "@/components/open-cafe/FacilitiesSection";
import AdaptedSpacesSection from "@/components/open-cafe/AdaptedSpacesSection";
import VisitSection from "@/components/open-cafe/VisitSection";
import QuoteSection from "@/components/open-cafe/QuoteSection";
import GoogleReviewsSection from "@/components/open-cafe/GoogleReviewsSection";
import ContactFAQSection from "@/components/ContactFAQSection";
import ProgressBar from "@/components/ProgressBar";
import BackToTop from "@/components/BackToTop";

export default function OpenCafePage() {
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
