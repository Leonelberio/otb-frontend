"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import SafeText from "@/components/ui/SafeText";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  featured_image: string;
  categories: string[];
  read_time: number;
  slug: string;
}

// Mock data - replace with actual WordPress API calls
const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Les tendances du coworking au Togo en 2024",
    excerpt:
      "Découvrez comment les espaces de coworking évoluent au Togo et quelles sont les nouvelles attentes des professionnels.",
    content: "Le coworking connaît une croissance fulgurante au Togo...",
    date: "2024-01-15",
    author: "Équipe Open The Box",
    featured_image: "/reunion-d-affaires.jpg",
    categories: ["Coworking", "Tendances"],
    read_time: 5,
    slug: "tendances-coworking-togo-2024",
  },
  {
    id: 2,
    title: "Comment choisir le bon espace de réunion pour votre entreprise",
    excerpt:
      "Guide complet pour sélectionner l'espace de réunion idéal selon vos besoins et votre budget.",
    content:
      "Choisir le bon espace de réunion est crucial pour le succès de vos réunions...",
    date: "2024-01-10",
    author: "Équipe Open The Box",
    featured_image: "/reunion-d-affaires.jpg",
    categories: ["Conseils", "Réunions"],
    read_time: 7,
    slug: "choisir-espace-reunion-entreprise",
  },
  {
    id: 3,
    title: "L'impact du télétravail sur la demande d'espaces professionnels",
    excerpt:
      "Analyse de l'évolution des besoins en espaces de travail suite à la généralisation du télétravail.",
    content: "Le télétravail a transformé la façon dont nous travaillons...",
    date: "2024-01-05",
    author: "Équipe Open The Box",
    featured_image: "/reunion-d-affaires.jpg",
    categories: ["Télétravail", "Analyse"],
    read_time: 6,
    slug: "impact-teletravail-espaces-professionnels",
  },
  {
    id: 4,
    title: "Les avantages fiscaux de la domiciliation d'entreprise",
    excerpt:
      "Tout ce que vous devez savoir sur les avantages fiscaux liés à la domiciliation d'entreprise au Togo.",
    content:
      "La domiciliation d'entreprise offre plusieurs avantages fiscaux...",
    date: "2023-12-28",
    author: "Équipe Open The Box",
    featured_image: "/reunion-d-affaires.jpg",
    categories: ["Domiciliation", "Fiscalité"],
    read_time: 8,
    slug: "avantages-fiscaux-domiciliation-entreprise",
  },
  {
    id: 5,
    title: "Organiser un événement professionnel réussi : guide pratique",
    excerpt:
      "Conseils et bonnes pratiques pour organiser un événement professionnel mémorable.",
    content:
      "Organiser un événement professionnel nécessite une planification minutieuse...",
    date: "2023-12-20",
    author: "Équipe Open The Box",
    featured_image: "/reunion-d-affaires.jpg",
    categories: ["Événements", "Conseils"],
    read_time: 10,
    slug: "organiser-evenement-professionnel-reussi",
  },
  {
    id: 6,
    title: "Le futur des espaces de travail : innovations et technologies",
    excerpt:
      "Découvrez les technologies qui façonnent l'avenir des espaces de travail modernes.",
    content:
      "Les espaces de travail évoluent rapidement grâce aux nouvelles technologies...",
    date: "2023-12-15",
    author: "Équipe Open The Box",
    featured_image: "/reunion-d-affaires.jpg",
    categories: ["Innovation", "Technologie"],
    read_time: 9,
    slug: "futur-espaces-travail-innovations-technologies",
  },
];

// Function to fetch posts from WordPress
const fetchPostsFromWordPress = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch("/api/wordpress");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return mockBlogPosts;
  }
};

export default function BlogListingSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Use TanStack Query for caching
  const {
    data: posts = mockBlogPosts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchPostsFromWordPress,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  // Categories from posts
  const categories = Array.from(
    new Set(posts.flatMap((post: BlogPost) => post.categories))
  );

  // Filter posts based on search and category
  const filteredPosts = posts.filter((post: BlogPost) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      !selectedCategory ||
      post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Toutes les catégories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des articles...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 text-lg">
              Erreur lors du chargement des articles.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="mt-4 text-white"
              style={{ backgroundColor: "#8ABF37" }}
            >
              Réessayer
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post: BlogPost) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/reunion-d-affaires.jpg"; // Fallback image
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    {post.categories.map((category: string, index: number) => (
                      <span
                        key={`${post.id}-${category}-${index}`}
                        className="inline-block px-3 py-1 text-white text-xs font-medium rounded-full mr-2"
                        style={{ backgroundColor: "#8ABF37" }}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <SafeText as="span">{post.title}</SafeText>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    <SafeText as="span">{post.excerpt}</SafeText>
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.read_time} min
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button
                    variant="outline"
                    className="w-full border-2 hover:bg-gray-50 transition-all duration-200"
                    style={{ borderColor: "#8ABF37", color: "#8ABF37" }}
                    onClick={() =>
                      (window.location.href = `/blog/${post.slug}`)
                    }
                  >
                    Lire l&apos;article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && !error && filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Aucun article trouvé pour votre recherche.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-white"
              style={{ backgroundColor: "#8ABF37" }}
            >
              Voir tous les articles
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {!isLoading && !error && filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <Button
              className="text-white px-8 py-4 text-lg hover:opacity-90"
              style={{ backgroundColor: "#8ABF37" }}
            >
              Charger plus d&apos;articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
