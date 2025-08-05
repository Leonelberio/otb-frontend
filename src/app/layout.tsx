import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/fonts.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open The Box - Location d'espace & Domiciliation",
  description:
    "Location d'espaces professionnels et domiciliation d'entreprise à Lomé, Togo. Bureaux, salles de réunion, espaces de coworking et services de domiciliation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-metropolis antialiased">
        <Header />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
