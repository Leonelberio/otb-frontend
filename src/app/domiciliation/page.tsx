import HeroSection from "@/components/domiciliation/HeroSection";
import CustomerLogosSection from "@/components/domiciliation/CustomerLogosSection";
import ProblemSolutionSection from "@/components/domiciliation/ProblemSolutionSection";
import ServicesSection from "@/components/domiciliation/ServicesSection";
import StrategicLocationSection from "@/components/domiciliation/StrategicLocationSection";
import BusinessIntelligenceSection from "@/components/domiciliation/BusinessIntelligenceSection";
import ProfessionalSecretariatSection from "@/components/domiciliation/ProfessionalSecretariatSection";
import CVDatabaseSection from "@/components/domiciliation/CVDatabaseSection";
import PartnerNetworkSection from "@/components/domiciliation/PartnerNetworkSection";
import QuoteSection from "@/components/domiciliation/QuoteSection";
import TestimonialsSection from "@/components/domiciliation/TestimonialsSection";
import ContactFAQSection from "@/components/ContactFAQSection";
import ProgressBar from "@/components/ProgressBar";
import BackToTop from "@/components/BackToTop";

export default function DomiciliationPage() {
  return (
    <main>
      <ProgressBar />
      <HeroSection />
      <CustomerLogosSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <StrategicLocationSection />
      <BusinessIntelligenceSection />
      <ProfessionalSecretariatSection />
      <CVDatabaseSection />
      <PartnerNetworkSection />
      <QuoteSection />
      <TestimonialsSection />
      <ContactFAQSection />
      <BackToTop />
    </main>
  );
}
