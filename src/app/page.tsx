import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Découvrez Open The Box, leader de la location d'espaces professionnels et de la domiciliation d'entreprise à Lomé, Togo. Bureaux, salles de réunion, espaces de coworking et services complets pour entrepreneurs.",
  keywords: [
    "location bureau Lomé",
    "salle réunion Togo",
    "coworking Lomé",
    "domiciliation entreprise Togo",
    "espace professionnel Lomé",
    "bureau partagé Togo",
    "salle conférence Lomé",
    "espace coworking Togo",
    "domiciliation commerciale Lomé",
    "bureau virtuel Togo",
  ],
  openGraph: {
    title:
      "Open The Box - Location d'espaces & Domiciliation d'entreprise à Lomé, Togo",
    description:
      "Découvrez Open The Box, leader de la location d'espaces professionnels et de la domiciliation d'entreprise à Lomé, Togo. Bureaux, salles de réunion, espaces de coworking et services complets pour entrepreneurs.",
    url: "https://openthebox.tg",
    images: [
      {
        url: "/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Open The Box - Espaces professionnels à Lomé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Open The Box - Location d'espaces & Domiciliation d'entreprise à Lomé, Togo",
    description:
      "Découvrez Open The Box, leader de la location d'espaces professionnels et de la domiciliation d'entreprise à Lomé, Togo.",
    images: ["/og-homepage.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

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
