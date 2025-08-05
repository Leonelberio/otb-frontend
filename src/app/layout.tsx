import type { Metadata } from "next";
import "./globals.css";
import "../styles/fonts.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import QueryProvider from "@/components/providers/QueryProvider";

export const metadata: Metadata = {
  title: {
    default:
      "Open The Box - Location d'espaces & Domiciliation d'entreprise à Lomé, Togo",
    template: "%s | Open The Box",
  },
  description:
    "Location d'espaces professionnels et domiciliation d'entreprise à Lomé, Togo. Bureaux, salles de réunion, espaces de coworking et services de domiciliation. Solutions complètes pour entrepreneurs et entreprises.",
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
  authors: [{ name: "Open The Box" }],
  creator: "Open The Box",
  publisher: "Open The Box",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://openthebox.tg"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://openthebox.tg",
    siteName: "Open The Box",
    title:
      "Open The Box - Location d'espaces & Domiciliation d'entreprise à Lomé, Togo",
    description:
      "Location d'espaces professionnels et domiciliation d'entreprise à Lomé, Togo. Bureaux, salles de réunion, espaces de coworking et services de domiciliation.",
    images: [
      {
        url: "/og-image.jpg",
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
      "Location d'espaces professionnels et domiciliation d'entreprise à Lomé, Togo. Bureaux, salles de réunion, espaces de coworking et services de domiciliation.",
    images: ["/og-image.jpg"],
    creator: "@openthebox_tg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8ABF37" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Open The Box",
              "url": "https://openthebox.tg",
              "logo": "https://openthebox.tg/logo.png",
              "description":
                "Location d'espaces professionnels et domiciliation d'entreprise à Lomé, Togo",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lomé",
                "addressCountry": "TG",
                "addressRegion": "Maritime",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+228-XX-XX-XX-XX",
                "contactType": "customer service",
                "areaServed": "TG",
                "availableLanguage": "French",
              },
              "sameAs": [
                "https://www.facebook.com/openthebox",
                "https://www.linkedin.com/company/openthebox",
                "https://twitter.com/openthebox_tg",
              ],
            }),
          }}
        />
      </head>
      <body className="font-metropolis antialiased">
        <QueryProvider>
          <Header />
          {children}
          <Footer />
          <Chatbot />
        </QueryProvider>
      </body>
    </html>
  );
}
