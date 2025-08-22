"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
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

interface RelatedPostsSectionProps {
  currentPostSlug: string;
  currentPostCategories: string[];
}

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
    return [];
  }
};

export default function RelatedPostsSection({
  currentPostSlug,
  currentPostCategories,
}: RelatedPostsSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use TanStack Query for caching
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchPostsFromWordPress,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  // Filter related posts (same categories, exclude current post)
  const relatedPosts = posts
    .filter(
      (post: BlogPost) =>
        post.slug !== currentPostSlug &&
        post.categories.some((category) =>
          currentPostCategories.includes(category)
        )
    )
    .slice(0, 6); // Limit to 6 related posts

  // If no related posts by category, show recent posts
  const recentPosts = posts
    .filter((post: BlogPost) => post.slug !== currentPostSlug)
    .slice(0, 6);

  const displayPosts = relatedPosts.length > 0 ? relatedPosts : recentPosts;
  const postsPerSlide = 3;
  const totalSlides = Math.ceil(displayPosts.length / postsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading || displayPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl text-gray-900 mb-4"
            style={{
              fontWeight: 600,
              lineHeight: "40px",
              letterSpacing: "-3px",
            }}
          >
            {relatedPosts.length > 0
              ? "Articles similaires"
              : "Articles récents"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{
                lineHeight: "30px",
                letterSpacing: "-1px",
              }}>
            {relatedPosts.length > 0
              ? "Découvrez d'autres articles sur des sujets similaires"
              : "Découvrez nos derniers articles"}
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50"
                style={{ borderColor: "#8BBE3D", color: "#8BBE3D" }}
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50"
                style={{ borderColor: "#8BBE3D", color: "#8BBE3D" }}
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </>
          )}

          {/* Posts Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayPosts
                      .slice(
                        slideIndex * postsPerSlide,
                        (slideIndex + 1) * postsPerSlide
                      )
                      .map((post: BlogPost) => (
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
                                target.src = "/reunion-d-affaires.jpg";
                              }}
                            />
                            <div className="absolute top-4 left-4">
                              {post.categories
                                .slice(0, 2)
                                .map((category: string, index: number) => (
                                  <span
                                    key={`${post.id}-${category}-${index}`}
                                    className="inline-block px-3 py-1 text-white text-xs font-medium rounded-full mr-2"
                                    style={{ backgroundColor: "#8BBE3D" }}
                                  >
                                    {category}
                                  </span>
                                ))}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                              <SafeText as="span">{post.title}</SafeText>
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                              <SafeText as="span">{post.excerpt}</SafeText>
                            </p>

                            {/* Meta Information */}
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {formatDate(post.date)}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {post.read_time} min
                                </div>
                              </div>
                            </div>

                            {/* Read More Button */}
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-2 hover:bg-gray-50 transition-all duration-200 text-sm"
                              style={{
                                borderColor: "#8BBE3D",
                                color: "#8BBE3D",
                              }}
                              onClick={() =>
                                (window.location.href = `/blog/${post.slug}`)
                              }
                            >
                              Lire l&apos;article
                            </Button>
                          </div>
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  style={{
                    backgroundColor:
                      index === currentSlide ? "#8BBE3D" : undefined,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
