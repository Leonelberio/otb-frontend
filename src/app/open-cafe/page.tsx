import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Open Café - Espaces de coworking",
  description:
    "Espace de coworking moderne à Lomé, Togo. Bureaux partagés, salles de réunion, espaces de travail flexibles et services complets pour entrepreneurs et freelances. Rejoignez notre communauté professionnelle.",
  keywords: [
    "coworking Lomé",
    "espace coworking Togo",
    "bureau partagé Lomé",
    "espace travail Togo",
    "bureau flexible Lomé",
    "salle réunion Togo",
    "espace professionnel Lomé",
    "bureau communautaire Togo",
    "espace travail collaboratif Lomé",
    "bureau moderne Togo",
  ],
  openGraph: {
    title: "Open Café - Espaces de coworking à Lomé, Togo",
    description:
      "Espace de coworking moderne à Lomé, Togo. Bureaux partagés, salles de réunion et espaces de travail flexibles pour entrepreneurs et freelances.",
    url: "https://openthebox.tg/open-cafe",
    images: [
      {
        url: "/og-open-cafe.jpg",
        width: 1200,
        height: 630,
        alt: "Open Café - Espace de coworking à Lomé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Café - Espaces de coworking à Lomé, Togo",
    description:
      "Espace de coworking moderne à Lomé, Togo. Bureaux partagés et espaces de travail flexibles.",
    images: ["/og-open-cafe.jpg"],
  },
  alternates: {
    canonical: "/open-cafe",
  },
};

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
