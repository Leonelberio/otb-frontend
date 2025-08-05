import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Domiciliation d'entreprise",
  description:
    "Services de domiciliation d'entreprise à Lomé, Togo. Adresse légale, gestion administrative, secrétariat professionnel et support complet pour votre entreprise. Solutions sur mesure pour entrepreneurs.",
  keywords: [
    "domiciliation entreprise Togo",
    "domiciliation commerciale Lomé",
    "adresse légale entreprise Togo",
    "gestion administrative Lomé",
    "secrétariat professionnel Togo",
    "domiciliation juridique Lomé",
    "services entreprise Togo",
    "support administratif Lomé",
    "domiciliation fiscale Togo",
    "bureau virtuel Lomé",
  ],
  openGraph: {
    title: "Domiciliation d'entreprise - Open The Box à Lomé, Togo",
    description:
      "Services de domiciliation d'entreprise à Lomé, Togo. Adresse légale, gestion administrative, secrétariat professionnel et support complet pour votre entreprise.",
    url: "https://openthebox.tg/domiciliation",
    images: [
      {
        url: "/og-domiciliation.jpg",
        width: 1200,
        height: 630,
        alt: "Domiciliation d'entreprise - Open The Box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domiciliation d'entreprise - Open The Box à Lomé, Togo",
    description:
      "Services de domiciliation d'entreprise à Lomé, Togo. Adresse légale, gestion administrative et support complet.",
    images: ["/og-domiciliation.jpg"],
  },
  alternates: {
    canonical: "/domiciliation",
  },
};

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
