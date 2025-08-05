import type { Metadata } from "next";
import BlogHeroSection from "@/components/blog/BlogHeroSection";
import BlogListingSection from "@/components/blog/BlogListingSection";
import ProgressBar from "@/components/ProgressBar";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog Open The Box - Actualités, conseils et guides sur les espaces professionnels, le coworking et la domiciliation d'entreprise à Lomé, Togo. Découvrez nos articles experts.",
  keywords: [
    "blog coworking Lomé",
    "actualités espaces professionnels Togo",
    "conseils entreprise Lomé",
    "guides coworking Togo",
    "blog domiciliation Lomé",
    "actualités bureaux Togo",
    "conseils entrepreneurs Lomé",
    "blog espaces travail Togo",
    "actualités Open The Box Lomé",
    "conseils professionnels Togo",
  ],
  openGraph: {
    title:
      "Blog Open The Box - Actualités et conseils professionnels à Lomé, Togo",
    description:
      "Blog Open The Box - Actualités, conseils et guides sur les espaces professionnels, le coworking et la domiciliation d'entreprise à Lomé, Togo.",
    url: "https://openthebox.tg/blog",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Open The Box - Actualités professionnelles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Blog Open The Box - Actualités et conseils professionnels à Lomé, Togo",
    description:
      "Blog Open The Box - Actualités, conseils et guides sur les espaces professionnels.",
    images: ["/og-blog.jpg"],
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main>
      <ProgressBar />
      <BlogHeroSection />
      <BlogListingSection />
      <BackToTop />
    </main>
  );
}
