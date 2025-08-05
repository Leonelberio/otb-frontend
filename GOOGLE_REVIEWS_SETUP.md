# Google Reviews Integration Setup

## Overview
The "Ce que les professionnels pensent de nos espaces" section now fetches real Google reviews using the Google Places API.

## Free Options (No Credit Card Required)

### Option 1: Google Places API Free Tier
- **Free Quota**: 28,500 requests per month
- **No Credit Card**: Required for billing but won't charge you
- **Setup**: Follow the standard setup below

### Option 2: Manual Review Import (Recommended for Free)
If you don't want to use the API, you can manually import reviews:

1. **Go to your Google Business Profile**
2. **Copy reviews manually** from Google Maps
3. **Update the dummy data** in the component

### Option 3: Use Existing Reviews
The component already has realistic dummy data that you can customize with your actual reviews.

## Setup Instructions (If Using API)

### 1. Get Google Places API Key (Free Tier)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Places API" service
4. Create credentials (API Key)
5. **Important**: Set up billing (required but won't charge you)
6. Restrict the API key to your domain for security

### 2. Find Your Place ID
1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "Open The Box" in Lomé, Togo
3. Copy the Place ID from the results

### 3. Environment Variables
Create a `.env.local` file in your project root with:

```env
GOOGLE_PLACES_API_KEY=your_google_places_api_key_here
GOOGLE_PLACE_ID=your_open_the_box_place_id_here
```

## Manual Review Import (No API Needed)

### Step 1: Get Your Reviews
1. Go to [Google Maps](https://maps.google.com)
2. Search for "Open The Box Lomé"
3. Click on your business listing
4. Go to the "Reviews" tab
5. Copy the reviews you want to display

### Step 2: Update Component Data
Edit `src/components/GoogleReviewsSection.tsx` and replace the dummy reviews with your real ones:

```typescript
// Replace this section with your real reviews
setReviews([
  {
    id: "1",
    author: "Real Customer Name",
    avatar: "RC", // First letters of their name
    rating: 5,
    date: "15 Janvier 2024",
    text: "Your actual review text here...",
    verified: true,
  },
  // Add more real reviews...
]);
```

### Step 3: Update Average Rating
```typescript
setAverageRating(4.8); // Your actual average rating
setTotalReviews(25); // Your actual total number of reviews
```

## Features
- ✅ **Real Google Reviews**: Fetches actual reviews from Google (with API)
- ✅ **Manual Import**: Option to manually add real reviews (no API needed)
- ✅ **Fallback Data**: Shows dummy data if API fails
- ✅ **Loading States**: Shows loading spinner while fetching
- ✅ **Error Handling**: Graceful error handling with fallback
- ✅ **Responsive Design**: Works on all screen sizes

## API Endpoint
- **Route**: `/api/google-reviews`
- **Method**: GET
- **Response**: JSON with reviews, average rating, and total count

## Fallback Behavior
If the Google API is not configured or fails:
- Shows dummy reviews data
- Displays error message
- Continues to function normally

## Security Notes
- API key should be restricted to your domain
- Place ID is public information (safe to expose)
- Reviews are fetched server-side for security

## Recommendation
For a free solution without credit card requirements, use **Option 2: Manual Review Import**. This gives you full control over which reviews to display and doesn't require any API setup. 