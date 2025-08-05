import { NextResponse } from "next/server";

interface GoogleReview {
  author_name: string;
  rating: number;
  time: number;
  text: string;
}

// Fallback reviews data (real reviews from Open The Box)
const fallbackReviews = [
  {
    id: "1",
    author: "Parfait Toke",
    avatar: "PT",
    rating: 5,
    date: "il y a 9 mois",
    text: "Emplacement idéal si vous voulez faire un évènement ou un meeting entre communautés. Personnellement je suis fier d'avoir organisé le Daytona Developers Club Tour à Open The box",
    verified: true,
  },
  {
    id: "2",
    author: "Kokou François AGBAGOU",
    avatar: "KF",
    rating: 5,
    date: "il y a 4 mois",
    text: "C'est un endroit très cool et sympa que je recommande vivement à toutes ces personnes qui aimes là découverte",
    verified: true,
  },
  {
    id: "3",
    author: "Tido BraxomAx ECHICAFA",
    avatar: "TB",
    rating: 5,
    date: "il y a 2 mois",
    text: "Cadre professionnel et calme bien situé pour les rencontres et formations.",
    verified: true,
  },
  {
    id: "4",
    author: "Gabriel Marlon",
    avatar: "GM",
    rating: 5,
    date: "il y a un an",
    text: "L'emplacement est stratégique ; c'est bien positionné ; accès facile. Pour toutes les fois ou j'ai été à une conférence a OTB ; j'étais dans un confort parfait ; le cadre est très conviviale. Félicitations",
    verified: true,
  },
  {
    id: "5",
    author: "Mélissa Akemakou",
    avatar: "MA",
    rating: 5,
    date: "il y a un an",
    text: "J'ai ouvert i l é Consulting, mon cabinet conseil en RSE depuis le 10 octobre 2023. J'ai le plaisir d'être herbergée dans les locaux Open the box ! En plus de pouvoir beneficier de tarifs preferentiels pour des bureaux et leurs salles de...",
    verified: true,
  },
  {
    id: "6",
    author: "fabrice kponsou",
    avatar: "FK",
    rating: 5,
    date: "il y a 2 ans",
    text: "La salle de conférence est nickel, gros clim de 1,5 M 😅, grande TV pour des présentations... franchement c'est nickel. Mais wallah le haut, 😍 j'adore. Très sympa. Je recommande fortement.",
    verified: true,
  },
];

export async function GET() {
  try {
    // Check if API credentials are configured
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;

    if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
      // Return fallback data when API credentials are not configured
      console.log("API credentials not configured, returning fallback reviews");
      return NextResponse.json({
        reviews: fallbackReviews,
        averageRating: 5.0,
        totalReviews: 6,
      });
    }

    // Fetch place details including reviews from Google API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Google reviews");
    }

    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error(`Google API error: ${data.status}`);
    }

    const place = data.result;
    const reviews = place.reviews || [];
    const averageRating = place.rating || 0;
    const totalReviews = place.user_ratings_total || 0;

    // If no reviews from API, return fallback data
    if (reviews.length === 0) {
      return NextResponse.json({
        reviews: fallbackReviews,
        averageRating: 5.0,
        totalReviews: 6,
      });
    }

    // Transform Google reviews to our format
    const transformedReviews = reviews.map(
      (review: GoogleReview, index: number) => ({
        id: `google-${index}`,
        author: review.author_name,
        avatar: review.author_name
          .split(" ")
          .map((n: string) => n[0])
          .join("")
          .toUpperCase(),
        rating: review.rating,
        date: new Date(review.time * 1000).toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        text: review.text,
        verified: true, // Google reviews are verified by default
      })
    );

    return NextResponse.json({
      reviews: transformedReviews,
      averageRating,
      totalReviews,
    });
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    // Return fallback data on error
    return NextResponse.json({
      reviews: fallbackReviews,
      averageRating: 5.0,
      totalReviews: 6,
    });
  }
}
