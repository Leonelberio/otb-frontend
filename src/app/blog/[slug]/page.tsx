import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";
import BackToTop from "@/components/BackToTop";
import SafeText from "@/components/ui/SafeText";
import RelatedPostsSection from "@/components/blog/RelatedPostsSection";

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

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Function to decode HTML entities
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&hellip;/g, "...")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&copy;/g, "©")
    .replace(/&reg;/g, "®")
    .replace(/&trade;/g, "™")
    .replace(/&nbsp;/g, " ")
    .replace(/&shy;/g, "")
    .replace(/&zwnj;/g, "")
    .replace(/&zwj;/g, "");
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(
      `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return null;
    }

    const posts = await response.json();

    if (!posts || posts.length === 0) {
      return null;
    }

    const post = posts[0];

    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = post.content.rendered
      .replace(/<[^>]*>/g, "")
      .split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    // Get categories
    const categoriesResponse = await fetch(
      `${process.env.WORDPRESS_URL}/wp-json/wp/v2/categories?post=${post.id}`
    );
    const categories = await categoriesResponse.json();
    const categoryNames = categories.map((cat: WordPressCategory) => cat.name);

    // Get author
    const authorResponse = await fetch(
      `${process.env.WORDPRESS_URL}/wp-json/wp/v2/users/${post.author}`
    );
    const author = await authorResponse.json();

    // Get featured image URL
    let featuredImage = "/reunion-d-affaires.jpg"; // Default fallback
    if (post.featured_media > 0) {
      try {
        const mediaResponse = await fetch(
          `${process.env.WORDPRESS_URL}/wp-json/wp/v2/media/${post.featured_media}`
        );
        if (mediaResponse.ok) {
          const media = await mediaResponse.json();
          featuredImage = media.source_url;
        }
      } catch (error) {
        console.error(`Error fetching media ${post.featured_media}:`, error);
      }
    }

    return {
      id: post.id,
      title: decodeHtmlEntities(post.title.rendered),
      excerpt: decodeHtmlEntities(
        post.excerpt.rendered.replace(/<[^>]*>/g, "")
      ), // Remove HTML tags
      content: decodeHtmlEntities(post.content.rendered),
      date: post.date,
      author: author.name || "Équipe Open The Box",
      featured_image: featuredImage,
      categories: categoryNames,
      read_time: readTime,
      slug: post.slug,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article non trouvé - Open The Box",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${post.title} - Blog Open The Box`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main>
      <ProgressBar />

      {/* Back to Blog Button */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Retour au blog</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${post.featured_image}')`,
            }}
          />
        </div>

        {/* Article Meta */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.read_time} min de lecture
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium rounded-full"
                style={{ backgroundColor: "#8BBE3D", color: "white" }}
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <SafeText as="span">{post.title}</SafeText>
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            <SafeText as="span">{post.excerpt}</SafeText>
          </p>
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Related Posts Section */}
      <RelatedPostsSection
        currentPostSlug={post.slug}
        currentPostCategories={post.categories}
      />

      <BackToTop />
    </main>
  );
}
