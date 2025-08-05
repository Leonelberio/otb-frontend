import { NextResponse } from "next/server";

interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  slug: string;
}

interface WordPressMedia {
  id: number;
  source_url: string;
}

interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
}

interface WordPressUser {
  id: number;
  name: string;
}

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

export async function GET() {
  try {
    const WORDPRESS_URL = process.env.WORDPRESS_URL;

    if (!WORDPRESS_URL) {
      // Return mock data if WordPress URL is not configured
      const mockPosts: BlogPost[] = [
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
          title:
            "Comment choisir le bon espace de réunion pour votre entreprise",
          excerpt:
            "Guide complet pour sélectionner l&apos;espace de réunion idéal selon vos besoins et votre budget.",
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
          title:
            "L&apos;impact du télétravail sur la demande d&apos;espaces professionnels",
          excerpt:
            "Analyse de l&apos;évolution des besoins en espaces de travail suite à la généralisation du télétravail.",
          content:
            "Le télétravail a transformé la façon dont nous travaillons...",
          date: "2024-01-05",
          author: "Équipe Open The Box",
          featured_image: "/reunion-d-affaires.jpg",
          categories: ["Télétravail", "Analyse"],
          read_time: 6,
          slug: "impact-teletravail-espaces-professionnels",
        },
      ];

      return NextResponse.json({ posts: mockPosts });
    }

    // Fetch posts from WordPress
    const postsResponse = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed&per_page=10`
    );

    if (!postsResponse.ok) {
      throw new Error("Failed to fetch WordPress posts");
    }

    const posts: WordPressPost[] = await postsResponse.json();

    // Fetch categories
    const categoriesResponse = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/categories`
    );
    const categories: WordPressCategory[] = (await categoriesResponse.ok)
      ? await categoriesResponse.json()
      : [];

    // Fetch users
    const usersResponse = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/users`);
    const users: WordPressUser[] = (await usersResponse.ok)
      ? await usersResponse.json()
      : [];

    // Transform WordPress data to our format
    const transformedPosts: BlogPost[] = await Promise.all(
      posts.map(async (post) => {
        // Get author name
        const author = users.find((user) => user.id === post.author);

        // Get categories
        const postCategories = categories
          .filter((cat) => post.categories.includes(cat.id))
          .map((cat) => cat.name);

        // Get featured image URL
        let featuredImage = "/reunion-d-affaires.jpg"; // Default fallback
        if (post.featured_media > 0) {
          try {
            const mediaResponse = await fetch(
              `${WORDPRESS_URL}/wp-json/wp/v2/media/${post.featured_media}`
            );
            if (mediaResponse.ok) {
              const media: WordPressMedia = await mediaResponse.json();
              featuredImage = media.source_url;
            }
          } catch (error) {
            console.error(
              `Error fetching media ${post.featured_media}:`,
              error
            );
          }
        }

        // Calculate read time (rough estimate: 200 words per minute)
        const wordCount = post.content.rendered
          .replace(/<[^>]*>/g, "")
          .split(" ").length;
        const readTime = Math.ceil(wordCount / 200);

        return {
          id: post.id,
          title: decodeHtmlEntities(
            post.title.rendered.replace(/<[^>]*>/g, "")
          ),
          excerpt: decodeHtmlEntities(
            post.excerpt.rendered.replace(/<[^>]*>/g, "")
          ),
          content: decodeHtmlEntities(post.content.rendered),
          date: post.date,
          author: author?.name || "Équipe Open The Box",
          featured_image: featuredImage,
          categories: postCategories.length > 0 ? postCategories : ["Général"],
          read_time: readTime,
          slug: post.slug,
        };
      })
    );

    return NextResponse.json({ posts: transformedPosts });
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);

    // Return mock data as fallback
    const mockPosts: BlogPost[] = [
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
    ];

    return NextResponse.json({ posts: mockPosts });
  }
}
